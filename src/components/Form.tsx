import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { supabase } from '../lib/supabase'

const schema = yup.object({
  firstName: yup.string().required('El nombre es obligatorio'),
  lastName: yup.string().required('El apellido es obligatorio'),
  email: yup.string().email('Email inválido').required('El email es obligatorio'),
})

type FormData = yup.InferType<typeof schema>

export default function Form() {
  const { t } = useTranslation()

  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  
  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.from('subscribers').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email.toLowerCase(),
    })

    if (error) {
      if ((error as any).code === '23505') {
        alert(t('text.registerEmail'))
      } else {
        alert(t('text.errorRegistering:') + error.message)
      }
    } else {
      alert(t('text.successful'))
      reset()
    }
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 flex w-full max-w-3xl flex-col items-center md:flex-col md:gap-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div>
            <input
              type="text"
              placeholder={t('text.firstName')}
              autoComplete="given-name"
              className="border-gold w-32 rounded-xl border bg-transparent px-2 py-0.5 text-center text-sm text-white placeholder:text-xs focus:ring-2 focus:ring-white/60 focus:outline-none sm:text-base sm:placeholder:text-sm md:w-56 md:px-3 md:py-2 md:text-lg md:placeholder:text-base lg:text-xl lg:placeholder:text-lg"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder={t('text.lastName')}
              autoComplete="family-name"
              className="border-gold w-32 rounded-xl border bg-transparent px-2 py-0.5 text-center text-sm text-white placeholder:text-xs focus:ring-2 focus:ring-white/60 focus:outline-none sm:text-base sm:placeholder:text-sm md:w-56 md:px-3 md:py-2 md:text-lg md:placeholder:text-base lg:text-xl lg:placeholder:text-lg"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder={t('text.email')}
              autoComplete="email"
              className="border-gold w-32 rounded-xl border bg-transparent px-2 py-0.5 text-center text-sm text-white placeholder:text-xs focus:ring-2 focus:ring-white/60 focus:outline-none sm:text-base sm:placeholder:text-sm md:w-56 md:px-3 md:py-2 md:text-lg md:placeholder:text-base lg:text-xl lg:placeholder:text-lg"
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gold mt-4 w-23 rounded-md border border-black text-center text-xs font-bold text-black md:mt-0.5 md:w-40 md:py-2 md:text-base"
        >
          {isSubmitting ? (t('text.send')) : t('text.btmRegister')}
        </button>
      </form>
    </div>
  )
}
