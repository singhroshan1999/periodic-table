var Symbol = "h#he#li#be#b#c#n#o#f#ne#na#mg#al#si#p#s#cl#ar#k#ca#sc#ti#v#cr#mn#fe#co#ni#cu#zn#ga#ge#as#se#br#kr#rb#sr#y#zr#nb#mo#tc#ru#rh#pd#ag#cd#in#sn#sb#te#i#xe#cs#ba#la#ce#pr#nd#pm#sm#eu#gd#tb#dy#ho#er#tm#yb#lu#hf#ta#w#re#os#ir#pt#au#hg#tl#pb#bi#po#at#rn#fr#ra#ac#th#pa#u#np#pu#am#cm#bk#cf#es#fm#md#no#lr#rf#db#sg#bh#hs#mt#ds#rg#uub#uut#uuq#uup#uuh#uus#uuo"
var Brinell_Hardness = "0#0#0#600#0#0#0#0#0#0#0.69#260#245#0#0#0#0#0#0.363#167#750#716#628#1120#196#490#700#700#874#412#60#0#1440#736#0#0#0.216#0#589#650#736#1500#0#2160#1100#37.3#24.5#203#8.83#51#294#180#0#0#0.14#0#363#412#481#265#0#441#0#0#677#500#746#814#471#343#893#1700#800#2570#1320#3920#1670#392#2450#0#26.4#38.3#94.2#0#0#0#0#0#0#400#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#3920"
var YoungsModulus = "0#0#46#11.3#57#0#0#0#0#0#71#24.8#23.1#2.6#0#0#0#0#83.3#22.3#10.2#8.6#8.4#4.9#21.7#11.8#13#13.4#16.5#30.2#0#6#0#37#0#0#0#22.5#10.6#5.7#7.3#4.8#0#6.4#8.2#11.8#18.9#30.8#32.1#22#11#0#0#0#97#20.6#12.1#6.3#6.7#9.6#est.#11#12.7#35#9.4#10.3#9.9#11.2#12.2#13.3#26.3#9.9#5.9#6.3#4.5#6.2#5.1#6.4#8.8#14.2#60.4#29.9#28.9#13.4#23.5#0#0#0#0#0#11#0#13.9#0#46.7#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#528"
var VickersHardness = "0#0#0#1670#49000#0#0#0#0#0#0#0#167#0#0#0#0#0#0#0#0#970#628#1060#0#608#1043#638#369#0#0#0#0#0#0#0#0#0#0#903#1320#1530#0#0#1246#461#251#0#0#0#0#0#0#0#0#0#491#270#400#343#0#412#167#570#863#540#481#589#520#206#1160#1760#873#3430#2450#0#1760#549#216#0#0#0#0#0#0#0#0#0#0#350#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#49000"
var thermalexpansion = "0#0#46#11.3#57#0#0#0#0#0#71#24.8#23.1#2.6#0#0#0#0#83.3#22.3#10.2#8.6#8.4#4.9#21.7#11.8#13#13.4#16.5#30.2#0#6#0#37#0#0#0#22.5#10.6#5.7#7.3#4.8#0#6.4#8.2#11.8#18.9#30.8#32.1#22#11#0#0#0#97#20.6#12.1#6.3#6.7#9.6#est.#11#12.7#35#9.4#10.3#9.9#11.2#12.2#13.3#26.3#9.9#5.9#6.3#4.5#6.2#5.1#6.4#8.8#14.2#60.4#29.9#28.9#13.4#23.5#0#0#0#0#0#11#0#13.9#0#46.7#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#97"
var thermalconductivity = "180.5#151.3#84.8#200#27.4#132#25.83#26.58#27.7#49.1#142#156#237#149#0.236#0.205#8.9#17.72#102.5#201#15.8#21.9#30.7#93.9#7.81#80.4#100#90.9#401#116#40.6#60.2#50.2#0.519#0.122#9.43#58.2#35.4#17.2#22.6#53.7#138#0#117#150#71.8#429#96.6#81.8#66.8#24.4#2.67#0.449#5.65#35.9#18.4#13.4#11.3#12.5#16.5#17.9#13.3#13.9#10.6#11.1#10.7#16.2#14.5#16.9#38.5#16.4#23#57.5#173#48#87.6#147#71.6#318#8.3#46.1#35.3#7.97#20#1.7#3.61#0#18.6#12#54#47#27.5#6.3#6.74#10#0#10#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#429"
var speedofsound = ""
var sheermodulus = "0#0#4.2#132#0#0#0#0#0#0#3.3#17#26#0#0#0#0#0#1.3#7.4#29.1#44#47#115#0#82#75#76#48#43#0#0#0#3.7#0#0#0#6.1#35.6#33#38#20#0#173#150#44#30#19#0#18#20#16#0#0#0#4.9#14.3#13.5#14.8#16.3#18#19.5#7.9#21.8#22.1#24.7#26.3#28.3#30.5#9.9#27.2#30#69#161#178#222#210#61#27#0#2.8#5.6#12#0#0#0#0#0#0#31#0#111#0#43#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#222"
var ppmunivweight = "750000#230000#0.006#0.001#0.001#5000#1000#10000#0.4#1300#20#600#50#700#7#500#1#200#3#70#0.03#3#1#15#8#1100#3#60#0.06#0.3#0.01#0.2#0.008#0.03#0.007#0.04#0.01#0.04#0.007#0.05#0.002#0.005#0#0.004#0.0006#0.002#0.0006#0.002#0.0003#0.004#0.0004#0.009#0.0001#0.01#0.0008#0.01#0.002#0.01#0.002#0.01#0#0.005#0.0005#0.002#0.00005#0.002#0.0005#0.002#0.0001#0.002#0.0001#0.0007#0.000008#0.0005#0.0002#0.003#0.002#0.005#0.0006#0.001#0.0005#0.01#0.0007#0#0#0#0#0#0#0.0004#0#0.0002#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#7500000"
var ppmsunweight = "750000#230000#0.006#0.001#0.001#5000#1000#10000#0.4#1300#20#600#50#700#7#500#1#200#3#70#0.03#3#1#15#8#1100#3#60#0.06#0.3#0.01#0.2#0.008#0.03#0.007#0.04#0.01#0.04#0.007#0.05#0.002#0.005#0#0.004#0.0006#0.002#0.0006#0.002#0.0003#0.004#0.0004#0.009#0.0001#0.01#0.0008#0.01#0.002#0.01#0.002#0.01#0#0.005#0.0005#0.002#0.00005#0.002#0.0005#0.002#0.0001#0.002#0.0001#0.0007#0.000008#0.0005#0.0002#0.003#0.002#0.005#0.0006#0.001#0.0005#0.01#0.0007#0#0#0#0#0#0#0.0004#0#0.0002#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#7500000"
var ppmearth = "1500#0.008#20#2.6#950#480#25#474000#950#0.0003#23000#23000#82000#277100#1000#420#130#1.2#15000#41000#26#6600#190#100#1100#63000#20#90#50#75#18#1.8#1.5#0.05#3#0.000001#60#360#30#130#17#1.5#0#0.001#0.0007#0.0063#0.07#0.11#0.049#2.2#0.2#0.001#1.4#0.0000002#3#500#34#68#8.7#33#0#6#2.1#7.7#1.1#6#1.4#3.8#0.48#3.3#0.51#5.3#2#1.1#0.0004#0.0018#0.00004#0.0037#0.011#0.06#0.6#14#0.048#0#0#0#0#0.00000001#0#12#0.000000001#1.8#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#474000"
var ppbweight = "100000000#0#30#0.4#700#230000000#26000000#610000000#37000#0#1400000#270000#900#260000#11000000#2000000#1200000#0#2000000#14000000#0#0#30#30#200#60000#20#100#1000#33000#0#0#50#50#2900#0#4600#4600#0#50#0#100#0#0#0#0#0#700#0#200#0#0#200#0#20#300#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#100#0#0#1700#0#0#0#0#0#0.0000001#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#610000000"
var ppbatom = "620000000#0#27#0.3#410#120000000#12000000#x#107#240000000#12000#0#380000#70000#210#58000#2200000#390000#210000#0#320000#2200000#0#0#4#4#23#6700#2#11#99#3200#0#0#4#4#230#0#340#330#0#3#0#7#0#0#0#0#0#39#0#11#0#0#10#0#1#14#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#3#0#0#50#0#0#0#0#0#0.000000003#0#0#0#0.03#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#620000000"
var poissionratio = "0#0#0#0.032#0#0#0#0#0#0#0#0.29#0.35#0#0#0#0#0#0#0.31#0.279#0.32#0.37#0.21#0#0.29#0.31#0.31#0.34#0.25#0#0#0#0.33#0#0#0#0.28#0.243#0.34#0.4#0.31#0#0.3#0.26#0.39#0.37#0.3#0#0.36#0#0#0#0#0#0#0.28#0.24#0.281#0.281#0.28#0.274#0.152#0.259#0.261#0.247#0.231#0.237#0.213#0.207#0.261#0.37#0.34#0.28#0.3#0.25#0.26#0.38#0.44#0#0.45#0.44#0.33#0#0#0#0#0#0#0.27#0#0.23#0#0.21#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0.45"
var MassMagneticSusceptibility = "-2.48e-08#-5.90e-09#6.30e-09#-1.26e-08#-8.70e-09#-6.20e-09#-1.00e-08#1.34e-06#0#-4.10e-09#6.40e-09#6.90e-09#7.80e-09#-1.60e-09#-1.13e-08#-6.20e-09#-7.20e-09#-6.00e-09#6.70e-09#1.38e-08#8.80e-08#4.01e-08#6.28e-08#4.45e-08#1.21e-07#0#0#0#-1.08e-09#-2.21e-09#-3.00e-09#-1.50e-09#-3.90e-09#-4.00e-09#-4.90e-09#-4.40e-09#2.60e-09#-2.50e-09#6.66e-08#1.66e-08#2.81e-08#1.17e-08#3.42e-08#5.40e-09#1.32e-08#6.57e-08#-2.30e-09#-2.30e-09#-1.40e-09#-3.10e-09#-1.09e-08#-3.90e-09#-4.50e-09#-4.30e-09#-2.80e-09#1.13e-08#1.10e-08#2.20e-07#4.23e-07#4.80e-07#0#1.11e-07#2.76e-07#0#0.0000136#5.45e-06#5.49e-06#3.77e-06#1.99e-06#5.90e-09#1.20e-09#5.30e-09#1.07e-08#3.90e-09#4.60e-09#6.00e-10#2.30e-09#1.22e-08#-1.80e-09#-2.10e-09#-3.00e-09#-1.50e-09#-1.70e-08#0#0#0#0#0#0#5.30e-09#3.25e-08#2.15e-08#0#3.14e-08#5.15e-08#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#-2.48e-8#1.36e-5"
var MeltingPoint = "14.01#0.95#453.69#1560#2349#3800#63.05#54.8#53.53#24.56#370.87#923#933.47#1687#317.3#388.36#171.6#83.8#336.53#1115#1814#1941#2183#2180#1519#1811#1768#1728#1357.77#692.68#302.91#1211.4#1090#494#265.8#115.79#312.46#1050#1799#2128#2750#2896#2430#2607#2237#1828.05#1234.93#594.22#429.75#505.08#903.78#722.66#386.85#161.4#301.59#1000#1193#1068#1208#1297#1373#1345#1099#1585#1629#1680#1734#1770#1818#1097#1925#2506#3290#3695#3459#3306#2739#2041.4#1337.33#234.32#577#600.61#544.4#527#575#202#300#973#1323#2115#1841#1405.3#910#912.5#1449#1613#1259#1173#1133#1800#1100#1100#1900#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#3800"
var MassNumber = "1.00794#4.002602#6.941#9.012182#10.811#12.0107#14.0067#15.9994#18.9984032#20.1797#22.98977#24.305#26.981538#28.0855#30.973761#32.065#35.453#39.948#39.0983#40.078#44.95591#47.867#50.9415#51.9961#54.938049#55.845#58.9332#58.6934#63.546#65.409#69.723#72.64#74.92160#78.96#79.904#83.798#85.4678#87.62#88.90585#91.224#92.90638#95.94#98#101.07#102.90550#106.42#107.8682#112.411#114.818#118.71#121.760#127.6#126.90447#131.293#132.90545#137.327#138.9055#140.116#140.90765#144.24#145#150.36#151.964#157.25#158.92534#162.500#164.93032#167.259#168.93421#173.04#174.967#178.49#180.9479#183.84#186.207#190.23#192.217#195.078#196.96655#200.59#204.3833#207.2#208.98038#209#210#222#223#226#227#232.0381#231.03588#238.02891#237#244#243#247#247#251#252#257#258#259#262#261#262#266#264#269#268#281#272#285#284#289#288#292#0#0#0#292"
var MolarMagneticSusceptibility = "-2.50e-11#-2.36e-11#4.37e-11#-1.14e-10#-9.41e-11#-7.45e-11#-1.40e-10#2.14e-08#0#-8.27e-11#1.47e-10#1.68e-10#2.10e-10#-4.49e-11#-3.50e-10#-1.99e-10#-2.55e-10#-2.40e-10#2.62e-10#5.53e-10#3.96e-09#1.92e-09#3.20e-09#2.31e-09#6.65e-09#0#0#0#-6.86e-11#-1.45e-10#-2.09e-10#-1.09e-10#-2.92e-10#-3.16e-10#-3.92e-10#-3.69e-10#2.22e-10#-2.19e-10#5.92e-09#1.51e-09#2.61e-09#1.12e-09#3.35e-09#5.46e-10#1.36e-09#6.99e-09#-2.48e-10#-2.59e-10#-1.61e-10#-3.68e-10#-1.33e-09#-4.98e-10#-5.71e-10#-5.65e-10#-3.72e-10#1.55e-09#1.53e-09#3.08e-08#5.96e-08#6.92e-08#0#1.67e-08#4.19e-08#0#2.161385e-6#8.86e-07#9.05e-07#6.31e-07#3.36e-07#1.02e-09#2.10e-10#9.46e-10#1.94e-09#7.17e-10#8.57e-10#1.10e-10#4.42e-10#2.38e-09#-3.55e-10#-4.21e-10#-6.13e-10#-3.11e-10#-3.60e-09#0#0#0#0#0#0#1.23e-09#7.51e-09#5.12e-09#0#7.66e-09#1.25e-08#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#-3.6e-9#2.161385e-6"
var heatcapicity = "28.836#20.786#24.86#16.443#11.087#8.517#29.124#29.378#31.304#20.786#28.23#24.869#24.2#19.789#23.824#22.75#33.949#20.786#29.6#25.929#25.52#25.06#24.89#23.35#26.32#25.1#24.81#26.07#24.44#25.39#25.86#23.222#24.64#25.363#75.69#20.786#31.06#26.4#26.54#25.36#24.6#24.06#24.27#24.06#24.98#25.98#25.35#26.02#26.74#27.112#25.23#25.73#54.44#20.786#32.21#28.07#27.11#26.94#27.2#27.45#0#29.54#27.66#37.03#28.91#27.7#27.15#28.12#27.03#26.74#26.86#25.73#25.36#24.27#25.48#24.7#25.1#25.86#25.418#27.983#26.32#26.65#25.52#26.4#0#20.786#15#0#27.2#26.23#0#27.665#29.46#35.5#62.7#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#75.69"
var enthalpyofatomazitation = "217.6#0#160.7#326.4#573.2#0#472.8#249.4#79.08#0#108.4#148.5#322.2#439.3#314.6#278.7#121.8#0#89.5#184#343#468.6#514.6#121.8#280.3#414.2#26.8#422.6#338.9#129.7#276.1#376.6#301.3#205.9#111.7#0#82#163.2#418#598#745#653#649#603#556.5#393.3#284.5#113#242.7#301.3#263.6#190.4#106.7#0#78.2#175.7#431#381#368#322#310#209#180#352#314#301#301#314#247#180#398#703#782#837#791#669#628#565#364#61.5#179.9#194.6#207.1#134#92#0#71#163#301#565#0#489.5#0#360#268#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#837"
var enthalpyoffusion = "0.12#0.021#4.5#9.8#22.2#105#0.72#0.444#1.02#0.324#2.64#9.04#10.67#39.6#2.51#1.23#6.41#1.21#2.4#9.33#15.9#20.9#17.6#15.3#14.4#14.9#15.2#17.6#13#6.67#5.59#34.7#27.7#5.1#10.8#1.64#2.2#9.16#17.2#23#27.2#27.6#23.81#23.7#21.55#17.2#11.3#6.11#3.27#7.2#20.9#13.5#15.27#3.1#2.09#7.66#10.04#8.87#11.3#7.11#12.6#10.9#10.5#15.5#16.3#17.2#17.2#17.2#18.4#9.2#19.2#25.5#31.4#35.2#33.1#29.3#26.4#19.7#12.7#2.33#4.31#5.12#10.48#10#23.8#2.7#0#7.15#14.2#19.2#16.7#15.5#9.46#2.8#14.4#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#105"
var enthalpyofvaporisation = "0.46#0.082#147.7#308.8#504.5#710.9#5.577#6.82#3.26#1.736#99.2#127.6#290.8#383.3#51.9#9.62#20.403#6.53#79.1#150.6#376.1#425.5#459.7#341.8#220.5#340.2#382.4#374.8#306.7#114.2#270.3#327.6#31.9#90#30.5#9.05#75.7#154.4#367.4#566.7#680.19#589.9#585.22#567#494.3#361.5#257.7#100#231.8#296.2#165.8#104.6#41.67#12.65#66.5#150.9#402.1#398#357#328#0#164.8#176#301#391#293#303#280#247#159#428#570.7#758.2#824.2#704.25#738#612.1#469#343.1#59.1#166.1#177.8#179.1#100.8#0#18.1#0#136.7#293#513.7#481#417.1#336.6#343.5#238.5#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#824"
var BoilingPoint = "20.268#4.22#1615#2742#4200#4300#77.36#90.2#85.03#27.07#1156#1363#2792#3173#550#717.87#239.11#87.3#1032#1757#3103#3560#3680#2943#2234#3134#3200#3186#3200#1180#2477#3093#887#958#332#119.93#961#1655#3609#4682#5017#4912#4538#4423#3968#3236#2435#1040#2345#2875#1860#1261#457.4#165.1#944#2143#3743#3633#3563#3373#3273#2076#1800#3523#3503#2840#2993#3141#2223#1469#3675#4876#5731#5828#5869#5285#4701#4098#3129#629.88#1746#2022#1837#1235#610#211.3#950#2010#3753#5093#4300#4200#4273#3503#2880#3383#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#5869"
var bulkmodulus = "0#0#11#130#185#0#0#0#0#0#6.3#45#76#100#11#7.7#0#0#3.1#17#56.6#110#160#160#120#170#180#180#140#70#0#0#22#8.3#0#0#2.5#0#41.2#0#170#230#0#220#380#180#100#42#0#58#42#65#7.7#0#1.6#9.6#27.9#21.5#28.8#31.8#33#37.8#8.3#37.9#38.7#40.5#40.2#44.4#44.5#30.5#47.6#110#200#310#370#462#320#230#220#0#43#46#31#0#0#0#0#0#0#54#0#100#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#462"
var density = "0.089#0.17#0.534#1.85#2.34#2.267#1.251#1.429#1.7#0.9002#0.968#1.738#2.7#2.33#2.34#2.08#3.2#1.784#0.89#1.55#2.985#4.506#6#7.15#7.21#7.86#8.9#8.908#8.96#7.14#5.91#5.323#5.727#4.81#3.1028#3.749#1.532#2.64#4.472#6.52#8.57#10.28#11#12.45#12.41#12.023#10.49#8.65#7.31#7.2#6.697#6.24#4.933#5.894#1.93#3.51#6.162#6.77#6.77#7.01#7.26#7.52#5.244#7.9#8.23#8.54#8.79#9.066#9.32#6.9#9.841#13.31#16.69#19.25#21.02#22.61#22.65#21.45#19.3#13.534#11.85#11.34#9.78#9.196#0#0#1.87#5.5#10#11.7#15.37#19.1#20.2#19.816#12#13.51#14.78#0#8.84#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#22.65"
var discoveryyear = "1766#1895#1817#1798#1828#0#1772#1774#1886#1898#1807#1808#1825#1823#1669#0#1774#1894#1807#1808#1879#1791#1830#1797#1774#0#1737#1751#0#1764#1875#1886#1250#1817#1826#1898#1861#1790#1794#1789#1801#1778#1937#1844#1803#1803#0#1817#1863#0#0#1782#1804#1898#1860#1808#1839#1803#1885#1925#1945#1879#1901#1880#1843#1886#1878#1843#1879#1878#1907#1923#1802#1783#1925#1804#1804#c1734#0#0#1861#0#0#1898#1940#1898#1939#1898#1899#1828#1917#1789#1940#1940#1945#1944#1949#1950#1952#1953#1955#1957#1961#1969#1970#1974#1976#1984#1982#1994#1994#1996#2004#1999#2004#2000#0#2006#1250#2006"
var electricalcond = "0#0#0.108#0.313#0#0.00061#0#0#0#0#0.21#0.226#0.377#2.52e-12#1.00e-17#5.00e-24#0#0#0.139#0.298#0.0177#0.0234#0.0489#0.0774#0.00695#0.0993#0.172#0.143#0.596#0.166#0.0678#1.45e-08#0.0345#1.00e-12#0#0#0.0779#0.0762#0.0166#0.0236#0.0693#0.187#0.067#0.137#0.211#0.095#0.63#0.138#0.116#0.0917#0.0288#2.00e-06#8.00e-06#0#0.0489#0.3#0.0126#0.0115#0.0148#0.0157#0#0.00956#0.0112#0.00736#0.00889#0.0108#0.0124#0.0117#0.015#0.0351#0.0185#0.0312#0.0761#0.189#0.0542#0.109#0.197#0.0966#0.452#0.0104#0.0617#0.0481#0.00867#0.0219#0#0#0.03#0#0#0.0653#0.0529#0.038#0.0312#0.00666#0.022#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0.63"
var electricialresist = "0#0#9.40e-08#4.00e-08#1.50e+04#0#0#0#0#0#4.70e-08#4.40e-07#2.65e-08#0#0#2.00e+15#10#0#7.00e-08#3.40e-08#5.50e-07#4.00e-07#2.00e-07#1.27e-07#1.60e-06#9.70e-08#6#7.00e-08#1.70e-08#5.90e-08#0#0#3.00e-07#0#7.80e+10#0#1.20e-07#1.30e-07#5.60e-07#4.20e-07#1.50e-07#5.00e-08#0#7.10e-08#4.30e-08#1.00e-07#1.60e-08#7.00e-08#8.00e-08#1.10e-07#4.00e-07#0#1.30e+07#0#2.00e-07#3.50e-07#6.10e-07#7.40e-07#7.00e-07#6.40e-07#7.50e-07#9.40e-07#9.00e-07#1.30e-06#1.20e-06#9.10e-07#9.40e-07#8.60e-07#7.00e-07#2.80e-07#5.60e-07#3.00e-07#1.30e-07#5.00e-08#1.80e-07#8.10e-08#4.70e-08#1.06e-07#2.20e-08#9.60e-07#1.50e-07#2.10e-07#1.30e-06#4.30e-07#0#0#0#1.00e-06#0#1.50e-07#1.80e-07#2.80e-07#1.20e-06#1.50e-06#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#215"
var electronnegtivety = "2.2#0#0.98#1.57#2.04#2.55#3.04#3.44#3.98#0#0.93#1.31#1.61#1.9#2.19#2.58#3.16#0#0.82#1#1.36#1.54#1.63#1.66#1.55#1.83#1.88#1.91#1.9#1.65#1.81#2.01#2.18#2.55#2.96#3#0.82#0.95#1.22#1.33#1.6#2.16#1.9#2.2#2.28#2.2#1.93#1.69#1.78#1.96#2.05#2.1#2.66#2.6#0.79#0.89#1.1#1.12#1.13#1.14#1.13#1.17#1.2#1.2#1.1#1.22#1.23#1.24#1.25#1.1#1.27#1.3#1.5#2.36#1.9#2.2#2.2#2.28#2.54#2#1.62#2.33#2.02#2#2.2#0#0.7#0.9#1.1#1.3#1.5#1.38#1.36#1.28#1.3#1.28#1.3#1.3#1.3#1.3#1.3#1.3#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#3.98"
var atomicvolume = "14.4#0#13.1#5#4.6#4.58#17.3#14#17.1#16.7#23.7#13.97#10#12.1#17.02#15.5#22.7#28.5#45.46#29.9#15#10.64#8.78#7.23#1.39#7.1#6.7#6.59#7.1#9.2#11.8#13.6#13.1#16.45#23.5#38.9#55.9#33.7#19.8#14.1#10.87#9.4#8.5#8.3#8.3#8.9#10.3#13.1#15.7#16.3#18.23#20.5#25.74#37.3#71.07#39.24#20.73#20.67#20.8#20.6#22.39#19.95#28.9#19.9#19.2#19#18.7#18.4#18.1#24.79#17.78#13.6#10.9#9.53#8.85#8.49#8.54#9.09#10.2#14.82#17.2#18.17#21.3#22.23#0#50.5#0#45.2#22.54#19.9#15#12.59#11.62#12.32#17.86#18.28#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#71.07"
var atomicradiiVanderwaals = "120#140#182#0#0#170#155#152#147#154#227#173#0#210#180#180#175#188#275#0#0#0#0#0#0#0#0#163#140#139#187#0#185#190#185#202#244#0#0#0#0#0#0#0#0#163#172#158#193#217#0#206#198#216#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#175#166#155#196#202#0#0#0#0#0#0#0#0#0#186#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#275"
var atomicradiiTriplecovalent = "0#0#0#85#73#60#54#53#53#0#0#127#111#102#94#95#93#96#0#133#114#108#106#103#103#102#96#101#120#0#121#114#106#107#110#108#0#139#124#121#116#113#110#103#106#112#137#0#146#132#120#121#125#122#0#149#139#131#128#0#0#0#0#132#0#0#0#0#0#0#131#122#119#115#110#109#107#110#123#0#150#137#135#129#138#133#0#159#140#136#129#118#116#0#0#0#0#0#0#0#0#0#0#131#126#121#119#0#113#112#118#130#0#0#0#0#0#0#0#159"
var atomicradiiMetalic = "0#0#152#112#0#0#0#0#0#0#186#160#143#0#0#0#0#0#227#197#162#147#134#128#127#126#125#124#128#134#135#0#0#0#0#0#248#215#180#160#146#139#136#134#134#137#144#151#167#0#0#0#0#0#265#222#187#181.8#182.4#181.4#183.4#180.4#208.4#180.4#177.3#178.1#176.2#176.1#175.9#193.3#173.8#159#146#139#137#135#135.5#138.5#144#151#170#0#0#0#0#0#0#0#0#179#263#165#155#159#173#174#170#186#186#0#0#0#0#0#0#0#0#118#0#0#0#0#0#0#0#0#0#0#0#265"
var atomicradiiEmpirical = "25#31#145#105#85#70#65#60#50#51#180#150#125#110#100#100#100#71#220#180#160#140#135#140#140#140#135#135#135#135#130#125#115#115#115#103#235#200#180#155#145#145#135#130#135#140#160#155#155#145#145#140#140#124#260#215#195#185#185#185#185#185#185#180#175#175#175#175#175#175#175#155#145#135#135#130#135#135#135#150#190#180#160#190#0#134#260#215#195#180#180#175#175#175#175#135#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#260"
var atomicradiiCovelentradius = "37#32#134#90#82#77#75#73#71#69#154#130#118#111#106#102#99#97#196#174#144#136#125#127#139#125#126#121#138#131#126#122#119#116#114#110#211#192#162#148#137#145#156#126#135#131#153#148#144#141#138#135#133#130#225#198#169#0#0#0#0#0#185#196#0#0#0#0#0#0#160#150#138#146#159#128#137#128#144#149#148#147#146#0#0#145#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#225"
var atomicradiiBohrradius = "53#31#167#112#87#67#56#48#42#38#190#145#118#111#98#88#79#71#243#194#184#176#171#166#161#156#152#149#145#142#136#125#114#103#94#88#265#219#212#206#198#190#183#178#173#169#165#161#156#145#133#123#115#108#298#253#0#0#247#206#205#238#231#233#225#228#0#226#222#222#217#208#200#193#188#185#180#177#174#171#156#154#143#135#0#120#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#298"
