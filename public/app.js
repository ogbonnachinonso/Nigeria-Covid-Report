//fetch API
const url = "https://covidnigeria.herokuapp.com/api";
fetch(url)
.then((respone) => respone.json())
.then((response) => {
  //declare required variables
   const nigeria = response.data;
   const abia = response.data.states[33];
   const imo = response.data.states[32];
   const enugu = response.data.states[27];
   const ebonyi = response.data.states[29];
   const lagos = response.data.states[0];
   const abuja = response.data.states[2];
   const kano = response.data.states[1];
   const katsina = response.data.states[3];
   const borno = response.data.states[4];
   const bauchi = response.data.states[5];
   const ogun = response.data.states[6];
   const jigawa = response.data.states[7];
   const gombe = response.data.states[8];
   const kaduna = response.data.states[9];
   const sokoto = response.data.states[10];
   const edo = response.data.states[11];
   const zamfara = response.data.states[12];
   const oyo = response.data.states[13];
   const osun = response.data.states[14];
   const kwara = response.data.states[15];
   const nasarawa = response.data.states[16];
   const kebbi = response.data.states[17];
   const rivers = response.data.states[18];
   const adamawa = response.data.states[19];
   const plateau = response.data.states[20];
   const akwaIbom = response.data.states[21];
   const delta = response.data.states[22];
   const ondo = response.data.states[23];
   const taraba = response.data.states[24];
   const ekiti = response.data.states[25];
   const yobe = response.data.states[26];
   const niger = response.data.states[28];
   const bayelsa = response.data.states[30];
   const benue = response.data.states[31];


    // get our elements
   const el_nigeria = document.querySelector('.nigeria')
   const el_nigeria_confirmed_cases = document.querySelector('.nigeria_confirmed_cases')
   const el_nigeria_active_cases = document.querySelector('.nigeria_active_cases')
   const el_nigeria_discharged_cases = document.querySelector('.nigeria_discharged_cases')
   const el_nigeria_death_cases = document.querySelector('.nigeria_death_cases')

   const el_abia = document.querySelector('.abia')
   const el_abiaReport = document.querySelector('.abia_report')
   const el_abia_active_cases = document.querySelector('.abia_active_cases')
   const el_abia_discharged_cases = document.querySelector('.abia_discharged_cases')
   const el_abia_death_cases = document.querySelector('.abia_death_cases')

   const el_lagos = document.querySelector('.lagos')
   const el_lagosReport = document.querySelector('.lagos_report')
   const el_lagos_active_cases = document.querySelector('.lagos_active_cases')
   const el_lagos_discharged_cases = document.querySelector('.lagos_discharged_cases')
   const el_lagos_death_cases = document.querySelector('.lagos_death_cases')

   const el_abuja = document.querySelector('.abuja')
   const el_abujaReport = document.querySelector('.abuja_report')
   const el_abuja_active_cases = document.querySelector('.abuja_active_cases')
   const el_abuja_discharged_cases = document.querySelector('.abuja_discharged_cases')
   const el_abuja_death_cases = document.querySelector('.abuja_death_cases')

   const el_imo = document.querySelector('.imo')
   const el_imoReport = document.querySelector('.imo_report')
   const el_imo_active_cases = document.querySelector('.imo_active_cases')
   const el_imo_discharged_cases = document.querySelector('.imo_discharged_cases')
   const el_imo_death_cases = document.querySelector('.imo_death_cases')

   const el_anambra = document.querySelector('.anambra')
   const el_anambraReport = document.querySelector('.anambra_report')

   const el_enugu = document.querySelector('.enugu')
   const el_enuguReport = document.querySelector('.enugu_report')
   const el_enugu_active_cases = document.querySelector('.enugu_active_cases')
   const el_enugu_discharged_cases = document.querySelector('.enugu_discharged_cases')
   const el_enugu_death_cases = document.querySelector('.enugu_death_cases')

   const el_ebonyi = document.querySelector('.ebonyi')
   const el_ebonyiReport = document.querySelector('.ebonyi_report')
   const el_ebonyi_active_cases = document.querySelector('.ebonyi_active_cases')
   const el_ebonyi_discharged_cases = document.querySelector('.ebonyi_discharged_cases')
   const el_ebonyi_death_cases = document.querySelector('.ebonyi_death_cases')

   const el_kano = document.querySelector('.kano')
   const el_kanoReport = document.querySelector('.kano_report')
   const el_kano_active_cases = document.querySelector('.kano_active_cases')
   const el_kano_discharged_cases = document.querySelector('.kano_discharged_cases')
   const el_kano_death_cases = document.querySelector('.kano_death_cases')

   const el_katsina = document.querySelector('.katsina')
   const el_katsinaReport = document.querySelector('.katsina_report')
   const el_katsina_active_cases = document.querySelector('.katsina_active_cases')
   const el_katsina_discharged_cases = document.querySelector('.katsina_discharged_cases')
   const el_katsina_death_cases = document.querySelector('.katsina_death_cases')
   
   const el_borno = document.querySelector('.borno')
   const el_bornoReport = document.querySelector('.borno_report')
   const el_borno_active_cases = document.querySelector('.borno_active_cases')
   const el_borno_discharged_cases = document.querySelector('.borno_discharged_cases')
   const el_borno_death_cases = document.querySelector('.borno_death_cases')
   
   const el_bauchi = document.querySelector('.bauchi')
   const el_bauchiReport = document.querySelector('.bauchi_report')
   const el_bauchi_active_cases = document.querySelector('.bauchi_active_cases')
   const el_bauchi_discharged_cases = document.querySelector('.bauchi_discharged_cases')
   const el_bauchi_death_cases = document.querySelector('.bauchi_death_cases')
   
   const el_ogun = document.querySelector('.ogun')
   const el_ogunReport = document.querySelector('.ogun_report')
   const el_ogun_active_cases = document.querySelector('.ogun_active_cases')
   const el_ogun_discharged_cases = document.querySelector('.ogun_discharged_cases')
   const el_ogun_death_cases = document.querySelector('.ogun_death_cases')
   
   const el_jigawa = document.querySelector('.jigawa')
   const el_jigawaReport = document.querySelector('.jigawa_report')
   const el_jigawa_active_cases = document.querySelector('.jigawa_active_cases')
   const el_jigawa_discharged_cases = document.querySelector('.jigawa_discharged_cases')
   const el_jigawa_death_cases = document.querySelector('.jigawa_death_cases')
   
   const el_gombe = document.querySelector('.gombe')
   const el_gombeReport = document.querySelector('.gombe_report')
   const el_gombe_active_cases = document.querySelector('.gombe_active_cases')
   const el_gombe_discharged_cases = document.querySelector('.gombe_discharged_cases')
   const el_gombe_death_cases = document.querySelector('.gombe_death_cases')
   
   const el_kaduna = document.querySelector('.kaduna')
   const el_kadunaReport = document.querySelector('.kaduna_report')
   const el_kaduna_active_cases = document.querySelector('.kaduna_active_cases')
   const el_kaduna_discharged_cases = document.querySelector('.kaduna_discharged_cases')
   const el_kaduna_death_cases = document.querySelector('.kaduna_death_cases')
   
   const el_sokoto = document.querySelector('.sokoto')
   const el_sokotoReport = document.querySelector('.sokoto_report')
   const el_sokoto_active_cases = document.querySelector('.sokoto_active_cases')
   const el_sokoto_discharged_cases = document.querySelector('.sokoto_discharged_cases')
   const el_sokoto_death_cases = document.querySelector('.sokoto_death_cases')
   
   const el_edo = document.querySelector('.edo')
   const el_edoReport = document.querySelector('.edo_report')
   const el_edo_active_cases = document.querySelector('.edo_active_cases')
   const el_edo_discharged_cases = document.querySelector('.edo_discharged_cases')
   const el_edo_death_cases = document.querySelector('.edo_death_cases')
   
   const el_zamfara = document.querySelector('.zamfara')
   const el_zamfaraReport = document.querySelector('.zamfara_report')
   const el_zamfara_active_cases = document.querySelector('.zamfara_active_cases')
   const el_zamfara_discharged_cases = document.querySelector('.zamfara_discharged_cases')
   const el_zamfara_death_cases = document.querySelector('.zamfara_death_cases')
   
   const el_oyo = document.querySelector('.oyo')
   const el_oyoReport = document.querySelector('.oyo_report')
   const el_oyo_active_cases = document.querySelector('.oyo_active_cases')
   const el_oyo_discharged_cases = document.querySelector('.oyo_discharged_cases')
   const el_oyo_death_cases = document.querySelector('.oyo_death_cases')
   
   const el_osun = document.querySelector('.osun')
   const el_osunReport = document.querySelector('.osun_report')
   const el_osun_active_cases = document.querySelector('.osun_active_cases')
   const el_osun_discharged_cases = document.querySelector('.osun_discharged_cases')
   const el_osun_death_cases = document.querySelector('.osun_death_cases')
   
   const el_kwara = document.querySelector('.kwara')
   const el_kwaraReport = document.querySelector('.kwara_report')
   const el_kwara_active_cases = document.querySelector('.kwara_active_cases')
   const el_kwara_discharged_cases = document.querySelector('.kwara_discharged_cases')
   const el_kwara_death_cases = document.querySelector('.kwara_death_cases')
   
   const el_nasarawa = document.querySelector('.nasarawa')
   const el_nasarawaReport = document.querySelector('.nasarawa_report')
   const el_nasarawa_active_cases = document.querySelector('.nasarawa_active_cases')
   const el_nasarawa_discharged_cases = document.querySelector('.nasarawa_discharged_cases')
   const el_nasarawa_death_cases = document.querySelector('.nasarawa_death_cases')
   
   const el_kebbi = document.querySelector('.kebbi')
   const el_kebbiReport = document.querySelector('.kebbi_report')
   const el_kebbi_active_cases = document.querySelector('.kebbi_active_cases')
   const el_kebbi_discharged_cases = document.querySelector('.kebbi_discharged_cases')
   const el_kebbi_death_cases = document.querySelector('.kebbi_death_cases')
   
   const el_rivers = document.querySelector('.rivers')
   const el_riversReport = document.querySelector('.rivers_report')
   const el_rivers_active_cases = document.querySelector('.rivers_active_cases')
   const el_rivers_discharged_cases = document.querySelector('.rivers_discharged_cases')
   const el_rivers_death_cases = document.querySelector('.rivers_death_cases')
   
   const el_adamawa = document.querySelector('.adamawa')
   const el_adamawaReport = document.querySelector('.adamawa_report')
   const el_adamawa_active_cases = document.querySelector('.adamawa_active_cases')
   const el_adamawa_discharged_cases = document.querySelector('.adamawa_discharged_cases')
   const el_adamawa_death_cases = document.querySelector('.adamawa_death_cases')
   
   const el_plateau = document.querySelector('.plateau')
   const el_plateauReport = document.querySelector('.plateau_report')
   const el_plateau_active_cases = document.querySelector('.plateau_active_cases')
   const el_plateau_discharged_cases = document.querySelector('.plateau_discharged_cases')
   const el_plateau_death_cases = document.querySelector('.plateau_death_cases')
   
   const el_akwaIbom = document.querySelector('.akwaIbom')
   const el_akwaIbomReport = document.querySelector('.akwaIbom_report')
   const el_akwaIbom_active_cases = document.querySelector('.akwaIbom_active_cases')
   const el_akwaIbom_discharged_cases = document.querySelector('.akwaIbom_discharged_cases')
   const el_akwaIbom_death_cases = document.querySelector('.akwaIbom_death_cases')
   
   const el_delta = document.querySelector('.delta')
   const el_deltaReport = document.querySelector('.delta_report')
   const el_delta_active_cases = document.querySelector('.delta_active_cases')
   const el_delta_discharged_cases = document.querySelector('.delta_discharged_cases')
   const el_delta_death_cases = document.querySelector('.delta_death_cases')
   
   const el_ondo = document.querySelector('.ondo')
   const el_ondoReport = document.querySelector('.ondo_report')
   const el_ondo_active_cases = document.querySelector('.ondo_active_cases')
   const el_ondo_discharged_cases = document.querySelector('.ondo_discharged_cases')
   const el_ondo_death_cases = document.querySelector('.ondo_death_cases')
   
   const el_taraba = document.querySelector('.taraba')
   const el_tarabaReport = document.querySelector('.taraba_report')
   const el_taraba_active_cases = document.querySelector('.taraba_active_cases')
   const el_taraba_discharged_cases = document.querySelector('.taraba_discharged_cases')
   const el_taraba_death_cases = document.querySelector('.taraba_death_cases')
   
   const el_ekiti = document.querySelector('.ekiti')
   const el_ekitiReport = document.querySelector('.ekiti_report')
   const el_ekiti_active_cases = document.querySelector('.ekiti_active_cases')
   const el_ekiti_discharged_cases = document.querySelector('.ekiti_discharged_cases')
   const el_ekiti_death_cases = document.querySelector('.ekiti_death_cases')
   
   const el_yobe = document.querySelector('.yobe')
   const el_yobeReport = document.querySelector('.yobe_report')
   const el_yobe_active_cases = document.querySelector('.yobe_active_cases')
   const el_yobe_discharged_cases = document.querySelector('.yobe_discharged_cases')
   const el_yobe_death_cases = document.querySelector('.yobe_death_cases')
   
   const el_niger = document.querySelector('.niger')
   const el_nigerReport = document.querySelector('.niger_report')
   const el_niger_active_cases = document.querySelector('.niger_active_cases')
   const el_niger_discharged_cases = document.querySelector('.niger_discharged_cases')
   const el_niger_death_cases = document.querySelector('.niger_death_cases')
   
   const el_bayelsa = document.querySelector('.bayelsa')
   const el_bayelsaReport = document.querySelector('.bayelsa_report')
   const el_bayelsa_active_cases = document.querySelector('.bayelsa_active_cases')
   const el_bayelsa_discharged_cases = document.querySelector('.bayelsa_discharged_cases')
   const el_bayelsa_death_cases = document.querySelector('.bayelsa_death_cases')
   
   const el_benue = document.querySelector('.benue')
   const el_benueReport = document.querySelector('.benue_report')
   const el_benue_active_cases = document.querySelector('.benue_active_cases')
   const el_benue_discharged_cases = document.querySelector('.benue_discharged_cases')
   const el_benue_death_cases = document.querySelector('.benue_death_cases')


   //append data from api
   el_nigeria.textContent = "Nigeria";
   el_nigeria_confirmed_cases.textContent = nigeria.totalConfirmedCases;
   el_nigeria_active_cases.textContent = nigeria.totalActiveCases; el_nigeria_discharged_cases.textContent = nigeria.discharged; 
   el_nigeria_death_cases.textContent = nigeria.death;

   el_abia.textContent = abia.state;
   el_abiaReport.textContent = abia.confirmedCases;
   el_abia_active_cases.textContent = abia.casesOnAdmission;
   el_abia_discharged_cases.textContent = abia.discharged; 
   el_abia_death_cases.textContent = abia.death;
   
   el_lagos.textContent = lagos.state;
   el_lagosReport.textContent = lagos.confirmedCases;
   el_lagos_active_cases.textContent = lagos.casesOnAdmission; 
   el_lagos_discharged_cases.textContent = lagos.discharged; 
   el_lagos_death_cases.textContent = lagos.death;

   el_abuja.textContent = abuja.state;
   el_abujaReport.textContent = abuja.confirmedCases;
   el_abuja_active_cases.textContent = abuja.casesOnAdmission; 
   el_abuja_discharged_cases.textContent = abuja.discharged; 
   el_abuja_death_cases.textContent = abuja.death;

   el_imo.textContent = imo.state;
   el_imoReport.textContent = imo.confirmedCases;
   el_imo_active_cases.textContent = imo.casesOnAdmission; 
   el_imo_discharged_cases.textContent = imo.discharged; 
   el_imo_death_cases.textContent = imo.death;

   el_enugu.textContent = enugu.state;
   el_enuguReport.textContent = enugu.confirmedCases;
   el_enugu_active_cases.textContent = enugu.casesOnAdmission; 
   el_enugu_discharged_cases.textContent = enugu.discharged; 
   el_enugu_death_cases.textContent = enugu.death;

   el_ebonyi.textContent = ebonyi.state;
   el_ebonyiReport.textContent = ebonyi.confirmedCases;
   el_ebonyi_active_cases.textContent = ebonyi.casesOnAdmission; 
   el_ebonyi_discharged_cases.textContent = ebonyi.discharged; 
   el_ebonyi_death_cases.textContent = ebonyi.death;

   el_kano.textContent = kano.state;
   el_kanoReport.textContent = kano.confirmedCases;
   el_kano_active_cases.textContent = kano.casesOnAdmission; 
   el_kano_discharged_cases.textContent = kano.discharged; 
   el_kano_death_cases.textContent = kano.death;
   
   el_katsina.textContent = katsina.state;
   el_katsinaReport.textContent = katsina.confirmedCases;
   el_katsina_active_cases.textContent = katsina.casesOnAdmission; 
   el_katsina_discharged_cases.textContent = katsina.discharged; 
   el_katsina_death_cases.textContent = katsina.death;
   
   el_borno.textContent = borno.state;
   el_bornoReport.textContent = borno.confirmedCases;
   el_borno_active_cases.textContent = borno.casesOnAdmission; 
   el_borno_discharged_cases.textContent = borno.discharged; 
   el_borno_death_cases.textContent = borno.death;
   
   el_bauchi.textContent = bauchi.state;
   el_bauchiReport.textContent = bauchi.confirmedCases;
   el_bauchi_active_cases.textContent = bauchi.casesOnAdmission; 
   el_bauchi_discharged_cases.textContent = bauchi.discharged; 
   el_bauchi_death_cases.textContent = bauchi.death;
   
   el_ogun.textContent = ogun.state;
   el_ogunReport.textContent = ogun.confirmedCases;
   el_ogun_active_cases.textContent = ogun.casesOnAdmission; 
   el_ogun_discharged_cases.textContent = ogun.discharged; 
   el_ogun_death_cases.textContent = ogun.death;
   
   el_jigawa.textContent = jigawa.state;
   el_jigawaReport.textContent = jigawa.confirmedCases;
   el_jigawa_active_cases.textContent = jigawa.casesOnAdmission; 
   el_jigawa_discharged_cases.textContent = jigawa.discharged; 
   el_jigawa_death_cases.textContent = jigawa.death;
   
   el_gombe.textContent = gombe.state;
   el_gombeReport.textContent = gombe.confirmedCases;
   el_gombe_active_cases.textContent = gombe.casesOnAdmission; 
   el_gombe_discharged_cases.textContent = gombe.discharged; 
   el_gombe_death_cases.textContent = gombe.death;
   
   el_kaduna.textContent = kaduna.state;
   el_kadunaReport.textContent = kaduna.confirmedCases;
   el_kaduna_active_cases.textContent = kaduna.casesOnAdmission; 
   el_kaduna_discharged_cases.textContent = kaduna.discharged; 
   el_kaduna_death_cases.textContent = kaduna.death;
   
   el_sokoto.textContent = sokoto.state;
   el_sokotoReport.textContent = sokoto.confirmedCases;
   el_sokoto_active_cases.textContent = sokoto.casesOnAdmission; 
   el_sokoto_discharged_cases.textContent = sokoto.discharged; 
   el_sokoto_death_cases.textContent = sokoto.death;
   
   el_edo.textContent = edo.state;
   el_edoReport.textContent = edo.confirmedCases;
   el_edo_active_cases.textContent = edo.casesOnAdmission; 
   el_edo_discharged_cases.textContent = edo.discharged; 
   el_edo_death_cases.textContent = edo.death;
   
   el_zamfara.textContent = zamfara.state;
   el_zamfaraReport.textContent = zamfara.confirmedCases;
   el_zamfara_active_cases.textContent = zamfara.casesOnAdmission; 
   el_zamfara_discharged_cases.textContent = zamfara.discharged; 
   el_zamfara_death_cases.textContent = zamfara.death;
   
   el_oyo.textContent = oyo.state;
   el_oyoReport.textContent = oyo.confirmedCases;
   el_oyo_active_cases.textContent = oyo.casesOnAdmission; 
   el_oyo_discharged_cases.textContent = oyo.discharged; 
   el_oyo_death_cases.textContent = oyo.death;
   
   el_osun.textContent = osun.state;
   el_osunReport.textContent = osun.confirmedCases;
   el_osun_active_cases.textContent = osun.casesOnAdmission; 
   el_osun_discharged_cases.textContent = osun.discharged; 
   el_osun_death_cases.textContent = osun.death;
   
   el_kwara.textContent = kwara.state;
   el_kwaraReport.textContent = kwara.confirmedCases;
   el_kwara_active_cases.textContent = kwara.casesOnAdmission; 
   el_kwara_discharged_cases.textContent = kwara.discharged; 
   el_kwara_death_cases.textContent = kwara.death;
   
   el_nasarawa.textContent = nasarawa.state;
   el_nasarawaReport.textContent = nasarawa.confirmedCases;
   el_nasarawa_active_cases.textContent = nasarawa.casesOnAdmission; 
   el_nasarawa_discharged_cases.textContent = nasarawa.discharged; 
   el_nasarawa_death_cases.textContent = nasarawa.death;
   
   el_kebbi.textContent = kebbi.state;
   el_kebbiReport.textContent = kebbi.confirmedCases;
   el_kebbi_active_cases.textContent = kebbi.casesOnAdmission; 
   el_kebbi_discharged_cases.textContent = kebbi.discharged; 
   el_kebbi_death_cases.textContent = kebbi.death;
   
   el_rivers.textContent = rivers.state;
   el_riversReport.textContent = rivers.confirmedCases;
   el_rivers_active_cases.textContent = rivers.casesOnAdmission; 
   el_rivers_discharged_cases.textContent = rivers.discharged; 
   el_rivers_death_cases.textContent = rivers.death;
   
   el_adamawa.textContent = adamawa.state;
   el_adamawaReport.textContent = adamawa.confirmedCases;
   el_adamawa_active_cases.textContent = adamawa.casesOnAdmission; 
   el_adamawa_discharged_cases.textContent = adamawa.discharged; 
   el_adamawa_death_cases.textContent = adamawa.death;
   
   el_plateau.textContent = plateau.state;
   el_plateauReport.textContent = plateau.confirmedCases;
   el_plateau_active_cases.textContent = plateau.casesOnAdmission; 
   el_plateau_discharged_cases.textContent = plateau.discharged; 
   el_plateau_death_cases.textContent = plateau.death;
   
   el_akwaIbom.textContent = akwaIbom.state;
   el_akwaIbomReport.textContent = akwaIbom.confirmedCases;
   el_akwaIbom_active_cases.textContent = akwaIbom.casesOnAdmission; 
   el_akwaIbom_discharged_cases.textContent = akwaIbom.discharged; 
   el_akwaIbom_death_cases.textContent = akwaIbom.death;
   
   el_delta.textContent = delta.state;
   el_deltaReport.textContent = delta.confirmedCases;
   el_delta_active_cases.textContent = delta.casesOnAdmission; 
   el_delta_discharged_cases.textContent = delta.discharged; 
   el_delta_death_cases.textContent = delta.death;
   
   el_ondo.textContent = ondo.state;
   el_ondoReport.textContent = ondo.confirmedCases;
   el_ondo_active_cases.textContent = ondo.casesOnAdmission; 
   el_ondo_discharged_cases.textContent = ondo.discharged; 
   el_ondo_death_cases.textContent = ondo.death;
   
   el_taraba.textContent = taraba.state;
   el_tarabaReport.textContent = taraba.confirmedCases;
   el_taraba_active_cases.textContent = taraba.casesOnAdmission; 
   el_taraba_discharged_cases.textContent = taraba.discharged; 
   el_taraba_death_cases.textContent = taraba.death;
   
   el_ekiti.textContent = ekiti.state;
   el_ekitiReport.textContent = ekiti.confirmedCases;
   el_ekiti_active_cases.textContent = ekiti.casesOnAdmission; 
   el_ekiti_discharged_cases.textContent = ekiti.discharged; 
   el_ekiti_death_cases.textContent = ekiti.death;
   
   el_yobe.textContent = yobe.state;
   el_yobeReport.textContent = yobe.confirmedCases;
   el_yobe_active_cases.textContent = yobe.casesOnAdmission; 
   el_yobe_discharged_cases.textContent = yobe.discharged; 
   el_yobe_death_cases.textContent = yobe.death;
   
   el_niger.textContent = niger.state;
   el_nigerReport.textContent = niger.confirmedCases;
   el_niger_active_cases.textContent = niger.casesOnAdmission; 
   el_niger_discharged_cases.textContent = niger.discharged; 
   el_niger_death_cases.textContent = niger.death;
   
   el_bayelsa.textContent = bayelsa.state;
   el_bayelsaReport.textContent = bayelsa.confirmedCases;
   el_bayelsa_active_cases.textContent = bayelsa.casesOnAdmission; 
   el_bayelsa_discharged_cases.textContent = bayelsa.discharged; 
   el_bayelsa_death_cases.textContent = bayelsa.death;
   
   el_benue.textContent = benue.state;
   el_benueReport.textContent = benue.confirmedCases;
   el_benue_active_cases.textContent = benue.casesOnAdmission; 
   el_benue_discharged_cases.textContent = benue.discharged; 
   el_benue_death_cases.textContent = benue.death;

})

  .catch(err => console.log(err))