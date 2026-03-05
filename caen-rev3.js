/* ==========================================================
   CAEN Rev.2 → Rev.3 Converter — Full JS
   File: caen-rev3.js
   ========================================================== */

/* ===== FAQ TOGGLE ===== */
function toggleFaq(el) {
    var item = el.closest('.cv-faq-item');
    var wasOpen = item.classList.contains('open');
    document.querySelectorAll('.cv-faq-item.open').forEach(function(i) {
        i.classList.remove('open');
        i.querySelector('.cv-faq-a').style.maxHeight = null;
    });
    if (!wasOpen) {
        item.classList.add('open');
        var answer = item.querySelector('.cv-faq-a');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

/* ===== COUNTDOWN ===== */
function updateCountdown() {
    var deadline = new Date('2026-09-25T23:59:59+03:00').getTime();
    var now = Date.now();
    var diff = deadline - now;
    var dEl = document.getElementById('cdDays');
    var hEl = document.getElementById('cdHours');
    var mEl = document.getElementById('cdMins');
    if (!dEl || !hEl || !mEl) return;
    if (diff <= 0) {
        dEl.textContent = '0';
        hEl.textContent = '0';
        mEl.textContent = '0';
        return;
    }
    dEl.textContent = Math.floor(diff / 86400000);
    hEl.textContent = Math.floor((diff % 86400000) / 3600000);
    mEl.textContent = Math.floor((diff % 3600000) / 60000);
}

/* ===== TOAST ===== */
function showToast(msg) {
    var t = document.getElementById('toast');
    var tx = document.getElementById('toastText');
    if (!t || !tx) return;
    tx.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._tid);
    t._tid = setTimeout(function() { t.classList.remove('show'); }, 3000);
}

/* ===== HIGHLIGHT ===== */
function hl(text, q) {
    if (!q || !text) return text || '';
    var esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('(' + esc + ')', 'gi'), '<span class="cv-hl">$1</span>');
}

