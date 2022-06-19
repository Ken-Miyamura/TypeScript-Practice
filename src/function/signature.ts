/**
 * 呼び出しシグネチャ
 * 使いどころ ： Reactで関数コンポーネントに、onclickで関数を、子コンポーネントにpropsで渡す時etc.
*/

type logMessage = (message: string) => void;

export const logMessages: logMessage = (message) => {
    console.log(message);
};