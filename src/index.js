/*程序用途：
    UT:三山用户信息传输装置；
    适用于三山消防系统用传装置数据解析
*/

let DevUserListObj = [{
    "id": "1",
    "DevCode": "21006000648",
    "UserCode": "011001"
  },
  {
    "id": "2",
    "DevCode": "21006000648",
    "UserCode": "011002"
  },
  {
    "id": "3",
    "DevCode": "21006000648",
    "UserCode": "011003"
  },
  {
    "id": "4",
    "DevCode": "21006000648",
    "UserCode": "011004"
  },
  {
    "id": "5",
    "DevCode": "21006000648",
    "UserCode": "011005"
  },
  {
    "id": "6",
    "DevCode": "21006000715",
    "UserCode": "012006"
  },
  {
    "id": "7",
    "DevCode": "21006000715",
    "UserCode": "012007"
  },
  {
    "id": "8",
    "DevCode": "21006000715",
    "UserCode": "012008"
  },
  {
    "id": "9",
    "DevCode": "21006000715",
    "UserCode": "012009"
  },
  {
    "id": "10",
    "DevCode": "21006000780",
    "UserCode": "013010"
  },
  {
    "id": "11",
    "DevCode": "21006000780",
    "UserCode": "013011"
  },
  {
    "id": "12",
    "DevCode": "21006000780",
    "UserCode": "013012"
  },
  {
    "id": "13",
    "DevCode": "21006000780",
    "UserCode": "013013"
  },
  {
    "id": "14",
    "DevCode": "21006000780",
    "UserCode": "013014"
  },
  {
    "id": "15",
    "DevCode": "21006000780",
    "UserCode": "013015"
  },
  {
    "id": "16",
    "DevCode": "21006000836",
    "UserCode": "014016"
  },
  {
    "id": "17",
    "DevCode": "21006000836",
    "UserCode": "014017"
  },
  {
    "id": "18",
    "DevCode": "21006000836",
    "UserCode": "014018"
  },
  {
    "id": "19",
    "DevCode": "21006000836",
    "UserCode": "014019"
  },
  {
    "id": "20",
    "DevCode": "21006000899",
    "UserCode": "021001"
  },
  {
    "id": "21",
    "DevCode": "21006000899",
    "UserCode": "021002"
  },
  {
    "id": "22",
    "DevCode": "21006000899",
    "UserCode": "021003"
  },
  {
    "id": "23",
    "DevCode": "21006000899",
    "UserCode": "021004"
  },
  {
    "id": "24",
    "DevCode": "21006000899",
    "UserCode": "021005"
  },
  {
    "id": "25",
    "DevCode": "21006000932",
    "UserCode": "022006"
  },
  {
    "id": "26",
    "DevCode": "21006000932",
    "UserCode": "022007"
  },
  {
    "id": "27",
    "DevCode": "21006000932",
    "UserCode": "022008"
  },
  {
    "id": "28",
    "DevCode": "21006000932",
    "UserCode": "022009"
  },
  {
    "id": "29",
    "DevCode": "21006000972",
    "UserCode": "023010"
  },
  {
    "id": "30",
    "DevCode": "21006000972",
    "UserCode": "023011"
  },
  {
    "id": "31",
    "DevCode": "21006000972",
    "UserCode": "023012"
  },
  {
    "id": "32",
    "DevCode": "21006000972",
    "UserCode": "023013"
  },
  {
    "id": "33",
    "DevCode": "21006000972",
    "UserCode": "023014"
  },
  {
    "id": "34",
    "DevCode": "21006000972",
    "UserCode": "023015"
  },
  {
    "id": "35",
    "DevCode": "21006000343",
    "UserCode": "031001"
  },
  {
    "id": "36",
    "DevCode": "21006000343",
    "UserCode": "031002"
  },
  {
    "id": "37",
    "DevCode": "21006000343",
    "UserCode": "031003"
  },
  {
    "id": "38",
    "DevCode": "21006000343",
    "UserCode": "031004"
  },
  {
    "id": "39",
    "DevCode": "21006000343",
    "UserCode": "031005"
  },
  {
    "id": "40",
    "DevCode": "21006000343",
    "UserCode": "031006"
  },
  {
    "id": "41",
    "DevCode": "21006000379",
    "UserCode": "032007"
  },
  {
    "id": "42",
    "DevCode": "21006000379",
    "UserCode": "032008"
  },
  {
    "id": "43",
    "DevCode": "21006000379",
    "UserCode": "032009"
  },
  {
    "id": "44",
    "DevCode": "21006000379",
    "UserCode": "032010"
  },
  {
    "id": "45",
    "DevCode": "21006000379",
    "UserCode": "032011"
  },
  {
    "id": "46",
    "DevCode": "21006000379",
    "UserCode": "032012"
  },
  {
    "id": "47",
    "DevCode": "21006000413",
    "UserCode": "033013"
  },
  {
    "id": "48",
    "DevCode": "21006000413",
    "UserCode": "033014"
  },
  {
    "id": "49",
    "DevCode": "21006000413",
    "UserCode": "033015"
  },
  {
    "id": "50",
    "DevCode": "21006000413",
    "UserCode": "033016"
  },
  {
    "id": "51",
    "DevCode": "21006000413",
    "UserCode": "033017"
  },
  {
    "id": "52",
    "DevCode": "21006000413",
    "UserCode": "033018"
  },
  {
    "id": "53",
    "DevCode": "21006000413",
    "UserCode": "033019"
  },
  {
    "id": "54",
    "DevCode": "21006000447",
    "UserCode": "034020"
  },
  {
    "id": "55",
    "DevCode": "21006000447",
    "UserCode": "034021"
  },
  {
    "id": "56",
    "DevCode": "21006000447",
    "UserCode": "034022"
  },
  {
    "id": "57",
    "DevCode": "21006000447",
    "UserCode": "034023"
  },
  {
    "id": "58",
    "DevCode": "21006000447",
    "UserCode": "034024"
  },
  {
    "id": "59",
    "DevCode": "21006000447",
    "UserCode": "034025"
  },
  {
    "id": "60",
    "DevCode": "21006000447",
    "UserCode": "034026"
  },
  {
    "id": "61",
    "DevCode": "21006000485",
    "UserCode": "041023"
  },
  {
    "id": "62",
    "DevCode": "21006000485",
    "UserCode": "041026"
  },
  {
    "id": "63",
    "DevCode": "21006000485",
    "UserCode": "041027"
  },
  {
    "id": "64",
    "DevCode": "21006000485",
    "UserCode": "041028"
  },
  {
    "id": "65",
    "DevCode": "21006000485",
    "UserCode": "041031"
  },
  {
    "id": "66",
    "DevCode": "21006000013",
    "UserCode": "071149"
  },
  {
    "id": "67",
    "DevCode": "21006000013",
    "UserCode": "071150"
  },
  {
    "id": "68",
    "DevCode": "21006000013",
    "UserCode": "071151"
  },
  {
    "id": "69",
    "DevCode": "21006000013",
    "UserCode": "071152"
  },
  {
    "id": "70",
    "DevCode": "21006000013",
    "UserCode": "071153"
  },
  {
    "id": "71",
    "DevCode": "21006000013",
    "UserCode": "071154"
  },
  {
    "id": "72",
    "DevCode": "21006000042",
    "UserCode": "072143"
  },
  {
    "id": "73",
    "DevCode": "21006000042",
    "UserCode": "072144"
  },
  {
    "id": "74",
    "DevCode": "21006000042",
    "UserCode": "072145"
  },
  {
    "id": "75",
    "DevCode": "21006000042",
    "UserCode": "072146"
  },
  {
    "id": "76",
    "DevCode": "21006000042",
    "UserCode": "072147"
  },
  {
    "id": "77",
    "DevCode": "21006000042",
    "UserCode": "072148"
  },
  {
    "id": "78",
    "DevCode": "21006001160",
    "UserCode": "000177"
  },
  {
    "id": "79",
    "DevCode": "21006001160",
    "UserCode": "000178"
  },
  {
    "id": "80",
    "DevCode": "21006001160",
    "UserCode": "000181"
  },
  {
    "id": "81",
    "DevCode": "21006001160",
    "UserCode": "000182"
  },
  {
    "id": "82",
    "DevCode": "21006001160",
    "UserCode": "000189"
  },
  {
    "id": "83",
    "DevCode": "21006000702",
    "UserCode": "011225"
  },
  {
    "id": "84",
    "DevCode": "21006000702",
    "UserCode": "011226"
  },
  {
    "id": "85",
    "DevCode": "21006000702",
    "UserCode": "011227"
  },
  {
    "id": "86",
    "DevCode": "21006000702",
    "UserCode": "011228"
  },
  {
    "id": "87",
    "DevCode": "21006000702",
    "UserCode": "011229"
  },
  {
    "id": "88",
    "DevCode": "21006000702",
    "UserCode": "011230"
  },
  {
    "id": "89",
    "DevCode": "21006000702",
    "UserCode": "011231"
  },
  {
    "id": "90",
    "DevCode": "21006000702",
    "UserCode": "011232"
  },
  {
    "id": "91",
    "DevCode": "21006000702",
    "UserCode": "011233"
  },
  {
    "id": "92",
    "DevCode": "21006000883",
    "UserCode": "014205"
  },
  {
    "id": "93",
    "DevCode": "21006000883",
    "UserCode": "014206"
  },
  {
    "id": "94",
    "DevCode": "21006000883",
    "UserCode": "014207"
  },
  {
    "id": "95",
    "DevCode": "21006000883",
    "UserCode": "014208"
  },
  {
    "id": "96",
    "DevCode": "21006000883",
    "UserCode": "014241"
  },
  {
    "id": "97",
    "DevCode": "21006000883",
    "UserCode": "014242"
  },
  {
    "id": "98",
    "DevCode": "21006000883",
    "UserCode": "015031"
  },
  {
    "id": "99",
    "DevCode": "21006000883",
    "UserCode": "015032"
  },
  {
    "id": "100",
    "DevCode": "21006000883",
    "UserCode": "015033"
  },
  {
    "id": "101",
    "DevCode": "21006000883",
    "UserCode": "015034"
  },
  {
    "id": "102",
    "DevCode": "21006000883",
    "UserCode": "015035"
  },
  {
    "id": "103",
    "DevCode": "21006000883",
    "UserCode": "015036"
  },
  {
    "id": "104",
    "DevCode": "21006000883",
    "UserCode": "015037"
  },
  {
    "id": "105",
    "DevCode": "21006000883",
    "UserCode": "015038"
  },
  {
    "id": "106",
    "DevCode": "21006000883",
    "UserCode": "015039"
  },
  {
    "id": "107",
    "DevCode": "21006000883",
    "UserCode": "015040"
  },
  {
    "id": "108",
    "DevCode": "21006000883",
    "UserCode": "015041"
  },
  {
    "id": "109",
    "DevCode": "21006000883",
    "UserCode": "015042"
  },
  {
    "id": "110",
    "DevCode": "21006000883",
    "UserCode": "015043"
  },
  {
    "id": "111",
    "DevCode": "21006000883",
    "UserCode": "015044"
  },
  {
    "id": "112",
    "DevCode": "21006000883",
    "UserCode": "015045"
  },
  {
    "id": "113",
    "DevCode": "21006000883",
    "UserCode": "015154"
  },
  {
    "id": "114",
    "DevCode": "21006000883",
    "UserCode": "015155"
  },
  {
    "id": "115",
    "DevCode": "21006000883",
    "UserCode": "015156"
  },
  {
    "id": "116",
    "DevCode": "21006000883",
    "UserCode": "015157"
  },
  {
    "id": "117",
    "DevCode": "21006000883",
    "UserCode": "015158"
  },
  {
    "id": "118",
    "DevCode": "21006000883",
    "UserCode": "015159"
  },
  {
    "id": "119",
    "DevCode": "21006000883",
    "UserCode": "015160"
  },
  {
    "id": "120",
    "DevCode": "21006000883",
    "UserCode": "015162"
  },
  {
    "id": "121",
    "DevCode": "21006000918",
    "UserCode": "021016"
  },
  {
    "id": "122",
    "DevCode": "21006000918",
    "UserCode": "021017"
  },
  {
    "id": "123",
    "DevCode": "21006000918",
    "UserCode": "021018"
  },
  {
    "id": "124",
    "DevCode": "21006000918",
    "UserCode": "021019"
  },
  {
    "id": "125",
    "DevCode": "21006000958",
    "UserCode": "022020"
  },
  {
    "id": "126",
    "DevCode": "21006000958",
    "UserCode": "022021"
  },
  {
    "id": "127",
    "DevCode": "21006000958",
    "UserCode": "022022"
  },
  {
    "id": "128",
    "DevCode": "21006000958",
    "UserCode": "022023"
  },
  {
    "id": "129",
    "DevCode": "21006001000",
    "UserCode": "023024"
  },
  {
    "id": "130",
    "DevCode": "21006001000",
    "UserCode": "023025"
  },
  {
    "id": "131",
    "DevCode": "21006001000",
    "UserCode": "023026"
  },
  {
    "id": "132",
    "DevCode": "21006001000",
    "UserCode": "023027"
  },
  {
    "id": "133",
    "DevCode": "21006000364",
    "UserCode": "031107"
  },
  {
    "id": "134",
    "DevCode": "21006000364",
    "UserCode": "031108"
  },
  {
    "id": "135",
    "DevCode": "21006000364",
    "UserCode": "031109"
  },
  {
    "id": "136",
    "DevCode": "21006000364",
    "UserCode": "031110"
  },
  {
    "id": "137",
    "DevCode": "21006000399",
    "UserCode": "032111"
  },
  {
    "id": "138",
    "DevCode": "21006000399",
    "UserCode": "032112"
  },
  {
    "id": "139",
    "DevCode": "21006000399",
    "UserCode": "032113"
  },
  {
    "id": "140",
    "DevCode": "21006000399",
    "UserCode": "032114"
  },
  {
    "id": "141",
    "DevCode": "21006000399",
    "UserCode": "032211"
  },
  {
    "id": "142",
    "DevCode": "21006000433",
    "UserCode": "033115"
  },
  {
    "id": "143",
    "DevCode": "21006000433",
    "UserCode": "033116"
  },
  {
    "id": "144",
    "DevCode": "21006000433",
    "UserCode": "033117"
  },
  {
    "id": "145",
    "DevCode": "21006000433",
    "UserCode": "033118"
  },
  {
    "id": "146",
    "DevCode": "21006000433",
    "UserCode": "033119"
  },
  {
    "id": "147",
    "DevCode": "21006000433",
    "UserCode": "033120"
  },
  {
    "id": "148",
    "DevCode": "21006000433",
    "UserCode": "033158"
  },
  {
    "id": "149",
    "DevCode": "21006000433",
    "UserCode": "033159"
  },
  {
    "id": "150",
    "DevCode": "21006000433",
    "UserCode": "033160"
  },
  {
    "id": "151",
    "DevCode": "21006000433",
    "UserCode": "033161"
  },
  {
    "id": "152",
    "DevCode": "21006000433",
    "UserCode": "033162"
  },
  {
    "id": "153",
    "DevCode": "21006000433",
    "UserCode": "033163"
  },
  {
    "id": "154",
    "DevCode": "21006000433",
    "UserCode": "033164"
  },
  {
    "id": "155",
    "DevCode": "21006000433",
    "UserCode": "033165"
  },
  {
    "id": "156",
    "DevCode": "21006000433",
    "UserCode": "033166"
  },
  {
    "id": "157",
    "DevCode": "21006000433",
    "UserCode": "033167"
  },
  {
    "id": "158",
    "DevCode": "21006000433",
    "UserCode": "033168"
  },
  {
    "id": "159",
    "DevCode": "21006000433",
    "UserCode": "033169"
  },
  {
    "id": "160",
    "DevCode": "21006000433",
    "UserCode": "033170"
  },
  {
    "id": "161",
    "DevCode": "21006000433",
    "UserCode": "033171"
  },
  {
    "id": "162",
    "DevCode": "21006000433",
    "UserCode": "033172"
  },
  {
    "id": "163",
    "DevCode": "21006000433",
    "UserCode": "033173"
  },
  {
    "id": "164",
    "DevCode": "21006000433",
    "UserCode": "033174"
  },
  {
    "id": "165",
    "DevCode": "21006000433",
    "UserCode": "033175"
  },
  {
    "id": "166",
    "DevCode": "21006000433",
    "UserCode": "033176"
  },
  {
    "id": "167",
    "DevCode": "21006000433",
    "UserCode": "033177"
  },
  {
    "id": "168",
    "DevCode": "21006000433",
    "UserCode": "033182"
  },
  {
    "id": "169",
    "DevCode": "21006000433",
    "UserCode": "033183"
  },
  {
    "id": "170",
    "DevCode": "21006000433",
    "UserCode": "033184"
  },
  {
    "id": "171",
    "DevCode": "21006000433",
    "UserCode": "033185"
  },
  {
    "id": "172",
    "DevCode": "21006000433",
    "UserCode": "033186"
  },
  {
    "id": "173",
    "DevCode": "21006000433",
    "UserCode": "033187"
  },
  {
    "id": "174",
    "DevCode": "21006000433",
    "UserCode": "033188"
  },
  {
    "id": "175",
    "DevCode": "21006000433",
    "UserCode": "033189"
  },
  {
    "id": "176",
    "DevCode": "21006000433",
    "UserCode": "033190"
  },
  {
    "id": "177",
    "DevCode": "21006000433",
    "UserCode": "033191"
  },
  {
    "id": "178",
    "DevCode": "21006000433",
    "UserCode": "033192"
  },
  {
    "id": "179",
    "DevCode": "21006000433",
    "UserCode": "033193"
  },
  {
    "id": "180",
    "DevCode": "21006000433",
    "UserCode": "033194"
  },
  {
    "id": "181",
    "DevCode": "21006000433",
    "UserCode": "033195"
  },
  {
    "id": "182",
    "DevCode": "21006000433",
    "UserCode": "033196"
  },
  {
    "id": "183",
    "DevCode": "21006000433",
    "UserCode": "033197"
  },
  {
    "id": "184",
    "DevCode": "21006000433",
    "UserCode": "033198"
  },
  {
    "id": "185",
    "DevCode": "21006000433",
    "UserCode": "033199"
  },
  {
    "id": "186",
    "DevCode": "21006000433",
    "UserCode": "033200"
  },
  {
    "id": "187",
    "DevCode": "21006000433",
    "UserCode": "033201"
  },
  {
    "id": "188",
    "DevCode": "21006000467",
    "UserCode": "034121"
  },
  {
    "id": "189",
    "DevCode": "21006000467",
    "UserCode": "034122"
  },
  {
    "id": "190",
    "DevCode": "21006000467",
    "UserCode": "034123"
  },
  {
    "id": "191",
    "DevCode": "21006000467",
    "UserCode": "034124"
  },
  {
    "id": "192",
    "DevCode": "21006000467",
    "UserCode": "034125"
  },
  {
    "id": "193",
    "DevCode": "21006000467",
    "UserCode": "034126"
  },
  {
    "id": "194",
    "DevCode": "21006000467",
    "UserCode": "034127"
  },
  {
    "id": "195",
    "DevCode": "21006000467",
    "UserCode": "034128"
  },
  {
    "id": "196",
    "DevCode": "21006000088",
    "UserCode": "061017"
  },
  {
    "id": "197",
    "DevCode": "21006000088",
    "UserCode": "061018"
  },
  {
    "id": "198",
    "DevCode": "21006000088",
    "UserCode": "061019"
  },
  {
    "id": "199",
    "DevCode": "21006000088",
    "UserCode": "061020"
  },
  {
    "id": "200",
    "DevCode": "21006000088",
    "UserCode": "061021"
  },
  {
    "id": "201",
    "DevCode": "21006000088",
    "UserCode": "061022"
  },
  {
    "id": "202",
    "DevCode": "21006000088",
    "UserCode": "062023"
  },
  {
    "id": "203",
    "DevCode": "21006000088",
    "UserCode": "062024"
  },
  {
    "id": "204",
    "DevCode": "21006000088",
    "UserCode": "062025"
  },
  {
    "id": "205",
    "DevCode": "21006000088",
    "UserCode": "062026"
  },
  {
    "id": "206",
    "DevCode": "21006000088",
    "UserCode": "062027"
  },
  {
    "id": "207",
    "DevCode": "21006000088",
    "UserCode": "062028"
  },
  {
    "id": "208",
    "DevCode": "21006000114",
    "UserCode": "063029"
  },
  {
    "id": "209",
    "DevCode": "21006000114",
    "UserCode": "063030"
  },
  {
    "id": "210",
    "DevCode": "21006000114",
    "UserCode": "063031"
  },
  {
    "id": "211",
    "DevCode": "21006000114",
    "UserCode": "063032"
  },
  {
    "id": "212",
    "DevCode": "21006000031",
    "UserCode": "071022"
  },
  {
    "id": "213",
    "DevCode": "21006000031",
    "UserCode": "071023"
  },
  {
    "id": "214",
    "DevCode": "21006000031",
    "UserCode": "071024"
  },
  {
    "id": "215",
    "DevCode": "21006000031",
    "UserCode": "071025"
  },
  {
    "id": "216",
    "DevCode": "21006000031",
    "UserCode": "071026"
  },
  {
    "id": "217",
    "DevCode": "21006000031",
    "UserCode": "071027"
  },
  {
    "id": "218",
    "DevCode": "21006000031",
    "UserCode": "071028"
  },
  {
    "id": "219",
    "DevCode": "21006000031",
    "UserCode": "071029"
  },
  {
    "id": "220",
    "DevCode": "21006000031",
    "UserCode": "071030"
  },
  {
    "id": "221",
    "DevCode": "21006000031",
    "UserCode": "071031"
  },
  {
    "id": "222",
    "DevCode": "21006000031",
    "UserCode": "071032"
  },
  {
    "id": "223",
    "DevCode": "21006000031",
    "UserCode": "071033"
  },
  {
    "id": "224",
    "DevCode": "21006000031",
    "UserCode": "071034"
  },
  {
    "id": "225",
    "DevCode": "21006000031",
    "UserCode": "071035"
  },
  {
    "id": "226",
    "DevCode": "21006000031",
    "UserCode": "071041"
  },
  {
    "id": "227",
    "DevCode": "21006000031",
    "UserCode": "071042"
  },
  {
    "id": "228",
    "DevCode": "21006000031",
    "UserCode": "071043"
  },
  {
    "id": "229",
    "DevCode": "21006000031",
    "UserCode": "071044"
  },
  {
    "id": "230",
    "DevCode": "21006000031",
    "UserCode": "071045"
  },
  {
    "id": "231",
    "DevCode": "21006000031",
    "UserCode": "071037"
  },
  {
    "id": "232",
    "DevCode": "21006000031",
    "UserCode": "071047"
  },
  {
    "id": "233",
    "DevCode": "21006000031",
    "UserCode": "071048"
  },
  {
    "id": "234",
    "DevCode": "21006000031",
    "UserCode": "071049"
  },
  {
    "id": "235",
    "DevCode": "21006000031",
    "UserCode": "071050"
  },
  {
    "id": "236",
    "DevCode": "21006000031",
    "UserCode": "071051"
  },
  {
    "id": "237",
    "DevCode": "21006000057",
    "UserCode": "072036"
  },
  {
    "id": "238",
    "DevCode": "21006000057",
    "UserCode": "072037"
  },
  {
    "id": "239",
    "DevCode": "21006000057",
    "UserCode": "072038"
  },
  {
    "id": "240",
    "DevCode": "21006000057",
    "UserCode": "072039"
  },
  {
    "id": "241",
    "DevCode": "21006000057",
    "UserCode": "072040"
  },
  {
    "id": "242",
    "DevCode": "21006001161",
    "UserCode": "000183"
  },
  {
    "id": "243",
    "DevCode": "21006001161",
    "UserCode": "000184"
  },
  {
    "id": "244",
    "DevCode": "21006001161",
    "UserCode": "000185"
  },
  {
    "id": "245",
    "DevCode": "21006001161",
    "UserCode": "000186"
  },
  {
    "id": "246",
    "DevCode": "21006001448",
    "UserCode": "015240"
  },
  {
    "id": "247",
    "DevCode": "21006001148",
    "UserCode": "001195"
  },
  {
    "id": "248",
    "DevCode": "21006001148",
    "UserCode": "001197"
  },
  {
    "id": "249",
    "DevCode": "21006001148",
    "UserCode": "001199"
  },
  {
    "id": "250",
    "DevCode": "21006001157",
    "UserCode": "011234"
  },
  {
    "id": "251",
    "DevCode": "21006001157",
    "UserCode": "011235"
  },
  {
    "id": "252",
    "DevCode": "21006001157",
    "UserCode": "011236"
  },
  {
    "id": "253",
    "DevCode": "21006001157",
    "UserCode": "011237"
  },
  {
    "id": "254",
    "DevCode": "21006001158",
    "UserCode": "014209"
  },
  {
    "id": "255",
    "DevCode": "21006001158",
    "UserCode": "014210"
  },
  {
    "id": "256",
    "DevCode": "21006001158",
    "UserCode": "014211"
  },
  {
    "id": "257",
    "DevCode": "21006001153",
    "UserCode": "031028"
  },
  {
    "id": "258",
    "DevCode": "21006001153",
    "UserCode": "031030"
  },
  {
    "id": "259",
    "DevCode": "21006001153",
    "UserCode": "031032"
  },
  {
    "id": "260",
    "DevCode": "21006001153",
    "UserCode": "031034"
  },
  {
    "id": "261",
    "DevCode": "21006001153",
    "UserCode": "031036"
  },
  {
    "id": "262",
    "DevCode": "21006001153",
    "UserCode": "031038"
  },
  {
    "id": "263",
    "DevCode": "21006001153",
    "UserCode": "031042"
  },
  {
    "id": "264",
    "DevCode": "21006001153",
    "UserCode": "031044"
  },
  {
    "id": "265",
    "DevCode": "21006001153",
    "UserCode": "031046"
  },
  {
    "id": "266",
    "DevCode": "21006001154",
    "UserCode": "032048"
  },
  {
    "id": "267",
    "DevCode": "21006001154",
    "UserCode": "032050"
  },
  {
    "id": "268",
    "DevCode": "21006001154",
    "UserCode": "032052"
  },
  {
    "id": "269",
    "DevCode": "21006001154",
    "UserCode": "032054"
  },
  {
    "id": "270",
    "DevCode": "21006001154",
    "UserCode": "032056"
  },
  {
    "id": "271",
    "DevCode": "21006001154",
    "UserCode": "032058"
  },
  {
    "id": "272",
    "DevCode": "21006001154",
    "UserCode": "032060"
  },
  {
    "id": "273",
    "DevCode": "21006001154",
    "UserCode": "032062"
  },
  {
    "id": "274",
    "DevCode": "21006001154",
    "UserCode": "032064"
  },
  {
    "id": "275",
    "DevCode": "21006001154",
    "UserCode": "032066"
  },
  {
    "id": "276",
    "DevCode": "21006001155",
    "UserCode": "033068"
  },
  {
    "id": "277",
    "DevCode": "21006001155",
    "UserCode": "033070"
  },
  {
    "id": "278",
    "DevCode": "21006001155",
    "UserCode": "033072"
  },
  {
    "id": "279",
    "DevCode": "21006001155",
    "UserCode": "033074"
  },
  {
    "id": "280",
    "DevCode": "21006001155",
    "UserCode": "033076"
  },
  {
    "id": "281",
    "DevCode": "21006001155",
    "UserCode": "033078"
  },
  {
    "id": "282",
    "DevCode": "21006001155",
    "UserCode": "033080"
  },
  {
    "id": "283",
    "DevCode": "21006001155",
    "UserCode": "033082"
  },
  {
    "id": "284",
    "DevCode": "21006001155",
    "UserCode": "033084"
  },
  {
    "id": "285",
    "DevCode": "21006001155",
    "UserCode": "033086"
  },
  {
    "id": "286",
    "DevCode": "21006001155",
    "UserCode": "033178"
  },
  {
    "id": "287",
    "DevCode": "21006001155",
    "UserCode": "033180"
  },
  {
    "id": "288",
    "DevCode": "21006001155",
    "UserCode": "033202"
  },
  {
    "id": "289",
    "DevCode": "21006001155",
    "UserCode": "033204"
  },
  {
    "id": "290",
    "DevCode": "21006001156",
    "UserCode": "034088"
  },
  {
    "id": "291",
    "DevCode": "21006001156",
    "UserCode": "034090"
  },
  {
    "id": "292",
    "DevCode": "21006001156",
    "UserCode": "034092"
  },
  {
    "id": "293",
    "DevCode": "21006001156",
    "UserCode": "034094"
  },
  {
    "id": "294",
    "DevCode": "21006001156",
    "UserCode": "034096"
  },
  {
    "id": "295",
    "DevCode": "21006001156",
    "UserCode": "034098"
  },
  {
    "id": "296",
    "DevCode": "21006001156",
    "UserCode": "034100"
  },
  {
    "id": "297",
    "DevCode": "21006001156",
    "UserCode": "034102"
  },
  {
    "id": "298",
    "DevCode": "21006001156",
    "UserCode": "034104"
  },
  {
    "id": "299",
    "DevCode": "21006001156",
    "UserCode": "034106"
  },
  {
    "id": "300",
    "DevCode": "21006001149",
    "UserCode": "071001"
  },
  {
    "id": "301",
    "DevCode": "21006001149",
    "UserCode": "071002"
  },
  {
    "id": "302",
    "DevCode": "21006001149",
    "UserCode": "071003"
  },
  {
    "id": "303",
    "DevCode": "21006001149",
    "UserCode": "071004"
  },
  {
    "id": "304",
    "DevCode": "21006001149",
    "UserCode": "071005"
  },
  {
    "id": "305",
    "DevCode": "21006001149",
    "UserCode": "071006"
  },
  {
    "id": "306",
    "DevCode": "21006001149",
    "UserCode": "071007"
  },
  {
    "id": "307",
    "DevCode": "21006001149",
    "UserCode": "071008"
  },
  {
    "id": "308",
    "DevCode": "21006001149",
    "UserCode": "071009"
  },
  {
    "id": "309",
    "DevCode": "21006001149",
    "UserCode": "071010"
  },
  {
    "id": "310",
    "DevCode": "21006001149",
    "UserCode": "071011"
  },
  {
    "id": "311",
    "DevCode": "21006001149",
    "UserCode": "071021"
  },
  {
    "id": "312",
    "DevCode": "21006001150",
    "UserCode": "072012"
  },
  {
    "id": "313",
    "DevCode": "21006001150",
    "UserCode": "072013"
  },
  {
    "id": "314",
    "DevCode": "21006001150",
    "UserCode": "072014"
  },
  {
    "id": "315",
    "DevCode": "21006001150",
    "UserCode": "072015"
  },
  {
    "id": "316",
    "DevCode": "21006001150",
    "UserCode": "072016"
  },
  {
    "id": "317",
    "DevCode": "21006001150",
    "UserCode": "072017"
  },
  {
    "id": "318",
    "DevCode": "21006001150",
    "UserCode": "072018"
  },
  {
    "id": "319",
    "DevCode": "21006001150",
    "UserCode": "072019"
  },
  {
    "id": "320",
    "DevCode": "21006001150",
    "UserCode": "072020"
  },
  {
    "id": "321",
    "DevCode": "21006001151",
    "UserCode": "061001"
  },
  {
    "id": "322",
    "DevCode": "21006001151",
    "UserCode": "061002"
  },
  {
    "id": "323",
    "DevCode": "21006001151",
    "UserCode": "061003"
  },
  {
    "id": "324",
    "DevCode": "21006001151",
    "UserCode": "061004"
  },
  {
    "id": "325",
    "DevCode": "21006001151",
    "UserCode": "061005"
  },
  {
    "id": "326",
    "DevCode": "21006001151",
    "UserCode": "061006"
  },
  {
    "id": "327",
    "DevCode": "21006001151",
    "UserCode": "061007"
  },
  {
    "id": "328",
    "DevCode": "21006001151",
    "UserCode": "061008"
  },
  {
    "id": "329",
    "DevCode": "21006001151",
    "UserCode": "062009"
  },
  {
    "id": "330",
    "DevCode": "21006001152",
    "UserCode": "063010"
  },
  {
    "id": "331",
    "DevCode": "21006001152",
    "UserCode": "063011"
  },
  {
    "id": "332",
    "DevCode": "21006001152",
    "UserCode": "063012"
  },
  {
    "id": "333",
    "DevCode": "21006001152",
    "UserCode": "063013"
  },
  {
    "id": "334",
    "DevCode": "21006001152",
    "UserCode": "063014"
  },
  {
    "id": "335",
    "DevCode": "21006001152",
    "UserCode": "063015"
  },
  {
    "id": "336",
    "DevCode": "21006001152",
    "UserCode": "063016"
  },
  {
    "id": "337",
    "DevCode": "21006000654",
    "UserCode": "011020"
  },
  {
    "id": "338",
    "DevCode": "21006000654",
    "UserCode": "011022"
  },
  {
    "id": "339",
    "DevCode": "21006000654",
    "UserCode": "011024"
  },
  {
    "id": "340",
    "DevCode": "21006000654",
    "UserCode": "011026"
  },
  {
    "id": "341",
    "DevCode": "21006000654",
    "UserCode": "011028"
  },
  {
    "id": "342",
    "DevCode": "21006000654",
    "UserCode": "011030"
  },
  {
    "id": "343",
    "DevCode": "21006000654",
    "UserCode": "011046"
  },
  {
    "id": "344",
    "DevCode": "21006000654",
    "UserCode": "011048"
  },
  {
    "id": "345",
    "DevCode": "21006000654",
    "UserCode": "011050"
  },
  {
    "id": "346",
    "DevCode": "21006000654",
    "UserCode": "011052"
  },
  {
    "id": "347",
    "DevCode": "21006000721",
    "UserCode": "012058"
  },
  {
    "id": "348",
    "DevCode": "21006000721",
    "UserCode": "012060"
  },
  {
    "id": "349",
    "DevCode": "21006000721",
    "UserCode": "012062"
  },
  {
    "id": "350",
    "DevCode": "21006000721",
    "UserCode": "012064"
  },
  {
    "id": "351",
    "DevCode": "21006000721",
    "UserCode": "012066"
  },
  {
    "id": "352",
    "DevCode": "21006000721",
    "UserCode": "012068"
  },
  {
    "id": "353",
    "DevCode": "21006000721",
    "UserCode": "012070"
  },
  {
    "id": "354",
    "DevCode": "21006000721",
    "UserCode": "012072"
  },
  {
    "id": "355",
    "DevCode": "21006000721",
    "UserCode": "012074"
  },
  {
    "id": "356",
    "DevCode": "21006000721",
    "UserCode": "012076"
  },
  {
    "id": "357",
    "DevCode": "21006000786",
    "UserCode": "013078"
  },
  {
    "id": "358",
    "DevCode": "21006000786",
    "UserCode": "013080"
  },
  {
    "id": "359",
    "DevCode": "21006000786",
    "UserCode": "013082"
  },
  {
    "id": "360",
    "DevCode": "21006000786",
    "UserCode": "013084"
  },
  {
    "id": "361",
    "DevCode": "21006000786",
    "UserCode": "013086"
  },
  {
    "id": "362",
    "DevCode": "21006000786",
    "UserCode": "013088"
  },
  {
    "id": "363",
    "DevCode": "21006000786",
    "UserCode": "013090"
  },
  {
    "id": "364",
    "DevCode": "21006000786",
    "UserCode": "013092"
  },
  {
    "id": "365",
    "DevCode": "21006000786",
    "UserCode": "013094"
  },
  {
    "id": "366",
    "DevCode": "21006000786",
    "UserCode": "013096"
  },
  {
    "id": "367",
    "DevCode": "21006000842",
    "UserCode": "014098"
  },
  {
    "id": "368",
    "DevCode": "21006000842",
    "UserCode": "014100"
  },
  {
    "id": "369",
    "DevCode": "21006000842",
    "UserCode": "014102"
  },
  {
    "id": "370",
    "DevCode": "21006000842",
    "UserCode": "014104"
  },
  {
    "id": "371",
    "DevCode": "21006000842",
    "UserCode": "014106"
  },
  {
    "id": "372",
    "DevCode": "21006000842",
    "UserCode": "014108"
  },
  {
    "id": "373",
    "DevCode": "21006000842",
    "UserCode": "014110"
  },
  {
    "id": "374",
    "DevCode": "21006000842",
    "UserCode": "014112"
  },
  {
    "id": "375",
    "DevCode": "21006000842",
    "UserCode": "014114"
  },
  {
    "id": "376",
    "DevCode": "21006000842",
    "UserCode": "014116"
  },
  {
    "id": "377",
    "DevCode": "21006000842",
    "UserCode": "014212"
  },
  {
    "id": "378",
    "DevCode": "21006000842",
    "UserCode": "014213"
  },
  {
    "id": "379",
    "DevCode": "21006000842",
    "UserCode": "014214"
  },
  {
    "id": "380",
    "DevCode": "21006000842",
    "UserCode": "014215"
  },
  {
    "id": "381",
    "DevCode": "21006000842",
    "UserCode": "014216"
  },
  {
    "id": "382",
    "DevCode": "21006000906",
    "UserCode": "021029"
  },
  {
    "id": "383",
    "DevCode": "21006000906",
    "UserCode": "021031"
  },
  {
    "id": "384",
    "DevCode": "21006000906",
    "UserCode": "021033"
  },
  {
    "id": "385",
    "DevCode": "21006000906",
    "UserCode": "021035"
  },
  {
    "id": "386",
    "DevCode": "21006000906",
    "UserCode": "021037"
  },
  {
    "id": "387",
    "DevCode": "21006000906",
    "UserCode": "021039"
  },
  {
    "id": "388",
    "DevCode": "21006000906",
    "UserCode": "021041"
  },
  {
    "id": "389",
    "DevCode": "21006000906",
    "UserCode": "021043"
  },
  {
    "id": "390",
    "DevCode": "21006000906",
    "UserCode": "021045"
  },
  {
    "id": "391",
    "DevCode": "21006000938",
    "UserCode": "022047"
  },
  {
    "id": "392",
    "DevCode": "21006000938",
    "UserCode": "022049"
  },
  {
    "id": "393",
    "DevCode": "21006000938",
    "UserCode": "022051"
  },
  {
    "id": "394",
    "DevCode": "21006000938",
    "UserCode": "022053"
  },
  {
    "id": "395",
    "DevCode": "21006000938",
    "UserCode": "022055"
  },
  {
    "id": "396",
    "DevCode": "21006000938",
    "UserCode": "022057"
  },
  {
    "id": "397",
    "DevCode": "21006000938",
    "UserCode": "022059"
  },
  {
    "id": "398",
    "DevCode": "21006000938",
    "UserCode": "022061"
  },
  {
    "id": "399",
    "DevCode": "21006000938",
    "UserCode": "022063"
  },
  {
    "id": "400",
    "DevCode": "21006000978",
    "UserCode": "023065"
  },
  {
    "id": "401",
    "DevCode": "21006000978",
    "UserCode": "023067"
  },
  {
    "id": "402",
    "DevCode": "21006000978",
    "UserCode": "023069"
  },
  {
    "id": "403",
    "DevCode": "21006000978",
    "UserCode": "023071"
  },
  {
    "id": "404",
    "DevCode": "21006000978",
    "UserCode": "023073"
  },
  {
    "id": "405",
    "DevCode": "21006000978",
    "UserCode": "023075"
  },
  {
    "id": "406",
    "DevCode": "21006000978",
    "UserCode": "023077"
  },
  {
    "id": "407",
    "DevCode": "21006000978",
    "UserCode": "023079"
  },
  {
    "id": "408",
    "DevCode": "21006000978",
    "UserCode": "023081"
  },
  {
    "id": "409",
    "DevCode": "21006000491",
    "UserCode": "041007"
  },
  {
    "id": "410",
    "DevCode": "21006000491",
    "UserCode": "041009"
  },
  {
    "id": "411",
    "DevCode": "21006000491",
    "UserCode": "041011"
  },
  {
    "id": "412",
    "DevCode": "21006000491",
    "UserCode": "041012"
  },
  {
    "id": "413",
    "DevCode": "21006000491",
    "UserCode": "041014"
  },
  {
    "id": "414",
    "DevCode": "21006000491",
    "UserCode": "041017"
  },
  {
    "id": "415",
    "DevCode": "21006000491",
    "UserCode": "041019"
  },
  {
    "id": "416",
    "DevCode": "21006000491",
    "UserCode": "041021"
  },
  {
    "id": "417",
    "DevCode": "21006000491",
    "UserCode": "041024"
  },
  {
    "id": "418",
    "DevCode": "21006000491",
    "UserCode": "041029"
  },
  {
    "id": "419",
    "DevCode": "21006001159",
    "UserCode": "000175"
  },
  {
    "id": "420",
    "DevCode": "21006001159",
    "UserCode": "000180"
  },
  {
    "id": "421",
    "DevCode": "21006001159",
    "UserCode": "000187"
  },
  {
    "id": "422",
    "DevCode": "21006000019",
    "UserCode": "071091"
  },
  {
    "id": "423",
    "DevCode": "21006000019",
    "UserCode": "071092"
  },
  {
    "id": "424",
    "DevCode": "21006000019",
    "UserCode": "071093"
  },
  {
    "id": "425",
    "DevCode": "21006000019",
    "UserCode": "071094"
  },
  {
    "id": "426",
    "DevCode": "21006000019",
    "UserCode": "071095"
  },
  {
    "id": "427",
    "DevCode": "21006000019",
    "UserCode": "071096"
  },
  {
    "id": "428",
    "DevCode": "21006000019",
    "UserCode": "071097"
  },
  {
    "id": "429",
    "DevCode": "21006000019",
    "UserCode": "071098"
  },
  {
    "id": "430",
    "DevCode": "21006000019",
    "UserCode": "071099"
  },
  {
    "id": "431",
    "DevCode": "21006000019",
    "UserCode": "071100"
  },
  {
    "id": "432",
    "DevCode": "21006000019",
    "UserCode": "071101"
  },
  {
    "id": "433",
    "DevCode": "21006000019",
    "UserCode": "071111"
  },
  {
    "id": "434",
    "DevCode": "21006000019",
    "UserCode": "071112"
  },
  {
    "id": "435",
    "DevCode": "21006000019",
    "UserCode": "071113"
  },
  {
    "id": "436",
    "DevCode": "21006000019",
    "UserCode": "071115"
  },
  {
    "id": "437",
    "DevCode": "21006000019",
    "UserCode": "071116"
  },
  {
    "id": "438",
    "DevCode": "21006000048",
    "UserCode": "072102"
  },
  {
    "id": "439",
    "DevCode": "21006000048",
    "UserCode": "072103"
  },
  {
    "id": "440",
    "DevCode": "21006000048",
    "UserCode": "072104"
  },
  {
    "id": "441",
    "DevCode": "21006000048",
    "UserCode": "072105"
  },
  {
    "id": "442",
    "DevCode": "21006000048",
    "UserCode": "072106"
  },
  {
    "id": "443",
    "DevCode": "21006000048",
    "UserCode": "072107"
  },
  {
    "id": "444",
    "DevCode": "21006000048",
    "UserCode": "072108"
  },
  {
    "id": "445",
    "DevCode": "21006000048",
    "UserCode": "072109"
  },
  {
    "id": "446",
    "DevCode": "21006000048",
    "UserCode": "072110"
  },
  {
    "id": "447",
    "DevCode": "21006000076",
    "UserCode": "061068"
  },
  {
    "id": "448",
    "DevCode": "21006000076",
    "UserCode": "061069"
  },
  {
    "id": "449",
    "DevCode": "21006000076",
    "UserCode": "061070"
  },
  {
    "id": "450",
    "DevCode": "21006000076",
    "UserCode": "061071"
  },
  {
    "id": "451",
    "DevCode": "21006000076",
    "UserCode": "061072"
  },
  {
    "id": "452",
    "DevCode": "21006000076",
    "UserCode": "061073"
  },
  {
    "id": "453",
    "DevCode": "21006000076",
    "UserCode": "061074"
  },
  {
    "id": "454",
    "DevCode": "21006000076",
    "UserCode": "061075"
  },
  {
    "id": "455",
    "DevCode": "21006000076",
    "UserCode": "062076"
  },
  {
    "id": "456",
    "DevCode": "21006000076",
    "UserCode": "062077"
  },
  {
    "id": "457",
    "DevCode": "21006000105",
    "UserCode": "063078"
  },
  {
    "id": "458",
    "DevCode": "21006000105",
    "UserCode": "063079"
  },
  {
    "id": "459",
    "DevCode": "21006000105",
    "UserCode": "063080"
  },
  {
    "id": "460",
    "DevCode": "21006000105",
    "UserCode": "063081"
  },
  {
    "id": "461",
    "DevCode": "21006000105",
    "UserCode": "063082"
  },
  {
    "id": "462",
    "DevCode": "21006000105",
    "UserCode": "063083"
  },
  {
    "id": "463",
    "DevCode": "21006000105",
    "UserCode": "063084"
  },
  {
    "id": "464",
    "DevCode": "21006000105",
    "UserCode": "063085"
  },

]

