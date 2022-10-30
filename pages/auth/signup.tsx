import { NextPage } from 'next';
import JSXStyle from 'styled-jsx/style';
import { useRouter } from 'next/router'
interface Props { }


const SignIn: NextPage = (props): JSX.Element => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push("/info")
    }
    return (
        <div className="sign-in-form">
            <form>
                <h1>Sign Up</h1>
                <h3>Enter your Email</h3>
                <input type='Email' placeholder='johnny@gmail.com' />
                <h3>Enter password</h3>
                <input type='password' placeholder='********' />
                <h3>Re-Enter password</h3>
                <input type='password' placeholder='********' />

                <button onClick={handleClick} >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignIn;