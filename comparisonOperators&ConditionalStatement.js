function greetings( ){
	// взимаме въведената от потребителя стойност за град:
	var userTown = document.getElementById('town').value;			 
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Task 1: Изпишете в конзолата съдържанието на променливата userTown
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // console.log(userTown);
	
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Task 2:
	// ако потребителят е избрал 'София', то да се изпише в конзолата:
    // "Здравей!"
     if(userTown ==="София"){
         console.log("Здравей!");
     }else if (userTown === "Париж"){
         console.log("Solut");
     } else{
         console.log("Hi");
     }

	// ако потребителят е избрал 'Париж', то да се изпише в конзолата:
	// "Salut!"	

	// ако потребителят е избрал 'London', то да се изпише в конзолата:
	// "Hi!"
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	
	// внимавайте, да не изтриете затварящата '}' фигурна скоба по-долу :)
}
