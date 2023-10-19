function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add5(10);
console.log(result);



// まずはスコープについてですね。addNumberはaddNumberFactoryの関数スコープに属していますので、addNumberFactoryの外側から呼ぶことはできません。

function addNumberFactory(num) {
  function addNumber(value) {
    return num + value
  }
  return addNumber
}
// 今回addNumberをreturnの値として返していますので、const t = addNumberFactory(4); この式のtの部分がaddNumberということになります。

// この場合ですとtにaddNumberが格納されている状態となるため、以下のように実行するとi = 9となります。

const t = addNumberFactory(4);
const i = t(5); // <- この時点でaddNumberにはtが入っており、更にaddNumberのnumは4となる。
// そのため、4 + 5 で i = 9となります。
