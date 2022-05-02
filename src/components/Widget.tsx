//importando os icons do phosphor icon
import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
//imporante o PopOver do headlessui para servir como assessibbildiade 
import { Popover } from '@headlessui/react'

export function Widget(){



    return (
        //Absolute para colocar position absolute, bottom e right 5 para distanciar 20px das bordas (5*4 = 20)
        <Popover className="absolute bottom-5 right-5">

        <Popover.Panel>Hello World!</Popover.Panel>
        

        {/* classNamee para o botão ficar com um background, rounded-full para deixar as bordas arredondadas, px-3 é o padding lateral (eixo x), h-12 é a altura,
        text-white é para o icon ficar branco, flex para ficar o texto do lado do icone e items-center para centralizar, group informa que tudo é um conjunto
        lembrando que para saber a altura ou largura do heigth em pixel por exemplo, passar o mouse por cima ou multiplicar o numero dps do hifen por 4.
        o onClick é o ativador da função acima, ou seja, quando der um clique acione a função toggleWidgetVisibility*/}

        <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' >
            {/* toda classe que a gente for pasar, precisamos informar como className
            Informamos tambbém um w-6 e h-6 para ter 24px de altura e largura (para saber qnts pixel passar mouse em cima do w-6 e ou h-6, ou multiplicar o numero dps do w e h por 4) */}
            <ChatTeardropDots className="w-6 h-6" />


        {/* max-w-0 informando que a largura maxima do span é 0, overflow-hidden esconde tudo que ultrapassar o max-w-0, e group-hover vai fazer ação no grupo.
        o transition-all é uma transição dahora e duration-500 é o tempo de duranção, ease-linear foi utilizado para a animação ficar uniforme*/}
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className='pl-2'></span>
                FeedBack</span>
        </Popover.Button>
        </Popover>
    )
}