import chai       from 'chai'
import sinon      from 'sinon'
import sinonChai  from 'sinon-chai'
import chaiString from 'chai-string'
import faker      from 'faker'

chai.use(sinonChai)
chai.use(chaiString)

faker.locale = 'en_AU'
