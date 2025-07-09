import contact from "@/assets/img/contact.png";
import borderGnome from "@/assets/img/border2.svg";

const  Contact = () => {
    return (
        <>
            <img src={contact} alt="" className="w-screen block" />
            <div className="bg-paper pb-10 px-6 sm:px-0 py-10">
                <div className="pb-10">
                    <h1 className="text-shadow-green text-center text-[#835C3B] text-3xl md:text-5xl">
                        CONTACTEZ LA TRIBUE
                    </h1>
                    <img src={borderGnome} alt="" className="w-full max-w-full block lg:max-w-[600px] mx-auto mb-1" />
                    <h2 className="text-shadow-green2 text-[#835C3B] text-xl md:text-2xl text-center">
                        Un message glissé sous une feuille, et les gnomes vous répondront en retour!
                    </h2>
                </div>

                <div className="bg-paper max-w-[700px] mx-auto">
                    <div className="">

                        <p className="text-[#4e3922] mb-4 text-justify first-letter:text-5xl first-letter:float-left first-letter:font-bold first-letter:mr-2 first-letter:text-[#835C3B] first-letter:text-shadow-green first-letter:font-serif first-letter:leading-none">
                            Un doute, une envie de partager, ou une question magique?
                            Martine et sa tribu de gnomes attendent vos messages avec impatience.
                            Laissez-nous un mot: ici, chaque demande reçoit une réponse pleine de malice et de chaleur.
                            Au plaisir de tisser un brin de féerie avec vous!
                        </p>

                    </div>
                    <form className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#B5834F] focus:border-[#B5834F]"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#B5834F] focus:border-[#B5834F]"
                                placeholder="Votre email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required

                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#B5834F] focus:border-[#B5834F]"
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#B5834F] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#a67339] transition-colors"
                        >
                            Envoyer
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Contact;