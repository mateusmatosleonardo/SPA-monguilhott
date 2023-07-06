export function Form() {
  return (
    <section className="flex flex-col items-center justify-center" style={{ backgroundColor: "#98fcde" }}>
      <div className="container flex flex-col items-center justify-center mt-10 mb-20 gap-y-10">
        <h2 className="text-2xl font-medium text-center text-custom-green">Entre em contato</h2>
        <form action="" className="w-full flex flex-col justify-center items-center gap-y-4 px-6" >
          <input
            type="text"
            name='name'
            placeholder='Nome'
            className='w-full max-w-[550px] h-12 rounded-full border-gray-400 border-2 outline-none px-4 text-gray-400' />
          <input
            type="email"
            name='email'
            placeholder='E-mail'
            className='w-full max-w-[550px] h-12 rounded-full border-gray-400 border-2 outline-none px-4 text-gray-400' />
          <input
            type="tel"
            name='cellphone'
            placeholder='Telefone/Celular'
            className='w-full max-w-[550px] h-12 rounded-full border-gray-400 border-2 outline-none px-4 text-gray-400' />
          <textarea
            className="rounded-lg w-full max-w-[550px] border-gray-400 border-2 outline-none p-2 text-gray-400"
            placeholder="Mensagem"
            name=""
            id=""
            cols={25}
            rows={8}>
          </textarea>
        </form>
      </div>
    </section >
  )
}