let AreasTypeListObj = [{
    "id": "1",
    "MergeUserCode": "21006000648",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "2",
    "MergeUserCode": "21006000715",
    "Areas": "B7库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "3",
    "MergeUserCode": "21006000780",
    "Areas": "B7库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "4",
    "MergeUserCode": "21006000836",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "5",
    "MergeUserCode": "21006000899",
    "Areas": "B8库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "6",
    "MergeUserCode": "21006000932",
    "Areas": "B8库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "7",
    "MergeUserCode": "21006000972",
    "Areas": "B8库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "8",
    "MergeUserCode": "21006000343",
    "Areas": "B5库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "9",
    "MergeUserCode": "21006000379",
    "Areas": "B5库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "10",
    "MergeUserCode": "21006000413",
    "Areas": "B5库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "11",
    "MergeUserCode": "21006000447",
    "Areas": "B5库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "12",
    "MergeUserCode": "21006000485",
    "Areas": "B6库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "13",
    "MergeUserCode": "21006000013",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "14",
    "MergeUserCode": "21006000042",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "15",
    "MergeUserCode": "21006001160",
    "Areas": "一期消防泵房 ",
    "MergeTypeNum": "0"
  },
  {
    "id": "16",
    "MergeUserCode": "21006000702",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "17",
    "MergeUserCode": "21006000883",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "18",
    "MergeUserCode": "21006000918",
    "Areas": "B8库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "19",
    "MergeUserCode": "21006000958",
    "Areas": "B8库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "20",
    "MergeUserCode": "21006001000",
    "Areas": "B8库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "21",
    "MergeUserCode": "21006000364",
    "Areas": "B5库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "22",
    "MergeUserCode": "21006000399",
    "Areas": "B5库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "23",
    "MergeUserCode": "21006000433",
    "Areas": "B5库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "24",
    "MergeUserCode": "21006000467",
    "Areas": "B5库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "25",
    "MergeUserCode": "21006000088",
    "Areas": "A2库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "26",
    "MergeUserCode": "21006000114",
    "Areas": "A2库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "27",
    "MergeUserCode": "21006000031",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "28",
    "MergeUserCode": "21006000057",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "29",
    "MergeUserCode": "21006001161",
    "Areas": "消防泵房",
    "MergeTypeNum": "0"
  },
  {
    "id": "30",
    "MergeUserCode": "21006001148",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "31",
    "MergeUserCode": "21006001148",
    "Areas": "消防泵房",
    "MergeTypeNum": "0"
  },
  {
    "id": "32",
    "MergeUserCode": "21006001157",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "33",
    "MergeUserCode": "21006001158",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "34",
    "MergeUserCode": "21006001153",
    "Areas": "B5库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "35",
    "MergeUserCode": "21006001154",
    "Areas": "B5库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "36",
    "MergeUserCode": "21006001155",
    "Areas": "B5库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "37",
    "MergeUserCode": "21006001156",
    "Areas": "B5库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "38",
    "MergeUserCode": "21006001149",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "39",
    "MergeUserCode": "21006001150",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "40",
    "MergeUserCode": "21006001151",
    "Areas": "A2库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "41",
    "MergeUserCode": "21006001152",
    "Areas": "A2库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "42",
    "MergeUserCode": "21006000654",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "43",
    "MergeUserCode": "21006000721",
    "Areas": "B7库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "44",
    "MergeUserCode": "21006000786",
    "Areas": "B7库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "45",
    "MergeUserCode": "21006000842",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "46",
    "MergeUserCode": "21006000906",
    "Areas": "B8库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "47",
    "MergeUserCode": "21006000938",
    "Areas": "B8库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "48",
    "MergeUserCode": "21006000978",
    "Areas": "B8库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "49",
    "MergeUserCode": "21006000491",
    "Areas": "B6库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "50",
    "MergeUserCode": "21006001159",
    "Areas": "消防泵房",
    "MergeTypeNum": "0"
  },
  {
    "id": "51",
    "MergeUserCode": "21006000019",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "52",
    "MergeUserCode": "21006000048",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "53",
    "MergeUserCode": "21006000076",
    "Areas": "A2库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "54",
    "MergeUserCode": "21006000105",
    "Areas": "A2库02层01分区",
    "MergeTypeNum": "8"
  }

]

let AreasTypeListRest = [{
    "id": "1",
    "MergeUserCode": "21006000648",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "2",
    "MergeUserCode": "21006000715",
    "Areas": "B7库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "3",
    "MergeUserCode": "21006000780",
    "Areas": "B7库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "4",
    "MergeUserCode": "21006000836",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "5",
    "MergeUserCode": "21006000899",
    "Areas": "B8库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "6",
    "MergeUserCode": "21006000932",
    "Areas": "B8库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "7",
    "MergeUserCode": "21006000972",
    "Areas": "B8库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "8",
    "MergeUserCode": "21006000343",
    "Areas": "B5库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "9",
    "MergeUserCode": "21006000379",
    "Areas": "B5库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "10",
    "MergeUserCode": "21006000413",
    "Areas": "B5库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "11",
    "MergeUserCode": "21006000447",
    "Areas": "B5库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "12",
    "MergeUserCode": "21006000485",
    "Areas": "B6库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "13",
    "MergeUserCode": "21006000013",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "14",
    "MergeUserCode": "21006000042",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "15",
    "MergeUserCode": "21006001160",
    "Areas": "一期消防泵房 ",
    "MergeTypeNum": "0"
  },
  {
    "id": "16",
    "MergeUserCode": "21006000702",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "17",
    "MergeUserCode": "21006000883",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "18",
    "MergeUserCode": "21006000918",
    "Areas": "B8库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "19",
    "MergeUserCode": "21006000958",
    "Areas": "B8库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "20",
    "MergeUserCode": "21006001000",
    "Areas": "B8库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "21",
    "MergeUserCode": "21006000364",
    "Areas": "B5库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "22",
    "MergeUserCode": "21006000399",
    "Areas": "B5库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "23",
    "MergeUserCode": "21006000433",
    "Areas": "B5库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "24",
    "MergeUserCode": "21006000467",
    "Areas": "B5库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "25",
    "MergeUserCode": "21006000088",
    "Areas": "A2库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "26",
    "MergeUserCode": "21006000114",
    "Areas": "A2库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "27",
    "MergeUserCode": "21006000031",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "28",
    "MergeUserCode": "21006000057",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "29",
    "MergeUserCode": "21006001161",
    "Areas": "消防泵房",
    "MergeTypeNum": "0"
  },
  {
    "id": "30",
    "MergeUserCode": "21006001148",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "31",
    "MergeUserCode": "21006001148",
    "Areas": "消防泵房",
    "MergeTypeNum": "0"
  },
  {
    "id": "32",
    "MergeUserCode": "21006001157",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "33",
    "MergeUserCode": "21006001158",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "34",
    "MergeUserCode": "21006001153",
    "Areas": "B5库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "35",
    "MergeUserCode": "21006001154",
    "Areas": "B5库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "36",
    "MergeUserCode": "21006001155",
    "Areas": "B5库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "37",
    "MergeUserCode": "21006001156",
    "Areas": "B5库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "38",
    "MergeUserCode": "21006001149",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "39",
    "MergeUserCode": "21006001150",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "40",
    "MergeUserCode": "21006001151",
    "Areas": "A2库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "41",
    "MergeUserCode": "21006001152",
    "Areas": "A2库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "42",
    "MergeUserCode": "21006000654",
    "Areas": "B7库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "43",
    "MergeUserCode": "21006000721",
    "Areas": "B7库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "44",
    "MergeUserCode": "21006000786",
    "Areas": "B7库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "45",
    "MergeUserCode": "21006000842",
    "Areas": "B7库01层04分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "46",
    "MergeUserCode": "21006000906",
    "Areas": "B8库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "47",
    "MergeUserCode": "21006000938",
    "Areas": "B8库01层02分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "48",
    "MergeUserCode": "21006000978",
    "Areas": "B8库01层03分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "49",
    "MergeUserCode": "21006000491",
    "Areas": "B6库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "50",
    "MergeUserCode": "21006001159",
    "Areas": "消防泵房",
    "MergeTypeNum": "0"
  },
  {
    "id": "51",
    "MergeUserCode": "21006000019",
    "Areas": "A1库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "52",
    "MergeUserCode": "21006000048",
    "Areas": "A1库02层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "53",
    "MergeUserCode": "21006000076",
    "Areas": "A2库01层01分区",
    "MergeTypeNum": "0"
  },
  {
    "id": "54",
    "MergeUserCode": "21006000105",
    "Areas": "A2库02层01分区",
    "MergeTypeNum": "8"
  }

]

/* 引入net log4js path模块 */
const net = require('net');
const log4js = require('log4js');
const path = require('path');
const axiosSetStateData = require("axios");
const axiosRestAlm = require("axios");

// server.js
const jsonServer = require('json-server');
const jserver = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, '../src/db3002.json'));
const middlewares = jsonServer.defaults({
  watch: true,
  //delay: 50,
  static: path.resolve(__dirname, '../src/static/'),
});
jserver.use(middlewares);
jserver.use(router);
jserver.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))
jserver.listen(3002, () => {
  console.log('JSON Server is running at http://127.0.0.1:3002')
})


var onRest = 0;
RestAlm();
const RestTime = 60 * 1000
setInterval(function () { //定时器
  //RestAlm();
}, RestTime);



function RestAlm() {
  let config = {
    method: 'get',
    timeout: 30 * 1000,
    url: 'http://127.0.0.1:3002/Reset/',
    headers: { //指定响应头
      "Content-Type": "application/json;charset=utf-8",
      "Accept": "application/json"
    },
  }
  axiosRestAlm(config).then(function (response) {
      onRest = response.data[0].RestAll
      console.log('检查复位状态.');
      if (onRest) {
        logger.debug("复位全部消防报警点.");
        console.log('复位全部消防报警点.');
        for (let i = 0; i < AreasTypeListRest.length; i++) {
          let DevUrl = 'http://127.0.0.1:3002/Dev/' + (i + 1)
          axiosRestAlm.patch(DevUrl,
            AreasTypeListRest[i], {
              timeout: 60 * 1000,
            }).then(function (response) {
            //logger.debug("复位全部消防报警点Patch数据存储成功.");
            //console.log('复位全部消防报警点Patch数据存储成功.');
          })
        }
      }
    })
    .catch(function (error) {
      logger.debug(JSON.stringify("复位全部消防报警点错误 Error:" + error, null, ' '));
      let RecvTokenErrorLog = JSON.stringify(error, null, ' ')
      console.log('复位全部消防报警点错误 Error:' + RecvTokenErrorLog);
    });


}

