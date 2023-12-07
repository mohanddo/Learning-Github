let x = [9, 8, 2, 3, 5, 7, 2, 6, 8, 4, 3, 7]

const fun = (T) => {
    let i = 0;
    let found = false;
    let first = true;
    let FI;
    let LI;
    let X;

    while(i < T.length - 1 && !found) {
        if(T[i] <= T[i+1] && first) {
            first = false;
            FI = i;
        }

        if(T[i] >= T[i+1] && !first) {
            LI = i;
            found = true;
        }
        i++
    }
    
    i = 0;

    if(((LI - FI) % 2) == 0) {
        while(i < (LI - FI) / 2) {
            X = T[FI+i];
            T[FI+i] = T[LI-i];
            T[LI-i] = X;
            i++
        }
    } else {
        while(i < Math.floor((LI - FI) / 2) + 1) {
            X = T[FI+i];
            T[FI+i] = T[LI-i];
            T[LI-i] = X;
            i++
        }
    }
    console.log(T)
    return 0
}

fun(x)