/* ===== CAEN REV.3 DATA (for descriptions) ===== */
var DATA=[
["A","Agriculture, Forestry and Fishing","01","0111","Cultivation of cereals (excl. rice), leguminous plants and oilseed plants"],
["A","Agriculture, Forestry and Fishing","01","0112","Cultivation of rice"],
["A","Agriculture, Forestry and Fishing","01","0113","Cultivation of vegetables, melons, roots and tubers"],
["A","Agriculture, Forestry and Fishing","01","0114","Cultivation of sugar cane"],
["A","Agriculture, Forestry and Fishing","01","0115","Cultivation of tobacco"],
["A","Agriculture, Forestry and Fishing","01","0116","Cultivation of fibre crops"],
["A","Agriculture, Forestry and Fishing","01","0119","Other non-perennial crop cultivation"],
["A","Agriculture, Forestry and Fishing","01","0121","Cultivation of grapes"],
["A","Agriculture, Forestry and Fishing","01","0122","Cultivation of tropical and subtropical fruits"],
["A","Agriculture, Forestry and Fishing","01","0123","Cultivation of citrus fruits"],
["A","Agriculture, Forestry and Fishing","01","0124","Cultivation of pome and stone fruits"],
["A","Agriculture, Forestry and Fishing","01","0125","Cultivation of other tree and bush fruits, strawberries and nuts"],
["A","Agriculture, Forestry and Fishing","01","0126","Cultivation of oleaginous fruits"],
["A","Agriculture, Forestry and Fishing","01","0127","Cultivation of beverage crops"],
["A","Agriculture, Forestry and Fishing","01","0128","Cultivation of spices, aromatic, medicinal and pharmaceutical plants"],
["A","Agriculture, Forestry and Fishing","01","0129","Cultivation of other permanent crops"],
["A","Agriculture, Forestry and Fishing","01","0130","Plant propagation"],
["A","Agriculture, Forestry and Fishing","01","0141","Raising of dairy cattle"],
["A","Agriculture, Forestry and Fishing","01","0142","Raising of other cattle and buffaloes"],
["A","Agriculture, Forestry and Fishing","01","0143","Raising of horses and other equines"],
["A","Agriculture, Forestry and Fishing","01","0144","Raising of camels and camelids"],
["A","Agriculture, Forestry and Fishing","01","0145","Raising of sheep and goats"],
["A","Agriculture, Forestry and Fishing","01","0146","Raising of swine/pigs"],
["A","Agriculture, Forestry and Fishing","01","0147","Raising of poultry"],
["A","Agriculture, Forestry and Fishing","01","0148","Raising of other animals"],
["A","Agriculture, Forestry and Fishing","01","0150","Mixed farming (crop + animal)"],
["A","Agriculture, Forestry and Fishing","01","0161","Support activities for crop production"],
["A","Agriculture, Forestry and Fishing","01","0162","Support activities for animal production"],
["A","Agriculture, Forestry and Fishing","01","0163","Post-harvest crop activities and seed preparation"],
["A","Agriculture, Forestry and Fishing","01","0170","Hunting, trapping and related service activities"],
["A","Agriculture, Forestry and Fishing","02","0210","Silviculture and other forestry activities"],
["A","Agriculture, Forestry and Fishing","02","0220","Logging"],
["A","Agriculture, Forestry and Fishing","02","0230","Gathering of wild non-wood forestry products"],
["A","Agriculture, Forestry and Fishing","02","0240","Support services to forestry"],
["A","Agriculture, Forestry and Fishing","03","0311","Marine fishing"],
["A","Agriculture, Forestry and Fishing","03","0312","Freshwater fishing"],
["A","Agriculture, Forestry and Fishing","03","0321","Marine aquaculture"],
["A","Agriculture, Forestry and Fishing","03","0322","Freshwater aquaculture"],
["A","Agriculture, Forestry and Fishing","03","0330","Support activities for fishing and aquaculture"],
["B","Mining and Quarrying","05","0510","Mining of hard coal"],
["B","Mining and Quarrying","05","0520","Mining of lignite"],
["B","Mining and Quarrying","06","0610","Extraction of crude petroleum"],
["B","Mining and Quarrying","06","0620","Extraction of natural gas"],
["B","Mining and Quarrying","07","0710","Mining of iron ores"],
["B","Mining and Quarrying","07","0721","Mining of uranium and thorium ores"],
["B","Mining and Quarrying","07","0729","Mining of other non-ferrous metal ores"],
["B","Mining and Quarrying","08","0811","Quarrying of ornamental and building stone, limestone, gypsum, chalk and slate"],
["B","Mining and Quarrying","08","0812","Operation of gravel and sand pits; mining of clays and kaolin"],
["B","Mining and Quarrying","08","0891","Mining of chemical and fertiliser minerals"],
["B","Mining and Quarrying","08","0892","Extraction of peat"],
["B","Mining and Quarrying","08","0893","Extraction of salt"],
["B","Mining and Quarrying","08","0899","Other mining and quarrying n.e.c."],
["B","Mining and Quarrying","09","0910","Support activities for petroleum and natural gas extraction"],
["B","Mining and Quarrying","09","0990","Support activities for other mining and quarrying"],
["C","Manufacturing","10","1011","Processing and preserving of meat"],
["C","Manufacturing","10","1012","Processing and preserving of poultry meat"],
["C","Manufacturing","10","1013","Production of meat products (incl. poultry)"],
["C","Manufacturing","10","1020","Processing and preserving of fish, crustaceans and molluscs"],
["C","Manufacturing","10","1031","Processing and preserving of potatoes"],
["C","Manufacturing","10","1032","Manufacture of fruit and vegetable juice"],
["C","Manufacturing","10","1039","Other processing and preserving of fruit and vegetables"],
["C","Manufacturing","10","1041","Manufacture of oils and fats"],
["C","Manufacturing","10","1042","Manufacture of margarine and similar edible fats"],
["C","Manufacturing","10","1051","Manufacture of dairy products and cheese"],
["C","Manufacturing","10","1052","Manufacture of ice cream"],
["C","Manufacturing","10","1061","Manufacture of grain mill products"],
["C","Manufacturing","10","1062","Manufacture of starches and starch products"],
["C","Manufacturing","10","1071","Manufacture of bread, cakes and fresh pastry goods"],
["C","Manufacturing","10","1072","Manufacture of rusks, biscuits and preserved pastry goods"],
["C","Manufacturing","10","1073","Manufacture of macaroni, noodles and similar farinaceous products"],
["C","Manufacturing","10","1081","Manufacture of sugar"],
["C","Manufacturing","10","1082","Manufacture of cocoa, chocolate and sugar confectionery"],
["C","Manufacturing","10","1083","Processing of tea and coffee"],
["C","Manufacturing","10","1084","Manufacture of condiments and seasonings"],
["C","Manufacturing","10","1085","Manufacture of prepared meals and dishes"],
["C","Manufacturing","10","1086","Manufacture of homogenised food preparations and dietetic food"],
["C","Manufacturing","10","1089","Manufacture of other food products n.e.c."],
["C","Manufacturing","10","1091","Manufacture of prepared feeds for farm animals"],
["C","Manufacturing","10","1092","Manufacture of prepared pet foods"],
["C","Manufacturing","11","1101","Distilling, rectifying and blending of spirits"],
["C","Manufacturing","11","1102","Manufacture of wine from grape"],
["C","Manufacturing","11","1103","Manufacture of cider and other fruit wines"],
["C","Manufacturing","11","1104","Manufacture of other non-distilled fermented beverages"],
["C","Manufacturing","11","1105","Manufacture of beer"],
["C","Manufacturing","11","1106","Manufacture of malt"],
["C","Manufacturing","11","1107","Manufacture of soft drinks; mineral and bottled waters"],
["C","Manufacturing","12","1200","Manufacture of tobacco products"],
["C","Manufacturing","13","1310","Preparation and spinning of textile fibres"],
["C","Manufacturing","13","1320","Weaving of textiles"],
["C","Manufacturing","13","1330","Finishing of textiles"],
["C","Manufacturing","13","1391","Manufacture of knitted and crocheted fabrics"],
["C","Manufacturing","13","1392","Manufacture of made-up textile articles (excl. apparel)"],
["C","Manufacturing","13","1393","Manufacture of carpets and rugs"],
["C","Manufacturing","13","1394","Manufacture of cordage, rope, twine and netting"],
["C","Manufacturing","13","1395","Manufacture of non-wovens and articles made from non-wovens"],
["C","Manufacturing","13","1396","Manufacture of other technical and industrial textiles"],
["C","Manufacturing","13","1399","Manufacture of other textiles n.e.c."],
["C","Manufacturing","14","1410","Manufacture of knitted and crocheted apparel"],
["C","Manufacturing","14","1421","Manufacture of wearing apparel"],
["C","Manufacturing","14","1422","Manufacture of underwear articles"],
["C","Manufacturing","14","1423","Manufacture of workwear"],
["C","Manufacturing","14","1424","Manufacture of leather and fur apparel"],
["C","Manufacturing","14","1429","Manufacture of other wearing apparel and accessories n.e.c."],
["C","Manufacturing","15","1511","Tanning and dressing of leather; dressing and dyeing of fur"],
["C","Manufacturing","15","1512","Manufacture of luggage, handbags and saddlery"],
["C","Manufacturing","15","1520","Manufacture of footwear"],
["C","Manufacturing","16","1611","Sawmilling and planing of wood"],
["C","Manufacturing","16","1612","Processing and finishing of wood"],
["C","Manufacturing","16","1621","Manufacture of veneer sheets and wood-based panels"],
["C","Manufacturing","16","1622","Manufacture of assembled parquet floors"],
["C","Manufacturing","16","1623","Manufacture of other builders' carpentry and joinery"],
["C","Manufacturing","16","1624","Manufacture of wooden containers"],
["C","Manufacturing","16","1625","Manufacture of wooden doors and windows"],
["C","Manufacturing","16","1626","Manufacture of solid biomass fuels"],
["C","Manufacturing","16","1627","Finishing of wood articles"],
["C","Manufacturing","16","1628","Manufacture of other products of wood, cork, straw and plaiting materials"],
["C","Manufacturing","17","1711","Manufacture of pulp"],
["C","Manufacturing","17","1712","Manufacture of paper and paperboard"],
["C","Manufacturing","17","1721","Manufacture of corrugated paper and paperboard and of containers"],
["C","Manufacturing","17","1722","Manufacture of household and sanitary goods of paper or paperboard"],
["C","Manufacturing","17","1723","Manufacture of paper stationery"],
["C","Manufacturing","17","1724","Manufacture of wallpaper"],
["C","Manufacturing","17","1725","Manufacture of other articles of paper and paperboard n.e.c."],
["C","Manufacturing","18","1811","Printing of newspapers"],
["C","Manufacturing","18","1812","Other printing n.e.c."],
["C","Manufacturing","18","1813","Pre-press and pre-media services"],
["C","Manufacturing","18","1814","Binding and related services"],
["C","Manufacturing","18","1820","Reproduction of recorded media"],
["C","Manufacturing","19","1910","Manufacture of coke oven products"],
["C","Manufacturing","19","1920","Manufacture of refined petroleum products"],
["C","Manufacturing","20","2011","Manufacture of industrial gases"],
["C","Manufacturing","20","2012","Manufacture of dyes and pigments"],
["C","Manufacturing","20","2013","Manufacture of other inorganic basic chemicals"],
["C","Manufacturing","20","2014","Manufacture of other organic basic chemicals"],
["C","Manufacturing","20","2015","Manufacture of fertilisers and nitrogen compounds"],
["C","Manufacturing","20","2016","Manufacture of plastics in primary forms"],
["C","Manufacturing","20","2017","Manufacture of synthetic rubber in primary forms"],
["C","Manufacturing","20","2020","Manufacture of pesticides and other agrochemical products"],
["C","Manufacturing","20","2030","Manufacture of paints, varnishes, printing ink and mastics"],
["C","Manufacturing","20","2041","Manufacture of soap, detergents and cleaning preparations"],
["C","Manufacturing","20","2042","Manufacture of perfumes and cosmetics"],
["C","Manufacturing","20","2051","Manufacture of liquid biofuels"],
["C","Manufacturing","20","2059","Manufacture of other chemical products n.e.c."],
["C","Manufacturing","20","2060","Manufacture of man-made fibres"],
["C","Manufacturing","21","2110","Manufacture of basic pharmaceutical products"],
["C","Manufacturing","21","2120","Manufacture of pharmaceutical preparations"],
["C","Manufacturing","22","2211","Manufacture of rubber tyres and tubes; retreading"],
["C","Manufacturing","22","2212","Manufacture of other rubber products"],
["C","Manufacturing","22","2221","Manufacture of plastic plates, sheets, tubes and profiles"],
["C","Manufacturing","22","2222","Manufacture of plastic packing goods"],
["C","Manufacturing","22","2223","Manufacture of plastic doors and windows"],
["C","Manufacturing","22","2224","Manufacture of plastic products for construction"],
["C","Manufacturing","22","2225","Processing and finishing of plastic articles"],
["C","Manufacturing","22","2226","Manufacture of other plastic products"],
["C","Manufacturing","23","2311","Manufacture of flat glass"],
["C","Manufacturing","23","2312","Shaping and processing of flat glass"],
["C","Manufacturing","23","2313","Manufacture of hollow glass"],
["C","Manufacturing","23","2314","Manufacture of glass fibres"],
["C","Manufacturing","23","2315","Manufacture of technical glassware"],
["C","Manufacturing","23","2320","Manufacture of refractory products"],
["C","Manufacturing","23","2331","Manufacture of ceramic tiles and flags"],
["C","Manufacturing","23","2332","Manufacture of bricks, tiles and construction products from clay"],
["C","Manufacturing","23","2341","Manufacture of ceramic household and ornamental articles"],
["C","Manufacturing","23","2342","Manufacture of ceramic sanitary fixtures"],
["C","Manufacturing","23","2343","Manufacture of ceramic insulators and insulating fittings"],
["C","Manufacturing","23","2344","Manufacture of other technical ceramics"],
["C","Manufacturing","23","2345","Manufacture of other ceramic products n.e.c."],
["C","Manufacturing","23","2351","Manufacture of cement"],
["C","Manufacturing","23","2352","Manufacture of lime and plaster"],
["C","Manufacturing","23","2361","Manufacture of concrete products for construction"],
["C","Manufacturing","23","2362","Manufacture of plaster products for construction"],
["C","Manufacturing","23","2363","Manufacture of ready-mixed concrete"],
["C","Manufacturing","23","2364","Manufacture of mortars"],
["C","Manufacturing","23","2365","Manufacture of fibre cement"],
["C","Manufacturing","23","2366","Manufacture of other articles of concrete, cement and plaster"],
["C","Manufacturing","23","2370","Cutting, shaping and finishing of stone"],
["C","Manufacturing","23","2391","Production of abrasive products"],
["C","Manufacturing","23","2399","Manufacture of other non-metallic mineral products n.e.c."],
["C","Manufacturing","24","2410","Manufacture of basic iron and steel and ferro-alloys"],
["C","Manufacturing","24","2420","Manufacture of tubes, pipes, hollow profiles and related fittings of steel"],
["C","Manufacturing","24","2431","Cold drawing of bars"],
["C","Manufacturing","24","2432","Cold rolling of narrow strip"],
["C","Manufacturing","24","2433","Cold forming or folding"],
["C","Manufacturing","24","2434","Cold drawing of wire"],
["C","Manufacturing","24","2441","Precious metals production"],
["C","Manufacturing","24","2442","Aluminium production"],
["C","Manufacturing","24","2443","Lead, zinc and tin production"],
["C","Manufacturing","24","2444","Copper production"],
["C","Manufacturing","24","2445","Other non-ferrous metal production"],
["C","Manufacturing","24","2446","Processing of nuclear fuel"],
["C","Manufacturing","24","2451","Casting of iron"],
["C","Manufacturing","24","2452","Casting of steel"],
["C","Manufacturing","24","2453","Casting of light metals"],
["C","Manufacturing","24","2454","Casting of other non-ferrous metals"],
["C","Manufacturing","25","2511","Manufacture of metal structures and parts of structures"],
["C","Manufacturing","25","2512","Manufacture of metal doors and windows"],
["C","Manufacturing","25","2521","Manufacture of central heating radiators and boilers"],
["C","Manufacturing","25","2522","Manufacture of tanks, reservoirs and containers of metal"],
["C","Manufacturing","25","2530","Manufacture of steam generators and boilers"],
["C","Manufacturing","25","2540","Manufacture of weapons and ammunition"],
["C","Manufacturing","25","2551","Forging, pressing, stamping and roll-forming of metal; powder metallurgy"],
["C","Manufacturing","25","2552","Treatment and coating of metals"],
["C","Manufacturing","25","2553","Machining"],
["C","Manufacturing","25","2561","Manufacture of cutlery"],
["C","Manufacturing","25","2562","Manufacture of locks and hinges"],
["C","Manufacturing","25","2563","Manufacture of tools"],
["C","Manufacturing","25","2591","Manufacture of steel drums and similar containers"],
["C","Manufacturing","25","2592","Manufacture of light metal packaging"],
["C","Manufacturing","25","2593","Manufacture of wire products, chain and springs"],
["C","Manufacturing","25","2594","Manufacture of fasteners and screw machine products"],
["C","Manufacturing","25","2599","Manufacture of other fabricated metal products n.e.c."],
["C","Manufacturing","26","2611","Manufacture of electronic components"],
["C","Manufacturing","26","2612","Manufacture of loaded electronic boards (modules)"],
["C","Manufacturing","26","2620","Manufacture of computers and peripheral equipment"],
["C","Manufacturing","26","2630","Manufacture of communication equipment"],
["C","Manufacturing","26","2640","Manufacture of consumer electronics"],
["C","Manufacturing","26","2651","Manufacture of instruments for measuring, testing and navigation"],
["C","Manufacturing","26","2652","Manufacture of watches and clocks"],
["C","Manufacturing","26","2660","Manufacture of irradiation, electromedical and electrotherapeutic equipment"],
["C","Manufacturing","26","2670","Manufacture of optical instruments and photographic equipment"],
["C","Manufacturing","27","2711","Manufacture of electric motors, generators and transformers"],
["C","Manufacturing","27","2712","Manufacture of electricity distribution and control apparatus"],
["C","Manufacturing","27","2720","Manufacture of batteries and accumulators"],
["C","Manufacturing","27","2731","Manufacture of fibre optic cables"],
["C","Manufacturing","27","2732","Manufacture of other electronic and electric wires and cables"],
["C","Manufacturing","27","2733","Manufacture of wiring devices"],
["C","Manufacturing","27","2740","Manufacture of electric lighting equipment"],
["C","Manufacturing","27","2751","Manufacture of electric domestic appliances"],
["C","Manufacturing","27","2752","Manufacture of non-electric domestic appliances"],
["C","Manufacturing","27","2790","Manufacture of other electrical equipment"],
["C","Manufacturing","28","2811","Manufacture of engines and turbines (excl. aircraft, vehicle, cycle)"],
["C","Manufacturing","28","2812","Manufacture of fluid power equipment (hydraulic motors)"],
["C","Manufacturing","28","2813","Manufacture of other pumps and compressors"],
["C","Manufacturing","28","2814","Manufacture of taps and valves"],
["C","Manufacturing","28","2815","Manufacture of bearings, gears, gearing and driving elements"],
["C","Manufacturing","28","2821","Manufacture of ovens, furnaces and furnace burners"],
["C","Manufacturing","28","2822","Manufacture of lifting and handling equipment"],
["C","Manufacturing","28","2823","Manufacture of office machinery and equipment (excl. computers)"],
["C","Manufacturing","28","2824","Manufacture of power-driven hand tools"],
["C","Manufacturing","28","2825","Manufacture of non-domestic cooling and ventilation equipment"],
["C","Manufacturing","28","2829","Manufacture of other general-purpose machinery n.e.c."],
["C","Manufacturing","28","2830","Manufacture of agricultural and forestry machinery"],
["C","Manufacturing","28","2841","Manufacture of metal forming machinery"],
["C","Manufacturing","28","2842","Manufacture of other machine tools n.e.c."],
["C","Manufacturing","28","2891","Manufacture of machinery for metallurgy"],
["C","Manufacturing","28","2892","Manufacture of machinery for mining and construction"],
["C","Manufacturing","28","2893","Manufacture of machinery for food, beverage and tobacco processing"],
["C","Manufacturing","28","2894","Manufacture of machinery for textile, apparel and leather production"],
["C","Manufacturing","28","2895","Manufacture of machinery for paper and paperboard production"],
["C","Manufacturing","28","2896","Manufacture of plastics and rubber machinery"],
["C","Manufacturing","28","2897","Manufacture of additive manufacturing machinery"],
["C","Manufacturing","28","2899","Manufacture of other special-purpose machinery n.e.c."],
["C","Manufacturing","29","2910","Manufacture of motor vehicles"],
["C","Manufacturing","29","2920","Manufacture of bodies for motor vehicles; trailers and semi-trailers"],
["C","Manufacturing","29","2931","Manufacture of electrical and electronic equipment for motor vehicles"],
["C","Manufacturing","29","2932","Manufacture of other parts and accessories for motor vehicles"],
["C","Manufacturing","30","3011","Building of civilian ships and floating structures"],
["C","Manufacturing","30","3012","Building of pleasure and sporting boats"],
["C","Manufacturing","30","3013","Building of military ships and vessels"],
["C","Manufacturing","30","3020","Manufacture of railway locomotives and rolling stock"],
["C","Manufacturing","30","3031","Manufacture of civilian aircraft and spacecraft"],
["C","Manufacturing","30","3032","Manufacture of military aircraft and spacecraft"],
["C","Manufacturing","30","3040","Manufacture of military fighting vehicles"],
["C","Manufacturing","30","3091","Manufacture of motorcycles"],
["C","Manufacturing","30","3092","Manufacture of bicycles and invalid carriages"],
["C","Manufacturing","30","3099","Manufacture of other transport equipment n.e.c."],
["C","Manufacturing","31","3100","Manufacture of furniture"],
["C","Manufacturing","32","3211","Striking of coins"],
["C","Manufacturing","32","3212","Manufacture of jewellery and related articles"],
["C","Manufacturing","32","3213","Manufacture of imitation jewellery and related articles"],
["C","Manufacturing","32","3220","Manufacture of musical instruments"],
["C","Manufacturing","32","3230","Manufacture of sports goods"],
["C","Manufacturing","32","3240","Manufacture of games and toys"],
["C","Manufacturing","32","3250","Manufacture of medical and dental instruments and supplies"],
["C","Manufacturing","32","3291","Manufacture of brooms and brushes"],
["C","Manufacturing","32","3299","Other manufacturing n.e.c."],
["C","Manufacturing","33","3311","Repair of fabricated metal products"],
["C","Manufacturing","33","3312","Repair of machinery"],
["C","Manufacturing","33","3313","Repair of electronic and optical equipment"],
["C","Manufacturing","33","3314","Repair of electrical equipment"],
["C","Manufacturing","33","3315","Repair and maintenance of ships and boats"],
["C","Manufacturing","33","3316","Repair and maintenance of aircraft and spacecraft"],
["C","Manufacturing","33","3317","Repair and maintenance of other transport equipment"],
["C","Manufacturing","33","3318","Repair and maintenance of military vehicles, ships and aircraft"],
["C","Manufacturing","33","3319","Repair of other equipment"],
["C","Manufacturing","33","3320","Installation of industrial machinery and equipment"],
["D","Electricity, Gas, Steam and AC","35","3511","Production of electricity from non-renewable sources"],
["D","Electricity, Gas, Steam and AC","35","3512","Production of electricity from renewable sources"],
["D","Electricity, Gas, Steam and AC","35","3513","Transmission of electricity"],
["D","Electricity, Gas, Steam and AC","35","3514","Distribution of electricity"],
["D","Electricity, Gas, Steam and AC","35","3515","Trade of electricity"],
["D","Electricity, Gas, Steam and AC","35","3516","Storage of electricity"],
["D","Electricity, Gas, Steam and AC","35","3521","Manufacture of gas"],
["D","Electricity, Gas, Steam and AC","35","3522","Distribution of gaseous fuels through mains"],
["D","Electricity, Gas, Steam and AC","35","3523","Trade of gas through mains"],
["D","Electricity, Gas, Steam and AC","35","3524","Gas storage as part of supply services"],
["D","Electricity, Gas, Steam and AC","35","3530","Steam and air conditioning supply"],
["D","Electricity, Gas, Steam and AC","35","3540","Activities of energy brokers and agents"],
["E","Water Supply, Sewerage, Waste","36","3600","Water collection, treatment and supply"],
["E","Water Supply, Sewerage, Waste","37","3700","Sewerage"],
["E","Water Supply, Sewerage, Waste","38","3811","Collection of non-hazardous waste"],
["E","Water Supply, Sewerage, Waste","38","3812","Collection of hazardous waste"],
["E","Water Supply, Sewerage, Waste","38","3821","Recycling of materials"],
["E","Water Supply, Sewerage, Waste","38","3822","Energy production from waste treatment"],
["E","Water Supply, Sewerage, Waste","38","3823","Other waste treatment activities"],
["E","Water Supply, Sewerage, Waste","38","3831","Waste incineration without energy production"],
["E","Water Supply, Sewerage, Waste","38","3832","Landfill and permanent waste deposit activities"],
["E","Water Supply, Sewerage, Waste","38","3833","Other waste disposal activities"],
["E","Water Supply, Sewerage, Waste","39","3900","Remediation activities and other waste management services"],
["F","Construction","41","4100","Construction of residential and non-residential buildings"],
["F","Construction","42","4211","Construction of roads and motorways"],
["F","Construction","42","4212","Construction of railways and underground railways"],
["F","Construction","42","4213","Construction of bridges and tunnels"],
["F","Construction","42","4221","Construction of utility projects for fluids"],
["F","Construction","42","4222","Construction of utility projects for electricity and telecommunications"],
["F","Construction","42","4291","Construction of water projects"],
["F","Construction","42","4299","Construction of other civil engineering projects n.e.c."],
["F","Construction","43","4311","Demolition"],
["F","Construction","43","4312","Site preparation"],
["F","Construction","43","4313","Test drilling and boring"],
["F","Construction","43","4321","Electrical installation"],
["F","Construction","43","4322","Plumbing, heat and air-conditioning installation"],
["F","Construction","43","4323","Insulation work"],
["F","Construction","43","4324","Other construction installation"],
["F","Construction","43","4331","Plastering"],
["F","Construction","43","4332","Joinery installation"],
["F","Construction","43","4333","Floor and wall covering"],
["F","Construction","43","4334","Painting and glazing"],
["F","Construction","43","4335","Other building completion and finishing"],
["F","Construction","43","4341","Roofing activities"],
["F","Construction","43","4342","Other specialised construction for buildings"],
["F","Construction","43","4350","Specialised construction for civil engineering projects"],
["F","Construction","43","4360","Intermediary services for specialised construction"],
["F","Construction","43","4391","Bricklaying activities"],
["F","Construction","43","4399","Other specialised construction activities n.e.c."],
["G","Wholesale and Retail Trade","46","4611","Agents in sale of agricultural raw materials, livestock, textiles"],
["G","Wholesale and Retail Trade","46","4612","Agents in sale of fuels, ores, metals and industrial chemicals"],
["G","Wholesale and Retail Trade","46","4613","Agents in sale of timber and building materials"],
["G","Wholesale and Retail Trade","46","4614","Agents in sale of machinery, industrial equipment, ships and aircraft"],
["G","Wholesale and Retail Trade","46","4615","Agents in sale of furniture, household goods and hardware"],
["G","Wholesale and Retail Trade","46","4616","Agents in sale of textiles, clothing, footwear and leather"],
["G","Wholesale and Retail Trade","46","4617","Agents in sale of food, beverages and tobacco"],
["G","Wholesale and Retail Trade","46","4618","Agents specialised in sale of other particular products n.e.c."],
["G","Wholesale and Retail Trade","46","4619","Agents in sale of a variety of goods"],
["G","Wholesale and Retail Trade","46","4621","Wholesale of grain, unmanufactured tobacco, seeds and animal feeds"],
["G","Wholesale and Retail Trade","46","4622","Wholesale of flowers and plants"],
["G","Wholesale and Retail Trade","46","4623","Wholesale of live animals"],
["G","Wholesale and Retail Trade","46","4624","Wholesale of hides, skins and leather"],
["G","Wholesale and Retail Trade","46","4631","Wholesale of fruit and vegetables"],
["G","Wholesale and Retail Trade","46","4632","Wholesale of meat, meat products, fish and seafood"],
["G","Wholesale and Retail Trade","46","4633","Wholesale of dairy products, eggs, edible oils and fats"],
["G","Wholesale and Retail Trade","46","4634","Wholesale of beverages"],
["G","Wholesale and Retail Trade","46","4635","Wholesale of tobacco products"],
["G","Wholesale and Retail Trade","46","4636","Wholesale of sugar, chocolate and sugar confectionery"],
["G","Wholesale and Retail Trade","46","4637","Wholesale of coffee, tea, cocoa and spices"],
["G","Wholesale and Retail Trade","46","4638","Wholesale of other food, including fish, crustaceans and molluscs"],
["G","Wholesale and Retail Trade","46","4639","Non-specialised wholesale of food, beverages and tobacco"],
["G","Wholesale and Retail Trade","46","4641","Wholesale of textiles"],
["G","Wholesale and Retail Trade","46","4642","Wholesale of clothing and footwear"],
["G","Wholesale and Retail Trade","46","4643","Wholesale of electrical household appliances"],
["G","Wholesale and Retail Trade","46","4644","Wholesale of china and glassware and cleaning materials"],
["G","Wholesale and Retail Trade","46","4645","Wholesale of perfume and cosmetics"],
["G","Wholesale and Retail Trade","46","4646","Wholesale of pharmaceutical and medical goods"],
["G","Wholesale and Retail Trade","46","4647","Wholesale of furniture, carpets and lighting equipment"],
["G","Wholesale and Retail Trade","46","4648","Wholesale of watches and jewellery"],
["G","Wholesale and Retail Trade","46","4649","Wholesale of other household goods"],
["G","Wholesale and Retail Trade","46","4650","Wholesale of ICT equipment"],
["G","Wholesale and Retail Trade","46","4661","Wholesale of agricultural machinery, equipment and supplies"],
["G","Wholesale and Retail Trade","46","4662","Wholesale of machine tools"],
["G","Wholesale and Retail Trade","46","4663","Wholesale of mining and construction machinery"],
["G","Wholesale and Retail Trade","46","4664","Wholesale of other machinery and equipment"],
["G","Wholesale and Retail Trade","46","4671","Wholesale of motor vehicles"],
["G","Wholesale and Retail Trade","46","4672","Wholesale of motor vehicle parts and accessories"],
["G","Wholesale and Retail Trade","46","4673","Wholesale of motorcycles, parts and accessories"],
["G","Wholesale and Retail Trade","46","4681","Wholesale of solid, liquid and gaseous fuels and related products"],
["G","Wholesale and Retail Trade","46","4682","Wholesale of metals and metal ores"],
["G","Wholesale and Retail Trade","46","4683","Wholesale of construction materials and sanitary equipment"],
["G","Wholesale and Retail Trade","46","4684","Wholesale of hardware, plumbing and heating equipment"],
["G","Wholesale and Retail Trade","46","4685","Wholesale of chemical products"],
["G","Wholesale and Retail Trade","46","4686","Wholesale of other intermediate products"],
["G","Wholesale and Retail Trade","46","4687","Wholesale of waste and scrap"],
["G","Wholesale and Retail Trade","46","4689","Wholesale of other specialised products n.e.c."],
["G","Wholesale and Retail Trade","46","4690","Non-specialised wholesale trade"],
["G","Wholesale and Retail Trade","47","4711","Retail sale in non-specialised stores with food predominating"],
["G","Wholesale and Retail Trade","47","4712","Retail sale in non-specialised stores with non-food predominating"],
["G","Wholesale and Retail Trade","47","4721","Retail sale of fruit and vegetables"],
["G","Wholesale and Retail Trade","47","4722","Retail sale of meat and meat products"],
["G","Wholesale and Retail Trade","47","4723","Retail sale of fish, crustaceans and molluscs"],
["G","Wholesale and Retail Trade","47","4724","Retail sale of bread, cakes, flour and sugar confectionery"],
["G","Wholesale and Retail Trade","47","4725","Retail sale of beverages"],
["G","Wholesale and Retail Trade","47","4726","Retail sale of tobacco products"],
["G","Wholesale and Retail Trade","47","4727","Retail sale of other food products"],
["G","Wholesale and Retail Trade","47","4730","Retail sale of automotive fuel"],
["G","Wholesale and Retail Trade","47","4740","Retail sale of ICT equipment"],
["G","Wholesale and Retail Trade","47","4751","Retail sale of textiles"],
["G","Wholesale and Retail Trade","47","4752","Retail sale of hardware, paints and glass"],
["G","Wholesale and Retail Trade","47","4753","Retail sale of carpets, rugs, wall and floor coverings"],
["G","Wholesale and Retail Trade","47","4754","Retail sale of electrical household appliances"],
["G","Wholesale and Retail Trade","47","4755","Retail sale of furniture, lighting and other household articles"],
["G","Wholesale and Retail Trade","47","4761","Retail sale of books"],
["G","Wholesale and Retail Trade","47","4762","Retail sale of newspapers and stationery"],
["G","Wholesale and Retail Trade","47","4763","Retail sale of sports equipment"],
["G","Wholesale and Retail Trade","47","4764","Retail sale of games and toys"],
["G","Wholesale and Retail Trade","47","4769","Retail sale of cultural and recreation goods n.e.c."],
["G","Wholesale and Retail Trade","47","4771","Retail sale of clothing"],
["G","Wholesale and Retail Trade","47","4772","Retail sale of footwear and leather goods"],
["G","Wholesale and Retail Trade","47","4773","Retail sale of pharmaceutical goods"],
["G","Wholesale and Retail Trade","47","4774","Retail sale of medical and orthopaedic goods"],
["G","Wholesale and Retail Trade","47","4775","Retail sale of cosmetic and toilet articles"],
["G","Wholesale and Retail Trade","47","4776","Retail sale of flowers, plants, seeds, pet animals and pet food"],
["G","Wholesale and Retail Trade","47","4777","Retail sale of watches and jewellery"],
["G","Wholesale and Retail Trade","47","4778","Other retail sale of new goods in specialised stores"],
["G","Wholesale and Retail Trade","47","4779","Retail sale of second-hand goods"],
["G","Wholesale and Retail Trade","47","4781","Retail sale of motor vehicles"],
["G","Wholesale and Retail Trade","47","4782","Retail sale of motor vehicle parts and accessories"],
["G","Wholesale and Retail Trade","47","4783","Retail sale of motorcycles, parts and accessories"],
["G","Wholesale and Retail Trade","47","4791","Intermediaries in non-specialised retail trade"],
["G","Wholesale and Retail Trade","47","4792","Intermediaries in specialised retail trade"],
["H","Transportation and Storage","49","4911","Passenger rail transport, mainline"],
["H","Transportation and Storage","49","4912","Other passenger rail transport"],
["H","Transportation and Storage","49","4920","Freight rail transport"],
["H","Transportation and Storage","49","4931","Urban and suburban passenger land transport"],
["H","Transportation and Storage","49","4932","Occasional passenger land transport"],
["H","Transportation and Storage","49","4933","Passenger land transport with driver, on demand"],
["H","Transportation and Storage","49","4934","Passenger transport by funiculars and ski-lifts"],
["H","Transportation and Storage","49","4939","Other passenger land transport n.e.c."],
["H","Transportation and Storage","49","4941","Freight transport by road"],
["H","Transportation and Storage","49","4942","Removal services"],
["H","Transportation and Storage","49","4950","Transport via pipeline"],
["H","Transportation and Storage","50","5010","Sea and coastal passenger water transport"],
["H","Transportation and Storage","50","5020","Sea and coastal freight water transport"],
["H","Transportation and Storage","50","5030","Inland passenger water transport"],
["H","Transportation and Storage","50","5040","Inland freight water transport"],
["H","Transportation and Storage","51","5110","Passenger air transport"],
["H","Transportation and Storage","51","5121","Freight air transport"],
["H","Transportation and Storage","51","5122","Space transport"],
["H","Transportation and Storage","52","5210","Warehousing and storage"],
["H","Transportation and Storage","52","5221","Service activities incidental to land transportation"],
["H","Transportation and Storage","52","5222","Service activities incidental to water transportation"],
["H","Transportation and Storage","52","5223","Service activities incidental to air transportation"],
["H","Transportation and Storage","52","5224","Cargo handling"],
["H","Transportation and Storage","52","5225","Logistics services for transportation"],
["H","Transportation and Storage","52","5226","Other transportation support activities"],
["H","Transportation and Storage","52","5231","Freight transport agency activities"],
["H","Transportation and Storage","52","5232","Passenger transport agency activities"],
["H","Transportation and Storage","53","5310","Postal activities under universal service obligation"],
["H","Transportation and Storage","53","5320","Other postal and courier activities"],
["H","Transportation and Storage","53","5330","Intermediary services for postal and courier activities"],
["I","Accommodation and Food Service","55","5510","Hotels and similar accommodation"],
["I","Accommodation and Food Service","55","5520","Holiday and short-stay accommodation"],
["I","Accommodation and Food Service","55","5530","Camping grounds, recreational vehicle parks and trailer parks"],
["I","Accommodation and Food Service","55","5540","Intermediary services for accommodation"],
["I","Accommodation and Food Service","55","5590","Other accommodation"],
["I","Accommodation and Food Service","56","5611","Restaurants"],
["I","Accommodation and Food Service","56","5612","Mobile food service activities"],
["I","Accommodation and Food Service","56","5621","Event catering activities"],
["I","Accommodation and Food Service","56","5622","Other food service activities n.e.c."],
["I","Accommodation and Food Service","56","5630","Beverage serving activities"],
["I","Accommodation and Food Service","56","5640","Intermediary services for food and beverage serving"],
["J","Publishing, Broadcasting, Content","58","5811","Book publishing"],
["J","Publishing, Broadcasting, Content","58","5812","Publishing of newspapers"],
["J","Publishing, Broadcasting, Content","58","5813","Publishing of journals and periodicals"],
["J","Publishing, Broadcasting, Content","58","5819","Other publishing activities"],
["J","Publishing, Broadcasting, Content","58","5821","Publishing of computer games"],
["J","Publishing, Broadcasting, Content","58","5829","Other software publishing"],
["J","Publishing, Broadcasting, Content","59","5911","Motion picture, video and TV programme production"],
["J","Publishing, Broadcasting, Content","59","5912","Motion picture, video and TV programme post-production"],
["J","Publishing, Broadcasting, Content","59","5913","Motion picture, video and TV programme distribution"],
["J","Publishing, Broadcasting, Content","59","5914","Motion picture projection activities"],
["J","Publishing, Broadcasting, Content","59","5920","Sound recording and music publishing activities"],
["J","Publishing, Broadcasting, Content","60","6010","Radio broadcasting and audio programme distribution"],
["J","Publishing, Broadcasting, Content","60","6020","Television broadcasting and video programme distribution"],
["J","Publishing, Broadcasting, Content","60","6031","News agency activities"],
["J","Publishing, Broadcasting, Content","60","6039","Other content distribution activities"],
["K","Telecom, IT and Information Services","61","6110","Wired, wireless and satellite telecommunications"],
["K","Telecom, IT and Information Services","61","6120","Resale and intermediary telecom services"],
["K","Telecom, IT and Information Services","61","6190","Other telecommunications activities"],
["K","Telecom, IT and Information Services","62","6210","Computer programming activities (custom software)"],
["K","Telecom, IT and Information Services","62","6220","IT consultancy and computer facilities management"],
["K","Telecom, IT and Information Services","62","6290","Other information technology service activities"],
["K","Telecom, IT and Information Services","63","6310","Data processing, hosting and related activities"],
["K","Telecom, IT and Information Services","63","6391","Web portals"],
["K","Telecom, IT and Information Services","63","6392","Other information service activities n.e.c."],
["L","Financial and Insurance Activities","64","6411","Central banking"],
["L","Financial and Insurance Activities","64","6419","Other monetary intermediation"],
["L","Financial and Insurance Activities","64","6421","Activities of holding companies"],
["L","Financial and Insurance Activities","64","6422","Activities of financing channels"],
["L","Financial and Insurance Activities","64","6431","Money market and investment fund activities"],
["L","Financial and Insurance Activities","64","6432","Trusts, funds and similar financial entities"],
["L","Financial and Insurance Activities","64","6491","Financial leasing"],
["L","Financial and Insurance Activities","64","6492","Other credit granting"],
["L","Financial and Insurance Activities","64","6499","Other financial service activities n.e.c."],
["L","Financial and Insurance Activities","65","6511","Life insurance"],
["L","Financial and Insurance Activities","65","6512","Non-life insurance"],
["L","Financial and Insurance Activities","65","6520","Reinsurance"],
["L","Financial and Insurance Activities","65","6530","Pension funding"],
["L","Financial and Insurance Activities","66","6611","Administration of financial markets"],
["L","Financial and Insurance Activities","66","6612","Security and commodity contracts brokerage"],
["L","Financial and Insurance Activities","66","6619","Other activities auxiliary to financial services"],
["L","Financial and Insurance Activities","66","6621","Risk and damage evaluation"],
["L","Financial and Insurance Activities","66","6622","Activities of insurance agents and brokers"],
["L","Financial and Insurance Activities","66","6629","Other activities auxiliary to insurance and pension funding"],
["L","Financial and Insurance Activities","66","6630","Fund management activities"],
["M","Real Estate Activities","68","6811","Buying and selling of own real estate"],
["M","Real Estate Activities","68","6812","Real estate development (promotion)"],
["M","Real Estate Activities","68","6820","Renting and operating of own or leased real estate"],
["M","Real Estate Activities","68","6831","Real estate agency activities"],
["M","Real Estate Activities","68","6832","Other real estate activities on a fee or contract basis"],
["N","Professional, Scientific and Technical","69","6910","Legal activities"],
["N","Professional, Scientific and Technical","69","6920","Accounting, bookkeeping, auditing; tax consultancy"],
["N","Professional, Scientific and Technical","70","7010","Activities of head offices"],
["N","Professional, Scientific and Technical","70","7020","Management consultancy activities"],
["N","Professional, Scientific and Technical","71","7111","Architectural activities"],
["N","Professional, Scientific and Technical","71","7112","Engineering activities and related technical consultancy"],
["N","Professional, Scientific and Technical","71","7120","Technical testing and analysis"],
["N","Professional, Scientific and Technical","72","7210","R&D in natural sciences and engineering"],
["N","Professional, Scientific and Technical","72","7220","R&D in social sciences and humanities"],
["N","Professional, Scientific and Technical","73","7311","Advertising agencies"],
["N","Professional, Scientific and Technical","73","7312","Media representation"],
["N","Professional, Scientific and Technical","73","7320","Market research and public opinion polling"],
["N","Professional, Scientific and Technical","73","7330","Public relations and communication activities"],
["N","Professional, Scientific and Technical","74","7411","Industrial and fashion design"],
["N","Professional, Scientific and Technical","74","7412","Graphic design and visual communication"],
["N","Professional, Scientific and Technical","74","7413","Interior design activities"],
["N","Professional, Scientific and Technical","74","7414","Other specialised design activities"],
["N","Professional, Scientific and Technical","74","7420","Photographic activities"],
["N","Professional, Scientific and Technical","74","7430","Translation and interpretation activities"],
["N","Professional, Scientific and Technical","74","7491","Patent brokerage and marketing services"],
["N","Professional, Scientific and Technical","74","7499","Other professional, scientific and technical activities n.e.c."],
["N","Professional, Scientific and Technical","75","7500","Veterinary activities"],
["O","Administrative and Support Services","77","7711","Renting and leasing of cars and light motor vehicles"],
["O","Administrative and Support Services","77","7712","Renting and leasing of trucks"],
["O","Administrative and Support Services","77","7721","Renting and leasing of recreational and sports goods"],
["O","Administrative and Support Services","77","7722","Renting of other personal and household goods"],
["O","Administrative and Support Services","77","7731","Renting and leasing of agricultural machinery"],
["O","Administrative and Support Services","77","7732","Renting and leasing of construction machinery"],
["O","Administrative and Support Services","77","7733","Renting and leasing of office machinery and equipment"],
["O","Administrative and Support Services","77","7734","Renting and leasing of water transport equipment"],
["O","Administrative and Support Services","77","7735","Renting and leasing of air transport equipment"],
["O","Administrative and Support Services","77","7739","Renting and leasing of other machinery and equipment"],
["O","Administrative and Support Services","77","7740","Leasing of intangible non-financial assets"],
["O","Administrative and Support Services","77","7751","Intermediary services for car rental and leasing"],
["O","Administrative and Support Services","77","7752","Intermediary services for rental of other goods"],
["O","Administrative and Support Services","78","7810","Activities of employment placement agencies"],
["O","Administrative and Support Services","78","7820","Temporary employment agency activities"],
["O","Administrative and Support Services","79","7911","Travel agency activities"],
["O","Administrative and Support Services","79","7912","Tour operator activities"],
["O","Administrative and Support Services","79","7990","Other reservation service and related activities"],
["O","Administrative and Support Services","80","8001","Investigation and private security activities"],
["O","Administrative and Support Services","80","8009","Other security activities n.e.c."],
["O","Administrative and Support Services","81","8110","Combined facilities support activities"],
["O","Administrative and Support Services","81","8121","General cleaning of buildings"],
["O","Administrative and Support Services","81","8122","Other building and industrial cleaning activities"],
["O","Administrative and Support Services","81","8123","Other cleaning activities"],
["O","Administrative and Support Services","81","8130","Landscape service activities"],
["O","Administrative and Support Services","82","8210","Office administrative and support activities"],
["O","Administrative and Support Services","82","8220","Activities of call centres"],
["O","Administrative and Support Services","82","8230","Organisation of conventions and trade shows"],
["O","Administrative and Support Services","82","8240","Intermediary services for business support n.e.c."],
["O","Administrative and Support Services","82","8291","Activities of collection agencies and credit bureaus"],
["O","Administrative and Support Services","82","8292","Packaging activities"],
["O","Administrative and Support Services","82","8299","Other business support service activities n.e.c."],
["P","Public Administration and Defence","84","8411","General public administration activities"],
["P","Public Administration and Defence","84","8412","Regulation of healthcare, education, cultural and social services"],
["P","Public Administration and Defence","84","8413","Regulation and efficiency of business activities"],
["P","Public Administration and Defence","84","8421","Foreign affairs"],
["P","Public Administration and Defence","84","8422","Defence activities"],
["P","Public Administration and Defence","84","8423","Justice and judicial activities"],
["P","Public Administration and Defence","84","8424","Public order and safety activities"],
["P","Public Administration and Defence","84","8425","Fire service activities"],
["P","Public Administration and Defence","84","8430","Compulsory social security activities"],
["Q","Education","85","8510","Pre-primary education"],
["Q","Education","85","8520","Primary education"],
["Q","Education","85","8531","General secondary education"],
["Q","Education","85","8532","Technical and vocational secondary education"],
["Q","Education","85","8533","Post-secondary non-tertiary education"],
["Q","Education","85","8540","Higher education"],
["Q","Education","85","8551","Sports and recreation education"],
["Q","Education","85","8552","Cultural education"],
["Q","Education","85","8553","Driving school activities"],
["Q","Education","85","8559","Other education n.e.c."],
["Q","Education","85","8561","Intermediary activities for courses and tutors"],
["Q","Education","85","8569","Educational support activities"],
["R","Human Health and Social Work","86","8610","Hospital activities"],
["R","Human Health and Social Work","86","8621","General medical practice activities"],
["R","Human Health and Social Work","86","8622","Specialist medical practice activities"],
["R","Human Health and Social Work","86","8623","Dental practice activities"],
["R","Human Health and Social Work","86","8691","Diagnostic imaging and medical laboratory activities"],
["R","Human Health and Social Work","86","8692","Ambulance activities"],
["R","Human Health and Social Work","86","8693","Activities of psychologists and psychotherapists"],
["R","Human Health and Social Work","86","8694","Activities of nurses and midwives"],
["R","Human Health and Social Work","86","8695","Physiotherapy activities"],
["R","Human Health and Social Work","86","8696","Traditional and alternative medicine activities"],
["R","Human Health and Social Work","86","8697","Intermediary services for medical and dental services"],
["R","Human Health and Social Work","86","8699","Other human health activities n.e.c."],
["R","Human Health and Social Work","87","8710","Residential nursing care activities"],
["R","Human Health and Social Work","87","8720","Residential care for mental health and substance abuse"],
["R","Human Health and Social Work","87","8730","Residential care for the elderly and disabled"],
["R","Human Health and Social Work","87","8791","Intermediary services for domiciliary care"],
["R","Human Health and Social Work","87","8799","Other residential care activities n.e.c."],
["R","Human Health and Social Work","88","8810","Social work without accommodation for the elderly and disabled"],
["R","Human Health and Social Work","88","8891","Child day-care activities"],
["R","Human Health and Social Work","88","8899","Other social work activities without accommodation n.e.c."],
["S","Arts, Entertainment and Recreation","90","9011","Literary creation and musical composition"],
["S","Arts, Entertainment and Recreation","90","9012","Visual arts creation"],
["S","Arts, Entertainment and Recreation","90","9013","Other artistic creation activities"],
["S","Arts, Entertainment and Recreation","90","9020","Performing arts activities"],
["S","Arts, Entertainment and Recreation","90","9031","Operation of arts facilities"],
["S","Arts, Entertainment and Recreation","90","9039","Other support activities for performing arts"],
["S","Arts, Entertainment and Recreation","91","9111","Library activities"],
["S","Arts, Entertainment and Recreation","91","9112","Archives activities"],
["S","Arts, Entertainment and Recreation","91","9121","Museums and collections activities"],
["S","Arts, Entertainment and Recreation","91","9122","Historical sites and monuments activities"],
["S","Arts, Entertainment and Recreation","91","9130","Conservation, restoration and cultural heritage support"],
["S","Arts, Entertainment and Recreation","91","9141","Botanical and zoological gardens activities"],
["S","Arts, Entertainment and Recreation","91","9142","Nature reserves activities"],
["S","Arts, Entertainment and Recreation","92","9200","Gambling and betting activities"],
["S","Arts, Entertainment and Recreation","93","9311","Operation of sports facilities"],
["S","Arts, Entertainment and Recreation","93","9312","Activities of sport clubs"],
["S","Arts, Entertainment and Recreation","93","9313","Fitness facility activities"],
["S","Arts, Entertainment and Recreation","93","9319","Other sports activities n.e.c."],
["S","Arts, Entertainment and Recreation","93","9321","Activities of amusement and theme parks"],
["S","Arts, Entertainment and Recreation","93","9329","Other amusement and recreation activities n.e.c."],
["T","Other Service Activities","94","9411","Activities of business and employers membership organisations"],
["T","Other Service Activities","94","9412","Activities of professional membership organisations"],
["T","Other Service Activities","94","9420","Activities of trade unions"],
["T","Other Service Activities","94","9491","Activities of religious organisations"],
["T","Other Service Activities","94","9492","Activities of political organisations"],
["T","Other Service Activities","94","9499","Activities of other membership organisations n.e.c."],
["T","Other Service Activities","95","9510","Repair of computers and communication equipment"],
["T","Other Service Activities","95","9521","Repair of consumer electronics"],
["T","Other Service Activities","95","9522","Repair of household appliances and home and garden equipment"],
["T","Other Service Activities","95","9523","Repair of footwear and leather goods"],
["T","Other Service Activities","95","9524","Repair of furniture and home furnishings"],
["T","Other Service Activities","95","9525","Repair of watches, clocks and jewellery"],
["T","Other Service Activities","95","9529","Repair of other personal and household goods n.e.c."],
["T","Other Service Activities","95","9531","Repair and maintenance of motor vehicles"],
["T","Other Service Activities","95","9532","Repair and maintenance of motorcycles"],
["T","Other Service Activities","95","9540","Intermediary services for repair and maintenance"],
["T","Other Service Activities","96","9610","Washing and cleaning of textile and fur products"],
["T","Other Service Activities","96","9621","Hairdressing activities"],
["T","Other Service Activities","96","9622","Beauty treatment and spa activities"],
["T","Other Service Activities","96","9623","Sauna and steam bath activities"],
["T","Other Service Activities","96","9630","Funeral and related activities"],
["T","Other Service Activities","96","9640","Intermediary activities for personal services"],
["T","Other Service Activities","96","9691","Personal services at home"],
["T","Other Service Activities","96","9699","Other personal service activities n.e.c."],
["U","Activities of Households as Employers","97","9700","Activities of households as employers of domestic personnel"],
["U","Activities of Households as Employers","98","9810","Undifferentiated goods-producing activities of private households"],
["U","Activities of Households as Employers","98","9820","Undifferentiated service-producing activities of private households"],
["V","Activities of Extraterritorial Organisations","99","9900","Activities of extraterritorial organisations and bodies"]
];