var LogOnOff = true;
log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      filename: path.resolve(__dirname, '../logs/log'),
      //日志名称例子
      //pattern: 'yyyy-MM-dd hh-mm.log'
      pattern: "yyyy-MM-dd.log"
    }
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "debug"
    }
  }
});
const logger = log4js.getLogger("everything");
/* 创建TCP服务器 */
let server = net.createServer(function (socket) {
  server.getConnections(function (err, count) {
    logger.debug("设备上线 ON Line!" + socket.remoteAddress + 'port:' + socket.remotePort);
    console.log("设备上线 ON Line!" + socket.remoteAddress + 'port:' + socket.remotePort);
    console.log("设备在线数量是： " + count);
  });
  /* 监听data事件 */
  socket.on("data", function (RecvData) {

    // sum校验
    let SumCRC = CRCCheckOut(RecvData);
    //console.log(num++ + " Recv:" + RecvData.toString());
    if (SumCRC == true) {
      let Message = "接收到SUM校验正确报文:" + RecvData.toString('hex');
      if (LogOnOff == true) {
        logger.debug(Message);
      }
      console.log(Message);
      let C2CodeLoop = Buffer.from([RecvData[28]])
      for (let i = 0; i < C2CodeLoop[0]; i++) {
        let OffsetLoop = i * 46 + 29;
        //console.log(OffsetLoop);
        let s = JSON.stringify(MessageAnalysis(RecvData, OffsetLoop), null, ' ');
        console.log('解析数据:' + s);
        if (LogOnOff == true) {
          logger.debug('解析数据:' + s);
        }
        //这里更新数据库状态
      }
      /* 发送数据 */
      let SendMessage = MessagePKG(RecvData);
      socket.write(SendMessage, function () {
        let Message = "---------发送应答报文:" + SendMessage.toString('hex');
        if (LogOnOff == true) {
          logger.debug(Message);
        }
        console.log(Message);
      });

    } else {
      //let SendMessage = CRCCalculate();
      let Message = "接收到SUM校验错误的报文: " + RecvData.toString('hex');
      if (LogOnOff == true) {
        logger.debug(Message);
      }
      console.log(Message);
    }

  });
  socket.on("close", function () {
    logger.debug("设备下线 OFF Line！ ");
    console.log("Close事件--客户机下线 OFF Line！ ");
  });
  socket.on("error", function (err) {
    console.log("Error事件--错误信息： " + err);
  });
});

