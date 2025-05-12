# iana-timezones

[![cov](https://petarzarkov.github.io/iana-timezones/badges/coverage.svg)](https://github.com/petarzarkov/iana-timezones/actions)

Auto generated timezones from IANA DB [tzdata-latest.tar.gz](https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz)

Inspired by: [list of tz database in wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- **Package version**: 0.0.9
- **IANA DB Version**: 2025b
- **Updated**: Mon, 12 May 2025 08:03:50 GMT
- **Last Modified**: Sat, 22 Mar 2025 21:45:31 GMT
- **Number of zones**: 597
- **Zones**: [timezones.ts](./timezones.ts)
- **Files used**: `zone.tab, zone1970.tab, etcetera, backward`

---

## Africa

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="africa-abidjan"></a>Abidjan | `Africa/Abidjan` | Canonical | BF, CI, GH, GM, GN, IS, ML, MR, SH, SL, SN, TG | +00:00 | Children: [`Africa/Accra`](#africa-accra), [`Africa/Bamako`](#africa-bamako), [`Africa/Banjul`](#africa-banjul), [`Africa/Conakry`](#africa-conakry), [`Africa/Dakar`](#africa-dakar), [`Africa/Freetown`](#africa-freetown), [`Africa/Lome`](#africa-lome), [`Africa/Nouakchott`](#africa-nouakchott), [`Africa/Ouagadougou`](#africa-ouagadougou), [`Africa/Timbuktu`](#africa-timbuktu), [`Atlantic/Reykjavik`](#atlantic-reykjavik), [`Atlantic/St_Helena`](#atlantic-st-helena), [`Iceland`](#iceland) |
| <a name="africa-accra"></a>Accra | `Africa/Accra` | Link | GH | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-addis-ababa"></a>Addis Ababa | `Africa/Addis_Ababa` | Link | ET | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-algiers"></a>Algiers | `Africa/Algiers` | Canonical | DZ | +01:00 | - |
| <a name="africa-asmara"></a>Asmara | `Africa/Asmara` | Link | ER | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-asmera"></a>Asmera | `Africa/Asmera` | Link | - | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-bamako"></a>Bamako | `Africa/Bamako` | Link | ML | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-bangui"></a>Bangui | `Africa/Bangui` | Link | CF | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-banjul"></a>Banjul | `Africa/Banjul` | Link | GM | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-bissau"></a>Bissau | `Africa/Bissau` | Canonical | GW | +00:00 | - |
| <a name="africa-blantyre"></a>Blantyre | `Africa/Blantyre` | Link | MW | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-brazzaville"></a>Brazzaville | `Africa/Brazzaville` | Link | CG | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-bujumbura"></a>Bujumbura | `Africa/Bujumbura` | Link | BI | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-cairo"></a>Cairo | `Africa/Cairo` | Canonical | EG | +03:00 | Children: [`Egypt`](#egypt) |
| <a name="africa-casablanca"></a>Casablanca | `Africa/Casablanca` | Canonical | MA | +01:00 | - |
| <a name="africa-ceuta"></a>Ceuta | `Africa/Ceuta` | Canonical | ES | +02:00 | - |
| <a name="africa-conakry"></a>Conakry | `Africa/Conakry` | Link | GN | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-dakar"></a>Dakar | `Africa/Dakar` | Link | SN | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-dar-es-salaam"></a>Dar es_Salaam | `Africa/Dar_es_Salaam` | Link | TZ | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-djibouti"></a>Djibouti | `Africa/Djibouti` | Link | DJ | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-douala"></a>Douala | `Africa/Douala` | Link | CM | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-el-aaiun"></a>El Aaiun | `Africa/El_Aaiun` | Canonical | EH | +01:00 | - |
| <a name="africa-freetown"></a>Freetown | `Africa/Freetown` | Link | SL | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-gaborone"></a>Gaborone | `Africa/Gaborone` | Link | BW | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-harare"></a>Harare | `Africa/Harare` | Link | ZW | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-johannesburg"></a>Johannesburg | `Africa/Johannesburg` | Canonical | LS, SZ, ZA | +02:00 | Children: [`Africa/Maseru`](#africa-maseru), [`Africa/Mbabane`](#africa-mbabane) |
| <a name="africa-juba"></a>Juba | `Africa/Juba` | Canonical | SS | +02:00 | - |
| <a name="africa-kampala"></a>Kampala | `Africa/Kampala` | Link | UG | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-khartoum"></a>Khartoum | `Africa/Khartoum` | Canonical | SD | +02:00 | - |
| <a name="africa-kigali"></a>Kigali | `Africa/Kigali` | Link | RW | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-kinshasa"></a>Kinshasa | `Africa/Kinshasa` | Link | CD | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-lagos"></a>Lagos | `Africa/Lagos` | Canonical | AO, BJ, CD, CF, CG, CM, GA, GQ, NE, NG | +01:00 | Children: [`Africa/Bangui`](#africa-bangui), [`Africa/Brazzaville`](#africa-brazzaville), [`Africa/Douala`](#africa-douala), [`Africa/Kinshasa`](#africa-kinshasa), [`Africa/Libreville`](#africa-libreville), [`Africa/Luanda`](#africa-luanda), [`Africa/Malabo`](#africa-malabo), [`Africa/Niamey`](#africa-niamey), [`Africa/Porto-Novo`](#africa-porto-novo) |
| <a name="africa-libreville"></a>Libreville | `Africa/Libreville` | Link | GA | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-lome"></a>Lome | `Africa/Lome` | Link | TG | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-luanda"></a>Luanda | `Africa/Luanda` | Link | AO | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-lubumbashi"></a>Lubumbashi | `Africa/Lubumbashi` | Link | CD | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-lusaka"></a>Lusaka | `Africa/Lusaka` | Link | ZM | +02:00 | Parent: [`Africa/Maputo`](#africa-maputo) |
| <a name="africa-malabo"></a>Malabo | `Africa/Malabo` | Link | GQ | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-maputo"></a>Maputo | `Africa/Maputo` | Canonical | BI, BW, CD, MW, MZ, RW, ZM, ZW | +02:00 | Children: [`Africa/Blantyre`](#africa-blantyre), [`Africa/Bujumbura`](#africa-bujumbura), [`Africa/Gaborone`](#africa-gaborone), [`Africa/Harare`](#africa-harare), [`Africa/Kigali`](#africa-kigali), [`Africa/Lubumbashi`](#africa-lubumbashi), [`Africa/Lusaka`](#africa-lusaka) |
| <a name="africa-maseru"></a>Maseru | `Africa/Maseru` | Link | LS | +02:00 | Parent: [`Africa/Johannesburg`](#africa-johannesburg) |
| <a name="africa-mbabane"></a>Mbabane | `Africa/Mbabane` | Link | SZ | +02:00 | Parent: [`Africa/Johannesburg`](#africa-johannesburg) |
| <a name="africa-mogadishu"></a>Mogadishu | `Africa/Mogadishu` | Link | SO | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="africa-monrovia"></a>Monrovia | `Africa/Monrovia` | Canonical | LR | +00:00 | - |
| <a name="africa-nairobi"></a>Nairobi | `Africa/Nairobi` | Canonical | DJ, ER, ET, KE, KM, MG, SO, TZ, UG, YT | +03:00 | Children: [`Africa/Addis_Ababa`](#africa-addis-ababa), [`Africa/Asmara`](#africa-asmara), [`Africa/Asmera`](#africa-asmera), [`Africa/Dar_es_Salaam`](#africa-dar-es-salaam), [`Africa/Djibouti`](#africa-djibouti), [`Africa/Kampala`](#africa-kampala), [`Africa/Mogadishu`](#africa-mogadishu), [`Indian/Antananarivo`](#indian-antananarivo), [`Indian/Comoro`](#indian-comoro), [`Indian/Mayotte`](#indian-mayotte) |
| <a name="africa-ndjamena"></a>Ndjamena | `Africa/Ndjamena` | Canonical | TD | +01:00 | - |
| <a name="africa-niamey"></a>Niamey | `Africa/Niamey` | Link | NE | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-nouakchott"></a>Nouakchott | `Africa/Nouakchott` | Link | MR | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-ouagadougou"></a>Ouagadougou | `Africa/Ouagadougou` | Link | BF | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-porto-novo"></a>Porto-Novo | `Africa/Porto-Novo` | Link | BJ | +01:00 | Parent: [`Africa/Lagos`](#africa-lagos) |
| <a name="africa-sao-tome"></a>Sao Tome | `Africa/Sao_Tome` | Canonical | ST | +00:00 | - |
| <a name="africa-timbuktu"></a>Timbuktu | `Africa/Timbuktu` | Link | - | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="africa-tripoli"></a>Tripoli | `Africa/Tripoli` | Canonical | LY | +02:00 | Children: [`Libya`](#libya) |
| <a name="africa-tunis"></a>Tunis | `Africa/Tunis` | Canonical | TN | +01:00 | - |
| <a name="africa-windhoek"></a>Windhoek | `Africa/Windhoek` | Canonical | NA | +02:00 | - |
| <a name="egypt"></a>Egypt | `Egypt` | Link | - | +03:00 | Parent: [`Africa/Cairo`](#africa-cairo) |
| <a name="iceland"></a>Iceland | `Iceland` | Link | - | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="libya"></a>Libya | `Libya` | Link | - | +02:00 | Parent: [`Africa/Tripoli`](#africa-tripoli) |

## America

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="america-adak"></a>Adak | `America/Adak` | Canonical | US | -09:00 | Children: [`America/Atka`](#america-atka), [`US/Aleutian`](#us-aleutian) |
| <a name="america-anchorage"></a>Anchorage | `America/Anchorage` | Canonical | US | -08:00 | Children: [`US/Alaska`](#us-alaska) |
| <a name="america-anguilla"></a>Anguilla | `America/Anguilla` | Link | AI | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-antigua"></a>Antigua | `America/Antigua` | Link | AG | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-araguaina"></a>Araguaina | `America/Araguaina` | Canonical | BR | -03:00 | - |
| <a name="america-argentina-buenos-aires"></a>Argentina - Buenos Aires | `America/Argentina/Buenos_Aires` | Canonical | AR | -03:00 | Children: [`America/Buenos_Aires`](#america-buenos-aires) |
| <a name="america-argentina-catamarca"></a>Argentina - Catamarca | `America/Argentina/Catamarca` | Canonical | AR | -03:00 | Children: [`America/Argentina/ComodRivadavia`](#america-argentina-comodrivadavia), [`America/Catamarca`](#america-catamarca) |
| <a name="america-argentina-comodrivadavia"></a>Argentina - ComodRivadavia | `America/Argentina/ComodRivadavia` | Link | - | -03:00 | Parent: [`America/Argentina/Catamarca`](#america-argentina-catamarca) |
| <a name="america-argentina-cordoba"></a>Argentina - Cordoba | `America/Argentina/Cordoba` | Canonical | AR | -03:00 | Children: [`America/Cordoba`](#america-cordoba), [`America/Rosario`](#america-rosario) |
| <a name="america-argentina-jujuy"></a>Argentina - Jujuy | `America/Argentina/Jujuy` | Canonical | AR | -03:00 | Children: [`America/Jujuy`](#america-jujuy) |
| <a name="america-argentina-la-rioja"></a>Argentina - La Rioja | `America/Argentina/La_Rioja` | Canonical | AR | -03:00 | - |
| <a name="america-argentina-mendoza"></a>Argentina - Mendoza | `America/Argentina/Mendoza` | Canonical | AR | -03:00 | Children: [`America/Mendoza`](#america-mendoza) |
| <a name="america-argentina-rio-gallegos"></a>Argentina - Rio Gallegos | `America/Argentina/Rio_Gallegos` | Canonical | AR | -03:00 | - |
| <a name="america-argentina-salta"></a>Argentina - Salta | `America/Argentina/Salta` | Canonical | AR | -03:00 | - |
| <a name="america-argentina-san-juan"></a>Argentina - San Juan | `America/Argentina/San_Juan` | Canonical | AR | -03:00 | - |
| <a name="america-argentina-san-luis"></a>Argentina - San Luis | `America/Argentina/San_Luis` | Canonical | AR | -03:00 | - |
| <a name="america-argentina-tucuman"></a>Argentina - Tucuman | `America/Argentina/Tucuman` | Canonical | AR | -03:00 | - |
| <a name="america-argentina-ushuaia"></a>Argentina - Ushuaia | `America/Argentina/Ushuaia` | Canonical | AR | -03:00 | - |
| <a name="america-aruba"></a>Aruba | `America/Aruba` | Link | AW | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-asuncion"></a>Asuncion | `America/Asuncion` | Canonical | PY | -03:00 | - |
| <a name="america-atikokan"></a>Atikokan | `America/Atikokan` | Link | CA | -05:00 | Parent: [`America/Panama`](#america-panama) |
| <a name="america-atka"></a>Atka | `America/Atka` | Link | - | -09:00 | Parent: [`America/Adak`](#america-adak) |
| <a name="america-bahia"></a>Bahia | `America/Bahia` | Canonical | BR | -03:00 | - |
| <a name="america-bahia-banderas"></a>Bahia Banderas | `America/Bahia_Banderas` | Canonical | MX | -06:00 | - |
| <a name="america-barbados"></a>Barbados | `America/Barbados` | Canonical | BB | -04:00 | - |
| <a name="america-belem"></a>Belem | `America/Belem` | Canonical | BR | -03:00 | - |
| <a name="america-belize"></a>Belize | `America/Belize` | Canonical | BZ | -06:00 | - |
| <a name="america-blanc-sablon"></a>Blanc-Sablon | `America/Blanc-Sablon` | Link | CA | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-boa-vista"></a>Boa Vista | `America/Boa_Vista` | Canonical | BR | -04:00 | - |
| <a name="america-bogota"></a>Bogota | `America/Bogota` | Canonical | CO | -05:00 | - |
| <a name="america-boise"></a>Boise | `America/Boise` | Canonical | US | -06:00 | - |
| <a name="america-buenos-aires"></a>Buenos Aires | `America/Buenos_Aires` | Link | - | -03:00 | Parent: [`America/Argentina/Buenos_Aires`](#america-argentina-buenos-aires) |
| <a name="america-cambridge-bay"></a>Cambridge Bay | `America/Cambridge_Bay` | Canonical | CA | -06:00 | - |
| <a name="america-campo-grande"></a>Campo Grande | `America/Campo_Grande` | Canonical | BR | -04:00 | - |
| <a name="america-cancun"></a>Cancun | `America/Cancun` | Canonical | MX | -05:00 | - |
| <a name="america-caracas"></a>Caracas | `America/Caracas` | Canonical | VE | -04:00 | - |
| <a name="america-catamarca"></a>Catamarca | `America/Catamarca` | Link | - | -03:00 | Parent: [`America/Argentina/Catamarca`](#america-argentina-catamarca) |
| <a name="america-cayenne"></a>Cayenne | `America/Cayenne` | Canonical | GF | -03:00 | - |
| <a name="america-cayman"></a>Cayman | `America/Cayman` | Link | KY | -05:00 | Parent: [`America/Panama`](#america-panama) |
| <a name="america-chicago"></a>Chicago | `America/Chicago` | Canonical | US | -05:00 | Children: [`CST6CDT`](#cst6cdt), [`US/Central`](#us-central) |
| <a name="america-chihuahua"></a>Chihuahua | `America/Chihuahua` | Canonical | MX | -06:00 | - |
| <a name="america-ciudad-juarez"></a>Ciudad Juarez | `America/Ciudad_Juarez` | Canonical | MX | -06:00 | - |
| <a name="america-coral-harbour"></a>Coral Harbour | `America/Coral_Harbour` | Link | - | -05:00 | Parent: [`America/Panama`](#america-panama) |
| <a name="america-cordoba"></a>Cordoba | `America/Cordoba` | Link | - | -03:00 | Parent: [`America/Argentina/Cordoba`](#america-argentina-cordoba) |
| <a name="america-costa-rica"></a>Costa Rica | `America/Costa_Rica` | Canonical | CR | -06:00 | - |
| <a name="america-coyhaique"></a>Coyhaique | `America/Coyhaique` | Canonical | CL | N/A | - |
| <a name="america-creston"></a>Creston | `America/Creston` | Link | CA | -07:00 | Parent: [`America/Phoenix`](#america-phoenix) |
| <a name="america-cuiaba"></a>Cuiaba | `America/Cuiaba` | Canonical | BR | -04:00 | - |
| <a name="america-curacao"></a>Curacao | `America/Curacao` | Link | CW | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-danmarkshavn"></a>Danmarkshavn | `America/Danmarkshavn` | Canonical | GL | +00:00 | - |
| <a name="america-dawson"></a>Dawson | `America/Dawson` | Canonical | CA | -07:00 | - |
| <a name="america-dawson-creek"></a>Dawson Creek | `America/Dawson_Creek` | Canonical | CA | -07:00 | - |
| <a name="america-denver"></a>Denver | `America/Denver` | Canonical | US | -06:00 | Children: [`America/Shiprock`](#america-shiprock), [`MST7MDT`](#mst7mdt), [`Navajo`](#navajo), [`US/Mountain`](#us-mountain) |
| <a name="america-detroit"></a>Detroit | `America/Detroit` | Canonical | US | -04:00 | Children: [`US/Michigan`](#us-michigan) |
| <a name="america-dominica"></a>Dominica | `America/Dominica` | Link | DM | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-edmonton"></a>Edmonton | `America/Edmonton` | Canonical | CA | -06:00 | Children: [`America/Yellowknife`](#america-yellowknife), [`Canada/Mountain`](#canada-mountain) |
| <a name="america-eirunepe"></a>Eirunepe | `America/Eirunepe` | Canonical | BR | -05:00 | - |
| <a name="america-el-salvador"></a>El Salvador | `America/El_Salvador` | Canonical | SV | -06:00 | - |
| <a name="america-ensenada"></a>Ensenada | `America/Ensenada` | Link | - | -07:00 | Parent: [`America/Tijuana`](#america-tijuana) |
| <a name="america-fort-nelson"></a>Fort Nelson | `America/Fort_Nelson` | Canonical | CA | -07:00 | - |
| <a name="america-fort-wayne"></a>Fort Wayne | `America/Fort_Wayne` | Link | - | -04:00 | Parent: [`America/Indiana/Indianapolis`](#america-indiana-indianapolis) |
| <a name="america-fortaleza"></a>Fortaleza | `America/Fortaleza` | Canonical | BR | -03:00 | - |
| <a name="america-glace-bay"></a>Glace Bay | `America/Glace_Bay` | Canonical | CA | -03:00 | - |
| <a name="america-godthab"></a>Godthab | `America/Godthab` | Link | - | -01:00 | Parent: [`America/Nuuk`](#america-nuuk) |
| <a name="america-goose-bay"></a>Goose Bay | `America/Goose_Bay` | Canonical | CA | -03:00 | - |
| <a name="america-grand-turk"></a>Grand Turk | `America/Grand_Turk` | Canonical | TC | -04:00 | - |
| <a name="america-grenada"></a>Grenada | `America/Grenada` | Link | GD | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-guadeloupe"></a>Guadeloupe | `America/Guadeloupe` | Link | GP | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-guatemala"></a>Guatemala | `America/Guatemala` | Canonical | GT | -06:00 | - |
| <a name="america-guayaquil"></a>Guayaquil | `America/Guayaquil` | Canonical | EC | -05:00 | - |
| <a name="america-guyana"></a>Guyana | `America/Guyana` | Canonical | GY | -04:00 | - |
| <a name="america-halifax"></a>Halifax | `America/Halifax` | Canonical | CA | -03:00 | Children: [`Canada/Atlantic`](#canada-atlantic) |
| <a name="america-havana"></a>Havana | `America/Havana` | Canonical | CU | -04:00 | Children: [`Cuba`](#cuba) |
| <a name="america-hermosillo"></a>Hermosillo | `America/Hermosillo` | Canonical | MX | -07:00 | - |
| <a name="america-indiana-indianapolis"></a>Indiana - Indianapolis | `America/Indiana/Indianapolis` | Canonical | US | -04:00 | Children: [`America/Fort_Wayne`](#america-fort-wayne), [`America/Indianapolis`](#america-indianapolis), [`US/East-Indiana`](#us-east-indiana) |
| <a name="america-indiana-knox"></a>Indiana - Knox | `America/Indiana/Knox` | Canonical | US | -05:00 | Children: [`America/Knox_IN`](#america-knox-in), [`US/Indiana-Starke`](#us-indiana-starke) |
| <a name="america-indiana-marengo"></a>Indiana - Marengo | `America/Indiana/Marengo` | Canonical | US | -04:00 | - |
| <a name="america-indiana-petersburg"></a>Indiana - Petersburg | `America/Indiana/Petersburg` | Canonical | US | -04:00 | - |
| <a name="america-indiana-tell-city"></a>Indiana - Tell City | `America/Indiana/Tell_City` | Canonical | US | -05:00 | - |
| <a name="america-indiana-vevay"></a>Indiana - Vevay | `America/Indiana/Vevay` | Canonical | US | -04:00 | - |
| <a name="america-indiana-vincennes"></a>Indiana - Vincennes | `America/Indiana/Vincennes` | Canonical | US | -04:00 | - |
| <a name="america-indiana-winamac"></a>Indiana - Winamac | `America/Indiana/Winamac` | Canonical | US | -04:00 | - |
| <a name="america-indianapolis"></a>Indianapolis | `America/Indianapolis` | Link | - | -04:00 | Parent: [`America/Indiana/Indianapolis`](#america-indiana-indianapolis) |
| <a name="america-inuvik"></a>Inuvik | `America/Inuvik` | Canonical | CA | -06:00 | - |
| <a name="america-iqaluit"></a>Iqaluit | `America/Iqaluit` | Canonical | CA | -04:00 | Children: [`America/Pangnirtung`](#america-pangnirtung) |
| <a name="america-jamaica"></a>Jamaica | `America/Jamaica` | Canonical | JM | -05:00 | Children: [`Jamaica`](#jamaica) |
| <a name="america-jujuy"></a>Jujuy | `America/Jujuy` | Link | - | -03:00 | Parent: [`America/Argentina/Jujuy`](#america-argentina-jujuy) |
| <a name="america-juneau"></a>Juneau | `America/Juneau` | Canonical | US | -08:00 | - |
| <a name="america-kentucky-louisville"></a>Kentucky - Louisville | `America/Kentucky/Louisville` | Canonical | US | -04:00 | Children: [`America/Louisville`](#america-louisville) |
| <a name="america-kentucky-monticello"></a>Kentucky - Monticello | `America/Kentucky/Monticello` | Canonical | US | -04:00 | - |
| <a name="america-knox-in"></a>Knox IN | `America/Knox_IN` | Link | - | -05:00 | Parent: [`America/Indiana/Knox`](#america-indiana-knox) |
| <a name="america-kralendijk"></a>Kralendijk | `America/Kralendijk` | Link | BQ | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-la-paz"></a>La Paz | `America/La_Paz` | Canonical | BO | -04:00 | - |
| <a name="america-lima"></a>Lima | `America/Lima` | Canonical | PE | -05:00 | - |
| <a name="america-los-angeles"></a>Los Angeles | `America/Los_Angeles` | Canonical | US | -07:00 | Children: [`PST8PDT`](#pst8pdt), [`US/Pacific`](#us-pacific) |
| <a name="america-louisville"></a>Louisville | `America/Louisville` | Link | - | -04:00 | Parent: [`America/Kentucky/Louisville`](#america-kentucky-louisville) |
| <a name="america-lower-princes"></a>Lower Princes | `America/Lower_Princes` | Link | SX | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-maceio"></a>Maceio | `America/Maceio` | Canonical | BR | -03:00 | - |
| <a name="america-managua"></a>Managua | `America/Managua` | Canonical | NI | -06:00 | - |
| <a name="america-manaus"></a>Manaus | `America/Manaus` | Canonical | BR | -04:00 | Children: [`Brazil/West`](#brazil-west) |
| <a name="america-marigot"></a>Marigot | `America/Marigot` | Link | MF | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-martinique"></a>Martinique | `America/Martinique` | Canonical | MQ | -04:00 | - |
| <a name="america-matamoros"></a>Matamoros | `America/Matamoros` | Canonical | MX | -05:00 | - |
| <a name="america-mazatlan"></a>Mazatlan | `America/Mazatlan` | Canonical | MX | -07:00 | Children: [`Mexico/BajaSur`](#mexico-bajasur) |
| <a name="america-mendoza"></a>Mendoza | `America/Mendoza` | Link | - | -03:00 | Parent: [`America/Argentina/Mendoza`](#america-argentina-mendoza) |
| <a name="america-menominee"></a>Menominee | `America/Menominee` | Canonical | US | -05:00 | - |
| <a name="america-merida"></a>Merida | `America/Merida` | Canonical | MX | -06:00 | - |
| <a name="america-metlakatla"></a>Metlakatla | `America/Metlakatla` | Canonical | US | -08:00 | - |
| <a name="america-mexico-city"></a>Mexico City | `America/Mexico_City` | Canonical | MX | -06:00 | Children: [`Mexico/General`](#mexico-general) |
| <a name="america-miquelon"></a>Miquelon | `America/Miquelon` | Canonical | PM | -02:00 | - |
| <a name="america-moncton"></a>Moncton | `America/Moncton` | Canonical | CA | -03:00 | - |
| <a name="america-monterrey"></a>Monterrey | `America/Monterrey` | Canonical | MX | -06:00 | - |
| <a name="america-montevideo"></a>Montevideo | `America/Montevideo` | Canonical | UY | -03:00 | - |
| <a name="america-montreal"></a>Montreal | `America/Montreal` | Link | - | -04:00 | Parent: [`America/Toronto`](#america-toronto) |
| <a name="america-montserrat"></a>Montserrat | `America/Montserrat` | Link | MS | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-nassau"></a>Nassau | `America/Nassau` | Link | BS | -04:00 | Parent: [`America/Toronto`](#america-toronto) |
| <a name="america-new-york"></a>New York | `America/New_York` | Canonical | US | -04:00 | Children: [`EST5EDT`](#est5edt), [`US/Eastern`](#us-eastern) |
| <a name="america-nipigon"></a>Nipigon | `America/Nipigon` | Link | - | -04:00 | Parent: [`America/Toronto`](#america-toronto) |
| <a name="america-nome"></a>Nome | `America/Nome` | Canonical | US | -08:00 | - |
| <a name="america-noronha"></a>Noronha | `America/Noronha` | Canonical | BR | -02:00 | Children: [`Brazil/DeNoronha`](#brazil-denoronha) |
| <a name="america-north-dakota-beulah"></a>North Dakota - Beulah | `America/North_Dakota/Beulah` | Canonical | US | -05:00 | - |
| <a name="america-north-dakota-center"></a>North Dakota - Center | `America/North_Dakota/Center` | Canonical | US | -05:00 | - |
| <a name="america-north-dakota-new-salem"></a>North Dakota - New_Salem | `America/North_Dakota/New_Salem` | Canonical | US | -05:00 | - |
| <a name="america-nuuk"></a>Nuuk | `America/Nuuk` | Canonical | GL | -01:00 | Children: [`America/Godthab`](#america-godthab) |
| <a name="america-ojinaga"></a>Ojinaga | `America/Ojinaga` | Canonical | MX | -05:00 | - |
| <a name="america-panama"></a>Panama | `America/Panama` | Canonical | CA, KY, PA | -05:00 | Children: [`America/Atikokan`](#america-atikokan), [`America/Cayman`](#america-cayman), [`America/Coral_Harbour`](#america-coral-harbour), [`EST`](#est) |
| <a name="america-pangnirtung"></a>Pangnirtung | `America/Pangnirtung` | Link | - | -04:00 | Parent: [`America/Iqaluit`](#america-iqaluit) |
| <a name="america-paramaribo"></a>Paramaribo | `America/Paramaribo` | Canonical | SR | -03:00 | - |
| <a name="america-phoenix"></a>Phoenix | `America/Phoenix` | Canonical | CA, US | -07:00 | Children: [`America/Creston`](#america-creston), [`MST`](#mst), [`US/Arizona`](#us-arizona) |
| <a name="america-port-of-spain"></a>Port of_Spain | `America/Port_of_Spain` | Link | TT | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-port-au-prince"></a>Port-au-Prince | `America/Port-au-Prince` | Canonical | HT | -04:00 | - |
| <a name="america-porto-acre"></a>Porto Acre | `America/Porto_Acre` | Link | - | -05:00 | Parent: [`America/Rio_Branco`](#america-rio-branco) |
| <a name="america-porto-velho"></a>Porto Velho | `America/Porto_Velho` | Canonical | BR | -04:00 | - |
| <a name="america-puerto-rico"></a>Puerto Rico | `America/Puerto_Rico` | Canonical | AG, AI, AW, BL, BQ, CA, CW, DM, GD, GP, KN, LC, MF, MS, PR, SX, TT, VC, VG, VI | -04:00 | Children: [`America/Anguilla`](#america-anguilla), [`America/Antigua`](#america-antigua), [`America/Aruba`](#america-aruba), [`America/Blanc-Sablon`](#america-blanc-sablon), [`America/Curacao`](#america-curacao), [`America/Dominica`](#america-dominica), [`America/Grenada`](#america-grenada), [`America/Guadeloupe`](#america-guadeloupe), [`America/Kralendijk`](#america-kralendijk), [`America/Lower_Princes`](#america-lower-princes), [`America/Marigot`](#america-marigot), [`America/Montserrat`](#america-montserrat), [`America/Port_of_Spain`](#america-port-of-spain), [`America/St_Barthelemy`](#america-st-barthelemy), [`America/St_Kitts`](#america-st-kitts), [`America/St_Lucia`](#america-st-lucia), [`America/St_Thomas`](#america-st-thomas), [`America/St_Vincent`](#america-st-vincent), [`America/Tortola`](#america-tortola), [`America/Virgin`](#america-virgin) |
| <a name="america-punta-arenas"></a>Punta Arenas | `America/Punta_Arenas` | Canonical | CL | -03:00 | - |
| <a name="america-rainy-river"></a>Rainy River | `America/Rainy_River` | Link | - | -05:00 | Parent: [`America/Winnipeg`](#america-winnipeg) |
| <a name="america-rankin-inlet"></a>Rankin Inlet | `America/Rankin_Inlet` | Canonical | CA | -05:00 | - |
| <a name="america-recife"></a>Recife | `America/Recife` | Canonical | BR | -03:00 | - |
| <a name="america-regina"></a>Regina | `America/Regina` | Canonical | CA | -06:00 | Children: [`Canada/Saskatchewan`](#canada-saskatchewan) |
| <a name="america-resolute"></a>Resolute | `America/Resolute` | Canonical | CA | -05:00 | - |
| <a name="america-rio-branco"></a>Rio Branco | `America/Rio_Branco` | Canonical | BR | -05:00 | Children: [`America/Porto_Acre`](#america-porto-acre), [`Brazil/Acre`](#brazil-acre) |
| <a name="america-rosario"></a>Rosario | `America/Rosario` | Link | - | -03:00 | Parent: [`America/Argentina/Cordoba`](#america-argentina-cordoba) |
| <a name="america-santa-isabel"></a>Santa Isabel | `America/Santa_Isabel` | Link | - | -07:00 | Parent: [`America/Tijuana`](#america-tijuana) |
| <a name="america-santarem"></a>Santarem | `America/Santarem` | Canonical | BR | -03:00 | - |
| <a name="america-santiago"></a>Santiago | `America/Santiago` | Canonical | CL | -04:00 | Children: [`Chile/Continental`](#chile-continental) |
| <a name="america-santo-domingo"></a>Santo Domingo | `America/Santo_Domingo` | Canonical | DO | -04:00 | - |
| <a name="america-sao-paulo"></a>Sao Paulo | `America/Sao_Paulo` | Canonical | BR | -03:00 | Children: [`Brazil/East`](#brazil-east) |
| <a name="america-scoresbysund"></a>Scoresbysund | `America/Scoresbysund` | Canonical | GL | -01:00 | - |
| <a name="america-shiprock"></a>Shiprock | `America/Shiprock` | Link | - | -06:00 | Parent: [`America/Denver`](#america-denver) |
| <a name="america-sitka"></a>Sitka | `America/Sitka` | Canonical | US | -08:00 | - |
| <a name="america-st-barthelemy"></a>St Barthelemy | `America/St_Barthelemy` | Link | BL | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-st-johns"></a>St Johns | `America/St_Johns` | Canonical | CA | -02:30 | Children: [`Canada/Newfoundland`](#canada-newfoundland) |
| <a name="america-st-kitts"></a>St Kitts | `America/St_Kitts` | Link | KN | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-st-lucia"></a>St Lucia | `America/St_Lucia` | Link | LC | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-st-thomas"></a>St Thomas | `America/St_Thomas` | Link | VI | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-st-vincent"></a>St Vincent | `America/St_Vincent` | Link | VC | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-swift-current"></a>Swift Current | `America/Swift_Current` | Canonical | CA | -06:00 | - |
| <a name="america-tegucigalpa"></a>Tegucigalpa | `America/Tegucigalpa` | Canonical | HN | -06:00 | - |
| <a name="america-thule"></a>Thule | `America/Thule` | Canonical | GL | -03:00 | - |
| <a name="america-thunder-bay"></a>Thunder Bay | `America/Thunder_Bay` | Link | - | -04:00 | Parent: [`America/Toronto`](#america-toronto) |
| <a name="america-tijuana"></a>Tijuana | `America/Tijuana` | Canonical | MX | -07:00 | Children: [`America/Ensenada`](#america-ensenada), [`America/Santa_Isabel`](#america-santa-isabel), [`Mexico/BajaNorte`](#mexico-bajanorte) |
| <a name="america-toronto"></a>Toronto | `America/Toronto` | Canonical | BS, CA | -04:00 | Children: [`America/Montreal`](#america-montreal), [`America/Nassau`](#america-nassau), [`America/Nipigon`](#america-nipigon), [`America/Thunder_Bay`](#america-thunder-bay), [`Canada/Eastern`](#canada-eastern) |
| <a name="america-tortola"></a>Tortola | `America/Tortola` | Link | VG | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-vancouver"></a>Vancouver | `America/Vancouver` | Canonical | CA | -07:00 | Children: [`Canada/Pacific`](#canada-pacific) |
| <a name="america-virgin"></a>Virgin | `America/Virgin` | Link | - | -04:00 | Parent: [`America/Puerto_Rico`](#america-puerto-rico) |
| <a name="america-whitehorse"></a>Whitehorse | `America/Whitehorse` | Canonical | CA | -07:00 | Children: [`Canada/Yukon`](#canada-yukon) |
| <a name="america-winnipeg"></a>Winnipeg | `America/Winnipeg` | Canonical | CA | -05:00 | Children: [`America/Rainy_River`](#america-rainy-river), [`Canada/Central`](#canada-central) |
| <a name="america-yakutat"></a>Yakutat | `America/Yakutat` | Canonical | US | -08:00 | - |
| <a name="america-yellowknife"></a>Yellowknife | `America/Yellowknife` | Link | - | -06:00 | Parent: [`America/Edmonton`](#america-edmonton) |
| <a name="cst6cdt"></a>CST6CDT | `CST6CDT` | Link | - | -05:00 | Parent: [`America/Chicago`](#america-chicago) |
| <a name="cuba"></a>Cuba | `Cuba` | Link | - | -04:00 | Parent: [`America/Havana`](#america-havana) |
| <a name="est"></a>EST | `EST` | Link | - | -05:00 | Parent: [`America/Panama`](#america-panama) |
| <a name="est5edt"></a>EST5EDT | `EST5EDT` | Link | - | -04:00 | Parent: [`America/New_York`](#america-new-york) |
| <a name="jamaica"></a>Jamaica | `Jamaica` | Link | - | -05:00 | Parent: [`America/Jamaica`](#america-jamaica) |
| <a name="mst"></a>MST | `MST` | Link | - | -07:00 | Parent: [`America/Phoenix`](#america-phoenix) |
| <a name="mst7mdt"></a>MST7MDT | `MST7MDT` | Link | - | -06:00 | Parent: [`America/Denver`](#america-denver) |
| <a name="navajo"></a>Navajo | `Navajo` | Link | - | -06:00 | Parent: [`America/Denver`](#america-denver) |
| <a name="pst8pdt"></a>PST8PDT | `PST8PDT` | Link | - | -07:00 | Parent: [`America/Los_Angeles`](#america-los-angeles) |

## Antarctica

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="antarctica-casey"></a>Casey | `Antarctica/Casey` | Canonical | AQ | +08:00 | - |
| <a name="antarctica-davis"></a>Davis | `Antarctica/Davis` | Canonical | AQ | +07:00 | - |
| <a name="antarctica-dumontdurville"></a>DumontDUrville | `Antarctica/DumontDUrville` | Link | AQ | +10:00 | Parent: [`Pacific/Port_Moresby`](#pacific-port-moresby) |
| <a name="antarctica-macquarie"></a>Macquarie | `Antarctica/Macquarie` | Canonical | AU | +10:00 | - |
| <a name="antarctica-mawson"></a>Mawson | `Antarctica/Mawson` | Canonical | AQ | +05:00 | - |
| <a name="antarctica-mcmurdo"></a>McMurdo | `Antarctica/McMurdo` | Link | AQ | +12:00 | Parent: [`Pacific/Auckland`](#pacific-auckland) |
| <a name="antarctica-palmer"></a>Palmer | `Antarctica/Palmer` | Canonical | AQ | -03:00 | - |
| <a name="antarctica-rothera"></a>Rothera | `Antarctica/Rothera` | Canonical | AQ | -03:00 | - |
| <a name="antarctica-south-pole"></a>South Pole | `Antarctica/South_Pole` | Link | - | +12:00 | Parent: [`Pacific/Auckland`](#pacific-auckland) |
| <a name="antarctica-syowa"></a>Syowa | `Antarctica/Syowa` | Link | AQ | +03:00 | Parent: [`Asia/Riyadh`](#asia-riyadh) |
| <a name="antarctica-troll"></a>Troll | `Antarctica/Troll` | Canonical | AQ | +02:00 | - |
| <a name="antarctica-vostok"></a>Vostok | `Antarctica/Vostok` | Canonical | AQ | +05:00 | - |

## Arctic

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="arctic-longyearbyen"></a>Longyearbyen | `Arctic/Longyearbyen` | Link | SJ | +02:00 | Parent: [`Europe/Berlin`](#europe-berlin) |

## Asia

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="asia-aden"></a>Aden | `Asia/Aden` | Link | YE | +03:00 | Parent: [`Asia/Riyadh`](#asia-riyadh) |
| <a name="asia-almaty"></a>Almaty | `Asia/Almaty` | Canonical | KZ | +05:00 | - |
| <a name="asia-amman"></a>Amman | `Asia/Amman` | Canonical | JO | +03:00 | - |
| <a name="asia-anadyr"></a>Anadyr | `Asia/Anadyr` | Canonical | RU | +12:00 | - |
| <a name="asia-aqtau"></a>Aqtau | `Asia/Aqtau` | Canonical | KZ | +05:00 | - |
| <a name="asia-aqtobe"></a>Aqtobe | `Asia/Aqtobe` | Canonical | KZ | +05:00 | - |
| <a name="asia-ashgabat"></a>Ashgabat | `Asia/Ashgabat` | Canonical | TM | +05:00 | Children: [`Asia/Ashkhabad`](#asia-ashkhabad) |
| <a name="asia-ashkhabad"></a>Ashkhabad | `Asia/Ashkhabad` | Link | - | +05:00 | Parent: [`Asia/Ashgabat`](#asia-ashgabat) |
| <a name="asia-atyrau"></a>Atyrau | `Asia/Atyrau` | Canonical | KZ | +05:00 | - |
| <a name="asia-baghdad"></a>Baghdad | `Asia/Baghdad` | Canonical | IQ | +03:00 | - |
| <a name="asia-bahrain"></a>Bahrain | `Asia/Bahrain` | Link | BH | +03:00 | Parent: [`Asia/Qatar`](#asia-qatar) |
| <a name="asia-baku"></a>Baku | `Asia/Baku` | Canonical | AZ | +04:00 | - |
| <a name="asia-bangkok"></a>Bangkok | `Asia/Bangkok` | Canonical | CX, KH, LA, TH, VN | +07:00 | Children: [`Asia/Phnom_Penh`](#asia-phnom-penh), [`Asia/Vientiane`](#asia-vientiane), [`Indian/Christmas`](#indian-christmas) |
| <a name="asia-barnaul"></a>Barnaul | `Asia/Barnaul` | Canonical | RU | +07:00 | - |
| <a name="asia-beirut"></a>Beirut | `Asia/Beirut` | Canonical | LB | +03:00 | - |
| <a name="asia-bishkek"></a>Bishkek | `Asia/Bishkek` | Canonical | KG | +06:00 | - |
| <a name="asia-brunei"></a>Brunei | `Asia/Brunei` | Link | BN | +08:00 | Parent: [`Asia/Kuching`](#asia-kuching) |
| <a name="asia-calcutta"></a>Calcutta | `Asia/Calcutta` | Link | - | +05:30 | Parent: [`Asia/Kolkata`](#asia-kolkata) |
| <a name="asia-chita"></a>Chita | `Asia/Chita` | Canonical | RU | +09:00 | - |
| <a name="asia-choibalsan"></a>Choibalsan | `Asia/Choibalsan` | Link | - | +08:00 | Parent: [`Asia/Ulaanbaatar`](#asia-ulaanbaatar) |
| <a name="asia-chongqing"></a>Chongqing | `Asia/Chongqing` | Link | - | +08:00 | Parent: [`Asia/Shanghai`](#asia-shanghai) |
| <a name="asia-chungking"></a>Chungking | `Asia/Chungking` | Link | - | +08:00 | Parent: [`Asia/Shanghai`](#asia-shanghai) |
| <a name="asia-colombo"></a>Colombo | `Asia/Colombo` | Canonical | LK | +05:30 | - |
| <a name="asia-dacca"></a>Dacca | `Asia/Dacca` | Link | - | +06:00 | Parent: [`Asia/Dhaka`](#asia-dhaka) |
| <a name="asia-damascus"></a>Damascus | `Asia/Damascus` | Canonical | SY | +03:00 | - |
| <a name="asia-dhaka"></a>Dhaka | `Asia/Dhaka` | Canonical | BD | +06:00 | Children: [`Asia/Dacca`](#asia-dacca) |
| <a name="asia-dili"></a>Dili | `Asia/Dili` | Canonical | TL | +09:00 | - |
| <a name="asia-dubai"></a>Dubai | `Asia/Dubai` | Canonical | AE, OM, RE, SC, TF | +04:00 | Children: [`Asia/Muscat`](#asia-muscat), [`Indian/Mahe`](#indian-mahe), [`Indian/Reunion`](#indian-reunion) |
| <a name="asia-dushanbe"></a>Dushanbe | `Asia/Dushanbe` | Canonical | TJ | +05:00 | - |
| <a name="asia-famagusta"></a>Famagusta | `Asia/Famagusta` | Canonical | CY | +03:00 | - |
| <a name="asia-gaza"></a>Gaza | `Asia/Gaza` | Canonical | PS | +03:00 | - |
| <a name="asia-harbin"></a>Harbin | `Asia/Harbin` | Link | - | +08:00 | Parent: [`Asia/Shanghai`](#asia-shanghai) |
| <a name="asia-hebron"></a>Hebron | `Asia/Hebron` | Canonical | PS | +03:00 | - |
| <a name="asia-ho-chi-minh"></a>Ho Chi_Minh | `Asia/Ho_Chi_Minh` | Canonical | VN | +07:00 | Children: [`Asia/Saigon`](#asia-saigon) |
| <a name="asia-hong-kong"></a>Hong Kong | `Asia/Hong_Kong` | Canonical | HK | +08:00 | Children: [`Hongkong`](#hongkong) |
| <a name="asia-hovd"></a>Hovd | `Asia/Hovd` | Canonical | MN | +07:00 | - |
| <a name="asia-irkutsk"></a>Irkutsk | `Asia/Irkutsk` | Canonical | RU | +08:00 | - |
| <a name="asia-istanbul"></a>Istanbul | `Asia/Istanbul` | Link | - | +03:00 | Parent: [`Europe/Istanbul`](#europe-istanbul) |
| <a name="asia-jakarta"></a>Jakarta | `Asia/Jakarta` | Canonical | ID | +07:00 | - |
| <a name="asia-jayapura"></a>Jayapura | `Asia/Jayapura` | Canonical | ID | +09:00 | - |
| <a name="asia-jerusalem"></a>Jerusalem | `Asia/Jerusalem` | Canonical | IL | +03:00 | Children: [`Asia/Tel_Aviv`](#asia-tel-aviv), [`Israel`](#israel) |
| <a name="asia-kabul"></a>Kabul | `Asia/Kabul` | Canonical | AF | +04:30 | - |
| <a name="asia-kamchatka"></a>Kamchatka | `Asia/Kamchatka` | Canonical | RU | +12:00 | - |
| <a name="asia-karachi"></a>Karachi | `Asia/Karachi` | Canonical | PK | +05:00 | - |
| <a name="asia-kashgar"></a>Kashgar | `Asia/Kashgar` | Link | - | +06:00 | Parent: [`Asia/Urumqi`](#asia-urumqi) |
| <a name="asia-kathmandu"></a>Kathmandu | `Asia/Kathmandu` | Canonical | NP | +05:45 | Children: [`Asia/Katmandu`](#asia-katmandu) |
| <a name="asia-katmandu"></a>Katmandu | `Asia/Katmandu` | Link | - | +05:45 | Parent: [`Asia/Kathmandu`](#asia-kathmandu) |
| <a name="asia-khandyga"></a>Khandyga | `Asia/Khandyga` | Canonical | RU | +09:00 | - |
| <a name="asia-kolkata"></a>Kolkata | `Asia/Kolkata` | Canonical | IN | +05:30 | Children: [`Asia/Calcutta`](#asia-calcutta) |
| <a name="asia-krasnoyarsk"></a>Krasnoyarsk | `Asia/Krasnoyarsk` | Canonical | RU | +07:00 | - |
| <a name="asia-kuala-lumpur"></a>Kuala Lumpur | `Asia/Kuala_Lumpur` | Link | MY | +08:00 | Parent: [`Asia/Singapore`](#asia-singapore) |
| <a name="asia-kuching"></a>Kuching | `Asia/Kuching` | Canonical | BN, MY | +08:00 | Children: [`Asia/Brunei`](#asia-brunei) |
| <a name="asia-kuwait"></a>Kuwait | `Asia/Kuwait` | Link | KW | +03:00 | Parent: [`Asia/Riyadh`](#asia-riyadh) |
| <a name="asia-macao"></a>Macao | `Asia/Macao` | Link | - | +08:00 | Parent: [`Asia/Macau`](#asia-macau) |
| <a name="asia-macau"></a>Macau | `Asia/Macau` | Canonical | MO | +08:00 | Children: [`Asia/Macao`](#asia-macao) |
| <a name="asia-magadan"></a>Magadan | `Asia/Magadan` | Canonical | RU | +11:00 | - |
| <a name="asia-makassar"></a>Makassar | `Asia/Makassar` | Canonical | ID | +08:00 | Children: [`Asia/Ujung_Pandang`](#asia-ujung-pandang) |
| <a name="asia-manila"></a>Manila | `Asia/Manila` | Canonical | PH | +08:00 | - |
| <a name="asia-muscat"></a>Muscat | `Asia/Muscat` | Link | OM | +04:00 | Parent: [`Asia/Dubai`](#asia-dubai) |
| <a name="asia-nicosia"></a>Nicosia | `Asia/Nicosia` | Canonical | CY | +03:00 | Children: [`Europe/Nicosia`](#europe-nicosia) |
| <a name="asia-novokuznetsk"></a>Novokuznetsk | `Asia/Novokuznetsk` | Canonical | RU | +07:00 | - |
| <a name="asia-novosibirsk"></a>Novosibirsk | `Asia/Novosibirsk` | Canonical | RU | +07:00 | - |
| <a name="asia-omsk"></a>Omsk | `Asia/Omsk` | Canonical | RU | +06:00 | - |
| <a name="asia-oral"></a>Oral | `Asia/Oral` | Canonical | KZ | +05:00 | - |
| <a name="asia-phnom-penh"></a>Phnom Penh | `Asia/Phnom_Penh` | Link | KH | +07:00 | Parent: [`Asia/Bangkok`](#asia-bangkok) |
| <a name="asia-pontianak"></a>Pontianak | `Asia/Pontianak` | Canonical | ID | +07:00 | - |
| <a name="asia-pyongyang"></a>Pyongyang | `Asia/Pyongyang` | Canonical | KP | +09:00 | - |
| <a name="asia-qatar"></a>Qatar | `Asia/Qatar` | Canonical | BH, QA | +03:00 | Children: [`Asia/Bahrain`](#asia-bahrain) |
| <a name="asia-qostanay"></a>Qostanay | `Asia/Qostanay` | Canonical | KZ | +05:00 | - |
| <a name="asia-qyzylorda"></a>Qyzylorda | `Asia/Qyzylorda` | Canonical | KZ | +05:00 | - |
| <a name="asia-rangoon"></a>Rangoon | `Asia/Rangoon` | Link | - | +06:30 | Parent: [`Asia/Yangon`](#asia-yangon) |
| <a name="asia-riyadh"></a>Riyadh | `Asia/Riyadh` | Canonical | AQ, KW, SA, YE | +03:00 | Children: [`Antarctica/Syowa`](#antarctica-syowa), [`Asia/Aden`](#asia-aden), [`Asia/Kuwait`](#asia-kuwait) |
| <a name="asia-saigon"></a>Saigon | `Asia/Saigon` | Link | - | +07:00 | Parent: [`Asia/Ho_Chi_Minh`](#asia-ho-chi-minh) |
| <a name="asia-sakhalin"></a>Sakhalin | `Asia/Sakhalin` | Canonical | RU | +11:00 | - |
| <a name="asia-samarkand"></a>Samarkand | `Asia/Samarkand` | Canonical | UZ | +05:00 | - |
| <a name="asia-seoul"></a>Seoul | `Asia/Seoul` | Canonical | KR | +09:00 | Children: [`ROK`](#rok) |
| <a name="asia-shanghai"></a>Shanghai | `Asia/Shanghai` | Canonical | CN | +08:00 | Children: [`Asia/Chongqing`](#asia-chongqing), [`Asia/Chungking`](#asia-chungking), [`Asia/Harbin`](#asia-harbin), [`PRC`](#prc) |
| <a name="asia-singapore"></a>Singapore | `Asia/Singapore` | Canonical | AQ, MY, SG | +08:00 | Children: [`Asia/Kuala_Lumpur`](#asia-kuala-lumpur), [`Singapore`](#singapore) |
| <a name="asia-srednekolymsk"></a>Srednekolymsk | `Asia/Srednekolymsk` | Canonical | RU | +11:00 | - |
| <a name="asia-taipei"></a>Taipei | `Asia/Taipei` | Canonical | TW | +08:00 | Children: [`ROC`](#roc) |
| <a name="asia-tashkent"></a>Tashkent | `Asia/Tashkent` | Canonical | UZ | +05:00 | - |
| <a name="asia-tbilisi"></a>Tbilisi | `Asia/Tbilisi` | Canonical | GE | +04:00 | - |
| <a name="asia-tehran"></a>Tehran | `Asia/Tehran` | Canonical | IR | +03:30 | Children: [`Iran`](#iran) |
| <a name="asia-tel-aviv"></a>Tel Aviv | `Asia/Tel_Aviv` | Link | - | +03:00 | Parent: [`Asia/Jerusalem`](#asia-jerusalem) |
| <a name="asia-thimbu"></a>Thimbu | `Asia/Thimbu` | Link | - | +06:00 | Parent: [`Asia/Thimphu`](#asia-thimphu) |
| <a name="asia-thimphu"></a>Thimphu | `Asia/Thimphu` | Canonical | BT | +06:00 | Children: [`Asia/Thimbu`](#asia-thimbu) |
| <a name="asia-tokyo"></a>Tokyo | `Asia/Tokyo` | Canonical | AU, JP | +09:00 | Children: [`Japan`](#japan) |
| <a name="asia-tomsk"></a>Tomsk | `Asia/Tomsk` | Canonical | RU | +07:00 | - |
| <a name="asia-ujung-pandang"></a>Ujung Pandang | `Asia/Ujung_Pandang` | Link | - | +08:00 | Parent: [`Asia/Makassar`](#asia-makassar) |
| <a name="asia-ulaanbaatar"></a>Ulaanbaatar | `Asia/Ulaanbaatar` | Canonical | MN | +08:00 | Children: [`Asia/Choibalsan`](#asia-choibalsan), [`Asia/Ulan_Bator`](#asia-ulan-bator) |
| <a name="asia-ulan-bator"></a>Ulan Bator | `Asia/Ulan_Bator` | Link | - | +08:00 | Parent: [`Asia/Ulaanbaatar`](#asia-ulaanbaatar) |
| <a name="asia-urumqi"></a>Urumqi | `Asia/Urumqi` | Canonical | CN | +06:00 | Children: [`Asia/Kashgar`](#asia-kashgar) |
| <a name="asia-ust-nera"></a>Ust-Nera | `Asia/Ust-Nera` | Canonical | RU | +10:00 | - |
| <a name="asia-vientiane"></a>Vientiane | `Asia/Vientiane` | Link | LA | +07:00 | Parent: [`Asia/Bangkok`](#asia-bangkok) |
| <a name="asia-vladivostok"></a>Vladivostok | `Asia/Vladivostok` | Canonical | RU | +10:00 | - |
| <a name="asia-yakutsk"></a>Yakutsk | `Asia/Yakutsk` | Canonical | RU | +09:00 | - |
| <a name="asia-yangon"></a>Yangon | `Asia/Yangon` | Canonical | CC, MM | +06:30 | Children: [`Asia/Rangoon`](#asia-rangoon), [`Indian/Cocos`](#indian-cocos) |
| <a name="asia-yekaterinburg"></a>Yekaterinburg | `Asia/Yekaterinburg` | Canonical | RU | +05:00 | - |
| <a name="asia-yerevan"></a>Yerevan | `Asia/Yerevan` | Canonical | AM | +04:00 | - |
| <a name="hongkong"></a>Hongkong | `Hongkong` | Link | - | +08:00 | Parent: [`Asia/Hong_Kong`](#asia-hong-kong) |
| <a name="iran"></a>Iran | `Iran` | Link | - | +03:30 | Parent: [`Asia/Tehran`](#asia-tehran) |
| <a name="israel"></a>Israel | `Israel` | Link | - | +03:00 | Parent: [`Asia/Jerusalem`](#asia-jerusalem) |
| <a name="japan"></a>Japan | `Japan` | Link | - | +09:00 | Parent: [`Asia/Tokyo`](#asia-tokyo) |
| <a name="prc"></a>PRC | `PRC` | Link | - | +08:00 | Parent: [`Asia/Shanghai`](#asia-shanghai) |
| <a name="roc"></a>ROC | `ROC` | Link | - | +08:00 | Parent: [`Asia/Taipei`](#asia-taipei) |
| <a name="rok"></a>ROK | `ROK` | Link | - | +09:00 | Parent: [`Asia/Seoul`](#asia-seoul) |
| <a name="singapore"></a>Singapore | `Singapore` | Link | - | +08:00 | Parent: [`Asia/Singapore`](#asia-singapore) |

## Atlantic

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="atlantic-azores"></a>Azores | `Atlantic/Azores` | Canonical | PT | +00:00 | - |
| <a name="atlantic-bermuda"></a>Bermuda | `Atlantic/Bermuda` | Canonical | BM | -03:00 | - |
| <a name="atlantic-canary"></a>Canary | `Atlantic/Canary` | Canonical | ES | +01:00 | - |
| <a name="atlantic-cape-verde"></a>Cape Verde | `Atlantic/Cape_Verde` | Canonical | CV | -01:00 | - |
| <a name="atlantic-faeroe"></a>Faeroe | `Atlantic/Faeroe` | Link | - | +01:00 | Parent: [`Atlantic/Faroe`](#atlantic-faroe) |
| <a name="atlantic-faroe"></a>Faroe | `Atlantic/Faroe` | Canonical | FO | +01:00 | Children: [`Atlantic/Faeroe`](#atlantic-faeroe) |
| <a name="atlantic-jan-mayen"></a>Jan Mayen | `Atlantic/Jan_Mayen` | Link | - | +02:00 | Parent: [`Europe/Berlin`](#europe-berlin) |
| <a name="atlantic-madeira"></a>Madeira | `Atlantic/Madeira` | Canonical | PT | +01:00 | - |
| <a name="atlantic-reykjavik"></a>Reykjavik | `Atlantic/Reykjavik` | Link | IS | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="atlantic-south-georgia"></a>South Georgia | `Atlantic/South_Georgia` | Canonical | GS | -02:00 | - |
| <a name="atlantic-st-helena"></a>St Helena | `Atlantic/St_Helena` | Link | SH | +00:00 | Parent: [`Africa/Abidjan`](#africa-abidjan) |
| <a name="atlantic-stanley"></a>Stanley | `Atlantic/Stanley` | Canonical | FK | -03:00 | - |

## Australia

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="australia-act"></a>ACT | `Australia/ACT` | Link | - | +10:00 | Parent: [`Australia/Sydney`](#australia-sydney) |
| <a name="australia-adelaide"></a>Adelaide | `Australia/Adelaide` | Canonical | AU | +09:30 | Children: [`Australia/South`](#australia-south) |
| <a name="australia-brisbane"></a>Brisbane | `Australia/Brisbane` | Canonical | AU | +10:00 | Children: [`Australia/Queensland`](#australia-queensland) |
| <a name="australia-broken-hill"></a>Broken Hill | `Australia/Broken_Hill` | Canonical | AU | +09:30 | Children: [`Australia/Yancowinna`](#australia-yancowinna) |
| <a name="australia-canberra"></a>Canberra | `Australia/Canberra` | Link | - | +10:00 | Parent: [`Australia/Sydney`](#australia-sydney) |
| <a name="australia-currie"></a>Currie | `Australia/Currie` | Link | - | +10:00 | Parent: [`Australia/Hobart`](#australia-hobart) |
| <a name="australia-darwin"></a>Darwin | `Australia/Darwin` | Canonical | AU | +09:30 | Children: [`Australia/North`](#australia-north) |
| <a name="australia-eucla"></a>Eucla | `Australia/Eucla` | Canonical | AU | +08:45 | - |
| <a name="australia-hobart"></a>Hobart | `Australia/Hobart` | Canonical | AU | +10:00 | Children: [`Australia/Currie`](#australia-currie), [`Australia/Tasmania`](#australia-tasmania) |
| <a name="australia-lhi"></a>LHI | `Australia/LHI` | Link | - | +10:30 | Parent: [`Australia/Lord_Howe`](#australia-lord-howe) |
| <a name="australia-lindeman"></a>Lindeman | `Australia/Lindeman` | Canonical | AU | +10:00 | - |
| <a name="australia-lord-howe"></a>Lord Howe | `Australia/Lord_Howe` | Canonical | AU | +10:30 | Children: [`Australia/LHI`](#australia-lhi) |
| <a name="australia-melbourne"></a>Melbourne | `Australia/Melbourne` | Canonical | AU | +10:00 | Children: [`Australia/Victoria`](#australia-victoria) |
| <a name="australia-north"></a>North | `Australia/North` | Link | - | +09:30 | Parent: [`Australia/Darwin`](#australia-darwin) |
| <a name="australia-nsw"></a>NSW | `Australia/NSW` | Link | - | +10:00 | Parent: [`Australia/Sydney`](#australia-sydney) |
| <a name="australia-perth"></a>Perth | `Australia/Perth` | Canonical | AU | +08:00 | Children: [`Australia/West`](#australia-west) |
| <a name="australia-queensland"></a>Queensland | `Australia/Queensland` | Link | - | +10:00 | Parent: [`Australia/Brisbane`](#australia-brisbane) |
| <a name="australia-south"></a>South | `Australia/South` | Link | - | +09:30 | Parent: [`Australia/Adelaide`](#australia-adelaide) |
| <a name="australia-sydney"></a>Sydney | `Australia/Sydney` | Canonical | AU | +10:00 | Children: [`Australia/ACT`](#australia-act), [`Australia/Canberra`](#australia-canberra), [`Australia/NSW`](#australia-nsw) |
| <a name="australia-tasmania"></a>Tasmania | `Australia/Tasmania` | Link | - | +10:00 | Parent: [`Australia/Hobart`](#australia-hobart) |
| <a name="australia-victoria"></a>Victoria | `Australia/Victoria` | Link | - | +10:00 | Parent: [`Australia/Melbourne`](#australia-melbourne) |
| <a name="australia-west"></a>West | `Australia/West` | Link | - | +08:00 | Parent: [`Australia/Perth`](#australia-perth) |
| <a name="australia-yancowinna"></a>Yancowinna | `Australia/Yancowinna` | Link | - | +09:30 | Parent: [`Australia/Broken_Hill`](#australia-broken-hill) |

## Brazil

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="brazil-acre"></a>Acre | `Brazil/Acre` | Link | - | -05:00 | Parent: [`America/Rio_Branco`](#america-rio-branco) |
| <a name="brazil-denoronha"></a>DeNoronha | `Brazil/DeNoronha` | Link | - | -02:00 | Parent: [`America/Noronha`](#america-noronha) |
| <a name="brazil-east"></a>East | `Brazil/East` | Link | - | -03:00 | Parent: [`America/Sao_Paulo`](#america-sao-paulo) |
| <a name="brazil-west"></a>West | `Brazil/West` | Link | - | -04:00 | Parent: [`America/Manaus`](#america-manaus) |

## Canada

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="canada-atlantic"></a>Atlantic | `Canada/Atlantic` | Link | - | -03:00 | Parent: [`America/Halifax`](#america-halifax) |
| <a name="canada-central"></a>Central | `Canada/Central` | Link | - | -05:00 | Parent: [`America/Winnipeg`](#america-winnipeg) |
| <a name="canada-eastern"></a>Eastern | `Canada/Eastern` | Link | - | -04:00 | Parent: [`America/Toronto`](#america-toronto) |
| <a name="canada-mountain"></a>Mountain | `Canada/Mountain` | Link | - | -06:00 | Parent: [`America/Edmonton`](#america-edmonton) |
| <a name="canada-newfoundland"></a>Newfoundland | `Canada/Newfoundland` | Link | - | -02:30 | Parent: [`America/St_Johns`](#america-st-johns) |
| <a name="canada-pacific"></a>Pacific | `Canada/Pacific` | Link | - | -07:00 | Parent: [`America/Vancouver`](#america-vancouver) |
| <a name="canada-saskatchewan"></a>Saskatchewan | `Canada/Saskatchewan` | Link | - | -06:00 | Parent: [`America/Regina`](#america-regina) |
| <a name="canada-yukon"></a>Yukon | `Canada/Yukon` | Link | - | -07:00 | Parent: [`America/Whitehorse`](#america-whitehorse) |

## Chile

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="chile-continental"></a>Continental | `Chile/Continental` | Link | - | -04:00 | Parent: [`America/Santiago`](#america-santiago) |
| <a name="chile-easterisland"></a>EasterIsland | `Chile/EasterIsland` | Link | - | -06:00 | Parent: [`Pacific/Easter`](#pacific-easter) |

## Etc

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="etc-gmt"></a>- | `Etc/GMT` | Canonical | - | +00:00 | Children: [`Etc/GMT-0`](#etc-gmt-0), [`Etc/GMT+0`](#etc-gmt0), [`Etc/GMT0`](#etc-gmt0), [`Etc/Greenwich`](#etc-greenwich), [`GMT`](#gmt), [`GMT-0`](#gmt-0), [`GMT+0`](#gmt0), [`GMT0`](#gmt0), [`Greenwich`](#greenwich) |
| <a name="etc-gmt-0"></a>GMT-0 | `Etc/GMT-0` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="etc-gmt-1"></a>- | `Etc/GMT-1` | Canonical | - | +01:00 | - |
| <a name="etc-gmt-10"></a>- | `Etc/GMT-10` | Canonical | - | +10:00 | - |
| <a name="etc-gmt-11"></a>- | `Etc/GMT-11` | Canonical | - | +11:00 | - |
| <a name="etc-gmt-12"></a>- | `Etc/GMT-12` | Canonical | - | +12:00 | - |
| <a name="etc-gmt-13"></a>- | `Etc/GMT-13` | Canonical | - | +13:00 | - |
| <a name="etc-gmt-14"></a>- | `Etc/GMT-14` | Canonical | - | +14:00 | - |
| <a name="etc-gmt-2"></a>- | `Etc/GMT-2` | Canonical | - | +02:00 | - |
| <a name="etc-gmt-3"></a>- | `Etc/GMT-3` | Canonical | - | +03:00 | - |
| <a name="etc-gmt-4"></a>- | `Etc/GMT-4` | Canonical | - | +04:00 | - |
| <a name="etc-gmt-5"></a>- | `Etc/GMT-5` | Canonical | - | +05:00 | - |
| <a name="etc-gmt-6"></a>- | `Etc/GMT-6` | Canonical | - | +06:00 | - |
| <a name="etc-gmt-7"></a>- | `Etc/GMT-7` | Canonical | - | +07:00 | - |
| <a name="etc-gmt-8"></a>- | `Etc/GMT-8` | Canonical | - | +08:00 | - |
| <a name="etc-gmt-9"></a>- | `Etc/GMT-9` | Canonical | - | +09:00 | - |
| <a name="etc-gmt0"></a>GMT+0 | `Etc/GMT+0` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="etc-gmt1"></a>- | `Etc/GMT+1` | Canonical | - | -01:00 | - |
| <a name="etc-gmt10"></a>- | `Etc/GMT+10` | Canonical | - | -10:00 | - |
| <a name="etc-gmt11"></a>- | `Etc/GMT+11` | Canonical | - | -11:00 | - |
| <a name="etc-gmt12"></a>- | `Etc/GMT+12` | Canonical | - | -12:00 | - |
| <a name="etc-gmt2"></a>- | `Etc/GMT+2` | Canonical | - | -02:00 | - |
| <a name="etc-gmt3"></a>- | `Etc/GMT+3` | Canonical | - | -03:00 | - |
| <a name="etc-gmt4"></a>- | `Etc/GMT+4` | Canonical | - | -04:00 | - |
| <a name="etc-gmt5"></a>- | `Etc/GMT+5` | Canonical | - | -05:00 | - |
| <a name="etc-gmt6"></a>- | `Etc/GMT+6` | Canonical | - | -06:00 | - |
| <a name="etc-gmt7"></a>- | `Etc/GMT+7` | Canonical | - | -07:00 | - |
| <a name="etc-gmt8"></a>- | `Etc/GMT+8` | Canonical | - | -08:00 | - |
| <a name="etc-gmt9"></a>- | `Etc/GMT+9` | Canonical | - | -09:00 | - |
| <a name="etc-gmt0"></a>GMT0 | `Etc/GMT0` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="etc-greenwich"></a>Greenwich | `Etc/Greenwich` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="etc-uct"></a>UCT | `Etc/UCT` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |
| <a name="etc-universal"></a>Universal | `Etc/Universal` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |
| <a name="etc-utc"></a>- | `Etc/UTC` | Canonical | - | +00:00 | Children: [`Etc/UCT`](#etc-uct), [`Etc/Universal`](#etc-universal), [`Etc/Zulu`](#etc-zulu), [`UCT`](#uct), [`Universal`](#universal), [`UTC`](#utc), [`Zulu`](#zulu) |
| <a name="etc-zulu"></a>Zulu | `Etc/Zulu` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |
| <a name="gmt"></a>- | `GMT` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="gmt-0"></a>GMT-0 | `GMT-0` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="gmt0"></a>GMT+0 | `GMT+0` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="gmt0"></a>GMT0 | `GMT0` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="greenwich"></a>Greenwich | `Greenwich` | Link | - | +00:00 | Parent: [`Etc/GMT`](#etc-gmt) |
| <a name="uct"></a>UCT | `UCT` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |
| <a name="universal"></a>Universal | `Universal` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |
| <a name="utc"></a>UTC | `UTC` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |
| <a name="zulu"></a>Zulu | `Zulu` | Link | - | +00:00 | Parent: [`Etc/UTC`](#etc-utc) |

## Europe

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="cet"></a>CET | `CET` | Link | - | +02:00 | Parent: [`Europe/Brussels`](#europe-brussels) |
| <a name="eet"></a>EET | `EET` | Link | - | +03:00 | Parent: [`Europe/Athens`](#europe-athens) |
| <a name="eire"></a>Eire | `Eire` | Link | - | +01:00 | Parent: [`Europe/Dublin`](#europe-dublin) |
| <a name="europe-amsterdam"></a>Amsterdam | `Europe/Amsterdam` | Link | NL | +02:00 | Parent: [`Europe/Brussels`](#europe-brussels) |
| <a name="europe-andorra"></a>Andorra | `Europe/Andorra` | Canonical | AD | +02:00 | - |
| <a name="europe-astrakhan"></a>Astrakhan | `Europe/Astrakhan` | Canonical | RU | +04:00 | - |
| <a name="europe-athens"></a>Athens | `Europe/Athens` | Canonical | GR | +03:00 | Children: [`EET`](#eet) |
| <a name="europe-belfast"></a>Belfast | `Europe/Belfast` | Link | - | +01:00 | Parent: [`Europe/London`](#europe-london) |
| <a name="europe-belgrade"></a>Belgrade | `Europe/Belgrade` | Canonical | BA, HR, ME, MK, RS, SI | +02:00 | Children: [`Europe/Ljubljana`](#europe-ljubljana), [`Europe/Podgorica`](#europe-podgorica), [`Europe/Sarajevo`](#europe-sarajevo), [`Europe/Skopje`](#europe-skopje), [`Europe/Zagreb`](#europe-zagreb) |
| <a name="europe-berlin"></a>Berlin | `Europe/Berlin` | Canonical | DE, DK, NO, SE, SJ | +02:00 | Children: [`Arctic/Longyearbyen`](#arctic-longyearbyen), [`Atlantic/Jan_Mayen`](#atlantic-jan-mayen), [`Europe/Copenhagen`](#europe-copenhagen), [`Europe/Oslo`](#europe-oslo), [`Europe/Stockholm`](#europe-stockholm) |
| <a name="europe-bratislava"></a>Bratislava | `Europe/Bratislava` | Link | SK | +02:00 | Parent: [`Europe/Prague`](#europe-prague) |
| <a name="europe-brussels"></a>Brussels | `Europe/Brussels` | Canonical | BE, LU, NL | +02:00 | Children: [`CET`](#cet), [`Europe/Amsterdam`](#europe-amsterdam), [`Europe/Luxembourg`](#europe-luxembourg), [`MET`](#met) |
| <a name="europe-bucharest"></a>Bucharest | `Europe/Bucharest` | Canonical | RO | +03:00 | - |
| <a name="europe-budapest"></a>Budapest | `Europe/Budapest` | Canonical | HU | +02:00 | - |
| <a name="europe-busingen"></a>Busingen | `Europe/Busingen` | Link | DE | +02:00 | Parent: [`Europe/Zurich`](#europe-zurich) |
| <a name="europe-chisinau"></a>Chisinau | `Europe/Chisinau` | Canonical | MD | +03:00 | Children: [`Europe/Tiraspol`](#europe-tiraspol) |
| <a name="europe-copenhagen"></a>Copenhagen | `Europe/Copenhagen` | Link | DK | +02:00 | Parent: [`Europe/Berlin`](#europe-berlin) |
| <a name="europe-dublin"></a>Dublin | `Europe/Dublin` | Canonical | IE | +01:00 | Children: [`Eire`](#eire) |
| <a name="europe-gibraltar"></a>Gibraltar | `Europe/Gibraltar` | Canonical | GI | +02:00 | - |
| <a name="europe-guernsey"></a>Guernsey | `Europe/Guernsey` | Link | GG | +01:00 | Parent: [`Europe/London`](#europe-london) |
| <a name="europe-helsinki"></a>Helsinki | `Europe/Helsinki` | Canonical | AX, FI | +03:00 | Children: [`Europe/Mariehamn`](#europe-mariehamn) |
| <a name="europe-isle-of-man"></a>Isle of_Man | `Europe/Isle_of_Man` | Link | IM | +01:00 | Parent: [`Europe/London`](#europe-london) |
| <a name="europe-istanbul"></a>Istanbul | `Europe/Istanbul` | Canonical | TR | +03:00 | Children: [`Asia/Istanbul`](#asia-istanbul), [`Turkey`](#turkey) |
| <a name="europe-jersey"></a>Jersey | `Europe/Jersey` | Link | JE | +01:00 | Parent: [`Europe/London`](#europe-london) |
| <a name="europe-kaliningrad"></a>Kaliningrad | `Europe/Kaliningrad` | Canonical | RU | +02:00 | - |
| <a name="europe-kiev"></a>Kiev | `Europe/Kiev` | Link | - | +03:00 | Parent: [`Europe/Kyiv`](#europe-kyiv) |
| <a name="europe-kirov"></a>Kirov | `Europe/Kirov` | Canonical | RU | +03:00 | - |
| <a name="europe-kyiv"></a>Kyiv | `Europe/Kyiv` | Canonical | UA | +03:00 | Children: [`Europe/Kiev`](#europe-kiev), [`Europe/Uzhgorod`](#europe-uzhgorod), [`Europe/Zaporozhye`](#europe-zaporozhye) |
| <a name="europe-lisbon"></a>Lisbon | `Europe/Lisbon` | Canonical | PT | +01:00 | Children: [`Portugal`](#portugal), [`WET`](#wet) |
| <a name="europe-ljubljana"></a>Ljubljana | `Europe/Ljubljana` | Link | SI | +02:00 | Parent: [`Europe/Belgrade`](#europe-belgrade) |
| <a name="europe-london"></a>London | `Europe/London` | Canonical | GB, GG, IM, JE | +01:00 | Children: [`Europe/Belfast`](#europe-belfast), [`Europe/Guernsey`](#europe-guernsey), [`Europe/Isle_of_Man`](#europe-isle-of-man), [`Europe/Jersey`](#europe-jersey), [`GB`](#gb), [`GB-Eire`](#gb-eire) |
| <a name="europe-luxembourg"></a>Luxembourg | `Europe/Luxembourg` | Link | LU | +02:00 | Parent: [`Europe/Brussels`](#europe-brussels) |
| <a name="europe-madrid"></a>Madrid | `Europe/Madrid` | Canonical | ES | +02:00 | - |
| <a name="europe-malta"></a>Malta | `Europe/Malta` | Canonical | MT | +02:00 | - |
| <a name="europe-mariehamn"></a>Mariehamn | `Europe/Mariehamn` | Link | AX | +03:00 | Parent: [`Europe/Helsinki`](#europe-helsinki) |
| <a name="europe-minsk"></a>Minsk | `Europe/Minsk` | Canonical | BY | +03:00 | - |
| <a name="europe-monaco"></a>Monaco | `Europe/Monaco` | Link | MC | +02:00 | Parent: [`Europe/Paris`](#europe-paris) |
| <a name="europe-moscow"></a>Moscow | `Europe/Moscow` | Canonical | RU | +03:00 | Children: [`W-SU`](#w-su) |
| <a name="europe-nicosia"></a>Nicosia | `Europe/Nicosia` | Link | - | +03:00 | Parent: [`Asia/Nicosia`](#asia-nicosia) |
| <a name="europe-oslo"></a>Oslo | `Europe/Oslo` | Link | NO | +02:00 | Parent: [`Europe/Berlin`](#europe-berlin) |
| <a name="europe-paris"></a>Paris | `Europe/Paris` | Canonical | FR, MC | +02:00 | Children: [`Europe/Monaco`](#europe-monaco) |
| <a name="europe-podgorica"></a>Podgorica | `Europe/Podgorica` | Link | ME | +02:00 | Parent: [`Europe/Belgrade`](#europe-belgrade) |
| <a name="europe-prague"></a>Prague | `Europe/Prague` | Canonical | CZ, SK | +02:00 | Children: [`Europe/Bratislava`](#europe-bratislava) |
| <a name="europe-riga"></a>Riga | `Europe/Riga` | Canonical | LV | +03:00 | - |
| <a name="europe-rome"></a>Rome | `Europe/Rome` | Canonical | IT, SM, VA | +02:00 | Children: [`Europe/San_Marino`](#europe-san-marino), [`Europe/Vatican`](#europe-vatican) |
| <a name="europe-samara"></a>Samara | `Europe/Samara` | Canonical | RU | +04:00 | - |
| <a name="europe-san-marino"></a>San Marino | `Europe/San_Marino` | Link | SM | +02:00 | Parent: [`Europe/Rome`](#europe-rome) |
| <a name="europe-sarajevo"></a>Sarajevo | `Europe/Sarajevo` | Link | BA | +02:00 | Parent: [`Europe/Belgrade`](#europe-belgrade) |
| <a name="europe-saratov"></a>Saratov | `Europe/Saratov` | Canonical | RU | +04:00 | - |
| <a name="europe-simferopol"></a>Simferopol | `Europe/Simferopol` | Canonical | RU, UA | +03:00 | - |
| <a name="europe-skopje"></a>Skopje | `Europe/Skopje` | Link | MK | +02:00 | Parent: [`Europe/Belgrade`](#europe-belgrade) |
| <a name="europe-sofia"></a>Sofia | `Europe/Sofia` | Canonical | BG | +03:00 | - |
| <a name="europe-stockholm"></a>Stockholm | `Europe/Stockholm` | Link | SE | +02:00 | Parent: [`Europe/Berlin`](#europe-berlin) |
| <a name="europe-tallinn"></a>Tallinn | `Europe/Tallinn` | Canonical | EE | +03:00 | - |
| <a name="europe-tirane"></a>Tirane | `Europe/Tirane` | Canonical | AL | +02:00 | - |
| <a name="europe-tiraspol"></a>Tiraspol | `Europe/Tiraspol` | Link | - | +03:00 | Parent: [`Europe/Chisinau`](#europe-chisinau) |
| <a name="europe-ulyanovsk"></a>Ulyanovsk | `Europe/Ulyanovsk` | Canonical | RU | +04:00 | - |
| <a name="europe-uzhgorod"></a>Uzhgorod | `Europe/Uzhgorod` | Link | - | +03:00 | Parent: [`Europe/Kyiv`](#europe-kyiv) |
| <a name="europe-vaduz"></a>Vaduz | `Europe/Vaduz` | Link | LI | +02:00 | Parent: [`Europe/Zurich`](#europe-zurich) |
| <a name="europe-vatican"></a>Vatican | `Europe/Vatican` | Link | VA | +02:00 | Parent: [`Europe/Rome`](#europe-rome) |
| <a name="europe-vienna"></a>Vienna | `Europe/Vienna` | Canonical | AT | +02:00 | - |
| <a name="europe-vilnius"></a>Vilnius | `Europe/Vilnius` | Canonical | LT | +03:00 | - |
| <a name="europe-volgograd"></a>Volgograd | `Europe/Volgograd` | Canonical | RU | +03:00 | - |
| <a name="europe-warsaw"></a>Warsaw | `Europe/Warsaw` | Canonical | PL | +02:00 | Children: [`Poland`](#poland) |
| <a name="europe-zagreb"></a>Zagreb | `Europe/Zagreb` | Link | HR | +02:00 | Parent: [`Europe/Belgrade`](#europe-belgrade) |
| <a name="europe-zaporozhye"></a>Zaporozhye | `Europe/Zaporozhye` | Link | - | +03:00 | Parent: [`Europe/Kyiv`](#europe-kyiv) |
| <a name="europe-zurich"></a>Zurich | `Europe/Zurich` | Canonical | CH, DE, LI | +02:00 | Children: [`Europe/Busingen`](#europe-busingen), [`Europe/Vaduz`](#europe-vaduz) |
| <a name="gb"></a>GB | `GB` | Link | - | +01:00 | Parent: [`Europe/London`](#europe-london) |
| <a name="gb-eire"></a>GB-Eire | `GB-Eire` | Link | - | +01:00 | Parent: [`Europe/London`](#europe-london) |
| <a name="met"></a>MET | `MET` | Link | - | +02:00 | Parent: [`Europe/Brussels`](#europe-brussels) |
| <a name="poland"></a>Poland | `Poland` | Link | - | +02:00 | Parent: [`Europe/Warsaw`](#europe-warsaw) |
| <a name="portugal"></a>Portugal | `Portugal` | Link | - | +01:00 | Parent: [`Europe/Lisbon`](#europe-lisbon) |
| <a name="turkey"></a>Turkey | `Turkey` | Link | - | +03:00 | Parent: [`Europe/Istanbul`](#europe-istanbul) |
| <a name="w-su"></a>W-SU | `W-SU` | Link | - | +03:00 | Parent: [`Europe/Moscow`](#europe-moscow) |
| <a name="wet"></a>WET | `WET` | Link | - | +01:00 | Parent: [`Europe/Lisbon`](#europe-lisbon) |

## Indian

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="indian-antananarivo"></a>Antananarivo | `Indian/Antananarivo` | Link | MG | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="indian-chagos"></a>Chagos | `Indian/Chagos` | Canonical | IO | +06:00 | - |
| <a name="indian-christmas"></a>Christmas | `Indian/Christmas` | Link | CX | +07:00 | Parent: [`Asia/Bangkok`](#asia-bangkok) |
| <a name="indian-cocos"></a>Cocos | `Indian/Cocos` | Link | CC | +06:30 | Parent: [`Asia/Yangon`](#asia-yangon) |
| <a name="indian-comoro"></a>Comoro | `Indian/Comoro` | Link | KM | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="indian-kerguelen"></a>Kerguelen | `Indian/Kerguelen` | Link | TF | +05:00 | Parent: [`Indian/Maldives`](#indian-maldives) |
| <a name="indian-mahe"></a>Mahe | `Indian/Mahe` | Link | SC | +04:00 | Parent: [`Asia/Dubai`](#asia-dubai) |
| <a name="indian-maldives"></a>Maldives | `Indian/Maldives` | Canonical | MV, TF | +05:00 | Children: [`Indian/Kerguelen`](#indian-kerguelen) |
| <a name="indian-mauritius"></a>Mauritius | `Indian/Mauritius` | Canonical | MU | +04:00 | - |
| <a name="indian-mayotte"></a>Mayotte | `Indian/Mayotte` | Link | YT | +03:00 | Parent: [`Africa/Nairobi`](#africa-nairobi) |
| <a name="indian-reunion"></a>Reunion | `Indian/Reunion` | Link | RE | +04:00 | Parent: [`Asia/Dubai`](#asia-dubai) |

## Mexico

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="mexico-bajanorte"></a>BajaNorte | `Mexico/BajaNorte` | Link | - | -07:00 | Parent: [`America/Tijuana`](#america-tijuana) |
| <a name="mexico-bajasur"></a>BajaSur | `Mexico/BajaSur` | Link | - | -07:00 | Parent: [`America/Mazatlan`](#america-mazatlan) |
| <a name="mexico-general"></a>General | `Mexico/General` | Link | - | -06:00 | Parent: [`America/Mexico_City`](#america-mexico-city) |

## Pacific

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="hst"></a>HST | `HST` | Link | - | -10:00 | Parent: [`Pacific/Honolulu`](#pacific-honolulu) |
| <a name="kwajalein"></a>Kwajalein | `Kwajalein` | Link | - | +12:00 | Parent: [`Pacific/Kwajalein`](#pacific-kwajalein) |
| <a name="nz"></a>NZ | `NZ` | Link | - | +12:00 | Parent: [`Pacific/Auckland`](#pacific-auckland) |
| <a name="nz-chat"></a>NZ-CHAT | `NZ-CHAT` | Link | - | +12:45 | Parent: [`Pacific/Chatham`](#pacific-chatham) |
| <a name="pacific-apia"></a>Apia | `Pacific/Apia` | Canonical | WS | +13:00 | - |
| <a name="pacific-auckland"></a>Auckland | `Pacific/Auckland` | Canonical | AQ, NZ | +12:00 | Children: [`Antarctica/McMurdo`](#antarctica-mcmurdo), [`Antarctica/South_Pole`](#antarctica-south-pole), [`NZ`](#nz) |
| <a name="pacific-bougainville"></a>Bougainville | `Pacific/Bougainville` | Canonical | PG | +11:00 | - |
| <a name="pacific-chatham"></a>Chatham | `Pacific/Chatham` | Canonical | NZ | +12:45 | Children: [`NZ-CHAT`](#nz-chat) |
| <a name="pacific-chuuk"></a>Chuuk | `Pacific/Chuuk` | Link | FM | +10:00 | Parent: [`Pacific/Port_Moresby`](#pacific-port-moresby) |
| <a name="pacific-easter"></a>Easter | `Pacific/Easter` | Canonical | CL | -06:00 | Children: [`Chile/EasterIsland`](#chile-easterisland) |
| <a name="pacific-efate"></a>Efate | `Pacific/Efate` | Canonical | VU | +11:00 | - |
| <a name="pacific-enderbury"></a>Enderbury | `Pacific/Enderbury` | Link | - | +13:00 | Parent: [`Pacific/Kanton`](#pacific-kanton) |
| <a name="pacific-fakaofo"></a>Fakaofo | `Pacific/Fakaofo` | Canonical | TK | +13:00 | - |
| <a name="pacific-fiji"></a>Fiji | `Pacific/Fiji` | Canonical | FJ | +12:00 | - |
| <a name="pacific-funafuti"></a>Funafuti | `Pacific/Funafuti` | Link | TV | +12:00 | Parent: [`Pacific/Tarawa`](#pacific-tarawa) |
| <a name="pacific-galapagos"></a>Galapagos | `Pacific/Galapagos` | Canonical | EC | -06:00 | - |
| <a name="pacific-gambier"></a>Gambier | `Pacific/Gambier` | Canonical | PF | -09:00 | - |
| <a name="pacific-guadalcanal"></a>Guadalcanal | `Pacific/Guadalcanal` | Canonical | FM, SB | +11:00 | Children: [`Pacific/Pohnpei`](#pacific-pohnpei), [`Pacific/Ponape`](#pacific-ponape) |
| <a name="pacific-guam"></a>Guam | `Pacific/Guam` | Canonical | GU, MP | +10:00 | Children: [`Pacific/Saipan`](#pacific-saipan) |
| <a name="pacific-honolulu"></a>Honolulu | `Pacific/Honolulu` | Canonical | US | -10:00 | Children: [`HST`](#hst), [`Pacific/Johnston`](#pacific-johnston), [`US/Hawaii`](#us-hawaii) |
| <a name="pacific-johnston"></a>Johnston | `Pacific/Johnston` | Link | - | -10:00 | Parent: [`Pacific/Honolulu`](#pacific-honolulu) |
| <a name="pacific-kanton"></a>Kanton | `Pacific/Kanton` | Canonical | KI | +13:00 | Children: [`Pacific/Enderbury`](#pacific-enderbury) |
| <a name="pacific-kiritimati"></a>Kiritimati | `Pacific/Kiritimati` | Canonical | KI | +14:00 | - |
| <a name="pacific-kosrae"></a>Kosrae | `Pacific/Kosrae` | Canonical | FM | +11:00 | - |
| <a name="pacific-kwajalein"></a>Kwajalein | `Pacific/Kwajalein` | Canonical | MH | +12:00 | Children: [`Kwajalein`](#kwajalein) |
| <a name="pacific-majuro"></a>Majuro | `Pacific/Majuro` | Link | MH | +12:00 | Parent: [`Pacific/Tarawa`](#pacific-tarawa) |
| <a name="pacific-marquesas"></a>Marquesas | `Pacific/Marquesas` | Canonical | PF | -09:30 | - |
| <a name="pacific-midway"></a>Midway | `Pacific/Midway` | Link | UM | -11:00 | Parent: [`Pacific/Pago_Pago`](#pacific-pago-pago) |
| <a name="pacific-nauru"></a>Nauru | `Pacific/Nauru` | Canonical | NR | +12:00 | - |
| <a name="pacific-niue"></a>Niue | `Pacific/Niue` | Canonical | NU | -11:00 | - |
| <a name="pacific-norfolk"></a>Norfolk | `Pacific/Norfolk` | Canonical | NF | +11:00 | - |
| <a name="pacific-noumea"></a>Noumea | `Pacific/Noumea` | Canonical | NC | +11:00 | - |
| <a name="pacific-pago-pago"></a>Pago Pago | `Pacific/Pago_Pago` | Canonical | AS, UM | -11:00 | Children: [`Pacific/Midway`](#pacific-midway), [`Pacific/Samoa`](#pacific-samoa), [`US/Samoa`](#us-samoa) |
| <a name="pacific-palau"></a>Palau | `Pacific/Palau` | Canonical | PW | +09:00 | - |
| <a name="pacific-pitcairn"></a>Pitcairn | `Pacific/Pitcairn` | Canonical | PN | -08:00 | - |
| <a name="pacific-pohnpei"></a>Pohnpei | `Pacific/Pohnpei` | Link | FM | +11:00 | Parent: [`Pacific/Guadalcanal`](#pacific-guadalcanal) |
| <a name="pacific-ponape"></a>Ponape | `Pacific/Ponape` | Link | - | +11:00 | Parent: [`Pacific/Guadalcanal`](#pacific-guadalcanal) |
| <a name="pacific-port-moresby"></a>Port Moresby | `Pacific/Port_Moresby` | Canonical | AQ, FM, PG | +10:00 | Children: [`Antarctica/DumontDUrville`](#antarctica-dumontdurville), [`Pacific/Chuuk`](#pacific-chuuk), [`Pacific/Truk`](#pacific-truk), [`Pacific/Yap`](#pacific-yap) |
| <a name="pacific-rarotonga"></a>Rarotonga | `Pacific/Rarotonga` | Canonical | CK | -10:00 | - |
| <a name="pacific-saipan"></a>Saipan | `Pacific/Saipan` | Link | MP | +10:00 | Parent: [`Pacific/Guam`](#pacific-guam) |
| <a name="pacific-samoa"></a>Samoa | `Pacific/Samoa` | Link | - | -11:00 | Parent: [`Pacific/Pago_Pago`](#pacific-pago-pago) |
| <a name="pacific-tahiti"></a>Tahiti | `Pacific/Tahiti` | Canonical | PF | -10:00 | - |
| <a name="pacific-tarawa"></a>Tarawa | `Pacific/Tarawa` | Canonical | KI, MH, TV, UM, WF | +12:00 | Children: [`Pacific/Funafuti`](#pacific-funafuti), [`Pacific/Majuro`](#pacific-majuro), [`Pacific/Wake`](#pacific-wake), [`Pacific/Wallis`](#pacific-wallis) |
| <a name="pacific-tongatapu"></a>Tongatapu | `Pacific/Tongatapu` | Canonical | TO | +13:00 | - |
| <a name="pacific-truk"></a>Truk | `Pacific/Truk` | Link | - | +10:00 | Parent: [`Pacific/Port_Moresby`](#pacific-port-moresby) |
| <a name="pacific-wake"></a>Wake | `Pacific/Wake` | Link | UM | +12:00 | Parent: [`Pacific/Tarawa`](#pacific-tarawa) |
| <a name="pacific-wallis"></a>Wallis | `Pacific/Wallis` | Link | WF | +12:00 | Parent: [`Pacific/Tarawa`](#pacific-tarawa) |
| <a name="pacific-yap"></a>Yap | `Pacific/Yap` | Link | - | +10:00 | Parent: [`Pacific/Port_Moresby`](#pacific-port-moresby) |

## US

| Location | Timezone | Type | Country Codes | Offset | Link |
|----------|----------|------|---------------|--------|------|
| <a name="us-alaska"></a>Alaska | `US/Alaska` | Link | - | -08:00 | Parent: [`America/Anchorage`](#america-anchorage) |
| <a name="us-aleutian"></a>Aleutian | `US/Aleutian` | Link | - | -09:00 | Parent: [`America/Adak`](#america-adak) |
| <a name="us-arizona"></a>Arizona | `US/Arizona` | Link | - | -07:00 | Parent: [`America/Phoenix`](#america-phoenix) |
| <a name="us-central"></a>Central | `US/Central` | Link | - | -05:00 | Parent: [`America/Chicago`](#america-chicago) |
| <a name="us-east-indiana"></a>East-Indiana | `US/East-Indiana` | Link | - | -04:00 | Parent: [`America/Indiana/Indianapolis`](#america-indiana-indianapolis) |
| <a name="us-eastern"></a>Eastern | `US/Eastern` | Link | - | -04:00 | Parent: [`America/New_York`](#america-new-york) |
| <a name="us-hawaii"></a>Hawaii | `US/Hawaii` | Link | - | -10:00 | Parent: [`Pacific/Honolulu`](#pacific-honolulu) |
| <a name="us-indiana-starke"></a>Indiana-Starke | `US/Indiana-Starke` | Link | - | -05:00 | Parent: [`America/Indiana/Knox`](#america-indiana-knox) |
| <a name="us-michigan"></a>Michigan | `US/Michigan` | Link | - | -04:00 | Parent: [`America/Detroit`](#america-detroit) |
| <a name="us-mountain"></a>Mountain | `US/Mountain` | Link | - | -06:00 | Parent: [`America/Denver`](#america-denver) |
| <a name="us-pacific"></a>Pacific | `US/Pacific` | Link | - | -07:00 | Parent: [`America/Los_Angeles`](#america-los-angeles) |
| <a name="us-samoa"></a>Samoa | `US/Samoa` | Link | - | -11:00 | Parent: [`Pacific/Pago_Pago`](#pacific-pago-pago) |
