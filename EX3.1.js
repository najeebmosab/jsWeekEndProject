function GrowthOfPopulation(startPircinteg,pircinteg,increases,endNumber){
    let i  = 0;
    for (i = 0; startPircinteg < endNumber; i++) {
        
        startPircinteg = startPircinteg + (startPircinteg * (pircinteg/100)) + increases;
    }
    console.log(i)
}

GrowthOfPopulation(1000,2,50,1200);
GrowthOfPopulation(1500,5,100,5000);
GrowthOfPopulation(1500000, 2.5, 10000, 2000000);