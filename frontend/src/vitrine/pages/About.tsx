import callebasses from "@/assets/img/callebasse.png";
import borderGnome from "@/assets/img/border.svg";

const  About = () => {
    return (
        <>
            <img src={callebasses} alt="" className="w-screen block" />
            <h1 className="text-center"> LES GNOMES DE MARTINE</h1>
            <img src={borderGnome} alt="" className="w-full max-w-full block lg:max-w-[600px] mx-auto" />
            <div className="max-w-[700px] mx-auto text-center">
                <p>
                    Il existe un monde où les merveilles prennent vie. Volez, tombez et planez dans les attractions les plus palpitantes. Vivez les attractions les plus féeriques et laissez-vous émerveiller par les contes de fées et les histoires. Partez ensemble à la découverte et créez vos plus beaux souvenirs à Efteling, au cœur d’une nature enchanteresse.
                </p>
            </div>

        </>
    )
}
export default About;