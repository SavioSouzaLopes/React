import './styles.css'

export default function A() {
    return (
        <>
            <section className="last">
                <h2>Seção de Formulário</h2>
                    <fieldset> 
                        <form>
                            <div>  
                                <label for="Nome">Nome: </label>
                                <input type="text" id="nome" name="nome" placeholder="Insira Nome Completo" required/>
                            </div>

                            <div>
                                <label for="E-mail">E-mail: </label>
                                <input type="email" id="email" name="email" placeholder="exemplo@exemplo.com" required/>
                            </div>

                            <div>
                                <label for="Senha">Senha: </label>
                                <input type="password" id="senha" name="senha" placeholder="*******" required/>
                            </div>

                            <button type="submit">Salvar</button>
                            <button type="reset">Limpar</button>
                        </form>
                    </fieldset>
            </section>
        </>
    )
}