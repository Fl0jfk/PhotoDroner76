import Diplomas from "../diplomas/Diplomas";

function AboutComponent (){
    return (
        <section className="sm:pt-[15vh] flex p-4 flex-col items-center">
            <div className="flex flex-col gap-4 items-center w-[75%] sm:w-full sm:items-start">
                <h2 className="text-6xl">À propos</h2>
                <p className="text-2xl">Commerçant dans l&apos;âme et accro aux nouvelles technologies/Télépilote de drone professionnel.</p>
            </div>
            <Diplomas/>
        </section>
    )
}

export default AboutComponent;