'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

import emailjs from '@emailjs/browser'
import { CtaButton } from './microComponents/CtaButton'

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const serviceId = 'service_h9a9j6l'
      const templateId = 'template_g5nqhne'
      const userId = 'St-rFkEvMQwMP0dgQ'

      // Montar os parâmetros do e-mail
      const templateParams = {
        from_name: data.nome,
        from_email: data.email,
        from_telephone: data.telefone,
        message: data.mensagem,
      }
      console.log('enviou')
      await emailjs.send(serviceId, templateId, templateParams, userId)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full shadow-lg">
      {/* Adicional container */}
      <div className="bg-slate-900 flex flex-col gap-3 p-6 md:px-20 md:py-8 rounded-t-lg shadow-lg">
        <h2 className="text-center text-orange-300 font-normal text-2xl font-roboto leading-8 ">
          FALE CONOSCO <br className="hidden md:block" />
          <strong>
            PODEMOS TE
            <br className="md:hidden" /> AJUDAR
          </strong>
        </h2>

        <span className="font-roboto text-base font-normal text-slate-50 leading-6">
          Envie uma mensagem dizendo como podemos te ajudar ou fale com a nossa
          equipe pelo WhatsApp.{' '}
          <strong>Entraremos em contato o mais breve possível!</strong>
        </span>
      </div>
      {/* Main Container */}
      <div className="px-3 py-6 flex flex-col gap-6 rounded-b-lg shadow-md w-full">
        {/* Dados name separator container */}
        <div className="flex flex-col gap-6">
          <CtaButton title="QUERO AJUDA ESPECIALIZADA" />
          <span className="text-neutral-900 font-normal text-2xl md:text-3xl md:font-bold">
            Dados
          </span>
          <div className="w-[80px] h-[5px] bg-[#FB923C]" />
        </div>
        {/* Inputs Form Data Container */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label>Nome:</label>
            <input
              {...register('nome', { required: true })}
              className="rounded-[4px] border border-neutral-300 shadow-md h-12 py-2 px-4 text-gray-600"
            />
            {errors.nome && <span>O nome é obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="rounded-[4px] border border-neutral-300 shadow-md h-12 py-2 px-4 text-gray-600"
            />
            {errors.email && <span>O email é inválido ou obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Telefone:</label>
            <input
              {...register('telefone', { required: true })}
              className="rounded-[4px] border border-neutral-300 shadow-md h-12 py-2 px-4 text-gray-600"
            />
            {errors.telefone && <span>O telefone é obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Mensagem:</label>
            <textarea
              {...register('mensagem', { required: true })}
              className="rounded-[4px] border border-neutral-300 shadow-md h-40 py-2 px-4 text-gray-600"
              defaultValue="Olá, gostaria de uma orientação jurídica"
            />
            {errors.mensagem && <span>A mensagem é obrigatória.</span>}
          </div>

          <button
            type="submit"
            className="bg-slate-900 py-[10px] font-medium text-orange-300 text-base rounded mt-5 xl:w-[200px]"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormComponent
