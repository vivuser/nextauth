import { auth, signIn } from "@/lib/auth"

const Login = async () => {

    const session = await auth();

    console.log(session)

    const handleGithubLogin = async () => {
        "use server";
        await signIn("github");
    }

    return (
        <div className="flex m-4">
            <form action={handleGithubLogin}>
            <button className="p-2 bg-black text-white rounded-md">Github Login</button>
            </form>
        </div>
    )
}

export default Login;