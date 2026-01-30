

getSharedKey = ad24fe57109474ef5a5aa6703b8c54e0dcdd3b4ac9cf9c39ad74bde16a932932

加密
{
    "system_version": "Windows",
    "version": "",
    "browser": "chrome",
    "ua": "",
    "kernel_version": "ua_auto"
}

async encrypto(e) {
                let t = this.getSharedKey();
                for (let n = 0; n < 2 && !t; n++)
                    await this.init(),
                    t = this.getSharedKey();
                let a = Sg.default.enc.Utf8.parse(t.slice(0, 16))
                  , o = "";
                switch (typeof e) {
                case "string":
                default:
                    o = Sg.default.enc.Utf8.parse(e);
                    break;
                case "object":
                    o = Sg.default.enc.Utf8.parse(JSON.stringify(e))
                }
                return Sg.default.AES.encrypt(o, a, {
                    iv: a,
                    mode: Sg.default.mode.CBC,
                    padding: Sg.default.pad.Pkcs7
                }).toString()
            }


https://api.adspower.com/sys/config/fe/config
{
    "data": {
        "a": "096f79ed5be37211a5b3ddb9d4e2b95646bf18b9b9a1117b927097e6c041c3b5e148fbcab0a7d9fbda55f15ae0e23ad6340886568070dcb5b2dcee56af852ce2ec8e4be67c2dcd0a80dc3a5e20e5cb752a560ebaa33933bf0bce8c7f4b8c2bffedf92e5284d959861b0f59bdc945f43f6c97cf9c9ca7e8fa1ac8d1c3584311884ea0f75d0dad9fa6e19d75c41d0889056abeee87696fbcee5b92ea87cdf5f62090fced3601ba7998d69cf90cf052aab657fcf0ca0188f21774c1ca76625d775bf96aea681d6b9a7e47fc415482286cd0bb63693318d80a2c5794d4d4bd21b072f697cd6b625acf1e1967ff363c4df0b68aa8681defddf7015e6472d864e568cb",
        "b": "2607ceb7d05921ea7eb7bba338059c55"
    },
    "code": 0,
    "msg": "Success"
}

getUuid this.webUuid = e.data.data.b

this.generateSharedKey(e.data.data.a)


getPub  79c617c59c80e24ac41278d64228ae72a856716bbcf694255634e11a9a3334cbd0c594a3ed99a6f5b3f92b48e771b6f87ca3b2af825d0401ad152fca87b0dc9e422b085244387e98a3c2597e18a9873a81b8e804b84bcaf8e0cb061ee968f3b130aaa8fed3c66ffcc0bf5f4723127fb2a5119c9a05a30f12eba29f91151f7283d938f5cf1f6a5e2e0cad036a44fe8ae0a2c6056a6eaa687c09024ef4effe322d50380591c89bbc3147fc9bd92c3e956b5e8069952d44c160bead3ed9d44d309739867f6a51224ad23ea0209d77bb008f6fcac7f4638195fd630130897105506c7ef930bb21bb01ae438d1326c3c20d4189a1c86284dc291d2e7d0f8425c2eb61



{
    "system_version": "Windows",
    "version": "",
    "browser": "chrome",
    "ua": "",
    "kernel_version": "ua_auto"
}


await qg.encrypto(e.data);
e.data = {
                                a: t,   getUuid
                                b: o,   getPub
                                c: a  
                            }

getSharedKey 25a6c4b3160e1cda141a9979bd014ec5fbc757015c8d0f9b9af1924460f64328



{"data":{"d":"wk0C2smjeC+HN1QwnobcsoQV/rmBsWvJA5rTQtMNXBztzLn6dy2kDwc8DRR8vumrCIDODpA2qZesczgs5vMgRMN9/tnH751pNhT/MnTwH/mJT7jpU7IXAeqhMMHc3py61s2aMQ0an8VeR9woAttp40hkdCmDSmy1IBgrTr6iKGbDPJiXSqu9KSqkAUB/ctTJznZmSbfuAwH+im9qB46sItNjHwn9Z4adbNNWGYTpkiuBIZnuclr7CMis21cPXuC7WzIzsVEYClgVFsvFszOgvucHTryQF30ju+fwYKd4CcZr0gI5lVayZNRvEndYWc582B7xwdS051Pr0w46esu8Q69QSanq0aBf0+1n9ECCbnfOyL6ySj0bgtZ8y1DO3N2eUKQVzyll2IT1WUgQmmtUGnADE1YSIk/v5YBhCNjIJeZPjFNnFsr2QKYp5o5IOVp9bxEkRCoxeF8+DAntPTo/OS/vT/ATHiqSc/xOLpiXyR8eNVr34GQE+EI8MT5WRj9KH6ZajhIfRaRE/8EBdhZExiF7l0SaJ/nC+nf4f1ZDKBo="},"code":0,"msg":"Success"}