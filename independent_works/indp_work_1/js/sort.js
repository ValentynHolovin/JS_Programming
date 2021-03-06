let arr = [];
const quickSortTitle = "========================================== QuickSort ==========================================";
const bubbleSortTitle = "========================================== BubbleSort =========================================";

const initArr = (arr) => {
    for(let i = 0; i < 20; i++) {
        arr.push(Math.floor((Math.random() * 1000) % 100));
    }
};

const quickSort = (arr, low, high) => {
    if (low < high) {
        let current = partition(arr, low, high);
        quickSort(arr, low, current);
        quickSort(arr, current + 1, high);
    }
};

const partition = (arr, low, high) => {
    let pivot = arr[low];
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j) {
            return j;
        }

        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[j] ^ arr[i];
        arr[i] = arr[i] ^ arr[j];
    }
};

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] ^ arr[j + 1];
                arr[j + 1] = arr[j + 1] ^ arr[j];
                arr[j] = arr[j] ^ arr[j + 1];
            }
        }
    }
};

const arrPrint = (arr) => {
    console.log(arr);
};

const clearArr = () => {
    return [];
};

const doSort = (sortFunc, sortTypeName) => {
    console.log(sortTypeName);
    initArr(arr);
    arrPrint(arr);
    sortFunc(arr, 0, arr.length - 1);
    arrPrint(arr);
};

doSort(quickSort, quickSortTitle);
arr = clearArr();
doSort(bubbleSort, bubbleSortTitle);

