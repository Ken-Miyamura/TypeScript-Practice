export default function callbackSample() {
    const url = 'https://api.github.com/users/Ken-Miyamura';

    // コールバックで呼び出す非同期処理
    const fetchProfile = () => {
        return fetch(url)
            // レスポンスのBodyをJSONで読み取った結果を返す
            .then((res) => {
                res.json()
                .then((json) => {
                    console.log(`①${json}`);
                    return json;
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const profile = fetchProfile();
    console.log(`②${profile}`);
}