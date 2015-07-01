var i = 0;
var arr = ['goat','goat','goat'];
var success = 0;
var fail = 0;
for(i = 0;i<100000;i++,arr=['goat','goat','goat']){
	//자동차 랜덤 위치
	var car = Math.floor(Math.random()*3);
	arr[car] = 'car';
	
	//랜덤하게 선택
	var choice = Math.floor(Math.random()*3);
	
	
	//염소위치 알려줌
	do{	
		rm_index = Math.floor(Math.random()*3);
	}while(rm_index == car || rm_index == choice);

	//바꾸지 않고 진행
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
	//자동차 랜덤 위치
	var car = Math.floor(Math.random()*3);
	arr[car] = 'car';
	
	//랜덤하게 선택
	var choice = Math.floor(Math.random()*3);
	
	
	//염소위치 알려줌
	do{	
		rm_index = Math.floor(Math.random()*3);
	}while(rm_index == car || rm_index == choice);


	//바꾼후 진행
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