var i = 0;
var arr = ['goat','goat','goat'];
var success = 0;
var fail = 0;
for(i = 0;i<100000;i++,arr=['goat','goat','goat']){
	//�ڵ��� ���� ��ġ
	var car = Math.floor(Math.random()*3);
	arr[car] = 'car';
	
	//�����ϰ� ����
	var choice = Math.floor(Math.random()*3);
	
	
	//������ġ �˷���
	do{	
		rm_index = Math.floor(Math.random()*3);
	}while(rm_index == car || rm_index == choice);

	//�ٲ��� �ʰ� ����
	if(arr[choice] == 'car'){
		success++;
	}
	else{
		fail++;
	}	
}

console.log("case : don't change")
console.log("success " + success);
console.log("fail " + fail);
console.log();

var success = 0;
var fail = 0;
for(i = 0;i<100000;i++,arr=['goat','goat','goat']){
	//�ڵ��� ���� ��ġ
	var car = Math.floor(Math.random()*3);
	arr[car] = 'car';
	
	//�����ϰ� ����
	var choice = Math.floor(Math.random()*3);
	
	
	//������ġ �˷���
	do{	
		rm_index = Math.floor(Math.random()*3);
	}while(rm_index == car || rm_index == choice);


	//�ٲ��� ����
	choice = 3-(rm_index+choice);
	
	if(arr[choice] == 'car'){
		success++;
	}
	else{
		fail++;
	}	
}

console.log("case : change")
console.log("success " + success);
console.log("fail " + fail);