import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
			//Valores Iniciales que contendra el formulario
				initialValues={{
					nombre: '',
					correo: '',
                    dui: '',
                    fecha: '',
                    nacionalidad: '',
                    direccion: '',
                    municipio: '',
                    departamento: ''
				}}
				//Validacion
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
                    
                    //Validacion DUI
                    if(!valores.dui){
						errores.dui = 'Por favor ingresa el DUI'
					} else if(!/^[0-9-]+$/.test(valores.dui)){
						errores.dui = 'El DUI solo puede contener numeros y guion'
					}

                    //Validacion de Fecha
                    if(!valores.fecha){
						errores.fecha = 'Por favor ingresar la fecha de nacimiento'
					} else if(!/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/.test(valores.fecha)){
						errores.fecha = 'Solo se afecta el formado de dd/mm/yyyy'
					}

                    //Validacion de Nacionalidad
                    if(!valores.nacionalidad){
						errores.nacionalidad = 'Por favor ingresa la nacionalidad'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nacionalidad)){
                        errores.nacionalidad = 'La nacionalidad solo puede contener letras y espacios'
                    }
					
                    //Validacion de Direccion
                    if(!valores.direccion){
						errores.direccion = 'Por favor ingresa una direccion'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.direccion)){
                        errores.direccion = 'El nombre solo puede contener letras y espacios'
                    }

                    //Validacion del Municipio
                    if(!valores.municipio){
						errores.municipio = 'Por favor ingresa el municipio del paciente'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.municipio)){
                        errores.municipio = 'El municipio solo puede contener letras y espacios'
                    }
					
                    //Validacion del Departamento
                    if(!valores.departamento){
						errores.departamento = 'Por favor ingresa el departamento del paciente'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.departamento)){
                        errores.departamento = 'El departamento solo puede contener letras y espacios'
                    }
					

					return errores;
				}}
				// Propiedad se activa al enviar el formulario
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}

				//parte de formulario para ingresar apartados de Formik
			>
				{( {errors} ) => (
					<Form className="formulario">
                        <div>
                            <h1 className='text-center'>CLINICA DENTAL MIS DIENTITOS</h1>
                        </div>

						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Paciente"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">DUI</label>
							<Field
								type="text" 
								id="dui" 
								name="dui" 
								placeholder=""
							/>
							<ErrorMessage name="dui" component={() => (<div className="error">{errors.dui}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">Fecha de Nacimiento</label>
							<Field
								type="text" 
								id="fecha" 
								name="fecha" 
								placeholder="DD/MM/YYYY"
							/>
							<ErrorMessage name="fecha" component={() => (<div className="error">{errors.fecha}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">Nacionalidad</label>
							<Field
								type="text" 
								id="nacionalidad" 
								name="nacionalidad" 
								placeholder=""
							/>
							<ErrorMessage name="nacionalidad" component={() => (<div className="error">{errors.nacionalidad}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">Direccion</label>
							<Field
								type="text" 
								id="direccion" 
								name="direccion" 
								placeholder=""
							/>
							<ErrorMessage name="direccion" component={() => (<div className="error">{errors.direccion}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">Municipio</label>
							<Field
								type="text" 
								id="municipio" 
								name="municipio" 
								placeholder=""
							/>
							<ErrorMessage name="municipio" component={() => (<div className="error">{errors.municipio}</div>)} />
						</div>
                        <div>
							<label htmlFor="nombre">Departamento</label>
							<Field
								type="text" 
								id="departamento" 
								name="departamento" 
								placeholder=""
							/>
							<ErrorMessage name="departamento" component={() => (<div className="error">{errors.departamento}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<Field name="pais" as="select">
								<option value="mexico">El salvador</option>
								<option value="España">Mexico</option>
								<option value="Argentina">Argentina</option>
							</Field>
						</div>

						<div>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>
							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Observacion." />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default Formulario;