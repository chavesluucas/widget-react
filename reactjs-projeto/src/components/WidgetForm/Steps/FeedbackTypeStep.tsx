import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackTypeStepProps {
    onFeedbackTyoeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props : FeedBackTypeStepProps){
    return (

        //conceito de fragmento
        <>

            <header>
                {/*text-xl para por o tamanho já cetado, e o leading-6 para alterar só o line-heigt para o tamanho que a gente quer */}
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />

            </header>

        <div className="flex py-8 gap-2 w-full">
        {/* ele vai retornar um array de arrys, map para correr os fetores, dentro do MAP eu desestruturei o valor que seria type, ao invés de TYPE coloquei [key, value] */}
        {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
                <button
                    key={key}
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    onClick={() => props.onFeedbackTyoeChanged(key as FeedbackType)} //informamos que essa chave sempre vai ser um BUG, IDEA ou TOUGHT
                    type="button"
                >
                    <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                </button>
            );
        })}
    </div>
        </>


    )
}