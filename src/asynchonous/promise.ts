export default function promiseSample() {
    const url = "https://api.github.com/users/Ken-Miyamura";

    interface Profile {
        login: string;
        id: number;
    }

    // 呼び出しシグネチャ
    type FetchProfile = () => Promise<Profile | null>;

    const fetchProfile: FetchProfile = () => {
        return new Promise((resolve, reject) => {
            fetch(url)
                // レスポンスのBodyをJSONで読み取った結果を返す
                .then((response) => {
                    response.json()
                    .then((responseData: Profile) => {
                        console.log(`①${responseData}`)
                        resolve(responseData);
                    })
                    .catch((err) => {
                        console.error(err);
                        reject(null);
                    })
                })
                .catch((err) => {
                    console.error(err);
                    reject(null);
                })
        })
    }

    fetchProfile().then((profile: Profile | null) => {
        // resolveの場合のみthenの中を見るので、profileの存在を確認する
        if (profile) console.log(`②${profile}`);
    })
    .catch((err) => {
        console.error(err);
    })
}