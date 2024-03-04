function MakeMultiFilter (originArray){ 
        let currentArray = [...originArray];
        return function arrayFilterer(filterCriteria, callback) {
            if (typeof filterCriteria !== 'function') {
              return currentArray;
            } currentArray = currentArray.filter(filterCriteria);
            while (typeof callback === 'function'){
                callback(currentArray);
            }
        }
}