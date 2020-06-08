// esse aqruivo ele serve para definir o tipo para que o typescript consiga enxergar as propriedads passadas pelos teams
// alem disso tem que por la no tsconfig o link para ele compilar esse arquivo
// declare module é para sobrescrever um tipo ja existente
import 'styled-components';
declare module 'styled-components'{
    export interface DefaultTheme{
            title: string;
        
            colors: {
                primary: string;
                secundary: string;
        
                background: string;
                text: string;
            },
        
    }
}