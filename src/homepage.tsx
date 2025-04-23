const GMMotorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">GM Motors</h1>
        <img src="https://www.gm.com/etc/designs/gbs/components/topbar/img/GM-logo-2021.png" alt="GM Logo" className="w-32 mx-auto mb-4" />
      </header>

      {/* Features / Models Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Model Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2025/1MC26/1MC26__4LT/GJV_0ST_1MP_1NF_1SZ_2NF_2ST_3ST_4LT_4NK_4ST_5A7_5C6_5FC_5ST_6X1_7X1_8X2_9L3_9X2_A2X_A69_A70_A7J_ACH_AED_AEO_AEQ_AGJ_AIB_AIF_AIM_AKK_AKO_AL0_AL9_AQP_AR9_ARU_ARW_AS2_ASV_AT9_AU3_AVI_AXG_AXP_AYD_BAG_BAH_BKG_BKL_BSL_C23_C25_C49_C59_C68_C75_CTB_CTT_D06_D67_D75_DA5_DD8_DEG_DMA_DP6_E21_E28_E91_EC5_EF7_EN0_EPH_FE1_FE9_FJP_H9F_HB9_HS1_IKP_ISA_IVE_J25_JBO_JCF_JSW_K12_K28_K3Z_K7A_KAG_KH8_KI3_KRV_KSG_KTI_KWP_LHD_MAH_MF1_N37_N53_NAM_NCH_NDC_NF6_NJ1_NW9_P9D_PSC_PZ8_QBX_R7T_R9N_RSR_RT9_S78_SAL_SBK_SLM_T4L_T61_T83_T8Z_TAU_TB8_TCP_TDA_TGE_TQ5_TR0_TRB_TT9_TUJ_U27_U2K_U5G_UBI_UBJ_UBK_UC3_UD7_UE1_UE4_UEN_UEU_UFA_UFB_UGN_UH5_UHG_UHH_UIT_UJC_UJN_UKI_UKK_UKM_UKT_UMN_UOW_UQF_UQI_UQL_URF_URW_UTJ_UUA_UUT_UV2_UVX_UVZ_V07_V6K_V8D_V92_VAV_VEE_VIX_VJQ_VJR_VK3_VNU_VRD_VRF_VRG_VRH_VRJ_VRK_VRL_VRM_VRN_VRR_VV4_WMZ_WU5_X0C_XL8_XRD_Y7C_YM8_ZFT_ZPNgmds4.jpg&v=deg43&std=true&country=US&removeCat=&transparentBackgroundPng=true"
              alt="Model S"
              className="w-full object-contain h-48"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Model S</h3>
              <p className="text-gray-600 mb-4">Electric Sedan with unmatched performance.</p>
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Model Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2025/1MB48/1MB48__2LT/GXD_0ST_1MP_1NF_1SZ_2LT_2NF_2ST_3ST_4CT_4ST_5A7_5FC_5ST_6X1_7X1_8X2_9L3_9X2_A2X_A7H_ACH_AGJ_AKO_AL0_AL9_AQP_AR9_ARU_ARW_AS2_AVJ_AXP_AYD_BAG_BKG_BKL_BSN_C13_C1H_C68_C70_CB3_CTB_CTT_D06_D67_D75_DA5_DD8_DEG_DLF_DP6_EC3_EF7_EKD_EN0_EPH_FE1_FE9_FJP_FWD_HS1_IKP_ISA_IVE_J25_JSV_K12_K28_K3Z_K4C_KAG_KC8_KI3_KRV_KSG_KTI_LHD_MAH_MF1_N37_N53_NAM_NCH_NF6_P9D_PDE_PSC_PZ8_QLU_R7T_R9N_REH_RSR_SAL_SBK_SLM_T8Z_TAB_TCP_TDG_TDM_TGC_TQ5_U05_U2K_U5G_UBI_UD7_UE1_UE4_UEN_UEU_UFB_UGD_UGN_UH5_UIT_UKI_UKK_UKM_UKT_UMN_UOW_UQF_UQK_URF_URW_UTJ_UUA_UV2_UV4_UVX_UVZ_V07_V8D_V8P_V92_VJQ_VJR_VK3_VRD_VRF_VRG_VRH_VRJ_VRK_VRL_VRM_VRN_VRR_WLM_WMZ_X0B_XL8_Y19_ZL3gmds4.jpg&v=deg43&std=true&country=US&removeCat=&transparentBackgroundPng=true"
              alt="Model X"
              className="w-full object-contain h-48"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Model X</h3>
              <p className="text-gray-600 mb-4">Luxury SUV with Falcon Wing doors.</p>
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Model Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2025/1MM48/1MM48__2RS/GNT_0ST_1MP_1NF_1SZ_2NF_2RS_2ST_3ST_4ST_4TG_5A7_5FC_5ST_6K5_6X1_7X1_8X2_9L3_9X2_A2X_A45_A7J_ACH_AGJ_AKO_AL0_AL9_AQP_AR9_ARU_ARW_AS2_AS3_AT9_AVJ_AXP_AYD_BAG_BKG_BKL_BOR_BSX_C13_C70_CAJ_CAV_CB2_CJ2_CMO_CTB_CTT_CWA_D06_D67_D75_DA5_DEG_DLF_DP6_DRZ_EC3_EF7_EN0_EPH_ESU_F_FE1_FE9_FJP_HB6_HS1_IKP_ISA_IVE_J25_JSV_K12_K28_K3Z_K4C_KAG_KC8_KCB_KI3_KRV_KSG_KU9_LHD_MAH_MF1_N37_N5C_NAM_NCH_NF6_P9D_PCI_PCM_PCU_PZ8_QLT_R6P_R7T_R9M_R9N_RFD_RIA_RSR_RVV_S78_SAL_SBK_SDR_SHX_SLM_T8Z_TAU_TCP_TDG_TDM_TGE_TQ5_U05_U2K_U5G_UBI_UCV_UE1_UE4_UED_UEN_UEU_UFB_UG1_UGD_UGN_UH5_UKI_UKK_UKL_UKT_UKZ_ULM_UMN_UOW_UQF_UQK_URF_URW_UTJ_UUA_UV2_UV4_UV6_UVX_UVZ_V07_V8D_V92_VAB_VJQ_VJR_VK3_VLG_VQK_VQQ_VRD_VRF_VRG_VRH_VRJ_VRK_VRL_VRM_VRN_VRR_W2D_WLM_WMZ_X0C_XL8_XRD_YM8gmds4.jpg&v=deg43&std=true&country=US&removeCat=&transparentBackgroundPng=true"
              alt="Model E"
              className="w-full object-contain h-48"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Model E</h3>
              <p className="text-gray-600 mb-4">Compact EV made for city driving.</p>
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} GM Motors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GMMotorsPage;
