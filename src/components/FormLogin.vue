<template>
    <div class="d-flex flex-column gap-4">
        <div>
            <h1 class="fw-bold fs-4">Bem-vindo de Volta</h1>
            <span class="fw-light fs-6 d-block" style="font-size: 12px;">Insira suas credenciais para acessar a
                plataforma</span>
        </div>

        <div class="d-flex flex-column gap-2">
            <input type="text" class="form-control w-100" placeholder="Seu e-mail">
            <input type="password" class=" form-control w-100" placeholder="Sua senha">
            <router-link to="/dashboard">
                <button class="btn btn-primary w-100">
                    Entrar
                </button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
input {
    height: 46px;
    border: 2px solid #cecece;
    background-color: #ffffff;
}

input:focus {
  outline: none;
  outline-color: transparent;
  box-shadow: none;
}

input::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: #cecece;
}

button {
    height: 48px;
    background-color: #5452FC; 
    border: none
}
</style>