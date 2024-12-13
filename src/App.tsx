import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import LandingLayout from './components/layouts/LandingPageLayout';
import AuthLayout from './components/layouts/LoginLayout';
import Cadastro from './pages/auth/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from './components/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import PacienteLayout from './components/layouts/PacienteLayout';
import PacientePage from './pages/paciente/paciente';
import AcompanhamentoPage from './pages/acompanhamento/acompanhamento';
import AcompanhamentoLayout from './components/layouts/AcompanhamentoLayout';
import ChatSessionPage from './pages/acompanhamento/sessao';
import SessaoLayout from './components/layouts/SessaoLayout';
import InicioTriagemLayout from './components/layouts/InicioTriagem';
import PreTriagemPage from './pages/Triagem AI/Triagem';
import AssistenciaPage from './pages/Triagem AI/assistencia';


const App: React.FC = () => (
  <Router>
    <Routes>
      {/* Rotas com layout padrão */}
      <Route path="/" element={<LandingLayout><Home /></LandingLayout>}/>

      {/* Rotas de autenticação */}
      <Route path="/auth/login" element={ <AuthLayout> <Login /> </AuthLayout> }/>
      <Route path="/auth/register" element={ <AuthLayout> <Cadastro/> </AuthLayout> }/>
      <Route path="/admin/dashboard" element={ <AdminLayout> <Dashboard/> </AdminLayout> }/>
      {/*<Route path="/admin/dashboard/conteudos" element={ <AdminLayout> <CreateConteudo/> </AdminLayout> }/>*/}
      <Route path="/auth/admin/dashboard/management/users" element={ <AdminLayout> <Cadastro/> </AdminLayout> }/>
      <Route path="/admin/dashboard/settings" element={ <AdminLayout> <Dashboard/> </AdminLayout> }/>
      <Route path="/paciente/conscientizacao" element={ <PacienteLayout> <PacientePage/> </PacienteLayout> }/>
      <Route path="/paciente/acompanhamento" element={ <AcompanhamentoLayout> <AcompanhamentoPage/> </AcompanhamentoLayout> }/>
      <Route path="/paciente/sessao" element={ <SessaoLayout> <ChatSessionPage/> </SessaoLayout> }/>
      <Route path="/paciente/inicio-triagem" element={ <InicioTriagemLayout> <PreTriagemPage/> </InicioTriagemLayout> }/>
      <Route path="/paciente/assistencia" element={ <InicioTriagemLayout> <AssistenciaPage/> </InicioTriagemLayout> }/>
    </Routes>
  </Router>
);

export default App;