/* 设置连接的服务器 */
server.listen(5001, function () {
  logger.debug("程序启动:创建本机TCP Server 监听端口5001!");
  console.log("创建本机TCP Server 监听端口5001!");
});
/* 允许的最大连接数量*/
server.maxConnections = 3;
//计算收到数据的 sum累加和 校验

function CRCCheckOut(RecvData) {
  if (RecvData.length < 17) {
    return false;
  }
  //计算得到的sum用于校验
  let CalSum = 0;
  //接收buf
  let buf = Buffer.from(RecvData);
  //接收报文中的累加和校验值
  let RecvSum = buf[buf.length - 3];
  //console.log('收到字节长度: ' + buf.length);
  for (let i = 2; i < (buf.length - 3); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  if (CalSum.toString(16) == RecvSum.toString(16)) {
    return true
  } else {
    return false;
  }
}

function MessagePKG(RecvData) {
  //接收buf
  let MessageBody = Buffer.from(RecvData);
  let Message = Buffer.alloc(26);
  MessageBody.copy(Message, 0, 0, 26);
  Message[24] = [0x00];
  //console.log('1=' + Message.toString('hex'));
  let MessageControl = Buffer.from([0x03]);
  //console.log('2=' + MessageControl.toString('hex'));
  let SendMessage = Buffer.concat([Message, MessageControl])
  //console.log('3=' + SendMessage.toString('hex'));
  let MessageCRC = SumCRC(SendMessage);

  //console.log('4=' + MessageCRC.toString('hex'));
  let MessageEnd = Buffer.from([0x23, 0x23]);
  //console.log('5=' + MessageEnd.toString('hex'));
  let pubMessage = Buffer.concat([Message, MessageControl, MessageCRC, MessageEnd])
  return pubMessage //SendMessage
}
//计算累加和校验
function SumCRC(SumData) {
  //console.log(RecvData);
  //计算得到的sum用于校验
  let CalSum = 0;
  //接收buf
  let buf = Buffer.from(SumData);
  //console.log('收到用于校验字节长度: ' + buf.length);
  for (let i = 2; i < (buf.length); i++) {
    CalSum = CalSum + buf[i];
  }
  CalSum = CalSum & 255;
  let send = Buffer.from([CalSum])
  return send;

}

function MessageAnalysis(RecvData, LoopNum) {

  //启动符号
  //4040
  let ACode = Buffer.from([RecvData[0], RecvData[1]])
  //控制单元
  //业务流水号 2 字节
  let B1Code = Buffer.from([RecvData[3], RecvData[2]])
  //协议版本号
  let B2Code = Buffer.from([RecvData[4], RecvData[5]])
  //时间标签6字节
  let TDataTime = "20" + RecvData[11].toString(10) + "年" + RecvData[10].toString(10) + "月" + RecvData[9].toString(10) + "日" + RecvData[8].toString(10) + "时" + RecvData[7].toString(10) + "分" + RecvData[6].toString(10) + "秒"
  let B3Code = Buffer.from(TDataTime)
  //原地址6字节
  let B4Code = Buffer.from([RecvData[17], RecvData[16], RecvData[15], RecvData[14], RecvData[13], RecvData[12]])
  //目的地址6字节
  let B5Code = Buffer.from([RecvData[23], RecvData[22], RecvData[21], RecvData[20], RecvData[19], RecvData[18]])
  //应用数据单元长度2字节
  let B6Code = Buffer.from([RecvData[25], RecvData[24]])
  //命令控制字1字节
  let B7Code = Buffer.from([RecvData[26]])
  //应用数据单元<1024字节
  //类型标志1字节
  let C1Code = Buffer.from([RecvData[27]])
  let C1CodeCN = MarkType(C1Code[0])
  //信息对象数目1字节
  let C2Code = Buffer.from([RecvData[28]])

  let C8Code = []
  let C8CodeCN = []
  if (C1Code[0] == [0x15]) {
    //上传用户信息传输装置运行状态
    C8Code = Buffer.from([RecvData[29]])
    C8CodeCN = Buffer.from(SystemTypeClass(C8Code[0]))
  }

  let CDataTime = '';
  let C3Code = [];
  if (C1Code[0] == [0x1c]) {
    //0x1c=28=上传用户信息装置系统时间
    CDataTime = "20" + RecvData[34].toString(10) + "年" + RecvData[33].toString(10) + "月" + RecvData[32].toString(10) + "日" + RecvData[31].toString(10) + "时" + RecvData[30].toString(10) + "分" + RecvData[29].toString(10) + "秒"
    C3Code = Buffer.from(CDataTime)
  }

  let C7CodeCN = [];
  let C9Code = [];
  let C4Code = [];
  let C4CodeCN = '';
  let C5Code = [];
  let C6Code = [];
  let C6CodeCN = '';

  if (C1Code[0] == [0x02]) {
    //0x02=上传建筑消防设施部件运行状态
    C4Code = Buffer.from([RecvData[LoopNum]])
    C4CodeCN = SystemType(C4Code[0])
    C5Code = Buffer.from([RecvData[LoopNum + 1]])
    C6Code = Buffer.from([RecvData[LoopNum + 2]])
    C6CodeCN = PartType(C6Code[0])

    let ParAddH = RecvData[LoopNum + 5].toString(10);
    if (ParAddH.length < 3) {
      ParAddH = '0' + ParAddH;
    }
    if (ParAddH.length <= 2) {
      ParAddH = '0' + ParAddH;
    }

    let ParAddL = RecvData[LoopNum + 3].toString(10);
    if (ParAddL.length < 3) {
      ParAddL = '0' + ParAddL;
    }
    if (ParAddL.length <= 2) {
      ParAddL = '0' + ParAddL;
    }
    let ParAdd = ParAddH + ParAddL

    let UserCode = ParAdd
    let DevUserListObjBack = DevUserListObj.find(getDevCode)
    let DevCode = {}

    function getDevCode(element) {
      return element.UserCode == UserCode
    }

    function getDevUser(element) {
      let str = parseInt(element.MergeTypeNum, 10) + 1;
      element.MergeTypeNum = str.toString();
      return element.MergeUserCode == DevCode
    }

    if (typeof (DevUserListObjBack) != "undefined") {

      DevCode = DevUserListObjBack.DevCode
      let AreasTypeListObjBack = AreasTypeListObj.find(getDevUser)

      var DevID = AreasTypeListObjBack.id
      let DevUrl = 'http://localhost:3002/Dev/' + DevID

      axiosSetStateData.patch(DevUrl,
        AreasTypeListObjBack, {
          timeout: 60 * 1000,
        }).then(function (response) {
        logger.debug("Set AlmState Data Patch数据存储成功:" + JSON.stringify(response.data, null, ' '));
        let RecvGetDataDataLog = JSON.stringify(response.data, null, ' ');
        console.log('Set AlmState Data Patch数据存储成功:=' + RecvGetDataDataLog);
      })
    }


    C7CodeCN = Buffer.from(ParAdd)
    C8Code = Buffer.from([RecvData[LoopNum + 7]])
    C8CodeCN = Buffer.from(DevPartTypeClass(C8Code[0]))
    C9Code = Buffer.alloc(30);
    RecvData.copy(C9Code, 0, LoopNum + 9, LoopNum + 39);
  }
  //校验和1字节
  let ECode = Buffer.from([RecvData[RecvData.length - 3]])
  //结束符2字节
  let FCode = Buffer.from([RecvData[RecvData.length - 2], RecvData[RecvData.length - 1]])
  //信息对象建立
  let RecvMessage = {};
  RecvMessage.启动符 = ACode.toString('utf8');
  RecvMessage.业务流水号 = B1Code.toString('hex');
  RecvMessage.协议版本号 = B2Code.toString('hex');
  RecvMessage.时间标签 = B3Code.toString('utf8');
  RecvMessage.原地址 = B4Code.toString('hex');
  RecvMessage.目的地址 = B5Code.toString('hex');
  RecvMessage.应用数据单元长度 = B6Code.toString('hex');
  RecvMessage.命令控制字 = B7Code.toString('hex');
  RecvMessage.类型标志Hex = C1Code.toString('hex');
  RecvMessage.类型标志 = C1CodeCN;
  RecvMessage.信息对象数目 = C2Code.toString('hex');
  if (C1Code[0] == [0x15]) {
    RecvMessage.信息内容 = C8CodeCN.toString('utf8');
  }
  if (C1Code[0] == [0x1c]) {
    RecvMessage.信息内容 = C3Code.toString('utf8');
  };
  if (C1Code[0] == [0x02]) {
    RecvMessage.系统类型标志 = C4CodeCN.toString('utf8');
    RecvMessage.系统地址 = C5Code.toString('hex');
    RecvMessage.部件类型 = C6CodeCN.toString('utf8');
    RecvMessage.部件地址 = C7CodeCN.toString('utf8');
    RecvMessage.部件状态Hex = C8Code.toString('hex');
    RecvMessage.部件状态 = C8CodeCN.toString('utf8');
    RecvMessage.部件说明 = C9Code.toString('hex');
  };

  RecvMessage.校验和 = ECode.toString('hex');
  RecvMessage.结束符 = FCode.toString('utf8');
  return RecvMessage //
}
//表4 系统类型定义表
function SystemType(num) {
  let Type = ['通用',
    '火灾报警系统',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '消防联动控制器',
    '消火栓系统',
    '自动喷水灭火系统',
    '气体灭火系统',
    '水喷雾灭火系统（ 泵启动方式）',
    '水喷雾灭火系统（ 压力容器启动方式）',
    '泡沫灭火系统',
    '干粉灭火系统',
    '防烟排烟系统',
    '防火门及卷帘系统',
    '消防电梯',
    '消防应急广播',
    '消防应急照明和疏散指示系统',
    '消防电源',
    '消防电话',
  ]
  return (Type[num])
}

// 表5 建筑消防设施部件类型定义表
function PartType(num) {
  let Type = [
    '通用',
    '火灾报警控制器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '可燃气体探测器',
    '点型可燃气体探测器',
    '独立式可燃气体探测器',
    '线型可燃气体探测器',
    '预留',
    '预留',
    '电气火灾监控报警器',
    '剩余电流式电气火灾监控探测器',
    '测温式电气火灾监控探测器',
    '预留',
    '预留',
    '探测回路',
    '火灾显示盘',
    '手动火灾报警按钮',
    '消火栓按钮',
    '火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '感温火灾探测器',
    '点型感温火灾探测器',
    '点型感温火灾探测器（S型）',
    '点型感温火灾探测器（R型）',
    '线型感温火灾探测器',
    '线型感温火灾探测器（S型）',
    '线型感温火灾探测器（R型）',
    '光纤感温火灾探测器',
    '预留',
    '预留',
    '感烟火灾探测器',
    '点型离子感烟火灾探测器',
    '点型光电感烟火灾探测器',
    '线型光束感烟火灾探测器',
    '吸气式感烟火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '复合式火灾探测器',
    '复合式感烟感温火灾探测器',
    '复合式感光感温火灾探测器',
    '复合式感光感烟火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '紫外火焰探测器',
    '红外火焰探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '感光火灾探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '气体探测器',
    '预留',
    '预留',
    '预留',
    '预留',
    '图像摄像方式火灾探测器',
    '感声火灾探测器',
    '预留',
    '气体灭火控制器',
    '消防电气控制装置',
    '消防控制室图形显示装置',
    '模块',
    '输入模块',
    '输出模块',
    '输入/输出模块',
    '中继模块',
    '预留',
    '预留',
    '消防水泵',
    '消防水箱',
    '预留',
    '预留',
    '喷淋泵',
    '水流指示器',
    '信号阀',
    '报警阀',
    '压力开关',
    '预留',
    '阀驱动装置',
    '防火门',
    '防火阀',
    '通风空调',
    '泡沫液泵',
    '管网电磁阀',
    '预留',
    '预留',
    '预留',
    '预留',
    '防烟排烟风机',
    '预留',
    '排烟防火阀',
    '常闭送风口',
    '排烟口',
    '电控档烟垂璧',
    '防火卷帘控制器',
    '防火门控制器',
    '预留',
    '预留',
    '警报装置'
  ]
  return (Type[num])
}

//表3 类型标志定义表
function MarkType(num) {
  let Type = [
    '预留',
    '上传建筑消防设施系统状态',
    '上传建筑消防设施部件运行状态',
    '上传建筑消防设施部件模拟量值',
    '上传建筑消防设施操作信息',
    '上传建筑消防设施软件版本',
    '上传建筑消防设施系统配置情况',
    '上传建筑消防设施部件配置情况',
    '上传建筑消防设施系统时间',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '上传用户信息传输装置运行状态',
    '预留',
    '预留',
    '上传用户信息传输装置操作信息',
    '上传用户信息传输装置软件版本',
    '上传用户信息传输装置配置情况',
    '预留',
    '上传用户信息传输装置系统时间',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '读建筑消防设施系统状态',
    '读建筑消防设施部件运行状态',
    '读建筑消防设施部件模拟量值',
    '读建筑消防设施操作信息',
    '读建筑消防设施软件版本',
    '读建筑消防设施系统配置情况',
    '读建筑消防设施部件配置情况',
    '读建筑消防设施系统时间',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '预留',
    '读用户信息传输装置运行状态',
    '预留',
    '预留',
    '读用户信息传输装置操作信息记录',
    '读用户信息传输装置软件版本',
    '读用户信息传输装置配置情况',
    '预留',
    '读用户信息传输装置系统时间',
    '初始化用户信息传输装置',
    '同步用户信息传输装置时钟',
    '查岗命令',
  ]
  return (Type[num])
}


//图 6 建筑消防设施系统状态数据结构
function DevSystemTypeClass(num) {

  if (num == 01) {
    return '正常运行状态';
  }
  if (num == 02) {
    return '火警';
  }
  if (num == 04) {
    return '故障';
  }
  if (num == 08) {
    return '屏蔽';
  }
  if (num == 16) {
    return '监管';
  }
  if (num == 32) {
    return '启动（开启）';
  }
  if (num == 64) {
    return '反馈';
  }
  if (num == 128) {
    return '延时状态';
  }
  if (num == 256) {
    return '主电故障';
  }
  if (num == 512) {
    return '备电故障';
  }
  if (num == 1024) {
    return '总线故障';
  }
  if (num == 2048) {
    return '手动状态';
  }
  if (num == 4096) {
    return '配置改变';
  }
  if (num == 8192) {
    return '复位';
  }
  return '无';
}

//图7 建筑消防设施施部件状态数据结构
function DevPartTypeClass(num) {

  if (num == 01) {
    return '正常运行状态';
  }
  if (num == 02) {
    return '火警';
  }
  if (num == 04) {
    return '故障';
  }
  if (num == 08) {
    return '屏蔽';
  }
  if (num == 16) {
    return '监管';
  }
  if (num == 32) {
    return '启动（开启）';
  }
  if (num == 64) {
    return '反馈';
  }
  if (num == 128) {
    return '延时状态';
  }
  if (num == 256) {
    return '电源故障';
  }
  return '无';
}

//图 9 建筑消防设施操作信息数据结构
function DevControlClass(num) {

  if (num == 01) {
    return '复位';
  }
  if (num == 02) {
    return '消音';
  }
  if (num == 04) {
    return '手动报警';
  }
  if (num == 08) {
    return '警情消除';
  }
  if (num == 16) {
    return '自检';
  }
  if (num == 32) {
    return '确认';
  }
  if (num == 64) {
    return '测试';
  }
  return '无';
}

//图 13 用户信息传输装置运行状态结构
function SystemTypeClass(num) {

  if (num == 01) {
    return '正常监视状态';
  }
  if (num == 02) {
    return '火警';
  }
  if (num == 04) {
    return '故障';
  }
  if (num == 08) {
    return '主电故障';
  }
  if (num == 16) {
    return '备电故障';
  }
  if (num == 32) {
    return '与监控中心通信故障';
  }
  if (num == 64) {
    return '监测链接线路故障';
  }
  return '无';
}

//图 14 用户信息传输装置操作信息数据结构

function SystemControlClass(num) {

  if (num == 01) {
    return '复位';
  }
  if (num == 02) {
    return '消音';
  }
  if (num == 04) {
    return '手动报警';
  }
  if (num == 08) {
    return '警情消除';
  }
  if (num == 16) {
    return '自检';
  }
  if (num == 32) {
    return '查岗应答';
  }
  if (num == 64) {
    return '测试';
  }
  return '无';
}