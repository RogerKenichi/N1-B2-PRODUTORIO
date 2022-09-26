

function encontraX(valorM)
{

    let Xi = (valorM + (1/valorM))
    return Xi;
}

function calculaIterativo(valorM,valorN)
{
    if(valorM <= 0)
    {
        throw 'O limite inferior não pode ser igual ou menor á zero'
    }

    if(valorM > valorN)
    {
        throw 'O limite superior não deve ser menor do que o inferior'
    }

    val = encontraX(valorM);


    for(i = (valorM+1); i <= valorN; i++)
    {
        val*=encontraX(i);
    }
    return val
}


function calculaRecursivo(inferior,superior,iteracao)
{
    if((inferior === iteracao) && (inferior === 0))
    {
        throw 'O limite inferior não pode ser igual ou menor á zero'
    }
    else if(inferior > superior)
    {
        throw 'O limite superior não deve ser menor do que o inferior'
    }


    x = encontraX(iteracao)
    if(iteracao !== superior)
    {
        x*=calculaRecursivo(inferior,superior,(iteracao+=1))
    }
    return x
}

module.exports = {calculaIterativo,calculaRecursivo}