/* ===== CORRESPONDENCE TABLE Rev.2 → Rev.3 ===== */
var CORR=[
["0111","0111","=",""],["0112","0112","=",""],["0113","0113","=",""],["0114","0114","=",""],["0115","0115","=",""],["0116","0116","=",""],
["0119","0113","S","Cultivation of root vegetables and tubers moved here"],["0119","0119","S","Remaining activities"],
["0121","0121","=",""],["0122","0122","=",""],["0123","0123","=",""],["0124","0124","=",""],["0125","0125","=",""],["0126","0126","=",""],["0127","0127","=",""],
["0128","0113","S","Cultivation of hot peppers moved to 0113"],["0128","0128","S","Remaining (excl. hot peppers)"],
["0129","0129","=",""],["0130","0130","=",""],["0141","0141","=",""],
["0142","0141","S","Production of bovine semen from dairy breeds"],["0142","0142","S","Remaining (excl. dairy breed semen production)"],
["0143","0143","=",""],["0144","0144","=",""],["0145","0145","=",""],["0146","0146","=",""],["0147","0147","=",""],
["0149","0147","S","Raising of quail and ostriches moved to 0147"],["0149","0148","S","Remaining other animal raising"],
["0150","0150","=",""],["0161","0161","=",""],
["0162","0147","S","Automatic hatching of poultry eggs moved to 0147"],["0162","0162","S","Remaining (excl. automatic hatching)"],
["0163","0163","=",""],["0164","0163","=","Seed preparation merged into 0163"],["0170","0170","=",""],
["0210","0210","=",""],["0220","0220","=",""],["0230","0230","=",""],["0240","0240","=",""],
["0311","0311","S","Excl. support activities for marine fishing"],["0311","0330","S","Support activities for marine fishing moved to 0330"],
["0312","0312","S","Excl. support activities for freshwater fishing"],["0312","0330","S","Support activities for freshwater fishing moved to 0330"],
["0321","0321","S","Excl. support activities for marine aquaculture"],["0321","0330","S","Support activities for marine aquaculture moved to 0330"],
["0322","0148","S","Raising of aquatic reptiles moved to 0148"],["0322","0322","S","Remaining (excl. aquatic reptiles)"],["0322","0330","S","Support activities for freshwater aquaculture moved to 0330"],
["0510","0510","=",""],["0520","0520","=",""],["0610","0610","=",""],["0620","0620","=",""],["0710","0710","=",""],["0721","0721","=",""],["0729","0729","=",""],
["0811","0811","=",""],["0812","0812","=",""],["0891","0891","=",""],["0892","0892","=",""],["0893","0893","=",""],["0899","0899","=",""],["0910","0910","=",""],["0990","0990","=",""],
["1011","1011","=",""],["1012","1012","=",""],["1013","1013","=",""],["1020","1020","=",""],["1031","1031","=",""],["1032","1032","=",""],["1039","1039","=",""],
["1041","1041","=",""],["1042","1042","=",""],["1051","1051","=",""],["1052","1052","=",""],["1061","1061","=",""],["1062","1062","=",""],
["1071","1071","=",""],["1072","1072","=",""],["1073","1073","=",""],["1081","1081","=",""],["1082","1082","=",""],["1083","1083","=",""],
["1084","1084","=",""],["1085","1085","=",""],
["1086","1086","S","Excl. gluten-free products"],["1086","1061","S","Gluten-free milling products"],["1086","1062","S","Gluten-free starch products"],["1086","1071","S","Gluten-free bread and pastry"],["1086","1072","S","Gluten-free biscuits"],["1086","1073","S","Gluten-free pasta"],
["1089","1089","=",""],["1091","1091","=",""],["1092","1092","=",""],
["1101","1101","=",""],["1102","1102","=",""],["1103","1103","=",""],["1104","1104","=",""],["1105","1105","=",""],["1106","1106","=",""],["1107","1107","=",""],["1200","1200","=",""],
["1310","1310","=",""],
["1320","1320","S","Excl. glass fibre and carbon fibre fabrics"],["1320","1396","S","Glass fibre fabrics moved to 1396"],["1320","2399","S","Carbon fibre fabrics moved to 2399"],
["1330","1330","S","Excl. printing on textiles"],["1330","1812","S","Printing on textiles moved to 1812"],
["1391","1391","=",""],
["1392","1392","S","Excl. tarpaulins, tents, sails, parachutes"],["1392","1396","S","Tarpaulins, tents, sails, parachutes moved to 1396"],
["1393","1393","=",""],["1394","1394","=",""],["1395","1395","=",""],["1396","1396","=",""],["1399","1399","=",""],
["1411","1424","S","Fur clothing"],["1411","1423","S","Knitted/crocheted workwear"],["1411","1410","S","Knitted/crocheted apparel"],
["1412","1421","S","Woven apparel"],
["1413","1422","S","Woven underwear and nightwear"],["1413","1410","S","Knitted/crocheted underwear"],
["1414","1421","S","Woven baby clothing"],["1414","1422","S","Baby underwear"],["1414","1410","S","Knitted/crocheted baby clothing"],
["1419","1424","S","Fur/leather accessories"],["1419","1410","S","Knitted/crocheted sportswear"],["1419","1429","S","Hats, caps, gloves, belts, scarves, ties"],
["1420","1424","R","Fur articles"],
["1431","1410","S","Knitted/crocheted hosiery"],["1439","1410","S","Other knitted/crocheted clothing"],
["1511","1511","=",""],["1512","1512","=",""],["1520","1520","=",""],
["1610","1611","S","Sawmilling, planing"],["1610","1612","S","General wood processing"],
["1621","1621","=",""],
["1622","1622","S","Excl. finishing"],["1622","1627","S","Finishing of wood products"],
["1623","1623","S","Excl. wooden doors/windows"],["1623","1625","S","Wooden doors and windows"],["1623","1627","S","Finishing of wood products"],
["1624","1624","S","Excl. finishing"],["1624","1627","S","Finishing of wood products"],
["1629","1520","S","Wooden shoe parts moved to 1520"],["1629","1626","S","Solid biomass fuels"],["1629","1627","S","Finishing of wood products"],["1629","1628","S","Remaining other wood products"],
["1711","1711","=",""],["1712","1712","=",""],["1721","1721","=",""],["1722","1722","=",""],["1723","1723","=",""],["1724","1724","=",""],["1729","1725","=",""],
["1811","1811","=",""],["1812","1812","=",""],["1813","1813","=",""],["1814","1814","=",""],["1820","1820","=",""],["1910","1910","=",""],["1920","1920","=",""],
["2011","2011","S","Excl. refrigerant gases"],["2011","2014","S","Refrigerant gases moved to 2014"],
["2012","2012","=",""],["2013","2013","=",""],["2014","2014","=",""],["2015","2015","=",""],["2016","2016","=",""],["2017","2017","=",""],["2020","2020","=",""],["2030","2030","=",""],
["2041","2041","=",""],["2042","2042","=",""],
["2051","2051","S","Manufacture of liquid biofuels"],
["2052","2059","R","Manufacture of glues"],["2053","2059","R","Manufacture of essential oils"],
["2059","2051","S","Liquid biofuels portion"],["2059","2059","S","Remaining other chemical products"],
["2060","2060","=",""],["2110","2110","=",""],["2120","2120","=",""],
["2211","2211","=",""],
["2219","1520","S","Rubber footwear parts moved to 1520"],["2219","2212","S","Remaining other rubber products"],
["2221","2221","S","Excl. finishing"],["2221","2225","S","Finishing of plastic articles"],
["2222","2222","S","Excl. finishing"],["2222","2225","S","Finishing of plastic articles"],
["2223","2223","S","Plastic doors and windows"],["2223","2224","S","Plastic construction products"],["2223","2225","S","Finishing of plastic articles"],
["2229","1520","S","Plastic footwear parts moved to 1520"],["2229","2225","S","Finishing of plastic articles"],["2229","2226","S","Remaining other plastic products"],
["2311","2311","=",""],
["2312","2312","S","Excl. rearview mirrors"],["2312","2932","S","Rearview mirrors moved to 2932"],
["2313","2313","=",""],["2314","2314","=",""],["2319","2315","=","Technical glassware"],["2320","2320","=",""],
["2331","2331","=",""],["2332","2332","=",""],["2341","2341","=",""],["2342","2342","=",""],["2343","2343","=",""],["2344","2344","=",""],["2349","2345","=","Other ceramic products"],
["2351","2351","=",""],["2352","2352","=",""],["2361","2361","=",""],["2362","2362","=",""],["2363","2363","=",""],["2364","2364","=",""],["2365","2365","=",""],["2369","2366","=","Other articles"],
["2370","2370","=",""],["2391","2391","=",""],["2399","2399","=",""],
["2410","2410","=",""],["2420","2420","=",""],["2431","2431","=",""],["2432","2432","=",""],["2433","2433","=",""],["2434","2434","=",""],
["2441","2441","=",""],["2442","2442","=",""],["2443","2443","=",""],["2444","2444","=",""],["2445","2445","=",""],["2446","2446","=",""],
["2451","2451","=",""],["2452","2452","=",""],["2453","2453","=",""],
["2454","2453","S","Zinc castings moved to 2453"],["2454","2454","S","Remaining non-ferrous castings"],
["2511","2511","=",""],["2512","2512","=",""],["2521","2521","=",""],["2529","2522","=","Tanks, reservoirs and containers"],
["2530","2530","R","Steam generators"],["2540","2540","=",""],
["2550","2551","S","Metal coating activities"],["2550","2552","S","Heat treatment of metals"],["2550","2553","S","Machining of metals"],
["2561","2561","=",""],["2562","2562","=",""],
["2571","2563","R","Manufacture of tools"],["2572","2563","R","Manufacture of tools"],["2573","2563","R","Manufacture of tools"],
["2591","2591","=",""],["2592","2592","=",""],["2593","2593","=",""],["2594","2594","=",""],["2599","2599","=",""],
["2611","2612","R","Electronic components to loaded boards"],["2612","2611","R","Other electronic components"],
["2620","2620","=",""],
["2630","2630","S","Excl. alarm systems"],["2630","2651","S","Alarm systems moved to 2651"],
["2640","2640","=",""],["2651","2651","=",""],["2652","2652","=",""],["2660","2660","=",""],["2670","2670","=",""],
["2680","2670","R","Magnetic/optical media merged into 2670"],
["2711","2711","S","Excl. electric motors for vehicles"],["2711","2910","S","Electric motors for vehicles"],
["2712","2711","S","Generator starter assemblies"],["2712","2712","S","Remaining distribution/control apparatus"],
["2720","2720","=",""],["2731","2731","=",""],["2732","2732","=",""],["2733","2733","=",""],["2740","2740","=",""],["2751","2751","=",""],["2752","2752","=",""],
["2790","2711","S","Static inverters and rectifiers"],["2790","2790","S","Remaining other electrical equipment"],["2790","2931","S","Inverter modules for cars"],["2790","3299","S","Electronic cigarettes moved to 3299"],
["2811","2811","=",""],["2812","2812","=",""],["2813","2813","=",""],["2814","2814","=",""],["2815","2815","=",""],
["2821","2821","=",""],["2822","2822","=",""],["2823","2823","=",""],["2824","2824","=",""],["2825","2825","=",""],["2829","2829","=",""],["2830","2830","=",""],
["2841","2841","=",""],["2849","2842","=","Other machine tools"],
["2891","2891","=",""],["2892","2892","=",""],["2893","2893","=",""],["2894","2894","=",""],["2895","2895","=",""],["2896","2896","=",""],
["2899","2897","S","Additive manufacturing machinery"],["2899","2899","S","Remaining special-purpose machinery"],
["2910","2910","=",""],["2920","2920","=",""],["2931","2931","=",""],["2932","2932","=",""],
["3011","3011","S","Civilian ships"],["3011","3013","S","Military ships"],
["3012","3012","=",""],["3020","3020","=",""],
["3030","3031","S","Civilian aircraft"],["3030","3032","S","Military aircraft"],
["3040","3040","=",""],["3091","3091","=",""],["3092","3092","=",""],["3099","3099","=",""],
["3101","3100","M","Furniture merged"],["3102","3100","M","Kitchen furniture"],["3103","3100","M","Mattresses"],["3109","3100","M","Other furniture"],
["3211","3211","=",""],["3212","3212","=",""],["3213","3213","=",""],["3220","3220","=",""],["3230","3230","=",""],["3240","3240","=",""],["3250","3250","=",""],["3291","3291","=",""],["3299","3299","=",""],
["3311","3311","=",""],["3312","3312","=",""],["3313","3313","=",""],["3314","3314","=",""],["3315","3315","=",""],["3316","3316","=",""],["3317","3317","=",""],
["3319","3318","S","Military vehicle repair"],["3319","3319","S","Remaining other equipment repair"],
["3320","3320","=",""],
["3511","3511","S","Electricity from non-renewable"],["3511","3512","S","Electricity from renewable"],
["3512","3511","S","Electricity from non-renewable"],["3512","3512","S","Electricity from renewable"],
["3513","3513","=",""],["3514","3514","=",""],
["3515","3515","S","Trade of electricity"],["3515","3540","S","Energy brokers and agents"],
["3516","3516","N","Storage of electricity (new code)"],
["3521","3521","=",""],["3522","3522","=",""],
["3523","3523","S","Trade of gas"],["3523","3540","S","Energy brokers and agents"],
["3530","3530","=",""],
["3600","3600","=",""],["3700","3700","=",""],
["3811","3811","=",""],["3812","3812","=",""],
["3821","3821","S","Recycling of materials"],["3821","3822","S","Energy production from waste"],
["3822","3823","R","Other waste treatment"],
["3831","3831","S","Waste incineration without energy"],["3831","3832","S","Landfill activities"],
["3832","3833","R","Other waste disposal"],
["3900","3900","=",""],
["4110","4100","=","Construction of buildings"],["4120","4100","=","Construction of buildings"],
["4211","4211","=",""],["4212","4212","=",""],["4213","4213","=",""],["4221","4221","=",""],["4222","4222","=",""],["4291","4291","=",""],["4299","4299","=",""],
["4311","4311","=",""],["4312","4312","=",""],["4313","4313","=",""],["4321","4321","=",""],["4322","4322","=",""],
["4329","4323","S","Insulation work"],["4329","4324","S","Other construction installation"],
["4331","4331","=",""],["4332","4332","=",""],["4333","4333","=",""],["4334","4334","=",""],
["4339","4335","=","Other building completion"],
["4391","4341","S","Roofing activities"],["4391","4342","S","Other specialised construction for buildings"],
["4399","4350","S","Specialised construction for civil engineering"],["4399","4360","S","Intermediary services for construction"],["4399","4391","S","Bricklaying"],["4399","4399","S","Other specialised construction"],
["4511","4781","S","Retail sale of motor vehicles"],["4511","4671","S","Wholesale of motor vehicles"],
["4519","4781","S","Retail of other motor vehicles"],["4519","4671","S","Wholesale of other motor vehicles"],
["4520","9531","=","Repair and maintenance of motor vehicles"],
["4531","4782","S","Retail of motor vehicle parts"],["4531","4672","S","Wholesale of motor vehicle parts"],
["4532","4782","S","Retail of motor vehicle parts"],["4532","4672","S","Wholesale of motor vehicle parts"],
["4540","4783","S","Retail of motorcycles"],["4540","4673","S","Wholesale of motorcycles"],["4540","9532","S","Repair of motorcycles"],
["4611","4611","=",""],["4612","4612","=",""],["4613","4613","=",""],["4614","4614","=",""],["4615","4615","=",""],["4616","4616","=",""],["4617","4617","=",""],["4618","4618","=",""],["4619","4619","=",""],
["4621","4621","=",""],["4622","4622","=",""],["4623","4623","=",""],["4624","4624","=",""],
["4631","4631","=",""],["4632","4632","=",""],["4633","4633","=",""],["4634","4634","=",""],["4635","4635","=",""],["4636","4636","=",""],["4637","4637","=",""],["4638","4638","=",""],["4639","4639","=",""],
["4641","4641","=",""],["4642","4642","=",""],["4643","4643","=",""],["4644","4644","=",""],["4645","4645","=",""],["4646","4646","=",""],["4647","4647","=",""],["4648","4648","=",""],["4649","4649","=",""],
["4651","4650","R","Wholesale of ICT equipment"],["4652","4650","R","Wholesale of ICT equipment"],
["4661","4661","=",""],["4662","4662","=",""],["4663","4663","=",""],
["4669","4664","=","Wholesale of other machinery"],
["4671","4681","=","Wholesale of fuels"],["4672","4682","=",""],["4673","4683","=",""],["4674","4684","=",""],["4675","4685","=",""],["4676","4686","=",""],["4677","4687","=",""],
["4690","4689","S","Wholesale of other specialised products"],["4690","4690","S","Non-specialised wholesale"],
["4711","4711","=",""],["4719","4712","=","Non-specialised stores non-food"],
["4721","4721","=",""],["4722","4722","=",""],["4723","4723","=",""],
["4724","4724","=",""],["4725","4725","=",""],["4726","4726","=",""],
["4729","4727","=","Other food retail"],
["4730","4730","=",""],
["4741","4740","R","Retail of ICT equipment"],["4742","4740","R","Retail of ICT equipment"],["4743","4740","R","Retail of ICT equipment"],
["4751","4751","=",""],["4752","4752","=",""],["4753","4753","=",""],["4754","4754","=",""],
["4759","4755","=","Retail of furniture and household"],
["4761","4761","=",""],["4762","4762","=",""],["4763","4763","=",""],["4764","4764","=",""],["4765","4769","=","Retail of cultural goods"],
["4771","4771","=",""],["4772","4772","=",""],["4773","4773","=",""],["4774","4774","=",""],["4775","4775","=",""],["4776","4776","=",""],["4777","4777","=",""],
["4778","4778","=",""],["4779","4779","=",""],
["4781","4791","S","Retail via stalls - non-specialised"],["4782","4792","S","Retail via stalls - specialised"],
["4789","4791","S","Retail via stalls"],
["4791","4791","S","Intermediaries non-specialised retail"],["4791","4792","S","Intermediaries specialised retail"],
["4799","4791","S","Other non-store retail"],["4799","4792","S","Other non-store retail specialised"],
["4910","4911","S","Mainline passenger rail"],["4910","4912","S","Other passenger rail"],
["4920","4920","=",""],
["4931","4931","=",""],
["4932","4932","S","Occasional passenger transport"],["4932","4933","S","On-demand passenger transport"],
["4939","4934","S","Funiculars and ski-lifts"],["4939","4939","S","Other passenger land transport"],
["4941","4941","=",""],["4942","4942","=",""],["4950","4950","=",""],
["5010","5010","=",""],["5020","5020","=",""],["5030","5030","=",""],["5040","5040","=",""],
["5110","5110","=",""],["5121","5121","=",""],["5122","5122","=",""],
["5210","5210","=",""],
["5221","5221","=",""],["5222","5222","=",""],["5223","5223","=",""],["5224","5224","=",""],
["5229","5225","S","Logistics services"],["5229","5226","S","Other transportation support"],
["5310","5310","=",""],["5320","5320","=",""],
["5510","5510","=",""],["5520","5520","=",""],["5530","5530","=",""],["5590","5590","=",""],
["5610","5611","S","Restaurants"],["5610","5612","S","Mobile food service"],
["5621","5621","=",""],
["5629","5622","=","Other food service"],
["5630","5630","=",""],
["5811","5811","=",""],["5812","5812","=",""],["5813","5813","=",""],["5814","5819","=","Other publishing"],["5819","5819","=",""],
["5821","5821","=",""],["5829","5829","=",""],
["5911","5911","=",""],["5912","5912","=",""],["5913","5913","=",""],["5914","5914","=",""],["5920","5920","=",""],
["6010","6010","=",""],["6020","6020","=",""],
["6110","6110","R","Wired, wireless and satellite telecom merged"],["6120","6110","R","Wireless telecom merged into 6110"],["6130","6110","R","Satellite telecom merged into 6110"],
["6190","6120","S","Resale and intermediary telecom"],["6190","6190","S","Other telecom activities"],
["6201","6210","=","Computer programming"],
["6202","6220","=","IT consultancy"],
["6203","6220","R","Computer facilities management"],
["6209","6290","=","Other IT services"],
["6311","6310","=","Data processing and hosting"],
["6312","6391","=","Web portals"],
["6391","6031","S","News agency activities"],["6391","6039","S","Other content distribution"],
["6399","6392","=","Other information services"],
["6411","6411","=",""],["6419","6419","=",""],
["6420","6421","S","Holding companies"],["6420","6422","S","Financing channels"],
["6430","6431","S","Money market funds"],["6430","6432","S","Trusts and similar entities"],
["6491","6491","=",""],["6492","6492","=",""],["6499","6499","=",""],
["6511","6511","=",""],["6512","6512","=",""],["6520","6520","=",""],["6530","6530","=",""],
["6611","6611","=",""],["6612","6612","=",""],["6619","6619","=",""],["6621","6621","=",""],["6622","6622","=",""],["6629","6629","=",""],["6630","6630","=",""],
["6810","6811","S","Buying/selling own real estate"],["6810","6812","S","Real estate development"],
["6820","6820","=",""],
["6831","6831","=",""],["6832","6832","=",""],
["6910","6910","=",""],["6920","6920","=",""],["7010","7010","=",""],["7020","7020","=",""],
["7111","7111","=",""],["7112","7112","=",""],["7120","7120","=",""],
["7211","7210","R","R&D natural sciences"],["7219","7210","R","R&D natural sciences"],["7220","7220","=",""],
["7311","7311","=",""],["7312","7312","=",""],["7320","7320","=",""],
["7410","7411","S","Industrial and fashion design"],["7410","7412","S","Graphic design"],["7410","7413","S","Interior design"],["7410","7414","S","Other specialised design"],
["7420","7420","=",""],["7430","7430","=",""],
["7490","7330","S","PR and communication"],["7490","7491","S","Patent brokerage"],["7490","7499","S","Other professional activities"],
["7500","7500","=",""],
["7711","7711","=",""],["7712","7712","=",""],["7721","7721","=",""],["7722","7722","=",""],
["7731","7731","=",""],["7732","7732","=",""],["7733","7733","=",""],["7734","7734","=",""],["7735","7735","=",""],
["7739","7739","=",""],["7740","7740","=",""],
["7810","7810","=",""],["7820","7820","=",""],
["7830","7810","S","HR provision merged"],
["7911","7911","=",""],["7912","7912","=",""],["7990","7990","=",""],
["8010","8001","R","Investigation and security"],["8020","8001","R","Security systems"],["8030","8001","R","Investigation activities"],
["8110","8110","=",""],
["8121","8121","=",""],["8122","8122","=",""],["8129","8123","=","Other cleaning"],
["8130","8130","=",""],
["8211","8210","R","Office admin"],["8219","8210","R","Office admin"],
["8220","8220","=",""],["8230","8230","=",""],
["8291","8291","=",""],["8292","8292","=",""],["8299","8299","=",""],
["8411","8411","=",""],["8412","8412","=",""],["8413","8413","=",""],["8421","8421","=",""],["8422","8422","=",""],["8423","8423","=",""],["8424","8424","=",""],["8425","8425","=",""],["8430","8430","=",""],
["8510","8510","=",""],["8520","8520","=",""],["8531","8531","=",""],["8532","8532","=",""],
["8541","8533","S","Post-secondary non-tertiary"],["8541","8540","S","Higher education"],
["8542","8540","=","Higher education"],
["8551","8551","=",""],["8552","8552","=",""],["8553","8553","=",""],["8559","8559","=",""],["8560","8569","=","Educational support"],
["8610","8610","=",""],
["8621","8621","=",""],["8622","8622","=",""],["8623","8623","=",""],
["8690","8691","S","Diagnostic imaging and labs"],["8690","8692","S","Ambulance activities"],["8690","8693","S","Psychologists"],["8690","8694","S","Nurses and midwives"],["8690","8695","S","Physiotherapy"],["8690","8696","S","Traditional medicine"],["8690","8699","S","Other health activities"],
["8710","8710","=",""],["8720","8720","=",""],["8730","8730","=",""],
["8790","8799","=","Other residential care"],
["8810","8810","=",""],["8891","8891","=",""],["8899","8899","=",""],
["9001","9011","S","Literary creation"],["9001","9012","S","Visual arts"],["9001","9013","S","Other artistic creation"],
["9002","9020","=","Performing arts"],
["9003","9031","S","Operation of arts facilities"],["9003","9039","S","Other performing arts support"],
["9004","9031","S","Operation of arts facilities"],["9004","9039","S","Other performing arts support"],
["9101","9111","S","Library activities"],["9101","9112","S","Archives activities"],
["9102","9121","S","Museums"],["9102","9122","S","Historical sites"],
["9103","9130","=","Conservation and restoration"],
["9104","9141","S","Botanical and zoological gardens"],["9104","9142","S","Nature reserves"],
["9200","9200","=",""],
["9311","9311","=",""],["9312","9312","=",""],["9313","9313","R","Fitness facilities"],
["9319","9319","=",""],["9321","9321","=",""],["9329","9329","=",""],
["9411","9411","=",""],["9412","9412","=",""],["9420","9420","=",""],["9491","9491","=",""],["9492","9492","=",""],["9499","9499","=",""],
["9511","9510","R","Repair of computers and communication"],["9512","9510","R","Repair of communication equipment"],
["9521","9521","=",""],["9522","9522","=",""],["9523","9523","=",""],["9524","9524","=",""],["9525","9525","=",""],["9529","9529","=",""],
["9601","9610","=",""],
["9602","9621","S","Hairdressing"],["9602","9622","S","Beauty treatment"],["9602","9623","S","Sauna and steam bath"],
["9603","9630","=","Funeral activities"],
["9604","9622","S","Beauty and spa"],["9604","9623","S","Sauna and steam bath"],
["9609","9691","S","Personal services at home"],["9609","9699","S","Other personal services"],
["9700","9700","=",""],["9810","9810","=",""],["9820","9820","=",""],["9900","9900","=",""]
];

