import React from 'react';
import { IoMdRemoveCircle } from 'react-icons/io';
import product3 from '../../../../images/product-3.jpg';
import product4 from '../../../../images/product-4.jpg';

interface Props {}

const CheckoutInfo = (props: Props) => {
	return (
		<div>
			<section className='ftco-section'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-7 ftco-animate'>
							<form action='#' className='billing-form'>
								<h3 className='mb-4 billing-heading'>
									Billing Details
								</h3>
								<div className='row align-items-end'>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Delivery Address</label>
											<input
												type='text'
												className='form-control'
												placeholder='House number and street name'
											/>
										</div>
									</div>
								</div>

								<label>List items</label>
								<div className='cart-detail cart-total p-3 p-md-4'>
									<div className='row'>
										<div className='col-md-12 ftco-animate'>
											<div className='cart-list'>
												<table className='table'>
													<thead className='thead-primary'>
														<tr className='text-center'>
															<th>&nbsp;</th>
															<th>&nbsp;</th>
															<th>
																Product name
															</th>
															<th>Price</th>
															<th>Quantity</th>
															<th>Total</th>
														</tr>
													</thead>
													<tbody>
														<tr className='text-center'>
															<td className='product-remove'>
																<span
																	style={{
																		fontSize:
																			'larger',
																	}}
																>
																	x
																</span>
															</td>

															<td className='image-prod'>
																<div
																	className='img'
																	style={{
																		backgroundImage: `url(${product3})`,
																	}}
																></div>
															</td>

															<td className='product-name'>
																<h3>
																	Bell Pepper
																</h3>
																<p>
																	Far far
																	away, behind
																	the word
																	mountains,
																	far from the
																	countries
																</p>
															</td>

															<td className='price'>
																$4.90
															</td>

															<td className='quantity'>
																<div className='input-group mb-3'>
																	<input
																		type='number'
																		name='quantity'
																		className='quantity form-control input-number'
																		defaultValue='1'
																		min='1'
																		max='100'
																	/>
																</div>
															</td>

															<td className='total'>
																$4.90
															</td>
														</tr>

														<tr className='text-center'>
															<td className='product-remove'>
																<span
																	style={{
																		fontSize:
																			'larger',
																	}}
																>
																	x
																</span>
															</td>

															<td className='image-prod'>
																<div
																	className='img'
																	style={{
																		backgroundImage: `url(${product4})`,
																	}}
																></div>
															</td>

															<td className='product-name'>
																<h3>
																	Bell Pepper
																</h3>
																<p>
																	Far far
																	away, behind
																	the word
																	mountains,
																	far from the
																	countries
																</p>
															</td>

															<td className='price'>
																$15.70
															</td>

															<td className='quantity'>
																<div className='input-group mb-3'>
																	<input
																		type='number'
																		name='quantity'
																		className='quantity form-control input-number'
																		defaultValue='1'
																		min='1'
																		max='100'
																	/>
																</div>
															</td>

															<td className='total'>
																$15.70
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className='col-xl-5'>
							<div className='row mt-5 pt-3'>
								<div className='col-md-12 d-flex mb-5'>
									<div className='cart-detail cart-total p-3 p-md-4'>
										<h3 className='billing-heading mb-4'>
											Cart Total
										</h3>
										<p className='d-flex'>
											<span>Subtotal</span>
											<span>$20.60</span>
										</p>
										<p className='d-flex'>
											<span>Delivery</span>
											<span>$0.00</span>
										</p>

										<hr />
										<p className='d-flex total-price'>
											<span>Total</span>
											<span>$17.60</span>
										</p>
									</div>
								</div>
								<div className='col-md-12'>
									<div className='cart-detail p-3 p-md-4'>
										<h3 className='billing-heading mb-4'>
											Payment Method
										</h3>
										<div className='form-group'>
											<div className='col-md-12'>
												<div className='radio'>
													<label>
														<input
															type='radio'
															name='optradio'
															className='mr-2'
														/>{' '}
														COD
													</label>
												</div>
											</div>
										</div>
										<div className='form-group'>
											<div className='col-md-12'>
												<div className='radio'>
													<label>
														<input
															type='radio'
															name='optradio'
															className='mr-2'
														/>{' '}
														VN Pay
													</label>
												</div>
											</div>
										</div>
										<div className='form-group'>
											<div className='col-md-12'>
												<div className='radio'>
													<label>
														<input
															type='radio'
															name='optradio'
															className='mr-2'
														/>{' '}
														Paypal
													</label>
												</div>
											</div>
										</div>
										<div className='form-group'>
											<div className='col-md-12'>
												<div className='checkbox'>
													<label>
														<input
															type='checkbox'
															value=''
															className='mr-2'
														/>{' '}
														I have read and accept
														the terms and conditions
													</label>
												</div>
											</div>
										</div>
										<p>
											<a
												href='#'
												className='btn btn-primary py-3 px-4'
											>
												Place an order
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CheckoutInfo;
