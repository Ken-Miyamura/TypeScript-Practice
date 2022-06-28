// 宣言のマージが行われる例
interface Bread {
    calories: number;
}

interface Bread {
    type: string;
}

const francePan: Bread = {
    calories: 300,
    type: 'hard'
}

// 型エイリアスでで表現するときは、交差型使う
type Mabo = {
    calories: number;
    spicyLevel: number;
}

type Rice = {
    calories: number;
    gram: number;
}

type MaboDon = Mabo & Rice // 交差型(union)

const mabodon: MaboDon = {
    calories: 500,
    spicyLevel: 10,
    gram: 20
}

// interfaceの継承
interface Book {
    page: number;
    title: string;
}

interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
    page: 300,
    title: '週刊少年ジャンプ', 
    cycle: 'weekly'
}

// interfaceでクラスに型を定義する。implementsを使用
class Comic implements Book {
    page: number;
    title: string;
    private publishYear: string;

    constructor(page: number, title: string, publishYear: string) {
        this.page = page;
        this.title = title;
        this.publishYear = publishYear;
    }

    getPublishYear() {
        return `${this.title}が発売されたのは、${this.publishYear}年です。`
    }
}

export const popularComic = new Comic(200, '鬼滅の刃', '2016');