/* ===== TYPE CONFIG ===== */
var TYPE_LABEL = {
    'exact': 'Exact match',
    'split': 'Split',
    'merged': 'Merged',
    'recoded': 'Recoded',
    'new': 'New in Rev.3',
    'partial': 'Partial'
};
var TYPE_CLASS = {
    'exact': 't-exact',
    'split': 't-split',
    'merged': 't-merged',
    'recoded': 't-recoded',
    'new': 't-new',
    'partial': 't-recoded'
};

/* ===== GET DESCRIPTION FROM DATA ===== */
function getDesc(code) {
    for (var i = 0; i < DATA.length; i++) {
        if (DATA[i][3] === code) return DATA[i][4];
    }
    return '';
}

/* ===== STORE RESULTS ===== */
var lastResults = [];

/* ===== SEARCH ===== */
function searchCorrespondence() {
    var input = document.getElementById('corrSearchInput');
    var resultsBox = document.getElementById('corrResults');
    var noResults = document.getElementById('corrNoResults');
    var toolbar = document.getElementById('resultsToolbar');
    var countEl = document.getElementById('resultsCount');
    var ctaBox = document.getElementById('postSearchCta');
    var emailBox = document.getElementById('leadCapture');

    if (!input || !resultsBox) return;

    var raw = input.value.trim();
    if (!raw) { clearSearch(); return; }

    var queries = raw.split(/[\s,;]+/).filter(function(s) { return s.length > 0; });
    var isKeyword = queries.length === 1 && !/^\d{2,4}$/.test(queries[0]);
    var matches = [];

    if (isKeyword) {
        var kw = queries[0].toLowerCase();
        for (var i = 0; i < CORR.length; i++) {
            var c = CORR[i];
            var rev2 = c[0], rev3list = c[1], type = c[2] || 'exact', desc2 = (c[3] || '').toLowerCase();
            var found = rev2.indexOf(kw) >= 0 || desc2.indexOf(kw) >= 0;
            if (!found) {
                for (var j = 0; j < rev3list.length; j++) {
                    var r3c = typeof rev3list[j] === 'string' ? rev3list[j] : rev3list[j][0];
                    var r3d = getDesc(r3c).toLowerCase();
                    if (r3c.indexOf(kw) >= 0 || r3d.indexOf(kw) >= 0) { found = true; break; }
                }
            }
            if (found) matches.push({ rev2: rev2, rev3: rev3list, type: type, desc2: c[3] || '' });
        }
    } else {
        for (var q = 0; q < queries.length; q++) {
            var code = queries[q].replace(/\D/g, '');
            if (code.length < 2 || code.length > 4) continue;
            for (var i = 0; i < CORR.length; i++) {
                if (CORR[i][0] === code || CORR[i][0].indexOf(code) === 0) {
                    var c = CORR[i];
                    /* avoid duplicates */
                    var dup = false;
                    for (var d = 0; d < matches.length; d++) { if (matches[d].rev2 === c[0]) { dup = true; break; } }
                    if (!dup) matches.push({ rev2: c[0], rev3: c[1], type: c[2] || 'exact', desc2: c[3] || '' });
                }
            }
        }
    }

    lastResults = matches;

    /* Count */
    var totalMappings = 0;
    for (var m = 0; m < matches.length; m++) { totalMappings += matches[m].rev3.length; }

    if (countEl) countEl.textContent = 'Found ' + totalMappings + ' mapping' + (totalMappings !== 1 ? 's' : '') + ' for ' + matches.length + ' Rev.2 code' + (matches.length !== 1 ? 's' : '');

    /* No results */
    if (matches.length === 0) {
        resultsBox.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (toolbar) toolbar.classList.remove('visible');
        if (ctaBox) ctaBox.classList.remove('visible');
        if (emailBox) emailBox.classList.remove('visible');
        return;
    }

    if (noResults) noResults.style.display = 'none';
    if (toolbar) toolbar.classList.add('visible');
    if (ctaBox) ctaBox.classList.add('visible');
    if (emailBox) emailBox.classList.add('visible');

    /* Render grouped cards */
    var html = '';
    var searchTerm = isKeyword ? queries[0] : '';

    for (var m = 0; m < matches.length; m++) {
        var r = matches[m];
        var typeLbl = TYPE_LABEL[r.type] || r.type;
        var typeCls = TYPE_CLASS[r.type] || 't-recoded';

        html += '<div class="cv-group" style="animation-delay:' + (m * 0.08) + 's">';

        /* Group header */
        html += '<div class="cv-group-hd">';
        html += '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">';
        html += '<span class="cv-group-code">Rev.2: ' + hl(r.rev2, searchTerm) + '</span>';
        if (r.desc2) html += '<span style="font-size:0.85rem;color:var(--text-mid)">' + hl(r.desc2, searchTerm) + '</span>';
        html += '</div>';
        html += '<div style="display:flex;align-items:center;gap:8px">';
        html += '<span class="cv-badge ' + typeCls + '">' + typeLbl + '</span>';
        html += '<span class="cv-group-cnt">' + r.rev3.length + ' code' + (r.rev3.length !== 1 ? 's' : '') + '</span>';
        html += '</div>';
        html += '</div>';

        /* Rows */
        for (var j = 0; j < r.rev3.length; j++) {
            var r3 = r.rev3[j];
            var r3code = typeof r3 === 'string' ? r3 : r3[0];
            var r3desc = getDesc(r3code);

            html += '<div class="cv-row">';
            html += '<span class="cv-row-arrow">→</span>';
            html += '<span class="cv-row-code">' + hl(r3code, searchTerm) + '</span>';
            html += '<span class="cv-row-desc">' + hl(r3desc, searchTerm) + '</span>';
            html += '</div>';
        }

        html += '</div>';
    }

    resultsBox.innerHTML = html;

    /* Scroll to results */
    resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ===== CLEAR ===== */
function clearSearch() {
    var input = document.getElementById('corrSearchInput');
    var resultsBox = document.getElementById('corrResults');
    var noResults = document.getElementById('corrNoResults');
    var toolbar = document.getElementById('resultsToolbar');
    var countEl = document.getElementById('resultsCount');
    var ctaBox = document.getElementById('postSearchCta');
    var emailBox = document.getElementById('leadCapture');

    if (input) input.value = '';
    if (resultsBox) resultsBox.innerHTML = '';
    if (noResults) noResults.style.display = 'none';
    if (toolbar) toolbar.classList.remove('visible');
    if (countEl) countEl.textContent = '0 mappings';
    if (ctaBox) ctaBox.classList.remove('visible');
    if (emailBox) emailBox.classList.remove('visible');
    lastResults = [];
}

/* ===== DEMO ===== */
function runDemo() {
    var input = document.getElementById('corrSearchInput');
    if (!input) return;
    input.value = '6201, 4711, 3511';
    searchCorrespondence();
}

/* ===== COPY ===== */
function copyResults() {
    if (lastResults.length === 0) { showToast('No results to copy'); return; }
    var lines = ['Rev.2\tRev.2 Description\tRev.3\tRev.3 Description\tMapping Type'];
    for (var i = 0; i < lastResults.length; i++) {
        var r = lastResults[i];
        for (var j = 0; j < r.rev3.length; j++) {
            var r3c = typeof r.rev3[j] === 'string' ? r.rev3[j] : r.rev3[j][0];
            lines.push(r.rev2 + '\t' + (r.desc2 || '') + '\t' + r3c + '\t' + getDesc(r3c) + '\t' + r.type);
        }
    }
    var text = lines.join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() { showToast('Copied to clipboard!'); });
    } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Copied to clipboard!');
    }
}

