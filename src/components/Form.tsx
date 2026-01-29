import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { supabase } from '../lib/supabase'
import { useState } from 'react'
import Modal from './Modal'

const getSchema = (t: any) =>
  yup.object({
    firstName: yup.string().required(t('text.requiredName')),
    lastName: yup.string().required(t('text.requiredLastName')),
    email: yup
      .string()
      .email(t('text.invalidEmail'))
      .required(t('text.requiredEmail')),
  })


type FormData = {
  firstName: string
  lastName: string
  email: string
}


export default function Form() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalDescription, setModalDescription] = useState('')

  const openModal = (title: string, description: string) => {
    setModalTitle(title)
    setModalDescription(description)
    setModalOpen(true)
  }

  const { t } = useTranslation()
  const schema = getSchema(t)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    const email = data.email.toLowerCase()

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password: crypto.randomUUID(),
    })

    console.log(data, 'esto es data')

    if (authError) {
      openModal(t('modal.genericErrorTitle'), t('modal.genericErrorDescription'))
      return
    }

    if (authData.user && authData.user.identities?.length === 0) {
      openModal(t('modal.emailExistsTitle'), t('modal.emailExistsDescription'))
      return
    }

    if (authData.user) {
      const { error: dbError } = await supabase.from('subscribers').insert({
        id: authData.user.id,
        first_name: data.firstName,
        last_name: data.lastName,
        email,
      })

      if (dbError) {
        openModal(t('modal.dbErrorTitle'), t('modal.dbErrorDescription'))
        return
      }
    }

    openModal(t('modal.successTitle'), t('modal.successDescription'))

    reset()
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
          {isSubmitting ? t('text.send') : t('text.btmRegister')}
        </button>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalTitle}
          description={modalDescription}
        />
      </form>
    </div>
  )
}
