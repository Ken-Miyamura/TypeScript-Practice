export default async function asyncAwaitSample() {
    const url = 'https://api.github.com/users/Ken-Miyamura';

    interface Profile {
        login: string;
        id: number;
    }

    // 呼び出しシグネチャ
    type FetchProfile = () => Promise<Profile | null>;

    const fetchProfile: FetchProfile = async () => {
        const response = await fetch(url)
            .then((res) => res)
            .catch((err) => {
                console.error(err);
                return null;
            })

        if (!response) {
            return null;
        }

        const json = await response.json()
            .then((json: Profile) => {
                console.log(`①${json}`);
                return json;
            })
            .catch((err) => {
                console.error(err);
                return null;
            })
        if (!json) {
            return null;
        }

        return json;
    }

    const profile = await fetchProfile();
    if (profile) {
        console.log(`②${profile}`);
    }
}