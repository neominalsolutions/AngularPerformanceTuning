/// <reference lib="webworker" />

// JS Thread olarak çalıştığı için sadece hesaplama işlemlerini worker service bırakmalıyız.

addEventListener('message', (message: any) => {
  console.log('num', message.data.num);

  let fact = 1;
  for (let i = 1; i <= message.data.num; i++) {
    fact = fact * i;
  }

  console.log(`faktoriel değeri ${fact}`);

  postMessage(fact);
});