/* ===== DOWNLOAD CSV ===== */
function downloadCSV() {
    if (lastResults.length === 0) { showToast('No results to download'); return; }
    var rows = [['Rev.2', 'Rev.2 Description', 'Rev.3', 'Rev.3 Description', 'Mapping Type']];
    for (var i = 0; i < lastResults.length; i++) {
        var r = lastResults[i];
        for (var j = 0; j < r.rev3.length; j++) {
            var r3c = typeof r.rev3[j] === 'string' ? r.rev3[j] : r.rev3[j][0];
            rows.push([
                r.rev2,
                '"' + (r.desc2 || '').replace(/"/g, '""') + '"',
                r3c,
                '"' + getDesc(r3c).replace(/"/g, '""') + '"',
                r.type
            ]);
        }
    }
    var csv = rows.map(function(r) { return r.join(','); }).join('\n');
    var blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'caen-rev2-to-rev3.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('CSV downloaded!');
}

/* ===== LEAD CAPTURE ===== */
function submitLead() {
    var emailInput = document.getElementById('leadEmail');
    var msg = document.getElementById('leadMsg');
    if (!emailInput) return;
    var email = emailInput.value.trim();
    if (!email || email.indexOf('@') < 1) {
        showToast('Please enter a valid email');
        return;
    }
    /* Show success */
    emailInput.parentElement.style.display = 'none';
    if (msg) msg.style.display = 'block';
    showToast('Thank you — we\'ll be in touch!');
}

/* ===== STICKY BAR ===== */
function initSticky() {
    var bar = document.getElementById('stickyBar');
    if (!bar) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            bar.classList.add('visible');
        } else {
            bar.classList.remove('visible');
        }
    });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function() {

    /* Countdown */
    updateCountdown();
    setInterval(updateCountdown, 60000);

    /* FAQ clicks */
    document.querySelectorAll('.cv-faq-q').forEach(function(q) {
        q.addEventListener('click', function() { toggleFaq(this); });
    });

    /* Search on Enter */
    var input = document.getElementById('corrSearchInput');
    if (input) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                searchCorrespondence();
            }
        });
    }

    /* Sticky bar */
    initSticky();

    /* Auto-demo after 1.5s */
    setTimeout(runDemo, 1500);
});
