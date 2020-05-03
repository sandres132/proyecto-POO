var selec;
var selecciono;
var verifPassSign = null;
var verifUserSign = null;
document.getElementById("posCardUser").innerHTML = "";
document.getElementById("posCardComp").innerHTML = "";

function checkInput(id) {
    let elem = document.getElementById(id).checked;
    if (elem) {
        generarSignInComp();
    } else {
        generarSignInUser();
    }
}
checkInput('boton');

function generarSignInUser() {
    document.getElementById("posCardComp").innerHTML = "";
    if (document.getElementById("posCardUser").innerHTML != "") {
        document.getElementById("posCardUser").innerHTML = "";
    } else {
        document.getElementById("posCardUser").innerHTML = "";
        document.getElementById("posCardUser").innerHTML +=
            `<div class="card col-lg-6 col-md-9 col-sm-12 col-xs-12 m-auto pb-0 rad">
                <div class="card-header p-2 mt-3">
                    <h5 class="card-title mb-0"><i class="fa fa-sign-in"> Sign In</i></h5>
                </div>
                <div class="card-body mb-0 pb-0">
                    <form class="form-control py-0">
                        <fieldset>
                            <div class="form-row py-1">
                                <label for="firstName"><b><i class="fa fa-edit"> First Name</i></b></label>
                                <input type="text" id="firstName" class="form-control" aria-describedby="firstNameHelp" onfocus="limpiarAlertas('alertSignUser')" oninput="validacion('firstName')" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required>
                                <small id="firstNameHelp" class="text-muted"> Julian Andres</small>
                            </div>
                            <div class="form-row py-1">
                                <label for="lastName"><b><i class="fa fa-edit"> Last Name</i></b></label>
                                <input type="text" id="lastName" class="form-control" aria-describedby="lastNameHelp" onfocus="limpiarAlertas('alertSignUser')" oninput="validacion('lastName')" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,20}" required>
                                <small id="lastNameHelp" class="text-muted">Alvarez Mendoza</small>
                            </div>
                            <div class="form-row py-1">
                                <label for="emailUser"><b><i class=" fa fa-envelope"> Email</i></b></label>
                                <input type="email" id="emailUser" class="form-control" aria-describedby="emailHelp" onfocus="limpiarAlertas('alertSignUser')" oninput="validacion('emailUser')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                <small id="emailHelp" class="text-muted ">andresjulian@yahoo.es</small>
                            </div>
                            <div class="form-row py-1 ">
                                <label for="dateUser"><b><i class="fa fa-calendar"> Birthdate</i></b></label>
                                <input type="date" min="1920-01-01" max="2008-12-31" value="1980-01-01" id="dateUser" class="form-control " aria-describedby="datelHelp" onfocus="validacion('dateUser')" required>
                                <small id="dateHelp" class="text-muted">Put your birth date here</small>
                            </div>
                            <div class="form-row py-1">
                                <label for="imagenUs"><b><i class="fa fa-fa-photo"> User Photo</i></b></label>
                                <form id="formUser" name="formUser" method="post" enctype="multipart/form-data">
                                    <input type="file" id="imagenUs" name="imagen" accept="image/*" class="form-control" aria-describedby="imagenUsHelp">
                                </form>
                                <small id="imagenUsHelp" class="text-muted"> Here goes your photo</small>
                            </div>
                            <div class="form-row py-1 ">
                                <label for="genero"><b><i class="fa fa-transgender-alt"> Gender</i></b></label>
                                <select class="form-control" id="genero" onfocus="limpiarAlertas('alertSignUser')" onchange="cambiar('genero');">
                                    <option value="Male" id="male">Male</i></option>
                                    <option value="Female" id="female">Female</></option>
                                    <option selected="true" value="Other" id="otro">I prefer not to specify</i></option>
                                </select>
                            </div>
                            <div class="form-row py-1">
                                <label for="selectPaisCliente"><i class="fa fa-flag-checkered"> Select Country</i></label>
                                <select class="form-control" id="selectPaisCliente" onfocus="limpiarAlertas('alertSignUser')" onchange="cambiar('selectPaisCliente')">
                                    <option value="Afganistán" id="AF">Afganistán</option>
                                    <option value="Albania" id="AL">Albania</option>
                                    <option value="Alemania" id="DE">Alemania</option>
                                    <option value="Andorra" id="AD">Andorra</option>
                                    <option value="Angola" id="AO">Angola</option>
                                    <option value="Anguila" id="AI">Anguila</option>
                                    <option value="Antártida" id="AQ">Antártida</option>
                                    <option value="Antigua y Barbuda" id="AG">Antigua y Barbuda</option>
                                    <option value="Antillas holandesas" id="AN">Antillas holandesas</option>
                                    <option value="Arabia Saudí" id="SA">Arabia Saudí</option>
                                    <option value="Argelia" id="DZ">Argelia</option>
                                    <option value="Argentina" id="AR">Argentina</option>
                                    <option value="Armenia" id="AM">Armenia</option>
                                    <option value="Aruba" id="AW">Aruba</option>
                                    <option value="Australia" id="AU">Australia</option>
                                    <option value="Austria" id="AT">Austria</option>
                                    <option value="Azerbaiyán" id="AZ">Azerbaiyán</option>
                                    <option value="Bahamas" id="BS">Bahamas</option>
                                    <option value="Bahrein" id="BH">Bahrein</option>
                                    <option value="Bangladesh" id="BD">Bangladesh</option>
                                    <option value="Barbados" id="BB">Barbados</option>
                                    <option value="Bélgica" id="BE">Bélgica</option>
                                    <option value="Belice" id="BZ">Belice</option>
                                    <option value="Benín" id="BJ">Benín</option>
                                    <option value="Bermudas" id="BM">Bermudas</option>
                                    <option value="Bhután" id="BT">Bhután</option>
                                    <option value="Bielorrusia" id="BY">Bielorrusia</option>
                                    <option value="Birmania" id="MM">Birmania</option>
                                    <option value="Bolivia" id="BO">Bolivia</option>
                                    <option value="Bosnia y Herzegovina" id="BA">Bosnia y Herzegovina</option>
                                    <option value="Botsuana" id="BW">Botsuana</option>
                                    <option value="Brasil" id="BR">Brasil</option>
                                    <option value="Brunei" id="BN">Brunei</option>
                                    <option value="Bulgaria" id="BG">Bulgaria</option>
                                    <option value="Burkina Faso" id="BF">Burkina Faso</option>
                                    <option value="Burundi" id="BI">Burundi</option>
                                    <option value="Cabo Verde" id="CV">Cabo Verde</option>
                                    <option value="Camboya" id="KH">Camboya</option>
                                    <option value="Camerún" id="CM">Camerún</option>
                                    <option value="Canadá" id="CA">Canadá</option>
                                    <option value="Chad" id="TD">Chad</option>
                                    <option value="Chile" id="CL">Chile</option>
                                    <option value="China" id="CN">China</option>
                                    <option value="Chipre" id="CY">Chipre</option>
                                    <option value="Ciudad estado del Vaticano" id="VA">Ciudad estado del Vaticano</option>
                                    <option value="Colombia" id="CO">Colombia</option>
                                    <option value="Comores" id="KM">Comores</option>
                                    <option value="Congo" id="CG">Congo</option>
                                    <option value="Corea" id="KR">Corea</option>
                                    <option value="Corea del Norte" id="KP">Corea del Norte</option>
                                    <option value="Costa del Marfíl" id="CI">Costa del Marfíl</option>
                                    <option value="Costa Rica" id="CR">Costa Rica</option>
                                    <option value="Croacia" id="HR">Croacia</option>
                                    <option value="Cuba" id="CU">Cuba</option>
                                    <option value="Dinamarca" id="DK">Dinamarca</option>
                                    <option value="Djibouri" id="DJ">Djibouri</option>
                                    <option value="Dominica" id="DM">Dominica</option>
                                    <option value="Ecuador" id="EC">Ecuador</option>
                                    <option value="Egipto" id="EG">Egipto</option>
                                    <option value="El Salvador" id="SV">El Salvador</option>
                                    <option value="Emiratos Arabes Unidos" id="AE">Emiratos Arabes Unidos</option>
                                    <option value="Eritrea" id="ER">Eritrea</option>
                                    <option value="Eslovaquia" id="SK">Eslovaquia</option>
                                    <option value="Eslovenia" id="SI">Eslovenia</option>
                                    <option value="España" id="ES">España</option>
                                    <option value="Estados Unidos" id="US">Estados Unidos</option>
                                    <option value="Estonia" id="EE">Estonia</option>
                                    <option value="c" id="ET">Etiopía</option>
                                    <option value="Ex-República Yugoslava de Macedonia" id="MK">Ex-República Yugoslava de Macedonia</option>
                                    <option value="Filipinas" id="PH">Filipinas</option>
                                    <option value="Finlandia" id="FI">Finlandia</option>
                                    <option value="Francia" id="FR">Francia</option>
                                    <option value="Gabón" id="GA">Gabón</option>
                                    <option value="Gambia" id="GM">Gambia</option>
                                    <option value="Georgia" id="GE">Georgia</option>
                                    <option value="Georgia del Sur y las islas Sandwich del Sur" id="GS">Georgia del Sur y las islas Sandwich del Sur</option>
                                    <option value="Ghana" id="GH">Ghana</option>
                                    <option value="Gibraltar" id="GI">Gibraltar</option>
                                    <option value="Granada" id="GD">Granada</option>
                                    <option value="Grecia" id="GR">Grecia</option>
                                    <option value="Groenlandia" id="GL">Groenlandia</option>
                                    <option value="Guadalupe" id="GP">Guadalupe</option>
                                    <option value="Guam" id="GU">Guam</option>
                                    <option value="Guatemala" id="GT">Guatemala</option>
                                    <option value="Guayana" id="GY">Guayana</option>
                                    <option value="Guayana francesa" id="GF">Guayana francesa</option>
                                    <option value="Guinea" id="GN">Guinea</option>
                                    <option value="Guinea Ecuatorial" id="GQ">Guinea Ecuatorial</option>
                                    <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                                    <option value="Haití" id="HT">Haití</option>
                                    <option value="Holanda" id="NL">Holanda</option>
                                    <option selected="true" value="Honduras" id="HN">Honduras</option>
                                    <option value="Hong Kong R. A. E" id="HK">Hong Kong R. A. E</option>
                                    <option value="Hungría" id="HU">Hungría</option>
                                    <option value="India" id="IN">India</option>
                                    <option value="Indonesia" id="ID">Indonesia</option>
                                    <option value="Irak" id="IQ">Irak</option>
                                    <option value="Irán" id="IR">Irán</option>
                                    <option value="Irlanda" id="IE">Irlanda</option>
                                    <option value="Isla Bouvet" id="BV">Isla Bouvet</option>
                                    <option value="Isla Christmas" id="CX">Isla Christmas</option>
                                    <option value="Isla Heard e Islas McDonald" id="HM">Isla Heard e Islas McDonald</option>
                                    <option value="Islandia" id="IS">Islandia</option>
                                    <option value="Islas Caimán" id="KY">Islas Caimán</option>
                                    <option value="Islas Cook" id="CK">Islas Cook</option>
                                    <option value="Islas de Cocos o Keeling" id="CC">Islas de Cocos o Keeling</option>
                                    <option value="Islas Faroe" id="FO">Islas Faroe</option>
                                    <option value="Islas Fiyi" id="FJ">Islas Fiyi</option>
                                    <option value="Islas Malvinas Islas Falkland" id="FK">Islas Malvinas Islas Falkland</option>
                                    <option value="Islas Marianas del norte" id="MP">Islas Marianas del norte</option>
                                    <option value="Islas Marshall" id="MH">Islas Marshall</option>
                                    <option value="Islas menores de Estados Unidos" id="UM">Islas menores de Estados Unidos</option>
                                    <option value="Islas Palau" id="PW">Islas Palau</option>
                                    <option value="Islas Salomón" d="SB">Islas Salomón</option>
                                    <option value="Islas Tokelau" id="TK">Islas Tokelau</option>
                                    <option value="Islas Turks y Caicos" id="TC">Islas Turks y Caicos</option>
                                    <option value="Islas Vírgenes EE.UU." id="VI">Islas Vírgenes EE.UU.</option>
                                    <option value="Islas Vírgenes Reino Unido" id="VG">Islas Vírgenes Reino Unido</option>
                                    <option value="Israel" id="IL">Israel</option>
                                    <option value="Italia" id="IT">Italia</option>
                                    <option value="Jamaica" id="JM">Jamaica</option>
                                    <option value="Japón" id="JP">Japón</option>
                                    <option value="Jordania" id="JO">Jordania</option>
                                    <option value="Kazajistán" id="KZ">Kazajistán</option>
                                    <option value="Kenia" id="KE">Kenia</option>
                                    <option value="Kirguizistán" id="KG">Kirguizistán</option>
                                    <option value="Kiribati" id="KI">Kiribati</option>
                                    <option value="Kuwait" id="KW">Kuwait</option>
                                    <option value="Laos" id="LA">Laos</option>
                                    <option value="Lesoto" id="LS">Lesoto</option>
                                    <option value="Letonia" id="LV">Letonia</option>
                                    <option value="Líbano" id="LB">Líbano</option>
                                    <option value="Liberia" id="LR">Liberia</option>
                                    <option value="Libia" id="LY">Libia</option>
                                    <option value="Liechtenstein" id="LI">Liechtenstein</option>
                                    <option value="Lituania" id="LT">Lituania</option>
                                    <option value="Luxemburgo" id="LU">Luxemburgo</option>
                                    <option value="Macao R. A. E" id="MO">Macao R. A. E</option>
                                    <option value="Madagascar" id="MG">Madagascar</option>
                                    <option value="Malasia" id="MY">Malasia</option>
                                    <option value="Malawi" id="MW">Malawi</option>
                                    <option value="Maldivas" id="MV">Maldivas</option>
                                    <option value="Malí" id="ML">Malí</option>
                                    <option value="Malta" id="MT">Malta</option>
                                    <option value="Marruecos" id="MA">Marruecos</option>
                                    <option value="Martinica" id="MQ">Martinica</option>
                                    <option value="Mauricio" id="MU">Mauricio</option>
                                    <option value="Mauritania" id="MR">Mauritania</option>
                                    <option value="Mayotte" id="YT">Mayotte</option>
                                    <option value="México" id="MX">México</option>
                                    <option value="Micronesia" id="FM">Micronesia</option>
                                    <option value="Moldavia" id="MD">Moldavia</option>
                                    <option value="Mónaco" id="MC">Mónaco</option>
                                    <option value="Mongolia" id="MN">Mongolia</option>
                                    <option value="Montserrat" id="MS">Montserrat</option>
                                    <option value="Mozambique" id="MZ">Mozambique</option>
                                    <option value="Namibia" id="NA">Namibia</option>
                                    <option value="Nauru" id="NR">Nauru</option>
                                    <option value="Nepal" id="NP">Nepal</option>
                                    <option value="Nicaragua" id="NI">Nicaragua</option>
                                    <option value="Níger" id="NE">Níger</option>
                                    <option value="Nigeria" id="NG">Nigeria</option>
                                    <option value="Niue" id="NU">Niue</option>
                                    <option value="Norfolk" id="NF">Norfolk</option>
                                    <option value="Noruega" id="NO">Noruega</option>
                                    <option value="Nueva Caledonia" id="NC">Nueva Caledonia</option>
                                    <option value="Nueva Zelanda" id="NZ">Nueva Zelanda</option>
                                    <option value="Omán" id="OM">Omán</option>
                                    <option value="Panamá" id="PA">Panamá</option>
                                    <option value="Papua Nueva Guinea" id="PG">Papua Nueva Guinea</option>
                                    <option value="Paquistán" id="PK">Paquistán</option>
                                    <option value="Paraguay" id="PY">Paraguay</option>
                                    <option value="Perú" id="PE">Perú</option>
                                    <option value="Pitcairn" id="PN">Pitcairn</option>
                                    <option value="Polinesia francesa" id="PF">Polinesia francesa</option>
                                    <option value="Polonia" id="PL">Polonia</option>
                                    <option value="Portugal" id="PT">Portugal</option>
                                    <option value="Puerto Rico" id="PR">Puerto Rico</option>
                                    <option value="Qatar" id="QA">Qatar</option>
                                    <option value="Reino Unido" id="UK">Reino Unido</option>
                                    <option value="República Centroafricana" id="CF">República Centroafricana</option>
                                    <option value="República Checa" id="CZ">República Checa</option>
                                    <option value="República de Sudáfrica" id="ZA">República de Sudáfrica</option>
                                    <option value="República Democrática del Congo Zaire" id="CD">República Democrática del Congo Zaire</option>
                                    <option value="República Dominicana" id="DO">República Dominicana</option>
                                    <option value="Reunión" id="RE">Reunión</option>
                                    <option value="Ruanda" id="RW">Ruanda</option>
                                    <option value="Rumania" id="RO">Rumania</option>
                                    <option value="Rusia" id="RU">Rusia</option>
                                    <option value="Samoa" id="WS">Samoa</option>
                                    <option value="Samoa occidental" id="AS">Samoa occidental</option>
                                    <option value="San Kitts y Nevis" id="KN">San Kitts y Nevis</option>
                                    <option value="San Marino" id="SM">San Marino</option>
                                    <option value="San Pierre y Miquelon" id="PM">San Pierre y Miquelon</option>
                                    <option value="San Vicente e Islas Granadinas" id="VC">San Vicente e Islas Granadinas</option>
                                    <option value="Santa Helena" id="SH">Santa Helena</option>
                                    <option value="Santa Lucía" id="LC">Santa Lucía</option>
                                    <option value="Santo Tomé y Príncipe" id="ST">Santo Tomé y Príncipe</option>
                                    <option value="Senegal" id="SN">Senegal</option>
                                    <option value="Serbia y Montenegro" id="YU">Serbia y Montenegro</option>
                                    <option value="Sychelles" id="SC">Seychelles</option>
                                    <option value="Sierra Leona" id="SL">Sierra Leona</option>
                                    <option value="Singapur" id="SG">Singapur</option>
                                    <option value="Siria" id="SY">Siria</option>
                                    <option value="Somalia" id="SO">Somalia</option>
                                    <option value="Sri Lanka" id="LK">Sri Lanka</option>
                                    <option value="Suazilandia" id="SZ">Suazilandia</option>
                                    <option value="Sudán" id="SD">Sudán</option>
                                    <option value="Suecia" id="SE">Suecia</option>
                                    <option value="Suiza" id="CH">Suiza</option>
                                    <option value="Surinam" id="SR">Surinam</option>
                                    <option value="Svalbard" id="SJ">Svalbard</option>
                                    <option value="Tailandia" id="TH">Tailandia</option>
                                    <option value="Taiwán" id="TW">Taiwán</option>
                                    <option value="Tanzania" id="TZ">Tanzania</option>
                                    <option value="Tayikistán" id="TJ">Tayikistán</option>
                                    <option value="Territorios británicos del océano Indico" id="IO">Territorios británicos del océano Indico</option>
                                    <option value="Territorios franceses del sur" id="TF">Territorios franceses del sur</option>
                                    <option value="Timor Oriental" id="TP">Timor Oriental</option>
                                    <option value="Togo" id="TG">Togo</option>
                                    <option value="Tonga" id="TO">Tonga</option>
                                    <option value="Trinidad y Tobago" id="TT">Trinidad y Tobago</option>
                                    <option value="Túnez" id="TN">Túnez</option>
                                    <option value="Turkmenistán" id="TM">Turkmenistán</option>
                                    <option value="Turquía" id="TR">Turquía</option>
                                    <option value="Tuvalu" id="TV">Tuvalu</option>
                                    <option value="Ucrania" id="UA">Ucrania</option>
                                    <option value="Uganda" id="UG">Uganda</option>
                                    <option value="Uruguay" id="UY">Uruguay</option>
                                    <option value="Uzbekistán" id="UZ">Uzbekistán</option>
                                    <option value="Vanuatu" id="VU">Vanuatu</option>
                                    <option value="Venezuela" id="VE">Venezuela</option>
                                    <option value="Vietnam" id="VN">Vietnam</option>
                                    <option value="Wallis y Futuna" id="WF">Wallis y Futuna</option>
                                    <option value="Yemen" id="YE">Yemen</option>
                                    <option value="Zambia" id="ZM">Zambia</option>
                                    <option value="Zimbabue" id="ZW">Zimbabue</option>
                                </select>
                            </div>
                            <div class="form-row py-1">
                                <label for="usName"><b><i class="fa fa-user"> User Name</i></b></label>
                                <input type="text" id="usName" class="form-control" aria-describedby="userHelp" onfocus="limpiarAlertas('alertSignUser')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
                                <small id="userHelp" class="text-muted">Put the name you want as a user</small>
                            </div>
                            <div class="form-row py-1 ">
                                <label for="passwordUser"><b><i class="fa fa-lock "> Password</i></b></label>
                                <input type="password" id="passwordUser" class="form-control" aria-describedby="passwordHelp" onfocus="limpiarAlertas('alertSignUser')" oninput="validacion('passwordUser')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                <small id="passwordHelp" class="text-muted">Must be 8-20 characters long, choose a password with at least one capital letter and a number at the end as example Ganguitas1.</small>
                            </div>
                            <div class="form-row py-1 ">
                                <label for="confirmPassUser"><b><i class="fa fa-lock "> Confirm your password</i></b></label>
                                <input type="password" id="confirmPassUser" class="form-control" aria-describedby="confirmHelp" onfocus="limpiarAlertas('alertSignUser')" oninput="alertar('passwordUser','confirmPassUser');" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                <small id="confirmHelp" class="text-muted ">Repeat your password.</small>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div id="alertSignUser">

                </div>
                <div class="card-footer container pb-2 mb-3">
                    <div class="row">
                        <div class="col-9">
                            <a href="#" class="nav-link mr-auto font-weight-bold" data-toggle="modal" data-target="#logIn">You alredy has an account?</a>
                        </div>
                        <div class="col-3">
                            <button type="submit" onclick="validarUser('usName','cliente'); signInUser();" class="btn btn-info">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

function generarSignInComp() {
    document.getElementById("posCardUser").innerHTML = "";
    if (document.getElementById("posCardComp").innerHTML != "") {
        document.getElementById("posCardComp").innerHTML = "";
    } else {
        document.getElementById("posCardComp").innerHTML = "";
        document.getElementById("posCardComp").innerHTML +=
            `<div class="card col-lg-10 col-md-10 col-sm-12 col-xs-12 m-auto pb-0 rad">
                <div class="card-header p-2 m-3">
                    <h5 class="card-title"><i class="fa fa-sign-in"> Sign In</i></h5>
                </div>
                <div class="card-body pb-0 mb-0">
                    <form class="form-control py-0 row">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="form-row py-1">
                                        <label for="institutionName"><b><i class="fa fa-institution"> Company Name</i></b></label>
                                        <input type="text" id="institutionName" class="form-control" aria-describedby="institutionNameHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('institutionName')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required><small id="institutionNameHelp" class="text-muted ">Ganguitas</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="imagenCompany"><b><i class="fa fa-file-photo-o"> Logo Company</i></b></label>
                                        <form id="form2" name="form2" method="post" enctype="multipart/form-data">
                                            <input type="file" id="imagenCompany" name="imagen" accept="image/*" class="form-control" aria-describedby="imagenCompanyHelp">
                                        </form>
                                        <small id="imagenCompanyHelp" class="text-muted"> Here goes your company logo</small>
                                    </div>  
                                    <div class="form-row py-1">
                                        <label for="bannerCompany"><b><i class="fa fa-file-photo-o"> Logo Company</i></b></label>
                                        <form id="form3" name="form3" method="post" enctype="multipart/form-data">
                                            <input type="file" id="bannerCompany" name="imagen" accept="image/*" class="form-control" aria-describedby="bannerCompanyHelp">
                                        </form>
                                        <small id="bannerCompanyHelp" class="text-muted"> Here goes your company logo</small>
                                    </div> 
                                    <div class="form-row py-1">
                                        <label for="institutionDescription"><b><i class="fa fa-institution"> Company Description</i></b></label>
                                        <input type="text" id="institutionDescription" class="form-control" aria-describedby="institutionDescriptionHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('institutionDescription')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,30}" required><small id="institutionDescriptionHelp" class="text-muted ">What describes your company as example "fast food"</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="direcComp"><b><i class="fa fa-map-marker"> Company Address</i></b></label>
                                        <input type="text" id="direcComp" class="form-control" aria-describedby="direcCompHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('direcComp')" pattern="[a-zA-Z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{5,50}" required><small id="direcCompHelp" class="text-muted ">Put your company address as an example: Col. Miramontes</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="longComp"><b><i class="fa fa-location-arrow"> Company longitude</i></b></label>
                                        <input type="text" id="longComp" class="form-control" aria-describedby="longCompHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('longComp')" pattern="[0-9.]{5,50}" required><small id="longCompHelp" class="text-muted ">Put your company longitude as an example: 41.40338</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="latComp"><b><i class="fa fa-location-arrow"> Company latitude</i></b></label>
                                        <input type="text" id="latComp" class="form-control" aria-describedby="latCompHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('latComp')" pattern="[0-9.]{5,50}" required><small id="latCompHelp" class="text-muted ">Put your company latitude as an example: 2.17403</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="selectPaisEmpresa"><i class="fa fa-flag-checkered"> Select Country</i></label>
                                        <select class="form-control" id="selectPaisEmpresa" onfocus="limpiarAlertas('alertSignComp')" onchange="cambiar('selectPaisEmpresa')">
                                            <option value="Afganistán" id="AF">Afganistán</option>
                                            <option value="Albania" id="AL">Albania</option>
                                            <option value="Alemania" id="DE">Alemania</option>
                                            <option value="Andorra" id="AD">Andorra</option>
                                            <option value="Angola" id="AO">Angola</option>
                                            <option value="Anguila" id="AI">Anguila</option>
                                            <option value="Antártida" id="AQ">Antártida</option>
                                            <option value="Antigua y Barbuda" id="AG">Antigua y Barbuda</option>
                                            <option value="Antillas holandesas" id="AN">Antillas holandesas</option>
                                            <option value="Arabia Saudí" id="SA">Arabia Saudí</option>
                                            <option value="Argelia" id="DZ">Argelia</option>
                                            <option value="Argentina" id="AR">Argentina</option>
                                            <option value="Armenia" id="AM">Armenia</option>
                                            <option value="Aruba" id="AW">Aruba</option>
                                            <option value="Australia" id="AU">Australia</option>
                                            <option value="Austria" id="AT">Austria</option>
                                            <option value="Azerbaiyán" id="AZ">Azerbaiyán</option>
                                            <option value="Bahamas" id="BS">Bahamas</option>
                                            <option value="Bahrein" id="BH">Bahrein</option>
                                            <option value="Bangladesh" id="BD">Bangladesh</option>
                                            <option value="Barbados" id="BB">Barbados</option>
                                            <option value="Bélgica" id="BE">Bélgica</option>
                                            <option value="Belice" id="BZ">Belice</option>
                                            <option value="Benín" id="BJ">Benín</option>
                                            <option value="Bermudas" id="BM">Bermudas</option>
                                            <option value="Bhután" id="BT">Bhután</option>
                                            <option value="Bielorrusia" id="BY">Bielorrusia</option>
                                            <option value="Birmania" id="MM">Birmania</option>
                                            <option value="Bolivia" id="BO">Bolivia</option>
                                            <option value="Bosnia y Herzegovina" id="BA">Bosnia y Herzegovina</option>
                                            <option value="Botsuana" id="BW">Botsuana</option>
                                            <option value="Brasil" id="BR">Brasil</option>
                                            <option value="Brunei" id="BN">Brunei</option>
                                            <option value="Bulgaria" id="BG">Bulgaria</option>
                                            <option value="Burkina Faso" id="BF">Burkina Faso</option>
                                            <option value="Burundi" id="BI">Burundi</option>
                                            <option value="Cabo Verde" id="CV">Cabo Verde</option>
                                            <option value="Camboya" id="KH">Camboya</option>
                                            <option value="Camerún" id="CM">Camerún</option>
                                            <option value="Canadá" id="CA">Canadá</option>
                                            <option value="Chad" id="TD">Chad</option>
                                            <option value="Chile" id="CL">Chile</option>
                                            <option value="China" id="CN">China</option>
                                            <option value="Chipre" id="CY">Chipre</option>
                                            <option value="Ciudad estado del Vaticano" id="VA">Ciudad estado del Vaticano</option>
                                            <option value="Colombia" id="CO">Colombia</option>
                                            <option value="Comores" id="KM">Comores</option>
                                            <option value="Congo" id="CG">Congo</option>
                                            <option value="Corea" id="KR">Corea</option>
                                            <option value="Corea del Norte" id="KP">Corea del Norte</option>
                                            <option value="Costa del Marfíl" id="CI">Costa del Marfíl</option>
                                            <option value="Costa Rica" id="CR">Costa Rica</option>
                                            <option value="Croacia" id="HR">Croacia</option>
                                            <option value="Cuba" id="CU">Cuba</option>
                                            <option value="Dinamarca" id="DK">Dinamarca</option>
                                            <option value="Djibouri" id="DJ">Djibouri</option>
                                            <option value="Dominica" id="DM">Dominica</option>
                                            <option value="Ecuador" id="EC">Ecuador</option>
                                            <option value="Egipto" id="EG">Egipto</option>
                                            <option value="El Salvador" id="SV">El Salvador</option>
                                            <option value="Emiratos Arabes Unidos" id="AE">Emiratos Arabes Unidos</option>
                                            <option value="Eritrea" id="ER">Eritrea</option>
                                            <option value="Eslovaquia" id="SK">Eslovaquia</option>
                                            <option value="Eslovenia" id="SI">Eslovenia</option>
                                            <option value="España" id="ES">España</option>
                                            <option value="Estados Unidos" id="US">Estados Unidos</option>
                                            <option value="Estonia" id="EE">Estonia</option>
                                            <option value="c" id="ET">Etiopía</option>
                                            <option value="Ex-República Yugoslava de Macedonia" id="MK">Ex-República Yugoslava de Macedonia</option>
                                            <option value="Filipinas" id="PH">Filipinas</option>
                                            <option value="Finlandia" id="FI">Finlandia</option>
                                            <option value="Francia" id="FR">Francia</option>
                                            <option value="Gabón" id="GA">Gabón</option>
                                            <option value="Gambia" id="GM">Gambia</option>
                                            <option value="Georgia" id="GE">Georgia</option>
                                            <option value="Georgia del Sur y las islas Sandwich del Sur" id="GS">Georgia del Sur y las islas Sandwich del Sur</option>
                                            <option value="Ghana" id="GH">Ghana</option>
                                            <option value="Gibraltar" id="GI">Gibraltar</option>
                                            <option value="Granada" id="GD">Granada</option>
                                            <option value="Grecia" id="GR">Grecia</option>
                                            <option value="Groenlandia" id="GL">Groenlandia</option>
                                            <option value="Guadalupe" id="GP">Guadalupe</option>
                                            <option value="Guam" id="GU">Guam</option>
                                            <option value="Guatemala" id="GT">Guatemala</option>
                                            <option value="Guayana" id="GY">Guayana</option>
                                            <option value="Guayana francesa" id="GF">Guayana francesa</option>
                                            <option value="Guinea" id="GN">Guinea</option>
                                            <option value="Guinea Ecuatorial" id="GQ">Guinea Ecuatorial</option>
                                            <option value="Guinea-Bissau" id="GW">Guinea-Bissau</option>
                                            <option value="Haití" id="HT">Haití</option>
                                            <option value="Holanda" id="NL">Holanda</option>
                                            <option selected="true" value="Honduras" id="HN">Honduras</option>
                                            <option value="Hong Kong R. A. E" id="HK">Hong Kong R. A. E</option>
                                            <option value="Hungría" id="HU">Hungría</option>
                                            <option value="India" id="IN">India</option>
                                            <option value="Indonesia" id="ID">Indonesia</option>
                                            <option value="Irak" id="IQ">Irak</option>
                                            <option value="Irán" id="IR">Irán</option>
                                            <option value="Irlanda" id="IE">Irlanda</option>
                                            <option value="Isla Bouvet" id="BV">Isla Bouvet</option>
                                            <option value="Isla Christmas" id="CX">Isla Christmas</option>
                                            <option value="Isla Heard e Islas McDonald" id="HM">Isla Heard e Islas McDonald</option>
                                            <option value="Islandia" id="IS">Islandia</option>
                                            <option value="Islas Caimán" id="KY">Islas Caimán</option>
                                            <option value="Islas Cook" id="CK">Islas Cook</option>
                                            <option value="Islas de Cocos o Keeling" id="CC">Islas de Cocos o Keeling</option>
                                            <option value="Islas Faroe" id="FO">Islas Faroe</option>
                                            <option value="Islas Fiyi" id="FJ">Islas Fiyi</option>
                                            <option value="Islas Malvinas Islas Falkland" id="FK">Islas Malvinas Islas Falkland</option>
                                            <option value="Islas Marianas del norte" id="MP">Islas Marianas del norte</option>
                                            <option value="Islas Marshall" id="MH">Islas Marshall</option>
                                            <option value="Islas menores de Estados Unidos" id="UM">Islas menores de Estados Unidos</option>
                                            <option value="Islas Palau" id="PW">Islas Palau</option>
                                            <option value="Islas Salomón" d="SB">Islas Salomón</option>
                                            <option value="Islas Tokelau" id="TK">Islas Tokelau</option>
                                            <option value="Islas Turks y Caicos" id="TC">Islas Turks y Caicos</option>
                                            <option value="Islas Vírgenes EE.UU." id="VI">Islas Vírgenes EE.UU.</option>
                                            <option value="Islas Vírgenes Reino Unido" id="VG">Islas Vírgenes Reino Unido</option>
                                            <option value="Israel" id="IL">Israel</option>
                                            <option value="Italia" id="IT">Italia</option>
                                            <option value="Jamaica" id="JM">Jamaica</option>
                                            <option value="Japón" id="JP">Japón</option>
                                            <option value="Jordania" id="JO">Jordania</option>
                                            <option value="Kazajistán" id="KZ">Kazajistán</option>
                                            <option value="Kenia" id="KE">Kenia</option>
                                            <option value="Kirguizistán" id="KG">Kirguizistán</option>
                                            <option value="Kiribati" id="KI">Kiribati</option>
                                            <option value="Kuwait" id="KW">Kuwait</option>
                                            <option value="Laos" id="LA">Laos</option>
                                            <option value="Lesoto" id="LS">Lesoto</option>
                                            <option value="Letonia" id="LV">Letonia</option>
                                            <option value="Líbano" id="LB">Líbano</option>
                                            <option value="Liberia" id="LR">Liberia</option>
                                            <option value="Libia" id="LY">Libia</option>
                                            <option value="Liechtenstein" id="LI">Liechtenstein</option>
                                            <option value="Lituania" id="LT">Lituania</option>
                                            <option value="Luxemburgo" id="LU">Luxemburgo</option>
                                            <option value="Macao R. A. E" id="MO">Macao R. A. E</option>
                                            <option value="Madagascar" id="MG">Madagascar</option>
                                            <option value="Malasia" id="MY">Malasia</option>
                                            <option value="Malawi" id="MW">Malawi</option>
                                            <option value="Maldivas" id="MV">Maldivas</option>
                                            <option value="Malí" id="ML">Malí</option>
                                            <option value="Malta" id="MT">Malta</option>
                                            <option value="Marruecos" id="MA">Marruecos</option>
                                            <option value="Martinica" id="MQ">Martinica</option>
                                            <option value="Mauricio" id="MU">Mauricio</option>
                                            <option value="Mauritania" id="MR">Mauritania</option>
                                            <option value="Mayotte" id="YT">Mayotte</option>
                                            <option value="México" id="MX">México</option>
                                            <option value="Micronesia" id="FM">Micronesia</option>
                                            <option value="Moldavia" id="MD">Moldavia</option>
                                            <option value="Mónaco" id="MC">Mónaco</option>
                                            <option value="Mongolia" id="MN">Mongolia</option>
                                            <option value="Montserrat" id="MS">Montserrat</option>
                                            <option value="Mozambique" id="MZ">Mozambique</option>
                                            <option value="Namibia" id="NA">Namibia</option>
                                            <option value="Nauru" id="NR">Nauru</option>
                                            <option value="Nepal" id="NP">Nepal</option>
                                            <option value="Nicaragua" id="NI">Nicaragua</option>
                                            <option value="Níger" id="NE">Níger</option>
                                            <option value="Nigeria" id="NG">Nigeria</option>
                                            <option value="Niue" id="NU">Niue</option>
                                            <option value="Norfolk" id="NF">Norfolk</option>
                                            <option value="Noruega" id="NO">Noruega</option>
                                            <option value="Nueva Caledonia" id="NC">Nueva Caledonia</option>
                                            <option value="Nueva Zelanda" id="NZ">Nueva Zelanda</option>
                                            <option value="Omán" id="OM">Omán</option>
                                            <option value="Panamá" id="PA">Panamá</option>
                                            <option value="Papua Nueva Guinea" id="PG">Papua Nueva Guinea</option>
                                            <option value="Paquistán" id="PK">Paquistán</option>
                                            <option value="Paraguay" id="PY">Paraguay</option>
                                            <option value="Perú" id="PE">Perú</option>
                                            <option value="Pitcairn" id="PN">Pitcairn</option>
                                            <option value="Polinesia francesa" id="PF">Polinesia francesa</option>
                                            <option value="Polonia" id="PL">Polonia</option>
                                            <option value="Portugal" id="PT">Portugal</option>
                                            <option value="Puerto Rico" id="PR">Puerto Rico</option>
                                            <option value="Qatar" id="QA">Qatar</option>
                                            <option value="Reino Unido" id="UK">Reino Unido</option>
                                            <option value="República Centroafricana" id="CF">República Centroafricana</option>
                                            <option value="República Checa" id="CZ">República Checa</option>
                                            <option value="República de Sudáfrica" id="ZA">República de Sudáfrica</option>
                                            <option value="República Democrática del Congo Zaire" id="CD">República Democrática del Congo Zaire</option>
                                            <option value="República Dominicana" id="DO">República Dominicana</option>
                                            <option value="Reunión" id="RE">Reunión</option>
                                            <option value="Ruanda" id="RW">Ruanda</option>
                                            <option value="Rumania" id="RO">Rumania</option>
                                            <option value="Rusia" id="RU">Rusia</option>
                                            <option value="Samoa" id="WS">Samoa</option>
                                            <option value="Samoa occidental" id="AS">Samoa occidental</option>
                                            <option value="San Kitts y Nevis" id="KN">San Kitts y Nevis</option>
                                            <option value="San Marino" id="SM">San Marino</option>
                                            <option value="San Pierre y Miquelon" id="PM">San Pierre y Miquelon</option>
                                            <option value="San Vicente e Islas Granadinas" id="VC">San Vicente e Islas Granadinas</option>
                                            <option value="Santa Helena" id="SH">Santa Helena</option>
                                            <option value="Santa Lucía" id="LC">Santa Lucía</option>
                                            <option value="Santo Tomé y Príncipe" id="ST">Santo Tomé y Príncipe</option>
                                            <option value="Senegal" id="SN">Senegal</option>
                                            <option value="Serbia y Montenegro" id="YU">Serbia y Montenegro</option>
                                            <option value="Sychelles" id="SC">Seychelles</option>
                                            <option value="Sierra Leona" id="SL">Sierra Leona</option>
                                            <option value="Singapur" id="SG">Singapur</option>
                                            <option value="Siria" id="SY">Siria</option>
                                            <option value="Somalia" id="SO">Somalia</option>
                                            <option value="Sri Lanka" id="LK">Sri Lanka</option>
                                            <option value="Suazilandia" id="SZ">Suazilandia</option>
                                            <option value="Sudán" id="SD">Sudán</option>
                                            <option value="Suecia" id="SE">Suecia</option>
                                            <option value="Suiza" id="CH">Suiza</option>
                                            <option value="Surinam" id="SR">Surinam</option>
                                            <option value="Svalbard" id="SJ">Svalbard</option>
                                            <option value="Tailandia" id="TH">Tailandia</option>
                                            <option value="Taiwán" id="TW">Taiwán</option>
                                            <option value="Tanzania" id="TZ">Tanzania</option>
                                            <option value="Tayikistán" id="TJ">Tayikistán</option>
                                            <option value="Territorios británicos del océano Indico" id="IO">Territorios británicos del océano Indico</option>
                                            <option value="Territorios franceses del sur" id="TF">Territorios franceses del sur</option>
                                            <option value="Timor Oriental" id="TP">Timor Oriental</option>
                                            <option value="Togo" id="TG">Togo</option>
                                            <option value="Tonga" id="TO">Tonga</option>
                                            <option value="Trinidad y Tobago" id="TT">Trinidad y Tobago</option>
                                            <option value="Túnez" id="TN">Túnez</option>
                                            <option value="Turkmenistán" id="TM">Turkmenistán</option>
                                            <option value="Turquía" id="TR">Turquía</option>
                                            <option value="Tuvalu" id="TV">Tuvalu</option>
                                            <option value="Ucrania" id="UA">Ucrania</option>
                                            <option value="Uganda" id="UG">Uganda</option>
                                            <option value="Uruguay" id="UY">Uruguay</option>
                                            <option value="Uzbekistán" id="UZ">Uzbekistán</option>
                                            <option value="Vanuatu" id="VU">Vanuatu</option>
                                            <option value="Venezuela" id="VE">Venezuela</option>
                                            <option value="Vietnam" id="VN">Vietnam</option>
                                            <option value="Wallis y Futuna" id="WF">Wallis y Futuna</option>
                                            <option value="Yemen" id="YE">Yemen</option>
                                            <option value="Zambia" id="ZM">Zambia</option>
                                            <option value="Zimbabue" id="ZW">Zimbabue</option>
                                        </select>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="emailComp"><b><i class="fa fa-envelope"> Email</i></b></label>
                                        <input type="email" id="emailComp" class="form-control" aria-describedby="emailHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('emailComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="emailHelp" class="text-muted ">ganguitas@gmail.com</small>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-row py-1">
                                        <label for="facebookComp"><b><i class="fa fa-facebook"> Facebook</i></b></label>
                                        <input type="email" id="facebookComp" class="form-control" aria-describedby="facebookHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('facebookComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="facebookHelp" class="text-muted ">ganguitas_facebook@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="instagramComp"><b><i class="fa fa-instagram"> Instagram</i></b></label>
                                        <input type="email" id="instagramComp" class="form-control" aria-describedby="instagramHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('instagramComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="instagramHelp" class="text-muted ">ganguitas_instagram@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="twitterComp"><b><i class="fa fa-twitter"> Twitter</i></b></label>
                                        <input type="email" id="twitterComp" class="form-control" aria-describedby="twitterHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('twitterComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="twitterHelp" class="text-muted ">ganguitas_twitter@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="twitchComp"><b><i class="fa fa-twitch"> Twitch</i></b></label>
                                        <input type="email" id="twitchComp" class="form-control" aria-describedby="twitchHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('twitchComp')" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$" required>
                                        <small id="twitchHelp" class="text-muted ">ganguitas_twitch@gmail.com</small>
                                    </div>
                                    <div class="form-row py-1 ">
                                        <label for="userComp"><b><i class="fa fa-user"> User Name</i></b></label>
                                        <input type="text" id="userComp" class="form-control" aria-describedby="userCompHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validarUser('userComp','empresa')" pattern="^([a-z]+[0-9]{0,4}){3,12}$" required>
                                        <small id="userCompHelp" class="text-muted"> Put the name you want as a user</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="passwordComp"><b><i class="fa fa-lock"> Password</i></b></label>
                                        <input type="password" id="passwordComp" class="form-control" aria-describedby="passwordHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="validacion('passwordComp')" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                        <small id="passwordHelp" class="text-muted">Must be 8-20 characters long, choose a password with at least one capital letter and a number at the end as example Ganguitas1.</small>
                                    </div>
                                    <div class="form-row py-1">
                                        <label for="confirmPassComp"><b><i class="fa fa-lock"> Confirm your password</i></b></label>
                                        <input type="password" id="confirmPassComp" class="form-control" aria-describedby="confirmHelp" onfocus="limpiarAlertas('alertSignComp')" oninput="alertar('passwordComp','confirmPassComp');" pattern="[A-Za-z0-9!?-]{8,20}" required autocomplete="on">
                                        <small id="confirmHelp" class="text-muted">Repeat your password.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="alertSignComp">
                
                </div>
                <div class="card-footer container pb-2 mb-3">
                    <div class="row">
                        <div class="col-9">
                            <a href="#" class="nav-link mr-auto font-weight-bold" data-toggle="modal" data-target="#logIn">You alredy has an account?</a>
                        </div>
                        <div class="col-3">
                            <button type="submit" onclick="signInComp();" class="btn btn-info">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

function validar() {
    var verifUser;
    var verifPass;
    let elem1 = document.getElementById('userName');
    let elem2 = document.getElementById('password');
    console.log(elem1.value.length + " && " + elem2.value.length);

    if (elem1.value.length != 0 && elem2.value.length != 0) {
        axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios',
            method: 'GET',
            responseType: 'json',
            params: {
                tipo: "cliente",
                usuarioCliente: elem1.value
            }
        }).then(function(res) {
            if (res.data.usuarioCliente === elem1.value) {
                selec = res.data;
                selecciono = 'cliente';
                verifUser = false;

                if (selec.passwordCliente == elem2.value) {
                    console.log("entro con password" + elem2.value);
                    selec.actual = true;
                    actualizarCliente();
                    verifPass = false;
                    console.log(verifPass);
                    revisionFinal(verifUser, verifPass);
                } else {
                    verifPass = true;
                    revisionFinal(verifUser, verifPass);
                }
            } else {
                verifUser = true;
            }
            if (verifUser) {
                axios({
                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios',
                        method: 'GET',
                        responseType: 'json',
                        params: {
                            tipo: "empresa",
                            nombreUsuario: elem1.value
                        }
                    })
                    .then(function(res) {
                        if (res.data.nombreUsuario === elem1.value) {
                            selec = res.data;
                            verifUser = false;

                            if (selec.password == elem2.value) {
                                console.log("entro con password" + elem2.value);
                                selec.actual = true;
                                actualizarEmpresa();
                                selecciono = "empresa";
                                verifUser = false;
                                verifPass = false;
                                revisionFinal(verifUser, verifPass);
                            } else {
                                verifPass = true;
                                revisionFinal(verifUser, verifPass);
                            }
                        } else {
                            verifUser = true;
                            revisionFinal(verifUser, verifPass);
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        }).catch(function(err) {
            console.log(err);
        });
    } else {
        verifPass = true;
        verifUser = true;
        revisionFinal(verifUser, verifPass);
    }
}

function revisionFinal(verifUser, verifPass) {
    document.getElementById("alertLog").innerHTML = "";

    if (verifUser || verifPass) {
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("userName").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.color = "red";
        document.getElementById("alertLog").innerHTML = "";
        document.getElementById("alertLog").innerHTML +=
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong User or Password!, </strong>Please make sure that is your user name and your password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    } else if (verifUser === false && verifPass === false) {
        //redireccionar(selecciono);
        /*let pubs = "";
        for (let i = 0; i < selec.publicacionesFav.length; i++) {
            pubs += JSON.stringify(selec.publicacionesFav[i]) + ", ";

        }
        console.log(pubs);*/
        console.log("llego aki");
    }
}

function actualizarCliente() {
    selec.registroAcciones.push(msjParaRegistro('logIn', selec.usuarioCliente));
    let clienteModif = {
        usuarioClienteModif: selec.usuarioCliente,
        nombreCliente: selec.nombreCliente,
        usuarioCliente: selec.usuarioCliente,
        apellidoCliente: selec.apellidoCliente,
        emailCliente: selec.emailCliente,
        passwordCliente: selec.passwordCliente,
        actual: selec.actual,
        fechaNacimiento: selec.fechaNacimiento,
        fotoCliente: selec.fotoCliente,
        genero: selec.genero,
        pais: selec.pais,
        companiasFav: selec.companiasFav,
        publicacionesFav: selec.publicacionesFav,
        comprasHechas: selec.comprasHechas,
        comprar: selec.comprar,
        tipo: selec.tipo,
        fechaSignIn: selec.fechaSignIn,
        registroAcciones: selec.registroAcciones
    }

    axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
            method: 'PUT',
            responseType: 'json',
            data: clienteModif
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(error) {
            console.error(error);
        });
}

function actualizarEmpresa() {
    selec.registroAcciones.push(msjParaRegistro('logIn', selec.nombreUsuario));
    let empresaModif = {
        nombreUsuarioModif: selec.nombreUsuario,
        nombreEmpresa: selec.nombreEmpresa,
        logoEmpresa: selec.logoEmpresa,
        banner: selec.banner,
        pais: selec.pais,
        direccion: selec.direccion,
        longitud: selec.longitud,
        latitud: selec.latitud,
        tipoEmpresa: selec.tipoEmpresa,
        nombreUsuario: selec.nombreUsuario,
        password: selec.password,
        facebook: selec.facebook,
        instagram: selec.instagram,
        twitter: selec.twitter,
        twitch: selec.twitch,
        email: selec.email,
        actual: selec.actual,
        publicaciones: selec.publicaciones,
        calificacionEmpresaDe: selec.calificacionEmpresaDe,
        tipo: selec.tipo,
        registroAcciones: selec.registroAcciones
    }

    axios({
            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
            method: 'PUT',
            responseType: 'json',
            data: empresaModif
        })
        .then(function(res) {
            console.log(res)
        })
        .catch(function(error) {
            console.error(error);
        });
}

function redireccionar(seleccion) {
    if (seleccion == "cliente") {
        top.location.href = "../html/ganguitasUsuario.html";
    } else {
        top.location.href = "../html/ganguitasCompany.html";
    }
}

function colorLogin() {
    document.getElementById("userName").style.borderColor = "green";
    document.getElementById("userName").style.color = "green";
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("password").style.color = "green";
    document.getElementById("alertLog").innerHTML = "";
}

function cambiar(id) {
    document.getElementById(id).style.borderColor = "green";
    document.getElementById(id).style.color = "green";
}

function validacion(id) {
    var elem = document.getElementById(id);
    if (id == 'dateUser') {
        limpiarAlertas('alertSignUser');
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        }
    } else if (id == 'passwordUser') {
        document.getElementById('confirmPassUser').value = "";
        alertar("passwordUser", "confirmPassUser");
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        } else {
            elem.style.borderColor = "red";
            elem.style.color = "red";
        }
    } else if (id == 'passwordComp') {
        document.getElementById('confirmPassComp').value = "";
        alertar("passwordComp", "confirmPassComp");
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        } else {
            elem.style.borderColor = "red";
            elem.style.color = "red";
        }
    } else {
        if (elem.checkValidity()) {
            elem.style.borderColor = "green";
            elem.style.color = "green";
        } else {
            elem.style.borderColor = "red";
            elem.style.color = "red";
        }
    }

}

