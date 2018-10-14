
//参数：验证的数据类型
//要验证的字符串

function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
    switch(type) {				//判断该类型       
		  case 'user'://账户名只能用数字字母下划线，数字不能开头，长度在6~15之间。
			  var reg = /^[_a-zA-Z]\w{5,14}$/; 
			  break;
			  
		  case 'Email'://多位字母和数字混合，@，然后，多位字母和数字混合，接着.com|.cn|.net
			  var reg =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(.com|.cn|.net)$/;
			  break;
			  
		  case 'post':
			  var reg = /^61\d{8}(0[1-9]|1[0-2])\d{2}\d{3}[\dX]$/; 
			  break;
			  
		  case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
			  var reg = /^1[34578]\d{9}$/;//11位数，第一位只是1，第二位是[34578]里的一个，
			  break;  					//接着[0-9]的任意一个连续匹配9次。
			  
		  case 'Email'://多位字母和数字混合，@，然后，多位字母和数字混合，接着.com|.cn|.net
			  var reg =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(.com|.cn|.net)$/;
			  break;
			  
	      case 'card':
			  var reg = /^61\d{8}(0[1-9]|1[0-2])\d{2}\d{3}[\dX]$/; 
			  break;
			  
		    case 'birthday':
			  //var reg = /^\d{4}([\.\-\/]\d{2}){2}$/; 
			  var reg = /^\d{4}(((\.\d{2}){2})|((\/\d{2}){2})|((\-\d{2}){2}))$/;
			  break;
			  
		  case 'birthday':
			  //var reg = /^\d{4}([\.\-\/]\d{2}){2}$/; 
			  var reg = /^\d{4}(((\.\d{2}){2})|((\/\d{2}){2})|((\-\d{2}){2}))$/;
			  break;
			  
		  case 'ip':
			  //var reg = /^\d{4}([\.\-\/]\d{2}){2}$/; 
			  var reg = /^\d{2}\.\d{2}\.\d{3}\.\d+$/;
			  break;
			  
		  default:;
	}
	return reg.test(value);
	/*
	if(reg.test(value)==true){
		return true;
	}else{
		return false;
	}
	*/
}

