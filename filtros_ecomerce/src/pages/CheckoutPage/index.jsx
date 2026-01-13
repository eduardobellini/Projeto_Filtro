import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("personal");
  const [paymentMethod, setPaymentMethod] = useState("pix");

  const [personalData, setPersonalData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cpf: "",
    phone: "",
  });

  const [deliveryData, setDeliveryData] = useState({
    cep: "",
    street: "",
    number: "",
    complement: "",
    recipient: "",
  });

  const handlePersonalChange = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeliveryChange = (e) => {
    setDeliveryData({
      ...deliveryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBack = () => {
    if (currentStep === "delivery") {
      setCurrentStep("personal");
    } else if (currentStep === "payment") {
      setCurrentStep("delivery");
    } else {
      navigate("/carrinho");
    }
  };

  const handleNext = () => {
    if (currentStep === "personal") {
      setCurrentStep("delivery");
    } else if (currentStep === "delivery") {
      setCurrentStep("payment");
    } else {
      console.log("Pedido finalizado");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        sticky={false}
      />

      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-3xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Meu Pedido
          </h1>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 lg:p-8 mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900">
                Dados Pessoais
              </h2>
              {currentStep !== "personal" && (
                <span className="text-xs xs:text-sm font-bold text-gray-900">
                  Preenchido
                </span>
              )}
            </div>

            {currentStep === "personal" && (
              <>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={personalData.email}
                      onChange={handlePersonalChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Primeiro nome
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={personalData.firstName}
                      onChange={handlePersonalChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Último nome
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={personalData.lastName}
                      onChange={handlePersonalChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      CPF
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={personalData.cpf}
                      onChange={handlePersonalChange}
                      placeholder="000.000.000-00"
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Celular
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={personalData.phone}
                      onChange={handlePersonalChange}
                      placeholder="(00) 00000-0000"
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row justify-end gap-3 xs:gap-4 mt-6 sm:mt-8">
                  <button
                    onClick={handleBack}
                    className="w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg text-sm xs:text-base font-medium hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-gray-900 text-white rounded-lg text-sm xs:text-base font-medium hover:bg-gray-800 transition-colors"
                  >
                    Próximo
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 lg:p-8 mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900">
                Entrega
              </h2>
              {currentStep === "payment" && (
                <span className="text-xs xs:text-sm font-bold text-gray-900">
                  Preenchido
                </span>
              )}
            </div>

            {currentStep === "delivery" ? (
              <>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      CEP
                    </label>
                    <input
                      type="text"
                      name="cep"
                      value={deliveryData.cep}
                      onChange={handleDeliveryChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Rua
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={deliveryData.street}
                      onChange={handleDeliveryChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Número
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={deliveryData.number}
                      onChange={handleDeliveryChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Complemento ou referência
                    </label>
                    <input
                      type="text"
                      name="complement"
                      value={deliveryData.complement}
                      onChange={handleDeliveryChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm text-gray-700 mb-1.5 sm:mb-2 font-medium">
                      Destinatário
                    </label>
                    <input
                      type="text"
                      name="recipient"
                      value={deliveryData.recipient}
                      onChange={handleDeliveryChange}
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm xs:text-base text-gray-900 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row justify-end gap-3 xs:gap-4 mt-6 sm:mt-8">
                  <button
                    onClick={handleBack}
                    className="w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg text-sm xs:text-base font-medium hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-gray-900 text-white rounded-lg text-sm xs:text-base font-medium hover:bg-gray-800 transition-colors"
                  >
                    Próximo
                  </button>
                </div>
              </>
            ) : (
              currentStep === "personal" && (
                <p className="text-xs xs:text-sm text-gray-600">
                  Aguardando preenchimento dos dados
                </p>
              )
            )}
          </div>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 lg:p-8">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Área de pagamento
            </h2>

            {currentStep === "payment" ? (
              <>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <button
                    onClick={() => setPaymentMethod("pix")}
                    className={`flex-1 min-w-[100px] px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg text-sm xs:text-base font-medium transition-colors ${
                      paymentMethod === "pix"
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    PIX
                  </button>
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 min-w-[100px] px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg text-sm xs:text-base font-medium transition-colors ${
                      paymentMethod === "card"
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Crédito/Débito
                  </button>
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`flex-1 min-w-[100px] px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg text-sm xs:text-base font-medium transition-colors ${
                      paymentMethod === "paypal"
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    PayPal
                  </button>
                </div>

                {paymentMethod === "pix" && (
                  <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-center mb-6 sm:mb-8">
                      <svg
                        className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 text-teal-500"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      >
                        <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.5H112.6C132.6 391.5 151.5 383.7 165.7 369.5L242.4 292.5zM262.5 218.9C257.1 224.3 247.8 224.3 242.4 218.9L165.7 142.1C151.5 127.9 132.6 120.1 112.6 120.1H103.3L200.7 22.63C231.1-7.537 280.3-7.537 310.6 22.63L407.7 120.1H392.6C372.6 120.1 353.7 127.9 339.5 142.1L262.5 218.9zM112.6 142.1C126.4 142.1 139.1 148.3 149.7 158.1L226.4 236.1C233.6 243.2 268.3 243.2 275.5 236.1L352.2 158.1C362.3 148.3 375.5 142.1 389.6 142.1H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H389.6C375.5 368.9 362.3 362.7 352.2 352.9L275.5 275.2C268.3 268.1 233.6 268.1 226.4 275.2L149.7 352.9C139.1 362.7 126.4 368.9 112.6 368.9H80.78L22.63 310.6C-7.537 280.3-7.537 231.1 22.63 200.8L80.78 142.1H112.6z" />
                      </svg>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 xs:w-10 xs:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm xs:text-base">
                          1
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-xs xs:text-sm sm:text-base text-gray-700">
                            Aperte em{" "}
                            <span className="font-semibold">
                              Finalizar compra
                            </span>{" "}
                            para gerar o código QR
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 xs:w-10 xs:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm xs:text-base">
                          2
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-xs xs:text-sm sm:text-base text-gray-700">
                            Confira os dados e realize o pagamento pelo app do
                            seu banco
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "card" && (
                  <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6 lg:p-8">
                    <p className="text-xs xs:text-sm sm:text-base text-gray-700 text-center">
                      Formulário de pagamento com cartão será implementado aqui
                    </p>
                  </div>
                )}

             
                {paymentMethod === "paypal" && (
                  <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6 lg:p-8">
                    <p className="text-xs xs:text-sm sm:text-base text-gray-700 text-center">
                      Integração com PayPal será implementada aqui
                    </p>
                  </div>
                )}

                <div className="flex flex-col xs:flex-row justify-end gap-3 xs:gap-4 mt-6 sm:mt-8">
                  <button
                    onClick={handleBack}
                    className="w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg text-sm xs:text-base font-medium hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-full xs:w-auto px-6 xs:px-8 py-2.5 xs:py-3 bg-gray-900 text-white rounded-lg text-sm xs:text-base font-medium hover:bg-gray-800 transition-colors"
                  >
                    Próximo
                  </button>
                </div>
              </>
            ) : (
              <p className="text-xs xs:text-sm text-gray-600">
                Aguardando preenchimento dos dados
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
