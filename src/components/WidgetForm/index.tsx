import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";



//Criamos um objeto com os tipos de feedbacktype, pq para manutenção, inclusão ou exclusão facilita para quem for fazer a manutenção dos códigos
export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto, referenciando ao BUG',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada, referenciando IDEIA',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento, referenciando a OUTRAS',
        },
    },
}

//TypeScripot, onde botamos que o FeeedbackType recebe a chave de uma listagem acima, e o typeof é para converter para Type
export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {

    //Como estava encrencando embbaixo, agora colocamos que o useState pode receber um feedbacktype ou nulo caso não selecionar nada 
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }


    return (
        //bg é o fundo
        // p-4 é o padding
        // relative para posicionar mais facil o x para fechar o widget
        // rounded para arredondar as bordas, mb é um margim bottom para destanciar o form do botão
        // flex-col é um flex column para deixar o header em cima, conteudo embaixo e assim por diante
        // items-center para centralizar os itens
        //shadow-lg é um sombra
        //md:w-auto -> do tamanho de medium para mais, width vai ser automatico
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">



            {/*Aqui estamos informadno SE feedbackType NÃO FOI PREENCHIDO, MOSTRE A DIV, CASO FOR PREENCHIDO MOSTRE A OUTRA DIV*/}
            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestarRequest={handleRestartFeedback} />
            ) : (
                <>

                    {!feedbackType ? (
                        //estamos passando dentro da tag um parametro que a função precisa
                        <FeedbackTypeStep onFeedbackTyoeChanged={setFeedbackType}
                        />
                    ) : (
                        < FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)} />
                    )}

                </>
            )}




            <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a className="underline underline-offset-2" href="https://lucaschaves.tech">Lucas Chaves</a>
            </footer>
        </div>
    );
}