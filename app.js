const arrayOfQuotes = 
[
    {'author': 'Jim Rohn', 
     'quote': 'Čuvajte se onoga što postajete u potrazi za onim što želite.'
    },
    {'author': 'Epictetus', 
     'quote': 'Nije važno što vam se događa, već kako reagirate na to.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'Najbolja osveta je veliki uspjeh.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'Promašite 100% udaraca koje ne napravite.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Srdžba je poput pijenja otrova i čekanja da vaši neprijatelji umru.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Ne shvaćajte život previše ozbiljno. Nećete izaći živi.'
    },
	{'author': 'Albert Einstein', 
     'quote': 'Slabi ljudi se osvećuju. Snažni ljudi opraštaju. Inteligentni ljudi ignoriraju.'
    },
	{'author': 'Buddha', 
     'quote': 'Neispunjavanje želje je patnja. Mudro je ne željeti.'
    },
	{'author': 'Bruce Lee', 
     'quote': 'Ako previše vremena provedeš razmišljajući o nekoj stvari, nikada tu stvar nećeš završiti.'
    },
	{'author': 'Friedrich Nietzsche', 
     'quote': 'Svako posjeduje upravo onoliko sujete koliko mu nedostaje razuma.'
    },
	{'author': 'Lao Tse', 
     'quote': 'Svaka stvar zastari pošto je dostigla vrhunac.'
    },
	{'author': 'Mahatma Gandhi', 
     'quote': 'Govori samo ako će to popraviti tišinu.'
    },
];

function generateQuote()
{
	var randomNumber = Math.random()*arrayOfQuotes.length + 1;
	const random = Number.parseInt(randomNumber);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `${arrayOfQuotes[random].author}`; 
}