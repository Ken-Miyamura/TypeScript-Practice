type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Player = 'first' | 'second';

/**
 * 駒の位置を表すクラス
 * @param {numbers, dan}
 */

class Position {
    constructor(
        private numbers: Numbers,
        private dan: Dan
    ) {
    }

    // パラメーターに渡された位置と現在の位置を比較するメソッド
    distanceFrom(position: Position, player: Player) {
        if (player === 'first') {
            return {
                numbers: Math.abs(position.numbers - this.numbers), 
                dan: Math.abs(Number(position.dan) - Number(this.dan))
            }
        } else {
            return {
                numbers: Math.abs(position.numbers - this.numbers), 
                dan: - (Math.abs(Number(position.dan) - Number(this.dan))) //団の位置は正負反転
            }
        }
    }
}

/**
 * 駒を表すクラス
 * @param {player, numbers, dan}
 */
abstract class Piece {
    // positionプロパティはPositionクラス型を持つ。Pieceクラスとサブクラスでだけアクセスできる。
    protected position: Position;

    constructor(
        private readonly player: Player,
        numbers: Numbers,
        dan: Dan
    ) {
        this.position = new Position(numbers, dan)
    }

    // 駒の移動用メソッド
    moveTo(position: Position): void {
        this.position = position;
    }

    // 移動できるか判定するメソッド。移動できる範囲は駒の種類によって違うので、抽象メソッドにしておき、サブクラスで具体的に実装する
    abstract canMoveTo(position: Position, player: Player): boolean;
}