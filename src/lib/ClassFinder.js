

export const OrganicCarbonClassFinder = (value,soiltype)=>{
    var cls=null;
    if(soiltype=="sandy"){
        if(value=>0.0 && value<=0.10){
            cls=0;
            return cls;
        }
        if(value>=0.11 && value<=0.2){
            cls=1;
            return cls;
        }
        if(value>=0.21 && value <=0.3){
            cls=2;
            return cls;
        }
        if(value>=0.31 && value <=0.45){
            cls=3;
            return cls;
        }
        if(value>=0.46 && value <=0.6){
            cls=4;
            return cls;
        }
        if(value>=0.61 && value <=0.75){
            cls=5;
            return cls;
        }
        if(value>=0.76 && value<=0.9){
            cls=6;
            return cls;
        }
        if(value>=0.91 && value<=1.10){
            cls=7;
            return cls;
        }
        if(value>= 1.11 && value<=1.3){
            cls=8;
            return cls;
        }
        if(value>=1.31 && value<1.5){
            cls=9;
            return cls;
        }
        if(value>1.5){
            return cls;
        }
    }
    if(soiltype=="clay"){
        var cls=null;
        if(value>= 0.00 && value <=0.16){
            cls=0;
            return cls;
        }
        if(value>= 0.17 && value <=0.33){
            cls=1;
            return cls;
        }
        if(value>= 0.34 && value <=0.5){
            cls=2;
            return cls;
        }
        if(value>= 0.51 && value <=0.75){
            cls=3;
            return cls;
        }
        if(value>= 0.76 && value <=1){
            cls=4;
            return cls;
        }
        if(value>= 1.01 && value <=1.25){
            cls=5;
            return cls;
        }
        if(value>= 1.26 && value <=1.5){
            cls=6;
            return cls;
        }
        if(value>=1.51  && value <=1.83){
            cls=7;
            return cls;
        }
        if(value>= 1.84 && value <=2.16){
            cls=8;
            return cls;
        }
        if(value>= 2.17 && value <=2.5){
            cls=9;
            return cls;
        }
        if(value> 2.5){
            cls=9;
            return cls;
        }
    }
    return value;
}

export const PhosphorousClassFinder = (value)=>{
    var cls = null;
    if(value>=0.0 && value <=3.0){
        cls=0;
        return cls;
    }
    if(value>=3.1 && value <=6.5){
        cls=1;
        return cls;
    }
    if(value>=6.6 && value <=10){
        cls=2;
        return cls;
    }
    if(value>=10.1 && value <=13.5){
        cls=3;
        return cls;
    }
    if(value>=13.6 && value <=17){
        cls=4;
        return cls;
    }
    if(value>=17.1 && value <=20.5){
        cls=5;
        return cls;
    }
    if(value>=20.6 && value <=24){
        cls=6;
        return cls;
    }
    if(value>=24.1 && value <=27.5){
        cls=7;
        return cls;
    }
    if(value>=27.6 && value <=31){
        cls=8;
        return cls;
    }
    if(value>=31.1 && value <=34){
        cls=9;
        return cls;
    }
    if(value>34){
        cls=9;
        return cls;
    }
}

export const PottassiumClassFinder = (value)=>{
    var cls = null;
    if(value <=35){
        cls=0;
        return cls;
    }
    if(value>=36 && value <=75){
        cls=1;
        return cls;
    }
    if(value>=76 && value <=115){
        cls=2;
        return cls;
    }
    if(value>=116 && value <=155){
        cls=3;
        return cls;
    }
    if(value>=156 && value <=195){
        cls=4;
        return cls;
    }
    if(value>=196 && value <=235){
        cls=5;
        return cls;
    }
    if(value>=236 && value <=275){
        cls=6;
        return cls;
    }
    if(value>=276 && value <=315){
        cls=7;
        return cls;
    }
    if(value>=316 && value <=355){
        cls=8;
        return cls;
    }
    if(value>=356 && value <=395){
        cls=9;
        return cls;
    }
    if(value>395){
        cls=9;
        return cls;
    }
}