import {FaUser, FaLock} from "react-icons/fa";

export default function Login(){
    return (
        <>
        <a href="/">Home</a>
            <div className="login.container">
                <form>
                    <h1>Entre no SouthStar</h1>
                    <div>
                        <input type="email" placeholder="E-mail" />
                        <FaUser className="icon" />
                    </div>
                    <div>
                        <input type="passowrd" placeholder="Senha" />
                        <FaLock className="icon" />
                    </div>

                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <button>Entrar</button>

                    <div className="signup-link">
                        <p>Não tem uma conta?</p>
                    </div>
                </form>
            </div>
        </>
    )
}