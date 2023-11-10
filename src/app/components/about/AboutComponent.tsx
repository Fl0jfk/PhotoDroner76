import Diplomas from "../diplomas/Diplomas";

function AboutComponent (){
    return (
        <section className="sm:pt-[15vh] sm:pb-[10vh] flex p-4 flex-col items-center">
            <div className="flex flex-col gap-4 w-[700px] sm:w-full sm:items-start">
                <h2 className="text-6xl self-center">À propos</h2>
                <p className="text-2xl text-center">Commerçant dans l&apos;âme et accro aux nouvelles technologies/Télépilote de drone professionnel.</p>
            </div>
            <Diplomas/>
        </section>
    )
}

export default AboutComponent;