function alertar(id1, id2) {
    var elem1 = document.getElementById(id1);
    var elem2 = document.getElementById(id2);
    if (elem1.value == elem2.value) {
        if (elem2.checkValidity()) {
            elem2.style.borderColor = "green";
            elem2.style.color = "green";
            verifPassSign = true;
        } else {
            elem2.style.borderColor = "red";
            elem2.style.color = "red";
            verifPassSign = false;
        }
    } else {
        elem2.style.borderColor = "red";
        elem2.style.color = "red";
        verifPassSign = false;
    }

}

function validarUser(id, descripcion) {
    var elem = document.getElementById(id);
    if (descripcion == 'cliente') {
        axios({
                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
                method: 'GET',
                responseType: 'json',
                params: {
                    tipo: "cliente",
                }
            })
            .then(function(res) {
                console.log(res.data);

                var clientes = res.data;

                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuarioCliente == elem.value) {
                        elem.style.borderColor = "red";
                        elem.style.color = "red";
                        verifUserSign = false;
                        break;
                    } else {
                        if (elem.checkValidity()) {
                            elem.style.borderColor = "green";
                            elem.style.color = "green";
                            verifUserSign = true;

                        } else {
                            elem.style.borderColor = "red";
                            elem.style.color = "red";
                            verifUserSign = false;
                        }
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            });

    } else if (descripcion == 'empresa') {
        axios({
                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas',
                method: 'GET',
                responseType: 'json',
                params: {
                    tipo: "empresa",
                }
            })
            .then(function(res) {
                var empresas = res.data;
                var empresasLength = 0;
                empresas.map(item => {
                    empresasLength++;
                });
                for (let i = 0; i < empresasLength; i++) {
                    if (empresas[i].nombreUsuario == elem.value) {
                        elem.style.borderColor = "red";
                        elem.style.color = "red";
                        verifUserSign = false;
                        break;
                    } else {
                        if (elem.checkValidity()) {
                            elem.style.borderColor = "green";
                            elem.style.color = "green";
                            verifUserSign = true;

                        } else {
                            elem.style.borderColor = "red";
                            elem.style.color = "red";
                            verifUserSign = false;
                        }
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}

function limpiarAlertas(id) {
    document.getElementById(id).innerHTML = "";
}

function signInUser() {
    if (document.getElementById('imagenUs').value != null) {
        var frm = $('#form1');
        let formData = new FormData(frm[0]);
        axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', formData)
            .then(res => {
                //console.log(res);
                if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUserSign && verifPassSign) {
                    var nuevoCliente = {
                        nombreCliente: document.getElementById("firstName").value,
                        apellidoCliente: document.getElementById("lastName").value,
                        usuarioCliente: document.getElementById("usName").value,
                        emailCliente: document.getElementById("emailUser").value,
                        passwordCliente: document.getElementById("passwordUser").value,
                        actual: true,
                        fechaNacimiento: document.getElementById("dateUser").value,
                        fotoCliente: "../" + res.data,
                        genero: document.getElementById("genero").value,
                        pais: document.getElementById("selectPaisCliente").value,
                        companiasFav: [],
                        publicacionesFav: [],
                        comprasHechas: [],
                        comprar: [],
                        tipo: "cliente",
                        fechaSignIn: fechaActual(),
                        registroAcciones: [msjParaRegistro('signIn', document.getElementById("usName"))]

                    }
                    axios({
                            url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
                            method: 'POST',
                            responseType: 'json',
                            data: nuevoCliente
                        })
                        .then(function() {
                            redireccionar('cliente');
                        })
                        .catch(function(error) {
                            console.error(error);
                        });
                } else if (verifUsersign == false && document.getElementById("usName").value.length >= 3) {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>User is already in use!, </strong>Please try with another user name.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (verifPassSign == false && document.getElementById("passwordUser").value.length >= 8) {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Passwords do not match!, </strong>Please check the passwords.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;

                } else if (document.getElementById("firstName").style.color == "red" || document.getElementById("lastName").style.color == "red" || document.getElementById("emailUser").style.color == "red" || document.getElementById("usName").style.color == "red" || document.getElementById("passwordUser").style.color == "red" || document.getElementById("confirmPassUser").style.color == "red") {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                } else if (document.getElementById("firstName").value.length == 0 || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("usName").value.length == 0 || document.getElementById("passwordUser").value.length == 0 || document.getElementById("confirmPassUser").value.length == 0) {
                    document.getElementById("alertSignUser").innerHTML = "";
                    document.getElementById("alertSignUser").innerHTML +=
                        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Form incomplete!, </strong>Please fill all the fields.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                }

            }).catch(err => {
                console.error(err);
            });
    } else {
        if (document.getElementById("firstName").style.color == "green" && document.getElementById("lastName").style.color == "green" && document.getElementById("emailUser").style.color == "green" && verifUserSign && verifPassSign) {
            var nuevoCliente = {
                nombreCliente: document.getElementById("firstName").value,
                apellidoCliente: document.getElementById("lastName").value,
                usuarioCliente: document.getElementById("usName").value,
                emailCliente: document.getElementById("emailUser").value,
                passwordCliente: document.getElementById("passwordUser").value,
                actual: true,
                fechaNacimiento: document.getElementById("dateUser").value,
                fotoCliente: "../" + res.data,
                genero: document.getElementById("genero").value,
                pais: document.getElementById("selectPaisCliente").value,
                companiasFav: [],
                publicacionesFav: [],
                comprasHechas: [],
                comprar: [],
                tipo: "cliente",
                fechaSignIn: fechaActual(),
                registroAcciones: [msjParaRegistro('signIn', document.getElementById("usName"))]

            }
            axios({
                    url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/usuarios.php',
                    method: 'POST',
                    responseType: 'json',
                    data: nuevoCliente
                })
                .then(function() {
                    redireccionar('cliente');
                })
                .catch(function(error) {
                    console.error(error);
                });
        } else if (verifUsersign == false && document.getElementById("usName").value.length >= 3) {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>User is already in use!, </strong>Please try with another user name.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (verifPassSign == false && document.getElementById("passwordUser").value.length >= 8) {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Passwords do not match!, </strong>Please check the passwords.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;

        } else if (document.getElementById("firstName").style.color == "red" || document.getElementById("lastName").style.color == "red" || document.getElementById("emailUser").style.color == "red" || document.getElementById("usName").style.color == "red" || document.getElementById("passwordUser").style.color == "red" || document.getElementById("confirmPassUser").style.color == "red") {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        } else if (document.getElementById("firstName").value.length == 0 || document.getElementById("lastName").value.length == 0 || document.getElementById("emailUser").value.length == 0 || document.getElementById("usName").value.length == 0 || document.getElementById("passwordUser").value.length == 0 || document.getElementById("confirmPassUser").value.length == 0) {
            document.getElementById("alertSignUser").innerHTML = "";
            document.getElementById("alertSignUser").innerHTML +=
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Form incomplete!, </strong>Please fill all the fields.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        }
    }


}

function signInComp() {
    if (document.getElementById('imagenCompany').value != null) {
        var frm = $('#form2');
        let formData = new FormData(frm[0]);
        axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', formData)
            .then(res => {
                //console.log(res);
                if (document.getElementById('bannerCompany').value != null) {
                    var frm1 = $('#form3');
                    let frmData = new frmData(frm1[0]);
                    axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', formData)
                        .then(resa => {
                            //console.log(res);
                            if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUsersign && verifPassSign) {
                                var nuevaComp = {
                                    nombreEmpresa: document.getElementById("institutionName").value,
                                    logoEmpresa: '../' + res.data,
                                    banner: '../' + resa.data,
                                    pais: document.getElementById("selectPaisEmpresa").value,
                                    direccion: document.getElementById("direcComp").value,
                                    longitud: document.getElementById("longComp").value,
                                    latitud: document.getElementById("latComp").value,
                                    tipoEmpresa: document.getElementById("institutionDescription").value,
                                    nombreUsuario: document.getElementById("userComp").value,
                                    password: document.getElementById("passwordComp").value,
                                    facebook: document.getElementById("facebookComp").value,
                                    instagram: document.getElementById("instagramComp").value,
                                    twitter: document.getElementById("twitterComp").value,
                                    twitch: document.getElementById("twitchComp").value,
                                    email: document.getElementById("emailComp").value,
                                    actual: true,
                                    publicaciones: [],
                                    calificacionEmpresaDe: [],
                                    tipo: "empresa",
                                    fechaSignIn: fechaActual(),
                                    registroAcciones: [msjParaRegistro("sigIn", document.getElementById("userComp"))]
                                }

                                axios({
                                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                                        method: 'POST',
                                        responseType: 'json',
                                        data: nuevaComp
                                    })
                                    .then(function() {
                                        redireccionar('empresa');
                                    })
                                    .catch(function(error) {
                                        console.error(error);
                                    });
                            } else if (verifUsersign == false && document.getElementById("userComp").value.length >= 3) {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>User is already in use!, </strong>Please try with another user name.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Passwords do not match!, </strong>Please check the passwords.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;

                            } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                                document.getElementById("passwordComp").value == 0) {
                                document.getElementById("alertSignComp").innerHTML = "";
                                document.getElementById("alertSignComp").innerHTML +=
                                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>Form incomplete!, </strong>Please fill all the fields.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>`;
                            }
                        }).catch(err => {
                            console.error(err);
                        });
                } else {
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUsersign && verifPassSign) {
                        var nuevaComp = {
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: '../' + res.data,
                            banner: '../img/logo.png',
                            pais: document.getElementById("selectPaisEmpresa").value,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: document.getElementById("passwordComp").value,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: true,
                            publicaciones: [],
                            calificacionEmpresaDe: [],
                            tipo: "empresa",
                            fechaSignIn: fechaActual(),
                            registroAcciones: [msjParaRegistro("sigIn", document.getElementById("userComp"))]
                        }

                        axios({
                                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                                method: 'POST',
                                responseType: 'json',
                                data: nuevaComp
                            })
                            .then(function() {
                                redireccionar('empresa');
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (verifUsersign == false && document.getElementById("userComp").value.length >= 3) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>User is already in use!, </strong>Please try with another user name.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Passwords do not match!, </strong>Please check the passwords.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

                    } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                        document.getElementById("passwordComp").value == 0) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Form incomplete!, </strong>Please fill all the fields.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    }
                }

            }).catch(err => {
                console.error(err);
            });

    } else {
        if (document.getElementById('bannerCompany').value != null) {
            var frm1 = $('#form3');
            let frmData = new frmData(frm1[0]);
            axios.post('http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-front-end/sube', formData)
                .then(resa => {
                    //console.log(res);
                    if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUsersign && verifPassSign) {
                        var nuevaComp = {
                            nombreEmpresa: document.getElementById("institutionName").value,
                            logoEmpresa: '../logo.png',
                            banner: '../' + resa.data,
                            pais: document.getElementById("selectPaisEmpresa").value,
                            direccion: document.getElementById("direcComp").value,
                            longitud: document.getElementById("longComp").value,
                            latitud: document.getElementById("latComp").value,
                            tipoEmpresa: document.getElementById("institutionDescription").value,
                            nombreUsuario: document.getElementById("userComp").value,
                            password: document.getElementById("passwordComp").value,
                            facebook: document.getElementById("facebookComp").value,
                            instagram: document.getElementById("instagramComp").value,
                            twitter: document.getElementById("twitterComp").value,
                            twitch: document.getElementById("twitchComp").value,
                            email: document.getElementById("emailComp").value,
                            actual: true,
                            publicaciones: [],
                            calificacionEmpresaDe: [],
                            tipo: "empresa",
                            fechaSignIn: fechaActual(),
                            registroAcciones: [msjParaRegistro("sigIn", document.getElementById("userComp"))]
                        }

                        axios({
                                url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                                method: 'POST',
                                responseType: 'json',
                                data: nuevaComp
                            })
                            .then(function() {
                                redireccionar('empresa');
                            })
                            .catch(function(error) {
                                console.error(error);
                            });
                    } else if (verifUsersign == false && document.getElementById("userComp").value.length >= 3) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>User is already in use!, </strong>Please try with another user name.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Passwords do not match!, </strong>Please check the passwords.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

                    } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                        document.getElementById("passwordComp").value == 0) {
                        document.getElementById("alertSignComp").innerHTML = "";
                        document.getElementById("alertSignComp").innerHTML +=
                            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Form incomplete!, </strong>Please fill all the fields.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
                    }
                }).catch(err => {
                    console.error(err);
                });
        } else {
            if (document.getElementById("institutionName").style.color == "green" && document.getElementById("direcComp").style.color == "green" && document.getElementById("longComp").style.color == "green" && document.getElementById("latComp").style.color == "green" && document.getElementById("institutionDescription").style.color == "green" && document.getElementById("facebookComp").style.color == "green" && document.getElementById("instagramComp").style.color == "green" && document.getElementById("twitterComp").style.color == "green" && document.getElementById("twitchComp").style.color == "green" && document.getElementById("emailComp").style.color == "green" && verifUsersign && verifPassSign) {
                var nuevaComp = {
                    nombreEmpresa: document.getElementById("institutionName").value,
                    logoEmpresa: '../logo.png',
                    banner: '../img/logo.png',
                    pais: document.getElementById("selectPaisEmpresa").value,
                    direccion: document.getElementById("direcComp").value,
                    longitud: document.getElementById("longComp").value,
                    latitud: document.getElementById("latComp").value,
                    tipoEmpresa: document.getElementById("institutionDescription").value,
                    nombreUsuario: document.getElementById("userComp").value,
                    password: document.getElementById("passwordComp").value,
                    facebook: document.getElementById("facebookComp").value,
                    instagram: document.getElementById("instagramComp").value,
                    twitter: document.getElementById("twitterComp").value,
                    twitch: document.getElementById("twitchComp").value,
                    email: document.getElementById("emailComp").value,
                    actual: true,
                    publicaciones: [],
                    calificacionEmpresaDe: [],
                    tipo: "empresa",
                    fechaSignIn: fechaActual(),
                    registroAcciones: [msjParaRegistro("sigIn", document.getElementById("userComp"))]
                }

                axios({
                        url: 'http://sitefolder/proyecto-POO/proyecto-POO-1.0/proyecto-back-end/API/empresas.php',
                        method: 'POST',
                        responseType: 'json',
                        data: nuevaComp
                    })
                    .then(function() {
                        redireccionar('empresa');
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else if (verifUsersign == false && document.getElementById("userComp").value.length >= 3) {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>User is already in use!, </strong>Please try with another user name.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else if (verifPassSign == false && document.getElementById("passwordComp").value.length >= 8) {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Passwords do not match!, </strong>Please check the passwords.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;

            } else if (document.getElementById("institutionName").style.color == "red" || document.getElementById("direcComp").style.color == "red" || document.getElementById("longComp").style.color == "red" || document.getElementById("latComp").style.color == "red" || document.getElementById("institutionDescription").style.color == "red" || document.getElementById("facebookComp").style.color == "red" || document.getElementById("instagramComp").style.color == "red" || document.getElementById("twitterComp").style.color == "red" || document.getElementById("twitchComp").style.color == "red" || document.getElementById("emailComp").style.color == "red" || document.getElementById("userComp").style.color == "red" || document.getElementById("passwordComp").style.color == "red") {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Incorrect information or fields are incomplete!, </strong>Please check the fields with red border color.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            } else if (document.getElementById("institutionName").value.length == 0 || document.getElementById("direcComp").value.length == 0 || document.getElementById("longComp").value.length == 0 || document.getElementById("latComp").value.length == 0 || document.getElementById("institutionDescription").value.length == 0 || document.getElementById("facebookComp").value.length == 0 || document.getElementById("instagramComp").value.length == 0 || document.getElementById("twitterComp").value.length == 0 || document.getElementById("twitchComp").value.length == 0 || document.getElementById("emailComp").value.length == 0 || document.getElementById("userComp").value == 0 ||
                document.getElementById("passwordComp").value == 0) {
                document.getElementById("alertSignComp").innerHTML = "";
                document.getElementById("alertSignComp").innerHTML +=
                    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Form incomplete!, </strong>Please fill all the fields.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            }
        }
    }
}

function fechaActual() {
    var f = new Date();
    var fecha = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();
    return fecha;
}

function msjParaRegistro(descripcion, nombre) {
    let f = new Date();
    let msj;
    if (descripcion == "signIn") {
        msj = {
            registro: "The user " + nombre + " was registered with the date and time of registration: " + f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    } else if (descripcion == "logIn") {
        msj = {
            inicioSesion: "User " + nombre + " login with login date: " + f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
        }
    }
    return msj;
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo.png" alt="imagen logo">`;
    } else {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        document.getElementById("logoGanguitas").innerHTML =
            `<img src="../img/logo-blanco-y-negro.png" alt="imagen logo">`;

    }

});