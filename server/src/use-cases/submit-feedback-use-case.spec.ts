import exp from "constants";
import { SubmitFeedbbackUseCase } from "./submit-feedback-use-case";

//spices = espiões
const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe('Submit feedback', () => {

    const submitFeedback = new SubmitFeedbbackUseCase(
        //por ser um teste unitario, passamos vazio pq n estamos testando se a API do e-mail está funcionando, por exemplo
        { create: createFeedbackSpy  },
        { sendMail: sendEmailSpy }
    )


    it('should be able to submit a feedback', async ()=>{
        //Esperamos que quando executamos o submitFeedback com oss parametros (type BUG, comment 'example'...) - espero que resolva e não dispare nenhum erro
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,4897498489'
        })).resolves.not.toThrow

        //eu espero que a função createFeedbackSpy tenha sido chamada
        expect(createFeedbackSpy).toHaveBeenCalled();
        //eu espero que a função sendEmailSpu tenha sido chamada
        expect(sendEmailSpy).toHaveBeenCalled();
    });



    it('should not be able without type', async ()=>{
        //Esperamos que quando executamos o submitFeedback com sem os parametros de type , rejeite e retorne um throw
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemplo comment',
            screenshot: 'data:image/png;base64,4897498489'
        })).rejects.toThrow();

    });

    it('should not be able without comment', async ()=>{
        //Esperamos que quando executamos o submitFeedback com sem os parametros de comment , rejeite e retorne um throw
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,4897498489'
        })).rejects.toThrow();

    });

    it('should not be able to submit feedback with an invalid screenshot', async ()=>{
        //Esperamos que quando executamos o submitFeedback com sem os parametros de type , rejeite e retorne um throw
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo comment',
            screenshot: 'data:image/jpeg;base64,4897498489'
        })).rejects.toThrow();


    });

});