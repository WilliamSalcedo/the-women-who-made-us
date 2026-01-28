'use client'

import { Fragment} from 'react'
import { Dialog, TransitionChild, Transition, DialogPanel, DialogTitle } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
}

export default function Modal({ open, onClose, title, description }: ModalProps) {
  const { t } = useTranslation()
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </TransitionChild>

        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
           
            <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              
              <DialogTitle className="text-center text-lg font-semibold">{title}</DialogTitle>

             
              {description && (
                <p className="mt-2 text-center text-sm text-neutral-500">{description}</p>
              )}

              <button
                onClick={onClose}
                className="mt-6 w-full rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {t('modal.button')}
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
