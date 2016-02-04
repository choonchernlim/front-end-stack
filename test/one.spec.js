import {expect} from 'chai';
import one from '../src/one';

describe( 'my test', () => {
    it( 'simple expects', () => {
        expect( one() ).to.equal( 'abc' );
    } );
} );
