/* GEOTESTUZ — Test baza savollari (Geografiyadan tushgan testlar)
   Ochiq testlar: GEO_OCHIQ.push([savol, [A,B,C,D], to‘g‘ri_javob_raqami(0=A,1=B,2=C,3=D), rasm_kaliti])
   Yozma savollar: GEO_YOZMA.push([...]) va GEO_KALIT.push(javob)
   Tuzuvchi: Safarboyev Husanjon */
var GEO_OCHIQ=[],GEO_YOZMA=[],GEO_KALIT=[];
var GEO_RASM={
"gx_v4": "rasmlar/gx_v4.webp",
"gx_v14": "rasmlar/gx_v14.webp",
"gx_v16": "rasmlar/gx_v16.webp",
"gx_v18": "rasmlar/gx_v18.webp",
"gx_v20": "rasmlar/gx_v20.webp",
"gx_v30": "rasmlar/gx_v30.webp",
"gx_v32": "rasmlar/gx_v32.webp",
"gx_v33": "rasmlar/gx_v33.webp",
"gx_v34": "rasmlar/gx_v34.webp",
"gx_v35": "rasmlar/gx_v35.webp",
"gx_w36": "rasmlar/gx_w36.webp",
"gx_w37": "rasmlar/gx_w37.webp",
"gx_w40": "rasmlar/gx_w40.webp",
"gx_w41": "rasmlar/gx_w41.webp",
"gx_w42": "rasmlar/gx_w42.webp",
"gx_w43": "rasmlar/gx_w43.webp",
"gx_w45": "rasmlar/gx_w45.webp",
"gx2_v6": "rasmlar/gx2_v6.webp",
"gx2_v14": "rasmlar/gx2_v14.webp",
"gx2_v18": "rasmlar/gx2_v18.webp",
"gx2_v26": "rasmlar/gx2_v26.webp",
"gx2_v31": "rasmlar/gx2_v31.webp",
"gx2_v33": "rasmlar/gx2_v33.webp",
"gx2_v34": "rasmlar/gx2_v34.webp",
"gx2_v35b": "rasmlar/gx2_v35b.webp",
"gx2_v35m": "rasmlar/gx2_v35m.webp",
"gx2_w36": "rasmlar/gx2_w36.webp",
"gx2_w38": "rasmlar/gx2_w38.webp",
"gx2_w40": "rasmlar/gx2_w40.webp",
"gx2_w41": "rasmlar/gx2_w41.webp",
"gx2_w42": "rasmlar/gx2_w42.webp",
"gx2_w43": "rasmlar/gx2_w43.webp",
"gx2_w44": "rasmlar/gx2_w44.webp",
"gx2_w45": "rasmlar/gx2_w45.webp",
"gx3_v17": "rasmlar/gx3_v17.webp",
"gx3_v18": "rasmlar/gx3_v18.webp",
"gx4_v1": "rasmlar/gx4_v1.webp",
"gx4_v5": "rasmlar/gx4_v5.webp",
"gx4_v6": "rasmlar/gx4_v6.webp",
"gx4_v16": "rasmlar/gx4_v16.webp",
"gx4_v19": "rasmlar/gx4_v19.webp",
"gx4_v20": "rasmlar/gx4_v20.webp",
"gx4_v30": "rasmlar/gx4_v30.webp",
"gx4_v31": "rasmlar/gx4_v31.webp",
"gx4_v33": "rasmlar/gx4_v33.webp",
"gx4_v34": "rasmlar/gx4_v34.webp",
"gx4_v35": "rasmlar/gx4_v35.webp",
"gx4_w36": "rasmlar/gx4_w36.webp",
"gx4_w37": "rasmlar/gx4_w37.webp",
"gx4_w38": "rasmlar/gx4_w38.webp",
"gx4_w39": "rasmlar/gx4_w39.webp",
"gx4_w40": "rasmlar/gx4_w40.webp",
"gx4_w41": "rasmlar/gx4_w41.webp",
"gx4_w42": "rasmlar/gx4_w42.webp",
"gx4_w44": "rasmlar/gx4_w44.webp",
"gx4_w45": "rasmlar/gx4_w45.webp",
"gx5_v1": "rasmlar/gx5_v1.webp",
"gx6_v4": "rasmlar/gx6_v4.webp",
"gx7_v1": "rasmlar/gx7_v1.webp",
"gx7_v2": "rasmlar/gx7_v2.webp",
"gx7_v3": "rasmlar/gx7_v3.webp",
"gx7_v4": "rasmlar/gx7_v4.webp",
"gx7_v5": "rasmlar/gx7_v5.webp",
"gx7_v8": "rasmlar/gx7_v8.webp",
"gx7_v14": "rasmlar/gx7_v14.webp",
"gx7_v15": "rasmlar/gx7_v15.webp",
"gx7_v16": "rasmlar/gx7_v16.webp",
"gx7_v17": "rasmlar/gx7_v17.webp",
"gx7_v22": "rasmlar/gx7_v22.webp",
"gx7_v25": "rasmlar/gx7_v25.webp",
"gx7_v27": "rasmlar/gx7_v27.webp",
"gx7_v28": "rasmlar/gx7_v28.webp",
"gx8_v7": "rasmlar/gx8_v7.webp",
"gx8_v9": "rasmlar/gx8_v9.webp",
"gx8_v10": "rasmlar/gx8_v10.webp",
"gx8_v11": "rasmlar/gx8_v11.webp",
"gx8_v12": "rasmlar/gx8_v12.webp",
"gx8_v13": "rasmlar/gx8_v13.webp",
"gx8_v14": "rasmlar/gx8_v14.webp",
"gx8_v15": "rasmlar/gx8_v15.webp",
"gx8_v16": "rasmlar/gx8_v16.webp",
"gx8_v17": "rasmlar/gx8_v17.webp",
"gx8_v19": "rasmlar/gx8_v19.webp",
"gx8_v27": "rasmlar/gx8_v27.webp",
"gx8_v30": "rasmlar/gx8_v30.webp",
"gx8_v34": "rasmlar/gx8_v34.webp",
"gx8_v35": "rasmlar/gx8_v35.webp",
"gx8_w36": "rasmlar/gx8_w36.webp",
"gx8_w37": "rasmlar/gx8_w37.webp",
"gx8_w38": "rasmlar/gx8_w38.webp",
"gx8_w39": "rasmlar/gx8_w39.webp",
"gx8_w40": "rasmlar/gx8_w40.webp",
"gx8_w41": "rasmlar/gx8_w41.webp",
"gx8_w42": "rasmlar/gx8_w42.webp",
"gx8_w43": "rasmlar/gx8_w43.webp",
"gx8_w44": "rasmlar/gx8_w44.webp",
"gx8_w45": "rasmlar/gx8_w45.webp",
"gx9_v5": "rasmlar/gx9_v5.webp",
"gx9_v8": "rasmlar/gx9_v8.webp",
"gx9_v12": "rasmlar/gx9_v12.webp",
"gx9_v14": "rasmlar/gx9_v14.webp",
"gx9_v16": "rasmlar/gx9_v16.webp",
"gx9_v17": "rasmlar/gx9_v17.webp",
"gx9_v20": "rasmlar/gx9_v20.webp",
"gx9_v22": "rasmlar/gx9_v22.webp",
"gx9_v25": "rasmlar/gx9_v25.webp",
"gx9_v26": "rasmlar/gx9_v26.webp",
"gx11_v5": "rasmlar/gx11_v5.webp",
"gx11_v7": "rasmlar/gx11_v7.webp",
"gx11_v9": "rasmlar/gx11_v9.webp",
"gx11_v17": "rasmlar/gx11_v17.webp",
"gx11_v18": "rasmlar/gx11_v18.webp",
"gx11_v21": "rasmlar/gx11_v21.webp",
"gx11_v30": "rasmlar/gx11_v30.webp",
"gx11_w37": "rasmlar/gx11_w37.webp",
"gx11_w38": "rasmlar/gx11_w38.webp",
"gx11_w39": "rasmlar/gx11_w39.webp",
"gx11_w40": "rasmlar/gx11_w40.webp",
"gx11_w41": "rasmlar/gx11_w41.webp",
"gx11_w42": "rasmlar/gx11_w42.webp",
"gx11_w43": "rasmlar/gx11_w43.webp",
"gx11_w44": "rasmlar/gx11_w44.webp",
"gx11_w45": "rasmlar/gx11_w45.webp",
"gx12_v8": "rasmlar/gx12_v8.webp",
"gx12_v14": "rasmlar/gx12_v14.webp",
"gx12_v15": "rasmlar/gx12_v15.webp",
"gx12_v17": "rasmlar/gx12_v17.webp",
"gx12_v18": "rasmlar/gx12_v18.webp",
"gx12_v19": "rasmlar/gx12_v19.webp",
"gx12_v25": "rasmlar/gx12_v25.webp",
"gx12_v26": "rasmlar/gx12_v26.webp",
"gx12_v27": "rasmlar/gx12_v27.webp",
"gx12_v28": "rasmlar/gx12_v28.webp",
"gx12_v29": "rasmlar/gx12_v29.webp",
"gx12_v30": "rasmlar/gx12_v30.webp",
"gx12_v31": "rasmlar/gx12_v31.webp",
"gx12_v34": "rasmlar/gx12_v34.webp",
"gx12_v35": "rasmlar/gx12_v35.webp",
"gx12_w37": "rasmlar/gx12_w37.webp",
"gx12_w38": "rasmlar/gx12_w38.webp",
"gx12_w39": "rasmlar/gx12_w39.webp",
"gx12_w40": "rasmlar/gx12_w40.webp",
"gx12_w41": "rasmlar/gx12_w41.webp",
"gx12_w42": "rasmlar/gx12_w42.webp",
"gx12_w43": "rasmlar/gx12_w43.webp",
"gx12_w44": "rasmlar/gx12_w44.webp",
"gx12_w45": "rasmlar/gx12_w45.webp",
"gx13_v2": "rasmlar/gx13_v2.webp",
"gx13_v11": "rasmlar/gx13_v11.webp",
"gx13_v24": "rasmlar/gx13_v24.webp",
"gx13_v25": "rasmlar/gx13_v25.webp",
"gx13_v28": "rasmlar/gx13_v28.webp",
"gx13_v29": "rasmlar/gx13_v29.webp",
"gx13_v33": "rasmlar/gx13_v33.webp",
"gx13_w42": "rasmlar/gx13_w42.webp",
"gx13_w43": "rasmlar/gx13_w43.webp",
"gx13_w44": "rasmlar/gx13_w44.webp",
"gx14_v1": "rasmlar/gx14_v1.webp",
"gx14_v2": "rasmlar/gx14_v2.webp",
"gx14_v5": "rasmlar/gx14_v5.webp",
"gx14_v9": "rasmlar/gx14_v9.webp",
"gx14_v14": "rasmlar/gx14_v14.webp",
"gx14_v17": "rasmlar/gx14_v17.webp",
"gx14_v20": "rasmlar/gx14_v20.webp",
"gx14_v21": "rasmlar/gx14_v21.webp",
"gx14_v30": "rasmlar/gx14_v30.webp",
"gx14_v31": "rasmlar/gx14_v31.webp",
"gx14_v32": "rasmlar/gx14_v32.webp",
"gx14_v33": "rasmlar/gx14_v33.webp",
"gx14_v36": "rasmlar/gx14_v36.webp",
"gx14_v37": "rasmlar/gx14_v37.webp",
"gx14_v39": "rasmlar/gx14_v39.webp",
"gx14_v41": "rasmlar/gx14_v41.webp",
"gx14_v43": "rasmlar/gx14_v43.webp",
"gx14_v44": "rasmlar/gx14_v44.webp",
"gx14_v45": "rasmlar/gx14_v45.webp",
"gx15_v1": "rasmlar/gx15_v1.webp",
"gx15_v2": "rasmlar/gx15_v2.webp",
"gx15_v3": "rasmlar/gx15_v3.webp",
"gx16_v1": "rasmlar/gx16_v1.webp",
"gx16_v6": "rasmlar/gx16_v6.webp",
"gx16_v7": "rasmlar/gx16_v7.webp",
"gx16_v8": "rasmlar/gx16_v8.webp",
"gx16_v10": "rasmlar/gx16_v10.webp",
"gx16_v12": "rasmlar/gx16_v12.webp",
"gx16_v13": "rasmlar/gx16_v13.webp",
"gx17_v2": "rasmlar/gx17_v2.webp",
"gx17_v3": "rasmlar/gx17_v3.webp",
"gx18_v4": "rasmlar/gx18_v4.webp",
"gx18_v10": "rasmlar/gx18_v10.webp",
"gx18_v15": "rasmlar/gx18_v15.webp",
"gx18_v16": "rasmlar/gx18_v16.webp",
"gx18_v18": "rasmlar/gx18_v18.webp",
"gx18_v20": "rasmlar/gx18_v20.webp",
"gx19_v5": "rasmlar/gx19_v5.webp",
"gx22_v1": "rasmlar/gx22_v1.webp",
"gx22_v2": "rasmlar/gx22_v2.webp",
"gx29_v1": "rasmlar/gx29_v1.webp",
"gx31_v1": "rasmlar/gx31_v1.webp",
"gx34_qq": "rasmlar/gx34_qq.webp",
"gx34_mz": "rasmlar/gx34_mz.webp",
"gx34_ch": "rasmlar/gx34_ch.webp",
"gx34_oz": "rasmlar/gx34_oz.webp",
"gx34_qd": "rasmlar/gx34_qd.webp",
"gx34_sv": "rasmlar/gx34_sv.webp",
"gx34_us": "rasmlar/gx34_us.webp",
"gx36_oy": "rasmlar/gx36_oy.webp",
"gx36_er": "rasmlar/gx36_er.webp",
"gx36_dn": "rasmlar/gx36_dn.webp",
"gx36_pt": "rasmlar/gx36_pt.webp",
"gx36_nx": "rasmlar/gx36_nx.webp",
"gx42_v1_4": "rasmlar/gx42_v1_4.webp",
"gx42_v1_14": "rasmlar/gx42_v1_14.webp",
"gx42_v1_15": "rasmlar/gx42_v1_15.webp",
"gx42_v1_18": "rasmlar/gx42_v1_18.webp",
"gx42_v1_22": "rasmlar/gx42_v1_22.webp",
"gx42_v1_23": "rasmlar/gx42_v1_23.webp",
"gx42_v1_28": "rasmlar/gx42_v1_28.webp",
"gx42_v1_30": "rasmlar/gx42_v1_30.webp",
"gx42_v2_3": "rasmlar/gx42_v2_3.webp",
"gx42_v2_5": "rasmlar/gx42_v2_5.webp",
"gx42_v2_11": "rasmlar/gx42_v2_11.webp",
"gx42_v2_14": "rasmlar/gx42_v2_14.webp",
"gx42_v2_25": "rasmlar/gx42_v2_25.webp",
"gx42_v2_30": "rasmlar/gx42_v2_30.webp",
"gx42_v3_9": "rasmlar/gx42_v3_9.webp",
"gx42_v3_12": "rasmlar/gx42_v3_12.webp",
"gx42_v3_14": "rasmlar/gx42_v3_14.webp",
"gx42_v3_22": "rasmlar/gx42_v3_22.webp",
"gx42_v3_29": "rasmlar/gx42_v3_29.webp",
"gx42_v3_30": "rasmlar/gx42_v3_30.webp",
"gx42_v4_6": "rasmlar/gx42_v4_6.webp",
"gx42_v4_14": "rasmlar/gx42_v4_14.webp",
"gx42_v4_16": "rasmlar/gx42_v4_16.webp",
"gx42_v4_18": "rasmlar/gx42_v4_18.webp",
"gx42_v4_26": "rasmlar/gx42_v4_26.webp",
"gx42_v4_30": "rasmlar/gx42_v4_30.webp",
"gx42_v5_4": "rasmlar/gx42_v5_4.webp",
"gx42_v5_9": "rasmlar/gx42_v5_9.webp",
"gx42_v5_14": "rasmlar/gx42_v5_14.webp",
"gx42_v5_17": "rasmlar/gx42_v5_17.webp",
"gx42_v5_22": "rasmlar/gx42_v5_22.webp",
"gx42_v5_23": "rasmlar/gx42_v5_23.webp",
"gx42_v6_5": "rasmlar/gx42_v6_5.webp",
"gx42_v6_16": "rasmlar/gx42_v6_16.webp",
"gx42_v6_21": "rasmlar/gx42_v6_21.webp",
"gx42_v6_24": "rasmlar/gx42_v6_24.webp",
"gx42_v6_30": "rasmlar/gx42_v6_30.webp",
"gx42_v7_15": "rasmlar/gx42_v7_15.webp",
"gx42_v7_21": "rasmlar/gx42_v7_21.webp",
"gx42_v7_24": "rasmlar/gx42_v7_24.webp",
"gx42_v7_30": "rasmlar/gx42_v7_30.webp",
"gx42_v8_4": "rasmlar/gx42_v8_4.webp",
"gx42_v8_6": "rasmlar/gx42_v8_6.webp",
"gx42_v8_7": "rasmlar/gx42_v8_7.webp",
"gx42_v8_13": "rasmlar/gx42_v8_13.webp",
"gx42_v8_21": "rasmlar/gx42_v8_21.webp",
"gx42_v8_30": "rasmlar/gx42_v8_30.webp",
"gx42_v9_2": "rasmlar/gx42_v9_2.webp",
"gx42_v9_15": "rasmlar/gx42_v9_15.webp",
"gx42_v9_19": "rasmlar/gx42_v9_19.webp",
"gx42_v9_24": "rasmlar/gx42_v9_24.webp",
"gx42_v9_28": "rasmlar/gx42_v9_28.webp",
"gx42_v9_30": "rasmlar/gx42_v9_30.webp",
"gx42_v10_7": "rasmlar/gx42_v10_7.webp",
"gx42_v10_13": "rasmlar/gx42_v10_13.webp",
"gx42_v10_17": "rasmlar/gx42_v10_17.webp",
"gx42_v10_23": "rasmlar/gx42_v10_23.webp",
"gx42_v10_30": "rasmlar/gx42_v10_30.webp",
"gx42_v11_5": "rasmlar/gx42_v11_5.webp",
"gx42_v11_21": "rasmlar/gx42_v11_21.webp",
"gx42_v11_30": "rasmlar/gx42_v11_30.webp",
"gx42_v12_3": "rasmlar/gx42_v12_3.webp",
"gx42_v12_5": "rasmlar/gx42_v12_5.webp",
"gx42_v12_14": "rasmlar/gx42_v12_14.webp",
"gx42_v12_16": "rasmlar/gx42_v12_16.webp",
"gx42_v12_18": "rasmlar/gx42_v12_18.webp",
"gx42_v12_25": "rasmlar/gx42_v12_25.webp",
"gx42_v12_30": "rasmlar/gx42_v12_30.webp",
"gx42_v13_22": "rasmlar/gx42_v13_22.webp",
"gx42_v13_30": "rasmlar/gx42_v13_30.webp",
"gx42_v14_3": "rasmlar/gx42_v14_3.webp",
"gx42_v14_5": "rasmlar/gx42_v14_5.webp",
"gx42_v14_10": "rasmlar/gx42_v14_10.webp",
"gx42_v14_12": "rasmlar/gx42_v14_12.webp",
"gx42_v14_18": "rasmlar/gx42_v14_18.webp",
"gx42_v14_21": "rasmlar/gx42_v14_21.webp",
"gx42_v14_30": "rasmlar/gx42_v14_30.webp",
"gx42_v15_1": "rasmlar/gx42_v15_1.webp",
"gx42_v15_12": "rasmlar/gx42_v15_12.webp",
"gx42_v15_18": "rasmlar/gx42_v15_18.webp",
"gx42_v15_20": "rasmlar/gx42_v15_20.webp",
"gx42_v15_21": "rasmlar/gx42_v15_21.webp",
"gx42_v16_6": "rasmlar/gx42_v16_6.webp",
"gx42_v16_9": "rasmlar/gx42_v16_9.webp",
"gx42_v16_11": "rasmlar/gx42_v16_11.webp",
"gx42_v16_17": "rasmlar/gx42_v16_17.webp",
"gx42_v16_26": "rasmlar/gx42_v16_26.webp",
"gx42_v16_30": "rasmlar/gx42_v16_30.webp",
"gx42_v17_3": "rasmlar/gx42_v17_3.webp",
"gx42_v17_8": "rasmlar/gx42_v17_8.webp",
"gx42_v17_12": "rasmlar/gx42_v17_12.webp",
"gx42_v17_19": "rasmlar/gx42_v17_19.webp",
"gx42_v17_28": "rasmlar/gx42_v17_28.webp",
"gx42_v17_30": "rasmlar/gx42_v17_30.webp",
"gx42_v18_4": "rasmlar/gx42_v18_4.webp",
"gx42_v18_30": "rasmlar/gx42_v18_30.webp",
"gx42_v19_2": "rasmlar/gx42_v19_2.webp",
"gx42_v19_8": "rasmlar/gx42_v19_8.webp",
"gx42_v19_13": "rasmlar/gx42_v19_13.webp",
"gx42_v19_18": "rasmlar/gx42_v19_18.webp",
"gx42_v19_29": "rasmlar/gx42_v19_29.webp",
"gx42_v19_30": "rasmlar/gx42_v19_30.webp",
"gx42_v20_1": "rasmlar/gx42_v20_1.webp",
"gx42_v20_6": "rasmlar/gx42_v20_6.webp",
"gx42_v20_8": "rasmlar/gx42_v20_8.webp",
"gx42_v20_14": "rasmlar/gx42_v20_14.webp",
"gx42_v20_17": "rasmlar/gx42_v20_17.webp",
"gx42_v20_25": "rasmlar/gx42_v20_25.webp",
"gx42_v20_30": "rasmlar/gx42_v20_30.webp",
"gx43_v2_2": "rasmlar/gx43_v2_2.webp",
"gx43_v2_5": "rasmlar/gx43_v2_5.webp",
"gx43_v3_31": "rasmlar/gx43_v3_31.webp",
"gx43_v4_2": "rasmlar/gx43_v4_2.webp",
"gx43_v4_31": "rasmlar/gx43_v4_31.webp",
"gx43_v4_32": "rasmlar/gx43_v4_32.webp",
"gx43_v1_42": "rasmlar/gx43_v1_42.webp",
"gx43_v2_36": "rasmlar/gx43_v2_36.webp",
"gx43_v2_42": "rasmlar/gx43_v2_42.webp",
"gx43_v3_36": "rasmlar/gx43_v3_36.webp",
"gx43_v3_37": "rasmlar/gx43_v3_37.webp",
"gx43_v3_39": "rasmlar/gx43_v3_39.webp",
"gx43_v3_41": "rasmlar/gx43_v3_41.webp",
"gx43_v3_43": "rasmlar/gx43_v3_43.webp",
"gx43_v3_44": "rasmlar/gx43_v3_44.webp",
"gx44_1_1": "rasmlar/gx44_1_1.webp",
"gx44_1_2": "rasmlar/gx44_1_2.webp",
"gx44_1_3": "rasmlar/gx44_1_3.webp",
"gx44_1_4": "rasmlar/gx44_1_4.webp",
"gx44_1_5": "rasmlar/gx44_1_5.webp",
"gx44_1_6": "rasmlar/gx44_1_6.webp",
"gx44_1_7": "rasmlar/gx44_1_7.webp",
"gx44_1_8": "rasmlar/gx44_1_8.webp",
"gx44_1_9": "rasmlar/gx44_1_9.webp",
"gx44_1_10": "rasmlar/gx44_1_10.webp",
"gx44_1_11": "rasmlar/gx44_1_11.webp",
"gx44_1_12": "rasmlar/gx44_1_12.webp",
"gx44_1_13": "rasmlar/gx44_1_13.webp",
"gx44_1_14": "rasmlar/gx44_1_14.webp",
"gx44_1_15": "rasmlar/gx44_1_15.webp",
"gx44_1_16": "rasmlar/gx44_1_16.webp",
"gx44_1_17": "rasmlar/gx44_1_17.webp",
"gx44_1_18": "rasmlar/gx44_1_18.webp",
"gx44_1_19": "rasmlar/gx44_1_19.webp",
"gx44_1_20": "rasmlar/gx44_1_20.webp",
"gx44_2_1": "rasmlar/gx44_2_1.webp",
"gx44_2_2": "rasmlar/gx44_2_2.webp",
"gx44_2_3": "rasmlar/gx44_2_3.webp",
"gx44_2_4": "rasmlar/gx44_2_4.webp",
"gx44_2_5": "rasmlar/gx44_2_5.webp",
"gx44_2_6": "rasmlar/gx44_2_6.webp",
"gx44_2_7": "rasmlar/gx44_2_7.webp",
"gx44_2_8": "rasmlar/gx44_2_8.webp",
"gx44_2_9": "rasmlar/gx44_2_9.webp",
"gx44_2_10": "rasmlar/gx44_2_10.webp",
"gx44_2_11": "rasmlar/gx44_2_11.webp",
"gx44_2_12": "rasmlar/gx44_2_12.webp",
"gx44_2_13": "rasmlar/gx44_2_13.webp",
"gx44_2_14": "rasmlar/gx44_2_14.webp",
"gx44_2_15": "rasmlar/gx44_2_15.webp",
"gx44_2_16": "rasmlar/gx44_2_16.webp",
"gx44_2_17": "rasmlar/gx44_2_17.webp",
"gx44_2_18": "rasmlar/gx44_2_18.webp",
"gx44_2_19": "rasmlar/gx44_2_19.webp",
"gx44_2_20": "rasmlar/gx44_2_20.webp",
"gx44_3_1": "rasmlar/gx44_3_1.webp",
"gx44_3_2": "rasmlar/gx44_3_2.webp",
"gx44_3_3": "rasmlar/gx44_3_3.webp",
"gx44_3_4": "rasmlar/gx44_3_4.webp",
"gx44_3_5": "rasmlar/gx44_3_5.webp",
"gx44_3_6": "rasmlar/gx44_3_6.webp",
"gx44_3_7": "rasmlar/gx44_3_7.webp",
"gx44_3_8": "rasmlar/gx44_3_8.webp",
"gx44_3_9": "rasmlar/gx44_3_9.webp",
"gx44_3_10": "rasmlar/gx44_3_10.webp",
"gx44_3_11": "rasmlar/gx44_3_11.webp",
"gx44_3_12": "rasmlar/gx44_3_12.webp",
"gx44_3_13": "rasmlar/gx44_3_13.webp",
"gx44_3_14": "rasmlar/gx44_3_14.webp",
"gx44_3_15": "rasmlar/gx44_3_15.webp",
"gx44_3_16": "rasmlar/gx44_3_16.webp",
"gx44_3_17": "rasmlar/gx44_3_17.webp",
"gx44_3_18": "rasmlar/gx44_3_18.webp",
"gx44_3_19": "rasmlar/gx44_3_19.webp",
"gx44_3_20": "rasmlar/gx44_3_20.webp",
"gx44_4_1": "rasmlar/gx44_4_1.webp",
"gx44_4_2": "rasmlar/gx44_4_2.webp",
"gx44_4_3": "rasmlar/gx44_4_3.webp",
"gx44_4_4": "rasmlar/gx44_4_4.webp",
"gx44_4_5": "rasmlar/gx44_4_5.webp",
"gx44_4_6": "rasmlar/gx44_4_6.webp",
"gx44_4_7": "rasmlar/gx44_4_7.webp",
"gx44_4_8": "rasmlar/gx44_4_8.webp",
"gx44_4_9": "rasmlar/gx44_4_9.webp",
"gx44_4_10": "rasmlar/gx44_4_10.webp",
"gx44_4_11": "rasmlar/gx44_4_11.webp",
"gx44_4_12": "rasmlar/gx44_4_12.webp",
"gx44_4_13": "rasmlar/gx44_4_13.webp",
"gx44_4_14": "rasmlar/gx44_4_14.webp",
"gx44_4_15": "rasmlar/gx44_4_15.webp",
"gx44_4_16": "rasmlar/gx44_4_16.webp",
"gx44_4_17": "rasmlar/gx44_4_17.webp",
"gx44_4_18": "rasmlar/gx44_4_18.webp",
"gx44_4_19": "rasmlar/gx44_4_19.webp",
"gx44_4_20": "rasmlar/gx44_4_20.webp",
"gx44_5_1": "rasmlar/gx44_5_1.webp",
"gx44_5_2": "rasmlar/gx44_5_2.webp",
"gx44_5_3": "rasmlar/gx44_5_3.webp",
"gx44_5_4": "rasmlar/gx44_5_4.webp",
"gx44_5_5": "rasmlar/gx44_5_5.webp",
"gx44_5_6": "rasmlar/gx44_5_6.webp",
"gx44_5_7": "rasmlar/gx44_5_7.webp",
"gx44_5_8": "rasmlar/gx44_5_8.webp",
"gx44_5_9": "rasmlar/gx44_5_9.webp",
"gx44_5_10": "rasmlar/gx44_5_10.webp",
"gx44_5_12": "rasmlar/gx44_5_12.webp",
"gx44_5_13": "rasmlar/gx44_5_13.webp",
"gx44_5_14": "rasmlar/gx44_5_14.webp",
"gx44_5_17": "rasmlar/gx44_5_17.webp",
"gx44_5_18": "rasmlar/gx44_5_18.webp",
"gx44_5_20": "rasmlar/gx44_5_20.webp",
"gx44_6_3": "rasmlar/gx44_6_3.webp",
"gx44_6_4": "rasmlar/gx44_6_4.webp",
"gx44_6_5": "rasmlar/gx44_6_5.webp",
"gx44_6_6": "rasmlar/gx44_6_6.webp",
"gx44_6_7": "rasmlar/gx44_6_7.webp",
"gx44_6_8": "rasmlar/gx44_6_8.webp",
"gx44_6_9": "rasmlar/gx44_6_9.webp",
"gx44_6_10": "rasmlar/gx44_6_10.webp",
"gx44_6_11": "rasmlar/gx44_6_11.webp",
"gx44_6_12": "rasmlar/gx44_6_12.webp",
"gx44_6_13": "rasmlar/gx44_6_13.webp",
"gx44_6_14": "rasmlar/gx44_6_14.webp",
"gx44_6_15": "rasmlar/gx44_6_15.webp",
"gx44_6_17": "rasmlar/gx44_6_17.webp",
"gx44_6_18": "rasmlar/gx44_6_18.webp",
"gx44_6_20": "rasmlar/gx44_6_20.webp",
"gx44_7_1": "rasmlar/gx44_7_1.webp",
"gx44_7_2": "rasmlar/gx44_7_2.webp",
"gx44_7_3": "rasmlar/gx44_7_3.webp",
"gx44_7_4": "rasmlar/gx44_7_4.webp",
"gx44_7_5": "rasmlar/gx44_7_5.webp",
"gx44_7_6": "rasmlar/gx44_7_6.webp",
"gx44_7_7": "rasmlar/gx44_7_7.webp",
"gx44_7_8": "rasmlar/gx44_7_8.webp",
"gx44_7_9": "rasmlar/gx44_7_9.webp",
"gx44_7_11": "rasmlar/gx44_7_11.webp",
"gx44_7_12": "rasmlar/gx44_7_12.webp",
"gx44_7_13": "rasmlar/gx44_7_13.webp",
"gx44_7_14": "rasmlar/gx44_7_14.webp",
"gx44_7_16": "rasmlar/gx44_7_16.webp",
"gx44_7_17": "rasmlar/gx44_7_17.webp",
"gx44_7_19": "rasmlar/gx44_7_19.webp",
"gx44_7_20": "rasmlar/gx44_7_20.webp",
"gx44_8_1": "rasmlar/gx44_8_1.webp",
"gx44_8_2": "rasmlar/gx44_8_2.webp",
"gx44_8_3": "rasmlar/gx44_8_3.webp",
"gx44_8_4": "rasmlar/gx44_8_4.webp",
"gx44_8_5": "rasmlar/gx44_8_5.webp",
"gx44_8_6": "rasmlar/gx44_8_6.webp",
"gx44_8_7": "rasmlar/gx44_8_7.webp",
"gx44_8_8": "rasmlar/gx44_8_8.webp",
"gx44_8_9": "rasmlar/gx44_8_9.webp",
"gx44_8_10": "rasmlar/gx44_8_10.webp",
"gx44_8_12": "rasmlar/gx44_8_12.webp",
"gx44_8_13": "rasmlar/gx44_8_13.webp",
"gx44_8_14": "rasmlar/gx44_8_14.webp",
"gx44_8_15": "rasmlar/gx44_8_15.webp",
"gx44_8_16": "rasmlar/gx44_8_16.webp",
"gx44_8_17": "rasmlar/gx44_8_17.webp",
"gx44_8_18": "rasmlar/gx44_8_18.webp",
"gx44_8_19": "rasmlar/gx44_8_19.webp",
"gx44_8_20": "rasmlar/gx44_8_20.webp",
"gx44_9_1": "rasmlar/gx44_9_1.webp",
"gx44_9_2": "rasmlar/gx44_9_2.webp",
"gx44_9_3": "rasmlar/gx44_9_3.webp",
"gx44_9_4": "rasmlar/gx44_9_4.webp",
"gx44_9_6": "rasmlar/gx44_9_6.webp",
"gx44_9_7": "rasmlar/gx44_9_7.webp",
"gx44_9_8": "rasmlar/gx44_9_8.webp",
"gx44_9_9": "rasmlar/gx44_9_9.webp",
"gx44_9_10": "rasmlar/gx44_9_10.webp",
"gx44_9_11": "rasmlar/gx44_9_11.webp",
"gx44_9_12": "rasmlar/gx44_9_12.webp",
"gx44_9_13": "rasmlar/gx44_9_13.webp",
"gx44_9_14": "rasmlar/gx44_9_14.webp",
"gx44_9_15": "rasmlar/gx44_9_15.webp",
"gx44_9_16": "rasmlar/gx44_9_16.webp",
"gx44_9_17": "rasmlar/gx44_9_17.webp",
"gx44_9_18": "rasmlar/gx44_9_18.webp",
"gx44_9_19": "rasmlar/gx44_9_19.webp",
"gx44_9_20": "rasmlar/gx44_9_20.webp",
"gx44_10_1": "rasmlar/gx44_10_1.webp",
"gx44_10_2": "rasmlar/gx44_10_2.webp",
"gx44_10_3": "rasmlar/gx44_10_3.webp",
"gx44_10_4": "rasmlar/gx44_10_4.webp",
"gx44_10_5": "rasmlar/gx44_10_5.webp",
"gx44_10_6": "rasmlar/gx44_10_6.webp",
"gx44_10_7": "rasmlar/gx44_10_7.webp",
"gx44_10_8": "rasmlar/gx44_10_8.webp",
"gx44_10_9": "rasmlar/gx44_10_9.webp",
"gx44_10_10": "rasmlar/gx44_10_10.webp",
"gx44_10_11": "rasmlar/gx44_10_11.webp",
"gx44_10_12": "rasmlar/gx44_10_12.webp",
"gx44_10_13": "rasmlar/gx44_10_13.webp",
"gx44_10_14": "rasmlar/gx44_10_14.webp",
"gx44_10_15": "rasmlar/gx44_10_15.webp",
"gx44_10_16": "rasmlar/gx44_10_16.webp",
"gx44_10_17": "rasmlar/gx44_10_17.webp",
"gx44_10_18": "rasmlar/gx44_10_18.webp",
"gx44_10_19": "rasmlar/gx44_10_19.webp",
"gx44_10_20": "rasmlar/gx44_10_20.webp",
"gx44_11_1": "rasmlar/gx44_11_1.webp",
"gx44_11_2": "rasmlar/gx44_11_2.webp",
"gx44_11_3": "rasmlar/gx44_11_3.webp",
"gx44_11_4": "rasmlar/gx44_11_4.webp",
"gx44_11_5": "rasmlar/gx44_11_5.webp",
"gx44_11_6": "rasmlar/gx44_11_6.webp",
"gx44_11_7": "rasmlar/gx44_11_7.webp",
"gx44_11_8": "rasmlar/gx44_11_8.webp",
"gx44_11_9": "rasmlar/gx44_11_9.webp",
"gx44_11_10": "rasmlar/gx44_11_10.webp",
"gx44_11_11": "rasmlar/gx44_11_11.webp",
"gx44_11_12": "rasmlar/gx44_11_12.webp",
"gx44_11_13": "rasmlar/gx44_11_13.webp",
"gx44_11_14": "rasmlar/gx44_11_14.webp",
"gx44_11_15": "rasmlar/gx44_11_15.webp",
"gx44_11_16": "rasmlar/gx44_11_16.webp",
"gx44_11_17": "rasmlar/gx44_11_17.webp",
"gx44_11_18": "rasmlar/gx44_11_18.webp",
"gx44_11_19": "rasmlar/gx44_11_19.webp",
"gx44_11_20": "rasmlar/gx44_11_20.webp",
"gx44_12_1": "rasmlar/gx44_12_1.webp",
"gx44_12_2": "rasmlar/gx44_12_2.webp",
"gx44_12_3": "rasmlar/gx44_12_3.webp",
"gx44_12_4": "rasmlar/gx44_12_4.webp",
"gx44_12_5": "rasmlar/gx44_12_5.webp",
"gx44_12_6": "rasmlar/gx44_12_6.webp",
"gx44_12_7": "rasmlar/gx44_12_7.webp",
"gx44_12_8": "rasmlar/gx44_12_8.webp",
"gx44_12_9": "rasmlar/gx44_12_9.webp",
"gx44_12_10": "rasmlar/gx44_12_10.webp",
"gx44_12_11": "rasmlar/gx44_12_11.webp",
"gx44_12_12": "rasmlar/gx44_12_12.webp",
"gx44_12_13": "rasmlar/gx44_12_13.webp",
"gx44_12_14": "rasmlar/gx44_12_14.webp",
"gx44_12_15": "rasmlar/gx44_12_15.webp",
"gx44_12_16": "rasmlar/gx44_12_16.webp",
"gx44_12_17": "rasmlar/gx44_12_17.webp",
"gx44_12_18": "rasmlar/gx44_12_18.webp",
"gx44_12_19": "rasmlar/gx44_12_19.webp",
"gx44_12_20": "rasmlar/gx44_12_20.webp",
"gx44_13_1": "rasmlar/gx44_13_1.webp",
"gx44_13_2": "rasmlar/gx44_13_2.webp",
"gx44_13_3": "rasmlar/gx44_13_3.webp",
"gx44_13_4": "rasmlar/gx44_13_4.webp",
"gx44_13_5": "rasmlar/gx44_13_5.webp",
"gx44_13_6": "rasmlar/gx44_13_6.webp",
"gx44_13_8": "rasmlar/gx44_13_8.webp",
"gx44_13_9": "rasmlar/gx44_13_9.webp",
"gx44_13_11": "rasmlar/gx44_13_11.webp",
"gx44_13_12": "rasmlar/gx44_13_12.webp",
"gx44_13_13": "rasmlar/gx44_13_13.webp",
"gx44_13_14": "rasmlar/gx44_13_14.webp",
"gx44_13_15": "rasmlar/gx44_13_15.webp",
"gx44_13_16": "rasmlar/gx44_13_16.webp",
"gx44_13_17": "rasmlar/gx44_13_17.webp",
"gx44_13_18": "rasmlar/gx44_13_18.webp",
"gx44_13_19": "rasmlar/gx44_13_19.webp",
"gx44_13_20": "rasmlar/gx44_13_20.webp",
"gx44_14_1": "rasmlar/gx44_14_1.webp",
"gx44_14_2": "rasmlar/gx44_14_2.webp",
"gx44_14_3": "rasmlar/gx44_14_3.webp",
"gx44_14_4": "rasmlar/gx44_14_4.webp",
"gx44_14_5": "rasmlar/gx44_14_5.webp",
"gx44_14_6": "rasmlar/gx44_14_6.webp",
"gx44_14_7": "rasmlar/gx44_14_7.webp",
"gx44_14_8": "rasmlar/gx44_14_8.webp",
"gx44_14_9": "rasmlar/gx44_14_9.webp",
"gx44_14_10": "rasmlar/gx44_14_10.webp",
"gx44_14_11": "rasmlar/gx44_14_11.webp",
"gx44_14_12": "rasmlar/gx44_14_12.webp",
"gx44_14_13": "rasmlar/gx44_14_13.webp",
"gx44_14_14": "rasmlar/gx44_14_14.webp",
"gx44_14_15": "rasmlar/gx44_14_15.webp",
"gx44_14_16": "rasmlar/gx44_14_16.webp",
"gx44_14_17": "rasmlar/gx44_14_17.webp",
"gx44_14_18": "rasmlar/gx44_14_18.webp",
"gx44_14_20": "rasmlar/gx44_14_20.webp",
"gx44_15_1": "rasmlar/gx44_15_1.webp",
"gx44_15_2": "rasmlar/gx44_15_2.webp",
"gx44_15_3": "rasmlar/gx44_15_3.webp",
"gx44_15_4": "rasmlar/gx44_15_4.webp",
"gx44_15_5": "rasmlar/gx44_15_5.webp",
"gx44_15_6": "rasmlar/gx44_15_6.webp",
"gx44_15_7": "rasmlar/gx44_15_7.webp",
"gx44_15_9": "rasmlar/gx44_15_9.webp",
"gx44_15_10": "rasmlar/gx44_15_10.webp",
"gx44_15_11": "rasmlar/gx44_15_11.webp",
"gx44_15_13": "rasmlar/gx44_15_13.webp",
"gx44_15_14": "rasmlar/gx44_15_14.webp",
"gx44_15_15": "rasmlar/gx44_15_15.webp",
"gx44_15_16": "rasmlar/gx44_15_16.webp",
"gx44_15_17": "rasmlar/gx44_15_17.webp",
"gx44_15_18": "rasmlar/gx44_15_18.webp",
"gx44_15_19": "rasmlar/gx44_15_19.webp",
"gx44_15_20": "rasmlar/gx44_15_20.webp",
"gx44_16_1": "rasmlar/gx44_16_1.webp",
"gx44_16_2": "rasmlar/gx44_16_2.webp",
"gx44_16_3": "rasmlar/gx44_16_3.webp",
"gx44_16_4": "rasmlar/gx44_16_4.webp",
"gx44_16_12": "rasmlar/gx44_16_12.webp",
"gx44_16_17": "rasmlar/gx44_16_17.webp",
"gx44_16_18": "rasmlar/gx44_16_18.webp",
"gx44_16_19": "rasmlar/gx44_16_19.webp",
"gx44_16_20": "rasmlar/gx44_16_20.webp",
"gx44_17_1": "rasmlar/gx44_17_1.webp",
"gx44_17_2": "rasmlar/gx44_17_2.webp",
"gx44_17_3": "rasmlar/gx44_17_3.webp",
"gx44_17_4": "rasmlar/gx44_17_4.webp",
"gx44_17_5": "rasmlar/gx44_17_5.webp",
"gx44_17_6": "rasmlar/gx44_17_6.webp",
"gx44_17_7": "rasmlar/gx44_17_7.webp",
"gx44_17_8": "rasmlar/gx44_17_8.webp",
"gx44_17_11": "rasmlar/gx44_17_11.webp",
"gx44_17_12": "rasmlar/gx44_17_12.webp",
"gx44_17_13": "rasmlar/gx44_17_13.webp",
"gx44_17_14": "rasmlar/gx44_17_14.webp",
"gx44_17_15": "rasmlar/gx44_17_15.webp",
"gx44_17_16": "rasmlar/gx44_17_16.webp",
"gx44_17_17": "rasmlar/gx44_17_17.webp",
"gx44_17_18": "rasmlar/gx44_17_18.webp",
"gx44_17_19": "rasmlar/gx44_17_19.webp",
"gx44_17_20": "rasmlar/gx44_17_20.webp",
"gx44_18_1": "rasmlar/gx44_18_1.webp",
"gx44_18_2": "rasmlar/gx44_18_2.webp",
"gx44_18_3": "rasmlar/gx44_18_3.webp",
"gx44_18_4": "rasmlar/gx44_18_4.webp",
"gx44_18_5": "rasmlar/gx44_18_5.webp",
"gx44_18_6": "rasmlar/gx44_18_6.webp",
"gx44_18_7": "rasmlar/gx44_18_7.webp",
"gx44_18_8": "rasmlar/gx44_18_8.webp",
"gx44_18_9": "rasmlar/gx44_18_9.webp",
"gx44_18_10": "rasmlar/gx44_18_10.webp",
"gx44_18_11": "rasmlar/gx44_18_11.webp",
"gx44_18_12": "rasmlar/gx44_18_12.webp",
"gx44_18_13": "rasmlar/gx44_18_13.webp",
"gx44_18_14": "rasmlar/gx44_18_14.webp",
"gx44_18_15": "rasmlar/gx44_18_15.webp",
"gx44_18_16": "rasmlar/gx44_18_16.webp",
"gx44_18_17": "rasmlar/gx44_18_17.webp",
"gx44_18_18": "rasmlar/gx44_18_18.webp",
"gx44_18_19": "rasmlar/gx44_18_19.webp",
"gx44_18_20": "rasmlar/gx44_18_20.webp",
"gx44_19_1": "rasmlar/gx44_19_1.webp",
"gx44_19_2": "rasmlar/gx44_19_2.webp",
"gx44_19_3": "rasmlar/gx44_19_3.webp",
"gx44_19_4": "rasmlar/gx44_19_4.webp",
"gx44_19_5": "rasmlar/gx44_19_5.webp",
"gx44_19_6": "rasmlar/gx44_19_6.webp",
"gx44_19_7": "rasmlar/gx44_19_7.webp",
"gx44_19_8": "rasmlar/gx44_19_8.webp",
"gx44_19_9": "rasmlar/gx44_19_9.webp",
"gx44_19_10": "rasmlar/gx44_19_10.webp",
"gx44_19_11": "rasmlar/gx44_19_11.webp",
"gx44_19_12": "rasmlar/gx44_19_12.webp",
"gx44_19_13": "rasmlar/gx44_19_13.webp",
"gx44_19_14": "rasmlar/gx44_19_14.webp",
"gx44_19_15": "rasmlar/gx44_19_15.webp",
"gx44_19_16": "rasmlar/gx44_19_16.webp",
"gx44_19_17": "rasmlar/gx44_19_17.webp",
"gx44_19_18": "rasmlar/gx44_19_18.webp",
"gx44_19_19": "rasmlar/gx44_19_19.webp",
"gx44_19_20": "rasmlar/gx44_19_20.webp",
"gx44_20_1": "rasmlar/gx44_20_1.webp",
"gx44_20_2": "rasmlar/gx44_20_2.webp",
"gx44_20_3": "rasmlar/gx44_20_3.webp",
"gx44_20_4": "rasmlar/gx44_20_4.webp",
"gx44_20_5": "rasmlar/gx44_20_5.webp",
"gx44_20_6": "rasmlar/gx44_20_6.webp",
"gx44_20_7": "rasmlar/gx44_20_7.webp",
"gx44_20_8": "rasmlar/gx44_20_8.webp",
"gx44_20_9": "rasmlar/gx44_20_9.webp",
"gx44_20_10": "rasmlar/gx44_20_10.webp",
"gx44_20_11": "rasmlar/gx44_20_11.webp",
"gx44_20_12": "rasmlar/gx44_20_12.webp",
"gx44_20_13": "rasmlar/gx44_20_13.webp",
"gx44_20_14": "rasmlar/gx44_20_14.webp",
"gx44_20_15": "rasmlar/gx44_20_15.webp",
"gx44_20_16": "rasmlar/gx44_20_16.webp",
"gx44_20_17": "rasmlar/gx44_20_17.webp",
"gx44_20_18": "rasmlar/gx44_20_18.webp",
"gx44_20_19": "rasmlar/gx44_20_19.webp",
"gx44_20_20": "rasmlar/gx44_20_20.webp",
"gx44_21_1": "rasmlar/gx44_21_1.webp",
"gx44_21_2": "rasmlar/gx44_21_2.webp",
"gx44_21_3": "rasmlar/gx44_21_3.webp",
"gx44_21_4": "rasmlar/gx44_21_4.webp",
"gx44_21_5": "rasmlar/gx44_21_5.webp",
"gx44_21_6": "rasmlar/gx44_21_6.webp",
"gx44_21_7": "rasmlar/gx44_21_7.webp",
"gx44_21_8": "rasmlar/gx44_21_8.webp",
"gx44_21_9": "rasmlar/gx44_21_9.webp",
"gx44_21_10": "rasmlar/gx44_21_10.webp",
"gx44_21_11": "rasmlar/gx44_21_11.webp",
"gx44_21_12": "rasmlar/gx44_21_12.webp",
"gx44_21_13": "rasmlar/gx44_21_13.webp",
"gx44_21_14": "rasmlar/gx44_21_14.webp",
"gx44_21_15": "rasmlar/gx44_21_15.webp",
"gx44_21_16": "rasmlar/gx44_21_16.webp",
"gx44_21_17": "rasmlar/gx44_21_17.webp",
"gx44_21_18": "rasmlar/gx44_21_18.webp",
"gx44_21_19": "rasmlar/gx44_21_19.webp",
"gx44_22_1": "rasmlar/gx44_22_1.webp",
"gx44_22_2": "rasmlar/gx44_22_2.webp",
"gx44_22_3": "rasmlar/gx44_22_3.webp",
"gx44_22_4": "rasmlar/gx44_22_4.webp",
"gx44_22_5": "rasmlar/gx44_22_5.webp",
"gx44_22_6": "rasmlar/gx44_22_6.webp",
"gx44_22_7": "rasmlar/gx44_22_7.webp",
"gx44_22_8": "rasmlar/gx44_22_8.webp",
"gx44_22_9": "rasmlar/gx44_22_9.webp",
"gx44_22_10": "rasmlar/gx44_22_10.webp",
"gx44_22_13": "rasmlar/gx44_22_13.webp",
"gx44_22_14": "rasmlar/gx44_22_14.webp",
"gx44_22_15": "rasmlar/gx44_22_15.webp",
"gx44_22_17": "rasmlar/gx44_22_17.webp",
"gx44_22_19": "rasmlar/gx44_22_19.webp",
"gx44_23_1": "rasmlar/gx44_23_1.webp",
"gx44_23_2": "rasmlar/gx44_23_2.webp",
"gx44_23_3": "rasmlar/gx44_23_3.webp",
"gx44_23_4": "rasmlar/gx44_23_4.webp",
"gx44_23_5": "rasmlar/gx44_23_5.webp",
"gx44_23_7": "rasmlar/gx44_23_7.webp",
"gx44_23_8": "rasmlar/gx44_23_8.webp",
"gx44_23_9": "rasmlar/gx44_23_9.webp",
"gx44_23_10": "rasmlar/gx44_23_10.webp",
"gx44_23_12": "rasmlar/gx44_23_12.webp",
"gx44_23_18": "rasmlar/gx44_23_18.webp",
"gx44_23_19": "rasmlar/gx44_23_19.webp",
"gx44_23_20": "rasmlar/gx44_23_20.webp",
"gx44_24_1": "rasmlar/gx44_24_1.webp",
"gx44_24_2": "rasmlar/gx44_24_2.webp",
"gx44_24_3": "rasmlar/gx44_24_3.webp",
"gx44_24_4": "rasmlar/gx44_24_4.webp",
"gx44_24_5": "rasmlar/gx44_24_5.webp",
"gx44_24_6": "rasmlar/gx44_24_6.webp",
"gx44_24_7": "rasmlar/gx44_24_7.webp",
"gx44_24_8": "rasmlar/gx44_24_8.webp",
"gx44_24_9": "rasmlar/gx44_24_9.webp",
"gx44_24_10": "rasmlar/gx44_24_10.webp",
"gx44_24_11": "rasmlar/gx44_24_11.webp",
"gx44_24_12": "rasmlar/gx44_24_12.webp",
"gx44_24_13": "rasmlar/gx44_24_13.webp",
"gx44_24_14": "rasmlar/gx44_24_14.webp",
"gx44_24_16": "rasmlar/gx44_24_16.webp",
"gx44_24_17": "rasmlar/gx44_24_17.webp",
"gx44_24_19": "rasmlar/gx44_24_19.webp",
"gx44_24_20": "rasmlar/gx44_24_20.webp",
"gx44_25_1": "rasmlar/gx44_25_1.webp",
"gx44_25_3": "rasmlar/gx44_25_3.webp",
"gx44_25_4": "rasmlar/gx44_25_4.webp",
"gx44_25_5": "rasmlar/gx44_25_5.webp",
"gx44_25_6": "rasmlar/gx44_25_6.webp",
"gx44_25_7": "rasmlar/gx44_25_7.webp",
"gx44_25_8": "rasmlar/gx44_25_8.webp",
"gx44_25_9": "rasmlar/gx44_25_9.webp",
"gx44_25_10": "rasmlar/gx44_25_10.webp",
"gx44_25_11": "rasmlar/gx44_25_11.webp",
"gx44_25_12": "rasmlar/gx44_25_12.webp",
"gx44_25_13": "rasmlar/gx44_25_13.webp",
"gx44_25_14": "rasmlar/gx44_25_14.webp",
"gx44_25_15": "rasmlar/gx44_25_15.webp",
"gx44_25_16": "rasmlar/gx44_25_16.webp",
"gx44_25_17": "rasmlar/gx44_25_17.webp",
"gx44_25_18": "rasmlar/gx44_25_18.webp",
"gx44_25_19": "rasmlar/gx44_25_19.webp",
"gx44_25_20": "rasmlar/gx44_25_20.webp",
"gx44_26_1": "rasmlar/gx44_26_1.webp",
"gx44_26_3": "rasmlar/gx44_26_3.webp",
"gx44_26_9": "rasmlar/gx44_26_9.webp",
"gx44_26_10": "rasmlar/gx44_26_10.webp",
"gx44_26_11": "rasmlar/gx44_26_11.webp",
"gx44_26_12": "rasmlar/gx44_26_12.webp",
"gx44_26_13": "rasmlar/gx44_26_13.webp",
"gx44_26_14": "rasmlar/gx44_26_14.webp",
"gx44_26_15": "rasmlar/gx44_26_15.webp",
"gx44_26_16": "rasmlar/gx44_26_16.webp",
"gx44_26_19": "rasmlar/gx44_26_19.webp",
"gx44_26_20": "rasmlar/gx44_26_20.webp",
"gx44_27_1": "rasmlar/gx44_27_1.webp",
"gx44_27_2": "rasmlar/gx44_27_2.webp",
"gx44_27_8": "rasmlar/gx44_27_8.webp",
"gx44_27_14": "rasmlar/gx44_27_14.webp",
"gx44_27_15": "rasmlar/gx44_27_15.webp",
"gx44_27_16": "rasmlar/gx44_27_16.webp",
"gx44_27_17": "rasmlar/gx44_27_17.webp",
"gx44_27_18": "rasmlar/gx44_27_18.webp",
"gx44_27_19": "rasmlar/gx44_27_19.webp",
"gx44_27_20": "rasmlar/gx44_27_20.webp",
"gx44_28_1": "rasmlar/gx44_28_1.webp",
"gx44_28_3": "rasmlar/gx44_28_3.webp",
"gx44_28_4": "rasmlar/gx44_28_4.webp",
"gx44_28_5": "rasmlar/gx44_28_5.webp",
"gx44_28_6": "rasmlar/gx44_28_6.webp",
"gx44_28_7": "rasmlar/gx44_28_7.webp",
"gx44_28_8": "rasmlar/gx44_28_8.webp",
"gx44_28_9": "rasmlar/gx44_28_9.webp",
"gx44_28_10": "rasmlar/gx44_28_10.webp",
"gx44_28_11": "rasmlar/gx44_28_11.webp",
"gx44_28_12": "rasmlar/gx44_28_12.webp",
"gx44_28_13": "rasmlar/gx44_28_13.webp",
"gx44_28_14": "rasmlar/gx44_28_14.webp",
"gx44_28_15": "rasmlar/gx44_28_15.webp",
"gx44_28_16": "rasmlar/gx44_28_16.webp",
"gx44_28_17": "rasmlar/gx44_28_17.webp",
"gx44_28_18": "rasmlar/gx44_28_18.webp",
"gx44_28_19": "rasmlar/gx44_28_19.webp",
"gx44_28_20": "rasmlar/gx44_28_20.webp",
"gx44_29_1": "rasmlar/gx44_29_1.webp",
"gx44_29_2": "rasmlar/gx44_29_2.webp",
"gx44_29_3": "rasmlar/gx44_29_3.webp",
"gx44_29_4": "rasmlar/gx44_29_4.webp",
"gx44_29_5": "rasmlar/gx44_29_5.webp",
"gx44_29_6": "rasmlar/gx44_29_6.webp",
"gx44_29_8": "rasmlar/gx44_29_8.webp",
"gx44_29_9": "rasmlar/gx44_29_9.webp",
"gx44_29_15": "rasmlar/gx44_29_15.webp",
"gx44_29_16": "rasmlar/gx44_29_16.webp",
"gx44_29_17": "rasmlar/gx44_29_17.webp",
"gx44_29_18": "rasmlar/gx44_29_18.webp",
"gx44_29_19": "rasmlar/gx44_29_19.webp",
"gx44_29_20": "rasmlar/gx44_29_20.webp",
"gx44_30_1": "rasmlar/gx44_30_1.webp",
"gx44_30_3": "rasmlar/gx44_30_3.webp",
"gx44_30_5": "rasmlar/gx44_30_5.webp",
"gx44_30_6": "rasmlar/gx44_30_6.webp",
"gx44_30_7": "rasmlar/gx44_30_7.webp",
"gx44_30_8": "rasmlar/gx44_30_8.webp",
"gx44_30_9": "rasmlar/gx44_30_9.webp",
"gx44_30_10": "rasmlar/gx44_30_10.webp",
"gx44_30_11": "rasmlar/gx44_30_11.webp",
"gx44_30_12": "rasmlar/gx44_30_12.webp",
"gx44_30_13": "rasmlar/gx44_30_13.webp",
"gx44_30_14": "rasmlar/gx44_30_14.webp",
"gx44_30_15": "rasmlar/gx44_30_15.webp",
"gx44_30_16": "rasmlar/gx44_30_16.webp",
"gx44_30_17": "rasmlar/gx44_30_17.webp",
"gx44_30_18": "rasmlar/gx44_30_18.webp",
"gx44_30_19": "rasmlar/gx44_30_19.webp",
"gx45_1": "rasmlar/gx45_1.webp",
"gx45_2": "rasmlar/gx45_2.webp",
"gx45_3": "rasmlar/gx45_3.webp",
"gx45_4": "rasmlar/gx45_4.webp",
"gx45_5": "rasmlar/gx45_5.webp",
"gx45_7": "rasmlar/gx45_7.webp",
"gx45_8": "rasmlar/gx45_8.webp",
"gx45_9": "rasmlar/gx45_9.webp",
"gx45_10": "rasmlar/gx45_10.webp",
"gx45_11": "rasmlar/gx45_11.webp",
"gx45_12": "rasmlar/gx45_12.webp",
"gx45_13": "rasmlar/gx45_13.webp",
"gx45_14": "rasmlar/gx45_14.webp",
"gx45_17": "rasmlar/gx45_17.webp",
"gx45_18": "rasmlar/gx45_18.webp",
"gx45_19": "rasmlar/gx45_19.webp",
"gx45_20": "rasmlar/gx45_20.webp",
"gx45_21": "rasmlar/gx45_21.webp",
"gx45_23": "rasmlar/gx45_23.webp",
"gx45_27": "rasmlar/gx45_27.webp",
"gx45_28": "rasmlar/gx45_28.webp",
"gx45_29": "rasmlar/gx45_29.webp",
"gx45_30": "rasmlar/gx45_30.webp",
"gx45_31": "rasmlar/gx45_31.webp",
"gx45_35": "rasmlar/gx45_35.webp",
"gx45_36": "rasmlar/gx45_36.webp",
"gx45_37": "rasmlar/gx45_37.webp",
"gx45_38": "rasmlar/gx45_38.webp",
"gx45_39": "rasmlar/gx45_39.webp",
"gx45_40": "rasmlar/gx45_40.webp",
"gx45_44": "rasmlar/gx45_44.webp",
"gx45_48": "rasmlar/gx45_48.webp",
"gx45_54": "rasmlar/gx45_54.webp",
"gx45_55": "rasmlar/gx45_55.webp",
"gx45_56": "rasmlar/gx45_56.webp",
"gx45_57": "rasmlar/gx45_57.webp",
"gx45_58": "rasmlar/gx45_58.webp",
"gx45_59": "rasmlar/gx45_59.webp",
"gx45_60": "rasmlar/gx45_60.webp",
"gx45_61": "rasmlar/gx45_61.webp",
"gx45_63": "rasmlar/gx45_63.webp",
"gx45_64": "rasmlar/gx45_64.webp",
"gx45_67": "rasmlar/gx45_67.webp",
"gx45_68": "rasmlar/gx45_68.webp",
"gx45_69": "rasmlar/gx45_69.webp",
"gx45_70": "rasmlar/gx45_70.webp",
"gx45_71": "rasmlar/gx45_71.webp",
"gx45_72": "rasmlar/gx45_72.webp",
"gx45_73": "rasmlar/gx45_73.webp",
"gx45_75": "rasmlar/gx45_75.webp",
"gx45_78": "rasmlar/gx45_78.webp",
"gx45_79": "rasmlar/gx45_79.webp",
"gx45_80": "rasmlar/gx45_80.webp",
"gx45_81": "rasmlar/gx45_81.webp",
"gx45_83": "rasmlar/gx45_83.webp",
"gx45_84": "rasmlar/gx45_84.webp",
"gx45_85": "rasmlar/gx45_85.webp",
"gx45_86": "rasmlar/gx45_86.webp",
"gx45_87": "rasmlar/gx45_87.webp",
"gx45_88": "rasmlar/gx45_88.webp",
"gx45_89": "rasmlar/gx45_89.webp",
"gx45_90": "rasmlar/gx45_90.webp",
"gx45_91": "rasmlar/gx45_91.webp",
"gx45_92": "rasmlar/gx45_92.webp",
"gx45_95": "rasmlar/gx45_95.webp",
"gx45_96": "rasmlar/gx45_96.webp",
"gx45_97": "rasmlar/gx45_97.webp",
"gx45_98": "rasmlar/gx45_98.webp",
"gx45_99": "rasmlar/gx45_99.webp",
"gx45_100": "rasmlar/gx45_100.webp",
"gx45_110": "rasmlar/gx45_110.webp",
"gx45_111": "rasmlar/gx45_111.webp",
"gx45_113": "rasmlar/gx45_113.webp",
"gx45_114": "rasmlar/gx45_114.webp",
"gx45_115": "rasmlar/gx45_115.webp",
"gx45_116": "rasmlar/gx45_116.webp",
"gx45_118": "rasmlar/gx45_118.webp",
"gx45_119": "rasmlar/gx45_119.webp",
"gx45_120": "rasmlar/gx45_120.webp",
"gx45_121": "rasmlar/gx45_121.webp",
"gx45_122": "rasmlar/gx45_122.webp",
"gx45_125": "rasmlar/gx45_125.webp",
"gx45_127": "rasmlar/gx45_127.webp",
"gx45_129": "rasmlar/gx45_129.webp",
"gx45_134": "rasmlar/gx45_134.webp",
"gx45_135": "rasmlar/gx45_135.webp",
"gx45_137": "rasmlar/gx45_137.webp",
"gx45_138": "rasmlar/gx45_138.webp",
"gx45_139": "rasmlar/gx45_139.webp",
"gx45_142": "rasmlar/gx45_142.webp",
"gx45_143": "rasmlar/gx45_143.webp",
"gx45_144": "rasmlar/gx45_144.webp",
"gx45_145": "rasmlar/gx45_145.webp",
"gx45_146": "rasmlar/gx45_146.webp",
"gx45_147": "rasmlar/gx45_147.webp",
"gx45_148": "rasmlar/gx45_148.webp",
"gx45_150": "rasmlar/gx45_150.webp",
"gx45_151": "rasmlar/gx45_151.webp",
"gx45_155": "rasmlar/gx45_155.webp",
"gx45_157": "rasmlar/gx45_157.webp",
"gx45_159": "rasmlar/gx45_159.webp",
"gx45_161": "rasmlar/gx45_161.webp",
"gx45_162": "rasmlar/gx45_162.webp",
"gx45_163": "rasmlar/gx45_163.webp",
"gx45_164": "rasmlar/gx45_164.webp",
"gx45_165": "rasmlar/gx45_165.webp",
"gx45_166": "rasmlar/gx45_166.webp",
"gx45_168": "rasmlar/gx45_168.webp",
"gx45_169": "rasmlar/gx45_169.webp",
"gx45_170": "rasmlar/gx45_170.webp",
"gx45_171": "rasmlar/gx45_171.webp",
"gx45_172": "rasmlar/gx45_172.webp",
"gx45_173": "rasmlar/gx45_173.webp",
"gx45_174": "rasmlar/gx45_174.webp",
"gx45_175": "rasmlar/gx45_175.webp",
"gx45_176": "rasmlar/gx45_176.webp",
"gx45_177": "rasmlar/gx45_177.webp",
"gx45_179": "rasmlar/gx45_179.webp",
"gx45_180": "rasmlar/gx45_180.webp",
"gx45_182": "rasmlar/gx45_182.webp",
"gx45_183": "rasmlar/gx45_183.webp",
"gx45_185": "rasmlar/gx45_185.webp",
"gx45_186": "rasmlar/gx45_186.webp",
"gx45_190": "rasmlar/gx45_190.webp",
"gx45_192": "rasmlar/gx45_192.webp",
"gx45_194": "rasmlar/gx45_194.webp",
"gx45_195": "rasmlar/gx45_195.webp",
"gx45_196": "rasmlar/gx45_196.webp",
"gx45_197": "rasmlar/gx45_197.webp",
"gx45_198": "rasmlar/gx45_198.webp",
"gx45_199": "rasmlar/gx45_199.webp",
"gx45_200": "rasmlar/gx45_200.webp",
"gx45_201": "rasmlar/gx45_201.webp",
"gx45_204": "rasmlar/gx45_204.webp",
"gx45_213": "rasmlar/gx45_213.webp",
"gx45_214": "rasmlar/gx45_214.webp",
"gx45_220": "rasmlar/gx45_220.webp",
"gx45_226": "rasmlar/gx45_226.webp",
"gx45_229": "rasmlar/gx45_229.webp",
"gx45_232": "rasmlar/gx45_232.webp",
"gx45_234": "rasmlar/gx45_234.webp",
"gx45_235": "rasmlar/gx45_235.webp",
"gx45_236": "rasmlar/gx45_236.webp",
"gx45_238": "rasmlar/gx45_238.webp",
"gx45_258": "rasmlar/gx45_258.webp",
"gx45_262": "rasmlar/gx45_262.webp",
"gx45_266": "rasmlar/gx45_266.webp",
"gx45_268": "rasmlar/gx45_268.webp",
"gx45_269": "rasmlar/gx45_269.webp",
"gx45_270": "rasmlar/gx45_270.webp",
"gx45_272": "rasmlar/gx45_272.webp",
"gx45_273": "rasmlar/gx45_273.webp",
"gx45_275": "rasmlar/gx45_275.webp",
"gx45_277": "rasmlar/gx45_277.webp",
"gx45_281": "rasmlar/gx45_281.webp",
"gx45_283": "rasmlar/gx45_283.webp",
"gx45_284": "rasmlar/gx45_284.webp",
"gx45_288": "rasmlar/gx45_288.webp",
"gx45_289": "rasmlar/gx45_289.webp",
"gx45_295": "rasmlar/gx45_295.webp",
"gx45_297": "rasmlar/gx45_297.webp",
"gx45_299": "rasmlar/gx45_299.webp"
};

/* ===== 1-to‘plam ===== */
GEO_OCHIQ.push(["Bengaliya qo‘ltig‘i qirg‘oqlaridan 200 metr uzoqlikda, g‘avvoslar 250 metr chuqurlikka tushib suv ostidagi organizmlarni o‘rganishdi. Ular okeanning qaysi qismini o‘rganishgan?",["Shelf","Abissal","Batial","Okean botig‘i"],2]);
GEO_OCHIQ.push(["Geografik qobiqning bir butunlik qonuniyatida birorta komponent o‘zgarishga uchrasa (masalan, daraxtzorning kesilishi), boshqa komponentlarda ham yuz beradigan o‘zgarish oqibatini toping.",["Tog‘lardagi qor va muzliklar kunduzi ko‘proq eriydi.","Kechalari salqinroq, kunduzi issiqroq bo‘ladi.","Sutka davomida harorat va namlik o‘zgarib turadi.","Zararkunanda hasharotlar ko‘payadi."],1]);
GEO_OCHIQ.push(["Jak Iv Kusto va uning komandasi Tinch okeanda tadqiqot ishlari olib borish jarayonida suv ostida uzunligi 200 m bo‘lgan gigant suv o‘simliklari borligini ko‘rishdi. Ular Tinch okeanning qaysi qismida tadqiqot olib borishganini aniqlang.",["shimoliy kengliklarda","ekvatorial mintaqalarda","tropik kengliklarda","janubiy kengliklarda"],3]);
GEO_OCHIQ.push(["Quyida berilgan xarita-sxemada 1 raqami bilan ko‘rsatilgan dengiz nomini toping.",["Sariq dengiz","Sharqiy Xitoy dengizi","Janubiy Xitoy dengizi","Yapon dengizi"],3,"gx_v4"]);
GEO_OCHIQ.push(["Materiklar va ularga oid ma’lumotlar to‘g‘ri moslashtirilgan javobni toping.<br>1) Antarktida; 2) Shimoliy Amerika; 3) Avstraliya.<br>a) materik asosini qadimgi qattiq va mustahkam platforma tashkil etadi; b) shimoliy qismida qirlar va adirsimon balandliklar uchraydi; c) muz tagi relyefi o‘rtacha balandligi jihatdan eng past materik.",["1-a, 2-b, 3-c","1-b, 2-c, 3-a","1-c, 2-a, 3-b","1-c, 2-b, 3-a"],3]);
GEO_OCHIQ.push(["A. Gumboldt faoliyatiga taalluqli bo‘lgan geografik ma’lumotlarni toping.",["Geografik zonallik qonuniyati kashf qilindi va asoslab berildi, hozirgi paytda geografik zonallik haqidagi bilimlar uning ta’limotiga asoslanadi","Yevropa, Amerika, Osiyoga ekspeditsiya uyushtirib, juda ko‘p ma’lumotlar to‘pladi, ma’lumotlarni umumlashtirgan bir necha jildlik «Tabiat manzarasi», «Atmosfera hodisalari haqida» kabi yirik asarlarini yozdi","Balandlik mintaqalanishi qonuniyatini ilk bor Alp va And tog‘larida o‘rganib, ilmiy asoslab bergan","Osiyo qit’asidan birinchi bo‘lib yevropaliklarga ziravorlar olib borgan sayyoh"],2]);
GEO_OCHIQ.push(["Janubiy Amerika materigida joylashgan geografik obyektlarni toping.",["Orinoko pasttekisligi, Ukayali daryosi","Amazoniya pasttekisligi, Marakaybo sharsharasi","Parana daryosi, Orinoko irmog‘i","Paragvay GESi, Chako milliy bog‘i"],0]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Bu okeanda miloddan oldingi davrlarda finikiyaliklar, arablar, rimliklar okean suvlarida suzishgan. Baliq ovlash ko‘proq okeanning shimolida olib boriladi. Foydali qazilmalari asosan neft va gazdan iborat».</i><br>Matnda berilgan ma’lumotlar qaysi okeanga oid ekanligini aniqlang.",["Tinch","Atlantika","Hind","Shimoliy Muz"],1]);
GEO_OCHIQ.push(["Atoll – bu ...",["yarim yoy yoki yarim doira shaklidagi marjon oroli","bir-biridan unchalik uzoq bo‘lmagan va odatda bir butun deb hisoblanadigan orollar to‘dasi","alohida uchraydigan «yolg‘iz» orollar","juda kichik orollarni o‘z ichiga oladigan orollar guruhi"],0]);
GEO_OCHIQ.push(["Janubiy Amerika materigi tabiiy o‘lkalaridan biri Braziliya yassi tog‘ligiga xos bo‘lgan javobni toping.",["U, asosan, eng qadimgi kristall va metamorfik tog‘ jinslaridan tuzilgan. Kristall jinslar orasida temir, olmos, oltin, uran rudalari, marganes, rangdor metall rudalarining katta konlari bor. Yassi tog‘likning yuzasi chuqur daryo vodiylari bilan parchalangan, ular past-baland qirlarni eslatadi.","Bu yassi tog‘lik palaxsalanib ko‘tarilgan gorst va grabenlardan iborat. Chuqur ko‘llar grabenlarda tarkib topgan. Tog‘lar, platolar magmatik va metamorfik jinslardan tuzilgan. Botiqlar, cho‘kmalar, pasttekislik va tekisliklar cho‘kindi jinslar bilan qoplangan.","Bu o‘lka bir necha parallel joylashgan yassi tog‘liklardan tashkil topgan bo‘lib, ular bir-biridan chuqur vodiylar bilan ajralib turadi. Zilzilalar bo‘lib turadi, o‘nlab harakatdagi va so‘ngan vulqonlar bor. Bu tog‘lardan oltin, kumush, rangli metallar, neft va toshko‘mir qazib olinadi.","O‘lkaning relyefi, asosan, yassi tog‘liklardan iborat. Bu yassi tog‘liklar o‘lkaning markaziy qismida joylashgan. Uning yuzasi dengiz sathidan o‘rtacha 400–600 m baland. Yassi tog‘liklarda lava-vulqon yotqiziqlari ko‘p uchraydi."],0]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Tropik iqlim mintaqasi yil davomida issiq bo‘lib, Atlantika okeani havo massalarining hukmronligi sezilib turadi. Yozda namgarchilik ko‘p bo‘ladi. Faqat mintaqaning g‘arbida quruq, tumanli kunlarni kuzatish mumkin».</i><br>Matnda berilgan ma’lumotlar qaysi materikka oid ekanligini toping.",["Afrika","Janubiy Amerika","Yevrosiyo","Shimoliy Amerika"],3]);
GEO_OCHIQ.push(["Atlantika okeanida joylashgan dengizlarni belgilang.",["Liguriya, Hamdo‘stlik, Ueddell","Amundsen, Ioniya, Adriatika","Irlandiya, Balear, Dyurvil","Skosha, Alboran, Balear"],3]);
GEO_OCHIQ.push(["Qashqadaryo viloyatining maydoni 28,6 ming km². 2025-yilda Qashqadaryo viloyatining urbanizatsiya darajasi 43 % edi. Ayni davrda viloyatda qishloq aholisining soni 2 036 000 kishini tashkil etgan. Ushbu ma’lumotlar asosida viloyat aholisining o‘rtacha zichligini aniqlang (yaxlitlab oling).",["127 kishi","71 kishi","128 kishi","125 kishi"],3]);
GEO_OCHIQ.push(["Berilgan diagramma ko‘rsatkichlari asosida hisoblang: qaysi yilda shahar aholisining umumiy o‘sish ko‘rsatkichi eng yuqori bo‘lgan?",["1995-yil","2005-yil","2010-yil","2015-yil"],3,"gx_v14"]);
GEO_OCHIQ.push(["Yevrosiyoning o‘rmon-dasht va dasht zonalarida eng ko‘p uchraydigan o‘t o‘simliklarni aniqlang.",["Chalov, betaga, bizon o‘ti","Chalov, betaga, yovvoyi tariq","Iloq, betaga, shuvoq","Izen, chalov, qo‘ng‘irbosh"],2]);
GEO_OCHIQ.push(["Sayyohlarning amalga oshirgan ishlari mos ravishda to‘g‘ri berilgan javobni toping.",["1-a, 2-c, 3-b, 4-d","1-c, 2-d, 3-a, 4-b","1-c, 2-d, 3-b, 4-a","1-c, 2-a, 3-b, 4-d"],2,"gx_v16"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Janubiy Amerika tabiatiga insonning ta’siri materikka yevropaliklar kirib kelgandan so‘ng kuchaydi. O‘rmonlar ayovsiz kesildi, o‘rniga ekinzor va yirik plantatsiyalar barpo etildi».</i><br>Janubiy Amerikadagi mahalliy omillar tufayli tabiat komponentlari va geotizimlarning o‘zgarishi qaysi geografik qonuniyat xususiyatiga xosligini toping.",["Kenglik zonalligi","Sektorlik","Azonallik","Bir butunlik"],2]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining qaysi raqamda berilgan o‘lkasi bir necha parallel joylashgan tog‘lardan tashkil topgan bo‘lib, ular bir-biridan chuqur vodiylar bilan ajralib turadi?",["VIII","X","XI","XII"],1,"gx_v18"]);
GEO_OCHIQ.push(["Shimoliy Amerika materigini o‘rganish maqsadida uyushtirilgan ilmiy tadqiqot davomida havo shari 18 km balandlikkacha ko‘tarildi. Havo shari atmosferaning qaysi qatlamiga ko‘tarilganini toping.",["Troposfera","Stratosfera","Mezosfera","Termosfera"],1]);
GEO_OCHIQ.push(["Avstraliya tabiati bir-biridan o‘zgacha bo‘lgan 7 ta tabiiy geografik o‘lkaga ajratiladi. G‘arbiy Avstraliya o‘lkasiga quyidagi qaysi obyektlar kirmaydi?<br>1. Gibson; 2. Kuper-Krik; 3. Viktoriya Katta cho‘li; 4. Katta Qumli cho‘l; 5. Viktoriya tog‘lari; 6. Kimberli yarimoroli; 7. Nallarbor tekisligi.",["2, 6, 7","2, 5, 6","1, 2, 7","5, 6, 7"],1,"gx_v20"]);
GEO_OCHIQ.push(["Qadimgi yunon olimi Aristotel Yerning sharsimonligini mantiqan aniqlashda quyidagi qaysi jarayonlarga asoslangan?<br>1. Dengizdagi kemalarning harakati<br>2. Quyoshning chiqishi va botishi<br>3. Oy tutilishi<br>4. Barcha osmon jismlarining sharsimon shaklda ko‘rinishi<br>5. Yulduzlarning harakat yo‘nalishi<br>6. Yuqoriga ko‘tarilgan sari ko‘rinarli ufq (gorizont)ning kengayib borishi",["1, 2, 3, 5","1, 3, 4, 5","2, 4, 5, 6","1, 3, 4, 6"],3]);
GEO_OCHIQ.push(["Grunt suvlar sathi qaysi fasllarda pasayib qoladi?",["kuz va bahor","kuz va qish","qish va bahor","yoz va kuz"],3]);
GEO_OCHIQ.push(["Karib havzasi orol mamlakatlari qaysi iqlim mintaqasida joylashgan?",["Ekvatorial","Subekvatorial","Tropik","Subtropik"],2]);
GEO_OCHIQ.push(["Migratsiyaga oid ma’lumot berilgan javobni aniqlang.",["Afrikada O‘rta dengiz sohillari, Gvineya qo‘ltig‘i va materikning janubi-sharqiy sohillarida aholi zich joylashgan.","Avstraliya aholisining asosiy qismi inglizlar va ingliz tilida so‘zlashuvchi avstraliyaliklardan iborat.","Janubiy Amerikaga XVI asrda dastlab ispanlar bilan portugallar, keyinchalik esa Yevropa, Osiyo va Afrika mamlakatlaridan kelib o‘rnashgan.","Shimoliy Amerikaning tubjoy aholisi indeyeslar, eskimoslar va aleutlardir."],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Okean suvlarida baliqlardan sardinella, skumbriya, akula, kitlar, mollyuskalar (kalmarlar) yashaydi. Dengiz sayozliklarida, marjon riflari atrofida organizmlar eng ko‘p tarqalgan. Bu yerlarda haqiqiy suvosti o‘tloqlarini uchratish mumkin».</i><br>Matnda berilgan ma’lumotlar qaysi okeanga oid ekanligini aniqlang.",["Tinch","Atlantika","Hind","Shimoliy Muz"],2]);
GEO_OCHIQ.push(["Agar 500 km li masofa birinchi globusda 5 cm ga, ikkinchi globusda esa 2,5 cm ga teng bo‘lsa, ushbu globuslarning masshtabini aniqlang.",["1:10 000 000; 1:20 000 000","1:1 000 000; 1:2 000 000","1:25 000 000; 1:50 000 000","1:2 500 000; 1:5 000 000"],0]);
GEO_OCHIQ.push(["Yevrosiyo materigi iqlimi to‘g‘risida berilgan ma’lumotlarni aniqlang.",["eng issiq materik hisoblanadi, oltita iqlim mintaqasi shakllangan, tropik iqlim mintaqasi katta maydonni egallaydi","iqlimi boshqa materiklar iqlimiga qaraganda ancha xilma-xil, bu yerda Shimoliy yarimsharning sovuqlik qutbi joylashgan","materik oltita iqlim mintaqasida joylashgan. Ular shimoldan janubga quyidagi tartibda almashinadi: subekvatorial (2 ta), ekvatorial, tropik, subtropik va mo‘tadil","materik ichkarisida sovuq va quruq antarktida havo massalari (antisiklon) shakllanadi, materikning markaziy va g‘arbiy qismlarida yog‘ingarchilik juda kam bo‘ladi"],1]);
GEO_OCHIQ.push(["Janubiy Amerikaning sharqiy qismi katta maydonlarni egallagan qanday relyef shakllaridan iborat?",["yassi tog‘lik va baland tekisliklardan","qirlar va adirsimon balandliklar","plato, tog‘lik va yassi tog‘likdan","tekislik va yassi tog‘liklar"],3]);
GEO_OCHIQ.push(["Janubiy Amerikaning tabiiy sharoiti qattiq, yog‘in kam yog‘adigan Patagoniya deb ataladigan o‘lkasi qaysi iqlim mintaqasida joylashganini aniqlang.",["tropik","subekvatorial","subtropik","mo‘tadil"],3]);
GEO_OCHIQ.push(["Yozuvsiz xaritada yulduzcha bilan belgilangan hududga xos bo‘lgan tabiat zonasini aniqlang.",["Qattiq bargli o‘rmonlar va butazorlar","Aralash o‘rmonlar","Fasliy nam doimiy yashil o‘rmonlar","Tropik o‘rmonlar"],1,"gx_v30"]);
GEO_OCHIQ.push(["Shimoliy Amerikaning qaysi iqlim mintaqasida Atlantika okeani havo massalarining hukmronligi sezilib turadi? Yozda namgarchilik ko‘p bo‘ladi. Faqat mintaqaning g‘arbida quruq, tumanli kunlarni kuzatish mumkin.",["tropik","subekvatorial","mo‘tadil","ekvatorial"],0]);
GEO_OCHIQ.push(["Afrika materigining yozuvsiz xaritasida 10° sh.k. parallel chizig‘i qaysi geografik obyekt ustidan kesib o‘tmaganligini aniqlang.",["Niger daryosi","Shari daryosi","Darfur platosi","Efiopiya tog‘ligi"],2,"gx_v32"]);
GEO_OCHIQ.push(["Agar tog‘ etagida barometr 740 mm ni, tog‘ tepasida 362 mm ni ko‘rsatsa, tog‘ning o‘rtacha balandligini aniqlang.",["3860 m","3780 m","3870 m","580 m"],1,"gx_v33"]);
GEO_OCHIQ.push(["Quyida berilgan jadvalda aholining milliy tarkibi (foiz hisobida) bo‘yicha berilgan ma’lumotlarni moslashtiring (2018-yil).",["1b, 2a, 3c, 4e, 5f, 6d","1b, 2f, 3d, 4e, 5c, 6a","1b, 2c, 3e, 4d, 5a, 6f","1b, 2c, 3d, 4e, 5f, 6a"],3,"gx_v34"]);
GEO_OCHIQ.push(["Xaritada yulduzcha bilan tasvirlangan gidrografik obyektni toping.",["Karib dengizi","Sargasso dengizi","Meksika qo‘ltig‘i","Gudzon qo‘ltig‘i"],2,"gx_v35"]);
GEO_YOZMA.push(["<b>Ushbu chizmaga mos javobni toping.</b><br>a) Ushbu chizmada AB yo‘nalish azimuti 310° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.<br>b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",[["a) Ushbu chizmada AB yo‘nalish azimuti 310° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.",/shimol.?-?shimol.?-?sharq|shimoli.?-?sharq/i],["b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",/65/i]],"gx_w36"]);
GEO_KALIT.push("a) Shimol-shimoliy-sharq; b) 65°");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Soat 09:00 da havoning mutlaq namligini aniqlang.<br>b) Soat 12:00 da 1 m³ havoning namga to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",[["a) Soat 09:00 da havoning mutlaq namligini aniqlang.",/\b3\b/i],["b) Soat 12:00 da 1 m³ havoning namga to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",/2[.,]7/i]],"gx_w37"]);
GEO_KALIT.push("a) 3 g; b) 2,7 g");
GEO_YOZMA.push(["<b>Dengiz sathida me’yoriy bosim bo‘lganda, tog‘ etagi va alpinistlar qarorgohi orasidagi me’yoriy bosim 185 mm, alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi nisbiy balandlik 1650 m ga teng.</b><br>a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.<br>b) Alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi harorat necha gradusga farq qilishini aniqlang.",[["a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.",/3\s?500/i],["b) Alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi harorat necha gradusga farq qilishini aniqlang.",/9[.,]9/i]]]);
GEO_KALIT.push("a) 3500 m; b) 9,9 °C");
GEO_YOZMA.push(["<b>Shimoliy Amerika relyefiga oid ma’lumotlarni toping.</b><br>a) Materikning qaysi qismida qirlar va adirsimon balandliklar uchraydi?<br>b) Materikning sharqiy qismida qaysi tog‘ joylashgan?",[["a) Materikning qaysi qismida qirlar va adirsimon balandliklar uchraydi?",/shimol/i],["b) Materikning sharqiy qismida qaysi tog‘ joylashgan?",/appalach/i]]]);
GEO_KALIT.push("a) shimoliy qismida (Lavrentiy qirlari); b) Appalachi tog‘lari");
GEO_YOZMA.push(["<b>Jadval ma’lumotlaridan foydalanib topshiriqlarni bajaring.</b><br>a) Mamlakatda 2021-yilda shahar aholisi salmog‘i necha foizni tashkil etganini aniqlang.<br>b) 2021-yilda aholi soni necha kishiga ko‘payganini aniqlang.",[["a) Mamlakatda 2021-yilda shahar aholisi salmog‘i necha foizni tashkil etganini aniqlang.",/38[.,]1/i],["b) 2021-yilda aholi soni necha kishiga ko‘payganini aniqlang.",/297\s?000/i]],"gx_w40"]);
GEO_KALIT.push("a) 38,15 %; b) 297 000 kishi");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) 2015-yilda mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang.<br>b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng ko‘p ko‘payganini aniqlang.",[["a) 2015-yilda mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang.",/620\s?920/i],["b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng ko‘p ko‘payganini aniqlang.",/2010/i]],"gx_w41"]);
GEO_KALIT.push("a) 620 920 kishi; b) 2010-yil");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Qaysi yilda mintaqa aholisi soni eng ko‘p ko‘payganini aniqlang.<br>b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng past ko‘rsatkich qayd etilgan?",[["a) Qaysi yilda mintaqa aholisi soni eng ko‘p ko‘payganini aniqlang.",/2005/i],["b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng past ko‘rsatkich qayd etilgan?",/2020/i]],"gx_w42"]);
GEO_KALIT.push("a) 2005-yil; b) 2020-yil");
GEO_YOZMA.push(["<b>Jadval ma’lumotlaridan foydalanib topshiriqlarni bajaring.</b><br>a) Mamlakatda 2022-yilda shahar aholisi tabiiy ko‘payish hisobiga qancha kishiga ko‘payganligini aniqlang.<br>b) 2022-yilda umumiy aholi soni necha kishiga ko‘payganini aniqlang.",[["a) Mamlakatda 2022-yilda shahar aholisi tabiiy ko‘payish hisobiga qancha kishiga ko‘payganligini aniqlang.",/22\s?800/i],["b) 2022-yilda umumiy aholi soni necha kishiga ko‘payganini aniqlang.",/13\s?680/i]],"gx_w43"]);
GEO_KALIT.push("a) 22 800 kishi; b) 13 680 kishi");
GEO_YOZMA.push(["<b>Dengiz sathida me’yoriy bosim bo‘lganda tog‘ etagining dengiz sathidan balandligi 250 m ga teng, tog‘ etagidan alpinistlar qarorgohigacha 1350 m, alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi harorat farqi 4,134 °C ga teng.</b><br>a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.<br>b) Tog‘ning mutlaq balandligini aniqlab, bu qaysi cho‘qqi ekanligini yozing (tog‘ cho‘qqisi nomi va balandligi yoziladi).",[["a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.",/2\s?039/i],["b) Tog‘ning mutlaq balandligini aniqlab, bu qaysi cho‘qqi ekanligini yozing (tog‘ cho‘qqisi nomi va balandligi yoziladi).",/zarkosa|2\s?289/i]]]);
GEO_KALIT.push("a) 2039 m; b) Zarkosa cho‘qqisi, 2289 m");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Havo haroratining sutkalik amplitudasini aniqlang.<br>b) Sutkalik o‘rtacha havo haroratining qiymatini toping.",[["a) Havo haroratining sutkalik amplitudasini aniqlang.",/12/i],["b) Sutkalik o‘rtacha havo haroratining qiymatini toping.",/0[.,]125|0[.,]1/i]],"gx_w45"]);
GEO_KALIT.push("a) 12 °C; b) −0,125 °C (≈ −0,1 °C)");

/* ===== 2-to‘plam ===== */
GEO_OCHIQ.push(["Gudzon qo‘ltig‘i qirg‘oqlaridan 700 metr uzoqlikda g‘avvoslar 1000 metr chuqurlikka tushib, suv ostidagi organizmlarni o‘rganishdi. Ular okeanning qaysi qismini o‘rganishgan?",["Shelf","Abissal","Batial","Okean botig‘i"],2]);
GEO_OCHIQ.push(["Afrika materigining qaysi qismida qimmatbaho mebellar ishlanadigan qizil daraxt, yog‘ olinadigan palma, seyba, muskat daraxtlari, kauchuk olinadigan daraxtlar o‘sadi?",["markaziy","shimoliy","sharqiy","janubiy"],0]);
GEO_OCHIQ.push(["Gviana yassi tog‘ligining shimoliy qismida qaysi tabiat zonasi tarkib topgan?",["dashtlar","doimiy yashil o‘rmonlar","savannalar","chalacho‘llar va cho‘llar"],1]);
GEO_OCHIQ.push(["Janubiy Amerika materigini ilmiy jihatdan o‘rganishda qaysi olimlarning xizmati katta bo‘ldi?",["G. Langsdorf, N. Rubsov","A. Gumboldt, E. Bonplan","A. Vespuchchi, Ch. Darvin","N. Vavilov, A. Voyeykov"],1]);
GEO_OCHIQ.push(["Qachon Alyaska AQShga sotib yuborilgan?",["1798-yil","1876-yil","1855-yil","1867-yil"],3]);
GEO_OCHIQ.push(["Quyidagi rasmda 9-raqam bilan «Ziravorlar vatani» nomi bilan mashhur Afrika materigining qaysi oroli tasvirlangan?",["Komor oroli","Zanzibar oroli","Madeyra oroli","Kanar oroli"],1,"gx2_v6"]);
GEO_OCHIQ.push(["Erik Rauda Shimoliy Amerika materigining qaysi qismlarini o‘rgangan?",["Nyufaundlend orolini va Labrador yarimorolini","Grenlandiyani, materikning shimoli-sharqiy qismlarini","Aleut orollari va Alyaska sohillarini","Materikning shimoli-g‘arbiy sohillarini"],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Tropik iqlim mintaqasi yil davomida issiq bo‘lib, Atlantika okeani havo massalarining hukmronligi sezilib turadi. Yozda namgarchilik ko‘p bo‘ladi. Faqat mintaqaning g‘arbida quruq, tumanli kunlarni kuzatish mumkin».</i><br>Matnda berilgan ma’lumotlar qaysi materikka oid ekanligini toping.",["Afrika","Janubiy Amerika","Yevrosiyo","Shimoliy Amerika"],3]);
GEO_OCHIQ.push(["Quyidagi daryolardan qaysi biri Shimoliy Muz okeaniga quyiladi?",["Yukon","Kolorado","Makkenzi","Rio-Grande"],2]);
GEO_OCHIQ.push(["Qashqadaryo viloyatining maydoni 28,6 ming km². 2025-yilda Qashqadaryo viloyatining urbanizatsiya darajasi 43 % edi. Ayni davrda viloyatda qishloq aholisining soni 2 036 000 kishini tashkil etgan. Ushbu ma’lumotlar asosida viloyat aholisining o‘rtacha zichligini aniqlang (yaxlitlab oling).",["127 kishi","71 kishi","128 kishi","125 kishi"],3]);
GEO_OCHIQ.push(["Tanganika ko‘li haqida bildirilgan to‘g‘ri ma’lumotni toping.",["Maydoniga ko‘ra Afrikadagi eng yirik ko‘l hisoblanadi.","Yomg‘irlar davrida ko‘l maydoni ikki baravar kengayadi.","Uzunligi 560 km ni, chuqurligi 706 metrni tashkil etadi.","Atrofini 2000 metrgacha balandlikdagi tog‘lar o‘rab turadi."],3]);
GEO_OCHIQ.push(["Quyidagi javoblar ichidan Shimoliy Amerika materigi haqida bildirilgan to‘g‘ri fikrlarni toping.<br>1) eng baland harakatdagi vulqoni mavjud; 2) eng katta oroli bor; 3) eng issiq materik; 4) eng go‘zal va maftunkor sharsharasi bor; 5) eng uzun vodiy muzligi bor; 6) qirg‘og‘i eng kam parchalangan; 7) eng baland suv qalqishi bo‘ladi; 8) eng uzun lianalar o‘sadi.",["1, 3, 6, 7","1, 4, 6, 8","2, 3, 5, 8","2, 4, 5, 7"],3]);
GEO_OCHIQ.push(["Amazonka daryosi suvining teskari oqish hodisasi necha km yuqori oqimigacha kuzatiladi?",["1 200 km","1 400 km","2 000 km","1 800 km"],1]);
GEO_OCHIQ.push(["Sayyohlarning amalga oshirgan ishlari mos ravishda to‘g‘ri berilgan javobni toping.",["1-D, 2-B, 3-C, 4-A","1-B, 2-D, 3-A, 4-C","1-C, 2-A, 3-B, 4-D","1-D, 2-B, 3-C, 4-A"],0,"gx2_v14"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Janubiy Amerika tabiatiga insonning ta’siri materikka yevropaliklar kirib kelgandan so‘ng kuchaydi. O‘rmonlar ayovsiz kesildi, o‘rniga ekinzor va yirik plantatsiyalar barpo etildi».</i><br>Janubiy Amerikadagi mahalliy omillar tufayli tabiat komponentlari va geotizimlarning o‘zgarishi qaysi geografik qonuniyat xususiyatiga xosligini toping.",["Kenglik zonalligi","Sektorlik","Azonallik","Bir butunlik"],2]);
GEO_OCHIQ.push(["Qaysi materikda har ikkala kengliklar bo‘yicha iqlim mintaqalari va tabiat zonalari takrorlanib joylashgan?",["Afrika","Janubiy Amerika","Avstraliya","Yevrosiyo"],0]);
GEO_OCHIQ.push(["Quyidagi atamalarning qaysi biri Antarktida materigi uchun xos?",["paramos","Rus Amerikasi","nunatak","Denali"],2]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining qaysi raqamda berilgan o‘lkasi bir necha parallel joylashgan tog‘lardan tashkil topgan bo‘lib, ular bir-biridan chuqur vodiylar bilan ajralib turadi?",["VIII","X","XI","XII"],1,"gx2_v18"]);
GEO_OCHIQ.push(["Bu yerda yoz nihoyatda sernamligi, qish esa quruqligi va salqinligi bilan ajralib turadi. Sernam o‘rmonlar uchun kameliya, kamforali dafna, paporotnik daraxtlari xos. Hayvonot olamida panda, qoplon, gibbon, tapir, piton ilonlari uchraydi. Yevrosiyodagi ushbu tabiat zonasi qaysi iqlim mintaqasida joylashgan?",["subtropik","tropik","subekvatorial","ekvatorial"],0]);
GEO_OCHIQ.push(["Avstraliya tabiati bir-biridan o‘zgacha bo‘lgan 7 ta tabiiy geografik o‘lkaga ajratiladi. Markaziy tekislik o‘lkasiga quyidagi qaysi obyektlar kirmaydi?<br>1. Gibson; 2. Kuper-Krik; 3. Viktoriya Katta cho‘li; 4. Katta Qumli cho‘l; 5. Darling; 6. Eyr-Nort ko‘li; 7. Nallarbor tekisligi.",["1, 3, 6, 7","1, 2, 5, 6","1, 3, 4, 7","1, 5, 6, 7"],2]);
GEO_OCHIQ.push(["O‘zbekiston hududini o‘rganish maqsadida uyushtirilgan ilmiy tadqiqot davomida havo shari 18,5 km balandlikkacha ko‘tarildi. Havo shari atmosferaning qaysi qatlamiga ko‘tarilganini toping.",["Troposfera","Stratosfera","Mezosfera","Termosfera"],1]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining qaysi tabiat zonasida sudralib yuruvchilar, kemiruvchilar, qalqondorlar yashaydi?",["o‘rmon-dasht va dasht","chalacho‘l va cho‘l","fasliy nam o‘rmonlar","savannalar va siyrak o‘rmonlar"],1]);
GEO_OCHIQ.push(["Janubiy Amerikaning dasht zonasiga xos bo‘lmagan xususiyatni belgilang.",["mo‘tadil iqlim mintaqasi tarkib topgan bo‘lib, tabiiy sharoit qattiq, yog‘in kam yog‘adi","sernam subtropik iqlim sharoiti tarkib topgan","qizil ferralit tuproqlar hosil bo‘lgan","o‘simliklardan asosan chalov, betaga, yovvoyi tariq uchraydi"],0]);
GEO_OCHIQ.push(["Chako milliy bog‘i qaysi davlatda joylashgan?",["Braziliya","Argentina","Venesuela","Urugvay"],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Okean suvlarida baliqlardan sardinella, skumbriya, akula, kitlar, mollyuskalar (kalmarlar) yashaydi. Dengiz sayozliklarida, marjon riflari atrofida organizmlar eng ko‘p tarqalgan. Bu yerlarda haqiqiy suvosti o‘tloqlarini uchratish mumkin».</i><br>Matnda berilgan ma’lumotlar qaysi okeanga oid ekanligini aniqlang.",["Tinch","Atlantika","Hind","Shimoliy Muz"],2]);
GEO_OCHIQ.push(["Chizmadagi D va N nuqtalar qaysi yarimsharda joylashganini aniqlang.",["D – janubiy; N – janubiy","D – janubiy; N – shimoliy","D – shimoliy; N – shimoliy","D – shimoliy; N – janubiy"],3,"gx2_v26"]);
GEO_OCHIQ.push(["Shimoliy Afrika tabiiy geografik o‘lkasi hududidagi bir-biridan farq qiladigan tabiat komplekslarini aniqlang.<br>1) qattiq bargli doimiy yashil o‘rmonlar va butazorlar; 2) qumli va toshloq cho‘lli Sahroyi Kabir; 3) Kongo havzasi; 4) Buyuk Afrika yer yorig‘i; 5) o‘t o‘simlikka boy savannali Sudan.",["1, 2, 4","1, 2, 5","1, 2, 3","2, 4, 5"],1]);
GEO_OCHIQ.push(["Indeyslar bilan negrlarning chatishishidan hosil bo‘lgan avlodlar nima deb ataladi?",["maori","mulat","sambo","metis"],2]);
GEO_OCHIQ.push(["Mamlakatimizdagi qaysi shaharlar viloyat bo‘ysunuviga o‘tkazilgan eng yangi shaharlar hisoblanadi?",["Xiva, Shahrisabz","Denov, Taxiatosh","Ohangaron, Xovos","Asaka, Quvasoy"],0]);
GEO_OCHIQ.push(["Patagoniya o‘lkasi Janubiy Amerika materigining qaysi tabiat zonasida joylashgan?",["chalacho‘l","savanna","dasht","cho‘l"],0]);
GEO_OCHIQ.push(["Rasmda 5 va 6-raqamlarda qaysi iqlim mintaqalari tasvirlangan?",["5 – subtropik, 6 – subekvatorial","5 – subtropik, 6 – mo‘tadil","5 – subtropik, 6 – ekvatorial","5 – tropik, 6 – mo‘tadil"],1,"gx2_v31"]);
GEO_OCHIQ.push(["Afrika materigining yozuvsiz xaritasidan foydalanib quyidagilarni aniqlang: agar sayyoh ekvator bo‘ylab g‘arbdan sharqqa tomon 1, 2, 3-raqamlar yo‘nalishida harakat qilsa, u qaysi tabiat zonalarini kesib o‘tadi?",["1 – sernam ekvatorial o‘rmonlar; 2 – fasliy sernam o‘rmonlar; 3 – savannalar va siyrak o‘rmonlar","1 – fasliy sernam o‘rmonlar; 2 – savannalar va siyrak o‘rmonlar; 3 – qattiq bargli o‘rmonlar","1 – qattiq bargli doimiy yashil o‘rmonlar; 2 – sernam ekvatorial o‘rmonlar; 3 – chalacho‘llar","1 – fasliy sernam o‘rmonlar; 2 – sernam ekvatorial o‘rmonlar; 3 – savannalar va siyrak o‘rmonlar"],0,"gx2_v33"]);
GEO_OCHIQ.push(["Quyida berilgan jadvalda aholining milliy tarkibi (foiz hisobida) bo‘yicha berilgan ma’lumotlarni moslashtiring (2018-yil).",["1b, 2a, 3c, 4e, 5f, 6d","1b, 2f, 3d, 4e, 5c, 6a","1b, 2c, 3e, 4d, 5a, 6f","1b, 2c, 3d, 4e, 5f, 6a"],3,"gx2_v34"]);
GEO_OCHIQ.push(["Agar tog‘ etagida barometr 740 mm ni, tog‘ tepasida 362 mm ni ko‘rsatsa, tog‘ning o‘rtacha balandligini aniqlang.",["3860 m","3780 m","3870 m","580 m"],1,"gx2_v35b"]);
GEO_OCHIQ.push(["Xaritada yulduzcha bilan tasvirlangan gidrografik obyektni toping.",["Karib dengizi","Sargasso dengizi","Meksika qo‘ltig‘i","Gudzon qo‘ltig‘i"],2,"gx2_v35m"]);
GEO_YOZMA.push(["<b>Ushbu chizmaga mos javobni toping.</b><br>a) Ushbu chizmada AB yo‘nalish azimuti 310° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.<br>b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",[["a) Ushbu chizmada AB yo‘nalish azimuti 310° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.",/shimol.?-?shimol.?-?sharq|shimoli.?-?sharq/i],["b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",/65/i]],"gx2_w36"]);
GEO_KALIT.push("a) Shimol-shimoliy-sharq; b) 65°");
GEO_YOZMA.push(["<b>Dengiz sathida me’yoriy bosim bo‘lganda tog‘ etagining dengiz sathidan balandligi 250 m ga teng, tog‘ etagidan alpinistlar qarorgohigacha 1350 m, alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi harorat farqi 4,134 °C ga teng.</b><br>a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.<br>b) Tog‘ning mutlaq balandligini aniqlab, bu qaysi cho‘qqi ekanligini yozing (tog‘ cho‘qqisi nomi va balandligi yoziladi).",[["a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.",/2\s?039/i],["b) Tog‘ning mutlaq balandligini aniqlab, bu qaysi cho‘qqi ekanligini yozing (tog‘ cho‘qqisi nomi va balandligi yoziladi).",/zarkosa|2\s?289/i]]]);
GEO_KALIT.push("a) 2039 m; b) Zarkosa cho‘qqisi, 2289 m");
GEO_YOZMA.push(["<b>Rasmdagi ko‘llarga berilgan ta’rifni toping.</b><br>a) Qaysi raqamdagi ko‘llar oralig‘ida Niagara sharsharasi hosil bo‘lgan?<br>b) Barcha raqamlardagi ko‘llar nomini yozing.",[["a) Qaysi raqamdagi ko‘llar oralig‘ida Niagara sharsharasi hosil bo‘lgan?",/4.*5/i],["b) Barcha raqamlardagi ko‘llar nomini yozing.",/yuqori|superior/i]],"gx2_w38"]);
GEO_KALIT.push("a) 4 va 5; b) 1 – Yuqori ko‘l (Superior), 2 – Michigan, 3 – Guron, 4 – Eri, 5 – Ontario");
GEO_YOZMA.push(["<b>Shimoliy Amerika relyefiga oid ma’lumotlarni toping.</b><br>a) Materikning qaysi qismida qirlar va adirsimon balandliklar uchraydi?<br>b) Materikning sharqiy qismida qaysi tog‘ joylashgan?",[["a) Materikning qaysi qismida qirlar va adirsimon balandliklar uchraydi?",/shimol/i],["b) Materikning sharqiy qismida qaysi tog‘ joylashgan?",/appalach/i]]]);
GEO_KALIT.push("a) shimoliy qismida (Lavrentiy qirlari); b) Appalachi tog‘lari");
GEO_YOZMA.push(["<b>Mamont g‘origa berilgan savollarga javob bering.</b><br>a) Mamont g‘ori necha yilda g‘orning qo‘shni Flint g‘ori bilan bog‘langani aniqlangan?<br>b) Mamont g‘ori (Flint g‘ori bilan birga)ning umumiy uzunligi necha kilometrga yetadi?",[["a) Mamont g‘ori necha yilda g‘orning qo‘shni Flint g‘ori bilan bog‘langani aniqlangan?",/1973/i],["b) Mamont g‘ori (Flint g‘ori bilan birga)ning umumiy uzunligi necha kilometrga yetadi?",/500/i]],"gx2_w40"]);
GEO_KALIT.push("a) 1973-yil; b) 500 km");
GEO_YOZMA.push(["<b>Quyidagi olimga berilgan savollarga javob bering.</b><br>a) Quyidagi olim nechanchi yilda «Sayyoh olimlar» asarini yozgan?<br>b) Quyidagi olim boshchiligida ulkan globus nechanchi yilda yasalgan?",[["a) Quyidagi olim nechanchi yilda «Sayyoh olimlar» asarini yozgan?",/1981/i],["b) Quyidagi olim boshchiligida ulkan globus nechanchi yilda yasalgan?",/1984/i]],"gx2_w41"]);
GEO_KALIT.push("a) 1981-yil; b) 1984-yil");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Qaysi yilda mintaqa aholisi soni eng ko‘p ko‘payganini aniqlang.<br>b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng past ko‘rsatkich qayd etilgan?",[["a) Qaysi yilda mintaqa aholisi soni eng ko‘p ko‘payganini aniqlang.",/2005/i],["b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng past ko‘rsatkich qayd etilgan?",/2020/i]],"gx2_w42"]);
GEO_KALIT.push("a) 2005-yil; b) 2020-yil");
GEO_YOZMA.push(["<b>Exolot yordamida okean chuqurligini aniqlashga berilgan savollarga javob bering.</b> (Ultratovushning dengiz suvidagi tezligini 1500 m/s deb hisoblang.)<br>a) Rasmdagi a harfi o‘rniga 4 sekund qo‘yilsa, ushbu nuqtada dengizning chuqurligi necha metrga teng bo‘ladi?<br>b) Rasmdagi b harfi o‘rniga 6 sekund qo‘yilsa, ushbu nuqtada dengizning chuqurligi necha metrga yetadi?",[["a) Rasmdagi a harfi o‘rniga 4 sekund qo‘yilsa, ushbu nuqtada dengizning chuqurligi necha metrga teng bo‘ladi?",/3\s?000/i],["b) Rasmdagi b harfi o‘rniga 6 sekund qo‘yilsa, ushbu nuqtada dengizning chuqurligi necha metrga yetadi?",/4\s?500/i]],"gx2_w43"]);
GEO_KALIT.push("a) 3000 m; b) 4500 m");
GEO_YOZMA.push(["<b>Azimut va dunyo tomonlarini aniqlashga berilgan savollarga javob bering.</b> Quyidagi chizmadan foydalanib topshiriqlarni bajaring: AB yo‘nalish – SHARQ.<br>a) AC yo‘nalishi qaysi tomonga mos kelishini aniqlang.<br>b) AC yo‘nalishdan uning shimoli-g‘arb tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",[["a) AC yo‘nalishi qaysi tomonga mos kelishini aniqlang.",/janub/i],["b) AC yo‘nalishdan uning shimoli-g‘arb tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",/165/i]],"gx2_w44"]);
GEO_KALIT.push("a) Janubi-sharq (azimut 150°); b) 165°");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Havo haroratining sutkalik amplitudasini aniqlang.<br>b) Sutkalik o‘rtacha havo haroratining qiymatini toping.",[["a) Havo haroratining sutkalik amplitudasini aniqlang.",/12/i],["b) Sutkalik o‘rtacha havo haroratining qiymatini toping.",/0[.,]125|0[.,]1/i]],"gx2_w45"]);
GEO_KALIT.push("a) 12 °C; b) −0,125 °C (≈ −0,1 °C)");

/* ===== 3-to‘plam ===== */
GEO_OCHIQ.push(["Shimoliy Amerika materigida birinchi milliy bog‘ qachon tashkil etilgan?",["1867-yil","1878-yil","1894-yil","1872-yil"],3]);
GEO_OCHIQ.push(["Namib cho‘lining shimol va sharq tomonlarida qaysi tabiat zonasi boshlanadi?",["savannalar","chalacho‘llar","fasliy nam o‘rmonlar","qattiq bargli doimiy yashil o‘rmonlar va butazorlar"],1]);
GEO_OCHIQ.push(["Mamlakatimizdagi neft-gazli mintaqalar qaysilar?",["Chirchiq-Ohangaron, Buxoro-Xiva, Janubi-g‘arbiy Hisor, Surxondaryo, Farg‘ona","Qizilqum, Buxoro-Xiva, Janubi-g‘arbiy Hisor, Surxondaryo, Farg‘ona","Mirzacho‘l, Buxoro-Xiva, Janubi-g‘arbiy Hisor, Surxondaryo, Farg‘ona","Ustyurt, Buxoro-Xiva, Janubi-g‘arbiy Hisor, Surxondaryo, Farg‘ona"],3]);
GEO_OCHIQ.push(["Alyaska qachon ruslar tomonidan monopoliyaga aylantirilgan?",["1867-yil","1798-yil","1832-yil","1786-yil"],1]);
GEO_OCHIQ.push(["Quyidagi javoblar ichidan Kongo daryosiga xos bo‘lgan xususiyatlarni toping.<br>1) quyi oqimida delta hosil qiladi; 2) uzunligiga ko‘ra Afrikaning ikkinchi yirik daryosi; 3) daryo sohilida Ansongo-Menaka qo‘riqxonasi mavjud; 4) ekvatorni ikki marta kesib o‘tadi; 5) daryoda Viktoriya sharsharasi mavjud; 6) Ubangi, Kasai kabi irmoqlari bor; 7) sersuvligi va havzasining maydoniga ko‘ra dunyoda ikkinchi o‘rinda turadi; 8) quyi oqimida Livingston sharsharalar guruhi mavjud; 9) uning Lukuga irmog‘i Viktoriya ko‘lidan boshlanadi.",["1, 3, 5, 6, 9","2, 4, 6, 7, 8","1, 2, 4, 5, 7","2, 3, 5, 6, 8"],1]);
GEO_OCHIQ.push(["Eng katta arxipelag qaysi materikda joylashgan?",["Janubiy Amerika","Yevrosiyo","Afrika","Shimoliy Amerika"],3]);
GEO_OCHIQ.push(["Qaysi variantda Janubiy Amerikaning tropik iqlim mintaqasiga to‘g‘ri ta’rif berilgan?",["Yil bo‘yi issiq bo‘ladi. Materik sohillarida va orollarda okeandan esadigan shamollar tufayli yog‘in ko‘p yog‘adi. Faqat mintaqaning g‘arbida Kaliforniya sovuq oqimi ta’sirida quruq, tumanli kunlar kuzatiladi.","Arabiston yarimoroli, Eron tog‘ligi va Hind daryosi havzasini egallaydi. Mintaqaning janubida yil davomida quruq va issiq kontinental tropik havo massalari tarkib topadi. Yozi juda issiq (+30...+35 °C), qishi iliq (+18...+24 °C) bo‘lib, 500–1000 mm atrofida yog‘in yog‘adi.","Tinch okeani sohillariga Peru sovuq oqimi yog‘in keltirmaydi va deyarli yog‘in yog‘maydi. Natijada shudring Afrikadagi Namib cho‘li kabi Atakama cho‘li namligining yagona manbai hisoblanadi. Ustida yillab bir tomchi ham yog‘in yog‘masligi mumkin.","Yoz nihoyatda issiq bo‘lib, havoda bulut deyarli bo‘lmaydi. Quyosh qumli cho‘llarning yer yuzasini 70–80 °C gacha qizdiradi, havo harorati +40...+45 °C gacha ko‘tariladi. Kechasi harorat 0 °C gacha pasayadi. Yoz oylarida kuchli samum va hamsin shamollari esib, qum bo‘ronlari bo‘lib turadi."],2]);
GEO_OCHIQ.push(["Hozirgi paytda nechta mamlakat olimlari Antarktida materigi tabiatini o‘rganishmoqda?",["11 ta","14 ta","16 ta","12 ta"],2]);
GEO_OCHIQ.push(["Karib qarag‘ayi, kiparis o‘simliklari Shimoliy Amerikaning qaysi tabiat zonasida o‘sadi?",["aralash va keng bargli o‘rmonlar","chalacho‘l va cho‘llar","savannalar","fasliy nam o‘rmonlar"],3]);
GEO_OCHIQ.push(["Jami aholisi 6,8 mln kishi, bir yil davomida tug‘ilganlar soni 142 800 kishi, o‘lganlar soni esa 88 400 kishi bo‘lgan mamlakatning tabiiy o‘sish koeffitsiyentini (‰) aniqlang.",["6 ‰","8 ‰","11 ‰","14 ‰"],1]);
GEO_OCHIQ.push(["And tog‘larining tik yonbag‘irlarida qaysi hayvon uchraydi?",["kondor","yovvoyi lama","ko‘zoynakli ayiq","mo‘ynali shinshilla"],0]);
GEO_OCHIQ.push(["2017-yil holatiga ko‘ra Turkmaniston gaz qazib olish bo‘yicha nechanchi o‘rinda turadi?",["9-o‘rin","10-o‘rin","11-o‘rin","12-o‘rin"],1]);
GEO_OCHIQ.push(["Missisipi deltasi har yili Meksika qo‘ltig‘i tomon qancha masofaga o‘sib boradi?",["300 m","200 m","150 m","100 m"],3]);
GEO_OCHIQ.push(["Afrikaning qaysi qismida relyefi va iqlimi xususiyatlariga bog‘liq holda o‘simlik va hayvonot olami tarkib topgan?",["shimoliy","markaziy","janubiy","sharqiy"],3]);
GEO_OCHIQ.push(["Qaysi sayyoh Lualaba va Kongo daryolarini quyi oqimiga qadar o‘rgandi?",["D. Livingston","G. Stenli","V. Yunker","B. Dias"],1]);
GEO_OCHIQ.push(["2017-yil holatiga ko‘ra mamlakatimiz sanoat tarmoqlarining mahsulot ishlab chiqarish tarkibida mashinasozlik va metallni qayta ishlash sanoati necha foizni tashkil etadi?",["14,3 %","12,9 %","15,7 %","11,5 %"],0]);
GEO_OCHIQ.push(["Ushbu chizmaga mos javobni toping. Ushbu chizmada AB yo‘nalish azimuti 345° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.",["SH-SHQ-SHQ","SH-SH-SHQ","J-J-SHQ","J-SHQ-SHQ"],0,"gx3_v17"]);
GEO_OCHIQ.push(["Quyidagi A va B harflar bilan tasvirlangan olimlar Amerikaga mos ravishda necha marta sayohat qilishgan?",["A-2 va B-1","A-4 va B-2","A-4 va B-1","A-2 va B-2"],1,"gx3_v18"]);
GEO_OCHIQ.push(["Janubiy Amerikaning savannalar zonasi qaysi iqlim mintaqasi hududidagi pasttekisliklarda, yassi tog‘larda tarkib topgan?",["ekvatorial","subtropik","tropik","subekvatorial"],3]);
GEO_OCHIQ.push(["Sayyoramizdagi eng quruq materikda joylashgan daryolarni toping.<br>1) Oranj; 2) Tarim; 3) Hind; 4) Darling; 5) Nil; 6) Murrey; 7) Kolorado; 8) Freyzer.",["1, 5","2, 3","4, 6","7, 8"],2]);
GEO_OCHIQ.push(["Masshtabi 1:20 000 000 bo‘lgan xaritada daryo uzunligi 5 sm ga teng. Daryo necha km uzunlikka ega?",["1000 km","2000 km","5000 km","10000 km"],0]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining shimoli-g‘arbiy qismlari qaysi sayyohlar tomonidan o‘rganilgan?",["I. Fyodorov, M. Gvozdev","V. Bering, A. Chirikov","G. Gudzon, A. Makkenzi","E. Rauda, J. Kabot"],0]);
GEO_OCHIQ.push(["Missisipi daryosining to‘yinish tipini toping.",["muzlik-qor","qor-muz","qor-yomg‘ir","yomg‘ir"],2]);
GEO_OCHIQ.push(["Mamlakatimizdagi ko‘mirning asosiy zaxiralari qaysi konlarda joylashgan?",["Angren, Sharg‘un, Boysun","Muruntov, Ko‘kpatas, Uchquduq","Angren, Qarag‘anda, Ekibastuz","Muborak, Uchqir, Xovdog‘"],0]);
GEO_OCHIQ.push(["Sharqiy Sibir o‘lkasi sharqda qaysi daryoning vodiysigacha davom etadi?",["Aldan","Vilyuy","Anabar","Kolima"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Relyefiga ko‘ra ikkita qismga – tog‘li va tekislik qismlarga bo‘linadi. Tog‘lari ko‘p qismida tog‘ tizmalarini, markaziy qismida tog‘lik va yassi tog‘liklar (3500–4500 m) hosil qiladi. Sharqiy qismi katta maydonlarni egallagan tekislik va yassi tog‘liklardan iborat».</i><br>Matndagi ma’lumotlar relyefiga xos bo‘lgan materikni toping.",["Afrika","Shimoliy Amerika","Yevrosiyo","Janubiy Amerika"],3]);
GEO_OCHIQ.push(["Afrikaning shimoli-g‘arbiy va janubi-g‘arbiy qismlarida qaysi tabiat zonasi tarkib topgan?",["fasliy nam o‘rmonlar","qattiq bargli doimiy yashil o‘rmonlar va butazorlar","savannalar va siyrak o‘rmonlar","chalacho‘llar va cho‘llar"],1]);
GEO_OCHIQ.push(["Tog‘ etagi va alpinistlar qarorgohi orasidagi havo harorati farqi 9 °C ga teng. Alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi nisbiy balandlik esa 1650 metrni tashkil etadi. Ushbu tog‘ etagidan uning cho‘qqisigacha bo‘lgan jami nisbiy balandlikni toping.",["2500 m","2650 m","3150 m","3300 m"],2]);
GEO_OCHIQ.push(["Xabbort muzligi qaysi materikda joylashgan?",["Shimoliy Amerika","Yevrosiyo","Antarktida","Janubiy Amerika"],0]);
GEO_OCHIQ.push(["Avstraliyaning tropik o‘rmonlarida qanday hayvonlar tarqalgan?",["koala, lirodum, kenguru, xaltali iblis","kenguru, vombat, xaltali chumolixo‘r, yexidna","vombat, yexidna, dingo iti, emu tuyaqushi","lirodum, kenguru, o‘rdakburun, mali"],0]);

/* ===== 4-to‘plam ===== */
GEO_OCHIQ.push(["Quyidagi iqlim diagrammalari Janubiy Amerikaning qaysi iqlim mintaqalariga tegishli ekanligini aniqlang.",["a – subekvatorial, b – mo‘tadil, c – tropik","a – mo‘tadil, b – subekvatorial, c – tropik","a – subekvatorial, b – ekvatorial, c – tropik","a – mo‘tadil, b – ekvatorial, c – tropik"],1,"gx4_v1"]);
GEO_OCHIQ.push(["Shimoliy Amerikaning o‘rmon-dasht va dasht zonalarida yashaydigan hayvonlarni aniqlang.",["bizon, bo‘ri, tulki, kiyik, skuns (badbo‘y), opossum, oqboshli burgut","Virginiya bug‘usi, kalamush, puma, bobr (suv qunduzi), qizil olmaxon, yenot","alligator (timsohning bir turi), qora ilon, kurka","tog‘ qo‘yi, qizil ayiq, yaguar, puma, qor echkisi, kondor"],0]);
GEO_OCHIQ.push(["Geografik qobiqda modda va energiyaning aylanma harakati uning bir butunligini ta’minlaydi. Aylanma harakatlar murakkabligi bo‘yicha turlichadir. Quyidagi aylanma harakatlarda moddaning kimyoviy aylanishi kuzatiladigan qatorni toping.",["Atmosferaning umumiy sirkulyatsiyasi","Okean oqimlari","Fotosintez jarayoni","Suvning aylanma harakati"],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Mashinalar uchun ayrim detallarni ishlab chiqaruvchi ko‘pdan-ko‘p mashinasozlik zavodlari bir-biri bilan, shuningdek, metall, plastmassa, rezina va hokazolarni yetkazib beruvchi (boshqa tarmoq) korxonalari bilan ishlab chiqarish aloqalari bo‘lishini talab qiladi».</i><br>Mashinasozlik korxonasi ishlab chiqarishning aynan qanday tashkiliy shakliga mos kelishini aniqlang.",["Kombinatlashtirish","Kooperativlashish","Ixtisoslashuv","Markazlashuv"],1]);
GEO_OCHIQ.push(["Quyida berilgan xarita-sxemada ? (so‘roq) belgisi bilan qaysi dengiz ko‘rsatilgan?",["Kara dengizi","Sharqiy Sibir dengizi","Barens dengizi","Laptevlar dengizi"],0,"gx4_v5"]);
GEO_OCHIQ.push(["Quyida berilgan xaritada 2 raqami bilan Yevrosiyoning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Sharqiy Sibir","Sharqiy Yevropa","Uzoq Sharq","G‘arbiy Sibir"],3,"gx4_v6"]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining shimoliy qismida qanday relyef shakllari uchraydi?",["yassi tog‘lik va baland tekisliklardan","qirlar va adirsimon balandliklar","plato, tog‘lik va yassi tog‘likdan","tekislik va yassi tog‘liklar"],1]);
GEO_OCHIQ.push(["G‘arbiy Avstraliya yassi tog‘ligi qanday relyef shakllaridan iborat?",["yassi tog‘lik va baland tekisliklardan","qirlar va adirsimon balandliklar","plato, tog‘lik va yassi tog‘likdan","tekislik va yassi tog‘liklar"],0]);
GEO_OCHIQ.push(["Quyosh va Oyning tortishi natijasida sodir bo‘ladigan hodisalarni toping.",["Yer ichidagi moddalarining muvozanatga intilishi tufayli yer po‘stida ko‘tarilishlar va cho‘kishlar, yer yoriqlari yuzaga kelishiga, oqibatda relyefning o‘zgarishiga sabab bo‘ladi.","Suvning suyuq holda bo‘lishiga imkon beradi, aks holda suv bug‘lanib ketgan bo‘lar edi.","Yerning aylanishi sekinlashadi, oqibatda Yerning qutbiy siqiqligi kamayib, sharga yaqinlashib boradi. Natijada litosfera plitalari harakati va Yer po‘stidagi yoriqlar, tektonik harakatlar o‘zgaradi.","Koriolis kuchi kamayadi va natijada havo massalari, shamollar va okean suvlari harakati, iqlim o‘zgaradi."],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Daryolarning qayirlarida relyefning tekisligi, grunt suvlarining yer betiga yaqinligi va mikroiqlimning atrofdagi cho‘ldan namroq va salqinroq bo‘lganidan to‘qaylar shakllangan. To‘qay – daryo bo‘ylaridagi daraxt, buta, o‘t o‘simliklaridan iborat qalin changalzor o‘rmon».</i><br>Matnda berilgan ma’lumotlar qaysi geografik qonuniyatga oid ekanligini aniqlang.",["Azonallik","Sektorlik","Kenglik zonalligi","Bir butunlik"],0]);
GEO_OCHIQ.push(["Qaysi dengiz Golfstrim oqimi ta’sirida muzlamaganligi uchun yil davomida kemalar qatnaydi?",["Labrador","Boltiq","Barens","Baffin"],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Insonning xo‘jalik faoliyati okeanda ayrim biologik turlarning kamayishiga olib keldi».</i><br>XVIII asrning oxiriga kelib sutemizuvchi hayvonlardan qaysi hayvon qirib tashlandi?",["Kitlar","Dengiz mushugi","Dengiz oti","Dengiz sigiri"],3]);
GEO_OCHIQ.push(["Makvis – bu ...",["butasimon daraxt","o‘tib bo‘lmas changalzorlar","buta va o‘tdan iborat changalzorlar","daraxtsimon doimiy yashil o‘simlik"],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Tog‘lar kaledon, gersin, mezozoy tog‘ burmalanishlarida ko‘tarilgan, lekin alp burmalanishida yoshargan. Tekisliklarda, asosan, cho‘kindi tog‘ jinslari uchrasa, tog‘li o‘lkalarda magmatik va metamorfik tog‘ jinslari tarkib topgan. G‘arbiy tog‘li mintaqada halokatli zilzilalar bo‘lib, vulqonlar otilib turadi».</i><br>Matndagi ma’lumotlar qaysi materik geologik tuzilishiga xos ekanligini toping.",["Afrika","Shimoliy Amerika","Yevrosiyo","Janubiy Amerika"],1]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining tabiatiga oid to‘g‘ri ma’lumotlar berilgan javobni toping.",["Subekvatorial iqlim mintaqasi materikning eng janubiy tor qismida shakllangan bo‘lib, bu yerda o‘rtacha yillik harorat yuqori va namgarchilik ko‘p. Bu mintaqaning asosiy qismida fasliy nam (musson) o‘rmonlar tarkib topgan bo‘lib, daraxtlardan eman, palma, kiparis o‘sadi, hayvonlardan alligator, qora ilon, kurka kabilar yashaydi.","Subtropik mintaqasida yozda tropik dengiz, qishda mo‘tadil kengliklarning dengiz havolari hukmronlik qiladi. Yog‘in yil davomida bir me’yorda yog‘adi. Mintaqaning katta hududini qattiq bargli doimiy yashil o‘rmonlar zonasi egallagan. Makvis, zaytun, probka emani, kedr kabi daraxtlar o‘sadi.","Tropik mintaqasida chalacho‘l va cho‘l zonalari hamda dashtlar mavjud. Bu yerda harorat juda yuqori (iyulning o‘rtacha harorati +30 °C ga teng), yog‘ingarchilik esa nihoyatda kam bo‘ladi. O‘simlik va hayvonlari kam, yovvoyi eshak onagr, uchqur kiyik, yirtqichlardan sirtlon va chiyabo‘rilar uchraydi.","Ekvatorial o‘rmonlar zonasi ekvatorning har ikki tomonida katta maydonni egallagan. Daraxtlardan geveya, palmalarning har xil turlari, kakao daraxti, seyba (paxta) daraxti, qovun daraxti o‘sadi. Hayvonlardan tapirlar, kapibaralar, yaguar yashaydi."],0]);
GEO_OCHIQ.push(["Rasmda tasvirlangan variantlardan qaysi olim XVIII asr o‘rtalarida Aleut orollari bo‘ylab suzdi va Alyaska qirg‘oqlarini o‘rgandi?",["A rasmdagi olim","B rasmdagi olim","C rasmdagi olim","D rasmdagi olim"],3,"gx4_v16"]);
GEO_OCHIQ.push(["Dastlab demografik portlash XIX asrning boshi – XX asrning birinchi yarmida qaysi hududda bo‘lgan?",["Shimoliy Amerikada","Osiyoda","Afrikada","Lotin Amerikasida"],0]);
GEO_OCHIQ.push(["Migratsiyaga oid ma’lumot berilgan javobni aniqlang.",["Shahar bilan qishloq joylar orasidagi ijtimoiy-iqtisodiy farq va chegaralarning yo‘qolib borish jarayoni.","Suriyadan Turkiyaga, Afg‘onistondan Eronga, Ugandadan Keniyaga millionlab kishilar ko‘chib bormoqda.","Global shaharlar safi borgan sari kengaymoqda, ularning ta’sir doirasi esa barcha qit’a va ularning yirik qismlarini qamrab olishga intilmoqda.","Aholi yirik shaharlarning markazlaridan asta-sekin shahar atrofiga ko‘chib boradi, lekin shaharda ishlash, o‘qish, turli faoliyat yuritishni davom ettiradi."],1]);
GEO_OCHIQ.push(["Markaziy tekislik belgilangan raqamni toping.",["3","2","4","1"],1,"gx4_v19"]);
GEO_OCHIQ.push(["Janubiy Amerika materigining yozuvsiz xaritasida janubiy tropik chizig‘i qaysi geografik obyekt ustidan kesib o‘tmaganligini aniqlang.",["Iguasu sharsharasi","Parana daryosi","Atakama cho‘li","Lyulyaylyako vulqoni"],0,"gx4_v20"]);
GEO_OCHIQ.push(["Kim o‘simliklarning kenglik zonalligi va balandlik mintaqalanishi qonuniyatini aniqladi?",["A. A. Grigoryev","V. A. Vernadskiy","A. Gumboldt","V. V. Dokuchayev"],2]);
GEO_OCHIQ.push(["Tropik kengliklarda vujudga kelgan to‘lqin ochiq okeanda balandligi 1 m dan oshmaydi, lekin qirg‘oqqa kelganda 10 m balandga ko‘tariladi. Tezligi soatiga 700–800 km ni tashkil etadi. Juda katta iqtisodiy va ma’naviy ziyon keltiradi. Bu qaysi to‘lqin ekanligini toping.",["Tayfun","Tornado","Dovul","Sunami"],3]);
GEO_OCHIQ.push(["Dengiz va okeanlar yuza suvining harorati nimaga bog‘liq?",["Shamollar harakatiga","Dengiz oqimlariga","Iqlimga","Suvning kimyoviy tarkibiga"],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Okean shelfida daryo va to‘lqin yotqiziqlari, organik jinslar, okean tubida qizil gilli jinslar eng ko‘p tarqalgan. Okean tubi relyefi juda murakkab tuzilgan. Bu yerda dengiz sayozligi kam, 3 060 000 km² maydonni egallaydi».</i><br>Matnda berilgan ma’lumotlar qaysi okeanga oid ekanligini aniqlang.",["Tinch","Atlantika","Hind","Shimoliy Muz"],0]);
GEO_OCHIQ.push(["Estuariy – bu ...",["Shimoliy Amerika chalacho‘l va cho‘l zonalarida uchraydigan daraxtsimon doimiy yashil o‘simlik.","Bir-biridan unchalik uzoq bo‘lmagan va odatda bir butun deb hisoblanadigan orollar to‘dasi.","Avliyo Lavrentiy daryosi quyi oqimida hosil bo‘lgan, daryoning suv bosgan quyi qismi.","Shimoliy Muz okeanidagi qalashib ketgan muzlar."],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Relyefiga ko‘ra ikkita qismga – tog‘li va tekislik qismlarga bo‘linadi. Tog‘lari ko‘p qismida tog‘ tizmalarini, markaziy qismida tog‘lik va yassi tog‘liklar (3500–4500 m) hosil qiladi. Sharqiy qismi katta maydonlarni egallagan tekislik va yassi tog‘liklardan iborat».</i><br>Matndagi ma’lumotlar relyefiga xos bo‘lgan materikni toping.",["Afrika","Shimoliy Amerika","Yevrosiyo","Janubiy Amerika"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«G‘arbiy Avstraliya yassi tog‘ligi yassi tog‘lik va baland tekisliklardan iborat. Bu tog‘liklar tropik mintaqada joylashganligi sababli, haroratning o‘zgarishi ta’siri natijasida tog‘ jinslari yemirilib, pasayib qolgan balandliklar va qoldiq tog‘lar ko‘zga yaqqol tashlanadi».</i><br>G‘arbiy Avstraliya yassi tog‘liklari asosan qaysi tabiiy geografik jarayon ta’siri ostida yemirilib, pasayib qolganini aniqlang.",["deflyatsiya","kimyoviy nurash","karst","fizik nurash"],3]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining savannalari tabiatiga oid to‘g‘ri ma’lumotlar berilgan javobni toping.",["Baland bo‘yli g‘allagulli o‘simliklar, siyrak o‘rmonlarda daraxtlardan sal (balandligi 30–35 m), tik, akatsiya va palmalar o‘sadi. Subekvatorial mintaqaga borgan sari savannalarda yog‘ingarchilik miqdori ortib boradi.","Savannalar va siyrak o‘rmonlar zonasida qizil va qizil-qo‘ng‘ir tuproqlar hosil bo‘lgan. Baland o‘t o‘simlikli, kaktus, akatsiyali savannalar va eman-qarag‘ayli siyrak o‘rmonlar xos.","Savannalarning hayvonot dunyosida kichik bug‘ular – mazamlar, yovvoyi cho‘chqalar – pekarlar, zirhlilar – shox moddadan iborat qalqoni bo‘lgan sutemizuvchi hayvonlar, chumolixo‘r, kemiruvchilar, yirik qushlardan nandu tuyaqushi yashaydi.","Yog‘in, asosan, yozda yog‘adi. Tuprog‘i qizil-qo‘ng‘ir, o‘t o‘simliklar uncha baland emas, uzoq masofada yakka va to‘p-to‘p daraxtlar va butazorlar uchraydi. Eng ko‘p tarqalgan daraxt – sershox akatsiya, qum palmasi."],1]);
GEO_OCHIQ.push(["Qaysi qit’ada inson faoliyati boshqalariga qaraganda biroz kechroq boshlangan?",["Afrika","Osiyo","Amerika","Avstraliya"],2]);
GEO_OCHIQ.push(["Quyida berilgan xarita-sxemada 4 raqami bilan ko‘rsatilgan dengiz nomini toping.",["Sariq dengiz","Bering dengizi","Oxota dengizi","Yapon dengizi"],2,"gx4_v30"]);
GEO_OCHIQ.push(["Janubiy Amerikaning qaysi raqamda ko‘rsatilgan tabiat zonasi qimmatbaho daraxtlar – kauchuk beradigan geveya daraxti, palmalarning har xil turlari, kakao daraxti, seyba (paxta) daraxti, qovun daraxti va boshqalar vatani hisoblanadi?",["1","2","3","4"],0,"gx4_v31"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Materikning katta qismi quruq tropik iqlim mintaqasida joylashganligidan daryolar oz. Materikning 60 % maydoni oqmas ichki berk havzaga kiradi. Yil bo‘yi sersuv bo‘lib oqadigan daryolar materikning sharqiy qismida mavjud. Daryolar yomg‘irdan va yerosti suvlaridan to‘yinadi».</i><br>Matnda berilgan ma’lumotlar qaysi materikka oid ekanligini toping.",["Janubiy Amerika","Avstraliya","Shimoliy Amerika","Afrika"],1]);
GEO_OCHIQ.push(["Quyida berilgan jadvalda 2017-yilgi sanoat tarmoqlarining mahsulot ishlab chiqarish tarkibi, turli yillardagi kichik biznesning YaIMdagi ulushi hamda yoqilg‘ilarning issiqlik koeffitsiyenti bo‘yicha berilgan ma’lumotlarni moslashtiring.",["1-c, 2-d, 3-o, 4-m, 5-p, 6-a, 7-h, 8-l, 9-e, 10-q, 11-f, 12-i, 13-n, 14-j, 15-k, 16-b, 17-g","1-q, 2-d, 3-e, 4-m, 5-p, 6-a, 7-h, 8-l, 9-o, 10-c, 11-f, 12-i, 13-n, 14-j, 15-k, 16-b, 17-g","1-c, 2-d, 3-o, 4-m, 5-p, 6-a, 7-h, 8-i, 9-e, 10-q, 11-f, 12-l, 13-n, 14-j, 15-k, 16-b, 17-g","1-q, 2-d, 3-o, 4-m, 5-p, 6-a, 7-k, 8-l, 9-e, 10-c, 11-f, 12-i, 13-n, 14-j, 15-h, 16-b, 17-g"],0,"gx4_v33"]);
GEO_OCHIQ.push(["Janubiy Amerika materigida 30° parallel chizig‘i qaysi geografik obyekt ustidan kesib o‘tmaganligini aniqlang.",["La-Plata","And","Parana","Patagoniya"],3,"gx4_v34"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«...Zonaning tuproqlari podzol, botqoq va muzloq tuproqlardan iborat. Asosiy o‘simligi qora va oq qarag‘ay, Amerika tilog‘ochi, balzam pixtasi, qarag‘ay. Hayvonlardan qora va qo‘ng‘ir ayiq, Kanada silovsini, Amerika suvsari, skuns, los, vapiti kiyigi, o‘rmon bizoni va boshqalar yashaydi...»</i><br>Matnda tavsifi berilgan tabiat zonasi yozuvsiz xaritada qaysi raqam bilan belgilanganligini toping.",["4","2","1","3"],1,"gx4_v35"]);
GEO_YOZMA.push(["<b>Yerning Quyosh atrofidagi harakati sxemasi asosida quyidagi topshiriqlarni bajaring.</b><br>a) 66,5° janubiy kenglikda qaysi nuqtada bir sutka – 24 soat davomida Quyosh botmaydi? (Yerning Quyosh atrofida aylanish holati raqamini yozing)<br>b) Shimoliy yarimsharning o‘rta kengliklaridagi qaysi oraliqlarda kunning davomiyligi muttasil ortib boradi? (Yerning Quyosh atrofida aylanish holati raqamlarini yozing)",[["a) 66,5° janubiy kenglikda qaysi nuqtada bir sutka – 24 soat davomida Quyosh botmaydi? (Yerning Quyosh atrofida aylanish holati raqamini yozing)",/\biii\b/i],["b) Shimoliy yarimsharning o‘rta kengliklaridagi qaysi oraliqlarda kunning davomiyligi muttasil ortib boradi? (Yerning Quyosh atrofida aylanish holati raqamlarini yozing)",/iii.*iv/i]],"gx4_w36"]);
GEO_KALIT.push("a) III; b) III va IV");
GEO_YOZMA.push(["<b>Harorat va nisbiy namlik o‘lchovlari 1, 2 va 3-meteorologik stansiyalarda bir vaqtning o‘zida amalga oshirildi. Olingan qiymatlar jadvalda ko‘rsatilgan.</b><br>a) 2-meteorologik stansiyada 1 m³ havoning namga to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.<br>b) Qaysi meteorologik stansiyada yog‘in yog‘ish ehtimoli yuqori? (raqamda yozing)",[["a) 2-meteorologik stansiyada 1 m³ havoning namga to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",/3[.,]15/i],["b) Qaysi meteorologik stansiyada yog‘in yog‘ish ehtimoli yuqori? (raqamda yozing)",/\b1\b/i]],"gx4_w37"]);
GEO_KALIT.push("a) 3,15 g; b) 1");
GEO_YOZMA.push(["<b>Jadvaldagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Tashqi savdo aylanmasini toping (mlrd AQSh doll.).<br>b) Tashqi savdo balansini aniqlang (mlrd AQSh doll.).",[["a) Tashqi savdo aylanmasini toping (mlrd AQSh doll.).",/119[.,]584/i],["b) Tashqi savdo balansini aniqlang (mlrd AQSh doll.).",/6[.,]72/i]],"gx4_w38"]);
GEO_KALIT.push("a) 119,584 mlrd $; b) −6,720 mlrd $");
GEO_YOZMA.push(["<b>Jadvaldagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Yil oxirida shahar aholisi mexanik ko‘payish hisobiga necha kishiga ko‘paygan (+) yoki kamayganligini (−) toping.<br>b) Ushbu mamlakat aholisi yil oxirida qancha kishi bo‘lganini aniqlang.",[["a) Yil oxirida shahar aholisi mexanik ko‘payish hisobiga necha kishiga ko‘paygan (+) yoki kamayganligini (−) toping.",/72\s?800/i],["b) Ushbu mamlakat aholisi yil oxirida qancha kishi bo‘lganini aniqlang.",/56\s?056\s?000/i]],"gx4_w39"]);
GEO_KALIT.push("a) −72 800 kishi; b) 56 056 000 kishi");
GEO_YOZMA.push(["<b>Jadval ma’lumotlaridan foydalanib topshiriqlarni bajaring.</b><br>a) Mamlakat aholisining tabiiy o‘sish koeffitsiyentini toping (‰).<br>b) Mamlakat aholisi mexanik o‘sish hisobiga necha promillega ko‘paygan (+) yoki kamayganligini (−) toping.",[["a) Mamlakat aholisining tabiiy o‘sish koeffitsiyentini toping (‰).",/\b8\b/i],["b) Mamlakat aholisi mexanik o‘sish hisobiga necha promillega ko‘paygan (+) yoki kamayganligini (−) toping.",/4[.,]2/i]],"gx4_w40"]);
GEO_KALIT.push("a) 8 ‰; b) −4,2 ‰");
GEO_YOZMA.push(["<b>Ushbu chizmaga mos javobni toping.</b><br>a) Ushbu chizmada AB yo‘nalish azimuti 345° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.<br>b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",[["a) Ushbu chizmada AB yo‘nalish azimuti 345° bo‘lsa, AB yo‘nalishga nisbatan AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.",/sh.?-?shq.?-?shq/i],["b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",/\b10\b/i]],"gx4_w41"]);
GEO_KALIT.push("a) SH-SHQ-SHQ; b) 10°");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Soat 01:00 da havoning mutlaq namligini aniqlang.<br>b) Soat 13:00 da 1 m³ havoning namga to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",[["a) Soat 01:00 da havoning mutlaq namligini aniqlang.",/4[.,]5/i],["b) Soat 13:00 da 1 m³ havoning namga to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",/\b9\b/i]],"gx4_w42"]);
GEO_KALIT.push("a) 4,5 g/m³; b) 9 g/m³");
GEO_YOZMA.push(["<b>Dengiz sathida me’yoriy bosim bo‘lganda, tog‘ etagi va alpinistlar qarorgohi orasidagi havo harorati farqi 9 °C, alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi nisbiy balandlik 1650 m ga teng.</b><br>a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.<br>b) Alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi harorat necha gradusga farq qilishini aniqlang.",[["a) Tog‘ etagidan tog‘ cho‘qqisigacha bo‘lgan nisbiy balandlikni toping.",/3\s?150/i],["b) Alpinistlar qarorgohi bilan tog‘ cho‘qqisi orasidagi harorat necha gradusga farq qilishini aniqlang.",/9[.,]9/i]]]);
GEO_KALIT.push("a) 3150 m; b) 9,9 °C");
GEO_YOZMA.push(["<b>Ushbu chizmaga mos javobni toping.</b><br>a) Ushbu rasmda geolog turgan nuqtaga nisbatan daraxtning azimuti 45° ga teng. Geolog turgan nuqtaga nisbatan piramidaning yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.<br>b) Geolog piramidadan orqaga qaytish uchun necha gradus azimut bilan qaytadi?",[["a) Ushbu rasmda geolog turgan nuqtaga nisbatan daraxtning azimuti 45° ga teng. Geolog turgan nuqtaga nisbatan piramidaning yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.",/shimol/i],["b) Geolog piramidadan orqaga qaytish uchun necha gradus azimut bilan qaytadi?",/180/i]],"gx4_w44"]);
GEO_KALIT.push("a) Shimol; b) 180°");
GEO_YOZMA.push(["<b>Rasmni kuzating va quyida keltirilgan savollarga javob bering.</b><br>a) Qaysi raqam bilan ko‘rsatilgan tabiat zonasida seyba, palmalarning har xil turlari, qovun daraxti, kakao, geveya daraxtlari o‘sadi?<br>b) Qaysi tabiat zonasi materik hududining katta qismini egallaydi?",[["a) Qaysi raqam bilan ko‘rsatilgan tabiat zonasida seyba, palmalarning har xil turlari, qovun daraxti, kakao, geveya daraxtlari o‘sadi?",/\b5\b/i],["b) Qaysi tabiat zonasi materik hududining katta qismini egallaydi?",/\b5\b/i]],"gx4_w45"]);
GEO_KALIT.push("a) 5; b) 5");

/* ===== 5-to‘plam ===== */
GEO_OCHIQ.push(["Quyida keltirilgan xizmat turlarini ularga tegishli xizmat ko‘rsatish guruhlari (A va B) bilan to‘g‘ri moslashtirilgan javobni toping.",["A – 1, 3, 4, 6, 8, 9; B – 2, 5, 7, 10","A – 1, 2, 5, 6, 8, 10; B – 3, 4, 7, 9","A – 2, 3, 5, 7, 8, 9; B – 1, 4, 6, 10","A – 3, 5, 6, 7, 8, 10; B – 1, 2, 4, 9"],0,"gx5_v1"]);
GEO_OCHIQ.push(["Mamlakatimizdan Uralga o‘tkazilgan gaz quvurlarining uzunligi qanchani tashkil etadi?",["4100 km","3500 km","5500 km","2100 km"],3]);
GEO_OCHIQ.push(["Mamlakatimizdan Moskvaga o‘tkazilgan gaz quvurlarining uzunligi qanchani tashkil etadi?",["4100 km","3500 km","5500 km","2100 km"],1]);
GEO_OCHIQ.push(["Mamlakatimizda gaz quvurlari ichida qaysi trassa juda muhimdir?",["Qarshi–Toshkent","Muborak–Toshkent","Shahrisabz–Toshkent","Kitob–Toshkent"],1]);
GEO_OCHIQ.push(["O‘zbekistondan qaysi hududlarga o‘tkazilgan gaz quvurlari diametrining kattaligi va uzunligi jihatidan jahonda oldingi o‘rinlardan birini egallaydi?",["Qrim, Qozon","Sankt-Peterburg, Vladivostok","Ural, Moskva","Sochi, Astraxan"],2]);
GEO_OCHIQ.push(["Mamlakatimizda gaz quvurlari ichida qaysi trassalar juda muhimdir?",["Jarqoq–Xorazm–Buxoro–Toshkent","Navoiy–Buxoro–Samarqand–Toshkent","Jarqoq–Navoiy–Samarqand–Toshkent","Jarqoq–Buxoro–Samarqand–Toshkent"],3]);
GEO_OCHIQ.push(["Hozirda fan va texnika yutuqlari qancha atmosfera bosimida gazni yuborish imkonini bermoqda?",["80 atmosfera bosimida","100 atmosfera bosimida","120 atmosfera bosimida","140 atmosfera bosimida"],2]);
GEO_OCHIQ.push(["Mamlakatimiz quvur transportida hozircha bosim necha atmosferadan oshmayapti?",["30","40","50","60"],1]);
GEO_OCHIQ.push(["Toshkent shahrida qurilgan halqa yo‘lining uzunligi qanchani tashkil etadi?",["63 km","64 km","65 km","84 km"],1]);
GEO_OCHIQ.push(["Guliston–Ohangaron avtomobil yo‘li qachon foydalanishga topshirilgan?",["2010-yilda","2008-yilda","2014-yilda","2012-yilda"],3]);
GEO_OCHIQ.push(["Guliston–Ohangaron avtomobil yo‘lining uzunligi qanchani tashkil etadi?",["116 km","353 km","485 km","248 km"],0]);
GEO_OCHIQ.push(["Mamlakatimiz Xitoyga chiqish imkoniyatini beruvchi qaysi avtomobil yo‘li qurilishida va uni qayta qurishda o‘z ulushi bilan qatnashmoqda?",["Andijon–O‘sh–Ergashtom–Qashqar","Termiz–Hirot–Karachi","Chorjo‘y–Qo‘ng‘irot–Beynov","Buxoro–Turkmanobod–Mashhad–Tehron"],0]);
GEO_OCHIQ.push(["Mamlakatimiz Pokistonga chiqish imkoniyatini beruvchi qaysi avtomobil yo‘li qurilishida va uni qayta qurishda o‘z ulushi bilan qatnashmoqda?",["Andijon–O‘sh–Ergashtom–Qashqar","Chorjo‘y–Qo‘ng‘irot–Beynov","Termiz–Hirot–Karachi","Buxoro–Turkmanobod–Mashhad–Tehron"],2]);
GEO_OCHIQ.push(["Mamlakatimiz Hind okeaniga chiqishga imkon beradigan qaysi avtomobil yo‘li qurilishida va uni qayta qurishda o‘z ulushi bilan qatnashmoqda?",["Andijon–O‘sh–Ergashtom–Qashqar","Termiz–Hirot–Karachi","Chorjo‘y–Qo‘ng‘irot–Beynov","Buxoro–Turkmanobod–Mashhad–Tehron"],1]);
GEO_OCHIQ.push(["Mamlakatimiz Tinch okeaniga chiqishga imkon beradigan qaysi avtomobil yo‘li qurilishida va uni qayta qurishda o‘z ulushi bilan qatnashmoqda?",["Termiz–Hirot–Karachi","Chorjo‘y–Qo‘ng‘irot–Beynov","Buxoro–Turkmanobod–Mashhad–Tehron","Andijon–O‘sh–Ergashtom–Qashqar"],3]);
GEO_OCHIQ.push(["Mamlakatimizda hozirda suv transporti asosan qaysi daryo kemachiligidan iborat?",["Zarafshon","Sirdaryo","Amudaryo","Chirchiq"],2]);
GEO_OCHIQ.push(["Mamlakatimizda qanday daryo porti va floti birlashmalari tashkil etilgan?",["Termiz daryo porti","Xorazm daryo floti","Qoraqalpog‘iston daryo floti","barcha javoblar to‘g‘ri"],3]);
GEO_OCHIQ.push(["Mamlakatimiz daryo flotida qanchaga yaqin teploxod mavjud?",["100 ga yaqin","150 ga yaqin","200 ga yaqin","250 ga yaqin"],1]);
GEO_OCHIQ.push(["Mamlakatimiz daryo flotida qanday texnikalar mavjud?",["tanker, barjalar, yordamchi kemalar","teploxod, barjalar, tankerlar","teploxod, barjalar, yordamchi kemalar","yaxtalar, barjalar, yordamchi kemalar"],2]);
GEO_OCHIQ.push(["Mamlakatimizdagi suv yuklari asosan qaysi yo‘nalishlarda tashiladi?",["Beruniy–Taxiatosh","Qoratov–Taxiatosh","To‘rtko‘l–Taxiatosh","Xo‘jayli–Taxiatosh"],1]);
GEO_OCHIQ.push(["Mamlakatimizdagi suv yuklari asosan qaysi yo‘nalishlarda tashiladi?",["Termiz–Hayraton, Sharlovuq–Beruniy","Termiz–Hayraton, Sharlovuq–Taxiatosh","Termiz–Hayraton, Sharlovuq–To‘rtko‘l","Termiz–Hayraton, Sharlovuq–Xo‘jayli"],2]);
GEO_OCHIQ.push(["Mamlakatimizdagi suv yuklari asosan qaysi yo‘nalishlarda tashiladi?",["Xo‘jayli–Taxiatosh, Xo‘jayli–Beruniy","Xo‘jayli–Sharlovuq, Xo‘jayli–Beruniy","Xo‘jayli–To‘rtko‘l, Xo‘jayli–Ellikqal’a","Xo‘jayli–To‘rtko‘l, Xo‘jayli–Beruniy"],3]);
GEO_OCHIQ.push(["«Mamlakatimiz hozircha chetga chiqarilayotgan va chetdan keltirilayotgan yuklarning muayyan qismini kira haqi – ... (a) evaziga boshqa davlatlarning kemalari tashib bermoqda». Nuqtalar o‘rniga to‘g‘ri javobni joylashtiring.",["a – shosse","a – fraxt","a – tranzit","a – magistral"],1]);
GEO_OCHIQ.push(["Mamlakatimizdagi mahalliy havo yo‘llarining umumiy uzunligi qancha kilometrdan ortadi?",["70 ming km dan","50 ming km dan","60 ming km dan","80 ming km dan"],2]);
GEO_OCHIQ.push(["Mamlakatimiz havo transporti orqali har yili qanchadan ortiq yo‘lovchi tashiladi?",["2 mln dan ortiq","4 mln dan ortiq","3 mln dan ortiq","5 mln dan ortiq"],0]);

/* ===== 6-to‘plam ===== */
GEO_OCHIQ.push(["Toshkent–Angren–Qo‘qon avtomobil yo‘li nechanchi yili qurilgan?",["1940-yilda","1959-yilda","1937-yilda","1926-yilda"],1]);
GEO_OCHIQ.push(["Qamchiq dovoni dengiz sathidan necha metr balandlikdan o‘tadi?",["2270 metr","2210 metr","2250 metr","3309 metr"],0]);
GEO_OCHIQ.push(["Toshkent–Angren–Qo‘qon avtomobil yo‘lining uzunligi qanchani tashkil etadi?",["353 km","248 km","116 km","485 km"],1]);
GEO_OCHIQ.push(["Quyidagi rasmdagi elektropoyezdlar bugungi kunda qaysi yo‘nalishlar bo‘yicha ham qatnamoqda?",["Toshkent–Nukus, Toshkent–Angren–Pop","Toshkent–Namangan, Toshkent–Andijon","Toshkent–Navoiy, Toshkent–Qarshi–Shahrisabz","Toshkent–Buxoro, Toshkent–Qarshi–Shahrisabz"],3,"gx6_v4"]);
GEO_OCHIQ.push(["Toshkent, Sirdaryo, Jizzax, Samarqand, Qashqadaryo va Surxondaryo viloyatlari orqali o‘tadigan Katta O‘zbek trakti qachon qurilgan?",["1959-yilda","1937-yilda","1940-yilda","1926-yilda"],2]);
GEO_OCHIQ.push(["Katta O‘zbek traktining uzunligi qanchani tashkil etadi?",["800 km","600 km","700 km","900 km"],2]);
GEO_OCHIQ.push(["Transport turlarini ularga mos keluvchi yuk aylanmasi ko‘rsatkichlari bilan to‘g‘ri juftlang:<br>1. Avtomobil transporti; 2. Temiryo‘l transporti; 3. Quvur transporti; 4. Havo transporti.<br>a. 22,9 mlrd t/km; b. 156,9 mln t/km; c. 27,5 mlrd t/km; d. 33,0 mlrd t/km.",["1-c, 2-a, 3-b, 4-d","1-a, 2-c, 3-d, 4-b","1-c, 2-a, 3-d, 4-b","1-c, 2-d, 3-a, 4-b"],2]);
GEO_OCHIQ.push(["Transport turlarini ularning yuk tashish o‘rtacha masofasi (km) bilan to‘g‘ri moslashtirilgan variantni toping:<br>1. Avtomobil transporti; 2. Temiryo‘l transporti; 3. Quvur transporti; 4. Havo transporti.<br>a. 846 km; b. 5079 km; c. 55 km; d. 369 km.",["1-b, 2-d, 3-a, 4-c","1-c, 2-d, 3-a, 4-b","1-d, 2-c, 3-a, 4-b","1-c, 2-a, 3-d, 4-b"],1]);
GEO_OCHIQ.push(["Transport turlari va ularda tashiladigan yuk miqdorlari to‘g‘ri moslashtirilgan qatorni aniqlang:<br>1. Avtomobil transporti; 2. Temiryo‘l transporti; 3. Quvur transporti; 4. Havo transporti.<br>a. 69 mln t; b. 26 ming t; c. 1203 mln t; d. 68 mln t.",["1-c, 2-b, 3-d, 4-a","1-d, 2-c, 3-b, 4-a","1-c, 2-d, 3-a, 4-b","1-c, 2-a, 3-d, 4-b"],2]);
GEO_OCHIQ.push(["Temiryo‘l va quvur transportining ko‘rsatkichlari qaysi javobda to‘g‘ri juftlik hosil qilgan?",["Temiryo‘l (1203 mln t / 55 km) – Quvur (26 ming t / 5079 km)","Temiryo‘l (69 mln t / 369 km) – Quvur (68 mln t / 846 km)","Temiryo‘l (68 mln t / 369 km) – Quvur (69 mln t / 846 km)","Temiryo‘l (68 mln t / 846 km) – Quvur (69 mln t / 369 km)"],2]);
GEO_OCHIQ.push(["Tashiladigan yuk miqdori (mln t) bir-biriga eng yaqin va deyarli teng bo‘lgan ikkita transport turi qaysilar?",["Avtomobil va havo transporti","Temiryo‘l va quvur transporti","Avtomobil va temiryo‘l transporti","Quvur va havo transporti"],1]);
GEO_OCHIQ.push(["Qaysi transport turi eng ko‘p miqdorda yuk tashiydi (1203 mln t), biroq bu yuklarni eng qisqa o‘rtacha masofaga (55 km) yetkazib beradi?",["Temiryo‘l transporti","Quvur transporti","Avtomobil transporti","Havo transporti"],2]);
GEO_OCHIQ.push(["Transport turlari ichida yuk tashish masofasi bo‘yicha ham, yuk miqdori bo‘yicha ham o‘rtacha 3-o‘rinda turadigan transport turi qaysi?",["Avtomobil transporti","Temiryo‘l transporti","Quvur transporti","Havo transporti"],1]);
GEO_OCHIQ.push(["Yuk tashishning o‘rtacha masofasi 100 kilometrdan kam bo‘lgan yagona transport turi qaysi?",["Avtomobil transporti","Temiryo‘l transporti","Quvur transporti","Havo transporti"],0]);
GEO_OCHIQ.push(["Tashilgan yuk aylanmasi (mlrd t/km) bo‘yicha mutlaq yetakchi (eng yuqori ko‘rsatkichga ega) bo‘lgan transport turi qaysi?",["Avtomobil transporti","Temiryo‘l transporti","Quvur transporti","Havo transporti"],2]);
GEO_OCHIQ.push(["Qaysi shaharda ham aeroport, ham temir yo‘l, ham avtomobil yo‘li va daryo porti – ya’ni to‘rttala transport turi ham kesishgan?",["Navoiy","Termiz","Buxoro","Toshkent"],1]);

/* ===== 7-to‘plam ===== */
GEO_OCHIQ.push(["Quyidagi test savollariga Venn diagrammasi yordamida javob bering.",["1-A, 2-B, 3-C, 4-D","1-B, 2-A, 3-C, 4-D","1-C, 2-D, 3-B, 4-A","1-A, 2-D, 3-C, 4-B"],3,"gx7_v1"]);
GEO_OCHIQ.push(["Berilgan demografik ko‘rsatkichlar asosida ushbu mamlakat aholisi yil oxirida jami qancha kishi bo‘lganini aniqlang.",["55 944 000 kishi","56 000 000 kishi","56 056 000 kishi","56 112 000 kishi"],2,"gx7_v2"]);
GEO_OCHIQ.push(["Quyidagi rasmda berilgan transport tarmoqlariga tegishli bo‘lgan ma’lumotlarni to‘g‘ri joylashtiring.<br>a) Yaponiyaning qo‘shma korxonalari bilan birgalikda tashkil qilingan;<br>b) yil davomida 15–20 mln dan ko‘proq yo‘lovchi foydalanmoqda;<br>c) har yili 2 mln dan ortiq yo‘lovchi tashiladi;<br>d) Germaniyaning qo‘shma korxonalari bilan birgalikda tashkil qilingan.",["1-c, 2-a, 3-d, 4-b","1-b, 2-d, 3-b, 4-c","1-c, 2-d, 3-a, 4-b","1-b, 2-a, 3-d, 4-c"],0,"gx7_v3"]);
GEO_OCHIQ.push(["Jadvalda berilgan raqamlar va ularga mos keluvchi iqtisodiyot tarmoqlarini 2017-yil holatiga ko‘ra to‘g‘ri moslashtiring (band aholining iqtisodiyot tarmoqlari bo‘yicha taqsimlanishi).",["1-A, 2-B, 3-C, 4-D, 5-E","1-B, 2-A, 3-C, 4-E, 5-D","1-A, 2-C, 3-B, 4-D, 5-E","1-E, 2-B, 3-C, 4-D, 5-A"],3,"gx7_v4"]);
GEO_OCHIQ.push(["Berilgan jadval ma’lumotlaridan foydalanib, mamlakat aholisining tabiiy o‘sish koeffitsiyentini promilleda hisoblang.",["6 ‰","8 ‰","12 ‰","21 ‰"],1,"gx7_v5"]);
GEO_OCHIQ.push(["O‘zbekiston aholisi nechanchi yillar oralig‘ida kamaygan?",["1865–1900-yillar","1900–1924-yillar","1924–1939-yillar","1939–1950-yillar"],3]);
GEO_OCHIQ.push(["Mamlakatimizda qoramollarning jami soni qancha boshdan ortiqni tashkil etadi?",["6,5 mln","9,6 mln","8,3 mln","9,8 mln"],1]);
GEO_OCHIQ.push(["Jadvalda berilgan raqamlar va ularga mos keluvchi iqtisodiy-geografik ma’lumotlarni to‘g‘ri moslashtiring.",["1-E; 2-A; 3-B; 4-C, D, G, H; 5-F","1-A; 2-E; 3-B; 4-C, D, G, H; 5-F","1-E; 2-B; 3-A; 4-C, D, G, H; 5-F","1-F; 2-A; 3-B; 4-C, D, G, H; 5-E"],0,"gx7_v8"]);
GEO_OCHIQ.push(["Mamlakatimiz qishloq xo‘jaligi ekin maydonlari tarkibida 1970–2017-yillar oralig‘ida qaysi ekin turlarini yetishtirish kamaygan?",["donli ekinlar va sabzavot-poliz ekinlari, kartoshka","donli ekinlar va yem-xashak ekinlari","texnik ekinlar va sabzavot-poliz ekinlari, kartoshka","texnik ekinlar va yem-xashak ekinlari"],3]);
GEO_OCHIQ.push(["Mamlakatimizdagi avtomobil zavodidan dastlabki «Damas», «Tico», «Nexia» rusumli yengil avtomobillar konveyerdan qachondan boshlab chiqa boshladi?",["1995-yildan","1996-yildan","1997-yildan","1998-yildan"],1]);
GEO_OCHIQ.push(["Mamlakatimizdagi kimyo va neft-kimyo mashinasozligi qachon tashkil topgan?",["1941-yilda","1945-yilda","1956-yilda","1983-yilda"],0]);
GEO_OCHIQ.push(["Mamlakatimiz yalpi ichki mahsuloti tarkibida kichik biznesning ulushi 2017-yilda 2000-yilga nisbatan necha foiz o‘sgan?",["23,9 %","27,2 %","21,3 %","27,9 %"],0]);
GEO_OCHIQ.push(["Chirchiq–Bo‘zsuv gidroenergetika kaskadida joylashgan, quvvati 10–100 ming kW bo‘lgan GES qaysi?",["1-Oqqovoq","Shayxontohur","Salor","5-Quyibo‘zsuv"],1]);
GEO_OCHIQ.push(["Berilgan diagramma ko‘rsatkichlari asosida hisoblang: qaysi yilda shahar aholisining umumiy o‘sish ko‘rsatkichi eng yuqori bo‘lgan?",["1995-yil","2005-yil","2010-yil","2015-yil"],3,"gx7_v14"]);
GEO_OCHIQ.push(["Quyida berilgan jadvalda aholining milliy tarkibi (foiz hisobida) bo‘yicha berilgan ma’lumotlarni moslashtiring (2018-yil).",["1b, 2a, 3c, 4e, 5f, 6d","1b, 2f, 3d, 4e, 5c, 6a","1b, 2c, 3e, 4d, 5a, 6f","1b, 2c, 3d, 4e, 5f, 6a"],3,"gx7_v15"]);
GEO_OCHIQ.push(["Berilgan jadval ma’lumotlaridan foydalanib, mamlakatning tashqi savdo aylanmasini toping (mlrd AQSh doll.).",["6,720","119,584","120,432","−6,720"],1,"gx7_v16"]);
GEO_OCHIQ.push(["Quyida keltirilgan ko‘rsatkichlarni 2017-yil holatiga ko‘ra ularga tegishli tashqi savdo guruhlari (A va B) bilan to‘g‘ri moslashtirilgan javobni toping.",["A – 1, 3, 5, 7, 9; B – 2, 4, 6, 8, 10","A – 1, 2, 5, 6, 10; B – 3, 4, 7, 8, 9","A – 2, 4, 6, 8, 10; B – 1, 3, 5, 7, 9","A – 1, 4, 5, 8, 9; B – 2, 3, 6, 7, 10"],0,"gx7_v17"]);
GEO_OCHIQ.push(["2018-yil holatiga ko‘ra mamlakatimizda hosil qilinayotgan elektr energiyaga qancha miqdorda mazut sarflanmoqda?",["80 ming tonna","82 ming tonna","84 ming tonna","86 ming tonna"],3]);
GEO_OCHIQ.push(["Mamlakatimizda kimyo sanoati nechanchi yildan boshlab rivojlana boshladi?",["1924-yildan boshlab","1928-yildan boshlab","1932-yildan boshlab","1936-yildan boshlab"],2]);
GEO_OCHIQ.push(["Quyosh energiyasidan foydalanadigan «Fizika–Quyosh» inshooti Toshkent viloyatining qaysi tumanida joylashgan?",["Bo‘stonliq","Qibray","Parkent","Zangiota"],2]);
GEO_OCHIQ.push(["Sanoatning texnologik jarayon jihatidan o‘zaro bog‘langan, ba’zan turli tarmoqlarga taalluqli bo‘lgan bir qancha ishlab chiqarish korxonalarining bir korxonaga birlashtirilishi ishlab chiqarishning qaysi shakliga xos?",["kombinatlashtirish","kooperativlashuv","ixtisoslashuv","markazlashuv"],0]);
GEO_OCHIQ.push(["Jadval ma’lumotlaridan foydalanib, 2021-yilda shahar aholisi salmog‘i necha foiz ekanligini toping.",["36,7 %","38,15 %","41,5 %","61,85 %"],1,"gx7_v22"]);
GEO_OCHIQ.push(["Mustaqillikka qadar mamlakatimiz jami ekin maydonining necha foiziga yaqin qismida donli ekinlar ekilgan?",["10 % ga yaqin qismida","20 % ga yaqin qismida","30 % ga yaqin qismida","40 % ga yaqin qismida"],1]);
GEO_OCHIQ.push(["2015-yilda Italiya davlatiga qancha sayyoh tashrif buyurgan?",["48,6 mln sayyoh","55,6 mln sayyoh","65,0 mln sayyoh","74,8 mln sayyoh"],0]);
GEO_OCHIQ.push(["Rasmda berilgan Asakadagi avtomobil zavodining boshqa korxonalar bilan aloqalari ma’lumotlari asosida korxonalar va ular yetkazib beradigan mahsulotlarni to‘g‘ri moslashtiring.",["1-B, 2-A, 3-D, 4-C, 5-E","1-B, 2-C, 3-D, 4-A, 5-E","1-E, 2-A, 3-D, 4-C, 5-B","1-B, 2-A, 3-E, 4-C, 5-D"],0,"gx7_v25"]);
GEO_OCHIQ.push(["Mamlakatimizda umumiy importning qancha qismini texnik va ishlab chiqarish jihozlari hamda asbob-uskunalar tashkil qiladi (bu mamlakat iqtisodiyotining rivojlanish istiqbollariga aynan mos keladi)?",["1/4","2/4","3/4","2/5"],2]);
GEO_OCHIQ.push(["Quyida berilgan jadvalda 2017-yilgi sanoat tarmoqlarining mahsulot ishlab chiqarish tarkibi, turli yillardagi kichik biznesning YaIMdagi ulushi hamda yoqilg‘ilarning issiqlik koeffitsiyenti bo‘yicha berilgan ma’lumotlarni moslashtiring.",["1-c, 2-d, 3-o, 4-m, 5-p, 6-a, 7-h, 8-l, 9-e, 10-q, 11-f, 12-i, 13-n, 14-j, 15-k, 16-b, 17-g","1-q, 2-d, 3-e, 4-m, 5-p, 6-a, 7-h, 8-l, 9-o, 10-c, 11-f, 12-i, 13-n, 14-j, 15-k, 16-b, 17-g","1-c, 2-d, 3-o, 4-m, 5-p, 6-a, 7-h, 8-i, 9-e, 10-q, 11-f, 12-l, 13-n, 14-j, 15-k, 16-b, 17-g","1-q, 2-d, 3-o, 4-m, 5-p, 6-a, 7-k, 8-l, 9-e, 10-c, 11-f, 12-i, 13-n, 14-j, 15-h, 16-b, 17-g"],0,"gx7_v27"]);
GEO_OCHIQ.push(["Berilgan jadval ma’lumotlariga ko‘ra mamlakatning tashqi savdo balansini aniqlang (mlrd AQSh doll.).",["+6,720","−6,720","+119,584","−119,584"],1,"gx7_v28"]);
GEO_OCHIQ.push(["2017-yil holatiga ko‘ra mamlakatimizga import qilinayotgan mahsulotlarning 9,5 foizi qaysi davlatga to‘g‘ri keladi?",["Rossiya","Koreya Respublikasi","Qozog‘iston","Turkiya"],1]);
GEO_OCHIQ.push(["Quyidagi mamlakatimizning xizmat ko‘rsatish sohasiga berilgan ta’riflardan qaysi biri noto‘g‘ri?",["mamlakatimiz aholisi davlat va tijorat teleradiodasturlari va raqamli televideniye bilan ta’minlangan","xizmat ko‘rsatish sohalari ichida matbaachilik ham muhim rol o‘ynaydi","mamlakatimizda birinchi bosmaxona XX asr oxirlarida ishga tushgan","mustaqillikdan so‘ng bosmaxonalar tubdan qayta jihozlandi, endilikda ularda matn va rasmlar zamonaviy kompyuterlarda terilmoqda va chop etilmoqda"],2]);

/* ===== 8-to‘plam ===== */
GEO_OCHIQ.push(["Mustaqillikdan oldin barpo etilgan korxonani toping.",["«O‘zeltexsanoat» uyushmasi","«SamAuto» zavodi","Qizilqum fosforit kombinati","Qo‘ng‘irot soda zavodi"],0]);
GEO_OCHIQ.push(["Afrika materigi relyefiga xos bo‘lgan javobni toping.",["U, asosan, eng qadimgi kristall va metamorfik tog‘ jinslaridan tuzilgan. Kristall jinslar orasida temir, olmos, oltin, uran rudalari, marganes, rangdor metall rudalarining katta konlari bor. Yassi tog‘likning yuzasi chuqur daryo vodiylari bilan parchalangan, ular past-baland qirlarni eslatadi.","Plato, tog‘lik va yassi tog‘likdan boshlanadigan yoki oqib o‘tadigan daryo vodiylarida relyefning dara, kanyon, sharshara va ostonalar ko‘p hosil bo‘lgan.","Bu o‘lka bir necha parallel joylashgan yassi tog‘liklardan tashkil topgan bo‘lib, ular bir-biridan chuqur vodiylar bilan ajralib turadi. Zilzilalar bo‘lib turadi, o‘nlab harakatdagi va so‘ngan vulqonlar bor. Bu tog‘lardan oltin, kumush, rangli metallar, neft va toshko‘mir qazib olinadi.","O‘lkaning relyefi, asosan, yassi tog‘liklardan iborat. Bu yassi tog‘liklar o‘lkaning markaziy qismida joylashgan. Uning yuzasi dengiz sathidan o‘rtacha 400–600 m baland. Yassi tog‘liklarda lava-vulqon yotqiziqlari ko‘p uchraydi."],1]);
GEO_OCHIQ.push(["Janubiy Amerika materigining savannasiga xos bo‘lgan xususiyatni aniqlang.",["Savannalar zonasi subekvatorial iqlim mintaqalari hududidagi pasttekisliklarda, yassi tog‘liklarda tarkib topgan.","Savannalar materikning shimoliy, sharqiy qismlarida katta maydonlarni egallaydi.","Subtropik mintaqaning And tog‘i etaklarida savannalar joylashgan.","Bu zona Braziliya hamda Gviana tog‘liklarining shimoliy yonbag‘irlarini egallaydi."],0]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Sahroi Kabirga borgan sayyohlardan biri bizga quyidagilarni hikoya qilib berdi: «Tush payti edi, havo harorati +43 °C, atrofdan birdaniga gumburlagan kuchli shovqinlar chiqib, hamma yoqni larzaga keltirdi. Yo‘l boshlovchimiz buni «Quyosh tovushi» deb tushuntirdi»».</i><br>Bunday tovushlarning paydo bo‘lishiga sabab bo‘lgan tabiiy jarayonni toping.",["kimyoviy nurash","organik nurash","fizik nurash","karst"],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Gazlama to‘qib chiqarish jarayoni alohida-alohida joylashgan yigirish, to‘qish yoki pardozlash fabrikalarida bosqichma-bosqich amalga oshiriladi. Transport xarajati, yuk ortish-tushirish sarflari tayyor mahsulot tannarxiga qo‘shiladi».</i><br>Demak, to‘qimachilik ishlab chiqarishini ishlab chiqarishning qaysi shaklida to‘plash foydaliroq bo‘ladi?",["ishlab chiqarishning kombinat shakli","ishlab chiqarishning markazlashuvi","kooperativlashuv","ixtisoslashuv"],0]);
GEO_OCHIQ.push(["Turkiyaning Kappadokiya sayyohlik mintaqasida havo shari 6000 m balandlikka ko‘tarildi. Havo sharida uchayotgan turistlardan biri havodagi bulutlarni ko‘rib, havo aynib kelayotganini aytdi. Ayting-chi, bu havo shari uchib ketayotgan havoda qanday bulutlar hosil bo‘lgan?",["baland to‘p-to‘p","qat-qat","patsimon","baland qat-qat"],2]);
GEO_OCHIQ.push(["Avstraliya materigi subtropik iqlim mintaqasining g‘arbdan sharqqa tomon to‘g‘ri berilgan qatorini aniqlang.",["1 – nam subtropik, 2 – O‘rta dengiz subtropik, 3 – musson","1 – O‘rta dengiz subtropik, 2 – quruq subtropik, 3 – nam subtropik","1 – O‘rta dengiz subtropik, 2 – kontinental, 3 – nam subtropik","1 – subtropik kontinental, 2 – O‘rta dengiz subtropik, 3 – nam subtropik"],2,"gx8_v7"]);
GEO_OCHIQ.push(["Fasliy ritmiklikka xos bo‘lmagan javobni toping.",["Mo‘tadil iqlim mintaqasida quruqlikda dengiz, mo‘tadil kontinental, keskin kontinental va musson iqlim o‘lkalari shakllangan.","Litosferada yil davomida nurash va boshqa ekzogen jarayonlarning faolligi o‘zgaradi.","Gidrosferada suvning harorati, sho‘rligi, zichligining yillik o‘zgarishi, baliqlarning mavsumiy migratsiyasi kabilar kuzatiladi.","Atmosferada namlik, harorat, atmosfera yog‘inlarining yillik o‘zgarishi, mussonlar (mavsumiy shamollar)ning esishi."],0]);
GEO_OCHIQ.push(["Quyida berilgan xarita-sxemada 4 raqami bilan qaysi yer po‘sti plitasi ko‘rsatilgan?",["Kokos","Karib","Skosha","Naska"],3,"gx8_v9"]);
GEO_OCHIQ.push(["Sxemada qanday jarayon aks etgan?",["Geotizimlarning ekvatordan qutblar tomon qonuniy o‘zgarib borishi","Atmosferaning quyi qatlami – troposfera qalinligi","Atmosfera haroratining ekvatordan qutblar tomon o‘zgarishi","Troposferada bulutlar hosil bo‘ladigan qatlam"],1,"gx8_v10"]);
GEO_OCHIQ.push(["Ushbu chizmaga mos javobni toping. Chizmada AB yo‘nalish azimuti bo‘yicha harakatlangan yo‘lovchi 90° burilib, mevazorga kirdi. Yo‘lovchi mevazorga ufqning qaysi yo‘nalishida kelganligini aniqlang.",["J-sh.q-Sh.q","J-J-Sh.q","Sh-Sh-Sh.q","Sh-G‘"],1,"gx8_v11"]);
GEO_OCHIQ.push(["Quyidagi qaysi rasmda estuariy tasvirlangan?",["A","B","C","D"],0,"gx8_v12"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlardan foydalanib aniqlang: 2-raqamda 1 m³ havoning namga to‘yinishi uchun yana necha gramm suv bug‘i kerak bo‘lishini aniqlang.",["0,5 gramm","4,5 gramm","0,581 gramm","0,1 gramm"],2,"gx8_v13"]);
GEO_OCHIQ.push(["Chizmadagi AB (60°) yo‘nalishiga nisbatan orqaga qaytishda qaysi yo‘nalish azimuti bilan harakatlanish kerakligini aniqlang.",["60°","120°","150°","240°"],3,"gx8_v14"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlardan foydalanib aniqlang: qaysi joyda (nuqtada) mutlaq namlik eng past?",["1-nuqtada","2-nuqtada","3-nuqtada","5-nuqtada"],0,"gx8_v15"]);
GEO_OCHIQ.push(["Rasmdagi jarayon ta’sirida hosil bo‘lgan geografik obyektlarni aniqlang.",["O‘rta okean tizmalari","Farg‘ona vodiysi, Tyanshan tog‘lari","And tog‘lari, Yapon orollari","Qizil dengiz, Baykal ko‘li"],2,"gx8_v16"]);
GEO_OCHIQ.push(["Jadval ma’lumotlaridan foydalanib aniqlang: 2021-yilda mamlakatda shahar aholisi salmog‘i necha foizni tashkil etgan?",["33,6 %","51,2 %","66,4 %","72,1 %"],2,"gx8_v17"]);
GEO_OCHIQ.push(["Jadval ma’lumotlaridan foydalanib, 2021-yilda mamlakat aholisi soni umumiy hisobda necha kishiga ko‘payganini aniqlang.",["277 000 kishiga","110 800 kishiga","332 400 kishiga","55 400 kishiga"],0,"gx8_v17"]);
GEO_OCHIQ.push(["Xarita-sxema bo‘yicha mos ravishda qaysi xususiyatlar tabiiy zonalarga mos kelishini aniqlang.<br>a) Janubiy yarimsharda eng samarali va keng don yetishtirish zonasi;<br>b) bu yerda pakana daraxtlar, daraxtsimon kaktuslar o‘sadi;<br>c) yog‘in ko‘p yog‘adi, natijada doimiy yashil o‘rmonlar tarkib topgan;<br>d) tabiiy sharoiti qattiq, yog‘in kam yog‘adigan bu o‘lkada kam hosilli bo‘z tuproqlar keng tarqalgan;<br>e) ushbu tabiiy zonada havodan tushadigan yog‘ingarchilik turlari ustunlik qiladi.",["1-c, 2-b, 3-c, 4-a, 5-d","1-b, 2-a, 3-e, 4-c, 5-d","1-b, 2-c, 3-d, 4-a, 5-e","1-c, 2-a, 3-e, 4-b, 5-d"],3,"gx8_v19"]);
GEO_OCHIQ.push(["Agrosanoat majmuasiga oid ma’lumotlarni moslashtiring.<br>I guruh; II guruh; III guruh.<br>a) kimyo sanoati; b) oziq-ovqat sanoati; c) dehqonchilik; d) mashinasozlik; e) yengil sanoat; f) chorvachilik.",["I – c, f; II – a, d; III – b, e","I – b, e; II – a, d; III – c, f","I – a, d; II – c, f; III – b, e","I – a, d; II – b, e; III – c, f"],2]);
GEO_OCHIQ.push(["Yer yuzining sernam ekvatorial o‘rmonlar zonasiga xos bo‘lgan xususiyatni aniqlang.",["sernam qish, issiq yoz bo‘ladi","bu zonada yil ikkita faslga bo‘linadi","quruq, issiq yoz, sernam, iliq qish bo‘ladi","bu zonada, asosan, bitta fasl shakllangan"],3]);
GEO_OCHIQ.push(["Qaysi javobda litosfera plitalari nomi to‘g‘ri berilgan?",["Sharqiy Yevropa, Sibir","Tinch okean, Skosha","Atlantika okeani, Tarim","Janubiy Xitoy, Hindiston"],1]);
GEO_OCHIQ.push(["Atmosfera massasining necha foizi 80 km gacha bo‘lgan quyi qismiga to‘g‘ri keladi?",["90,3","99,5","78,1","80"],1]);
GEO_OCHIQ.push(["Qaysi sayyora Quyoshdan uzoqligi bo‘yicha beshinchi o‘rinda turadi?",["Merkuriy","Mars","Saturn","Yupiter"],3]);
GEO_OCHIQ.push(["G‘arbi-shimoli-g‘arb tomonning azimutini aniqlang.",["157,5°","202,5°","247,5°","292,5°"],3]);
GEO_OCHIQ.push(["Meteorologik stansiyada soat 01:00 da havo harorati 0 °C va nisbiy namlik 70 % ekanligi kuzatildi. Agar 0 °C haroratda 1 m³ havo maksimal 5 g suv bug‘ini tutib tura olsa, ushbu vaqtdagi havoning mutlaq namligini aniqlang.",["3,0 g","3,5 g","4,2 g","5,0 g"],1]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 va 2 raqamlari bilan Yevrosiyoning qaysi tabiiy geografik obyektlari ko‘rsatilgan?",["1) Taymir yarimoroli va 2) Arabiston dengizi","1) Arabiston yarimoroli va 2) Qizil dengiz","1) Pireney yarimoroli va 2) Adan qo‘ltig‘i","1) Kichik Osiyo yarimoroli va 2) Bengaliya qo‘ltig‘i"],3,"gx8_v27"]);
GEO_OCHIQ.push(["Yevrosiyo materigiga xos bo‘lgan xususiyatlarni belgilang.<br>1) eng katta deltasi bor; 2) eng chuqur g‘ori bor; 3) eng mitti odamxo‘r balig‘i bor; 4) doimiy muzloq yerlar maydoniga ko‘ra birinchi o‘rinda; 5) eng balandda joylashgan materik; 6) berk havza maydoni jihatidan birinchi o‘rinda turadi.",["2, 3, 5","1, 2, 4","1, 3, 6","2, 4, 6"],1]);
GEO_OCHIQ.push(["Qoyali tog‘lar Kordilyera tog‘ligining qaysi tomonida joylashgan?",["janubi-g‘arbida","shimoli-sharqida","sharqida","shimolida"],2]);
GEO_OCHIQ.push(["A nuqtadagi havo bosimi 680 mm simob ustuniga teng bo‘lsa, B nuqtadagi havo bosimi qanchaga teng bo‘ladi?",["740 mm sim. ust.","660 mm sim. ust.","710 mm sim. ust.","700 mm sim. ust."],3,"gx8_v30"]);
GEO_OCHIQ.push(["Afrika materigining geologik tuzilishiga xos bo‘lgan xususiyatlarni aniqlang.",["180 mln yil muqaddam Arabiston yarimoroli bilan birga yaxlit platformani hosil qilgan. And tog‘ burmalanishi davrida Qizil dengiz o‘rni ochilgan","Lavraziya materigidan ajralgan, tog‘li o‘lkalarida magmatik va metamorfik tog‘ jinslari tarkib topgan","chekka shimoli-g‘arbida Yevrosiyo plitasi bilan to‘qnashgan chegarada burmali tog‘lar hosil bo‘lgan, seysmik hududlar nisbatan kam","qadimgi Gondvana quruqligining bir qismi bo‘lgan, tekisliklarida, asosan, magmatik jinslar tarkib topgan"],2]);
GEO_OCHIQ.push(["Atlantika okeanining o‘rta okean tizmalarida qanday jinslar tarqalgan?",["bazaltli, vulqonli","magmatik, metamorfik","qum, gil, loyqa","qizil gilli"],0]);
GEO_OCHIQ.push(["2012-yilda qurilgan, uzunligi 116 kilometr bo‘lgan avtomobil yo‘lini aniqlang.",["Toshkent–Chinoz","Guliston–Ohangaron","Toshkent–Angren","Sirdaryo–Jizzax"],1]);
GEO_OCHIQ.push(["Grafikda berilgan ma’lumotlarga tayanib aniqlang: 1917-yildan 2018-yilgacha bo‘lgan davrda mintaqadagi shahar aholisining umumiy soni qanday o‘zgargan?",["1,68 mln kishiga ko‘paygan","o‘zgarishsiz qolgan (0 kishi)","8,6 mln kishiga kamaygan","2 barobarga ortgan"],1,"gx8_v34"]);
GEO_OCHIQ.push(["Grafikdan foydalanib javob bering: mintaqaning jami aholisi 2018-yilda 84 mln kishi bo‘lgan bo‘lsa, 2012-yilga nisbatan shahar aholisi necha kishiga ko‘payganini aniqlang.",["8,6 mln kishiga","1,68 mln kishiga","3,2 mln kishiga","o‘zgarmagan"],1,"gx8_v35"]);
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Yevrosiyoga tegishli bo‘lgan obyekt qaysi raqam bilan ko‘rsatilgan?<br>b) Shimoliy Amerikaga tegishli bo‘lgan obyekt qaysi raqam bilan ko‘rsatilgan?",[["a) Yevrosiyoga tegishli bo‘lgan obyekt qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i],["b) Shimoliy Amerikaga tegishli bo‘lgan obyekt qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i]],"gx8_w36"]);
GEO_KALIT.push("a) 2; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Italiyadan Xitoygacha bo‘lgan ulkan hududlarda sayohat qilgan, Xitoyda 17 yil yashagan, mamlakatning turli shaharlarida bo‘lgan hamda so‘ng Janubiy Xitoy dengizi, Bengaliya qo‘ltig‘i, Arabiston dengizi va Eron orqali vataniga qaytib borib, o‘zi borgan yerlar haqida qimmatli ma’lumotlar qoldirgan sayyoh qaysi raqam bilan ko‘rsatilgan?<br>b) 1513-yilda Panama bo‘ynidan o‘tib, Tinch okeanini birinchi bo‘lib ko‘rgan va unga dastlab «Janubiy okean» deb nom bergan ispan sayyohi qaysi raqam bilan ko‘rsatilgan?",[["a) Italiyadan Xitoygacha bo‘lgan ulkan hududlarda sayohat qilgan, Xitoyda 17 yil yashagan, mamlakatning turli shaharlarida bo‘lgan hamda so‘ng Janubiy Xitoy dengizi, Bengaliya qo‘ltig‘i, Arabiston dengizi va Eron orqali vataniga qaytib borib, o‘zi borgan yerlar haqida qimmatli ma’lumotlar qoldirgan sayyoh qaysi raqam bilan ko‘rsatilgan?",/\b3\b/i],["b) 1513-yilda Panama bo‘ynidan o‘tib, Tinch okeanini birinchi bo‘lib ko‘rgan va unga dastlab «Janubiy okean» deb nom bergan ispan sayyohi qaysi raqam bilan ko‘rsatilgan?",/\b4\b/i]],"gx8_w37"]);
GEO_KALIT.push("a) 3; b) 4");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Tarkibiga Yangi Gvineya, Bismark, Solomon orollari, Yangi Kaledoniya va Fiji kabi orollar kiradigan hudud qaysi raqam bilan ko‘rsatilgan?<br>b) Tarkibiga Bonin, Mariana, Karolina, Marshall va Gilbert orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",[["a) Tarkibiga Yangi Gvineya, Bismark, Solomon orollari, Yangi Kaledoniya va Fiji kabi orollar kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i],["b) Tarkibiga Bonin, Mariana, Karolina, Marshall va Gilbert orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i]],"gx8_w38"]);
GEO_KALIT.push("a) 2; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Antil oqimi qaysi raqam bilan ko‘rsatilgan?<br>b) Kurosio oqimi qaysi raqam bilan ko‘rsatilgan?",[["a) Antil oqimi qaysi raqam bilan ko‘rsatilgan?",/\b10\b/i],["b) Kurosio oqimi qaysi raqam bilan ko‘rsatilgan?",/\b22\b/i]],"gx8_w39"]);
GEO_KALIT.push("a) 10; b) 22");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Bofort dengizi qaysi raqam bilan ko‘rsatilgan?<br>b) Barens dengizi qaysi raqam bilan ko‘rsatilgan?",[["a) Bofort dengizi qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Barens dengizi qaysi raqam bilan ko‘rsatilgan?",/\b6\b/i]],"gx8_w40"]);
GEO_KALIT.push("a) 1; b) 6");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Selva zonasida yashovchi hayvon qaysi raqam bilan ko‘rsatilgan?<br>b) Yevrosiyo materigining cho‘l zonasida yashovchi hayvon qaysi raqam bilan ko‘rsatilgan?",[["a) Selva zonasida yashovchi hayvon qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i],["b) Yevrosiyo materigining cho‘l zonasida yashovchi hayvon qaysi raqam bilan ko‘rsatilgan?",/\b5\b/i]],"gx8_w41"]);
GEO_KALIT.push("a) 2; b) 5");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Roka burni qaysi raqam bilan ko‘rsatilgan?<br>b) Dejnyov burni qaysi raqam bilan ko‘rsatilgan?",[["a) Roka burni qaysi raqam bilan ko‘rsatilgan?",/\b3\b/i],["b) Dejnyov burni qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx8_w42"]);
GEO_KALIT.push("a) 3; b) 2");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Afrikadagi «Etosha» milliy bog‘i qaysi raqam bilan ko‘rsatilgan?<br>b) Yevrosiyodagi Barguzin qo‘riqxonasi qaysi raqam bilan ko‘rsatilgan?",[["a) Afrikadagi «Etosha» milliy bog‘i qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Yevrosiyodagi Barguzin qo‘riqxonasi qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx8_w43"]);
GEO_KALIT.push("a) 1; b) 2");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Avstraloid irqi vakili qaysi raqam bilan ko‘rsatilgan?<br>b) Negroid irqi vakili qaysi raqam bilan ko‘rsatilgan?",[["a) Avstraloid irqi vakili qaysi raqam bilan ko‘rsatilgan?",/\b4\b/i],["b) Negroid irqi vakili qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i]],"gx8_w44"]);
GEO_KALIT.push("a) 4; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Qaysi raqamda graben tasvirlangan?<br>b) Qaysi raqamda gorst tasvirlangan?",[["a) Qaysi raqamda graben tasvirlangan?",/\b2\b/i],["b) Qaysi raqamda gorst tasvirlangan?",/\b1\b/i]],"gx8_w45"]);
GEO_KALIT.push("a) 2; b) 1");

/* ===== 9-to‘plam ===== */
GEO_OCHIQ.push(["Janubiy Amerikaning tropik iqlim mintaqasiga berilgan to‘g‘ri javobni toping.",["Tropik mintaqaning Tinch okean sohillariga Peru sovuq oqimi yog‘in keltirmaydi va deyarli yog‘in yog‘maydi. Natijada shudring Afrikadagi Namib cho‘li kabi Atakama cho‘li namligining yagona manbai hisoblanadi. Atakama cho‘li ustida yillab bir tomchi ham yog‘in yog‘masligi mumkin.","Tropik iqlim mintaqasida yil bo‘yi issiq bo‘ladi. Materik sohillarida va orollarda yog‘in ko‘p yog‘adi. Ularni okeandan esadigan shamollar keltiradi. Faqat mintaqaning g‘arbida quruq, tumanli kunlarni kuzatish mumkin.","Tropik iqlim mintaqasi Arabiston yarimoroli, Eron tog‘ligi va Hind daryosi havzasini egallaydi. Mintaqaning janubida yil davomida quruq va issiq kontinental tropik havo massalari tarkib topadi. Yozi juda issiq (+30...+35 °C), qishi iliq (+18...+24 °C) bo‘lib, 500–1000 mm atrofida yog‘in yog‘adi.","Tropik iqlim mintaqasi katta maydonni egallaydi. Oldingi mintaqa singari ko‘p quyosh radiatsiyasini oladi. Ikkita iqlim tipi shakllangan."],0]);
GEO_OCHIQ.push(["2017-yilda mamlakatimizda 2000-yildagiga nisbatan go‘sht va sut yetishtirish necha marta oshdi?",["4,8 marta","2,7 marta","4,3 marta","3 marta"],3]);
GEO_OCHIQ.push(["Keniya davlatining necha foiz maydonini milliy bog‘lar egallaydi?",["15","12","10","17"],2]);
GEO_OCHIQ.push(["Kura, Kashofrud, Araks daryolari qaysi tabiiy geografik o‘lkada joylashgan?",["Janubiy Osiyo","Markaziy Osiyo","Old Osiyo","Janubi-g‘arbiy Osiyo"],2]);
GEO_OCHIQ.push(["Quyidagi rasmda IX Rim raqami bilan berilgan Yevrosiyo o‘lkasiga to‘g‘ri berilgan ta’rifni toping.",["O‘lkaning maydoni qariyb 4 mln km² ga teng. U Sharqiy Yevropa platformasini egallagan. Platformaning yuza qismi hozirgi davr dengiz va kontinental yotqiziqlari bilan qoplangan. O‘lka iqlimining shakllanishida Atlantika okeanidan esadigan iliq va nam havo massalari hamda Arktika sovuq havo massalarining ta’siri kuchli. O‘lka daryolarga juda boy: Volga, Dnepr, Pechora, Mezen, Shimoliy Dvina va Ural daryolari shular jumlasidandir.","O‘lkaga shu nomdagi pasttekislik va Kara dengizidagi bir qancha kichikroq orollar kiradi. U shimoldan janubga 2500 km ga, g‘arbdan sharqqa 1900 km ga cho‘zilgan. O‘lka zamini paleozoy erasida vujudga kelgan plitadan iborat. Uning usti mezozoy va kaynozoy eralarining turli xil qalinlikdagi yotqiziqlari bilan qoplangan. O‘lka hududining mutlaq balandligi 300 m dan oshmaydi. Ob, Irtish, Taz va Pur o‘lkaning eng yirik daryolaridir. Hududdagi deyarli barcha daryolar Shimoliy Muz okeani havzasiga kiradi.","O‘lka Kichik Osiyo yarimoroli, Armaniston va Eron tog‘liklarini o‘z ichiga oladi. O‘lka zamini paleozoy erasida vujudga kelgan. Kaynozoy erasida sodir bo‘lgan alp tog‘ burmalanishi davrida yana qayta ko‘tarilgan va yashargan. O‘lka hududi tektonik jihatdan faol bo‘lib, Alp-Himolay seysmik mintaqasiga kiradi. Relyefi, asosan, past va yassi tog‘liklardan iborat. O‘lkaning eng baland nuqtasi Kavkaz tog‘ida bo‘lib, balandligi 5642 m ga yetadi. Kura, Karun, Xarirud, Atrek, Kashofrud, Araks daryolari o‘lkaning eng yirik daryolaridir. O‘lka hududida Urmiya, Van va boshqa kichik ko‘llar bor.","U Sibirning markaziy qismini egallab, g‘arbda G‘arbiy Sibir pasttekisligidan sharqda Kolima daryosining vodiysigacha davom etadi. Sharqiy Sibirning markaziy qismini egallagan qattiq va mustahkam Sibir platformasi arxey erasida vujudga kelgan. Uning g‘arbiy qismi paleozoy, sharqiy qismi esa mezozoy eralarida ko‘tarilgan. O‘lkaning relyefi, asosan, yassi tog‘liklardan iborat. Markaziy qismida O‘rta Sibir yassi tog‘ligi joylashgan. Putorana tog‘larida mutlaq balandlik 1701 m ga yetadi. Yenisey, Lena, Aldan, Kolima, Taymir, Xatanga, Vilyuy, Anabar daryolari Sharqiy Sibirning asosiy daryolaridir."],2,"gx9_v5"]);
GEO_OCHIQ.push(["Dunyodagi eng uzun tog‘ tizmasi mavjud bo‘lgan materikni toping.",["Afrika","Yevrosiyo","Avstraliya","Janubiy Amerika"],3]);
GEO_OCHIQ.push(["Balandligi 150 metr bo‘lgan evkalipt daraxtining tepasida turgan kuzatuvchi gorizontning qancha masofasini (ko‘rinish uzoqligini) ko‘ra olishi mumkin?",["38,6 km","47,3 km","54,6 km","74,9 km"],1]);
GEO_OCHIQ.push(["Quyidagi xaritada nechanchi raqamda Shirin shahridagi 13 mlrd kW·soat quvvatli Sirdaryo IESi joylashgan?",["11","10","9","7"],0,"gx9_v8"]);
GEO_OCHIQ.push(["Sekvoya o‘simligi uchun xususiyatlar to‘g‘ri berilgan qatorni aniqlang.",["Shimoliy Amerikaning aralash va keng bargli o‘rmonlar zonasida, Atlantika okeani sohillari bo‘ylab o‘sadi; balandligi 100 metrdan oshadi, tanasining diametri esa 9 metrgacha yetadi","Shimoliy Amerikaning mo‘tadil iqlim mintaqasidagi igna bargli o‘rmonlarida tarqalgan; balandligi 100 metrgacha yetadi, tanasining diametri esa 9 metrdan oshadi","Shimoliy Amerikaning Tinch okeani sohillaridagi aralash va keng bargli o‘rmonlar zonasida o‘sadi; balandligi 100 m dan oshadi, tanasining diametri esa 9 metrgacha yetadi","Shimoliy Amerikaning g‘arbiy qismidagi materik ichkari hududlarida o‘sadi; balandligi kamida 100 m bo‘lib, tanasining aylanasi 9 metrgacha yetadi"],2]);
GEO_OCHIQ.push(["Quyidagi daryolarga to‘g‘ri moslashtirilgan javobni toping.<br>1. Nil daryosi; 2. Kongo daryosi; 3. Amazonka daryosi; 4. Missisipi daryosi (Missuri bilan); 5. Zambezi daryosi.<br>a) 4 320 km; b) 2 660 km; c) 6 671 km; d) 6 992 km; e) 6 420 km.",["1-c, 2-e, 3-d, 4-a, 5-b","1-d, 2-a, 3-c, 4-e, 5-b","1-c, 2-a, 3-d, 4-e, 5-b","1-e, 2-a, 3-d, 4-c, 5-b"],2]);
GEO_OCHIQ.push(["Agar Yer yuzasida harorat +5 °C bo‘lsa, neytral qatlamdan 10 km chuqurlikda harorat necha gradusga teng bo‘ladi?",["+335 °C","+325 °C","+330 °C","+345 °C"],0]);
GEO_OCHIQ.push(["Quyidagi rasmdagi olim uchun to‘g‘ri berilgan javobni toping.",["Antarktidadagi Erebus vulqon cho‘qqisiga 1907-yilda yetib borgan.","Antarktidadagi Erebus vulqon cho‘qqisiga 1906-yilda yetib borgan.","Antarktidadagi Erebus vulqon cho‘qqisiga 1909-yilda yetib borgan.","Antarktidadagi Erebus vulqon cho‘qqisiga 1908-yilda yetib borgan."],3,"gx9_v12"]);
GEO_OCHIQ.push(["Transport turlarini ularning yuk tashish o‘rtacha masofasi (km) bilan to‘g‘ri moslashtirilgan variantni toping:<br>1. Avtomobil transporti; 2. Temiryo‘l transporti; 3. Quvur transporti; 4. Havo transporti.<br>a. 846 km; b. 5079 km; c. 55 km; d. 369 km.",["1-b, 2-d, 3-a, 4-c","1-c, 2-d, 3-a, 4-b","1-d, 2-c, 3-a, 4-b","1-c, 2-a, 3-d, 4-b"],1]);
GEO_OCHIQ.push(["Qiyin eriydigan va o‘tga chidamli qattiq qotishmalar kombinati quyidagi xaritada qaysi raqamdagi shaharda tarkib topgan?",["17","9","11","14"],3,"gx9_v14"]);
GEO_OCHIQ.push(["Hayvonlar, ularning tarqalgan hududlari va tegishli materik yoki daryo havzalarini to‘g‘ri moslashtiring.<br>1. Okapi; 2. Yovvoyi buqa, karkidonlar; 3. Kurka, anakonda, alligatorlar.<br>a) Yevrosiyo materigining ekvatorial o‘rmonlar zonasi; b) Shimoliy Amerika materigining fasliy musson o‘rmonlar zonasi; c) Kongo daryosi havzasi.",["1-b, 2-a, 3-c","1-c, 2-a, 3-b","1-c, 2-b, 3-a","1-a, 2-c, 3-b"],1]);
GEO_OCHIQ.push(["Quyidagi rasmdagi elektropoyezdlar bugungi kunda qaysi yo‘nalishlar bo‘yicha ham qatnamoqda?",["Toshkent–Nukus, Toshkent–Angren–Pop","Toshkent–Namangan, Toshkent–Andijon","Toshkent–Navoiy, Toshkent–Qarshi–Shahrisabz","Toshkent–Buxoro, Toshkent–Qarshi–Shahrisabz"],3,"gx9_v16"]);
GEO_OCHIQ.push(["Rasmda berilgan, Afrika materigining savannalarida yashaydigan hayvonlarning balandligi va og‘irligi qancha?",["balandligi 4 m, og‘irligi 12 t","balandligi 6 m, og‘irligi 8 t","balandligi 2 m, og‘irligi 12 t","balandligi 3 m, og‘irligi 8 t"],0,"gx9_v17"]);
GEO_OCHIQ.push(["Okean tubiga qarab exolotdan yuborilgan tovush to‘lqini 3 sekundda qaytib kelganligi ma’lum bo‘lsa, okean chuqurligini aniqlang.",["4500 metr","2250 metr","3000 metr","1500 metr"],1]);
GEO_OCHIQ.push(["Boltiq dengizi suvining o‘rtacha sho‘rligi 8 ‰ ga teng. Ushbu dengizdan olingan 1 tonna suvdan qancha tuz olish mumkin?",["80 gramm","800 gramm","8 kilogramm","80 kilogramm"],2]);
GEO_OCHIQ.push(["Quyidagi rasmda 1, 5 va 7 raqamlarda qaysi iqlim mintaqalari tasvirlangan?",["1 – subtropik, 5 – ekvatorial, 7 – tropik","1 – subekvatorial, 5 – subtropik, 7 – subtropik","1 – subtropik, 5 – tropik, 7 – subtropik","1 – subtropik, 5 – subekvatorial, 7 – subtropik"],3,"gx9_v20"]);
GEO_OCHIQ.push(["Sirdaryo dengiz sathidan 3850 metr balandlikdan boshlanib, 67 metr mutlaq balandlikda Orol dengiziga quyiladi. Agar daryoning umumiy uzunligi 3019 kilometrga teng bo‘lsa, daryoning nishabligini aniqlang.",["1,52","0,85","1,25","2,15"],2]);
GEO_OCHIQ.push(["Afrika materigining yozuvsiz xaritasida Nil va Kongo daryolari qaysi raqamlar bilan tasvirlangan?",["1 va 3","2 va 3","2 va 4","3 va 4"],1,"gx9_v22"]);
GEO_OCHIQ.push(["Toshkentda 10-apreldagi bir sutkalik kuzatish natijalari quyidagicha bo‘ldi: kechasi soat 1:00 da +4 °C, soat 4:00 da +2 °C, ertalab soat 7:00 da +5 °C, soat 10:00 da +9 °C, kunduzi soat 13:00 da +12 °C, soat 16:00 da +16 °C, kechqurun soat 19:00 da +10 °C, soat 22:00 da +6 °C. Ushbu ma’lumotlar asosida sutkalik o‘rtacha haroratni aniqlang.",["+6 °C","+8 °C","+10 °C","+12 °C"],1]);
GEO_OCHIQ.push(["Ma’lum bir xil masofada turli joylardagi atmosfera bosimi farqi quyidagicha berilgan:<br>a) 746 mm sim. ust. ←←← 760 mm sim. ust.;<br>b) 744 mm sim. ust. →→→ 742 mm sim. ust.;<br>c) 761 mm sim. ust. →→→ 759 mm sim. ust.<br>Ushbu holatlarning qaysi birida shamol kuchliroq esadi?",["b holda","c holda","a holda","barcha holatlarda shamol kuchi bir xil bo‘ladi"],2]);
GEO_OCHIQ.push(["Rasmda berilgan 1, 2, 3 va 4-raqamli ishlab chiqarish obyekti va jarayonlarini ularga tegishli tarixiy ma’lumotlar bilan to‘g‘ri moslashtirilgan javobni toping.<br>a) 1950-yillarda dastlabki ko‘mir qazib olingan;<br>b) 2018-yilda Surxondaryoda qurilib, foydalanishga topshirildi;<br>c) 1994-yilda O‘zbek-Isroil qo‘shma korxonasida yangi modeli yaratildi;<br>d) birinchi metallurgiya korxonasi sifatida 1946-yilda ishga tushirilgan.",["1-b, 2-a, 3-d, 4-c","1-b, 2-d, 3-a, 4-c","1-a, 2-b, 3-d, 4-c","1-c, 2-a, 3-d, 4-b"],0,"gx9_v25"]);
GEO_OCHIQ.push(["Geografik hisoblashlar va ularning formulalarini to‘g‘ri moslashtiring.<br>1. Kuzatuvchi ko‘ra olishi mumkin bo‘lgan ufq masofasi; 2. Daryoning nishabligi; 3. Daryo suv sarfi; 4. Daryo tarmoqlarining zichligi; 5. Havoning nisbiy namligi; 6. Namlik koeffitsiyenti; 7. Tarmoqning ixtisoslashuv koeffitsiyenti; 8. Aholi zichligi.",["1-b, 2-a, 3-d, 4-c, 5-g, 6-e, 7-h, 8-f","1-b, 2-d, 3-a, 4-c, 5-g, 6-e, 7-f, 8-h","1-a, 2-b, 3-d, 4-c, 5-e, 6-g, 7-h, 8-f","1-b, 2-a, 3-c, 4-d, 5-g, 6-e, 7-h, 8-f"],0,"gx9_v26"]);
GEO_OCHIQ.push(["Rossiyaning «Vostok» stansiyasida Yer yuzidagi eng sovuq harorat (−89,2 °C) qachon qayd etilgan?",["1965-yil 15-yanvar","1983-yil 21-iyul","1990-yil 1-avgust","1983-yil 21-iyun"],1]);
GEO_OCHIQ.push(["Janubiy Amerikaning subtropik iqlim mintaqasi uchun to‘g‘ri berilgan tavsifni toping.",["Mintaqaning g‘arbida namgarchilik ko‘p, yanvarda havo harorati +25 °C, iyulda +10...+15 °C atrofida.","Mintaqaning sharqida namgarchilik ko‘p, yanvarda havo harorati +25 °C, iyulda +10...+15 °C atrofida.","Yillik yog‘in 100 mm dan kam, harorat +40 °C dan yuqori bo‘ladi.","Yog‘in faqat qishda yog‘adi, yoz juda sovuq bo‘ladi."],1]);
GEO_OCHIQ.push(["O‘quvchi uyidan maktabga 120° azimut bilan bordi. Maktabdan uyiga nechanchi azimut bilan qaytadi?",["240°","60°","300°","180°"],2]);
GEO_OCHIQ.push(["Rangli metallar guruhlari va ularga tegishli metallarni to‘g‘ri moslashtiring.<br>1. Og‘ir metallar; 2. Yengil metallar; 3. Qimmatbaho metallar; 4. Qiyin eruvchi metallar; 5. Nodir metallar.<br>a) alyuminiy, magniy, titan; b) volfram, molibden; c) mis, qalay, qo‘rg‘oshin, nikel, rux; d) uran, germaniy; e) oltin, kumush, platina.",["1-c, 2-e, 3-a, 4-b, 5-d","1-c, 2-e, 3-a, 4-d, 5-b","1-a, 2-c, 3-e, 4-b, 5-d","1-c, 2-a, 3-e, 4-b, 5-d"],3]);

/* ===== 10-to‘plam ===== */
GEO_OCHIQ.push(["Rossiyaning «Vostok» stansiyasida Yer yuzidagi eng sovuq harorat (−89,2 °C) qachon qayd etilgan?",["1965-yil 15-yanvar","1983-yil 21-iyul","1990-yil 1-avgust","1983-yil 21-iyun"],1]);
GEO_OCHIQ.push(["Quyidagi javoblar ichidan Shimoliy Amerika materigi haqida bildirilgan to‘g‘ri fikrlarni toping.<br>1) eng baland harakatdagi vulqoni mavjud; 2) eng katta oroli bor; 3) eng issiq materik; 4) eng go‘zal va maftunkor sharsharasi bor.",["1, 4","1, 2, 3, 4","2, 4","2, 3, 4"],2]);
GEO_OCHIQ.push(["Dunyodagi eng baland va eng keng sharsharasi mavjud materikni toping.",["Shimoliy Amerika","Yevrosiyo","Janubiy Amerika","Avstraliya"],2]);
GEO_OCHIQ.push(["Yukon va Freyzer daryolari qaysi materikda joylashgan?",["Janubiy Amerikada","Shimoliy Amerikada","Yevrosiyoda","Afrikada"],1]);

/* ===== 11-to‘plam ===== */
GEO_OCHIQ.push(["Atlantika okeani iqlimining o‘ziga xos xususiyatlarini aniqlang.",["Okeanning shimoliy qismida suv yuzasining harorati yuqori +25...+28 °C, janubida esa ancha past.","Okean hamma iqlim mintaqalarida joylashgan, shuning uchun okean iqlimi juda xilma-xil. Okean yuzasidagi suvlar harorati +16,5 °C bo‘ladi.","Okean shimoldan janubga katta masofada cho‘zilganidan yuzadagi suv harorati −1 °C dan +29 °C gacha o‘zgaradi. Ekvatorial mintaqalarda suv yuzasining harorati yil davomida +28...+29 °C, Bering dengizida +2...+7 °C, janubiy yarimsharning o‘rta kengliklarida +12...+15 °C atrofida o‘zgaradi.","Okean suv yuzasida harorat yil bo‘yi past. Yillik o‘rtacha harorat −1...−2 °C dan oshmaydi. Atlantika okeani bilan tutash joylarda esa 0 °C atrofida."],1]);
GEO_OCHIQ.push(["Aholi punktida 1 yil mobaynida tug‘ilish 768 nafar, o‘lim 154 nafar bo‘lsa, shuningdek, unga ko‘chib kelganlar 28 nafarni, ko‘chib ketganlar 50 nafarni tashkil etsa, undagi aholi soni qanchaga ko‘payganligini aniqlang.",["500","614","592","692"],2]);
GEO_OCHIQ.push(["Quyidagi mahsulotlar orasidan qaysi biri Farg‘onada ishlab chiqarilmoqda?",["plastmassa quvurlar, polietilen plyonka","rezina quvurlar, rezina mahsulotlari","sun’iy charm va sun’iy jun","sun’iy tola va to‘qimalar"],3]);
GEO_OCHIQ.push(["Qaysi javobda botiqlar nomi berilgan?",["Nubiya, Kattara, Stenli","Tibesti, Darfur, Axaggar","Afar, Kattara, Kongo","Turfon, Axaggar, Tibesti"],2]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada 2, 3 va 5 raqamlari bilan qaysi yarimorollar belgilanganligini mos ravishda toping.",["Bolqon, Chukotka, Kichik Osiyo","Skandinaviya, Kamchatka, Malakka","Kalimantan, Kamchatka, Skandinaviya","Apennin, Hindixitoy, Hindiston"],2,"gx11_v5"]);
GEO_OCHIQ.push(["1957-yilda respublikamizning qaysi shahrida yangi superfosfat zavodi ishga tushdi?",["Navoiy","Olmaliq","Qo‘qon","Samarqand"],3]);
GEO_OCHIQ.push(["Ushbu diagrammada 2017-yilda O‘zbekistonning sanoat tarmoqlaridagi mahsulot ishlab chiqarish tarkibida yoqilg‘i va metallurgiya sanoatlarining salmog‘i qaysi raqamlar bilan belgilangan?",["6 va 5","5 va 6","6 va 4","4 va 6"],0,"gx11_v7"]);
GEO_OCHIQ.push(["Respublikamizda qaysi davlatning ISUZU korxonasi bilan birgalikda tashkil qilingan qo‘shma korxonada avtobuslar, yuk mashinalari ishlab chiqarilmoqda?",["Koreya","Germaniya","Yaponiya","Fransiya"],2]);
GEO_OCHIQ.push(["Yevrosiyo materigining yozuvsiz xaritasida 40° sh.k. chizig‘i qaysi geografik obyekt ustidan kesib o‘tmaganligini aniqlang.",["Pireney yarimoroli","Kichik Osiyo yarimoroli","Apennin yarimoroli","Kamchatka yarimoroli"],3,"gx11_v9"]);
GEO_OCHIQ.push(["Yerning sharsimon ekanligini qadimgi yunon olimi Aristotel miloddan avvalgi nechanchi asrda isbotlagan?",["mil. av. VI asrda","mil. av. IV asrda","mil. av. V asrda","mil. av. II asrda"],1]);
GEO_OCHIQ.push(["O‘zbekiston chekka hududlari rivojlanishini tezlashtirish maqsadida qaysi temiryo‘l liniyasi qurilgan?",["Nukus–Buxoro–Samarqand","Urganch–Navoiy–Samarqand–Toshkent","Buxoro–Qarshi–Guliston","Navoiy–Uchquduq–Nukus"],3]);
GEO_OCHIQ.push(["Yevrosiyo materigining geologik tuzilishiga xos bo‘lgan xususiyatlarni aniqlang.",["so‘nggi ming yil ichida Shimoliy Amerikadan 40 kilometr masofaga uzoqlashgan, shimoli-sharqiy qismida kuchli zilzilalar bo‘lib turadi","Yevrosiyo materigi bundan 65 mln yil muqaddam qadimgi Gondvana materigining parchalanishidan hosil bo‘lgan","chekka janubi-g‘arbida Afrika plitasi bilan to‘qnashgan chegarada burmali tog‘lar hosil bo‘lgan, seysmik hududlar nisbatan kam","Yevrosiyo materigi bundan 65 mln yil muqaddam qadimgi Lavraziya materigining parchalanishidan hosil bo‘lgan"],3]);
GEO_OCHIQ.push(["Janubiy Amerika materigiga xos bo‘lgan xususiyatlarni belgilang.<br>1) eng sernam materik; 2) eng quruq materik; 3) eng mitti odamxo‘r balig‘i bor; 4) berk havza maydoni jihatidan birinchi o‘rinda turadi; 5) eng balandda joylashgan materik; 6) eng balandda joylashgan chuchuk suvli katta ko‘li bor.",["2, 3, 5","1, 2, 4","1, 3, 6","2, 4, 6"],2]);
GEO_OCHIQ.push(["1771–1775-yillar davomida Hind okeanini o‘rganib, uning chuqurligini aniqlagan sayyoh-olimni toping.",["A. Tasman","Jak Iv Kusto","J. Kuk","Vasko da Gama"],2]);
GEO_OCHIQ.push(["Qaysi ko‘l qadimgi muz hosil qilgan chuqurliklarda paydo bo‘lgan?",["Marakaybo","Michigan","Baykal","Eyr"],1]);
GEO_OCHIQ.push(["Havo harorati +10 °C, havoning nisbiy namligi 40 % bo‘lsa, havoning mutlaq namligini aniqlang (10 °C haroratda 1 m³ havo o‘zida 9 g suv bug‘ini tutib tura oladi).",["3,9 g/m³","2,8 g/m³","5,1 g/m³","3,6 g/m³"],3]);
GEO_OCHIQ.push(["Jadvaldagi ma’lumotlardan foydalanib aniqlang: soat 01:00 da havoning mutlaq namligi qancha?",["3,7 g","3,5 g","2,9 g","4,1 g"],1,"gx11_v17"]);
GEO_OCHIQ.push(["Ushbu xaritada 3 va 4 raqamlari bilan Shimoliy Amerika materigining qaysi chekka nuqtalari belgilangan?",["Sent-Charlz burni va Mariato burni","Uels shahzodasi burni va Sent-Charlz burni","Barrou burni va Mariato burni","Merchison burni va Mariato burni"],3,"gx11_v18"]);
GEO_OCHIQ.push(["Qaysi okean marvarid va durlar yig‘ib olishda yetakchi hisoblanadi?",["Tinch","Shimoliy Muz","Atlantika","Hind"],3]);
GEO_OCHIQ.push(["Tinch okeaniga xos bo‘lgan asosiy xususiyatlardan birini belgilang.",["eng yirik oroli bor","orollari eng ko‘p","eng issiq ko‘rfazi bor","qirg‘oqsiz dengizi bor"],1]);
GEO_OCHIQ.push(["Quyidagi topografik xaritada A va B nuqtalar orasi joyda 5,2 km ga teng. Topografik xaritaning masshtabi 1:200 000 bo‘lsa, xaritadagi masofa necha cm ga tengligini aniqlang.",["2,6","3,2","2,9","3,5"],0,"gx11_v21"]);
GEO_OCHIQ.push(["Atmosferaning hozirgi tarkibida eng ko‘p qaysi kimyoviy element uchraydi?",["kislorod","vodorod","azot","uglerod"],2]);
GEO_OCHIQ.push(["Ko‘mir sanoatiga oid to‘g‘ri ma’lumotni aniqlang.",["ko‘mir ochiq usulda qazib olinishi oqibatida katta-katta yer maydonlarini kon chiqindilari band qilib, tutun va qurumdan qishloq xo‘jaligi jiddiy zarar ko‘rmoqda, ko‘mir sintetik tola va sintetik kauchuk, plastmassa ishlab chiqarish uchun xomashyo hisoblanadi","bu tarmoq ko‘p mablag‘ va ishchi kuchi talab etuvchi soha hisoblanib, ko‘mir tarkibida nodir va tarqoq elementlar hamda ko‘plab gilmoya uchraydi, bir yo‘la ulardan foydalanish esa konning samaradorligini yanada oshiradi","qazib chiqarilayotgan ko‘mirning asosiy iste’molchisi issiqlik elektr stansiyalari hisoblanadi, qattiq va suyuq yoqilg‘ilardan sun’iy ko‘mir, ko‘mirdan esa kimyoviy mahsulotlar ajratib olinmoqda","yoqilg‘i-energetika tarmoqlari orasida eng birinchi shakllangan tarmoq hisoblanadi, uning mahsulotlaridan elektr energetika, qora metallurgiya va kimyo sanoatlarida foydalaniladi, hozirgi kunda ko‘mirni qit’alararo eksport qilishga imkoniyat mavjud emas"],1]);
GEO_OCHIQ.push(["Tinch okeanida yashovchi eng yirik tridakna mollyuskalarining og‘irligi necha kg ga boradi?",["30 kg","35 kg","50 kg","55 kg"],0]);
GEO_OCHIQ.push(["Toshkentdan sharqroqda joylashgan shaharda sayohatchi quyosh chiqishini Toshkentdagidan 3 soat oldin kuzatgan. Shu shaharning geografik uzunligini aniqlang.",["104° sh.u.","114° sh.u.","124° sh.u.","134° sh.u."],1]);
GEO_OCHIQ.push(["Subekvatorial iqlim mintaqasining ekvatorial mintaqadan asosiy farqi qaysi javobda berilgan?",["yog‘in miqdorining nisbatan kamligi va haroratining biroz yuqoriligi","yog‘in miqdorining biroz ko‘pligi va uning asosiy qismi 3–4 oy davomida yog‘ib o‘tishi","yog‘in miqdorining nisbatan kamligi hamda yomg‘ir ta’siri 6 oy davom etishi","yog‘inlar miqdorining nisbatan kamligi va ularning fasllar bo‘yicha notekis taqsimlanganligi"],3]);
GEO_OCHIQ.push(["Asakadagi avtomobil zavodiga avtomobil o‘rindiqlari qaysi qo‘shma korxona tomonidan yetkaziladi?",["«Uz-Koram» qo‘shma korxonasi","«Uz-Dong Von» qo‘shma korxonasi","«Uz-Dong Yang» qo‘shma korxonasi","«Uz-Tong Xong KO» qo‘shma korxonasi"],3]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlardan moslashtirilgan javobni toping.<br>1) paleozoy; 2) kaynozoy; 3) mezozoy.<br>a) hozirgi yosh tog‘lar hosil bo‘lgan; b) tabiat zonalari paydo bo‘lgan (shakllangan); c) bahaybat dinozavrlar paydo bo‘lgan; d) hozirgi keksa tog‘lar hosil bo‘lgan.",["1 – a; 2 – b, d; 3 – c","1 – c; 2 – a; 3 – b","1 – d; 2 – a, b; 3 – c","1 – a; 2 – b; 3 – c"],2]);
GEO_OCHIQ.push(["Tog‘ etagida havo harorati +17 °C bo‘lsa, 4620 metr balandlikda havo harorati qanchaga teng bo‘ladi?",["−14,3 °C","−27 °C","−10,7 °C","−17,5 °C"],2]);
GEO_OCHIQ.push(["E nuqta ustida Quyosh tik tepaga keladigan sanani aniqlang.",["22-iyun","22-dekabr","21-mart","23-sentabr"],1,"gx11_v30"]);
GEO_OCHIQ.push(["Qayerda neft va gaz quduqlari uchun jihozlar ishlab chiqariladi?",["Toshkent","Samarqand","Farg‘ona","Namangan"],3]);
GEO_OCHIQ.push(["Respublikamizdagi «Gufik – Avitsenna» dori-darmon ishlab chiqaruvchi qo‘shma korxona qaysi davlat bilan hamkorlikda faoliyat ko‘rsatadi?",["Xitoy","Hindiston","Germaniya","AQSh"],1]);
GEO_OCHIQ.push(["Andijon viloyatining maydoni 4,2 ming km², 2017-yil holatiga ko‘ra aholisi esa 3 011,7 ming kishini tashkil etadi. Andijon viloyatining aholi zichligini aniqlang.",["513,15 kishi/km²","621,38 kishi/km²","717,07 kishi/km²","811,23 kishi/km²"],2]);
GEO_OCHIQ.push(["Bir yilda 20 mln kW·soat elektr energiya ishlab chiqaradigan elektr stansiyasi uchun qancha miqdorda toshko‘mir ketishini hisoblang.",["10 000 tonna","20 000 tonna","30 000 tonna","40 000 tonna"],0]);
GEO_OCHIQ.push(["Viloyat aholisining mamlakat aholisidagi ulushi 11 % ni tashkil etib, u mamlakatda ishlab chiqarilayotgan paxtaning 12 % ini beradigan bo‘lsa, viloyat paxta ishlab chiqarishga ixtisoslashgan yoki ixtisoslashmaganligini hisoblang.",["K = 0,91; ixtisoslashmagan","K = 1,09; ixtisoslashgan","K = 1,32; ixtisoslashgan","K = 1,02; ixtisoslashmagan"],1]);
GEO_YOZMA.push(["<b>Berilgan IESlarni quvvatiga qarab guruhlang.</b> Agar stansiya quvvati 1000 MW dan katta bo‘lsa 1 raqamini, 1000 MW dan kichik bo‘lsa 2 raqamini yozing.<br>a) Muborak IES<br>b) Navoiy IES",[["a) Muborak IES",/\b2\b/i],["b) Navoiy IES",/\b1\b/i]]]);
GEO_KALIT.push("a) 2; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Biologik (marjon) orol qaysi raqam bilan ko‘rsatilgan?<br>b) Geosinklinal orol qaysi raqam bilan ko‘rsatilgan?",[["a) Biologik (marjon) orol qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Geosinklinal orol qaysi raqam bilan ko‘rsatilgan?",/\b4\b/i]],"gx11_w37"]);
GEO_KALIT.push("a) 1; b) 4");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Hind okeaniga tegishli bo‘lgan hayvonlar qaysi harflarda to‘g‘ri berilgan? 1. A B C; 2. A B D; 3. A B E; 4. A C D.<br>b) Tinch okeanida yashovchi anchouslar qaysi harf bilan to‘g‘ri ko‘rsatilgan? 1. A; 2. E; 3. C; 4. D.",[["a) Hind okeaniga tegishli bo‘lgan hayvonlar qaysi harflarda to‘g‘ri berilgan? 1. A B C; 2. A B D; 3. A B E; 4. A C D.",/\b2\b/i],["b) Tinch okeanida yashovchi anchouslar qaysi harf bilan to‘g‘ri ko‘rsatilgan? 1. A; 2. E; 3. C; 4. D.",/\b3\b/i]],"gx11_w38"]);
GEO_KALIT.push("a) 2; b) 3");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Tarkibiga Yangi Gvineya, Bismark, Solomon orollari, Yangi Kaledoniya va Fiji kabi materik orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?<br>b) Tarkibiga Gavayi, Layn, Finiks, Samoa, Kuk va Taiti kabi vulqon hamda marjon orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",[["a) Tarkibiga Yangi Gvineya, Bismark, Solomon orollari, Yangi Kaledoniya va Fiji kabi materik orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i],["b) Tarkibiga Gavayi, Layn, Finiks, Samoa, Kuk va Taiti kabi vulqon hamda marjon orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",/\b3\b/i]],"gx11_w39"]);
GEO_KALIT.push("a) 2; b) 3");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Okean tubida litosfera plitalarining bir-biri bilan to‘qnashib, birining ikkinchisi ostiga cho‘kishi (subduksiya) natijasida hosil bo‘ladigan eng chuqur va tor tektonik yoriqlar – chuqur okean botig‘i (novi) qaysi raqam bilan ko‘rsatilgan?<br>b) Okean tubida litosfera plitalarining bir-biridan ajralishi (divergensiya) hamda mantiya magmasining yuqoriga ko‘tarilib sovishi natijasida vulqonli tog‘lar zanjirini hosil qiladigan suv osti tog‘ tizmalari qaysi raqam bilan ko‘rsatilgan?",[["a) Okean tubida litosfera plitalarining bir-biri bilan to‘qnashib, birining ikkinchisi ostiga cho‘kishi (subduksiya) natijasida hosil bo‘ladigan eng chuqur va tor tektonik yoriqlar – chuqur okean botig‘i (novi) qaysi raqam bilan ko‘rsatilgan?",/\b8\b/i],["b) Okean tubida litosfera plitalarining bir-biridan ajralishi (divergensiya) hamda mantiya magmasining yuqoriga ko‘tarilib sovishi natijasida vulqonli tog‘lar zanjirini hosil qiladigan suv osti tog‘ tizmalari qaysi raqam bilan ko‘rsatilgan?",/\b7\b/i]],"gx11_w40"]);
GEO_KALIT.push("a) 8; b) 7");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Okean yoki dengiz to‘lqinlarining qirg‘oq bo‘ylab harakati hamda qum to‘planishi (akkumulyatsiya) natijasida asosiy havzadan qum tili (damba) orqali deyarli to‘liq ajralib qolgan sayoz va yopiq havza – laguna qo‘ltig‘i qaysi raqam bilan ko‘rsatilgan?<br>b) Dengiz tekisliklaridagi daryo vodiylarining quyi qismini okean suvi bosishi (transgressiya) hamda daryo quyilish joyida dengiz to‘lqinlari va oqimlari ta’sirida yarim yopiq qum tillari hosil bo‘lishidan vujudga kelgan cho‘ziq shakldagi sayoz qo‘ltiq – liman qaysi raqam bilan ko‘rsatilgan?",[["a) Okean yoki dengiz to‘lqinlarining qirg‘oq bo‘ylab harakati hamda qum to‘planishi (akkumulyatsiya) natijasida asosiy havzadan qum tili (damba) orqali deyarli to‘liq ajralib qolgan sayoz va yopiq havza – laguna qo‘ltig‘i qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Dengiz tekisliklaridagi daryo vodiylarining quyi qismini okean suvi bosishi (transgressiya) hamda daryo quyilish joyida dengiz to‘lqinlari va oqimlari ta’sirida yarim yopiq qum tillari hosil bo‘lishidan vujudga kelgan cho‘ziq shakldagi sayoz qo‘ltiq – liman qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx11_w41"]);
GEO_KALIT.push("a) 1; b) 2");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Qaysi raqam bilan Atlantika okeaniga kiruvchi dengiz tasvirlangan?<br>b) Qaysi raqam bilan sho‘rligi 42 ‰ bo‘lgan dengiz tasvirlangan?",[["a) Qaysi raqam bilan Atlantika okeaniga kiruvchi dengiz tasvirlangan?",/\b2\b/i],["b) Qaysi raqam bilan sho‘rligi 42 ‰ bo‘lgan dengiz tasvirlangan?",/\b3\b/i]],"gx11_w42"]);
GEO_KALIT.push("a) 2; b) 3");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b> Matnni o‘qing va bu qaysi raqamdagi tabiat zonalariga tegishli ekanligini yozing.<br>a) Yomg‘irli davr 6 oy davom etadigan joylarda qizil-qo‘ng‘ir tuproqlar keng tarqalgan.<br>b) O‘simliklarning 25 000 turi, jumladan, daraxtlarning 1000 turi mavjud.",[["a) Yomg‘irli davr 6 oy davom etadigan joylarda qizil-qo‘ng‘ir tuproqlar keng tarqalgan.",/\b2\b/i],["b) O‘simliklarning 25 000 turi, jumladan, daraxtlarning 1000 turi mavjud.",/\b3\b/i]],"gx11_w43"]);
GEO_KALIT.push("a) 2; b) 3");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) 2017-yilda mamlakat iqtisodiyotini zamonaviy texnika va uskunalar bilan ta’minlashda eng muhim rol o‘ynagan, og‘ir sanoatning yetakchi bo‘g‘ini hisoblangan mashinasozlik va metallni qayta ishlash sanoati qaysi raqam bilan ko‘rsatilgan?<br>b) 2017-yilda respublika aholisining kundalik ehtiyoj mollari va kiyim-kechakka bo‘lgan talabini qondirishda yetakchi o‘rinda turgan, xomashyoni qayta ishlovchi yengil sanoat tarmog‘i qaysi raqam bilan ko‘rsatilgan?",[["a) 2017-yilda mamlakat iqtisodiyotini zamonaviy texnika va uskunalar bilan ta’minlashda eng muhim rol o‘ynagan, og‘ir sanoatning yetakchi bo‘g‘ini hisoblangan mashinasozlik va metallni qayta ishlash sanoati qaysi raqam bilan ko‘rsatilgan?",/\b3\b/i],["b) 2017-yilda respublika aholisining kundalik ehtiyoj mollari va kiyim-kechakka bo‘lgan talabini qondirishda yetakchi o‘rinda turgan, xomashyoni qayta ishlovchi yengil sanoat tarmog‘i qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx11_w44"]);
GEO_KALIT.push("a) 3; b) 2");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Navoiy viloyati qaysi raqam bilan ko‘rsatilgan?<br>b) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Farg‘ona viloyati qaysi raqam bilan ko‘rsatilgan?",[["a) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Navoiy viloyati qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i],["b) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Farg‘ona viloyati qaysi raqam bilan ko‘rsatilgan?",/\b14\b/i]],"gx11_w45"]);
GEO_KALIT.push("a) 2; b) 14");

/* ===== 12-to‘plam ===== */
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Uning hududida neft, gaz, oltingugurt, qalay, oltin, o‘tga chidamli gil, turli xil binokorlik materiallari, shifobaxsh suvlar topilgan. Konlarni ishga solish qulay. Rayon temiryo‘l, avtomobil va havo transporti bilan yetarli darajada ta’minlangan. Temiryo‘l rayon bo‘ylab halqa shaklida o‘tkazilgan».</i><br>Bu ma’lumotlar qaysi iqtisodiy rayon rivojlanishining asosiy omillari hisoblanadi?",["Toshkent","Zarafshon","Janubiy","Farg‘ona"],3]);
GEO_OCHIQ.push(["Kimyo sanoatiga oid to‘g‘ri ma’lumotni aniqlang.",["Energiya neft-gaz kimyosi uchun asosiy omil hisoblanmaydi.","Qora metallurgiya korxonalari chiqindisidan sulfat kislota olinadi.","Plastmassa va sintetik tola olish uchun organik sintez mahsulotlaridan foydalaniladi.","Tannarxi qimmat bo‘lgan tabiiy xomashyo o‘rnini arzon mahsulot – polimerlar egallay boshladi."],0]);
GEO_OCHIQ.push(["Tadqiqotchilar hayvon va o‘simliklarning tog‘ jinslaridagi toshqotgan qoldiqlarini o‘rganib, qaysi davrga tegishli ekanligini aniqlashdi. Bu tadqiqotchilar qaysi kasb egasi ekanligini aniqlang.",["Geolog","Arxeolog","Paleontolog","Seysmolog"],2]);
GEO_OCHIQ.push(["Yerning o‘z o‘qi atrofida aylanishida masofa hisobiga tezligi eng kichik bo‘lgan nuqtani aniqlang (javoblarda nuqtalarning geografik koordinatalari berilgan).",["15° j.k., 175° g‘.u.","75° sh.k., 10° g‘.u.","25° j.k., 25° sh.u.","10° sh.k., 65° sh.u."],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Texnika taraqqiyoti davrida mehnat unumdorligini oshirishda ishlab chiqarishning ushbu shaklidan foydalanildi. Biroq o‘tgan asrning o‘rtalarida vujudga kelgan ishlab chiqarishni tashkil etishning bu shakli endilikda ijtimoiy va ekologik muammolarning kuchayishiga sabab bo‘lmoqda».</i><br>Ushbu ma’lumotlar ishlab chiqarishning qaysi shakliga tegishli ekanligini toping.",["ishlab chiqarishning kombinat shakli","ishlab chiqarishning markazlashuvi","kooperativlashuv","ixtisoslashuv"],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Qizilqum markazida, Navoiy kon-metallurgiya kombinati yaqinida geologlar maxsus tadqiqot ishlari olib borishdi. Kombinatning janubi-sharqida joylashgan past tog‘ etagigacha qidiruv-razvedka ishlarini davom ettirishdi».</i><br>Geologlar qaysi tog‘ etagigacha borishganini aniqlang.",["Tomditov","Bo‘kantov","Quljuqtov","Ovminzatov"],0]);
GEO_OCHIQ.push(["Ijtimoiy-iqtisodiy ekologik muammo to‘g‘ri berilgan qatorni toping.",["Xorazmda yerosti suvlari yuza joylashganligi uchun yerto‘lalar, turli maqsadga mo‘ljallangan o‘ralar qurib bo‘lmaydi.","Foydali qazilma konlarini qazib olish jarayonida suvlarni kondan tashqariga chiqarib yuborish oqibatida yerosti suvlarining sathi keskin pasayib ketadi.","Farg‘ona vodiysidan esuvchi kuchli shamoldan tuproqning nami qochib, ekinlar qovjiraydi va hosildorlik pasayadi.","Orol dengizi tubining ochilib qolgan qismidan tuzlarni shamollar uchirib olib kelishi oqibatida Orolbo‘yi atrofidagi yerlarning sho‘rlanish darajasi ortib bormoqda."],1]);
GEO_OCHIQ.push(["Chizma-xaritada III raqam bilan belgilangan geografik obyektni aniqlang.",["Hisor tog‘i","Ko‘hitang tog‘i","Bobotog‘","Boysuntog‘"],2,"gx12_v8"]);
GEO_OCHIQ.push(["Avstraliyaning janubida joylashgan qaysi iqlim mintaqasida uchta iqlim tipi hosil bo‘lgan?",["tropik","subekvatorial","subtropik","ekvatorial"],2]);
GEO_OCHIQ.push(["140° g‘arbiy uzunlikda sana 2023-yil 31-dekabr, mahalliy vaqt 16:00 ga teng. Qaysi meridianda soat 10:00 bo‘lishini aniqlang.",["150° g‘arbiy uzunlik","130° g‘arbiy uzunlik","130° sharqiy uzunlik","150° sharqiy uzunlik"],2]);
GEO_OCHIQ.push(["140° g‘arbiy uzunlikda sana 2023-yil 31-dekabr, mahalliy vaqt 16:00 ga teng. Soat 10:00 bo‘lgan o‘sha meridiandagi sanani (kun, oy, yil) aniqlang.",["2023-yil 31-dekabr","2023-yil 30-dekabr","2023-yil 1-yanvar","2024-yil 1-yanvar"],3]);
GEO_OCHIQ.push(["Farg‘ona viloyatiga oid ma’lumotlarni toping. Viloyat mamlakatda yetishtirilayotgan qaysi mahsulotning 20 % ga yaqinini (eng yuqori ulushini) beradi?",["paxta tolasi","pilla (ipak qurti g‘umbagi)","g‘alla (bug‘doy)","kartoshka"],1]);
GEO_OCHIQ.push(["Farg‘ona viloyatiga oid ma’lumotlarni toping. Viloyatning qaysi shahrida (tumanida) asriy an’analarga ega mashhur kulolchilik buyumlari ishlab chiqariladi?",["Marg‘ilon","Qo‘qon","Rishton","Quvasoy"],2]);
GEO_OCHIQ.push(["Diagrammadagi ma’lumotlardan foydalanib topshiriqni bajaring. Tashqi savdo aylanmasining ko‘rsatkichi eng past bo‘lgan yilni aniqlang.",["2000-yil","2005-yil","2010-yil","2015-yil"],0,"gx12_v14"]);
GEO_OCHIQ.push(["Diagrammadagi ma’lumotlardan foydalanib topshiriqni bajaring. Tashqi savdo balansi eng yuqori (ijobiy) bo‘lgan yilni aniqlang.",["2000-yil","2005-yil","2010-yil","2015-yil"],3,"gx12_v15"]);
GEO_OCHIQ.push(["Shimoliy Amerikaning o‘rmon-dasht va dasht zonalarida yashaydigan hayvonlarni aniqlang.",["bizon, bo‘ri, tulki, kiyik, skuns (badbo‘y), opossum, oqboshli burgut","Virginiya bug‘usi, kalamush, puma, bobr (suv qunduzi), qizil olmaxon, yenot","alligator (timsohning bir turi), qora ilon, kurka","tog‘ qo‘yi, qizil ayiq, yaguar, puma, qor echkisi, kondor"],0]);
GEO_OCHIQ.push(["Chizma-xaritada VII raqam bilan belgilangan geografik obyektni aniqlang.",["Morguzar","Turkiston","Nurota","Zarafshon"],1,"gx12_v17"]);
GEO_OCHIQ.push(["Ushbu chizmada AB yo‘nalish g‘arbga (270°) yo‘nalgan bo‘lsa, AC yo‘nalish azimutini va ufqning qaysi tomoniga mos kelishini aniqlang (burchak 65°).",["205°; J-J-G‘","335°; Sh-Sh-G‘","115°; J-J-Shq","315°; Sh-Shq-Shq"],1,"gx12_v18"]);
GEO_OCHIQ.push(["AC yo‘nalishdan (335° azimutdan) ufqning sharq tomoniga (90° azimutga) soat mili yo‘nalishi bo‘yicha borish uchun necha gradus azimutga burilish kerak bo‘ladi?",["115°","125°","65°","155°"],0,"gx12_v19"]);
GEO_OCHIQ.push(["Samolyot VIII soat mintaqasida joylashgan shahardan II soat mintaqasida joylashgan shaharga soat 22:00 da uchdi va 21:00 da qo‘ndi. Samolyot uchgan vaqtda II soat mintaqasida soat necha bo‘lgan?",["16:00","04:00","18:00","20:00"],0]);
GEO_OCHIQ.push(["Samolyot VIII soat mintaqasida joylashgan shahardan soat 22:00 da uchib, II soat mintaqasiga o‘sha kunning o‘zida soat 21:00 da qo‘ndi. Samolyot qancha vaqt parvoz qilgan?",["1 soat","5 soat","6 soat","7 soat"],1]);
GEO_OCHIQ.push(["Jizzax viloyatiga oid ma’lumotlarni toping. Qaysi kondan polimetall rudasi qazib olinadi?",["Qo‘rg‘oshinkon","Uchquloch","Marjonbuloq","Qo‘ytosh"],1]);
GEO_OCHIQ.push(["Jizzax viloyatiga oid ma’lumotlarni toping. Qaysi shaharda tog‘-kon sanoati rivojlangan?",["Zafarobod","Dashtobod","Qo‘ytosh","Gagarin"],2]);
GEO_OCHIQ.push(["Mashinasozlik sanoatiga oid to‘g‘ri ma’lumotni aniqlang.",["Arzon ishchi kuchidan foydalanish imkoniyati mavjudligi sababli bu soha korxonalari sekin-asta rivojlanayotgan mamlakatlarga ko‘chib o‘tmoqda.","Mashinasozlik sanoati ko‘p mehnat talab qiluvchi tarmoq bo‘lganligi sababli, ayni vaqtda arzon ishchi kuchiga boy rivojlanayotgan mamlakatlarda tez sur’atlar bilan rivojlanmoqda.","Rivojlangan davlatlarda moliyaviy, fan-texnika imkoniyatlarining yuqoriligi sababli mashinasozlik sanoatining yirik ishlab chiqarish korxonalari aynan shu davlatlar hududida joylashgan.","Bu tarmoq ko‘p mablag‘ va ishchi kuchi talab etuvchi soha hisoblanib, uning mahsulotlaridan elektr energetika, qora metallurgiya va kimyo sanoatlarida foydalaniladi."],2]);
GEO_OCHIQ.push(["Chizma-xaritada 1 raqami bilan belgilangan geografik obyektni aniqlang.",["Bo‘kantov","Quljuqtov","Tomditov","Ovminzatov"],0,"gx12_v25"]);
GEO_OCHIQ.push(["Yarimsharlar yozuvsiz xaritasidan foydalanib topshiriqni bajaring. Yerning aylanish tezligi masofa hisobida qaysi nuqtada eng katta ekanligini aniqlang.",["A nuqtada","F nuqtada","G nuqtada","E nuqtada"],1,"gx12_v26"]);
GEO_OCHIQ.push(["Yarimsharlar yozuvsiz xaritasidan foydalanib topshiriqni bajaring. A va G nuqtalardan B nuqtadagi shaharga bir xil tezlikda samolyotlar uchdi. Qaysi samolyot oldinroq qo‘nadi? (Hisoblashda 1° meridian yoyi 111 km ga, 60° parallel yoyi 56 km ga teng deb qabul qilinsin.)",["A nuqtadan uchgan samolyot","G nuqtadan uchgan samolyot","ikkala samolyot bir vaqtda qo‘nadi","samolyotlar B nuqtaga yetib bora olmaydi"],1,"gx12_v27"]);
GEO_OCHIQ.push(["Dunyoning yozuvsiz xaritasidan foydalanib aniqlang: A nuqtada joylashgan davlat B nuqtada joylashgan orol davlatdan necha soat keyin yangi yilni kutib oladi?",["6 soat keyin","8 soat keyin","9 soat keyin","10 soat keyin"],1,"gx12_v28"]);
GEO_OCHIQ.push(["Dunyoning yozuvsiz xaritasidan foydalanib aniqlang: samolyot C nuqtadan mahalliy vaqt bilan 1-iyun kuni soat 23:00 da uchib, 4 soatdan keyin D nuqtaga qo‘ndi. Qo‘ngandagi mahalliy vaqt va sanani aniqlang.",["2-iyun, soat 03:00","1-iyun, soat 19:00","2-iyun, soat 00:00","1-iyun, soat 23:00"],0,"gx12_v29"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlardan foydalanib aniqlang: 2015-yilda (jami aholi 2 860 000 kishi) mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘paygan?",["25 740 kishi","5 720 kishi","34 320 kishi","14 300 kishi"],0,"gx12_v30"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida tabiiy va mexanik o‘sish hisobiga aholi soni ko‘payishining eng past ko‘rsatkichi qaysi yilda qayd etilganini aniqlang.",["1995-yilda","2000-yilda","2005-yilda","2015-yilda"],1,"gx12_v31"]);
GEO_OCHIQ.push(["Estuariy – bu ...",["Shimoliy Amerika chalacho‘l va cho‘l zonalarida uchraydigan daraxtsimon doimiy yashil o‘simlik.","Bir-biridan unchalik uzoq bo‘lmagan va odatda bir butun deb hisoblanadigan orollar to‘dasi.","Avliyo Lavrentiy daryosi quyi oqimida hosil bo‘lgan, daryoning suv bosgan quyi qismi.","Shimoliy Muz okeanidagi qalashib ketgan muzlar."],2]);
GEO_OCHIQ.push(["Toshkent–Qo‘qon avtomobil yo‘li ustida joylashgan shaharni belgilang.",["Navbahor","Uchqo‘rg‘on","Chust","Oqtosh"],2]);
GEO_OCHIQ.push(["Grafikdan foydalanib yillik harorat amplitudasini aniqlang.",["25 °C","30 °C","35 °C","40 °C"],3,"gx12_v34"]);
GEO_OCHIQ.push(["Diagrammadan foydalanib yillik yog‘in miqdorining necha foizi qish mavsumiga to‘g‘ri kelishini aniqlang.",["22,16 %","36,25 %","42,50 %","15,30 %"],0,"gx12_v35"]);
GEO_YOZMA.push(["<b>O‘zbekiston Respublikasining eng zich joylashgan hududlaridan biri bo‘lgan Andijon viloyati 14 ta ma’muriy tuman hamda o‘ziga xos shahar va shaharchalar tizimidan iborat.</b><br>a) Andijon viloyati tarkibidagi jami shaharlar soni nechta?<br>b) Viloyat tarkibidagi jami shaharchalar (shahar tipidagi posyolkalar) soni nechta?",[["a) Andijon viloyati tarkibidagi jami shaharlar soni nechta?",/\b11\b/i],["b) Viloyat tarkibidagi jami shaharchalar (shahar tipidagi posyolkalar) soni nechta?",/\b79\b/i]]]);
GEO_KALIT.push("a) 11; b) 79");
GEO_YOZMA.push(["<b>Rasmda dengiz qirg‘oq turlarining turli ko‘rinishlari aks etgan hamda ular raqamlar bilan belgilangan.</b><br>a) Qadimiy muzliklar tomonidan chuqurlashtirilgan tog‘ vodiylarini keyinchalik dengiz suvi bosishi natijasida vujudga kelgan, qirg‘oqlari nihoyatda tik, baland va qoyali bo‘lgan, quruqlik ichkarisiga chuqur kirib borgan tor qo‘ltiq – fyord qaysi raqam bilan ko‘rsatilgan?<br>b) Dengiz tekisliklaridagi daryo vodiylarining quyi qismini okean suvi bosishi (transgressiya) hamda daryo quyilish joyida dengiz to‘lqinlari va oqimlari ta’sirida yarim yopiq qum tillari hosil bo‘lishidan vujudga kelgan cho‘ziq shakldagi sayoz qo‘ltiq – liman qaysi raqam bilan ko‘rsatilgan?",[["a) Qadimiy muzliklar tomonidan chuqurlashtirilgan tog‘ vodiylarini keyinchalik dengiz suvi bosishi natijasida vujudga kelgan, qirg‘oqlari nihoyatda tik, baland va qoyali bo‘lgan, quruqlik ichkarisiga chuqur kirib borgan tor qo‘ltiq – fyord qaysi raqam bilan ko‘rsatilgan?",/\b3\b/i],["b) Dengiz tekisliklaridagi daryo vodiylarining quyi qismini okean suvi bosishi (transgressiya) hamda daryo quyilish joyida dengiz to‘lqinlari va oqimlari ta’sirida yarim yopiq qum tillari hosil bo‘lishidan vujudga kelgan cho‘ziq shakldagi sayoz qo‘ltiq – liman qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx12_w37"]);
GEO_KALIT.push("a) 3; b) 2");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) XV asr oxirida Shimoliy Amerika qirg‘oqlariga yetib kelib, Nyufaundlend orolini va Labrador yarimorolini kashf qilgan sayyoh qaysi raqam bilan ko‘rsatilgan?<br>b) Angliyalik taniqli dengizchi va sayyoh, XVII asrda materikning shimoliy va sharqiy qismlarini hamda keyinchalik o‘z nomi bilan atalgan yirik qo‘ltiqni o‘rgangan tadqiqotchi qaysi raqam bilan ko‘rsatilgan?",[["a) XV asr oxirida Shimoliy Amerika qirg‘oqlariga yetib kelib, Nyufaundlend orolini va Labrador yarimorolini kashf qilgan sayyoh qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Angliyalik taniqli dengizchi va sayyoh, XVII asrda materikning shimoliy va sharqiy qismlarini hamda keyinchalik o‘z nomi bilan atalgan yirik qo‘ltiqni o‘rgangan tadqiqotchi qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx12_w38"]);
GEO_KALIT.push("a) 1; b) 2");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Quyidagi tavsif qaysi raqamga tegishli? «Tinch okean sohillariga Peru sovuq oqimi yog‘in keltirmaydi va deyarli yog‘in yog‘maydi. Natijada shudring Afrikadagi Namib cho‘li kabi Atakama cho‘li namligining yagona manbai hisoblanadi. Atakama cho‘li ustida yillab bir tomchi ham yomg‘ir yog‘masligi mumkin.»<br>b) Quyidagi tavsif qaysi raqamga tegishli? «Yil davomida 2 000–3 000 mm gacha yog‘in yog‘adi. Qishda nisbatan iliq, havo harorati +4...+6 °C, yozi salqin keladi. Yozda tez-tez yomg‘ir yog‘ib turadi. Havo harorati +8...+10 °C. Yog‘in miqdori yiliga 2 000 mm dan oshadi.»",[["a) Quyidagi tavsif qaysi raqamga tegishli? «Tinch okean sohillariga Peru sovuq oqimi yog‘in keltirmaydi va deyarli yog‘in yog‘maydi. Natijada shudring Afrikadagi Namib cho‘li kabi Atakama cho‘li namligining yagona manbai hisoblanadi. Atakama cho‘li ustida yillab bir tomchi ham yomg‘ir yog‘masligi mumkin.»",/\b3\b/i],["b) Quyidagi tavsif qaysi raqamga tegishli? «Yil davomida 2 000–3 000 mm gacha yog‘in yog‘adi. Qishda nisbatan iliq, havo harorati +4...+6 °C, yozi salqin keladi. Yozda tez-tez yomg‘ir yog‘ib turadi. Havo harorati +8...+10 °C. Yog‘in miqdori yiliga 2 000 mm dan oshadi.»",/\b1\b/i]],"gx12_w39"]);
GEO_KALIT.push("a) 3; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) 2017-yilda qishloq xo‘jaligi mahsulotlarini qayta ishlash hamda aholining oziq-ovqat mahsulotlariga bo‘lgan kundalik talabini qondirishga xizmat qilgan oziq-ovqat sanoati qaysi raqam bilan ko‘rsatilgan?<br>b) Turli mineral o‘g‘itlar, plastmassalar, sun’iy tolalar va kimyoviy vositalar ishlab chiqarib, iqtisodiyotning boshqa tarmoqlarini zamonaviy materiallar bilan ta’minlaydigan kimyo sanoati qaysi raqam bilan ko‘rsatilgan?",[["a) 2017-yilda qishloq xo‘jaligi mahsulotlarini qayta ishlash hamda aholining oziq-ovqat mahsulotlariga bo‘lgan kundalik talabini qondirishga xizmat qilgan oziq-ovqat sanoati qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Turli mineral o‘g‘itlar, plastmassalar, sun’iy tolalar va kimyoviy vositalar ishlab chiqarib, iqtisodiyotning boshqa tarmoqlarini zamonaviy materiallar bilan ta’minlaydigan kimyo sanoati qaysi raqam bilan ko‘rsatilgan?",/\b4\b/i]],"gx12_w40"]);
GEO_KALIT.push("a) 1; b) 4");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Farg‘ona viloyati qaysi raqam bilan ko‘rsatilgan?<br>b) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Andijon viloyati qaysi raqam bilan ko‘rsatilgan?",[["a) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Farg‘ona viloyati qaysi raqam bilan ko‘rsatilgan?",/\b14\b/i],["b) 2017-yilgi yalpi ichki mahsulot hajmi bo‘yicha Andijon viloyati qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i]],"gx12_w41"]);
GEO_KALIT.push("a) 14; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Quyida sanab o‘tilgan hayvonlar xaritadagi qaysi raqamga tegishli? «Antilopalar, zebra, jirafa, fil, buyvol, karkidon, begemot, pavian, sher, qoplon, sirtlon, chiyabo‘ri, gepard, Nil timsohi, nektarxo‘r, kotib qush, Afrika tuyaqushi, marabu, mirzaqush.»<br>b) Quyida sanab o‘tilgan hayvonlar xaritadagi qaysi raqamga tegishli? «Antilopalar, kaltakesak, toshbaqa, ilonlar, gienalar (chipor sirtlon), chiyabo‘rilar, tulkilar.»",[["a) Quyida sanab o‘tilgan hayvonlar xaritadagi qaysi raqamga tegishli? «Antilopalar, zebra, jirafa, fil, buyvol, karkidon, begemot, pavian, sher, qoplon, sirtlon, chiyabo‘ri, gepard, Nil timsohi, nektarxo‘r, kotib qush, Afrika tuyaqushi, marabu, mirzaqush.»",/\b2\b/i],["b) Quyida sanab o‘tilgan hayvonlar xaritadagi qaysi raqamga tegishli? «Antilopalar, kaltakesak, toshbaqa, ilonlar, gienalar (chipor sirtlon), chiyabo‘rilar, tulkilar.»",/\b1\b/i]],"gx12_w42"]);
GEO_KALIT.push("a) 2; b) 1");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Okean suvi ostida quruqlikning qirg‘oq yaqinidagi davomi hisoblangan, chuqurligi odatda 200 metrgacha bo‘lgan eng chekka sayoz qismi – shelf qaysi raqam bilan ko‘rsatilgan?<br>b) Okean tubining materik chekkasidan boshlanib, keskin pasayib boruvchi va okean tubi tekisligiga o‘tiladigan qiyalik qismi – materik yonbag‘ri qaysi raqam bilan ko‘rsatilgan?",[["a) Okean suvi ostida quruqlikning qirg‘oq yaqinidagi davomi hisoblangan, chuqurligi odatda 200 metrgacha bo‘lgan eng chekka sayoz qismi – shelf qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Okean tubining materik chekkasidan boshlanib, keskin pasayib boruvchi va okean tubi tekisligiga o‘tiladigan qiyalik qismi – materik yonbag‘ri qaysi raqam bilan ko‘rsatilgan?",/\b5\b/i]],"gx12_w43"]);
GEO_KALIT.push("a) 1; b) 5");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Kokos litosfera plitasi qaysi raqam bilan ko‘rsatilgan?<br>b) Skosha litosfera plitasi qaysi raqam bilan ko‘rsatilgan?",[["a) Kokos litosfera plitasi qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i],["b) Skosha litosfera plitasi qaysi raqam bilan ko‘rsatilgan?",/\b4\b/i]],"gx12_w44"]);
GEO_KALIT.push("a) 2; b) 4");
GEO_YOZMA.push(["<b>Rasmdan foydalanib savollarga javob yozing.</b><br>a) Yunoncha «kichik orollar» ma’nosini bildiruvchi hamda tarkibiga Vulkano, Bonin, Karolina, Marshall, Gilbert, Ellis arxipelaglari, Nauru va Oshen orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?<br>b) Yunoncha «qora orollar» ma’nosini bildiruvchi hamda tarkibiga Yangi Gvineya, Bismark, Luiziada arxipelaglari, Solomon orollari, Santa-Krus, Yangi Gebrid orollari, Yangi Kaledoniya va Fiji kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",[["a) Yunoncha «kichik orollar» ma’nosini bildiruvchi hamda tarkibiga Vulkano, Bonin, Karolina, Marshall, Gilbert, Ellis arxipelaglari, Nauru va Oshen orollari kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",/\b1\b/i],["b) Yunoncha «qora orollar» ma’nosini bildiruvchi hamda tarkibiga Yangi Gvineya, Bismark, Luiziada arxipelaglari, Solomon orollari, Santa-Krus, Yangi Gebrid orollari, Yangi Kaledoniya va Fiji kiradigan hudud qaysi raqam bilan ko‘rsatilgan?",/\b2\b/i]],"gx12_w45"]);
GEO_KALIT.push("a) 1; b) 2");

/* ===== 13-to‘plam ===== */
GEO_OCHIQ.push(["Qaysi erada Qozog‘iston past tog‘larining g‘arbiy qismi va Shimoliy Tyanshan tog‘lari ko‘tarilgan?",["paleozoy erasining I yarmida","paleozoy erasining II yarmida","mezozoy","kaynozoy"],0]);
GEO_OCHIQ.push(["Berilgan demografik ko‘rsatkichlar asosida ushbu mamlakat aholisi yil oxirida jami qancha kishi bo‘lganini aniqlang.",["55 944 000 kishi","56 000 000 kishi","56 056 000 kishi","56 112 000 kishi"],2,"gx13_v2"]);
GEO_OCHIQ.push(["Tabiiy geografik okrug yaqin davrgacha seysmik jihatdan tinch hisoblanar edi. Lekin okrugda so‘nggi yillarda 8–10 balli zilzilalar bo‘lib turishi bu hududning ham seysmik rayonga kiritilishiga asos bo‘ldi. Bu qaysi okrug ekanligini toping.",["O‘rta Zarafshon","Qizilqum","Chirchiq-Ohangaron","Quyi Zarafshon"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Okrug keskin kontinental iqlim xususiyatiga ega bo‘lib, qishi quruq va sovuq, yozi issiq va quruq, sovuq bo‘lmaydigan kunlar O‘zbekiston bo‘yicha eng qisqa, tabiiy geografik okrugda doimiy oqar suvlar yo‘q. O‘simligi, asosan, shuvoq va sho‘radan iborat».</i><br>Matndagi ma’lumotlar qaysi tabiiy geografik okrugga oid ekanligini aniqlang.",["Quyi Amudaryo","Ustyurt","Qizilqum","Quyi Zarafshon"],1]);
GEO_OCHIQ.push(["Yevropaning boshqa subregionlarga nisbatan suv resurslari bilan ta’minlanish darajasi pastroq bo‘lib, ayrim hududlarda suv tanqisligi sezilayotgan subregionni toping.",["G‘arbiy Yevropa","Sharqiy Yevropa","Janubiy Yevropa","Shimoliy Yevropa"],2]);
GEO_OCHIQ.push(["G‘arbiy Afrika subregioniga oid ma’lumotlar berilgan javobni aniqlang.",["Ko‘p asrlik tarixga egaligi sababli mintaqa davlatlari iqtisodiyoti uchun an’anaviy hisoblangan sug‘orma dehqonchilik, ko‘chmanchi chorvachilik, hunarmandchilik kabi tarmoqlar o‘ziga xos an’analarga egaligi bilan ajralib turadi.","Subregionning zamonaviy qiyofasini, birinchi navbatda, bu yerda qadimdan rivojlanib kelgan qishloq xo‘jaligiga ixtisoslashuv belgilaydi. Plantatsiya xo‘jaligining rivojlanishi bo‘yicha katta tajribaga ega bo‘lgan subregion davlatlari, asosan, texnik ekinlar yetishtirishga ixtisoslashgan.","Boshqa subregionlardan farqli ravishda bu mintaqa mineral resurslarga nisbatan kambag‘al ekanligi bilan ajralib turadi. Asosan, tropik qishloq xo‘jaligi rivojlangan bo‘lib, jahon bozoriga kofe, choy, kokos palmasi mahsulotlari, turli ziravorlar olib chiqadi.","Hududining katta qismi subtropik mintaqaga to‘g‘ri kelganligi davlatlarning paxta, zaytun, uzum, sitrus mevalar yetishtirishga ixtisoslashishiga sabab bo‘lgan. Bu yerda dengiz transporti ahamiyatli hisoblanadi."],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Sanoatining yetakchi tarmoqlari rangli metallurgiya, tog‘-kon, kimyo, qurilish materiallari va yengil sanoatdir. Elektr energetikasi GESlarga tayanadi. Yengil sanoat tarmoqlari orasida to‘qimachilik sanoati alohida ahamiyat kasb etadi. Chuchuk suv bilan eng yaxshi ta’minlangan davlatlar qatoriga kiradi».</i><br>Matndagi ma’lumotlar qaysi davlatga oid ekanligini aniqlang.",["Qirg‘iziston","Qozog‘iston","Turkmaniston","Tojikiston"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Rivojlanish xususiyatiga ko‘ra «ko‘chirilgan kapitalizm» davlati hisoblangan ushbu davlat hududida mineral resurslardan oltin, kumush, tabiiy neft, ko‘mir, turli rangli metallar tarqalgan. Rasmiy tili ingliz tili hisoblanib, tub joy aholisi jami aholining 15 % ini tashkil etadi».</i><br>Matndagi ma’lumotlar qaysi davlatga oid ekanligini aniqlang.",["JAR","Yangi Zelandiya","Avstraliya","Isroil"],1]);
GEO_OCHIQ.push(["Koreya Respublikasiga oid ma’lumotni toping.",["Iqlimi, asosan, subtropik bo‘lib, musson shamollari ta’sirida shakllanadi.","Kemasozlik va baliq ovlash hajmi bo‘yicha birinchi o‘rinni egallaydi.","Polimer mahsulotlarini ishlab chiqarish bo‘yicha jahonning birinchi beshtaligiga kiradi.","Suyultirilgan gaz ishlab chiqarishda yetakchilik qiladi."],2]);
GEO_OCHIQ.push(["Din mazhabi to‘g‘ri berilgan javobni toping.",["Animizm","Sintoizm","Lamaizm","Totemizm"],2]);
GEO_OCHIQ.push(["Quyida berilgan xaritada 1 raqami bilan O‘rta Osiyoning qaysi tabiiy geografik kichik o‘lkasi ko‘rsatilgan?",["Shimoliy Tyanshan","Markaziy Tyanshan","Janubiy Tyanshan","G‘arbiy Tyanshan"],0,"gx13_v11"]);
GEO_OCHIQ.push(["Kim tomonidan yer po‘stining rivojlanish nazariyasi ishlab chiqildi?",["V. V. Dokuchayev","Ch. Layel","A. A. Grigoryev","V. A. Vernadskiy"],1]);
GEO_OCHIQ.push(["Pushta – bu ...",["And tog‘idagi baland tog‘ o‘tloqlari","tabiiy sharoiti qattiq, yog‘in kam yog‘adigan o‘lka","Karpat tog‘idagi pasttekisliklarda ahyon-ahyonda uchraydigan dashtlar","Buyuk tekisliklardagi dashtlar"],2]);
GEO_OCHIQ.push(["Yevrosiyoning qaysi tog‘liklaridagi iqlim baland tog‘ iqlimi bo‘lib, yozining iliqligi, qishining qattiq sovuqligi va atmosfera yog‘inlarining juda kam yog‘ishi bilan boshqa joylardan farq qiladi?",["Tibet, Pomir","Tyanshan, Himolay","Karpat, Kavkaz","Kunlun, Hindukush"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Hozirgi paytda Janubiy Amerikada insoniyatning har uchala irq vakillari, ya’ni yevropaliklar, hindular, negrlar chatishishidan hosil bo‘lgan avlodlar yashaydi. Aholining ko‘pchiligi ispan tilida, braziliyaliklar portugal tilida so‘zlashadi. Materik aholisi orasida tillar, urf-odatlarning aralashib ketishi ro‘y berdi».</i><br>Janubiy Amerikadagi bu jarayon qaysi global muammoga xosligini toping.",["demografik inqiroz","millatlararo va dinlararo munosabatlar muammosi","ijtimoiy-iqtisodiy qoloqlik va qashshoqlik muammosi","ma’naviy qadriyatlar inqirozi muammosi"],1]);
GEO_OCHIQ.push(["Mezozoy erasi o‘rtalariga kelib O‘rta Osiyo o‘lkasida qanday iqlimiy o‘zgarishlar sodir bo‘lgan?",["iqlim nam va issiq bo‘lgan, xilma-xil o‘simliklar o‘sgan","iqlim juda quruq bo‘lgan, o‘rmonlar yo‘qolib ketgan","dengiz chekina boshlagan, quruqlik maydoni kengaygan","dengiz qayta bostirib kelgan, tog‘lar yemirilib, pasayib qolgan"],2]);
GEO_OCHIQ.push(["O‘rta Osiyoning shimoli-g‘arbiy chegarasi Emba daryosining quyilish joyidan janubroqdan boshlanib, Ustyurt platosining shimoliy chinklari bo‘ylab o‘tadi va Mug‘ojar tog‘larining janubiy etaklarigacha boradi. Bu chegara qaysi platformalar chegarasiga to‘g‘ri keladi?",["Sibir va To‘rg‘ay","Hindiston va Sharqiy Yevropa","Turon va G‘arbiy Sibir","Sharqiy Yevropa va Turon"],3]);
GEO_OCHIQ.push(["Ko‘hitang tog‘ining sharqiy yonbag‘ridan boshlanuvchi Sherobod daryosi Sherobod shahridan quyida nima deb yuritiladi?",["Irg‘oyli","Qorasuvdaryo","Qoratog‘","Qizilsoy"],1]);
GEO_OCHIQ.push(["Qashqadaryo tabiiy geografik okrugining iqlimiga oid ma’lumotni toping.",["Tabiiy geografik okrugning yozi issiq, quruq va davomli, qishi nisbatan iliq. Okrug shimol va sharq tomondan tog‘lar bilan o‘ralgan. Bu esa Arktika va Sibirdan keladigan sovuq havo massalarining yo‘lini to‘sadi. Aksincha, g‘arbiy qismi ochiq bo‘lib, mo‘tadil dengiz va subtropik havo massalarining to‘siqsiz kirib kelishiga imkon beradi.","Okrug iqlimi O‘zbekiston tekislik qismidagiga o‘xshash bo‘lib, qishi sovuq, yozi issiq va quruq, yog‘in kam. Okrug janubda joylashganligidan hamda shimol, shimoli-sharqdan tog‘lar bilan o‘ralganligidan qishda havo haddan tashqari sovib ketmaydi.","Okrugning tekislikdan iborat ekanligi va janubida tog‘ tizmalarining mavjudligi natijasida iqlimi o‘ziga xosdir. Qishda Arktika va Sibir sovuq havo massalari bemalol to‘siqsiz tekislikka kirib keladi. Bu sovuq havo massalari okrug janubidagi tog‘lardan o‘ta olmay, tekislik qismida to‘planadi.","Okrug qisqa va beqaror qish bilan, quruq, seroftob, jazirama yoz bilan tavsiflanadi. Qishda okrug hududiga shimoldan sovuq, quruq shamollarning esishi tufayli hamma qismida yanvarning o‘rtacha harorati 0 °C dan past bo‘ladi."],0]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Tadqiqotchilar mamlakatimizdagi milliy bog‘ hududida tarqalgan «Qizil kitob»ga kiritilgan o‘simliklarning milliy bog‘ g‘arbida joylashgan tog‘da ham mavjudligini tekshirib ko‘rishdi. Bu tog‘ning shimoli-g‘arbiy yonbag‘irlari yotiq va keng, janubi-sharqiy yonbag‘irlari tik va qisqa edi».</i><br>Matndagi ma’lumotlar qaysi tog‘ga tegishli ekanligini aniqlang.",["Turkiston","Qurama","Ugom","Chotqol"],2]);
GEO_OCHIQ.push(["Zarafshon iqtisodiy rayoniga oid ma’lumotlar berilgan javobni toping.",["Rayonda yirik IES, neftni qayta ishlash korxonasi, rangli metallurgiya va mashinasozlik korxonalari faoliyat yuritmoqda. Qurilish materiallaridan sement, kimyo mahsulotlaridan mineral o‘g‘itlar va sintetik tola ishlab chiqarilmoqda. Respublika ahamiyatiga ega kon-metallurgiya kombinati bor.","Rayonda ikkita neftni qayta ishlash korxonasi bor, kimyo korxonalarida ikki xil mineral o‘g‘itlar ishlab chiqarilmoqda. Qurilish materiallari, shoyi, kulolchilik buyumlari ishlab chiqarish markazlari shakllangan. Qishloq xo‘jaligi yuksak intensivligi bilan ajralib turadi.","Rayon sanoati, asosan, qazib oluvchi sanoat hisobiga yuksak rivojlangan. Strategik ahamiyatga molik gaz-kimyo majmuasi faoliyat ko‘rsatmoqda. Tuproq va iqlim sharoiti ingichka tolali paxta, sabzavot, kartoshka va mevalar yetishtirishga qulay.","Rayon iqtisodiyotining rivojlanishida hududning qulay iqtisodiy-geografik o‘rni, tabiiy resurslar bilan yaxshi ta’minlanganligi muhim rol o‘ynagan. Elektroenergetika, qora va rangli metallurgiya, kimyo sanoati, mashinasozlik korxonalari ichki va tashqi bozor uchun mahsulot yetkazib bermoqda. Hududida uchta sanoat rayoni vujudga kelgan."],0]);
GEO_OCHIQ.push(["Surma zaxiralari bo‘yicha qaysi subregion Osiyo qit’asida birinchi, jahonda esa ikkinchi o‘rinni egallaydi?",["Sharqiy Osiyo","Janubiy Osiyo","Janubi-sharqiy Osiyo","Markaziy Osiyo"],2]);
GEO_OCHIQ.push(["Ilmiy yangiliklar ishlab chiqarish tarmoqlari tarkibida yangi sohalarning paydo bo‘lishiga olib keldi. Kimyo sanoatida vujudga kelgan yangi yo‘nalishni toping.",["kvant texnikasining rivojlanishi (lazerlar)","mikrobiologiya yo‘nalishi","organik sintez yo‘nalishi","polimerlar yo‘nalishi"],3]);
GEO_OCHIQ.push(["Berilgan jadval ma’lumotlaridan foydalanib, mamlakatning tashqi savdo aylanmasini toping (mlrd AQSh doll.).",["6,720","119,584","120,432","−6,72"],1,"gx13_v24"]);
GEO_OCHIQ.push(["Chizma-xaritada 2-raqam bilan belgilangan tabiiy rayonda joylashgan geografik obyektlarni aniqlang.",["Pomir tog‘lari","Otboshi va Farg‘ona tizmalari","Moylitog‘, Jung‘oriya tog‘lari","Safedko‘h, Nishopur tog‘ tizmalari"],3,"gx13_v25"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Mamlakatning relyefi, asosan, tekislik va kuchli parchalangan platolardan iborat. Hududi, asosan, subekvatorial, tropik va subtropik iqlim mintaqalarida joylashgan bo‘lib, iqlimining eng muhim xususiyati uning qurg‘oqchilligidan iborat».</i><br>Matndagi ma’lumotlar qaysi davlatga oid ekanligini aniqlang.",["Eron","Xitoy","Avstraliya","Pokiston"],2]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Sanoatning elektronika, elektrotexnika, kemasozlik, neftni qayta ishlash, kimyo, farmatsevtika tarmoqlari yaxshi rivojlangan. Xalqaro transport va bank-moliya xizmatlarini ko‘rsatish, turizm sohalari ham katta iqtisodiy ahamiyatga ega».</i><br>Matndagi ma’lumotlar qaysi davlatga oid ekanligini aniqlang.",["Singapur","Koreya Respublikasi","Yaponiya","Malayziya"],0]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvonlar asosan qaysi materik uchun xos?",["Shimoliy Amerika","Yevrosiyo","Janubiy Amerika","Avstraliya"],1,"gx13_v28"]);
GEO_OCHIQ.push(["Chizma-xaritada IV raqam bilan belgilangan geografik obyektni aniqlang.",["Ziyovuddin","Zirabuloq","Qoratepa","Zarafshon"],0,"gx13_v29"]);
GEO_OCHIQ.push(["Dunyoda vakillarining soni 100 mln kishidan ziyod bo‘lgan millatlar qatoriga kirmaydigan millatni toping.",["nemislar","inglizlar","ruslar","yaponlar"],1]);
GEO_OCHIQ.push(["Aholining migratsiyasiga oid ma’lumotlar quyidagi fikrlardan qaysi birida keltirilgan?",["2012-yil 1-yanvar holatiga ko‘ra Rossiya aholisining umumiy sonidagi shahar aholisining ulushi taxminan 74 % ni tashkil etdi.","Mamlakat ichidagi aholi harakati Turkiyaning alohida hududlari aholisining dinamikasiga sezilarli ta’sir ko‘rsatadi.","2011-yilda Qozog‘istonda tug‘ilganlar soni 2010-yildagi ko‘rsatkichdan 7681 kishiga oshdi.","Fransiya aholisida 30 yoshdan oshgan ayollar o‘sha yoshdagi erkaklar sonidan ko‘p."],1]);
GEO_OCHIQ.push(["Urbanizatsiyaga oid ma’lumot berilgan javobni aniqlang.",["AQSh aholisi o‘sishining muhim qismi boshqa mamlakatlardan kelgan immigrantlar hisobiga to‘g‘ri keladi.","2015-yilda Rossiyada tug‘ilishning eng yuqori ko‘rsatkichlari Dog‘iston Respublikasi va Checheniston Respublikasida kuzatildi.","Italiyadagi shahar aholisining yarmidan ko‘pi yirik shahar aglomeratsiyalarida to‘plangan.","2016-yilda G‘arbiy Yevropaning umumiy aholisidagi erkaklar ulushi ayollar ulushidan oshdi."],2]);
GEO_OCHIQ.push(["O‘rta Osiyo tuproqlariga oid topshiriq (javoblar A–F variantlardan tanlanadi). <br><b>33.</b> Qadimgi alluvial tekisliklarda, ayniqsa, daryolarning delta tekisliklarida, tog‘ etaklaridagi qiya tekisliklarda tarqalgan tuproqni aniqlang.",["cho‘llarning qumli tuproqlari","sur tusli qo‘ng‘ir tuproqlar","tog‘-o‘rmon-dasht tuproqlari","taqir va taqirli tuproqlar","bo‘z tuproqlar","baland tog‘ tuproqlari"],3,"gx13_v33"]);
GEO_OCHIQ.push(["O‘rta Osiyo tuproqlariga oid topshiriq (javoblar A–F variantlardan tanlanadi). <br><b>34.</b> Qadimgi qoldiq qirlar va tog‘ etaklaridagi toshloq yerlarda paydo bo‘lgan. Bu tuproqlar tarkibida shag‘al va toshlar ko‘p. Bu qaysi tuproq ekanligini aniqlang.",["cho‘llarning qumli tuproqlari","sur tusli qo‘ng‘ir tuproqlar","tog‘-o‘rmon-dasht tuproqlari","taqir va taqirli tuproqlar","bo‘z tuproqlar","baland tog‘ tuproqlari"],1,"gx13_v33"]);
GEO_OCHIQ.push(["O‘rta Osiyo tuproqlariga oid topshiriq (javoblar A–F variantlardan tanlanadi). <br><b>35.</b> Tyanshan, Pomir-Oloy, Kopetdog‘ tizma tog‘lari etaklarida va tog‘ etagidagi qiyaliklarda hosil bo‘lgan tuproqni aniqlang.",["cho‘llarning qumli tuproqlari","sur tusli qo‘ng‘ir tuproqlar","tog‘-o‘rmon-dasht tuproqlari","taqir va taqirli tuproqlar","bo‘z tuproqlar","baland tog‘ tuproqlari"],4,"gx13_v33"]);
GEO_YOZMA.push(["<b>Matnni o‘qing.</b><br><i>«Sharqiy Osiyo mintaqasida 1910-yili Xitoy ... tuzumining ag‘darilishi katta o‘zgarishlarning yuz berishiga sababchi bo‘ldi. Bugungi Xitoy geosiyosati davlatning izchil iqtisodiy rivojlanishi, sotsialistik rejali iqtisodiyotdan erkin bozor munosabatlariga o‘tishiga qaratilgan».</i><br>a) Xitoyning 1976–1989-yillardagi rahbari bo‘lgan, iqtisodiyot va jamiyatni erkinlashtirish borasidagi islohotlar konsepsiyasini ishlab chiqqan shaxs kim?<br>b) Jahonning qadimiy madaniy markazlaridan biri bo‘lgan Xitoy 1910-yilgacha qanday boshqaruv shakliga ega edi?",[["a) Xitoyning 1976–1989-yillardagi rahbari bo‘lgan, iqtisodiyot va jamiyatni erkinlashtirish borasidagi islohotlar konsepsiyasini ishlab chiqqan shaxs kim?",/den\s*syao\s*pin/i],["b) Jahonning qadimiy madaniy markazlaridan biri bo‘lgan Xitoy 1910-yilgacha qanday boshqaruv shakliga ega edi?",/monar[xh]iya/i]]]);
GEO_KALIT.push("a) DEN SYAOPIN; b) MONARXIYA");
GEO_YOZMA.push(["<b>Matnni o‘qing.</b><br><i>«Janubiy Osiyo Yevrosiyoning janubida joylashgan. Himolay tog‘laridan janubda uzunligi 3 000 km ga boradigan Hind-Gang pasttekisligi joylashgan. Hindiston yarimorolining asosi eng qadimgi Hind platformasidan iborat».</i><br>a) Hindiston yarimorolining iqlimi qaysi iqlim tipiga kirishini yozing.<br>b) Qaysi daryolar deltasida qalin mangrazorlar va doimiy yashil o‘rmonlar bor? (Ikkita daryo nomi yoziladi.)",[["a) Hindiston yarimorolining iqlimi qaysi iqlim tipiga kirishini yozing.",/musson/i],["b) Qaysi daryolar deltasida qalin mangrazorlar va doimiy yashil o‘rmonlar bor? (Ikkita daryo nomi yoziladi.)",/gang.*bra[xh]maputra/i]]]);
GEO_KALIT.push("a) MUSSON; b) GANG VA BRAXMAPUTRA");
GEO_YOZMA.push(["<b>Matnni o‘qing.</b><br><i>«Yoqilg‘i-energetika majmuasi Qozog‘iston, Turkmaniston va O‘zbekistonda eng yaxshi rivojlangan. Rangli metallurgiya Turkmaniston Respublikasidan tashqari barcha Markaziy Osiyo davlatlarining iqtisodiyoti va tashqi savdosida katta ahamiyatga ega».</i><br>a) Dunyo bo‘yicha zaxiralar hajmi jihatidan ikkinchi hisoblanadigan gaz koni nomini yozing.<br>b) Qirg‘iziston uchun eng katta moliyaviy daromad keltiruvchi iqtisodiy obyektni yozing.",[["a) Dunyo bo‘yicha zaxiralar hajmi jihatidan ikkinchi hisoblanadigan gaz koni nomini yozing.",/galqinish/i],["b) Qirg‘iziston uchun eng katta moliyaviy daromad keltiruvchi iqtisodiy obyektni yozing.",/qumtor/i]]]);
GEO_KALIT.push("a) GALQINISH; b) QUMTOR");
GEO_YOZMA.push(["<b>Matnni o‘qing.</b><br><i>«1919-yil 28-iyun kuni Fransiyaning Versal shahrida Birinchi jahon urushi tugashi munosabati bilan shartnoma imzolanishi bilan geosiyosatda Versal davri boshlandi».</i> Ushbu davrga xos asosiy tarixiy voqeliklarga doir savollarga javob toping.<br>a) 1917-yil oktabridan boshlab jahonda ilk bor qaysi tuzumga ega bo‘lgan respublikalar ittifoqi paydo bo‘ldi?<br>b) Bu davrda jahon davlatlari orasida qaysi davlatning siyosiy va iqtisodiy mavqei kuchaydi? (qisqartma bilan yozing)",[["a) 1917-yil oktabridan boshlab jahonda ilk bor qaysi tuzumga ega bo‘lgan respublikalar ittifoqi paydo bo‘ldi?",/sotsialistik|sotsiyalistik/i],["b) Bu davrda jahon davlatlari orasida qaysi davlatning siyosiy va iqtisodiy mavqei kuchaydi? (qisqartma bilan yozing)",/aqsh/i]]]);
GEO_KALIT.push("a) SOTSIYALISTIK; b) AQSH");
GEO_YOZMA.push(["<b>Janubiy Osiyo tabiiy geografik o‘lkasi tabiatiga oid ma’lumotlarni toping.</b><br>a) Himolay tog‘lari tabiatining juda xilma-xilligiga sabab bo‘lgan shamol turini yozing.<br>b) Janubiy Osiyoda joylashgan cho‘l nomini yozing (3 harfli).",[["a) Himolay tog‘lari tabiatining juda xilma-xilligiga sabab bo‘lgan shamol turini yozing.",/musson/i],["b) Janubiy Osiyoda joylashgan cho‘l nomini yozing (3 harfli).",/\btar\b/i]]]);
GEO_KALIT.push("a) MUSSON; b) TAR");
GEO_YOZMA.push(["<b>Andijon viloyatiga oid ma’lumotlarni toping.</b><br>a) Qayerda mamlakatimizdagi eng yirik yerosti gaz ombori barpo etilgan?<br>b) Asaka shahri qaysi daryo oqib chiqadigan adirlik etagida joylashgan?",[["a) Qayerda mamlakatimizdagi eng yirik yerosti gaz ombori barpo etilgan?",/[xh]o.?jaobod/i],["b) Asaka shahri qaysi daryo oqib chiqadigan adirlik etagida joylashgan?",/sha[xh]ri[xh]onsoy/i]]]);
GEO_KALIT.push("a) XO‘JAOBOD; b) SHAXRIXONSOY");
GEO_YOZMA.push(["<b>Diagrammadagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) 2018-yilda eksport 14,3 mlrd, import esa 19,6 mlrd AQSh dollarini tashkil qilgan bo‘lsa, Xitoy bilan import aloqasida qancha AQSh dollari to‘g‘ri kelishini toping (mlrd).<br>b) Tashqi savdo balansida eng past ko‘rsatkichga ega bo‘lgan davlatni aniqlang.",[["a) 2018-yilda eksport 14,3 mlrd, import esa 19,6 mlrd AQSh dollarini tashkil qilgan bo‘lsa, Xitoy bilan import aloqasida qancha AQSh dollari to‘g‘ri kelishini toping (mlrd).",/4[.,]116/i],["b) Tashqi savdo balansida eng past ko‘rsatkichga ega bo‘lgan davlatni aniqlang.",/rossiya/i]],"gx13_w42"]);
GEO_KALIT.push("a) 4,116; b) ROSSIYA");
GEO_YOZMA.push(["<b>Rasmdagi aholi yosh-jins piramidalari ma’lumotlaridan foydalanib topshiriqlarni bajaring.</b><br>a) Rasmdagi D mamlakat ijtimoiy-iqtisodiy rivojlanish darajasiga ko‘ra qanday davlat ekanligini aniqlang.<br>b) Yosh-jins piramidalarini qiyoslagan holda qaysi mamlakatga migrantlar ko‘p kelishini aniqlang (A, B, C yoki D).",[["a) Rasmdagi D mamlakat ijtimoiy-iqtisodiy rivojlanish darajasiga ko‘ra qanday davlat ekanligini aniqlang.",/rivojlan/i],["b) Yosh-jins piramidalarini qiyoslagan holda qaysi mamlakatga migrantlar ko‘p kelishini aniqlang (A, B, C yoki D).",/^\s*a\s*$/i]],"gx13_w43"]);
GEO_KALIT.push("a) RIVOJLANAYOTGAN; b) A");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) 2020-yilda mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang.<br>b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng ko‘p ko‘payganini aniqlang.",[["a) 2020-yilda mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang.",/582\s?720/i],["b) Mintaqa aholisi tabiiy o‘sish hisobiga qaysi yilda eng ko‘p ko‘payganini aniqlang.",/2010/i]],"gx13_w44"]);
GEO_KALIT.push("a) 582 720; b) 2010");
GEO_YOZMA.push(["<b>Dunyoning geosiyosiy tizimi va shakllanishiga doir topshiriqlarni bajaring.</b><br>a) Qaysi g‘oya tarafdorlari tabiiy muhit jahon tarixi hamda insonlar hayot tarziga ta’sir ko‘rsatadi deb hisoblaydilar? (Geografik ... – «geografik» so‘zisiz yozing)<br>b) Ular ko‘rsatib bergan tabiiy muhit unsurlari orasida qaysi biri insonlar atvorining shakllanishi va davlatlardagi siyosat xususiyatlarining yuzaga kelishida asosiy omil sifatida qaralgan?",[["a) Qaysi g‘oya tarafdorlari tabiiy muhit jahon tarixi hamda insonlar hayot tarziga ta’sir ko‘rsatadi deb hisoblaydilar? (Geografik ... – «geografik» so‘zisiz yozing)",/determinizm/i],["b) Ular ko‘rsatib bergan tabiiy muhit unsurlari orasida qaysi biri insonlar atvorining shakllanishi va davlatlardagi siyosat xususiyatlarining yuzaga kelishida asosiy omil sifatida qaralgan?",/iqlim/i]]]);
GEO_KALIT.push("a) DETERMINIZM; b) IQLIM");

/* ===== 14-to‘plam ===== */
GEO_OCHIQ.push(["Sayyohlarning amalga oshirgan ishlari mos ravishda to‘g‘ri berilgan javobni toping.",["1 – D, 2 – B, 3 – C, 4 – A","1 – B, 2 – D, 3 – A, 4 – C","1 – C, 2 – A, 3 – B, 4 – D","1 – A, 2 – D, 3 – B, 4 – C"],0,"gx14_v1"]);
GEO_OCHIQ.push(["Quyidagi shartli belgidagi raqamlar nimani ifodalaydi?",["joyning koordinatasi","hududdagi xonadonlar soni","joyning nisbiy balandligi","joyning mutlaq balandligi"],3,"gx14_v2"]);
GEO_OCHIQ.push(["Quyidagi olimlardan qaysi biri X asrda «Iqlimlar kitobi» nomli asar yozgan?",["Mahmud Koshg‘ariy","Yoqut ibn Abdulla","Abu Is’hoq Istaxriy","Abul Hasan Ali Ma’sudiy"],2]);
GEO_OCHIQ.push(["Gumus nimadan hosil bo‘ladi?",["o‘simlik va hayvon qoldiqlaridan","gil va kesakchalardan","mineral eritmadan","tog‘ jinsidan"],0]);
GEO_OCHIQ.push(["Jadvaldagi ma’lumotlardan foydalanib aniqlang: samolyot A punktga qo‘nganda Toshkentda soat va sana necha bo‘ladi?",["20:40, 5-mart","23:40, 5-mart","00:40, 6-mart","04:40, 6-mart"],2,"gx14_v5"]);
GEO_OCHIQ.push(["Jadvaldagi punktlar ichida parvoz davomiyligi eng uzoq bo‘lgan vaqtni aniqlang.",["02:30","02:50","03:00","03:15"],3,"gx14_v5"]);
GEO_OCHIQ.push(["Havo namligiga oid to‘g‘ri ta’rifni toping.",["0 °C dan sovuq haroratli havo tarkibida namlik bo‘lmaydi","balandlik ortgan sari havo tarkibidagi namlik kamayib boradi","issiq havoda ko‘proq, sovuq havoda kamroq namlik bo‘ladi","havo namligi anemometr yordamida o‘lchanadi"],2]);
GEO_OCHIQ.push(["Gibraltar bo‘g‘izi qaysi geografik obyektlar oralig‘ida joylashgan?",["Pireney yarimoroli va Osiyo","Kichik Osiyo va Osiyo","Osiyo va Yevropa","Yevropa va Afrika"],3]);
GEO_OCHIQ.push(["Sxemaga ko‘ra, 66,5° janubiy kenglikda qaysi nuqtada bir sutka – 24 soat davomida Quyosh botmaydi?",["I","II","III","IV"],2,"gx14_v9"]);
GEO_OCHIQ.push(["Sxemaga ko‘ra, Shimoliy yarimsharning o‘rta kengliklarida qaysi oraliqlarda kunning davomiyligi muttasil (to‘xtovsiz) ortib boradi?",["I, II","II, III","III, IV","IV, I"],2,"gx14_v9"]);
GEO_OCHIQ.push(["Norin daryosida qurilgan suv omborini aniqlang.",["Buxtarma","To‘xtag‘ul","Chordara","Qopchig‘ay"],1]);
GEO_OCHIQ.push(["Terayalar – bu ...",["Himolay tog‘larining etaklarida baland bo‘yli o‘t-o‘simliklar, buta va daraxtlardan tarkib topgan botqoqlashgan changalzorlar","Karpat tog‘larining o‘rmonlar bilan qoplangan, yaylov sifatida foydalaniladigan qismlari","Avstraliya materigining cho‘l tabiat zonasida tarkib topgan o‘tib bo‘lmas changalzorlar","Afrikaning tropik iqlim mintaqasida haroratning keskin o‘zgarishi natijasida tog‘ jinslarining parchalanishidan vujudga keladigan toshloq sahrolar"],0]);
GEO_OCHIQ.push(["Ritmiklik qonuniyatiga mos keluvchi javobni toping.",["Sunami","Abraziya","Dengiz oqimi","Qalqish"],3]);
GEO_OCHIQ.push(["Rasmdagi blok-sxemada qaysi tabiiy jarayon (tabiat hodisasi) tasvirlangan?",["To‘fon","Sunami","Suv toshqini","Dengiz oqimi"],1,"gx14_v14"]);
GEO_OCHIQ.push(["Rasmdagi tabiiy jarayon asosan nimalar ta’sirida vujudga keladi?",["kuchli shamollar va siklonlar","suv osti zilzilalari va vulqonlar","iqlim o‘zgarishi va muzliklarning erishi","Oy va Quyoshning tortish kuchi"],1,"gx14_v14"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«...Hududining katta qismi tropik, shimoliy qismlari subtropik iqlim mintaqasida joylashgan. Mintaqaning janubida yil davomida quruq va issiq kontinental tropik havo massalari tarkib topadi. Yozi juda issiq (+30 °C), qishi iliq (+18...+24 °C) bo‘lib, 500–1000 mm atrofida yog‘in yog‘adi. Shimoli-g‘arbiy qismida qattiq bargli doimiy yashil o‘rmon va butazorlar zonasi joylashgan...»</i><br>Matnda berilgan ma’lumotlar qaysi tabiiy geografik o‘lkaga tegishli?",["Janubiy Osiyo","O‘rta Yevropa","Markaziy Osiyo","Janubi-g‘arbiy Osiyo"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«...Zonaning tuproqlari podzol, botqoq va muzloq tuproqlardan iborat. Asosiy o‘simligi qora va oq qarag‘ay, Amerika tilog‘ochi, balzam pixtasi, qarag‘ay. Hayvonlardan qora va qo‘ng‘ir ayiq, Kanada silovsini, Amerika suvsari, skuns, los, vapiti kiyigi, o‘rmon bizoni va boshqalar yashaydi...»</i><br>Matnda tavsifi berilgan tabiat zonasi yozuvsiz xaritada qaysi raqam bilan belgilanganligini toping.",["4","2","1","3"],1,"gx14_v17"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«...Mintaqa iqlimi subtropik bo‘lib, yozi issiq va quruq, qishi esa iliq va yomg‘irli. Hududida geosinklinal joylashganligi tufayli seysmik jihatdan faol hudud hisoblanadi. Bir necha harakatdagi vulqonlar bor, zilzilalar takrorlanib turadi. Suv resurslari bilan ta’minlanish darajasi pastroq bo‘lib, ayrim hududlarda suv tanqisligi ham sezilmoqda...»</i><br>Yuqoridagi ta’rif Yevropaning qaysi subregioniga tegishli?",["O‘rta Yevropa","Markaziy Osiyo","Janubiy Osiyo","Janubiy Yevropa"],3]);
GEO_OCHIQ.push(["Aydarko‘lning shimoliy qirg‘og‘idan janubiy sohiliga suzib o‘tgan sayyoh qaysi tabiiy geografik okrug hududiga kirib kelgan?",["O‘rta Zarafshon","Qizilqum","Mirzacho‘l","Qashqadaryo"],2]);
GEO_OCHIQ.push(["Harorat va nisbiy namlik o‘lchovlari 1, 2 va 3-meteorologik stansiyalarda bir vaqtning o‘zida amalga oshirildi (jadvalga qarang). 2-meteorologik stansiyada 1 m³ havoning namga to‘yinishi uchun yana necha gramm suv bug‘i kerak bo‘ladi?",["2,15 g","3,15 g","4,25 g","5,85 g"],1,"gx14_v20"]);
GEO_OCHIQ.push(["Azimutal proyeksiyadagi xaritaga ko‘ra, agar A nuqtada mahalliy vaqt bilan soat 11:00 va sana 1-yanvar bo‘lsa, B nuqtada soat necha bo‘lishini aniqlang.",["02:00","08:00","15:00","20:00"],3,"gx14_v21"]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«...Okrugning yozi issiq, quruq, davomli, qishi nisbatan iliq. Shimol va sharq tomondan Arktika va Sibir sovuq havo massalari kirib kela olmaganligi sababli yanvarning o‘rtacha harorati 0 °C dan yuqori. Aksincha, g‘arbiy qismi ochiq bo‘lib, mo‘tadil dengiz va subtropik havo massalarining to‘siqsiz kirib kelishiga imkon beradi...»</i><br>Yuqorida keltirilgan ma’lumotlar qaysi tabiiy geografik okrugga tegishli?",["Mirzacho‘l","Farg‘ona","Surxondaryo","Qashqadaryo"],3]);
GEO_OCHIQ.push(["Chirchiq-Ohangaron tabiiy geografik okrugiga mos keluvchi ta’rifni toping.",["shimol va shimoli-sharqqa tomon balandlashib boradi. Okrugning tekislik qismi yuzasi bir xil emas, unda onda-sonda qoldiq tog‘lar va platolar uchrab turadi. G‘arbiy qismida cho‘l sur-qo‘ng‘ir qumli, sho‘rxok va o‘tloq tuproqlar tarqalgan","vodiy relyef jihatidan sharqdan g‘arbga pasayib boradi. Mavjud daryo o‘zanini yuvib, chuqurlashtirib, qator qayirlar hosil qilgan. Bu qayirlar gil, qumoq va lyossimon jinslardan tashkil topgan","yer usti tuzilishi bir xil emas. Tekislikning yuzasi past-balandliklardan iborat bo‘lib, markaziy qismida daryoning qadimiy o‘zanlarida bir necha botiqlar joylashgan. Bu o‘zansimon botiqlar orasida esa tepachalar joylashgan. Shimoli-sharqiy qismida daryoning uchta terrasasi joylashgan","tog‘lari kaledon va gersin burmalanishida ko‘tarilgan, so‘ngra tashqi kuchlar ta’sirida yemirilgan. Hozirgi relyefi vujudga kelishida antropogen davrida sodir bo‘lgan jarayonlar, xususan, neotektonik jarayonlarning ahamiyati katta"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«...Yomg‘ir tez-tez yog‘ib turadi, havoning o‘rtacha harorati hamma joyda 0 °C dan yuqori. Shuning uchun o‘simliklar vegetatsiyasi (o‘sishi) yil davomida to‘xtamaydi. Bu yerda yoz quruq va issiq, qish iliq hamda seryomg‘ir bo‘ladi...»</i><br>Yuqoridagi ma’lumotlar qaysi tabiiy geografik o‘lkaga tegishli?",["O‘rta Yevropa","Janubiy Yevropa","Janubiy Osiyo","O‘rta Osiyo"],1]);
GEO_OCHIQ.push(["Mexanik energiyani elektr energiyasiga aylantirib beruvchi tarmoq – ...",["atom elektr stansiyasi","issiqlik elektr stansiyasi","quyosh energiyasi","gidroelektr stansiyasi"],3]);
GEO_OCHIQ.push(["Navoiy viloyati haqida berilgan to‘g‘ri ma’lumotni aniqlang.",["neftni qayta ishlash, kimyo, energetika sanoati iqtisodiy rayondagina emas, balki respublikada ham ajralib turadi. Mashinasozlik, metallsozlik va binokorlik materiallari ishlab chiqaruvchi tarmoqlar ham muhim ahamiyatga ega. Shuningdek, hududida ikkita sanoat tuguni shakllangan","sanoati, asosan, undiruvchi tarmoqlari hisobiga yuksak rivojlangan. Xususan, yoqilg‘i resurslarini ishlab chiqarish bo‘yicha birinchi o‘rinni egallaydi, hududida strategik ahamiyatga ega gaz-kimyo majmuasi joylashgan","agrosanoat majmuyi ehtiyoji negizida vujudga kelgan. Hozirda mashinasozlik agrosanoat majmuyiga xizmat ko‘rsatishdan tashqari, ko‘plab turdagi murakkab mashinalar ham ishlab chiqarmoqda","elektr energiyasi ishlab chiqarish bo‘yicha respublikada oldingi o‘rinlarda turadi, yirik kimyo kombinati, qurilish (sement) materiallari, kon-metallurgiya tarmoqlari rivojlangan"],3]);
GEO_OCHIQ.push(["Malayziya haqida berilgan ma’lumotlar asosida mos javobni toping.",["yarimorol qismida aholisining 80 foizi istiqomat qiladi","eng yirik millat – yavaliklar bo‘lib, jami aholining 50 foizini tashkil etadi","urbanizatsiya darajasi 40 % atrofida, ko‘p tarmoqli qishloq xo‘jaligi shakllangan","hududining qariyb 75 foizini o‘simlik va hayvonot dunyosiga boy ekvatorial nam o‘rmonlar egallagan"],0]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«O‘zaro savdo-sotiq, kreditlar berish, xalqaro iqtisodiy tashkilotlar barpo etish va boshqa shakldagi iqtisodiy aloqalar orqali bog‘langan jahon mamlakatlarining milliy iqtisodiyotlari majmui – bu...»</i><br>Yuqoridagi ta’rifga mos keluvchi atamani toping.",["transmilliy kompaniya","jahon xo‘jaligi","xalqaro mehnat taqsimoti","ixtisoslashuv"],1]);
GEO_OCHIQ.push(["Xalqaro savdoda katta talab mavjud bo‘lgan tayyor mahsulotlarni toping.",["oziq-ovqat mahsulotlari, transport vositalari, elektronika jihozlari","kimyoviy mahsulotlar, mashina va jihozlar, transport vositalari","to‘qimachilik mahsulotlari, elektronika qurilmalari, asbob-uskunalar","yoqilg‘i mahsulotlari, transport vositalari, mashina va asbob-uskunalar"],1]);
GEO_OCHIQ.push(["Jadvaldagi ma’lumotlardan foydalanib aniqlang: III raqamda ko‘rsatilgan davlat ijtimoiy rivojlanishi holatiga ko‘ra qaysi tipga kiradi?",["industrial","postindustrial","sanoatlashgan","agrar"],3,"gx14_v30"]);
GEO_OCHIQ.push(["Diagramma ma’lumotlaridan foydalanib, yil boshida mamlakatdan necha kishi chetga chiqib ketganligini (tashqi migratsiyani) toping.",["106 200 kishi","475 030 kishi","1 949 750 kishi","70 900 kishi"],1,"gx14_v31"]);
GEO_OCHIQ.push(["Ushbu chizmaga mos javobni toping. AB yo‘nalish – 225° (j.g‘). AC yo‘nalishi ufqning qaysi tomoniga mos kelishini aniqlang.",["janubi-sharq","shimol-g‘arbi-g‘arb","janub-g‘arbi-g‘arb","shimoli-g‘arb"],2,"gx14_v32"]);
GEO_OCHIQ.push(["Balandlik mintaqalari bo‘yicha moslashtirish (javoblar A–F variantlardan tanlanadi).<br><b>33.</b> Subarktika iqlim mintaqasidagi tog‘larning etagi qaysi tabiat zonasi bilan boshlanadi?",["tundra va o‘rmon-tundra","o‘rmon-dasht","dasht","chalacho‘l","subalp va alp o‘tloqlari","cho‘l"],0,"gx14_v33"]);
GEO_OCHIQ.push(["Balandlik mintaqalari bo‘yicha moslashtirish (javoblar A–F variantlardan tanlanadi).<br><b>34.</b> O‘rta Osiyoning 1200–2000 m balandlikdagi mintaqalari qaysi tabiat zonasiga tegishli?",["tundra va o‘rmon-tundra","o‘rmon-dasht","dasht","chalacho‘l","subalp va alp o‘tloqlari","cho‘l"],2,"gx14_v33"]);
GEO_OCHIQ.push(["Balandlik mintaqalari bo‘yicha moslashtirish (javoblar A–F variantlardan tanlanadi).<br><b>35.</b> Surxondaryo tabiiy geografik okrugining 2500 metrdan baland qismlari qaysi zonaga tegishli?",["tundra va o‘rmon-tundra","o‘rmon-dasht","dasht","chalacho‘l","subalp va alp o‘tloqlari","cho‘l"],4,"gx14_v33"]);
GEO_OCHIQ.push(["Xaritada yulduzcha bilan tasvirlangan gidrografik obyektni toping.",["Karib dengizi","Meksika qo‘ltig‘i","Sargasso dengizi","Gudzon qo‘ltig‘i"],1,"gx14_v36"]);
GEO_OCHIQ.push(["Janubiy Amerika materigida 30° parallel chizig‘i qaysi geografik obyekt ustidan kesib o‘tmaganligini aniqlang.",["La-Plata","And","Parana","Patagoniya"],3,"gx14_v37"]);
GEO_OCHIQ.push(["Kim tomonidan yer po‘stining rivojlanish nazariyasi ishlab chiqildi?",["V. V. Dokuchayev","Ch. Layel","A. A. Grigoryev","V. A. Vernadskiy"],1]);
GEO_OCHIQ.push(["O‘rta Osiyo o‘lkasining yozuvsiz xaritasida yulduzcha bilan tasvirlangan rayonni toping.",["G‘arbiy Tyanshan","Shimoliy Tyanshan","Sharqiy Tyanshan","Markaziy Tyanshan"],1,"gx14_v39"]);
GEO_OCHIQ.push(["Pushta – bu ...",["And tog‘idagi baland tog‘ o‘tloqlari","tabiiy sharoiti qattiq, yog‘in kam yog‘adigan o‘lka","Karpat tog‘idagi pasttekisliklarda ahyon-ahyonda uchraydigan dashtlar","Buyuk tekisliklardagi dashtlar"],2]);
GEO_OCHIQ.push(["Jadvaldagi eksport va import ma’lumotlaridan foydalanib, mamlakatning tashqi savdo aylanmasini aniqlang (mlrd AQSh doll.).",["6,720","56,432","119,584","123,152"],2,"gx14_v41"]);
GEO_OCHIQ.push(["Jadvaldagi ma’lumotlarga ko‘ra mamlakatning tashqi savdo balansini (saldosini) aniqlang (mlrd AQSh doll.).",["−6,720","6,720","−119,584","119,584"],0,"gx14_v41"]);
GEO_OCHIQ.push(["Chizma-xaritada IV raqam bilan belgilangan geografik obyektni aniqlang.",["Ziyovuddin","Zirabuloq","Qoratepa","Zarafshon"],0,"gx14_v43"]);
GEO_OCHIQ.push(["Jadvalga ko‘ra mamlakat aholisi mexanik o‘sish (immigratsiya va emigratsiya farqi) hisobiga qancha kishiga ko‘paygan?",["11 920 kishi","476 800 kishi","488 720 kishi","596 000 kishi"],1,"gx14_v44"]);
GEO_OCHIQ.push(["Quyidagi xarita-sxemada 3 raqami bilan qaysi tog‘ joylashgan?",["Sulton Uvays","Tomditog‘","Bo‘kantov","Quljuqtov"],1,"gx14_v45"]);

/* ===== 15-to‘plam ===== */
GEO_OCHIQ.push(["I raqamda qaysi dinning ibodat maskani ramzi tasvirlangan?",["Islom dini","Buddaviylik dini","Xristianlik dini","Yahudiylik dini"],1,"gx15_v1"]);
GEO_OCHIQ.push(["II raqamda qaysi dinning ibodat maskani ramzi tasvirlangan?",["Buddaviylik dini","Islom dini","Xristianlik dini","Hinduizm dini"],2,"gx15_v2"]);
GEO_OCHIQ.push(["III raqamda qaysi dinning ibodat maskani ramzi tasvirlangan?",["Xristianlik dini","Buddaviylik dini","Islom dini","Yahudiylik dini"],2,"gx15_v3"]);
GEO_OCHIQ.push(["Italiyaning maydoni 301,3 ming km² va aholisi 60,6 mln kishi ekanligini hisobga olib, uning o‘rtacha aholi zichligini toping.",["taxminan 150 kishi/km²","taxminan 201 kishi/km²","taxminan 305 kishi/km²","taxminan 95 kishi/km²"],1]);
GEO_OCHIQ.push(["Jadvalga ko‘ra Turkiyaning jami aholisi 81,3 mln kishi, shahar aholisi esa 61 mln kishini tashkil etadi. Turkiyaning urbanizatsiya darajasini (%) hisoblang.",["taxminan 65 %","taxminan 75 %","taxminan 81 %","taxminan 50 %"],1]);
GEO_OCHIQ.push(["Megalopolislarni ulardagi aglomeratsiyalar soni bilan to‘g‘ri moslashtiring.<br>1) Shimoli-sharqiy (Bosvash); 2) Ko‘lbo‘yi (Chipits); 3) Ingliz; 4) Yapon (Tokaydo).<br>a) 30 ta; b) 20 ta; c) 40 ta; d) 35 ta.",["1-c, 2-d, 3-b, 4-a","1-c, 2-d, 3-a, 4-b","1-c, 2-d, 3-a, 4-a","1-c, 2-a, 3-d, 4-b"],1]);
GEO_OCHIQ.push(["Megalopolislarni ularning eng yirik aglomeratsiyasi bilan to‘g‘ri moslashtiring.<br>1) Shimoli-sharqiy (Bosvash); 2) Ko‘lbo‘yi (Chipits); 3) Tinch okeanbo‘yi (Sansan); 4) Ingliz.<br>a) Nyu-York; b) London; c) Chikago; d) Los-Anjeles.",["1-a, 2-c, 3-b, 4-d","1-a, 2-d, 3-c, 4-b","1-a, 2-c, 3-d, 4-b","1-a, 2-c, 3-b, 4-b"],2]);

/* ===== 16-to‘plam ===== */
GEO_OCHIQ.push(["Quyidagi xaritada berilgan davlatlardan qaysi birining boshqaruv shakli monarxiya hisoblanadi?",["1","6","5","4"],3,"gx16_v1"]);
GEO_OCHIQ.push(["Himolay tog‘lari etagidagi terayalarga qishda ekiladigan o‘simlik nomi qaysi javobda xato berilgan?",["bug‘doy","arpa","grechixa","shakarqamish"],3]);
GEO_OCHIQ.push(["Neftni quvurlar orqali yuborish temiryo‘lda tashishdan necha barobar arzon tushadi?",["6 barobar","3 barobar","4 barobar","5 barobar"],2]);
GEO_OCHIQ.push(["Geografiya fanlar tizimidagi qaysi fan kichik hududlar tabiatining tuzilishi va xususiyatlarini o‘rganadi?",["geomorfologiya","geoekologiya","landshaftshunoslik","fatsiologiya"],2]);
GEO_OCHIQ.push(["Britaniya orolida qaysi tabiat zonasi hosil bo‘lgan?",["fasliy nam o‘rmonlar","tayga, aralash o‘rmonlar va keng bargli o‘rmonlar","o‘rmon-dasht va dasht","qattiq bargli doimiy yashil o‘rmonlar va butazorlar"],1]);
GEO_OCHIQ.push(["Aholining tabiiy takror bo‘lishiga bog‘liq bo‘lgan demografik o‘tish bosqichlarini to‘g‘ri tartiblang.",["1-b; 2-a; 3-d; 4-c","1-d; 2-c; 3-b; 4-a","1-d; 2-a; 3-c; 4-a","1-a; 2-b; 3-d; 4-c"],0,"gx16_v6"]);
GEO_OCHIQ.push(["Quyidagi xaritada Baffin dengizi qaysi raqam bilan belgilangan?",["2","8","5","9"],3,"gx16_v7"]);
GEO_OCHIQ.push(["Davlatlarga oid ma’lumotlarni moslashtiring (33–35-topshiriqlarga mos javoblarni A–F variantlardan tanlang).",["33-F, 34-D, 35-E","33-E, 34-C, 35-B","33-A, 34-B, 35-D","33-E, 34-B, 35-A"],3,"gx16_v8"]);
GEO_OCHIQ.push(["Ustyurt platosining shimoliy qismida qaysi qumli tekislik joylashgan?",["Orolbo‘yi Qoraqumi","Uchtagan qumlari","Orqaunguz Qoraqumi","Katta Bo‘rsiq qumi"],3]);
GEO_OCHIQ.push(["Yarimsharlar xaritasidan foydalanib aniqlang: xaritadagi B nuqtada mahalliy vaqt 14:00 bo‘lganda D nuqtadagi mahalliy vaqtni toping.",["24:00 yoki 00:00","03:20","09:00","21:00"],1,"gx16_v10"]);
GEO_OCHIQ.push(["Yarimsharlar xaritasidan foydalanib aniqlang: uchuvchilar E nuqtadan mahalliy vaqt bilan soat 18:00 da uchib, G nuqtaga qo‘ngandagi mahalliy vaqtni aniqlang.",["11:20","12:00","20:40","21:00"],2,"gx16_v10"]);
GEO_OCHIQ.push(["Quyidagi xaritada York burni qaysi raqam bilan belgilangan?",["1","9","8","2"],0,"gx16_v12"]);
GEO_OCHIQ.push(["Diagrammadagi ma’lumotlardan foydalanib aniqlang:<br>a) tashqi savdo aylanmasi eng past bo‘lgan yilni;<br>b) tashqi savdo balansida eksport va import miqdori orasidagi farq eng ko‘p bo‘lgan yilni.",["a) 2010; b) 2015","a) 2005; b) 2000","a) 2010; b) 2005","a) 2000; b) 2005"],1,"gx16_v13"]);
GEO_OCHIQ.push(["Quyida berilgan Janubiy Amerika milliy bog‘lari orasidan qaysi biri Gviana yassi tog‘ligida joylashgan?",["Kanayma","Makarena","Jau","Manu"],0]);
GEO_OCHIQ.push(["Pomir tog‘laridagi Ismoil Somoniy cho‘qqisi qaysi davlat hududiga to‘g‘ri keladi?",["Qozog‘iston","Qirg‘iziston","Tojikiston","O‘zbekiston"],2]);

/* ===== 17-to‘plam ===== */
GEO_OCHIQ.push(["Quyidagi mamlakatlardan qaysi birida bolalar salmog‘i 14 ga teng?",["AQSh","Shvetsiya","Niderlandiya","Gretsiya"],3]);
GEO_OCHIQ.push(["Quyidagi xaritada Namib cho‘li qaysi raqam bilan belgilangan?",["16","24","19","17"],0,"gx17_v2"]);
GEO_OCHIQ.push(["Quyidagilar orasidan to‘g‘ri fikrlar sonini toping.",["2 ta","3 ta","1 ta","4 ta"],1,"gx17_v3"]);
GEO_OCHIQ.push(["Topografik xaritalarda relyef nima yordamida tasvirlanadi?",["gorizontallar","alohida belgilar","ranglar","chiziqlar"],0]);

/* ===== 18-to‘plam ===== */
GEO_OCHIQ.push(["Mamlakatimizning yog‘och-taxta xomashyosiga bo‘lgan yillik ehtiyoji qancha?",["100 ming m³","10 ming m³","100 mln m³","10 mln m³"],3]);
GEO_OCHIQ.push(["Toroslar nima?",["qalashib ketgan muzliklar","kema qatnaydigan davr","bir qancha muz bo‘laklari","Shimoliy Muz okeanidagi ichki dengiz nomi"],0]);
GEO_OCHIQ.push(["Matnni o‘qing va berilgan ma’lumotlar atmosferaning qaysi qatlamlariga tegishli ekanligini aniqlang.",["a) mezosfera; b) troposfera, termosfera, ekzosfera","a) stratosfera; b) mezosfera, troposfera, ekzosfera","a) ekzosfera; b) mezosfera, termosfera, stratosfera","a) troposfera; b) mezosfera, termosfera, ekzosfera"],3,"gx18_v4"]);
GEO_OCHIQ.push(["Atrof-muhit holatining monitoringi masalasi qaysi shaharda bo‘lib o‘tgan tabiiy muhit muhofazasiga bag‘ishlangan konferensiya arafasida vujudga kelgan?",["Rio-de-Janeyro","Stokgolm","London","Xelsinki"],1]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br><i>«Mamlakat relyefining xususiyatlariga ko‘ra tog‘li mamlakat. Asosiy foydali qazilmalari neft, qalay, volfram, boksit, oltin hisoblanadi. Neft asosan mamlakatning orol qismidagi dengiz sayozliklaridan qazib olinadi».</i><br>Matndagi ma’lumotlar qaysi davlatga tegishli?",["Buyuk Britaniya","Fransiya","Malayziya","Nigeriya"],2]);
GEO_OCHIQ.push(["Sutka davomida havo harorati quyidagicha kuzatildi: +1 °C, +5 °C, +7 °C, +10 °C, +14 °C, +12 °C, +10 °C, +7 °C.<br>a) Havo haroratining sutkalik amplitudasini aniqlang.<br>b) Sutkalik o‘rtacha havo haroratini toping.",["a) +13 °C; b) +8,25 °C","a) +8 °C; b) +6,7 °C","a) +11 °C; b) +6,3 °C","a) +15 °C; b) +8,00 °C"],0]);
GEO_OCHIQ.push(["Afrika ko‘llari orasida qaysi ko‘lning maydoni 32,9 ming km² ni tashkil etadi?",["Viktoriya","Chad","Tanganika","Nyasa"],2]);
GEO_OCHIQ.push(["Shimoliy Amerikaning Katta Havza va Kolorado platosida qanday tabiat zonalari shakllangan?",["o‘rmon-dasht va dasht","savannalar va siyrak o‘rmonlar","aralash o‘rmonlar","chalacho‘l va cho‘llar"],3]);
GEO_OCHIQ.push(["Jadvaldagi ma’lumotlardan foydalanib topshiriqlarni bajaring.<br>a) Soat 07:00 da havoning mutlaq namligini aniqlang.<br>b) Soat 13:00 da 1 m³ havoning to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",["a) 11,05 g; b) 6,6 g","a) 13,05 g; b) 7,6 g","a) 10,05 g; b) 30 g","a) 17 g; b) 30 g"],0,"gx18_v10"]);
GEO_OCHIQ.push(["Hind okeanida eng baland suv qalqishi qaysi qo‘ltiqda kuzatilgan?",["Penjin","Mezen","Fandi","Kambey"],3]);
GEO_OCHIQ.push(["Qaysi viloyatlarda bog‘ va tokzor maydonlar birmuncha kam?",["Jizzax, Sirdaryo","Xorazm, Buxoro","Xorazm, Navoiy","Farg‘ona, Andijon"],1]);
GEO_OCHIQ.push(["Iqtisodiyotning uchlamchi sektoriga tegishli bo‘lgan xo‘jalik yuritish subyektini toping.",["G‘ozg‘on marmar koni","Qalmoqqir koni","Jayronxona sanatoriyasi","«Semurg‘» trikotaj fabrikasi"],2]);
GEO_OCHIQ.push(["Yevrosiyoning o‘rmon-dasht mintaqasi o‘rmonlar zonasida qanday tuproqlar tarqalgan?",["sur-qo‘ng‘ir","jigarrang","qo‘ng‘ir o‘rmon","qora tuproq"],0]);
GEO_OCHIQ.push(["Quyida berilgan davlatlar va ularning qishloq xo‘jaligi mahsulotlarini yetishtirish bo‘yicha yetakchilik qiladigan mahsulotlarini mos holda to‘g‘ri joylashtiring.<br>1. Rossiya; 2. Ispaniya; 3. Hindiston; 4. AQSh; 5. Braziliya; 6. Ukraina.<br>a) soya; b) shakarqamish; c) kartoshka; d) kofe; e) qandlavlagi; f) zaytun.",["1-c, 2-e, 3-a, 4-b, 5-d, 6-f","1-a, 2-f, 3-e, 4-d, 5-b, 6-c","1-c, 2-f, 3-b, 4-a, 5-d, 6-e","1-d, 2-f, 3-c, 4-e, 5-a, 6-b"],2,"gx18_v15"]);
GEO_OCHIQ.push(["Yarimsharlar xaritasidan foydalanib topshiriqlarni bajaring.<br>a) G nuqta ustida Quyosh tik tepaga keladigan sanani aniqlang.<br>b) G nuqta E nuqtaga nisbatan necha kilometr janubroqda joylashganini toping (hisoblashda 1° meridian yoyi 111,1 km ga teng deb qabul qilinsin).",["a) 22-iyun; b) 5221,7 km","a) 23-avgust; b) 2610,8 km","a) 22-iyul; b) 5217 km","a) 21-dekabr; b) 7388,1 km"],0,"gx18_v16"]);
GEO_OCHIQ.push(["O‘rta Osiyo tog‘laridagi keng bargli o‘rmonlar qaysi tog‘larda uchraydi?",["Shimoliy Tyanshan, Hisor","Hisor, Janubiy Tojikiston","Jung‘oriya Olatovi, G‘arbiy Tyanshan","Shimoliy Tyanshan, Tarbag‘atoy"],1]);
GEO_OCHIQ.push(["Jadval ma’lumotlaridan foydalanib topshiriqlarni bajaring.<br>a) 2022-yilda tabiiy o‘sish necha promilleni tashkil etganligini aniqlang.<br>b) 2022-yilda aholi soni (har 1000 kishiga) qanchaga oshganligini aniqlang.",["a) 19; b) 17","a) 19; b) 29","a) 17; b) 19","a) 24; b) 29"],2,"gx18_v18"]);
GEO_OCHIQ.push(["Quyidagi daryolardan qaysi biri O‘rta Osiyo hududidan oqib chiqib ketadi?",["Ishim","Ili","Atrek","Chu"],0]);
GEO_OCHIQ.push(["Xaritadan foydalanib topshiriqni bajaring.<br>a) Xaritada 4 va 5 raqamlar bilan belgilangan davlatlarni qaysi xususiyat birlashtiradi?<br>b) Xaritada qaysi raqam bilan belgilangan davlat poytaxti dunyodagi eng balandda joylashgan «millioner» shahar maqomini olgan?",["a) quruqlik ichkarisida joylashgan; b) 4","a) federativ davlatlar; b) 3","a) monarxiya tipidagi davlatlar; b) 2","a) baland tog‘lik hududda joylashgan; b) 3"],0,"gx18_v20"]);

/* ===== 19-to‘plam ===== */
GEO_OCHIQ.push(["Ba’zi issiq buloqlarda suv vaqt-vaqti bilan favvora kabi otilib turadi. Bunday buloqlar nima deyiladi?",["geyzer","magma","golitsin","krater"],0]);
GEO_OCHIQ.push(["Quyidagi dengizlardan chekka dengiz bo‘lgan javobni aniqlang.",["Arabiston dengizi","Qizil dengiz","O‘rta dengiz","Qora dengiz"],0]);
GEO_OCHIQ.push(["Quyi Amudaryo okrugi negizida qaysi davr yotqiziqlari joylashgan?",["paleogen","bo‘r","neogen","yura"],1]);
GEO_OCHIQ.push(["Makvis – bu nima?",["And tog‘laridagi hayvonlar to‘plangan hudud","Antarktidadagi qush nomi","Avstraliyada yashovchi xaltali hayvon","Afrikada uchrovchi o‘simlik nomi"],3]);
GEO_OCHIQ.push(["<b>Matnni o‘qing.</b><br>a) Qattiq bargli doimiy yashil o‘rmon va butazorlar zonasi Yevrosiyoning qaysi qismida tarqalgan?<br>b) Janubi-g‘arbiy Osiyo o‘lkasi qaysi tabiat zonalarida joylashganligini aniqlang.",["a) janubida; b) dasht","a) sharqida; b) dasht va savanna","a) shimolida; b) savannalar va cho‘llar","a) g‘arbida; b) chalacho‘l va cho‘llar"],3,"gx19_v5"]);

/* ===== 20-to‘plam ===== */
GEO_OCHIQ.push(["Qoradaryo qaysi daryolarning qo‘shilishidan hosil bo‘ladi?",["Oqsuv va Tanxoz","Aravonsoy va Oqbura","Yassi va Ko‘gart","Tor va Qora G‘ulja"],3]);
GEO_OCHIQ.push(["Yevrosiyo nechta tabiiy geografik o‘lkaga bo‘linadi?",["14 ta","4 ta","10 ta","15 ta"],0]);
GEO_OCHIQ.push(["O‘rta Osiyoning shimoli-sharqiy qismida qishda havo harorati qancha bo‘ladi?",["−48 °C","−55 °C","−50 °C","−40 °C"],2]);
GEO_OCHIQ.push(["Yozda Qoraqumda havo harorati qancha bo‘ladi?",["+48 °C","+54 °C","+50 °C","+45 °C"],1]);
GEO_OCHIQ.push(["O‘rta Osiyoning shimoliy nuqtasi necha gradus kenglikda joylashgan?",["43°","53,8°","34°","58,3°"],1]);
GEO_OCHIQ.push(["O‘rta Osiyoning sharqiy nuqtasi qaysi daryo vodiysiga to‘g‘ri keladi?",["Qora Irtish","Atrek","Emba","Ili"],0]);
GEO_OCHIQ.push(["O‘rta Osiyo chegarasi 58° sharqiy uzunlik va 48° shimoliy kenglikka yetgandan keyin qayerga burilib, qaysi shahargacha davom etadi?",["shimolga va shimoli-sharqqa burilib, Qo‘stanoyga boradi","sharqqa va janubi-sharqqa burilib, O‘skemenga boradi","sharqqa va janubi-g‘arbga burilib, Iren-Xabirgaga boradi","shimolga va shimoli-g‘arbga burilib, Ayritovga boradi"],0]);
GEO_OCHIQ.push(["O‘rta Osiyoning g‘arb tomonida Kaspiy dengizi qirg‘oqlari chegara bo‘ladi. Shimoli-g‘arbiy chegara qaysi obyekt orqali o‘tadi?",["Turon platformasidan","Ustyurtning shimoli-g‘arbidan","Mug‘ojar tog‘laridan","Emba daryosidan"],3]);
GEO_OCHIQ.push(["O‘rta Osiyoning sharqiy chegarasi bir qancha tog‘lar va qaysi dovon orqali o‘tadi?",["O‘rkashar","Iren-Xabirga","Adinkur","Qarat"],2]);
GEO_OCHIQ.push(["O‘rta Osiyoni alohida tabiiy geografik o‘lka sifatida ajratishga asos bo‘ladigan nechta tabiiy xususiyati mavjud?",["7 ta","8 ta","6 ta","5 ta"],0]);
GEO_OCHIQ.push(["O‘rta Osiyo iqlimi qanday?",["dengiz iqlimi","tropik iqlim","keskin kontinental","quruq kontinental"],2]);
GEO_OCHIQ.push(["O‘rta Osiyo cho‘llarida yog‘in miqdori qancha?",["100–120 mm","70–80 mm","100–150 mm","80–100 mm"],1]);
GEO_OCHIQ.push(["Chjan Szyan O‘rta Osiyoning qaysi qismlarini o‘rgangan?",["Tyanshan, Yettisuv, Chu vodiysi","Toshkent, Samarqand, Pomir","Issiqko‘l, Farg‘ona, Xorazm","Farg‘ona, Toshkent, Samarqand"],2]);
GEO_OCHIQ.push(["«O‘rta Osiyo va Kavkaz geografiyasi»ni kim yozgan?",["Muhammad ibn Muso al-Xorazmiy","Abu Rayhon Beruniy","Yoqut ibn Abdulla","Abul Hasan Ali Ma’sudiy"],3]);
GEO_OCHIQ.push(["«Mamlakatlarning alifbo tartibidagi ro‘yxati» nomli asar muallifi kim?",["Muhammad ibn Muso al-Xorazmiy","Abu Is’hoq Istaxriy","Abul Hasan Ali Ma’sudiy","Yoqut ibn Abdulla"],3]);
GEO_OCHIQ.push(["O‘rta Osiyo Rossiya imperiyasi tomonidan bosib olinguniga qadar uning tabiatini kimlar o‘rgandi?",["Benevini, N. A. Seversov, F. Yefremov, G. S. Karelin","A. P. Fedchenko, N. A. Seversov, P. P. Semyonov-Tyanshanskiy","F. Yefremov, G. S. Karelin, Benevini, B. Pazuxin, I. Xoxlov","A. P. Fedchenko, G. S. Karelin, A. Seversov"],2]);
GEO_OCHIQ.push(["O‘rta Osiyo Rossiya imperiyasi tomonidan bosib olingandan keyin kimlar o‘rgandi?",["Fedchenko, Tyanshanskiy, Mushketov","B. Pazuxin, Babushkin","V. L. Shuls, L. S. Berg, A. Obruchev, Kogay","N. L. Korjenevskiy, D. I. Sherbakov, D. V. Nalivkin"],3]);
GEO_OCHIQ.push(["Jahondagi yoki uning qaysidir qismidagi davlatlarning ma’lum bir tarixiy davrdagi holati aks etgan xaritaga nima deyiladi?",["iqtisodiy xarita","siyosiy xarita","ijtimoiy xarita","joy plani"],1]);
GEO_OCHIQ.push(["O‘rta Osiyo siyosiy xaritasining shakllanishi necha bosqichdan iborat?",["8 ta","3 ta","5 ta","7 ta"],2]);
GEO_OCHIQ.push(["Birinchi bosqichda qanday davlatlar bo‘lgan?",["Turkiston general-gubernatorligi, Xiva xonligi va Buxoro amirligi","Qo‘qon xonligi, Xiva xonligi va Buxoro amirligi","Xiva va Qo‘qon xonliklari, Turkiston muxtoriyati","Turkiston muxtoriyati, Buxoro va Xorazm respublikalari"],1]);
GEO_OCHIQ.push(["Qaysi siyosiy bosqich juda qisqa davrni o‘z ichiga oladi?",["ikkinchi bosqich","to‘rtinchi bosqich","beshinchi bosqich","uchinchi bosqich"],3]);
GEO_OCHIQ.push(["To‘rtinchi bosqich qaysi yillarni o‘z ichiga oladi?",["1917–1920","1917–1922","1924–1991","1925–1990"],2]);
GEO_OCHIQ.push(["Nechanchi bosqichda beshta ittifoqdosh respublika tashkil etilgan?",["to‘rtinchi","uchinchi","uchinchi bosqich oxiri – to‘rtinchi bosqich boshlarida","beshinchi"],0]);
GEO_OCHIQ.push(["O‘rta Osiyo tabiati, geologik tuzilishi, foydali qazilmalari, xo‘jaligi, tarixi haqida asar yozgan buyuk olim kim?",["Abul Hasan Ali Ma’sudiy","Koshg‘ariy","Beruniy","Xorazmiy"],2]);
GEO_OCHIQ.push(["Zahiriddin Muhammad Bobur nechanchi asrlarda yashagan?",["XVI","XV–XVI","XIV–XV","XVI–XVII"],1]);
GEO_OCHIQ.push(["Xarita andazalari qanday turlarga bo‘linadi?",["teng burchakli, teng shaklli, teng yonli","teng burchakli, teng maydonli, ixtiyoriy","teng burchakli, teng yonli, teng hajmli, teng maydonli","teng yonli, teng hajmli, teng shaklli"],1]);
GEO_OCHIQ.push(["Qanday andazalar asosida tuzilgan xaritalarda yo‘nalishlarni aniqlash qulay, biroq maydonlar va masofalarni tasvirlashda xatolarga yo‘l qo‘yiladi?",["teng burchakli","teng maydonli","teng hajmli","ixtiyoriy"],0]);
GEO_OCHIQ.push(["Qanday andaza asosida tuzilgan xaritalarda burchaklar, shakllarni tasvirlashda ancha xatoliklarga yo‘l qo‘yiladi?",["teng shaklli","ixtiyoriy","teng burchakli","teng maydonli"],3]);
GEO_OCHIQ.push(["Xarita andazalari foydalanilgan yordamchi geometrik sirtlarning turiga qarab qanday turlarga bo‘linadi?",["konussimon, silindrsimon, azimutli","teng shaklli, teng hajmli, teng maydonli","konussimon, silindrsimon, aylana","teng maydonli, teng hajmli, ixtiyoriy"],0]);
GEO_OCHIQ.push(["Materiklar va ayrim davlatlar qanday andazada tasvirlanadi?",["azimutli","silindrsimon","konussimon","teng maydonli"],2]);
GEO_OCHIQ.push(["Dunyo xaritalari qanday andazada tuzilgan?",["ixtiyoriy","konussimon","silindrsimon","azimutli"],2]);

/* ===== 21-to‘plam ===== */
GEO_OCHIQ.push(["Bizga eng yaqin yulduz bo‘lgan Quyoshning diametri necha million kilometrga teng?",["1,12 mln km","1,39 mln km","1,55 mln km","2,01 mln km"],1]);
GEO_OCHIQ.push(["Quyosh sistemasining necha foizidan ortiq massasi aynan Quyoshning o‘zida to‘plangan?",["90 % dan ortiq","95 % dan ortiq","98 % dan ortiq","99 % dan ortiq"],3]);
GEO_OCHIQ.push(["Quyosh sistemasida nechta asteroid borligi aytilgan?",["20 000 dan ortiq","30 000 dan ortiq","40 000 dan ortiq","50 000 dan ortiq"],2]);
GEO_OCHIQ.push(["Yerning aylanish o‘qi orbita tekisligiga nisbatan necha gradus burchak hosil qiladi?",["15°","23,5°","45°","66,5°"],3]);
GEO_OCHIQ.push(["Oyning massasi Yer massasidan necha marta kichik?",["40 marta","60 marta","81 marta","99 marta"],2]);
GEO_OCHIQ.push(["Oy Yer atrofida ellips orbita bo‘ylab necha sutkada aylanib chiqadi?",["28,24 sutka","27,32 sutka","29,5 sutka","29,7 sutka"],1]);
GEO_OCHIQ.push(["Quyosh sistemasida nechta yo‘ldosh mavjudligi qayd etilgan?",["100 dan ortiq","120 dan ortiq","160 dan ortiq","200 dan ortiq"],2]);
GEO_OCHIQ.push(["Oyning o‘rtacha zichligi nechaga teng?",["5,52 g/sm³","3,34 g/sm³","1,08 g/sm³","5,97 g/sm³"],1]);
GEO_OCHIQ.push(["Quyoshdan tarqaladigan issiqlikning qancha qismi Yerga yetib keladi?",["milliarddan bir qismi","milliarddan ikki qismi","yuz milliondan uch qismi","milliarddan besh qismi"],1]);
GEO_OCHIQ.push(["Quyosh sistemasida taxminan nechta kometa mavjud?",["500 mingga yaqin","1 millionga yaqin","2 millionga yaqin","5 millionga yaqin"],1]);
GEO_OCHIQ.push(["Oyning radiusi necha kilometrga teng?",["1738 km","2136 km","6378 km","6356 km"],0]);
GEO_OCHIQ.push(["Oy Yerdan qancha masofada (o‘rtacha) uzoqlikda joylashgan?",["150 ming km","384 ming km","400 ming km","1,39 mln km"],1]);
GEO_OCHIQ.push(["O‘rta Osiyo o‘lkasining eng shimoliy nuqtasi qaysi kenglikda va qayer yaqinida joylashgan?",["34° shimoliy kenglik, Hindukush tog‘larida","53,8° shimoliy kenglik, Ayritov yaqinida","48° shimoliy kenglik, Qo‘stanoygacha","50,3° sharqiy uzunlik, Tubqarag‘ay burnida"],1]);
GEO_OCHIQ.push(["Yer aylanishining burchak tezligi 1 soatda necha gradusga teng?",["1° ga","15° ga","66,5° ga","360° ga"],1]);
GEO_OCHIQ.push(["O‘lkaning (O‘rta Osiyoning) eng janubiy nuqtasi qaysi tog‘lar va tizmalar tutashgan joy (34° shimoliy kenglik)ga to‘g‘ri keladi?",["Hindukush tog‘larining g‘arbiy tarmog‘i bo‘lgan Mug‘ojar va Ustyurt tog‘lariga","Atlas va Alp tog‘lariga","Hindukush tog‘larining g‘arbiy tarmog‘i bo‘lgan Safedko‘h va Nishopur tog‘lariga","Savir va O‘rkashar tog‘lariga"],2]);
GEO_OCHIQ.push(["12 balli seysmik shkalaning qaysi ballida bino va mebel tebranib, uyqudagi kishilar uyg‘onib ketadi?",["3 ballida","4 ballida","5 ballida","6 ballida"],2]);
GEO_OCHIQ.push(["12 balli seysmik shkalaning «Yakson etuvchi» darajasida infratuzilmada qanday asosiy o‘zgarishlar sodir bo‘ladi?",["to‘g‘on to‘siqlari ishdan chiqadi, temiryo‘llar bukiladi, yer yuzida eni 1 m gacha yoriqlar paydo bo‘ladi","ko‘prik, to‘g‘on va temiryo‘llar butunlay buziladi, yer yuzida keng va chuqur jarliklar hosil bo‘ladi","yer yuzi qiyofasi va relyefi butunlay o‘zgaradi, daryolar o‘zanini o‘zgartiradi","A va B javoblar to‘g‘ri"],0]);
GEO_OCHIQ.push(["12 balli seysmik shkalada «Vayron qiluvchi» deb nomlangan zilzila kuchi necha ballga teng?",["7 ballga","8 ballga","9 ballga","10 ballga"],1]);
GEO_OCHIQ.push(["12 balli («O‘ta halokatli») zilzilaning boshqa darajalardan ajratib turuvchi asosiy tavsifi qaysi?",["g‘isht va betondan ishlangan uylarning butunlay buzilishi","yer yuzi qiyofasi, relyefining o‘zgarishi va daryolarning o‘zanini o‘zgartirishi","tog‘larda surilmalar va o‘pirilishlar yuz berishi","yer yuzida keng va chuqur jarliklarning hosil bo‘lishi"],1]);
GEO_OCHIQ.push(["Vujudga kelishiga ko‘ra quruqlik bilan bog‘liq yotqiziqlar nima deb ataladi?",["akkumulyativ yotqiziqlar","jigarrang okean loyqasi","terrigen yotqiziqlar","qizil tusli okean gili"],2]);
GEO_OCHIQ.push(["12 balli seysmik shkalaga ko‘ra qaysi balli zilzilada yangi ko‘llar hosil bo‘ladi?",["9 ballida","10 ballida","11 ballida","12 ballida"],1]);

/* ===== 22-to‘plam ===== */
GEO_OCHIQ.push(["Rasmda ko‘rsatilgan shamol turini aniqlang.",["Briz","Musson","Passat","Fyon"],1,"gx22_v1"]);
GEO_OCHIQ.push(["Ushbu rasmda vulqon krateri va vulqon kanali qaysi raqamlarda ko‘rsatilgan?",["3, 2","1, 4","5, 6","5, 2"],0,"gx22_v2"]);
GEO_OCHIQ.push(["Toshkent viloyatining qaysi tumanlari asosan sabzavot va meva yetishtirishga ixtisoslashgan?",["Yangiyo‘l, Qibray, Bo‘stonliq, Parkent","Parkent, G‘azalkent, Angren, Nurobod","Bekobod, Do‘stobod, Chinoz, Chirchiq","Piskent, Oqqo‘rg‘on, Bo‘ka, Olmaliq"],0]);
GEO_OCHIQ.push(["Pachkamar suv ombori qaysi daryoning oqimini tartibga solish maqsadida qurilgan?",["Qashqadaryoning","G‘uzordaryoning","Oqsuvdaryoning","Tanxozdaryoning"],1]);
GEO_OCHIQ.push(["X asrning oxirida Shimoliy Amerika materigining shimoli-sharqiy qismini va Grenlandiya orolini kim o‘rgandi?",["A. Makkenzi","Jon Kabot","G. Gudzon","Erik Rauda"],3]);
GEO_OCHIQ.push(["To‘rg‘ay supasimon o‘lkasining janubiy qismi, Qozog‘iston past tog‘larining juda katta janubiy qismida qanday tabiat zonasi tarkib topgan?",["Dasht","Cho‘l","Chalacho‘l","Adir"],2]);
GEO_OCHIQ.push(["Mamlakatimizdagi birinchi paxta tozalash zavodi qayerda bunyod etilgan?",["Samarqand","Toshkent","Namangan","Bekobod"],1]);
GEO_OCHIQ.push(["Guri suv ombori qaysi daryoda barpo etilgan?",["Karuna","Volga","Niger","Missisipi"],0]);

/* ===== 23-to‘plam ===== */
GEO_OCHIQ.push(["1823–1825-yillarda Dunyo okeani bo‘ylab ekspeditsiyada marjon orollarining kelib chiqishini o‘rgangan olim kim?",["E. Lens","O. E. Kotsebu","A. Gumboldt","R. Amundsen"],1]);
GEO_OCHIQ.push(["Okean chuqurligini o‘lchash uchun birinchi bor batometrni qo‘llagan fizik olimni toping.",["O. E. Kotsebu","A. Gumboldt","Ch. Layel","E. Lens"],3]);
GEO_OCHIQ.push(["Afrikaning ichki qismlarini o‘rgangan tadqiqotchi kim?",["R. Piri","D. Livingston","P. P. Semyonov-Tyanshanskiy","A. Gumboldt"],1]);
GEO_OCHIQ.push(["Kimning boshchiligida O‘rta Osiyoning ichki hududlari o‘rganilgan?",["D. Livingston","O. E. Kotsebu","F. F. Bellinsgauzen","P. P. Semyonov-Tyanshanskiy"],3]);
GEO_OCHIQ.push(["1909-yilda Shimoliy qutbni zabt etgan sayyohni aniqlang.",["R. Amundsen","R. Piri","E. Lens","Ch. Layel"],1]);
GEO_OCHIQ.push(["1911-yilda Janubiy qutbni birinchi bo‘lib egallagan tadqiqotchi kim?",["R. Piri","F. F. Bellinsgauzen","R. Amundsen","O. E. Kotsebu"],2]);
GEO_OCHIQ.push(["Aleksandr Gumboldt o‘zining ko‘p yillik tadqiqot ma’lumotlarini umumlashtirib, qaysi yirik ko‘p jildlik asarlarni yozgan?",["\"Geografiya asoslari\" va \"Tabiat\"","\"Tabiat manzarasi\" va \"Kosmos\"","\"Sayohatnoma\" va \"Ekspeditsiya\"","\"Dunyo okeani\" va \"Kosmos\""],1]);
GEO_OCHIQ.push(["Tabiatni bir butun, qat’iy qonuniyatli va uzluksiz rivojlanadigan tizim sifatida qarab, \"yangi geografiya\"ga asos solgan olim kim?",["E. Lens","O. E. Kotsebu","A. Gumboldt","Ch. Layel"],2]);
GEO_OCHIQ.push(["Quyosh sistemasining Galaktika markazigacha bo‘lgan masofasi necha yorug‘lik yiliga teng?",["10–15 ming yorug‘lik yiliga","23–28 ming yorug‘lik yiliga","35–40 ming yorug‘lik yiliga","50–60 ming yorug‘lik yiliga"],1]);
GEO_OCHIQ.push(["Quyosh sistemasi Galaktika markazi atrofida qanday tezlik bilan harakatlanadi?",["100–120 km/s","180–220 km/s","200–220 km/s","250–300 km/s"],2]);
GEO_OCHIQ.push(["Quyosh sistemasi Galaktika markazi atrofida bir marta to‘liq aylanib chiqishi uchun necha million yil ketadi?",["200–220 mln yil","180–200 mln yil","200–230 mln yil","180–220 mln yil"],3]);
GEO_OCHIQ.push(["Yerdagi tektonik sikllarning davomiyligi necha million yil deb hisoblanadi?",["100 mln yil","150 mln yil","200 mln yil","250 mln yil"],2]);
GEO_OCHIQ.push(["Tabiat zonalligi ta’limoti qaysi olim tomonidan ishlab chiqilgan?",["Ch. Layel","V. A. Vernadskiy","V. V. Dokuchayev","A. A. Grigoryev"],2]);
GEO_OCHIQ.push(["Kim tomonidan geografik qobiq ta’limoti ishlab chiqilgan?",["Ch. Layel","V. V. Dokuchayev","V. A. Vernadskiy","A. A. Grigoryev"],3]);
GEO_OCHIQ.push(["Qaysi olim tomonidan biosfera ta’limoti yaratildi?",["V. A. Vernadskiy","Ch. Layel","V. V. Dokuchayev","A. A. Grigoryev"],0]);
GEO_OCHIQ.push(["\"Kosmografiyaga kirish\" nomli asar qaysi olimga tegishli?",["S. Myunsterga","A. Gumboldtga","M. Valdzemullerga","M. Lomonosovga"],2]);
GEO_OCHIQ.push(["\"Kosmografiya\" nomli asar qaysi olimga tegishli?",["S. Myunsterga","A. Gumboldtga","M. Valdzemullerga","A. A. Grigoryevga"],0]);
GEO_OCHIQ.push(["\"Kosmos\" nomli asar qaysi olimga tegishli?",["S. Myunsterga","A. Gumboldtga","M. Valdzemullerga","M. Lomonosovga"],1]);

/* ===== 24-to‘plam ===== */
GEO_OCHIQ.push(["Yer po‘sti va mantiya oralig‘idagi chegarani kim aniqlagan?",["1912-yilda Andriya Moxorovichich","1909-yilda xorvat Andriya Moxorovichich","1907-yilda rus Laptevlar","1912-yilda Vegener"],1]);
GEO_OCHIQ.push(["Mobilizm g‘oyasini ishlab chiqqan shaxsni aniqlang.",["A. Vegener 1912-yil","Moxorovichich 1909-yil","Laptevlar 1820-yil","Bretan"],0]);
GEO_OCHIQ.push(["\"Dunyo okeani\" atamasini fanga kim kiritdi?",["Y. M. Shokalskiy 1917-yilda","Moxorovichich 1909-yilda","Vegener 1912-yilda","T.j.y"],0]);
GEO_OCHIQ.push(["Qaysi shaxs Dunyo okeanini 5 ta qismga ajratgan?",["B. Varenius 1650-yilda","Moxorovichich 1912-yilda","Vegener 1909-yilda","Shokalskiy 1917-yilda"],0]);
GEO_OCHIQ.push(["Afrikaning shimoliy va sharqiy sohillarini, Nil havzasini, Sahroi Kabirning g‘arbiy qismini, Niger daryosining yuqori oqimidan o‘rta oqimigacha o‘rgangan qaysi shaxs?",["Ibn Battuta","David Livingston","Yunker","Stenli"],0]);
GEO_OCHIQ.push(["Janubiy Afrikani g‘arbdan sharqqa kesib o‘tdi. Zambezi daryosini tekshirdi, bu daryoda katta va go‘zal sharsharani topib, qirolicha Viktoriya nomi bilan atadi. Kongo daryosining yuqori oqimini, Nyasa ko‘lini, Kalaxari cho‘lini o‘rgandi. Bu qaysi shaxs?",["David Livingston","Stenli","Nikolay Vavilov","T.j.y"],0]);
GEO_OCHIQ.push(["Qaysi shaxs Zanzibar orolini, Viktoriya ko‘lini va Nil daryosining boshlanish irmog‘i Kagera ekanligini aniqladi, Lualaba va Kongo daryolarini quyi oqimiga qadar o‘rgandi?",["G. M. Stenli","Vavilov","Ibn Battuta","Livingston"],0]);
GEO_OCHIQ.push(["Qaysi shaxs XIX asr oxirida Markaziy va Sharqiy Afrikaga sayohat qildi, turli tadqiqotlar o‘tkazdi va qiziqarli ma’lumotlar to‘pladi?",["Vasiliy Yunker","Livingston","Ibn Battuta","Stenli"],0]);
GEO_OCHIQ.push(["1926–1927-yillarda materikning shimoli-sharqiy qismlariga madaniy o‘simliklarni o‘rganish uchun ekspeditsiya tashkil etib, 6000 dan ortiq madaniy o‘simlik namunasini to‘plagan va Efiopiya qimmatli qattiq bug‘doy navining vatani ekanligini aniqlagan shaxs kim?",["N. Vavilov","Yunker","Stenli","Ibn Battuta"],0]);
GEO_OCHIQ.push(["Janubiy okean deb nom bergan qaysi shaxs?",["V. Balboa","Makarov","Jak Iv Kusto","Vasko da Gama"],0]);
GEO_OCHIQ.push(["Okeaniya orollari, aholisi haqida qiziqarli ma’lumotlar to‘pladi. Okeaniya tabiati va aholisini o‘rganishda kimning hissasi katta?",["N. N. Mikluxo-Maklay","Stenli","Yunker","Golovin, Litke"],0]);
GEO_OCHIQ.push(["Janubiy Amerikani tekshirgan dastlabki olimlardan biri nemis geografi va sayyohi kim bo‘lgan va u fransuz botanigi qaysi shaxs bilan birga XVIII–XIX asr chegarasida materik tabiatini o‘rganish uchun ekspeditsiya uyushtirdi?",["A. Gumboldt","E. Bonplan","A va B","A. Rubsov"],2]);
GEO_OCHIQ.push(["XIX asr boshlarida va XX asr boshlarida rossiyalik qaysi shaxslar Janubiy Amerikaga ekspeditsiya uyushtirib, qimmatli ma’lumotlar to‘plashdi?",["N. Rubsov","G. Langsdorf","N. Vavilov","A, B, C"],3]);
GEO_OCHIQ.push(["XV asr oxirida qaysi shaxs Nyufaundlend orolini va Labrador yarimorolini kashf qildi?",["Jon Kabot","Gudzon","Makkenzi","A. Chirikov"],0]);
GEO_OCHIQ.push(["Angliyalik dengizchi va sayyohlar XVIII asrda materikning sharqiy va shimoliy qismlarini o‘rgandi. XX asrda qaysi shaxs materikning shimoliy qirg‘oqlarini birinchi bo‘lib o‘rgandi va Yerning shimoliy magnit qutbining geografik o‘rnini aniqladi?",["G. Gudzon","A. Makkenzi","R. Amundsen","Aleksey Chirikov","A, B, C"],4]);
GEO_OCHIQ.push(["XVIII asr o‘rtalarida qaysi shaxslar Aleut orollari bo‘ylab suzishdi?",["Vitus Bering","Aleksey Chirikov","A va B","Grigoriy Shelexov"],2]);
GEO_OCHIQ.push(["Qaysi shaxs rus manzilgohiga asos soldi?",["Grigoriy Shelexov","Bering","Chukotka","Vityaz"],0]);
GEO_OCHIQ.push(["Qaysi shaxs \"qayrilgan dengiz\" nomini bergan?",["Pifey","Gerodot","Ptolemey","Eratosfen"],0]);
GEO_OCHIQ.push(["Yunoncha \"Borey\" – shimoldagi shamollar xudosi deb kim atagan?",["Giperborey","Pifey","Aristotel","Eratosfen"],0]);
GEO_OCHIQ.push(["Okeanni o‘rganishda kimlar tashkil etgan ekspeditsiyalar muhim ahamiyatga ega bo‘ldi? Shuningdek, qaysi shaxslar Shimoliy qutbni birinchi bo‘lib zabt etdi (1903–1906-y., 1918–1920-y.) va boshqa qimmatli ma’lumotlar to‘pladi?",["Pyotr Lomonosov","Shved olimi Nordenshyold","Nansen, Makarov","Amundsen, Piri","Hammasi"],4]);
GEO_OCHIQ.push(["Qaysi rus sayyohi yevropaliklardan birinchi bo‘lib Tyanshanga ikki marta sayohat qilgan, Markaziy Osiyodagi Tyanshan tog‘larining chegarasini, undagi balandlik mintaqalarini birinchi aniqlagan va bu yerda qor chegarasi Alp tog‘laridan baland ekanligini qayd etgan?",["Semyonov-Tyanshanskiy","Stenli","Gudzon","Arafur"],0]);

/* ===== 25-to‘plam ===== */
GEO_OCHIQ.push(["Rivojlangan mamlakatlarda aholi jon boshiga YaIM necha AQSH dollaridan ortiq bo‘lishi kerak?",["15 000","20 000","25 000","30 000"],2]);
GEO_OCHIQ.push(["Jahon mamlakatlari iqtisodiy rivojlanish darajasiga ko‘ra nechta yirik blokka bo‘linadi?",["2 ta","3 ta","4 ta","5 ta"],1]);
GEO_OCHIQ.push(["2020-yil ma’lumotlariga ko‘ra, rivojlanayotgan mamlakatlarda qancha aholi yashaydi?",["4,5 mlrd kishi","5,5 mlrd kishi","6,5 mlrd kishi","7,5 mlrd kishi"],2]);
GEO_OCHIQ.push(["2020-yil ma’lumotlariga ko‘ra, Qatar aholi jon boshiga to‘g‘ri keladigan YaIM miqdori bo‘yicha jahonda nechanchi o‘rinni egallagan?",["2-o‘rin","3-o‘rin","4-o‘rin","5-o‘rin"],2]);
GEO_OCHIQ.push(["2020-yil ma’lumotlariga ko‘ra, Qatarda aholi jon boshiga YaIM miqdori necha AQSH dollarini tashkil etgan?",["42 154","48 947","63 078","89 949"],3]);
GEO_OCHIQ.push(["AQSH aholi jon boshiga YaIM ko‘rsatkichi bo‘yicha dunyoda nechanchi o‘rinda turadi?",["2-o‘rin","9-o‘rin","15-o‘rin","25-o‘rin"],0]);
GEO_OCHIQ.push(["AQSHning aholi soni necha million kishi?",["38,2","83,2","126,0","329,9"],3]);
GEO_OCHIQ.push(["Kanadaning umumiy maydoni necha ming km²?",["377,9","9984,6","357,4","9519,4"],1]);
GEO_OCHIQ.push(["Yaponiyaning aholi soni necha million kishini tashkil etadi?",["126,0","38,2","377,9","83,2","329,9"],0]);
GEO_OCHIQ.push(["Insoniyat tarixida ma’lumotlarga ko‘ra, jami necha mingdan ortiq urushlar ro‘y bergan?",["10 mingdan ortiq","14 mingdan ortiq","20 mingdan ortiq","70 mingdan ortiq"],1]);
GEO_OCHIQ.push(["XX asrdagi Ikkinchi jahon urushida jami qancha kishi qurbon bo‘lgan?",["14 milliondan ziyod","24 milliondan ziyod","48 milliondan ziyod","70 milliondan ziyod"],3]);
GEO_OCHIQ.push(["Hozirgi kunda dunyoda necha milliardgacha kishi ocharchilikka duch kelmoqda?",["1 milliarddan ortiq","1,2 milliardgacha","1,5 milliardgacha","1,7 milliardgacha"],1]);
GEO_OCHIQ.push(["Dunyoda qancha aholining o‘rtacha umr ko‘rishi 60 yoshga yetmaydi?",["1 milliarddan ortiq","1,2 milliardgacha","1,5 milliardgacha","1,7 milliarddan ortiq"],3]);
GEO_OCHIQ.push(["Necha milliard odamning tibbiy xizmatlardan foydalanish imkoniyati umuman yo‘q?",["1 milliarddan ortiq","1,2 milliardgacha","1,5 milliard","1,7 milliarddan ortiq"],2]);
GEO_OCHIQ.push(["Dunyoda qancha odam o‘ta kambag‘al turmush kechirmoqda?",["200 milliondan ortiq","800 milliondan ziyod","1 milliarddan ortiq","1,7 milliarddan ortiq"],2]);
GEO_OCHIQ.push(["Dunyoda necha milliondan ortiq bola maktab ta’limini olmayapti?",["24 milliondan ortiq","34 milliondan ortiq","48 milliondan ortiq","200 milliondan ortiq"],3]);
GEO_OCHIQ.push(["Jahonda qancha kishi mutloq savodsiz (yozish va o‘qishni bilmaydi)?",["200 milliondan ortiq","800 milliondan ziyod","1 milliarddan ortiq","1,2 milliardgacha"],1]);
GEO_OCHIQ.push(["BMTning eng sust rivojlangan mamlakatlar ro‘yxati dastlab qaysi yilda tuzilgan?",["1961-yilda","1971-yilda","2014-yilda","2017-yilda"],1]);
GEO_OCHIQ.push(["BMTning sust rivojlangan davlatlar ro‘yxatiga dastlab nechta davlat kiritilgan edi?",["11 davlat","24 davlat","34 davlat","48 davlat"],1]);
GEO_OCHIQ.push(["2014-yil holatiga ko‘ra sust rivojlangan 48 ta mamlakatdan nechtasi Afrika qit’asida joylashgan?",["1 tasi","4 tasi","9 tasi","34 tasi"],3]);

/* ===== 26-to‘plam ===== */
GEO_OCHIQ.push(["2014-yilgi holatga ko‘ra BMTning sust rivojlangan mamlakatlar ro‘yxatida nechta davlat qayd qilingan?",["24 davlat","34 davlat","48 davlat","93 davlat"],2]);
GEO_OCHIQ.push(["Sust rivojlangan 48 ta mamlakatdan nechtasi Osiyoda joylashgan?",["1 tasi","4 tasi","9 tasi","34 tasi"],2]);
GEO_OCHIQ.push(["Eng sust rivojlangan davlatlardan nechtasi Okeaniyada joylashgan?",["1 tasi","4 tasi","9 tasi","34 tasi"],1]);
GEO_OCHIQ.push(["Lotin Amerikasidan eng sust rivojlangan mamlakatlar toifasiga nechta davlat kiritilgan?",["1 ta","4 ta","9 ta","34 ta"],0]);
GEO_OCHIQ.push(["Sust rivojlangan mamlakatlar toifasida jahon aholisining necha foizdan ortig‘i yashaydi?",["9 foizdan ortig‘i","11 foizdan ortig‘i","24 foizdan ortig‘i","34 foizdan ortig‘i"],1]);
GEO_OCHIQ.push(["Dunyoda jami necha milliardga yaqin odamlar yetarli darajada oziq-ovqat mahsulotlarini iste’mol qila olmayotganlar hisoblanadi?",["1,1 milliardga yaqin","1,2 milliardga yaqin","1,5 milliardga yaqin","2,1 milliardga yaqin"],1]);
GEO_OCHIQ.push(["Energetika muammosini hal etishda ko‘pchilik mutaxassislar fikricha, asosan nechta yo‘nalishdagi harakatlar bilan bog‘liq chora-tadbirlar ko‘rilishi lozim?",["2 ta","3 ta","4 ta","5 ta"],0]);

/* ===== 27-to‘plam ===== */
GEO_OCHIQ.push(["\"Okrug keskin kontinental iqlim xususiyatiga ega bo‘lib, qishi quruq va sovuq, yozi issiq va quruq, sovuq bo‘lmaydigan kunlar O‘zbekiston bo‘yicha eng qisqa, tabiiy geografik okrugida doimiy oqar suvlar yo‘q. O‘simligi, asosan, shuvoq va sho‘ralardan iborat\". Matndagi ma’lumotlar qaysi tabiiy geografik okrugga oid ekanligini aniqlang.",["Quyi Amudaryo","Ustyurt","Qizilqum","Quyi Zarafshon"],1]);
GEO_OCHIQ.push(["Qashqadaryo tabiiy geografik okrugining iqlimiga oid ma’lumotni toping.",["Tabiiy geografik okrugning yozi issiq, quruq va davomli, qishi nisbatan iliq. Okrug shimol va sharq tomondan tog‘lar bilan o‘ralgan. Bu esa Arktika va Sibirdan keladigan sovuq havo massalarining yo‘lini to‘sadi. Aksincha, g‘arbiy qismi ochiq bo‘lib, mo‘tadil dengiz va subtropik havo massalarining to‘siqsiz kirib kelishiga imkon beradi.","Okrug iqlimi O‘zbekiston tekislik qismiga o‘xshash bo‘lib, qishi sovuq, yozi issiq va quruq, yog‘in kam. Okrug janubda joylashganligidan hamda shimol, shimoli sharqdan tog‘lar bilan o‘ralganligidan qishda havo haddan tashqari sovib ketmaydi.","Okrugning tekislikdan iborat ekanligi va janubida tog‘ tizmalarining mavjudligi natijasida iqlimi o‘ziga xosdir. Qishda Arktika va Sibir sovuq havo massalari bemalol to‘siqsiz tekislikka kirib keladi. Bu sovuq havo massalari okrug janubidagi tog‘lardan o‘ta olmay, tekislik qismida to‘planadi.","Okrug qisqa va beqaror qish bilan, quruq, seroftob, jazirama yoz bilan tavsiflanadi. Qishda okrug hududiga shimoldan sovuq, quruq shamollarning esishi tufayli hamma qismida yanvarning o‘rtacha harorati 0°C dan past bo‘ladi."],0]);
GEO_OCHIQ.push(["Yerosti suvlari har xil davr yotqiziqlari orasida uchraydi. Paleogen va neogen davri yotqiziqlari orasidagi 140–150 m chuqurdan chuchuk suv chiqadi. Bo‘r davri yotqiziqlari orasidagi 1000–2000 m chuqurdan chiquvchi mineral shifobaxsh suv harorati +60…+70°C ga yetadi. Matndagi ma’lumotlar qaysi tabiiy geografik okrugga oid ekanligini aniqlang.",["Surxondaryo","Quyi Zarafshon","Qizilqum","O‘rta Zarafshon"],0]);
GEO_OCHIQ.push(["O‘rta Zarafshon tabiiy geografik okrugiga oid ma’lumotlarni aniqlang.",["Okrug tektonik botiqda joylashib, negizi paleozoy erasi ohaktosh slaneslaridan iborat bo‘lib, uning ustini mezozoy va kaynazoy eralarining cho‘kindi jins hamda mergellari, gillari va qumtoshlari qoplab olgan.","Okrugning vodiy qismi sharqdan g‘arb tomonga pasayib boradi. Vodiysining o‘ziga xos xususiyati shundaki, u goh kengayadi, goh torayadi. Yerusti tuzilishi yassi tekislikdan iborat.","Tog‘lari gersin burmalanishida ko‘tarilgan, hozirgi relyefi yangi tektonik harakatlar natijasida shakllangan. Tektonik botiq daryo yotqiziqlari bilan qoplangan. Tog‘oldi qismida konussimon yoyilmalar keng tarqalgan.","Tog‘li qismi kaynozoy erasida burmalangan bo‘lib, kristalli slanes, ohaktosh, marmar, granit kabi jinslardan tarkib topgan. Tog‘larida karst jarayoni rivojlangan."],1]);
GEO_OCHIQ.push(["Qashqadaryo tabiiy geografik okrugiga oid ma’lumotlarni aniqlang.",["Paleogen davrida dengiz suvining chekinishi tufayli quruqlikka aylangan, so‘ngra daryo o‘zanini yuvib, chuqurlashtirib, qator qayirlar hosil qilgan.","Okrugning vodiy qismi sharqdan g‘arb tomonga pasayib boradi. Vodiysining o‘ziga xos xususiyati shundaki, u goh kengayadi, goh torayadi.","Tog‘lari gersin burmalanishida ko‘tarilgan, hozirgi relyefi yangi tektonik harakatlar natijasida shakllangan. Tektonik botiq daryo yotqiziqlari bilan qoplangan. Tog‘oldi qismida konussimon yoyilmalar tarqalgan.","Tog‘li qismi paleozoy erasida burmalangan bo‘lib, kristalli slanes, ohaktosh, marmar, granit kabi jinslardan tarkib topgan. Tog‘larida karst jarayoni rivojlangan."],3]);
GEO_OCHIQ.push(["Hudud, asosan, gersin tog‘ hosil bo‘lish jarayonida ko‘tarilib, so‘nggi tektonik jarayonlar ta’sirida turli katta-kichik yo‘nalishdagi yer yoriqlari vujudga kelgan. Bu okrugda yangi tektonik jarayon hozir ham davom etayotganligi tufayli zilzilalar bo‘lib turadi. Bu qaysi okrug ekanligini toping.",["O‘rta Zarafshon","Qizilqum","Chirchiq-Ohangaron","Quyi Zarafshon"],2]);
GEO_OCHIQ.push(["\"Okrug qisqa va beqaror qish bilan, quruq, seroftob, jazirama yoz bilan tavsiflanadi. Okrugda ba’zan qishda Sibir antisiklonining kirib qolishi va Arktika havo massasining u bilan bir davrga to‘g‘ri kelishi tufayli harorat –20…–25°C gacha pasayadi. Aksincha, yozda havo qizib, eng yuqori harorat +44…+45°C ga ko‘tariladi\". Matndagi ma’lumotlar qaysi tabiiy geografik okrug iqlimiga oid ekanligini aniqlang.",["Quyi Amudaryo","Mirzacho‘l","Qizilqum","Quyi Zarafshon"],3]);
GEO_OCHIQ.push(["Qaysi okrugda yaylovlardan noto‘g‘ri foydalanish, o‘simliklarga nisbatan noto‘g‘ri munosabatda bo‘lish, yerlarni noto‘g‘ri sug‘orilishi tufayli shamol va irrigatsiya eroziyalari sodir bo‘lmoqda?",["Quyi Amudaryo","Mirzacho‘l","Qizilqum","O‘rta Zarafshon"],3]);
GEO_OCHIQ.push(["\"Okrugning tekislik qismida yillik yog‘in miqdori 200–350 mm atrofida bo‘lib, tog‘larga tomon orta boradi. Okrugning janubiy qismidagi tog‘larning shimoliy yonbag‘rida yillik o‘rtacha yog‘in miqdori 350–400 mm ni tashkil etadi. Sharqidagi tog‘ tizmasining shimoliy yonbag‘rida esa 600 mm dan ortadi. Tog‘larda qor ko‘p yog‘adi, uning qalinligi 50 sm dan 1 m gacha yetadi\". Matndagi ma’lumotlar qaysi tabiiy geografik okrugga oid ekanligini aniqlang.",["Surxondaryo","Mirzacho‘l","Qashqadaryo","O‘rta Zarafshon"],1]);
GEO_OCHIQ.push(["Quyi Zarafshon tabiiy geografik okrugiga oid ma’lumotlarni aniqlang.",["Okrug shimoli sharqdan janubi g‘arbga taxminan 170 km cho‘zilgan bo‘lib, shu yo‘nalishda pasayib boradi. Shakliga ko‘ra vodiy uchburchakka o‘xshash. Uning janubi-g‘arbiy qismi keng bo‘lib, 110–115 km ga, shimoli sharqi tor bo‘lib, 15–20 km ga teng.","Okrugda eng ko‘p tarqalgan jinslar to‘rtlamchi davrga xos bo‘lib, ular genetik jihatdan daryo, vaqtincha oqar suvlar, ko‘l va shamol natijasida vujudga kelgan shag‘al, qum, qumoq, lyoss gillaridan iborat. Vohalari atrofida esa eol yo‘l bilan vujudga kelgan qumliklar joylashgan.","Tog‘lari gersin burmalanishida ko‘tarilgan, hozirgi relyefi yangi tektonik harakatlar natijasida shakllangan. Tektonik botiq daryo yotqiziqlari bilan qoplangan. Tog‘oldi qismida konussimon yoyilmalar tarqalgan.","Tog‘li qismi kaynozoy erasida burmalangan bo‘lib, kristalli slanes, ohaktosh, marmar, granit kabi jinslardan tarkib topgan. Tog‘larida karst jarayoni rivojlangan."],1]);
GEO_OCHIQ.push(["\"Yog‘in okrug bo‘yicha notekis taqsimlangan, eng kam yog‘in tekislik qismining janubi g‘arbiga to‘g‘ri kelib, 250–300 mm bo‘lsa, shimoli sharq tomon ortib borib, 550 mm dan tog‘ tizmalarining nam havoga ro‘para yonbag‘irlariga 2000 mm gacha yog‘in tushadi\". Qaysi okrug iqlimiga xos ekanligini toping.",["Chirchiq-Ohangaron","Mirzacho‘l","Qashqadaryo","O‘rta Zarafshon"],0]);
GEO_OCHIQ.push(["\"Okrugning yer yuzasi bir xil emas. U janubi-sharqdan shimoli g‘arbga tomon pasayib boradi. Okrugning geologik tuzilishi jihatidan ham bir xil emas. Uning janubidagi tog‘ tizmalari paleozoy erasining gersin tog‘ hosil bo‘lishi jarayonida ko‘tarilgan. Alp tog‘ hosil bo‘lish jarayonida o‘sha pasaygan tog‘lar qayta ko‘tarilib, dengiz suvi chekinib, okrugning tekislik qismi ham quruqlikka aylangan\". Ushbu ta’rif qaysi tabiiy geografik okrug geologik tuzilishiga xos ekanligini toping.",["Mirzacho‘l","Chirchiq-Ohangaron","O‘rta Zarafshon","Qashqadaryo"],0]);
GEO_OCHIQ.push(["Ustyurt tabiiy geografik okrugiga oid ma’lumotlarni aniqlang.",["O‘zbekistonda eng kam yog‘in tushadigan joy","Sovuq bo‘lmaydigan kunlar O‘zbekiston bo‘yicha eng qisqa","O‘zbekiston bo‘yicha vegetatsiya davridagi ijobiy haroratlar yig‘indisi eng yuqori","O‘zbekiston bo‘yicha eng yuqori harorat kuzatilgan"],1]);
GEO_OCHIQ.push(["Farg‘ona tabiiy geografik okrugiga oid ma’lumotlarni aniqlang.",["Paleogen davrida dengiz suvining chekinishi tufayli quruqlikka aylangan, so‘ngra daryo o‘zanini yuvib, chuqurlashtirib, qator qayirlar hosil qilgan.","Okrugning vodiy qismi sharqdan g‘arb tomonga pasayib boradi. Vodiysining o‘ziga xos xususiyati shundaki, u goh kengayadi, goh torayadi.","Tog‘lari gersin burmalanishida ko‘tarilgan, hozirgi relyefi yangi tektonik harakatlar natijasida shakllangan. Tektonik botiq daryo yotqiziqlari bilan qoplangan. Tog‘oldi qismida konussimon yoyilmalar keng tarqalgan.","Tog‘li qismi kaynozoy erasida burmalangan bo‘lib, kristalli slanes, ohaktosh, marmar, granit kabi jinslardan tarkib topgan. Tog‘larida karst jarayoni rivojlangan."],2]);
GEO_OCHIQ.push(["Orol tabiiy geografik okrugiga oid ma’lumotlar berilgan javobni toping.",["Hududida 2005-yilda 50 ming km² qo‘shimcha quruqlik hosil bo‘ldi. Okrugda may oyidan boshlab shimoli g‘arbdan, g‘arbdan esuvchi havo massasi ta’sirida havo isib, yog‘ingarchilik boshlanadi. Okrugga yiliga o‘rtacha 80–100 mm atrofida yog‘in yog‘ib, uning 45 foizi bahorga, 10–11 foizi yozga to‘g‘ri keladi.","Okrugda o‘rtacha yillik yog‘in miqdori 80–100 mm. Bunga asosiy sabab, okeanlardan uzoqda, yerusti tekis, yozgi haroratining yuqoriligidir. Yog‘in, asosan, bahorga to‘g‘ri keladi. Chunki bu davrlarda g‘arbdan va shimoli-g‘arbdan nam havo massalari esib turadi. Qor qoplami uncha qalin emas, lekin mumkin bo‘lgan bug‘lanish yog‘inga nisbatan 20 marta ko‘p.","Okrugga yog‘in kam tushadi, uning o‘rtacha yillik miqdori 100–120 mm. Yog‘inni, asosan, g‘arbiy va shimoli g‘arbiy havo massalari olib keladi. Eng ko‘p yog‘in bahorga, eng kami qishga to‘g‘ri keladi. Qor juda kam yog‘ib, izg‘irinli shamollar uni uchirib ketishi natijasida yer yuzasi muzlaydi.","Okrug hududida yoz jazirama issiq, quruq bo‘ladi. Yillik yog‘in miqdori 75–100 mm atrofida bo‘ladi. Yog‘inning asosiy qismi bahorda va qishda tushadi. Lekin mumkin bo‘lgan bug‘lanish 1000–1500 mm ga yetadi."],0]);
GEO_OCHIQ.push(["\"Okrugning markaziy qismi botiqdan iborat bo‘lib, nisbatan tekis. Botiqning markaziy qismida cho‘llar bo‘lib, qum relyef shakllari — do‘nglar, o‘simlik bilan mustahkamlangan tepaliklar va kichik ko‘chib yuruvchi qumlik (barxan)lar mavjud. Hozir o‘sha qum do‘nglari va tepaliklarning ko‘p qismi tekislanib, ekinzorlarga aylantirilgan\". Bu qaysi okrug ekanligini toping.",["Qashqadaryo","Qizilqum","Farg‘ona","Quyi Zarafshon"],2]);
GEO_OCHIQ.push(["Farg‘ona tabiiy geografik okrugiga oid ma’lumotlar berilgan javobni toping.",["Okrug tektonik botiqda joylashib, neogen davrining oxiri va quyi antropogen davrida dengizdan bo‘shab, quruqlikka aylangan. So‘ngra atrofidagi tog‘lardan boshlanadigan daryolar olib kelgan qum, gil, lyossimon jinslar bilan qoplangan.","Okrug Turon plitasining cho‘kkan qismida joylashib, neogen davrida dengiz suvining chekinishi tufayli quruqlikka aylangan, so‘ngra daryo o‘zanini yuvib, chuqurlashtirib, qator qayirlar hosil qilgan. Bu qayirlar gil, qumoq va lyossimon jinslardan tashkil topgan.","Okrug tektonik botiqda joylashib, negizi paleozoy erasi ohaktosh slaneslaridan iborat bo‘lib, uning ustini mezozoy va kaynazoy eralarining cho‘kindi jins hamda mergellari, gillari va qumtoshlari qoplab olgan.","Okrug geologik tuzilishi jihatidan bir xil emas. Uning janubidagi tog‘ tizmalari paleozoy erasining gersin tog‘ hosil bo‘lishi jarayonida ko‘tarilgan. Bu davrda okrugning tekislik qismi dengiz suvi ostida bo‘lgan. So‘ngra ko‘tarilgan tog‘lar yemirilib pasaygan, natijada, ularning quyi qismlarini dengiz suvi bosgan."],0]);
GEO_OCHIQ.push(["\"Botaniklar bu tabiiy geografik okrug tog‘laridagi o‘simliklarni o‘rganish jarayonida, 2500 m dan yuqoridagi subalp va alp o‘tloqlarida mushukquyruq, taran, qiziltikan, Alp lolasi kabi o‘simliklar borligini aniqlashdi\". Bu qaysi okrug ekanligini toping.",["Qashqadaryo","Chirchiq-Ohangaron","Farg‘ona","O‘rta Zarafshon"],1]);
GEO_OCHIQ.push(["Quyi Amudaryo tabiiy geografik okrugiga oid ma’lumotlar berilgan javobni toping.",["Okrug yer yuzasi tuzilishi jihatidan janubi sharqdan shimoli g‘arbga qarab pasayib boradi. Uning o‘rtacha mutlaq balandligi 200–300 m bo‘lsa, janubi sharqida 350–400 m, shimoli g‘arbida esa 100 m ga tushib qoladi.","Okrug janubi sharqdan shimoli g‘arb tomonga cho‘zilgan bo‘lib, shu tomon kengayib, pasayib boradi. Okrug negizida bo‘r davri yotqiziqlari joylashgan. Uning ustilarini paleogen, neogen va antropogen alluvial yotqiziqlari qoplab olgan.","Okrug tektonik botiqda joylashib, negizi paleozoy erasi ohaktosh slaneslaridan iborat bo‘lib, uning ustini mezozoy va kaynazoy eralarining cho‘kindi jins hamda mergellari, gillari va qumtoshlari qoplab olgan.","Eng ko‘p tarqalgan jinslar to‘rtlamchi davrga xos bo‘lib, ular genetik jihatdan Zarafshon daryosi, vaqtincha oqar suvlar, ko‘l va shamol natijasida vujudga kelgan shag‘al, qum, qumoq, lyoss gillaridan iborat."],1]);
GEO_OCHIQ.push(["\"Yerusti tuzilishi jihatidan eng yosh tekislik bo‘lib, eol qumliklari va sho‘rxoklardan iborat. Eol qumliklari barxanlardan, egri-bugri shakldagi qumliklardan iborat bo‘lib, sho‘rxoklar orasida chuqurligi 0–1 m ga yetuvchi botiqchalar mavjud. Okrugga yiliga o‘rtacha 80–100 mm atrofida yog‘in yog‘ib, uning 45 foizi bahorga, 10–11 foizi yozga to‘g‘ri keladi\". Bu qaysi okrug ekanligini toping.",["Ustyurt","Orol","Quyi Amudaryo","Qizilqum"],1]);
GEO_OCHIQ.push(["\"Okrug tekislik qismining 200–300 m chuqurliklarida chuchuk suv qatlami, 1500–3000 m chuqurliklarda esa mineral termik suv qatlami mavjudligi aniqlangan\". Qaysi okrugga xos ekanligini toping.",["Chirchiq-Ohangaron","Mirzacho‘l","Qashqadaryo","O‘rta Zarafshon"],1]);
GEO_OCHIQ.push(["\"Okrugda eng ko‘p tarqalgan jinslar to‘rtlamchi davrga xos bo‘lib, ular genetik jihatdan daryo, vaqtincha oqar suvlar, ko‘l va shamol natijasida vujudga kelgan shag‘al, qum, qumoq, lyoss gillaridan iborat. Vohalari atrofida esa eol yo‘l bilan vujudga kelgan qumliklar joylashgan\". Qaysi okrugga xos ekanligini toping.",["Quyi Zarafshon","Mirzacho‘l","Quyi Amudaryo","O‘rta Zarafshon"],0]);
GEO_OCHIQ.push(["Mirzacho‘l tabiiy geografik okrugiga tegishli bo‘lgan ma’lumotlarni toping.",["O‘lkaning 300–500 m balandliklarida och tusli bo‘z tuproqlar (chirindi miqdori 1–1,5 foiz), 500–800 m balandliklarda oddiy bo‘z tuproq (chirindi miqdori 1,5–2,5 foiz) tarqalgan.","Okrugning 350–400 m balandlikkacha bo‘lgan tekisliklarida och bo‘z tuproqlar tarqalib, chirindi miqdori 1,5–1,7 foiz, 350–400 m dan baland bo‘lgan tog‘oldi tekisliklarida esa tipik bo‘z tuproqlar joylashib, chirindi miqdori 1,7–2,5 foizga boradi.","Okrug tekislik qismi atroflaridagi nisbatan baland joylarda och bo‘z tuproq keng tarqalgan. Adirlarda esa oddiy va to‘q bo‘z tuproqlar uchraydi. Bu tuproq turlari 1200 m gacha bo‘lgan baland joylarda tarqalgan.","Okrugda geografik o‘rniga ko‘ra, och va tipik bo‘z tuproqlar tarqalgan bo‘lib, ular orasidagi chegara taxminan 450 m mutlaq balandlikdan o‘tadi. Okrugning asosiy qismini sug‘oriladigan och bo‘z va bo‘z-o‘tloq tuproqlar egallagan."],3]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar qaysi tabiiy geografik okrugga tegishli ekanligini aniqlang.<br>— okrug negizi paleozoy erasi ohaktosh slaneslaridan iborat;<br>— okrugda nisbatan ko‘p tarqalgan jinslar kaynozoy erasining yotqiziqlari hisoblanadi;<br>— okrugning 1000–1500 m chuqurliklarida issiq mineral suvlar mavjud;<br>— okrugda eng ko‘p tarqalgan o‘simlik turi shuvoq hisoblanadi.",["Quyi Amudaryo","O‘rta Zarafshon","Qizilqum","Quyi Zarafshon"],3]);
GEO_OCHIQ.push(["Farg‘ona tabiiy geografik okrugi adir o‘simliklari berilgan qatorni toping.",["Qo‘ng‘irbosh, bug‘doyiq, kakra, bo‘tako‘z, marmarak, sariqchoy, butalardan do‘lana, tog‘olcha, achchiq bodom uchraydi.","Adirlarda bahorda rang, qo‘ng‘irbosh, shaytonkavush o‘sadi, ular yozda qurib qoladi, so‘ngra oq kavrak, oq shuvoq, qizil burgan, chalov o‘sishni davom ettiradi.","Adirda ko‘proq efemer o‘simliklar hamda shuvoq, kavrak, qo‘ziquloq, bir yillik astragal, javdar, bug‘doyiq kabilar mavjud.","Adirlarida shuvoq, burg‘un, bug‘doyiq, kavrak, oqquray, qo‘ziquloq, qurg‘oqchil va toshloq yerlarda bir yillik astragal, chiy kabilar o‘sadi."],1]);
GEO_OCHIQ.push(["\"Okrugning 1200–2500 m balandliklarida qo‘ng‘ir tog‘-o‘rmon va jigarrang tog‘-o‘rmon tuproqlari tarqalgan bo‘lib, uning tarkibida chirindi miqdori 10 foizga boradi\". Matnda berilgan ma’lumotlar qaysi okrugga oid ekanligini toping.",["O‘rta Zarafshon","Chirchiq-Ohangaron","Farg‘ona","Mirzacho‘l"],1]);
GEO_OCHIQ.push(["\"Okrugni har ikki tomonidan o‘rab turgan tog‘lar esa paleozoy erasining ohaktosh, kristall va slanes kabi tog‘ jinslaridan tarkib topgan. Bu jinslar gersin tog‘ hosil bo‘lish jarayonida burmalangan\". Matnda berilgan ma’lumotlar qaysi okrugga oid ekanligini toping.",["Chirchiq-Ohangaron","O‘rta Zarafshon","Surxondaryo","Mirzacho‘l"],1]);

/* ===== 28-to‘plam ===== */
GEO_OCHIQ.push(["Qaysi sanada Quyosh 23,5° shimoliy kenglikda qoq tepa (zenit)da bo‘ladi?",["22-dekabr","21-mart","22-iyun","22-iyul"],2]);
GEO_OCHIQ.push(["Qaysi sanalarda Quyosh Shimoliy va Janubiy yarimsharni bir xilda yoritadi va isitadi?",["20-mart, 22-sentabr","21-mart, 21-sentabr","21-mart, 23-sentabr","21-mart, 22-sentabr"],2]);
GEO_OCHIQ.push(["Qaysi sanadan boshlab Quyosh Yerning Shimoliy yarimshar qismida asta-sekin yuqoriga ko‘tarila boshlaydi?",["21-mart","23-sentabr","22-dekabr","22-mart"],2]);
GEO_OCHIQ.push(["Qaysi sanada Quyosh Shimoliy yarimsharda eng baland ko‘tariladi?",["22-dekabr","21-mart","22-iyun","23-sentabr"],2]);
GEO_OCHIQ.push(["23,5° shimoliy kenglikdan o‘tgan parallel chizig‘i qanday ataladi?",["ekvator","Shimoliy tropik","Janubiy tropik","Shimoliy qutbiy doira"],1]);
GEO_OCHIQ.push(["Quyosh 22-dekabr kuni qaysi kenglikda tik tepadan o‘tadi?",["23,5° janubiy kenglikdan","23,5° shimoliy kenglikdan","66,5° janubiy kenglikdan","66,5° shimoliy kenglikdan"],0]);
GEO_OCHIQ.push(["Janubiy yarimshardagi 23,5° dan o‘tgan parallel chizig‘i nima deyiladi?",["Janubiy qutbiy doira","Shimoliy tropik","Janubiy tropik","Shimoliy qutbiy doira"],2]);
GEO_OCHIQ.push(["22-iyun kuni qaysi geografik kenglikda bir sutka – 24 soat davomida Quyosh botmaydi?",["23,5° shimoliy kenglikda","66,5° janubiy kenglikda","23,5° janubiy kenglikda","66,5° shimoliy kenglikda"],3]);
GEO_OCHIQ.push(["Qaysi sanada 66,5° janubiy kenglikda bir sutka – 24 soat davomida Quyosh botmaydi?",["23-sentabr","22-dekabr","21-mart","22-iyul"],1]);
GEO_OCHIQ.push(["21-mart, 23-sentabr sanalarida Quyosh Yerning qaysi qismida zenit (qoq tepa)da bo‘ladi?",["23,5° shimoliy kenglikda","66,5° shimoliy kenglikda","23,5° janubiy kenglikda","Ekvator chizig‘ida"],3]);
GEO_OCHIQ.push(["Migratsiya necha xil bo‘ladi?",["2 xil","3 xil","4 xil","5 xil"],0]);
GEO_OCHIQ.push(["O‘zbekistonda 2018-yil holatiga ko‘ra tabiiy o‘sish necha ming kishini tashkil etadi?",["513,6 ming kishini","613,6 ming kishini","714,6 ming kishini","655,6 ming kishini"],1]);
GEO_OCHIQ.push(["O‘zbekistonda 2016-yil holatiga ko‘ra aholining o‘rtacha umr davomiyligi necha yoshni tashkil etadi?",["73,8 yoshni","76,2 yoshni","71,4 yoshni","75,1 yoshni"],0]);
GEO_OCHIQ.push(["O‘zbekistonda 2016-yil holatiga ko‘ra aholining o‘rtacha umr davomiyligi ayollarda necha yoshni tashkil etadi?",["71,4 yoshni","73,8 yoshni","76,2 yoshni","75,1 yoshni"],2]);
GEO_OCHIQ.push(["O‘zbekistonda 2018-yil holatiga ko‘ra mexanik ko‘payish har ming kishi hisobiga necha kishini tashkil etadi?",["−10,2 kishini","−12,2 kishini","−14,2 kishini","−16,2 kishini"],3]);
GEO_OCHIQ.push(["O‘zbekistonda 1991-yil qancha bola tug‘ilgan?",["723,4 ming","701,9 ming","513 ming","716 ming"],0]);
GEO_OCHIQ.push(["O‘zbekistonda 2001-yil qancha bola tug‘ilgan?",["723,4 ming","701,9 ming","716 ming","513 ming"],3]);
GEO_OCHIQ.push(["O‘zbekiston aholisi nechanchi yili 24,4 mln kishiga yetgan?",["1990-yilda","2000-yilda","2008-yilda","1980-yilda"],1]);
GEO_OCHIQ.push(["O‘zbekistonda 2018-yil holatiga ko‘ra immigratsiya har ming kishiga necha kishini tashkil etadi?",["2,1 kishini","2,5 kishini","2,6 kishini","2,8 kishini"],3]);
GEO_OCHIQ.push(["O‘zbekistonda 2018-yil holatiga ko‘ra emigratsiya har ming kishiga necha kishini tashkil etadi?",["17 kishini","18 kishini","19 kishini","20 kishini"],2]);

/* ===== 29-to‘plam ===== */
GEO_OCHIQ.push(["Osiyodagi qaysi davlat BMT tomonidan alohida o‘tish iqtisodiyotidagi davlatlar guruhiga kiritiladi?",["Xitoy","Yaponiya","Mongoliya","Koreya"],2]);
GEO_OCHIQ.push(["Sharqiy Yevropadagi qaysi davlatlar BMT tomonidan alohida o‘tish iqtisodiyotidagi davlatlar guruhiga kiritiladi?",["Slovakiya, Bolgariya","Malta, Italiya","Andorra, Belgiya","Daniya, Norvegiya"],0]);
GEO_OCHIQ.push(["Quyidagi qaysi davlatlar BMT tomonidan alohida o‘tish iqtisodiyotidagi davlatlar guruhiga kiritiladi?<br>1) Vengriya; 2) Italiya; 3) Chexiya; 4) Daniya; 5) Finlandiya; 6) Lyuksemburg; 7) Polsha; 8) Meksika; 9) Irlandiya.",["2, 4, 8","1, 5, 9","2, 6, 9","1, 3, 7"],3]);
GEO_OCHIQ.push(["Siyosiy boshqaruvning nechta asosiy shakli ajratiladi?",["2 ta","3 ta","4 ta","5 ta"],0]);
GEO_OCHIQ.push(["Respublika boshqaruv shaklining keng tarqalishi nechanchi asrga to‘g‘ri keladi?",["XIX asrning boshiga","XIX asrning ikkinchi yarmiga","XX asrning boshiga","XX asrning ikkinchi yarmiga"],3]);
GEO_OCHIQ.push(["2018-yil holatiga ko‘ra, jahonning siyosiy xaritasida nechta respublika davlatlari mavjud?",["130 ta","140 ta","150 ta","160 ta"],2]);
GEO_OCHIQ.push(["Respublikalar asosan nechta turga bo‘linadi?",["2 ta","3 ta","4 ta","5 ta"],1]);
GEO_OCHIQ.push(["Prezidentlik respublikalariga qaysi davlatlar misol bo‘la oladi?",["Meksika, Argentina","Germaniya, Avstriya","Isroil, Hindiston","Misr, Nikaragua"],0]);
GEO_OCHIQ.push(["Amerika qit’asida joylashgan boshqaruv shakli prezidentlik respublika bo‘lgan davlatlarni toping.",["Kanada, Beliz","Yamayka, Sent-Lyusiya","AQSH, Braziliya","Sent-Kits va Nevis, Barbados"],2]);
GEO_OCHIQ.push(["Quyidagi variantlardan boshqaruv shakli prezidentlik respublika bo‘lgan davlatlarni belgilang.",["Italiya, Bolgariya","Qozog‘iston, O‘zbekiston","Estoniya, Latviya","Hindiston, Pokiston"],1]);
GEO_OCHIQ.push(["Quyidagi qaysi variantda boshqaruv shakli prezidentlik respublika bo‘lgan davlat berilgan?",["Gretsiya","Ummon","Belarus","Avstriya"],2]);
GEO_OCHIQ.push(["Davlatlarning prezidentlik respublikasi boshqaruv shakli eng ko‘p qaysi qit’alarda tarqalgan?",["Antarktidada","Osiyo va Yevropada","Avstraliya va Okeaniyada","Afrika va Amerikada"],3]);
GEO_OCHIQ.push(["Quyidagi qaysi variantda boshqaruv shakli prezidentlik respublika bo‘lgan davlat berilgan?",["Italiya","Indoneziya","Portugaliya","Jazoir","Misr"],1]);
GEO_OCHIQ.push(["Ekvator uzunligi 1:80 000 000 masshtabli xaritada necha santimetrga teng bo‘ladi?",["30 sm","40 sm","50 sm","60 sm"],2]);
GEO_OCHIQ.push(["Quyidagi rasmda berilgan sonlarga javoblarni to‘g‘ri joylashtiring.",["1. Gidrosfera 2. Biosfera 3. Litosferaning g‘ovak pastki qismi","1. Litosferaning yuqori qismi 2. Biosfera 3. Gidrosfera","1. Biosfera 2. Litosferaning yuqori qismi 3. Gidrosfera","1. Gidrosfera 2. Biosfera 3. Litosferaning yuqori qismi"],3,"gx29_v1"]);
GEO_OCHIQ.push(["Modda va energiya almashinishi jarayonining bo‘lib turishi geografik qobiqning nechanchi xususiyati hisoblanadi?",["1-chi","2-chi","3-chi","4-chi"],1]);
GEO_OCHIQ.push(["Geografik qobiqning nechta asosiy xususiyati mavjud?",["2 ta","3 ta","4 ta","5 ta"],1]);
GEO_OCHIQ.push(["Litosfera, gidrosfera, atmosfera va biosferaning doimiy o‘zaro ta’siri geografik qobiqning nechanchi asosiy xususiyati hisoblanadi?",["1-chi","2-chi","3-chi","4-chi"],0]);
GEO_OCHIQ.push(["Atmosferadagi namning to‘liq yangilanishi uchun qancha vaqt kerak bo‘ladi?",["30 kun","10 yil","3000 yil","10 kun"],3]);

/* ===== 30-to‘plam ===== */
GEO_OCHIQ.push(["Geografik qobiqning o‘rtacha qalinligi qancha?",["30–35 km","35–40 km","40–45 km","50–55 km"],0]);
GEO_OCHIQ.push(["Geografik qobiqda organik hayot, jumladan insoniyat jamiyatining mavjudligi uning nechanchi asosiy xususiyatiga kiradi?",["1-chi","2-chi","3-chi","Hamma javob to‘g‘ri"],2]);

/* ===== 31-to‘plam ===== */
GEO_OCHIQ.push(["Quyidagi rasmda Kanberra shahrida (uning geografik koordinatasi 35° janubiy kenglik, 149° sharqiy uzunlik) Quyoshning A holatdagi ko‘rinishi qaysi sanaga to‘g‘ri keladi?",["22-dekabrga","23-sentabrga","21-martga","22-iyunga"],0,"gx31_v1"]);
GEO_OCHIQ.push(["Quyidagi rasmda Nyu-York shahrida (uning geografik koordinatasi 40° shimoliy kenglik, 75° g‘arbiy uzunlik) Quyoshning A holatdagi ko‘rinishi qaysi sanaga to‘g‘ri keladi?",["21-mart","22-iyun","23-sentabr","22-dekabr"],1,"gx31_v1"]);
GEO_OCHIQ.push(["Shimoliy yarimsharda bahorgi va kuzgi teng kunlik qaysi sanalarga to‘g‘ri keladi?",["20-mart, 22-sentabr","21-mart, 21-sentabr","21-mart, 23-sentabr","21-mart, 22-sentabr"],2]);
GEO_OCHIQ.push(["Shimoliy yarimsharda Quyoshning qishki turish kuni qaysi sanaga to‘g‘ri keladi?",["21-mart","22-iyul","23-sentabr","22-dekabr"],3]);
GEO_OCHIQ.push(["Quyosh qaysi sanada Shimoliy yarimsharda ufq ustida eng baland ko‘tariladi, kunduz uzun, tun esa qisqa bo‘ladi?",["21-martda","22-iyulda","22-dekabrda","22-iyunda"],3]);
GEO_OCHIQ.push(["Qaysi sanada Shimoliy yarimsharda kunduz eng qisqa, tun esa eng uzun bo‘ladi?",["23-sentabrda","22-iyulda","22-dekabrda","22-iyunda"],2]);
GEO_OCHIQ.push(["Qutbiy doiralar qaysi geografik kengliklardan o‘tkaziladi?",["23,5° shimoliy va janubiy kengliklar","56,5° shimoliy va janubiy kengliklar","66,5° shimoliy va janubiy kengliklar","76,5° shimoliy va janubiy kengliklar"],2]);
GEO_OCHIQ.push(["Tropik chiziqlar qaysi geografik kengliklardan o‘tkaziladi?",["23,5° shimoliy va janubiy kengliklar","56,5° shimoliy va janubiy kengliklar","66,5° shimoliy va janubiy kengliklar","76,5° shimoliy va janubiy kengliklar"],0]);
GEO_OCHIQ.push(["Quyidagi masshtablardan sonli masshtablarni ajrating:<br>1) 1:25 000; 2) 1 sm da 35 km; 3) 1 sm da 400 m; 4) 1:2 000 000; 5) 1 sm da 560 km.",["1 va 3","2, 3 va 5","1 va 4","2 va 5"],2]);
GEO_OCHIQ.push(["Quyidagi masshtablardan nomli masshtablarni ajrating:<br>1) 1:30 000; 2) 1 sm da 25 km; 3) 1:40 000; 4) 1:2 000 000; 5) 1 sm da 560 km.",["1 va 3","2 va 5","1 va 4","2 va 3"],1]);
GEO_OCHIQ.push(["1:100 000 masshtabni nomli masshtabga aylantiring.",["1 sm da 100 m","1 sm da 1 km","1 sm da 10 km","1 sm da 100 km"],1]);
GEO_OCHIQ.push(["1 sm da 700 m qanday masshtab turiga kiradi?",["Sonli masshtab","Chiziqli masshtab","Nomli masshtab","Harfli masshtab"],2]);
GEO_OCHIQ.push(["1:250 000 masshtabni nomli masshtabga aylantiring.",["1 sm da 2,5 km","1 sm da 25 km","1 sm da 250 km","1 sm da 25 000 m"],0]);
GEO_OCHIQ.push(["Daryo uzunligi 1200 km ga teng. Xaritada bu masofa 4 sm bo‘lsa, xarita masshtabini toping.",["1:20 000 000","1:30 000 000","1:25 000 000","1:15 000 000"],1]);
GEO_OCHIQ.push(["Xaritada 3,5 sm bo‘lgan masofa joyda 175 km bo‘lsa, xarita masshtabini aniqlang.",["1:50 000","1:500 000","1:5 000 000","1:50 000 000"],2]);

/* ===== 32-to‘plam ===== */
GEO_OCHIQ.push(["Xaritada 6 sm bo‘lgan masofa joyda 300 km bo‘lsa, xarita masshtabini aniqlang.",["1:50 000","1:500 000","1:5 000 000","1:50 000 000"],2]);
GEO_OCHIQ.push(["1:2 500 000 masshtabda 8 sm chizilgan masofa joyda necha kilometrga teng?",["80 km","20 km","800 km","200 km"],3]);
GEO_OCHIQ.push(["1 sm da 500 m qanday masshtab turiga kiradi?",["Nomli masshtab","Chiziqli masshtab","Sonli masshtab","Harfli masshtab"],0]);
GEO_OCHIQ.push(["2017-yil holatiga ko‘ra Qatar davlatida YaIM aholi jon boshiga qanchadan to‘g‘ri kelgan?",["110 588 AQSH dollari","117 940 AQSH dollari","120 395 AQSH dollari","124 740 AQSH dollari"],3]);
GEO_OCHIQ.push(["Quyidagi qaysi davlatlar yirik industrial-agrar mamlakatlar guruhiga kiritiladi?<br>1) Indoneziya; 2) Xitoy; 3) Eron; 4) Yangi Zelandiya; 5) Belgiya; 6) Ummon; 7) Turkiya; 8) Shveysariya; 9) Bruney.",["1, 3, 7","2, 5, 8","2, 4, 6","1, 7, 9"],0]);
GEO_OCHIQ.push(["2018-yilda O‘zbekistonda tug‘ilganlar soni necha ming kishini tashkil etgan?",["19,0 ming kishi","154,7 ming kishi","613,6 ming kishi","768,3 ming kishi"],3]);
GEO_OCHIQ.push(["O‘zbekistonda 2018-yilgi o‘lim ko‘rsatkichi necha ming kishini tashkil qiladi?",["19,0 ming kishi","154,7 ming kishi","768,3 ming kishi","613,6 ming kishi"],1]);
GEO_OCHIQ.push(["2018-yilda mamlakatga ko‘chib kelganlar (immigratsiya) soni necha ming kishini tashkil etgan?",["2,8 ming kishi","−16,2 ming kishi","19 ming kishi","613,6 ming kishi"],0]);
GEO_OCHIQ.push(["2018-yilda emigratsiya (ko‘chib ketganlar) va immigratsiya (ko‘chib kelganlar) o‘rtasidagi mexanik ko‘payish balansi qanday bo‘lgan (ming kishi)?",["+16,2 ming kishi","−19,0 ming kishi","−16,2 ming kishi","+2,8 ming kishi"],2]);
GEO_OCHIQ.push(["2010-yilda jami aholining o‘rtacha umr davomiyligi necha yoshni tashkil etgan?",["70,6 yoshni","73,0 yoshni","75,1 yoshni","71,8 yoshni"],1]);
GEO_OCHIQ.push(["2000-yilda erkaklar va ayollarning o‘rtacha umr davomiyligi o‘rtasidagi farq necha yoshga teng bo‘lgan?",["2,4 yoshga","3,6 yoshga","4,8 yoshga","5,2 yoshga"],2]);
GEO_OCHIQ.push(["1991-yilda O‘zbekistonda ayollarning o‘rtacha umr davomiyligi necha yoshni tashkil etgan?",["64,4 yosh","66,4 yosh","69,4 yosh","71,7 yosh"],2]);
GEO_OCHIQ.push(["2016-yilda erkaklarning o‘rtacha umr davomiyligi 1991-yilga nisbatan qanchaga oshgan?",["5,0 yilga","6,2 yilga","7,0 yilga","8,5 yilga"],2]);

/* ===== 33-to‘plam ===== */
GEO_OCHIQ.push(["Nechanchi yillargacha sotsialistik tuzum asosida rivojlangan, keyinchalik esa undan voz kechgan Sharqiy Yevropa davlatlari (Polsha, Chexiya, Slovakiya, Vengriya, Bolgariya) hamda Mongoliya BMT tomonidan alohida o‘tish iqtisodiyotidagi davlatlar blokiga birlashtirildi?",["1990-yillargacha","1991-yillargacha","1992-yillargacha","1993-yillargacha"],0]);
GEO_OCHIQ.push(["Quyidagi davlatlardan qaysilari 1973-yilda Yevropa Ittifoqiga (o‘sha paytdagi hamjamiyatga) a’zo bo‘lgan?",["Gretsiya, Irlandiya, Daniya","Irlandiya, Daniya, Buyuk Britaniya","Avstriya, Irlandiya, Daniya","Ispaniya, Daniya, Buyuk Britaniya"],1]);
GEO_OCHIQ.push(["Buyuk Britaniyaning Yevropa Ittifoqi tarkibidan to‘liq ajralib chiqishi qaysi yilda yuz berdi?",["2013-yilda","2016-yilda","2017-yilda","2020-yilda"],3]);
GEO_OCHIQ.push(["1957-yilda imzolangan shartnomaga ko‘ra, qaysi tashkilotlar tashkil etilgan?",["Yevropa Ittifoqi va Mustaqil Davlatlar Hamdo‘stligi","Yevropa iqtisodiy hamkorligi va atom energiyasi bo‘yicha Yevropa hamjamiyati","Shanxay hamkorlik tashkiloti va \"Shanxay beshligi\"","Yevropa ko‘mir va temir ishlab chiqaruvchilar birlashmasi"],1]);
GEO_OCHIQ.push(["2017-yilda qaysi davlatlar Shanxay hamkorlik tashkilotining (SHHT) teng huquqli a’zolariga aylanishdi?",["Rossiya va Xitoy","Hindiston va Pokiston","Mongoliya va Afg‘oniston","Tojikiston va Qirg‘iziston"],1]);
GEO_OCHIQ.push(["Quyidagi davlatlardan qaysi biri 2004-yilda Yevropa Ittifoqiga a’zo bo‘lgan?",["Ruminiya","Polsha","Xorvatiya","Bolgariya"],1]);
GEO_OCHIQ.push(["1986-yilda qaysi davlatlar Yevropa Ittifoqiga a’zo bo‘lishgan?",["Buyuk Britaniya, Daniya, Irlandiya","Avstriya, Shvetsiya, Finlyandiya","Ispaniya, Portugaliya","Ruminiya, Bolgariya"],2]);
GEO_OCHIQ.push(["1995-yilda Yevropa Ittifoqiga a’zo bo‘lgan davlatlar qatori to‘g‘ri ko‘rsatilgan javobni aniqlang.",["Polsha, Chexiya, Vengriya","Kipr, Malta, Xorvatiya","Slovakiya, Sloveniya, Litva","Avstriya, Shvetsiya, Finlyandiya"],3]);
GEO_OCHIQ.push(["Shanxay hamkorlik tashkiloti (SHHT) qaysi yildan boshlab va qaysi davlat a’zo bo‘lganidan so‘ng hozirgi rasmiy nomini oldi?",["1996-yil, Xitoy","2001-yil, O‘zbekiston","2017-yil, Hindiston","2004-yil, Qozog‘iston"],1]);
GEO_OCHIQ.push(["2004-yilda bir vaqtning o‘zida eng ko‘p davlat Yevropa Ittifoqi tashkilotiga a’zo bo‘lgan. Quyidagilardan qaysi biri o‘sha davlatlar qatoriga kirmaydi?",["Vengriya, Slovakiya, Sloveniya","Ruminiya, Bolgariya, Xorvatiya","Kipr, Malta, Polsha","Litva, Latviya, Estoniya"],1]);
GEO_OCHIQ.push(["Ruminiya va Bolgariya davlatlari nechanchi yilda Yevropa Ittifoqi tashkilotiga a’zo bo‘lishgan?",["2004-yilda","2007-yilda","2013-yilda","2016-yilda"],1]);
GEO_OCHIQ.push(["Xorvatiya davlati Yevropa Ittifoqi tashkilotiga nechanchi yilda a’zo bo‘lgan?",["2004-yilda","2007-yilda","2013-yilda","2017-yilda"],2]);
GEO_OCHIQ.push(["Buyuk Britaniyada Yevropa Ittifoqi tarkibidan chiqish bo‘yicha referendum nechanchi yilda o‘tkazilgan?",["2004-yilda","2013-yilda","2016-yilda","2017-yilda"],2]);
GEO_OCHIQ.push(["MDH tashkilotiga nechanchi yilda asos solingan va u o‘z faoliyatini qachondan boshlagan?",["1991-yil 8-dekabrda asos solingan, 1991-yil 21-dekabrda boshlagan","1991-yil 21-dekabrda asos solingan, 1992-yil 1-yanvarda boshlagan","1996-yil 26-aprelda asos solingan, 2001-yilda boshlagan","1991-yil 8-dekabrda asos solingan, 1995-yilda boshlagan"],0]);
GEO_OCHIQ.push(["Yevropa ko‘mir va temir ishlab chiqaruvchilar birlashmasi nechanchi yilda tashkil etilgan?",["1951-yilda","1957-yilda","1967-yilda","1973-yilda"],0]);
GEO_OCHIQ.push(["2001-yilda qaysi davlat tashkilotga a’zo bo‘lganidan so‘ng, uning hozirgi rasmiy nomdagi tashkilot tuzilganligi haqidagi deklaratsiyasi e’lon qilindi?",["Qozog‘iston","O‘zbekiston","Hindiston","Rossiya"],1]);
GEO_OCHIQ.push(["\"Shanxay beshligi\" nechanchi yilda va qaysi shaharda imzolangan kelishuv bilan bog‘liq holda shakllangan?",["2001-yil, Toshkent shahri","1996-yil 26-aprel, Shanxay shahri","2017-yil, Dehli shahri","1991-yil 21-dekabr, Olmaota shahri"],1]);
GEO_OCHIQ.push(["Gretsiya nechanchi yilda Yevropa Ittifoqiga a’zo bo‘lgan?",["1973-yilda","1981-yilda","1986-yilda","1995-yilda"],1]);
GEO_OCHIQ.push(["Hozirgi kunda SHHT yig‘ilishlarida ishtirok etuvchi muloqot hamkor, kuzatuvchi va nomzod davlatlar soni mos ravishda nechta?",["4 ta muloqot hamkor, 4 ta kuzatuvchi, 2 ta nomzod davlat","6 ta muloqot hamkor, 4 ta kuzatuvchi, 2 ta nomzod davlat","6 ta muloqot hamkor, 2 ta kuzatuvchi, 4 ta nomzod davlat","2 ta muloqot hamkor, 6 ta kuzatuvchi, 4 ta nomzod davlat"],1]);

/* ===== 34-to‘plam ===== */
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan tog‘ni aniqlang.",["Quljuqtov","Bo‘kantov","Tomditov","Sulton Uvays"],1,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan tog‘ni aniqlang.",["Sulton Uvays","Quljuqtov","Tomditov","Bo‘kantov"],0,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan tog‘ni aniqlang.",["Quljuqtov","Ovminzatov","Tomditov","Bo‘kantov"],2,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 4 raqami bilan ko‘rsatilgan tog‘ni aniqlang.",["Ovminzatov","Tomditov","Bo‘kantov","Quljuqtov"],0,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 5 raqami bilan ko‘rsatilgan tog‘ni aniqlang.",["Tomditov","Quljuqtov","Ovminzatov","Sulton Uvays"],1,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan tog‘ning eng baland nuqtasi necha metr?",["785 m","974 m","473 m","764 m"],3,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan tog‘ning eng baland nuqtasi necha metr?",["785 m","695 m","764 m","473 m"],3,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan tog‘ning eng baland nuqtasi necha metr?",["473 m","695 m","785 m","974 m"],3,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 4 raqami bilan ko‘rsatilgan tog‘ning eng baland nuqtasi necha metr?",["974 m","695 m","785 m","473 m"],1,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Qizilqum tabiiy geografik okrugi tasvirlangan. 5 raqami bilan ko‘rsatilgan tog‘ning eng baland nuqtasi necha metr?",["695 m","473 m","764 m","785 m"],3,"gx34_qq"]);
GEO_OCHIQ.push(["Qizilqum tabiiy geografik okrugidagi qoldiq tog‘lardan eng balandi qaysi?",["Sulton Uvays (473 m)","Tomditov (974 m)","Ovminzatov (695 m)","Bo‘kantov (764 m)"],1,"gx34_qq"]);
GEO_OCHIQ.push(["Qizilqum tabiiy geografik okrugidagi qoldiq tog‘lar orasida joylashgan botiqlar qatorini toping.",["Mingbuloq, Qoraxotin, Mullali, Oyoqog‘itma","Aydar, Arnasoy, Tuzkon, Sardoba","Dalvarzin, Mirzacho‘l, Qarshi, Sherobod","Sariqamish, Asaka-ovdan, Borsakelmas, Sudochye"],0,"gx34_qq"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Nurota tizmasi","Morguzar tog‘i","Qo‘ytosh tog‘lari","Turkiston tizmasi"],0,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Nurota tizmasi","Turkiston tizmasi","Qo‘ytosh tog‘lari","Morguzar tog‘i"],2,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Morguzar tog‘i","Nurota tizmasi","Turkiston tizmasi","Qo‘ytosh tog‘lari"],0,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. 4 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Morguzar tog‘i","Turkiston tizmasi","Qo‘ytosh tog‘lari","Nurota tizmasi"],1,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. I raqami bilan ko‘rsatilgan ko‘lni aniqlang.",["Tuzkon ko‘li","Sariqamish ko‘li","Aydar ko‘li","Arnasoy ko‘li"],2,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. II raqami bilan ko‘rsatilgan ko‘lni aniqlang.",["Aydar ko‘li","Arnasoy ko‘li","Tuzkon ko‘li","Sariqamish ko‘li"],2,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. III raqami bilan ko‘rsatilgan ko‘lni aniqlang.",["Arnasoy ko‘li","Tuzkon ko‘li","Aydar ko‘li","Sariqamish ko‘li"],0,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Mirzacho‘l tabiiy geografik okrugi tasvirlangan. Jizzax shahri yonidan oqib o‘tuvchi daryoni aniqlang.",["Zarafshon","Chirchiq","Sangzor","Qashqadaryo"],2,"gx34_mz"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Ugom","Piskom","Qurama","Qorjontov"],3,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Chotqol","Qurama","Qorjontov","Ugom"],3,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Piskom","Ko‘ksuv","Qorjontov","Ugom"],0,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 4 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Qorjontov","Ko‘ksuv","Piskom","Ugom"],1,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 5 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Qorjontov","Piskom","Qurama","Chotqol"],3,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 6 raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Ugom","Qurama","Piskom","Ko‘ksuv"],1,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan tizmaning eng baland cho‘qqisini aniqlang.",["Mingbuloq (2834 m)","Beshtor (4299 m)","Boboiob (3769 m)","Katta Chimyon (3309 m)"],0,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan tizmaning eng baland cho‘qqisini aniqlang.",["Mingbuloq (2834 m)","Sayram (4236 m)","Katta Chimyon (3309 m)","Beshtor (4299 m)"],1,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan tizmaning eng baland cho‘qqisini aniqlang.",["Beshtor (4299 m)","Boboiob (3769 m)","Katta Chimyon (3309 m)","Sayram (4236 m)"],0,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 5 raqami bilan ko‘rsatilgan tizmaning eng baland cho‘qqisini aniqlang.",["Boboiob (3769 m)","Mingbuloq (2834 m)","Sayram (4236 m)","Katta Chimyon (3309 m)"],3,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada Chirchiq-Ohangaron tabiiy geografik okrugi tasvirlangan. 6 raqami bilan ko‘rsatilgan tizmaning eng baland cho‘qqisini aniqlang.",["Boboiob (3769 m)","Beshtor (4299 m)","Katta Chimyon (3309 m)","Sayram (4236 m)"],0,"gx34_ch"]);
GEO_OCHIQ.push(["Chirchiq-Ohangaron tabiiy geografik okrugidagi tizmalarning eng baland cho‘qqisi qaysi?",["Sayram (4236 m)","Boboiob (3769 m)","Katta Chimyon (3309 m)","Beshtor (4299 m)"],3,"gx34_ch"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. I raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Turkiston tizmasi","Ziyovuddin tog‘i","Nurota tizmasi","Qo‘ytosh tog‘lari"],2,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. II raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Qo‘ytosh tog‘lari","Turkiston tizmasi","Ziyovuddin tog‘i","Zarafshon tizmasi"],0,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. III raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Nurota tizmasi","Morguzar tog‘i","Ziyovuddin tog‘i","Turkiston tizmasi"],1,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. IV raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Zirabuloq tog‘i","Zarafshon tizmasi","Ziyovuddin tog‘i","Qo‘ytosh tog‘lari"],2,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. V raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Nurota tizmasi","Turkiston tizmasi","Zarafshon tizmasi","Zirabuloq tog‘i"],3,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. VI raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Nurota tizmasi","Zarafshon tizmasi","Zirabuloq tog‘i","Turkiston tizmasi"],1,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. VII raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Nurota tizmasi","Zarafshon tizmasi","Qo‘ytosh tog‘lari","Turkiston tizmasi"],3,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. Ko‘k rang bilan ko‘rsatilgan suv omborini aniqlang.",["Tolimarjon suv ombori","Kattaqo‘rg‘on suv ombori","Chimqo‘rg‘on suv ombori","Pachkamar suv ombori"],1,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada O‘rta Zarafshon tabiiy geografik okrugi tasvirlangan. Okrug hududida tasvirlangan daryolar qatorini toping.",["Chirchiq, Ohangaron","Qashqadaryo, G‘uzordaryo","Zarafshon, Oqdaryo, Qoradaryo","Sangzor, Zarafshon, Sirdaryo"],2,"gx34_oz"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. I raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Chaqchar tizmasi","Ziyovuddin tog‘i","Zirabuloq tog‘i","Zarafshon tizmasi"],1,"gx34_qd"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. II raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Chaqchar tizmasi","Zirabuloq tog‘i","Ziyovuddin tog‘i","Zarafshon tizmasi"],1,"gx34_qd"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. III raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Zirabuloq tog‘i","Hisor tizmasi","Zarafshon tizmasi","Chaqchar tizmasi"],2,"gx34_qd"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. IV raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Zirabuloq tog‘i","Hisor tizmasi","Zarafshon tizmasi","Chaqchar tizmasi"],1,"gx34_qd"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. V raqami bilan ko‘rsatilgan tog‘ tizmasini aniqlang.",["Chaqchar tizmasi","Hisor tizmasi","Zarafshon tizmasi","Zirabuloq tog‘i"],0,"gx34_qd"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. Okrug hududida tasvirlangan daryolar qatorini toping.",["Chirchiq, Ohangaron","Sangzor, Qoradaryo","Qashqadaryo, G‘uzordaryo","Zarafshon, Oqdaryo"],2,"gx34_qd"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan suv omborini aniqlang.",["Pachkamar suv ombori","Chimqo‘rg‘on suv ombori","Tolimarjon suv ombori","Kattaqo‘rg‘on suv ombori"],1,"gx34_sv"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan suv omborini aniqlang.",["Tolimarjon suv ombori","Kattaqo‘rg‘on suv ombori","Pachkamar suv ombori","Chimqo‘rg‘on suv ombori"],2,"gx34_sv"]);
GEO_OCHIQ.push(["Xaritada Qashqadaryo tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan suv omborini aniqlang.",["Tolimarjon suv ombori","Kattaqo‘rg‘on suv ombori","Pachkamar suv ombori","Chimqo‘rg‘on suv ombori"],0,"gx34_sv"]);
GEO_OCHIQ.push(["Xaritada Ustyurt tabiiy geografik okrugi tasvirlangan. 1 raqami bilan ko‘rsatilgan obyektni aniqlang.",["Qorabovur qirlari","Sariqamish ko‘li","Borsakelmas sho‘rxoki","Asaka-ovdan botig‘i"],1,"gx34_us"]);
GEO_OCHIQ.push(["Xaritada Ustyurt tabiiy geografik okrugi tasvirlangan. 2 raqami bilan ko‘rsatilgan obyektni aniqlang.",["Asaka-ovdan botig‘i","Orol dengizi","Borsakelmas sho‘rxoki","Qorabovur qirlari"],0,"gx34_us"]);
GEO_OCHIQ.push(["Xaritada Ustyurt tabiiy geografik okrugi tasvirlangan. 3 raqami bilan ko‘rsatilgan obyektni aniqlang.",["Asaka-ovdan botig‘i","Borsakelmas sho‘rxoki","Sudochye ko‘li","Qorabovur qirlari"],3,"gx34_us"]);
GEO_OCHIQ.push(["Xaritada Ustyurt tabiiy geografik okrugi tasvirlangan. 4 raqami bilan ko‘rsatilgan obyektni aniqlang.",["Orol dengizi","Sariqamish ko‘li","Qorabovur qirlari","Borsakelmas sho‘rxoki"],3,"gx34_us"]);
GEO_OCHIQ.push(["Xaritada Ustyurt tabiiy geografik okrugi tasvirlangan. 5 raqami bilan ko‘rsatilgan obyektni aniqlang.",["Sariqamish ko‘li","Qorabovur qirlari","Borsakelmas sho‘rxoki","Orol dengizi"],3,"gx34_us"]);
GEO_OCHIQ.push(["Xaritada Ustyurt tabiiy geografik okrugi tasvirlangan. 6 raqami bilan ko‘rsatilgan obyektni aniqlang.",["Qorabovur qirlari","Borsakelmas sho‘rxoki","Sariqamish ko‘li","Sudochye ko‘li"],3,"gx34_us"]);

/* ===== 35-to‘plam ===== */
GEO_OCHIQ.push(["O‘zbekiston Respublikasining aholisi 2019-yil holatiga ko‘ra necha kishidan ortgan?",["34,8 mln","27,9 mln","33,2 mln","31,1 mln"],2]);
GEO_OCHIQ.push(["Birlashgan Millatlar Tashkilotining aholishunoslik jamg‘armasi ma’lumotlariga ko‘ra (2018-y.) O‘zbekiston aholi soni bo‘yicha jahonda nechanchi o‘rinda turadi?",["41-o‘rin","42-o‘rin","43-o‘rin","44-o‘rin"],3]);
GEO_OCHIQ.push(["O‘zbekiston aholisi qachon 11,8 mln kishiga yetgan?",["1959-yilda","1970-yilda","1980-yilda","1939-yilda"],1]);
GEO_OCHIQ.push(["O‘zbekiston aholisi nechanchi yillarda mos ravishda 4,3 mln va 20,3 mln kishi bo‘lgan?",["1865-yil va 1990-yil","1924-yil va 1990-yil","1900-yil va 2005-yil","1924-yil va 2000-yil"],1]);
GEO_OCHIQ.push(["O‘zbekiston aholisi 1939-yilda qanchani tashkil etgan?",["4,3 mln","6,3 mln","6,4 mln","8,1 mln"],2]);
GEO_OCHIQ.push(["O‘zbekiston aholisi nechanchi yillarda mos ravishda 6,3 mln va 24,4 mln kishi bo‘lgan?",["1959-yil va 2008-yil","1939-yil va 2000-yil","1950-yil va 2000-yil","1939-yil va 1990-yil"],2]);
GEO_OCHIQ.push(["O‘zbekiston aholisi soni qaysi yillar oralig‘ida 6,4 mln kishidan 6,3 mln kishiga biroz kamaygan?",["1939–1950-yillar","2000–2008-yillar","1950–1959-yillar","1900–1924-yillar"],0]);
GEO_OCHIQ.push(["1970-yilda 11,8 mln bo‘lgan O‘zbekiston aholisi soni 1980-yilda necha million kishiga yetgan?",["27,1 mln kishiga","20,3 mln kishiga","15,8 mln kishiga","24,4 mln kishiga"],2]);
GEO_OCHIQ.push(["O‘zbekiston aholisi nechanchi yillarda mos ravishda 8,1 mln va 27,1 mln kishi bo‘lgan?",["1959-yil va 2008-yil","1970-yil va 2019-yil","1959-yil va 2019-yil","2000-yil va 2008-yil"],0]);
GEO_OCHIQ.push(["O‘zbekiston aholisi nechanchi yillarda mos ravishda 4,0 mln va 33,2 mln kishi bo‘lgan?",["1865-yil va 2008-yil","1900-yil va 2008-yil","1924-yil va 2019-yil","1900-yil va 2019-yil"],3]);
GEO_OCHIQ.push(["Quyidagi variantlardan qaysi davlat \"Katta yettilik\" davlatlar guruhiga kiritilmaydi?",["Italiya","Kanada","Yaponiya","Ispaniya"],3]);
GEO_OCHIQ.push(["Quyidagi variantlardan \"Ko‘chirilgan kapitalizm mamlakatlari\" guruhini tashkil etuvchi davlatlarni belgilang.",["Xitoy, Hindiston","Braziliya, Meksika","Avstraliya, Yangi Zelandiya","Eron, Pokiston"],2]);
GEO_OCHIQ.push(["Quyidagi qaysi variantda ko‘chirilgan kapitalizm mamlakatlari berilgan?<br>1) Xitoy; 2) JAR; 3) Meksika; 4) Hindiston; 5) Isroil; 6) Singapur.",["1, 2","2, 5","3, 5","2, 6","2, 4"],1]);
GEO_OCHIQ.push(["Jahon aholisining eng katta qismi qaysi davlatlar guruhida yashaydi?",["rivojlangan","rivojlanayotgan","o‘tish iqtisodiyotidagi","qoloq"],1]);
GEO_OCHIQ.push(["2018-yil ma’lumotlariga ko‘ra jahon aholisining qanchasi rivojlanayotgan mamlakatlarda yashaydi?",["2 mlrd kishi","4 mlrd kishi","6 mlrd kishi","8 mlrd kishi"],2]);
GEO_OCHIQ.push(["Ulkan tabiiy-resurs, demografik va iqtisodiy salohiyatga ega bo‘lgan qaysi davlatlar tayanch rivojlanayotgan mamlakatlar guruhini tashkil qiladi?",["Yaponiya, Xitoy","Hindiston, Pokiston","Braziliya, Meksika","Avstraliya, Yangi Zelandiya"],2]);
GEO_OCHIQ.push(["Ulkan tabiiy-resurs, demografik va iqtisodiy salohiyatga ega bo‘lgan qaysi davlatlar tayanch rivojlanayotgan mamlakatlar guruhini tashkil qiladi?",["Xitoy, Hindiston","Yaponiya, Xitoy","Hindiston, Pokiston","Eron, Pokiston"],0]);
GEO_OCHIQ.push(["Tashkil etilgan ilk davrda Yevropa ko‘mir va temir ishlab chiqaruvchilar birlashmasiga nechta davlat a’zo bo‘lgan?",["4 ta","6 ta","9 ta","12 ta"],1]);
GEO_OCHIQ.push(["Yevropa ko‘mir va temir birlashmasining oltita ta’sischi davlati nechanchi yilda Yevropa iqtisodiy hamkorligi va atom energiyasi bo‘yicha Yevropa hamjamiyatini tashkil etishdi?",["1981-yilda","1951-yilda","1957-yilda","1973-yilda"],2]);
GEO_OCHIQ.push(["Polsha, Chexiya, Vengriya kabi bir vaqtning o‘zida eng ko‘p (10 ta) davlat nechanchi yilda Yevropa Ittifoqiga qabul qilindi?",["1986-yilda","2004-yilda","2007-yilda","2013-yilda"],1]);
GEO_OCHIQ.push(["1945-yilgi ma’lumotlarga ko‘ra, Yevropa qit’asida nechta mustaqil davlat bo‘lgan?",["24 ta","31 ta","33 ta","43 ta"],1]);
GEO_OCHIQ.push(["1945-yilda Osiyo qit’asidagi mustaqil davlatlar soni nechta bo‘lgan?",["9 ta","18 ta","40 ta","47 ta"],1]);
GEO_OCHIQ.push(["1945-yilgi statistikaga ko‘ra, Afrika qit’asida nechta mustaqil davlat qayd etilgan?",["3 ta","4 ta","52 ta","53 ta"],0]);
GEO_OCHIQ.push(["1945-yilda Amerika qit’asidagi mustaqil davlatlar soni nechta bo‘lgan?",["20 ta","22 ta","35 ta","76 ta"],1]);
GEO_OCHIQ.push(["1945-yilda Avstraliya va Okeaniya qit’asida nechta mustaqil davlat mavjud edi?",["0 ta","2 ta","12 ta","13 ta"],1]);
GEO_OCHIQ.push(["1945-yilda jahon bo‘yicha jami mustaqil davlatlar soni nechta bo‘lgan?",["57 ta","76 ta","172 ta","194 ta"],1]);
GEO_OCHIQ.push(["1990-yilgi ma’lumotlarga ko‘ra, Yevropa qit’asida nechta mustaqil davlat bo‘lgan?",["24 ta","31 ta","33 ta","43 ta"],2]);
GEO_OCHIQ.push(["1990-yilda Osiyo qit’asidagi mustaqil davlatlar soni nechta bo‘lgan?",["48 ta","18 ta","40 ta","47 ta"],2]);
GEO_OCHIQ.push(["1990-yilgi statistikaga ko‘ra, Afrika qit’asida nechta mustaqil davlat qayd etilgan?",["3 ta","52 ta","53 ta","54 ta"],1]);
GEO_OCHIQ.push(["1990-yilda Amerika qit’asidagi mustaqil davlatlar soni nechta bo‘lgan?",["20 ta","22 ta","35 ta","To‘g‘ri javob yo‘q"],2]);
GEO_OCHIQ.push(["1990-yilda Avstraliya va Okeaniya qit’asida nechta mustaqil davlat mavjud edi?",["13 ta","0 ta","12 ta","2 ta"],2]);
GEO_OCHIQ.push(["1990-yilda jahon bo‘yicha jami mustaqil davlatlar soni nechta bo‘lgan?",["76 ta","172 ta","191 ta","194 ta"],1]);
GEO_OCHIQ.push(["O‘zbekiston daryolariga qurilgan GESlardan yiliga qancha energiya olinmoqda?",["5 mlrd kWh","6 mlrd kWh","7 mlrd kWh","8 mlrd kWh"],0]);
GEO_OCHIQ.push(["O‘zbekistonning umumiy yer maydoni necha gektarni tashkil etadi?",["22,4 mln gektar","44,1 mln gektar","33,7 mln gektar","44,4 mln gektar"],3]);

/* ===== 36-to‘plam ===== */
GEO_OCHIQ.push(["Oy Yer atrofida deyarli qancha vaqtda bir marta aylanib chiqadi?",["yarim yil","bir yil","bir oy","bir hafta"],2]);
GEO_OCHIQ.push(["Agar Quyosh, Yer va Oy quyidagi chizmada keltirilgan holatda bo‘lsa, Oyning 2 va 8 raqamlarda ko‘rsatilgan holatlarida Oyning qanday ko‘rinishi vujudga keladi?",["eski oy, oxirgi chorak","yangi oy, tugayotgan oy","Oyning birinchi choragi, chorakam to‘lin oy","yangi oy, qisqarayotgan oy"],1,"gx36_oy"]);
GEO_OCHIQ.push(["Chizmada Oyning joylashgan holatlaridan qaysi birida Oy ko‘rinmaydi?",["1-holatda","2-holatda","4-holatda","6-holatda"],0,"gx36_oy"]);
GEO_OCHIQ.push(["Ufq tomonlarini Quyoshga qarab aniqlash uchun Quyosh nuri yaxshi tushadigan ochiq, tekis yerga diametri qanchaga teng bo‘lgan aylana chiziladi?",["1 m","1,5 m","2 m","3 m"],2]);
GEO_OCHIQ.push(["Ufq tomonlarini Quyoshga qarab aniqlash uchun chizilgan aylana o‘rtasiga uzunligi qancha bo‘lgan tayoq (ustun) qoqib qo‘yiladi?",["1 m","1,5 m","2 m","3 m"],1]);
GEO_OCHIQ.push(["Yerning sharsimon ekanligini nazariy jihatdan birinchi bo‘lib kim va qachon isbotlagan?",["milodiy IV asrda Aristotel","mil. avv. VI asrda Pifagor","mil. avv. III asrda Eratosfen","mil. avv. IV asrda Aristotel"],3]);
GEO_OCHIQ.push(["Yerni sharsimon, yumaloq bo‘lsa kerak, degan dastlabki tasavvurning yuzaga kelganiga qancha vaqt bo‘ldi?",["4100 yildan ko‘proq","3200 yildan ko‘proq","2400 yildan ko‘proq","7000 yildan ko‘proq"],2]);
GEO_OCHIQ.push(["Yevropada birinchi globusni qachon va kim yasagan?",["1544-yilda Myunster","1492-yilda Martin Bexaym","1595-yilda Merkator","1650-yilda B. Varenius"],1]);
GEO_OCHIQ.push(["Toshkent globusining balandligi, aylanasining uzunligi va og‘irligi mos ravishda berilgan javobni aniqlang.",["1,5 m, 6 m, 490 kg","2,5 m, 2 m, 490 kg","1,5 m, 2 m, 490 kg","2,5 m, 6 m, 490 kg"],3]);
GEO_OCHIQ.push(["Yerning markazidan Yer yuzasigacha bo‘lgan masofa qutblarda qanchaga teng?",["6378 km ga","6357 km ga","6351 km ga","6375 km ga"],1]);
GEO_OCHIQ.push(["Nosir Xisrav sayohat xaritasida nechta shahar tasvirlangan?",["14 ta","15 ta","17 ta","20 ta"],1]);
GEO_OCHIQ.push(["Muhammad al-Xorazmiyning \"O‘rta Osiyo va unga yondosh yerlar xaritasi\"da nechta shahar tasvirlangan?",["4 ta","5 ta","6 ta","7 ta"],2]);
GEO_OCHIQ.push(["Eratosfen tuzgan dunyo xaritasida 3 va 11 raqamlarda qaysi daryolar tasvirlangan?",["3-Oks, 11-Nil","3-Yaksart, 11-Nil","3-Oks, 11-Dajla","3-Yaksart, 11-Dajla"],1,"gx36_er"]);
GEO_OCHIQ.push(["Xaritada sayyohlarning bosib o‘tgan yo‘llarini to‘g‘ri joylashtiring.",["1-Vasko da Gama, 2-Xristofor Kolumb, 3-Fernan Magellan","1-Fernan Magellan, 2-Vasko da Gama, 3-Xristofor Kolumb","1-Xristofor Kolumb, 2-Vasko da Gama, 3-Fernan Magellan","1-Xristofor Kolumb, 2-Fernan Magellan, 3-Vasko da Gama"],2,"gx36_dn"]);
GEO_OCHIQ.push(["Ptolemey tuzgan dunyo xaritasida 5 va 7 raqamlar bilan qaysi daryolar tasvirlangan?",["5-Ra daryosi, 7-Oks","5-Yaksart, 7-Oks","5-Dajla daryosi, 7-Oks","5-Istr daryosi, 7-Oks"],0,"gx36_pt"]);
GEO_OCHIQ.push(["Nosir Xisrav sayohati xaritasida 1, 2 va 3 raqamlar bilan qaysi dengizlar tasvirlangan?",["1-Qulzum, 2-Abiskun, 3-Rum dengizi","1-Rum, 2-Qulzum, 3-Abiskun dengizi","1-Abiskun, 2-Qulzum, 3-Rum dengizi","1-Rum, 2-Abiskun, 3-Qulzum dengizi"],3,"gx36_nx"]);
GEO_OCHIQ.push(["Yerning qavariq yuzasi tekis yuzada (qog‘ozda) tasvirlanganda asosiy xatoliklar necha xil bo‘ladi?",["2 xil","3 xil","4 xil","6 xil"],0]);
GEO_OCHIQ.push(["Pasttekisliklar necha metr balandlikkacha bo‘lgan joylarni egallaydi va qanday rangda beriladi?",["0 m dan 200 m gacha, sariq rangda","dengiz sathidan 500 m gacha, sariq rangda","0 m dan 200 m gacha, yashil rangda","dengiz sathidan 500 m gacha, yashil rangda"],2]);
GEO_OCHIQ.push(["Geografik xaritalar shartli ravishda necha turga bo‘linadi?",["2 turga","3 turga","4 turga","5 turga"],1]);
GEO_OCHIQ.push(["200 m dan 500 m gacha bo‘lgan balandliklar nima deyiladi va ular qanday rangda beriladi?",["past tog‘lar, yashil rangda","qirlar, yashil rangda","past tog‘lar, sariq rangda","qirlar, sariq rangda"],3]);

/* ===== 37-to‘plam ===== */
GEO_OCHIQ.push(["Bitta qo‘yni boqish uchun qancha gektar o‘tloq talab etiladi?",["1–2 gektar","2–3 gektar","3–4 gektar","4–5 gektar"],1]);
GEO_OCHIQ.push(["O‘zbekiston cho‘llarida necha million boshgacha qo‘y boqsa bo‘ladi?",["5 mln","10 mln","15 mln","20 mln"],1]);
GEO_OCHIQ.push(["Cho‘llarning samarasi har gektar hisobida obikor yerlardagidan necha marta kam?",["50 marta","100 marta","150 marta","200 marta"],1]);
GEO_OCHIQ.push(["O‘zbekistonning gaz zaxirasi qanchani tashkil etadi?",["2 trillion kub metrdan ortiq","4 trillion kub metrdan ortiq","6 trillion kub metrdan ortiq","7 trillion kub metrdan ortiq"],0]);
GEO_OCHIQ.push(["Respublikamizda dengiz sathidan necha metr balandliklar orasidagi hududlar adir mintaqasini tashkil etadi?",["200–1200 metrgacha","400–1000 metrgacha","200–1000 metrgacha","400–1200 metrgacha"],3]);
GEO_OCHIQ.push(["Dengiz sathidan necha metrdan balandda lalmikor dehqonchilik yuritiladi?",["400 metrdan balandda","600 metrdan balandda","800 metrdan balandda","1000 metrdan balandda"],3]);
GEO_OCHIQ.push(["O‘zbekistonda dengiz sathidan necha metr balandlikdan boshlab tog‘ mintaqasi joylashgan?",["400 metr","1200 metr","1400 metr","1600 metr"],1]);
GEO_OCHIQ.push(["O‘zbekistonning qaysi hududi atrofidagi tog‘larda o‘tga chidamli loy, qo‘ng‘ir ko‘mir, mis rudasi, oltin konlari aniqlangan?",["Surxon vodiysi","Ohangaron vodiysi","Ustyurt platosi","Quyi Amudaryo vodiysi"],1]);
GEO_OCHIQ.push(["Nurota tog‘larida qaysi foydali qazilma konlari bor?<br>1) volfram; 2) oltin; 3) marmar; 4) molibden; 5) polimetall rudalari.",["1, 3","3, 5","2, 4","3, 4"],0]);
GEO_OCHIQ.push(["O‘zbekiston daryolaridagi yillik suvning necha foizi 3–4 oy davomida bahor oylariga va yoz boshiga to‘g‘ri keladi?",["10–30 %","25–50 %","50–55 %","70–95 %"],3]);
GEO_OCHIQ.push(["Yugoslaviya davlatining parchalanishi nechanchi yillarda ro‘y bergan?",["1989–1990-yillarda","1990–1991-yillarda","1991–1992-yillarda","1992–1993-yillarda"],2]);
GEO_OCHIQ.push(["Yugoslaviya davlatining parchalanishi natijasida qaysi davlatlar mustaqil bo‘ldi?<br>1) Moldova; 2) Bosniya va Gersegovina; 3) Bolgariya; 4) Xorvatiya; 5) Malta; 6) Makedoniya; 7) Ruminiya; 8) Estoniya; 9) Ukraina.",["1, 7, 9","2, 4, 6","2, 6, 8","1, 3, 5"],1]);
GEO_OCHIQ.push(["Makedoniya davlati nechanchi yildan boshlab Shimoliy Makedoniya deb nomlana boshlandi?",["2017-yildan","2018-yildan","2019-yildan","2020-yildan"],2]);
GEO_OCHIQ.push(["1991–1992-yillarda Yugoslaviya davlati parchalangan vaqtda uning tarkibida faqat qaysi davlatlar qolgan edi?",["Chernogoriya va Serbiya","Sloveniya va Xorvatiya","Makedoniya va Albaniya","Bosniya va Gersegovina"],0]);
GEO_OCHIQ.push(["Nechanchi yilda Chernogoriya Serbiyadan ajralib mustaqil davlatga aylandi?",["2004-yilda","2005-yilda","2006-yilda","2007-yilda"],2]);
GEO_OCHIQ.push(["Nechanchi yildan Chexoslovakiya davlati o‘rnida Chexiya va Slovakiya mustaqil respublikalari barpo bo‘ldi?",["1991-yil 1-dekabrdan","1992-yil 1-sentabrdan","1993-yil 1-yanvardan","1994-yil 1-oktabrdan"],2]);
GEO_OCHIQ.push(["Nechanchi yilda Yevropada ikki nemis davlati (Germaniya Federativ Respublikasi va Germaniya Demokratik Respublikasi) qo‘shilishi natijasida yagona Germaniya Federativ Respublikasi tashkil etildi?",["1989-yilda","1990-yilda","1991-yilda","1992-yilda"],1]);
GEO_OCHIQ.push(["Afrikada 1993-yilda ko‘p yillik urush natijasida qaysi davlat Efiopiya tarkibidan ajralib, suveren davlat maqomiga ega bo‘ldi?",["Keniya","Jibuti","Uganda","Eritreya"],3]);
GEO_OCHIQ.push(["Okeaniyada 1994-yilda qaysi davlat AQShning nazorati ostidagi hududdan mustaqil davlatga aylandi?",["Samoa","Tonga","Palau","Nauru"],2]);
GEO_OCHIQ.push(["Janubi-sharqiy Osiyoda joylashgan Sharqiy Timor davlati nechanchi yilda mustaqil bo‘lgan?",["2000-yilda","2001-yilda","2002-yilda","2003-yilda"],2]);
GEO_OCHIQ.push(["Afrika qit’asida nechanchi yilda referendum natijalariga ko‘ra Sudan tarkibidan Janubiy Sudan davlati ajralib chiqdi?",["2009-yil 7-avgustda","2010-yil 1-iyunda","2011-yil 9-iyulda","2012-yil 1-martda"],2]);
GEO_OCHIQ.push(["2004–2013-yillar oralig‘ida Sharqiy Yevropa subregionining nechta davlati Yevropa Ittifoqi tarkibiga kiritildi?",["10 ta","11 ta","13 ta","15 ta"],1]);
GEO_OCHIQ.push(["Yevropa davlatlari iqtisodiyotida qaysi yilda yuz bergan jahon moliyaviy-iqtisodiy inqirozining salbiy oqibatlari hali ham sezilib turibdi?",["1998-yilda","2001-yilda","2004-yilda","2008-yilda"],3]);
GEO_OCHIQ.push(["Angliyaning Amerikadagi nechta mustamlakasi 1776-yilda o‘z siyosiy mustaqilligini e’lon qildi?",["50 ta","13 ta","11 ta","10 ta"],1]);
GEO_OCHIQ.push(["AQSh qaysi davrdan boshlab avval meridional yo‘nalishda butun Amerika qit’asini, keyinchalik esa boshqa hududlar nazoratini sekin-astalik bilan qo‘lga kiritdi?",["Ikkinchi jahon urushidan keyin","XVIII asr oxiridan boshlab","XIX asr oxiridan boshlab","XX asr boshidan boshlab"],2]);
GEO_OCHIQ.push(["AQSh tashkil topganda uning tarkibidagi dastlabki shtatlar soni nechta edi?",["10 ta","11 ta","13 ta","15 ta"],2]);
GEO_OCHIQ.push(["Xitoyda monarxiya tuzumining ag‘darilishi qaysi yilda yuz bergan?",["1910-yilda","1947-yilda","1949-yilda","1976-yilda"],0]);
GEO_OCHIQ.push(["Xitoyda ichki siyosiy kelishmovchiliklar natijasida sotsialistik tuzum qaysi yilda o‘rnatildi?",["1910-yilda","1945-yilda","1949-yilda","1976-yilda"],2]);
GEO_OCHIQ.push(["Xitoyda iqtisodiyot va jamiyatni erkinlashtirish borasidagi islohotlar konsepsiyasi qaysi yillar oralig‘ida ishlab chiqilgan?",["1949–1976","1976–1989","1989–2016","2004–2013"],1]);
GEO_OCHIQ.push(["2016-yilda jahon umumiy YaMMning necha foizi Xitoy hissasiga to‘g‘ri kelgan?",["21,5 %","17,8 %","15,2 %","13 %"],1]);
GEO_OCHIQ.push(["Falastin hududlarida yahudiy va arab davlatlarini tashkil etish rejasi BMT tomonidan qaysi yilda taklif etilgan?",["1948-yilda","1947-yilda","1945-yilda","1949-yilda"],1]);
GEO_OCHIQ.push(["Isroil davlati tashkil topganligi rasman e’lon qilingan sanani ko‘rsating.",["1947-yil 28-noyabr","1948-yil 14-may","1947-yil 29-noyabr","1948-yil 15-may"],1]);
GEO_OCHIQ.push(["Arab davlatlari ligasi qo‘shinlari Falastin yerlariga qaysi yilda va qaysi sanada kirib keldi?",["1949-yil 12-fevralda","1947-yil 29-noyabrda","1948-yil 14-mayda","1948-yil 15-mayda"],3]);
GEO_OCHIQ.push(["Xitoy islohotlar konsepsiyasi muallifi Den Syaopin rahbarlik qilgan davr jami necha yilni tashkil etadi?",["10 yilni","14 yilni","15 yilni","25 yilni"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Osiyo mintaqasida mustaqil davlatlar soni nechta bo‘lgan?",["35 ta","44 ta","48 ta","54 ta"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Yevropa qit’asida nechta mustaqil davlat bo‘lgan?",["31 ta","33 ta","43 ta","44 ta"],3]);
GEO_OCHIQ.push(["2022-yilgi statistikaga ko‘ra, Afrika qit’asida nechta mustaqil davlat qayd etilgan?",["3 ta","52 ta","53 ta","54 ta"],3]);
GEO_OCHIQ.push(["2022-yilda Amerika mintaqasidagi mustaqil davlatlar soni nechta bo‘lgan?",["20 ta","22 ta","35 ta","44 ta"],2]);
GEO_OCHIQ.push(["2022-yil yakuniga ko‘ra, Avstraliya va Okeaniya mintaqasida nechta mustaqil davlat mavjud edi?",["0 ta","2 ta","12 ta","13 ta"],3]);
GEO_OCHIQ.push(["2022-yilda jahon bo‘yicha jami mustaqil davlatlar soni nechta bo‘lgan?",["57 ta","76 ta","191 ta","194 ta"],3]);
GEO_OCHIQ.push(["2022-yilda Osiyo va Amerika mintaqalaridagi mustaqil davlatlar soni farqi nechta bo‘lgan?",["4 ta","11 ta","13 ta","15 ta"],2]);
GEO_OCHIQ.push(["2022-yilda Yevropa va Amerika mintaqalaridagi mustaqil davlatlar yig‘indisi nechta bo‘lgan?",["67 ta","79 ta","89 ta","98 ta"],1]);
GEO_OCHIQ.push(["2022-yilda Osiyo va Afrika mintaqalaridagi mustaqil davlatlar jami soni nechta bo‘lgan?",["92 ta","100 ta","102 ta","108 ta"],2]);
GEO_OCHIQ.push(["1900-yilgi ma’lumotlarga ko‘ra, Yevropa qit’asida nechta mustaqil davlat bo‘lgan?",["4 ta","9 ta","20 ta","24 ta"],3]);
GEO_OCHIQ.push(["1900-yilda Osiyo qit’asidagi mustaqil davlatlar soni nechta bo‘lgan?",["0 ta","3 ta","4 ta","9 ta"],3]);
GEO_OCHIQ.push(["1900-yilgi statistikaga ko‘ra, Afrika qit’asida nechta mustaqil davlat qayd etilgan?",["3 ta","4 ta","9 ta","24 ta"],1]);
GEO_OCHIQ.push(["1900-yilda Amerika qit’asidagi mustaqil davlatlar soni nechta bo‘lgan?",["4 ta","9 ta","20 ta","22 ta"],2]);
GEO_OCHIQ.push(["1900-yilda Avstraliya va Okeaniya qit’asida nechta mustaqil davlat mavjud edi?",["0 ta","2 ta","4 ta","20 ta"],0]);
GEO_OCHIQ.push(["1900-yilda jahon bo‘yicha jami mustaqil davlatlar soni nechta bo‘lgan?",["57 ta","76 ta","191 ta","194 ta"],0]);
GEO_OCHIQ.push(["1900-yilda Yevropa va Amerika qit’alaridagi mustaqil davlatlar soni farqi nechta bo‘lgan?",["3 ta","4 ta","5 ta","6 ta"],1]);

/* ===== 38-to‘plam ===== */
GEO_OCHIQ.push(["Fernan Magellan sayohatidan keyin quyidagilardan qaysilari isbotlandi?<br>1) Yangi dunyo – Amerika qit’asining mavjudligi; 2) Yerning sharsimonligi; 3) quruqlik muhiti yaxlit va bir butun ekanligi; 4) Yer yuzining katta qismini suv qoplab yotishi.",["1, 4","2, 4","3, 4","1, 3"],1]);
GEO_OCHIQ.push(["Oltin Qoziq yulduzini topish uchun Katta Ayiq yulduzlar turkumi – cho‘michning chekkadagi ikkita yulduzi oralig‘idagi masofa necha marta qo‘yib chiqiladi?",["4","3","7","5"],3]);
GEO_OCHIQ.push(["Quyosh massasi (og‘irligi) Yer og‘irligidan necha marta katta?",["233 ming marta","313 ming marta","323 ming marta","332 ming marta"],3]);
GEO_OCHIQ.push(["Quyoshning diametri Yer diametridan necha marta uzun?",["119 marta","109 marta","150 marta","330 marta"],1]);
GEO_OCHIQ.push(["Quyosh yuzasidagi harorat qanchaga teng?",["+9000 °C","+3000 °C","+6000 °C","+20 000 °C"],2]);
GEO_OCHIQ.push(["Quyosh o‘z o‘qi atrofida necha Yer sutkasida bir marta aylanib chiqadi?",["25","27","29","31"],1]);
GEO_OCHIQ.push(["Quyosh atrofida nechta sayyora aylanib turadi?",["7 ta","8 ta","9 ta","10 ta"],1]);
GEO_OCHIQ.push(["Yupiter Quyoshdan uzoqligiga ko‘ra nechanchi sayyora hisoblanadi?",["2-chi","4-chi","5-chi","6-chi"],2]);
GEO_OCHIQ.push(["Oyning qaysi kunlari to‘lin Oy bo‘ladi?",["11–12-kunlari","14–15-kunlari","16–18-kunlari","20–21-kunlari"],1]);
GEO_OCHIQ.push(["Qadimda jangchilarning ko‘zi o‘tkirligini ko‘ra olishiga qarab aniqlangan yulduz Katta Ayiq yulduzlar turkumining cho‘mich bandidagi nechanchi yulduz yonida joylashgan?",["2-chi","3-chi","4-chi","5-chi"],0]);
GEO_OCHIQ.push(["Ptolemey tuzgan dunyo xaritasida nechta orol tasvirlangan?",["4 ta","6 ta","3 ta","5 ta"],0]);
GEO_OCHIQ.push(["Toshkent globusining diametri qancha?",["6 metr","2 metr","3 metr","4 metr"],1]);
GEO_OCHIQ.push(["Ptolemey tuzgan dunyo xaritasida nechta okean tasvirlangan?",["1 ta","2 ta","3 ta","4 ta"],0]);
GEO_OCHIQ.push(["Nosir Xisravning sayohati xaritasida nechta dengiz tasvirlangan?",["1 ta","2 ta","3 ta","4 ta"],2]);
GEO_OCHIQ.push(["Ptolemey tuzgan dunyo xaritasida nechta dengiz tasvirlangan?",["1 ta","2 ta","3 ta","4 ta"],1]);
GEO_OCHIQ.push(["Toshkent globusining og‘irligi qanchaga teng?",["480 kilogramm","450 kilogramm","490 kilogramm","390 kilogramm"],2]);
GEO_OCHIQ.push(["Nosir Xisrav necha marta sayohat qilgan?",["7 marta","3 marta","4 marta","2 marta"],3]);
GEO_OCHIQ.push(["Toshkent globusining balandligi necha metr?",["2 metr","1,5 metr","2,5 metr","1 metr"],2]);
GEO_OCHIQ.push(["Nosir Xisravning sayohati necha yil davom etgan?",["5 yil","7 yil","4 yil","6 yil"],1]);
GEO_OCHIQ.push(["Hamidulla Hasanov sayohatlari davomida ekvatorni necha marta kesib o‘tgan?",["1 marta","2 marta","3 marta","4 marta"],1]);
GEO_OCHIQ.push(["Qoraqalpog‘iston Respublikasi va viloyatlar bo‘ysunuvidagi shaharlar bo‘ysunuviga ko‘ra nechanchi toifaga kiradi?",["1-chi","2-chi","3-chi","To‘g‘ri javob yo‘q"],1]);
GEO_OCHIQ.push(["Qoraqalpog‘iston Respublikasi va viloyatlar bo‘ysunuvidagi shaharlar turkumiga, qoida tariqasida, kamida qancha aholisi bo‘lgan, muhim ma’muriy ahamiyat kasb etadigan, istiqbolli iqtisodiy va madaniy markazlar deb hisoblangan shaharlar kiritilishi mumkin?",["10 ming","20 ming","30 ming","40 ming"],2]);
GEO_OCHIQ.push(["O‘zbekiston Respublikasi bo‘ysunuvidagi shaharlar bo‘ysunuviga ko‘ra nechanchi toifaga kiradi?",["1-chi","2-chi","3-chi","To‘g‘ri javob yo‘q"],0]);
GEO_OCHIQ.push(["O‘zbekistondagi tuman bo‘ysunuvidagi shaharlar turkumiga, qoida tariqasida, kamida qancha aholisi bo‘lgan, sanoat korxonalari va rivojlangan infratuzilmasi mavjud aholi punktlari kiritilishi mumkin?",["4 ming","5 ming","6 ming","7 ming"],3]);
GEO_OCHIQ.push(["O‘zbekiston maydonining kattaligiga ko‘ra Osiyoda nechanchi o‘rinda turadi?",["55","19","15","44"],2]);
GEO_OCHIQ.push(["O‘zbekistondagi tuman bo‘ysunuvidagi shaharlar bo‘ysunuviga ko‘ra nechanchi toifaga kiradi?",["1-chi","2-chi","3-chi","Hamma javob to‘g‘ri"],2]);
GEO_OCHIQ.push(["O‘zbekistonda shaharchalar turkumiga sanoat korxonalari, qurilishlar, temiryo‘l stansiyalari va boshqa muhim obyektlar yaqinida joylashgan hamda qoida tariqasida kamida qancha aholisi bo‘lgan aholi punktlari kiritilishi mumkin?",["2 ming","3 ming","5 ming","7 ming"],0]);
GEO_OCHIQ.push(["O‘zbekistonda dengiz sathidan necha metr balandlikkacha bo‘lgan joylar cho‘l mintaqasi hisoblanadi?",["200 metr","300 metr","400 metr","500 metr"],2]);
GEO_OCHIQ.push(["Qoraqalpog‘iston Respublikasi (Nukus) hududidagi umumiy foydalanishdagi temiryo‘llarning ekspluatatsiya uzunligi necha kilometrni tashkil etadi?",["138,7","270,6","469,3","844,3"],3]);
GEO_OCHIQ.push(["Urganch hududida temiryo‘llarning ekspluatatsiya uzunligi necha kilometrga teng?",["155,8","138,7","160,1","348,8"],1]);
GEO_OCHIQ.push(["Amerikada joylashgan maydoni 1 ming km² ga yetmaydigan davlatlarni belgilang.<br>1) Grenada; 2) Sent-Lyusiya; 3) Barbados; 4) Gaiti; 5) Salvador; 6) Urugvay; 7) Sent-Kits va Nevis; 8) Yamayka; 9) Peru.",["2, 4, 8","1, 5, 9","2, 6, 9","1, 3, 7"],3]);
GEO_OCHIQ.push(["Okeaniyada joylashgan maydoni 1 ming km² ga yetmaydigan davlatlar qaysilar?<br>1) Fiji; 2) Nauru; 3) Samoa; 4) Vanuatu; 5) Tuvalu; 6) Papua – Yangi Gvineya; 7) Kiribati; 8) Marshall orollari; 9) Yangi Zelandiya.",["2, 4, 6","2, 5, 8","1, 4, 9","1, 3, 7"],1]);
GEO_OCHIQ.push(["Yevropada joylashgan orol mamlakatlar qaysi javobda to‘g‘ri berilgan?<br>1) Gretsiya; 2) Buyuk Britaniya; 3) Italiya; 4) Malta; 5) Islandiya; 6) Norvegiya.",["2, 4","2, 6","1, 3","2, 5"],3]);
GEO_OCHIQ.push(["Afrikada joylashgan orol mamlakatlarni belgilang.<br>1) Kabo-Verde; 2) Tanzaniya; 3) Mozambik; 4) Somali; 5) Namibiya; 6) Madagaskar.",["1, 6","2, 6","3, 6","4, 6","5, 6"],0]);
GEO_OCHIQ.push(["Amerikada joylashgan orol mamlakatlar qaysilar?<br>1) Gaiti; 2) Salvador; 3) Yamayka; 4) Nikaragua; 5) Gonduras; 6) Panama; 7) Kuba; 8) Beliz.",["1, 7, 8","1, 3, 7","1, 6, 8","2, 5, 7"],1]);

/* ===== 39-to‘plam ===== */
GEO_OCHIQ.push(["Osiyodagi yarimorol mamlakatlar qaysilar?<br>1) Mongoliya; 2) Koreya Respublikasi; 3) Iroq; 4) Saudiya Arabistoni; 5) Filippin; 6) Vyetnam; 7) Nepal; 8) Livan; 9) Bangladesh.",["2, 6, 8","2, 6, 7","1, 3, 5","2, 4, 6"],3]);
GEO_OCHIQ.push(["Yevropada joylashgan dengizbo‘yi kontinental davlatlar qaysi javobda to‘g‘ri berilgan?<br>1) Germaniya; 2) Irlandiya; 3) Polsha; 4) Avstriya; 5) Islandiya; 6) Malta; 7) Fransiya; 8) Shveysariya; 9) Slovakiya.",["1, 3, 5","2, 6, 8","1, 3, 7","1, 7, 9"],2]);
GEO_OCHIQ.push(["Dengizga bevosita chiqa olmaydigan davlatlar soni hozirgi kunda nechtani tashkil etadi?",["40 ta","42 ta","44 ta","46 ta"],2]);
GEO_OCHIQ.push(["Turli tarixiy voqealar ta’sirida dunyoda mustaqil davlatlar sonining muttasil o‘sib kelishi nechanchi asrlar mobaynida ro‘y berdi?",["XIV va XV asrlar","XVI va XVII asrlar","XVIII va XIX asrlar","XX va XXI asrlar"],3]);
GEO_OCHIQ.push(["Sobiq Sovet Ittifoqining parchalanishidan nechta mustaqil davlat vujudga kelgan?",["13 ta","15 ta","19 ta","17 ta"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Kanada davlatining hududi qancha (mln km²)?",["8,5","9,6","10,0","17,1"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Malta Respublikasining hududi necha kvadrat kilometrni tashkil qiladi?",["298","316","261","181"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Qozog‘iston Respublikasining hududi necha million kvadrat kilometrga teng?",["2,4","2,7","2,8","3,3"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Xitoy davlatining hududi necha million kvadrat kilometrni tashkil etadi?",["8,5","9,5","9,6","10,0"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Monako davlatining hududi kvadrat kilometrda qanchaga teng?",["2","21","26","0,44"],0]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Amerika Qo‘shma Shtatlari (AQSh) davlatining hududi qancha (mln km²)?",["8,5","10,0","9,6","9,5"],3]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Nauru davlatining hududi necha kvadrat kilometrni tashkil qiladi?",["61","2","21","26"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Braziliya davlatining hududi necha million kvadrat kilometrga teng?",["7,7","9,5","8,5","3,3"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Tuvalu davlatining hududi kvadrat kilometrda qanchaga teng?",["21","26","61","160"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, San-Marino davlatining hududi necha kvadrat kilometrni tashkil qiladi?",["160","181","61","261"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 1–5 mln km² bo‘lgan mustaqil davlatlar soni nechta?",["56","44","23","22"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 1–5 mln km² oralig‘idagi davlatlar ulushi necha foizga (%) teng?",["29","12","11","23"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 500 ming – 1 mln km² bo‘lgan davlatlar soni nechta?",["56 ta","44 ta","23 ta","22 ta"],3]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 500 ming – 1 mln km² bo‘lgan davlatlar necha foiz (%) ulushga ega?",["10","29","11","12"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 100–500 ming km² bo‘lgan eng ko‘p guruhni tashkil etuvchi davlatlar soni nechta?",["24","19","44","56"],3]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 100–500 ming km² bo‘lgan davlatlarning ulushi necha foizni (%) tashkil qiladi?",["11","12","23","29"],3]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 50–100 ming km² bo‘lgan mustaqil davlatlar soni nechta?",["19 ta","24 ta","44 ta","56 ta"],0]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 50–100 ming km² bo‘lgan davlatlar jami davlatlarning necha foizini (%) tashkil qiladi?",["10","11","12","19"],0]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 1–50 ming km² oralig‘ida bo‘lgan davlatlar soni nechta?",["23 ta","24 ta","44 ta","56 ta"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 1–50 ming km² bo‘lgan davlatlar necha foiz (%) ulushga ega?",["12 %","19 %","23 %","29 %"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 1 ming km² dan kichik bo‘lgan mustaqil davlatlar soni nechta?",["19 ta","24 ta","44 ta","56 ta"],1]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, hududi 1 ming km² dan kichik bo‘lgan mustaqil davlatlar ulushi necha foizga (%) teng?",["10 %","11 %","12 %","23 %"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, Argentina davlatining hududi necha million kvadrat kilometrga teng?",["2,4 mln","2,7 mln","2,8 mln","3,3 mln"],2]);

/* ===== 40-to‘plam ===== */
GEO_OCHIQ.push(["Dunyo okeaniga chiqish uchun kamida ikki davlatning hududini kesib o‘tish zarur bo‘lgan davlatlar jahonda nechtani tashkil etadi?",["1 tani","2 tani","3 tani","4 tani"],1]);
GEO_OCHIQ.push(["O‘zbekiston bilan nechta davlat diplomatik aloqalar o‘rnatgan?",["120 dan ortiq","130 dan ortiq","140 dan ortiq","150 dan ortiq"],1]);
GEO_OCHIQ.push(["O‘zbekiston Respublikasining maydoni qanchani tashkil etadi?",["447,4 ming km²","449,7 ming km²","448,4 ming km²","448,9 ming km²"],3]);
GEO_OCHIQ.push(["O‘zbekiston ma’muriy-hududiy tuzilishi nechta pog‘onadan tashkil topgan?",["3 ta","4 ta","2 ta","5 ta"],0]);
GEO_OCHIQ.push(["O‘zbekiston ma’muriy-hududiy tuzilishining nechanchi pog‘onasida Qoraqalpog‘iston Respublikasi, 12 ta viloyat va Toshkent shahri joylashgan?",["birinchi","ikkinchi","uchinchi","to‘rtinchi"],0]);
GEO_OCHIQ.push(["O‘zbekiston maydonining kattaligiga ko‘ra jahonda nechanchi o‘rinda turadi?",["44-chi","19-chi","55-chi","15-chi"],2]);
GEO_OCHIQ.push(["Qoraqalpog‘iston Respublikasidagi tumanlarni tuzish va tugatish Qoraqalpog‘iston Respublikasi hukumatining taklifiga muvofiq Jo‘qorg‘i Kenges tomonidan O‘zbekiston Respublikasi Oliy Majlisining roziligi bilan amalga oshiriladi. Bu O‘zbekiston Konstitutsiyasining nechanchi moddasi?",["51-moddasi","68-moddasi","69-moddasi","72-moddasi"],2]);
GEO_OCHIQ.push(["Mamlakatimizdagi shaharlar bo‘ysunuviga ko‘ra nechta toifaga bo‘linadi?",["2 ta","3 ta","4 ta","5 ta"],1]);
GEO_OCHIQ.push(["O‘zbekiston maydonining kattaligiga ko‘ra Yevrosiyo materigida nechanchi o‘rinda turadi?",["55-chi","15-chi","19-chi","44-chi"],2]);
GEO_OCHIQ.push(["Jahonning siyosiy xaritasida, 2018-yil holatiga ko‘ra jahon hamjamiyati tomonidan mustaqilligi rasman tan olingan nechta suveren davlat mavjud?",["193 ta","194 ta","195 ta","196 ta"],1]);
GEO_OCHIQ.push(["Jahonning siyosiy xaritasida, 2018-yil holatiga ko‘ra qanchadan ortiq mamlakat mavjud?",["230 dan","240 dan","250 dan","260 dan"],1]);
GEO_OCHIQ.push(["Jahonning siyosiy xaritasida, 2018-yil holatiga ko‘ra mustaqil suveren davlatlarning nechtasi BMT faoliyatida a’zo davlatlar sifatida ishtirok etmoqda?",["193 tasi","194 tasi","195 tasi","196 tasi"],0]);
GEO_OCHIQ.push(["Jahonning siyosiy xaritasida, 2018-yil holatiga ko‘ra mustaqil suveren davlatlarning nechtasi BMT faoliyatida kuzatuvchi davlat sifatida ishtirok etmoqda?",["1 tasi","2 tasi","3 tasi","4 tasi"],0]);
GEO_OCHIQ.push(["Jahondagi nechta mustaqil davlatning maydoni 1 mln km² dan katta?",["5 ta","12 ta","29 ta","33 ta"],2]);
GEO_OCHIQ.push(["Jahondagi nechta mustaqil davlatning maydoni 2 mln km² dan oshadi?",["5 ta","12 ta","29 ta","33 ta"],1]);
GEO_OCHIQ.push(["Jahondagi nechta mustaqil davlatning maydoni 5 mln km² dan ortiq?",["6 ta","12 ta","29 ta","33 ta"],0]);
GEO_OCHIQ.push(["Osiyoda joylashgan maydoni 1 ming km² ga yetmaydigan davlatlarni belgilang.<br>1) Bruney; 2) Singapur; 3) Gruziya; 4) Kipr; 5) Koreya Respublikasi; 6) Qatar; 7) Bahrayn; 8) Livan; 9) Maldiv Respublikasi.",["3, 6, 7","1, 4, 6","2, 7, 9","1, 5, 8"],2]);
GEO_OCHIQ.push(["2022-yil holatiga ko‘ra, hududining kattaligi 5 mln km² dan katta bo‘lgan yirik davlatlar jahondagi mustaqil davlatlarning necha foizini tashkil etgan?",["12 %","11 %","3 %","10 %"],2]);
GEO_OCHIQ.push(["2022-yilgi ma’lumotlarga ko‘ra, jahonning eng mitti davlati bo‘lgan Vatikanning hududi necha km² ni tashkil etadi?",["0,21 km²","0,2 km²","0,44 km²","0,61 km²"],2]);
GEO_OCHIQ.push(["Dunyodagi eng yirik davlat – Rossiyaning hududi necha million kvadrat kilometrni tashkil etadi?",["9,5 mln km²","9,6 mln km²","10,0 mln km²","17,1 mln km²"],3]);
GEO_OCHIQ.push(["Jahon siyosiy xaritasida dengizga chiqish imkoniyati bor davlatlar jami nechta?",["44 ta","135 ta","120 ta","150 ta"],3]);
GEO_OCHIQ.push(["Garvard universiteti professori S. Xantingtonning \"Sivilizatsiyalar to‘qnashuvi\" deb nomlangan kitobi qaysi yilda chop etilgan?",["1648-yilda","1814-yilda","1919-yilda","1993-yilda"],3]);
GEO_OCHIQ.push(["Geosiyosat fani asosan necha xil ilmiy yondashuv ta’sirida rivojlangan?",["2 xil","3 xil","4 xil","5 xil"],1]);
GEO_OCHIQ.push(["Yevropada kuchli davlatlarning hukmronlik uchun o‘zaro kurashiga sabab bo‘lgan Vestfal shartnomasi qaysi yilda imzolangan?",["1648-yil","1814-yil","1919-yil","1945-yil"],0]);
GEO_OCHIQ.push(["Siyosiy xaritadagi birinchi bosqich hisoblangan Vestfal shartnomasi tizimi qaysi asrning boshlarigacha davom etgan?",["XVII asrning","XVIII asrning","XIX asrning","XX asrning"],2]);
GEO_OCHIQ.push(["Fransuz inqilobi va Napoleon armiyasi mag‘lubiyatidan keyin Yevropada yuzaga kelgan vaziyatni o‘rganish maqsadida Vena kongressi qaysi yillarda bo‘lib o‘tgan?",["1514-yil sentabr – 1515-yil iyun","1614-yil sentabr – 1615-yil iyun","1714-yil sentabr – 1715-yil iyun","1814-yil sentabr – 1815-yil iyun"],3]);
GEO_OCHIQ.push(["Birinchi jahon urushi tugashi munosabati bilan Fransiyaning Versal shahrida tinchlik shartnomasi aynan qaysi sanada imzolangan?",["1917-yil 25-oktabr","1919-yil 28-iyun","1945-yil 9-may","1991-yil 8-dekabr"],1]);
GEO_OCHIQ.push(["Versal shartnomasi bilan boshlangan geosiyosiy davr qaysi yilda Ikkinchi jahon urushining boshlanishi bilan yakuniga yetdi?",["1939-yilda","1991-yilda","1945-yilda","1919-yilda"],0]);
GEO_OCHIQ.push(["Germaniyaning Potsdam shahrida Ikkinchi jahon urushi tugashi munosabati bilan Potsdam shartnomasining imzolanishi qaysi yilda yuz bergan?",["1939-yilda","1991-yilda","1648-yilda","1945-yilda"],3]);
GEO_OCHIQ.push(["Dunyoda bipolyar (ikki qutbli) holatning tugashiga va zamonaviy geosiyosiy bosqich boshlanishiga turtki bo‘lgan Belovej shartnomasi qachon imzolangan?",["1945-yil 2-sentabrda","1993-yil 15-martda","1919-yil 28-iyunda","1991-yil 8-dekabrda"],3]);
GEO_OCHIQ.push(["Belovej shartnomasidan so‘ng, sobiq SSSR o‘rnida nechta mustaqil davlat yuzaga keldi va ularning MDH tarkibida birlashuvi boshlandi?",["3 ta","10 ta","12 ta","15 ta"],2]);
GEO_OCHIQ.push(["Versal davri voqeligiga ko‘ra, jahonda ilk sotsialistik tuzumga ega bo‘lgan respublikalar ittifoqining paydo bo‘lishi aynan qaysi vaqtda boshlandi?",["1914-yilning avgustidan","1917-yilning oktabridan","1919-yilning iyunidan","1939-yilning sentabridan"],1]);
GEO_OCHIQ.push(["Vena geosiyosiy davri voqeligiga ko‘ra, AQSh va Germaniyaning iqtisodiy jihatdan tez sur’atlar bilan rivojlanishi qaysi davrga to‘g‘ri keladi?",["XVII asr o‘rtalariga","XVIII asr boshlariga","XIX asr oxirlariga","XX asr o‘rtalariga"],2]);

/* ===== 41-to‘plam ===== */
GEO_OCHIQ.push(["Ptolemey tuzgan dunyo xaritasi qaysi geografik uzunliklar bilan chegaralangan?",["0° uzunlik va 180° sharqiy uzunlik","20° g‘arbiy uzunlik va 60° sharqiy uzunlik","10° sharqiy uzunlik va 170° sharqiy uzunlik","40° g‘arbiy uzunlik va 100° sharqiy uzunlik"],0]);
GEO_OCHIQ.push(["Nosir Xisrav yetti yil davom etgan ikkita sayohatida necha ming kilometrdan ortiq yo‘lni bosib o‘tgan?",["12 ming","7 ming","15 ming","20 ming"],2]);
GEO_OCHIQ.push(["Nechanchi yilda Xristofor Kolumb boshchiligidagi ekspeditsiya Hindistonga dengiz orqali yo‘l topish maqsadida Ispaniyadan g‘arbga tomon suzib ketadi?",["1820","1519–1522","1498","1492"],3]);
GEO_OCHIQ.push(["Xristofor Kolumb Amerika qit’asiga necha marotaba sayohat uyushtirgan?",["3 marta","1 marta","4 marta","2 marta"],2]);
GEO_OCHIQ.push(["Amerigo Vespuchchi qaysi yillarda Amerika qit’asini o‘rgangan?",["1519–1522","1408–1502","1499–1504","1497–1499"],2]);
GEO_OCHIQ.push(["Vasko da Gama qaysi yili Afrikani aylanib o‘tib, Hindistonga bordi?",["1496","1498","1492","1499"],1]);
GEO_OCHIQ.push(["Nechanchi yillarda Fernan Magellan boshchiligidagi ekspeditsiya kemalarda dunyoni g‘arbdan sharqqa aylanib chiqdi?",["1507–1510","1408–1502","1499–1504","1519–1522"],3]);
GEO_OCHIQ.push(["Nechanchi yilning yanvarida rus dengizchi sayyohlari F. Bellinsgauzen va M. Lazarev eng uzoqda joylashgan, muzlar bilan qoplanib yotgan Antarktida materigini kashf etishdi?",["1420","1620","1820","1920"],2]);
GEO_OCHIQ.push(["Eratosfen va Ptolemeyning dunyo xaritasida mos ravishda nechta daryo tasvirlangan?",["Eratosfen – 7, Ptolemey – 6","Eratosfen – 6, Ptolemey – 7","Eratosfen – 6, Ptolemey – 6","Eratosfen – 7, Ptolemey – 7"],0]);
GEO_OCHIQ.push(["Nosir Xisravning yashagan yillari to‘g‘ri berilgan javobni toping.",["1044–1088","783–850","1004–1088","973–1048"],2]);
GEO_OCHIQ.push(["Mahmud Koshg‘ariy \"Devonu lug‘otit turk\" asarini nechanchi asrda yozgan?",["Miloddan avvalgi XI asrda","Milodiy IX asrda","Milodiy XI asrda","Miloddan avvalgi IX asrda"],2]);
GEO_OCHIQ.push(["Geografiya fani rivojlanib borgan sari unda nechta tarmoq shakllandi?",["5 ta","Bir qancha","2 ta","3 ta"],1]);
GEO_OCHIQ.push(["Ijtimoiy-iqtisodiy geografiya o‘z navbatida nechta sohaga ajratiladi?",["2 ta","3 ta","4 ta","5 ta"],1]);
GEO_OCHIQ.push(["Eratosfen nechanchi asrda yashagan?",["Milodiy III asr","Mil. avv. II asr","Mil. avv. III asr","Milodiy II asr"],2]);
GEO_OCHIQ.push(["Tabiiy geografiya o‘z navbatida nechta sohaga ajratiladi?",["6 ta","4 ta","3 ta","5 ta"],3]);
GEO_OCHIQ.push(["Nechanchi asrda yunon olimi Eratosfen \"Geografika\" nomli kitob yozib, ushbu fanga asos solgan?",["Miloddan avvalgi II asrda","Milodiy III asrda","Miloddan avvalgi III asrda","Milodiy II asrda"],2]);
GEO_OCHIQ.push(["Nechanchi yilda Villem Yanszon Yer sharining janubiy yarimsharidagi quruqlik – Avstraliya materigini kashf etdi?",["1506-yilda","1608-yilda","1605-yilda","1519-yilda"],2]);
GEO_OCHIQ.push(["Eratosfen tuzgan dunyo xaritasida nechta shahar tasvirlangan?",["5 ta","4 ta","3 ta","2 ta"],2]);
GEO_OCHIQ.push(["Hamidulla Hasanov rahbarligida nechanchi yilda ulkan globus yasalgan?",["1884-yilda","1984-yilda","1985-yilda","1981-yilda"],1]);
GEO_OCHIQ.push(["O‘rta Osiyoda birinchi temiryo‘l qachon qurilgan?",["XIX asr boshlarida","XIX asr o‘rtalarida","XIX asr oxirida","XX asr boshlarida"],2]);
GEO_OCHIQ.push(["\"Buyuk Ipak yo‘li\" qaysi asrlarda Sharq va G‘arbni bog‘lab turgan asosiy savdo yo‘li bo‘lib xizmat qilgan?",["mil. avv. I asrdan milodiy XVII asrgacha","milodiy II asrdan miloddan avvalgi XVI asrgacha","milodiy I asrdan milodiy XVII asrgacha","mil. avv. II asrdan milodiy XVI asrgacha"],3]);

/* ===== 42-to‘plam ===== */
GEO_OCHIQ.push(["Sharqiy Yevropa iqlimining shakllanishida Atlantika okeanidan va shimoldan esadigan qaysi havo massalarining ta’siri kuchli bo‘ladi?",["iliq va nam havo hamda Arktika sovuq havo","nam va quruq havo hamda Arktika sovuq havo","nam va issiq havo hamda salqin havo","quruq va issiq havo hamda subarktika havo"],0]);
GEO_OCHIQ.push(["Qandim, Oqqum, Porsonko‘l hududlarida qaysi konlarning katta zaxiralari bor?",["uran, fosforit","osh tuzi, marmar","oltin, polimetall rudasi","neft va tabiiy gaz"],3]);
GEO_OCHIQ.push(["Afrika maydonining 30 foizini qaysi mintaqa egallaydi?",["ekvatorial o‘rmonlar","subtropiklar","tropik cho‘llar","savannalar"],2]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan Davlat hududida joylashgan daryolarlarni toping?",["1, 3","2, 4","2, 3","1, 4"],3,"gx42_v1_4"]);
GEO_OCHIQ.push(["Okеanlarda harakatlanuvchi sovuq oqimlarni aniqlang. 1) Bеngеla; 2) Somali; 3) Kurosio; 4) Kanar; 5) Kaliforniya; 6) Gviana; 7) Alyaska",["4, 5, 6, 7","1, 2, 3, 4","3, 4, 6, 7","1, 2, 4, 5"],3]);
GEO_OCHIQ.push(["O‘rta Zarafshon tabiiy geografik okrugi suvlariga oid to‘g‘ri ma’lumotlarni belgilang. 1) Zarafshon daryosi Ko‘ksuv tog‘ tugunidagi Zarafshon muzligidan Fandaryo nomi bilan boshlanadi; 2) okrug hududida Zarafshon daryosiga quyilmaydigan 120 ta soy mavjud; 3) Zarafshon daryosi muz-qorlarning erishidan to‘yinadi; 4) okrugda yerosti suvlarining zaxirasi katta bo‘lib, antropogen davr jinslari orasida 1-20 m chuqurliklarda joylashgan chuchuk suvlar mavjud.",["2, 3","2, 4","1, 3","1, 2"],0]);
GEO_OCHIQ.push(["Toshkent shahri (41°sh.k, 69° shq.u ) da soat kechki vaqti 19:45 ga teng bo’lganda AQSH ning Los-Anjeles shahri (37°52’ sh.k, 118° g’b.u ) da soat nechi bo’lishini aniqlang?",["16:29","07:17","11:03","15:00"],1]);
GEO_OCHIQ.push(["Quyidagi qaysi tarixiy voqealar Vestfal geosiyosiy davrida yuz bergan?",["O‘ttiz yillik urushning tugashi munosabati bilan shartoma imzolanishi","Fransiya, Angliya va Rossiyaning Antanta ittifoqiga birlashuvi","Angliyaning dengizda, Fransiyaning quruqlikda qudratli imperiyaga aylanishi va dunyoda bipolyar holatning yuzaga kelishi","Avstriya-Vengriya imperiyasining inqirozga uchrashi va respublikalar ittifoqi paydo bo‘lishi"],0]);
GEO_OCHIQ.push(["Yer yuzida havo harorati +22°C bo’lsa, yer yuzidan 6000 metr balandlikda uchayotgan havo sharida harorat qancha bo’ladi?",["-14°C","-12°C","+56°C","-10°C"],0]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlardan qaysi qatordagisi to’g’ri?",["Antarktida materigi ichkarisida sovuq va quruq antarktida havo massalari (antisiklon) shakllanadi. Natijada, yuqori havo bosimi ta’sirida shimolga yo‘nalishdagi kuchli shamollar okean tomonga esadi.","Savanna-Bu yerlardagi baland bo‘yli o‘t o’simliklar dasht landshaftlarini eslatadi, tabiatning fasliy o‘zgarishi kuchli, Savannalar yirik hayvonlarning kamligi bilan ajralib turadi.","Avstraliyaning 60 % maydoni oqmas ichki berk havzaga, 33 % i Tinch okean va 7 % i Hind okeani havzasiga qaraydi.","Antarktida qadimgi Lavraziya, keyinchalik Gondvana yirik materiklaridan ajralib, mustaqil materikka aylangan, Alp tog‘ burmalanishida ko‘tarilgan."],0]);
GEO_OCHIQ.push(["Yevropa qit’asidagi qaysi davlatlar dengizga chiqish imkoniyatiga ega emas?",["Albaniya, Bolgariya, Xorvatiya","Vengriya, Chernogoriya, Avstriya","Ruminiya, Albaniya, Chernogoriya","Moldova, Vengriya, Slovakiya"],1]);
GEO_OCHIQ.push(["O‘rta Osiyo iqlimining shakllanishida qaysi havo massalari juda faol ishtirok eyadi?",["subarktika, arktika, mo‘tadil","arktika, mo‘tadil, tropik","subtropik, tropik, arktika","ekvatorial, subekvatorial, arktika"],1]);
GEO_OCHIQ.push(["Qaysi javobda sayyoraviy prognozlarga (kiradi) misol keltirilgan?",["Meksika va Fors qo‘ltiqlarining ifloslanishi","surilma va ko‘chkilarning yuz berishi","gidrosferaning ifloslanishi va toza ichimlik suvi muammosi","o‘simlik va hayvonlarning ma’lum bir joyda yo‘qolib ketishi"],2]);
GEO_OCHIQ.push(["Quyidagi grafiklarning qaysi birida yog’in-sochin (x) va joyning balandligi (y) orasidagi bog‘lanish qonuniyati to‘g‘ri tasvirlangan.",["2","3","1","4"],2,"gx42_v1_14"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida o‘lim va emigratsiya hisobiga aholi soni kamayishining eng past ko‘rsatkichi qaysi yilda qayd etilganini aniqlang.",["1995","1990","2015","2000"],2,"gx42_v1_15"]);
GEO_OCHIQ.push(["Mahalliy dinlar orasida e’tiqodchilar soniga ko’ra qaysi din peshqadam hisoblanadi?",["Sintoizm","Konfutsiylik","Induizm","Sikxizm"],2]);
GEO_OCHIQ.push(["Uchqo’rg’on shahrida harorat 0°C, atmosferaning bosimi 710 mm Hg ga teng bo’lsa, shaharning dengiz sathidan qancha balandda ekanligini aniqlang?",["500 m","496 m","300 m","550 m"],0]);
GEO_OCHIQ.push(["Berilgan tasvir uchun quyidagi javob variantlaridan qaysi biri II raqamga mos kelishini toping?",["Cho’l","Adir","Yaylov","Tog’"],1,"gx42_v1_18"]);
GEO_OCHIQ.push(["Matnni o’qing. Buyuk ko‘llardan janub va g‘arbda joylashgan, ko‘ptarmoqli sanoat, donchilik va sut chorvachiligiga ixtisoslashgan. Ushbu ta’rif AQSH ning qaysi iqtisodiy rayoni uchun xos.",["Janub","O‘rta G‘arb","g’arb","Shimoli-sharq"],1]);
GEO_OCHIQ.push(["Shimoliy o‘rmon mintaqasi o‘rmonlariga xos bo‘lgan muhim xususiyatlarini belgilang?",["asosan, keng bargli o‘rmonlarning mintaqa bo‘ylab keng tarqalganligi","aralash va keng bargli o‘rmonlarning keng tarqalganligi","tik o‘sadigan sifatli, ignabargli daraxtlarning o‘sishi","qimmatli daraxtlarga juda boyligi va daraxtlarning ko‘p yarusligi"],2]);
GEO_OCHIQ.push(["Terayalar-?",["O’tib bo’lmas changalzorlar","Indeslar tilida “dashtlar”","Yomg’irli o’rmonlar","Botqoqlashgan changalzorlar"],3]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar asosida Eyler- Venn diogrammasiga mos keladigan to’g’ri javobni toping? Eron Pokiston a. Mamlakat eksporti tarkibida gazlamalar, sholi, paxta, charm mahsulotlari, gilamlar yetakchi o‘rinlarga ega. b. metallurgiya, mashinasozlik, To’qimachilik, oziq-ovqat kabi tarmoqlar sanoatining asosiy tarmoqlari hisoblanadi. c. Janubi-g‘arbiy Osiyo davlatlari orasida o‘z iqtisodiy salohiyati bilan Turkiya va Saudiya Arabistoni singari alohida ajralib turadi. d. Qishloq xo‘jaligi tarmoqlari qatorida pillachilik ham katta ahamiyatga ega.",["I-c, II-a, III-d","I-d, II-a, III-c","I-b, II-d, III-a","I-c, II-a, III-b"],3,"gx42_v1_22"]);
GEO_OCHIQ.push(["Jadval ma’lumoti asosida topshiriqni bajaring. Soat 7:00 da 1m3havoning to’yinishi uchun necha gramm suv bug’i kerak bo’lishini aniqlang.",["11,9 g","21,5 g","5.95 g","6,6 g"],2,"gx42_v1_23"]);
GEO_OCHIQ.push(["2018-yil ma’lumotlariga ko‘ra qaysi mintaqa aholisining urbanizatsiya darajasi 82 % tashkil etgan?",["Yevropa","Lotin Amerikasi","Avstraliya va Okeaniya","Shimoliy Amerika"],3]);
GEO_OCHIQ.push(["Litosfera quruqliklarda necha kilometrgacha qalinlikka ega?",["250-350","100-200","300-400","200-300"],1]);
GEO_OCHIQ.push(["Matnni o’qing. Zarafshon okrugi Turon plitasining cho‘kkan qismida joylashib, (I)......... davrida dengiz suvining cho‘kindisi tufayli quruqlikka aylangan, so‘ngra daryo o‘zanini yuvib, chuqurlashtirib, qator (II).......lar hosil qilgan. Nuqtalar o’rniniga mos javobni toping. 1- qayir, 2-paleogen, 3- neogen, 4- trassalar",["I-3, II-1","I-2, II-4","I-2, II-3","I-1, II-4"],0]);
GEO_OCHIQ.push(["Quyidagi federativ davlatlardan barpo etilishiga ko’ra hududi benihoya kattalarini ko’rsating?",["AQSH, Avstraliya","BAA, Germaniya","Kanada, Brazillya","Nigeriya, Hindiston"],2]);
GEO_OCHIQ.push(["Quydagichizmada 1 va 2 raqamlar bilan belgilangan kataklarga moskeladigan to’g’ri javobni toping?",["1- Kordileriya: 2- Tubkal","1- Alyaska: 2- Kilimanjaro","1- And: 2- Keniya","1- Appalachi: 2-Gerloxovski-shtit"],3,"gx42_v1_28"]);
GEO_OCHIQ.push(["Yevrosiyo materigidagi keksa platformalar ustida joylashgan tekisliklarni ko’rsating?",["Sharqiy Sibir, Hindiston","Hind-Gang, Buyuk Xitoy","Malva, To’rg’ay","G’arbiy Sibir, Turon"],0]);
GEO_OCHIQ.push(["Quyidagi O’rta Osiyoning yozuvsiz xaritasida A harfi bilan qaysi tabiiy geografik rayoni ko’rsatilganligini aniqlang?",["Orolbo’yi qumli cho’llari","Janubiy yosh tog’lar","Batxiz-qorabel qirlari","Janubiy tyanshan tog’lari"],2,"gx42_v1_30"]);
GEO_OCHIQ.push(["Agar 45° sharqiy uzunlik meridianida mahalliy vaqt 12:00 bo’lsa, qaysi meridianda mahalliy vaqt 19:00 bo’ladi?",["165° shq.u","45° g’.u","135° g’.u","150° shq.u"],3]);
GEO_OCHIQ.push(["Buyuk geografik kashfiyotlar davrida Fernan Magellan faoliyati bilan bog’liq qatorni ko’rsating?",["yer sharsimonligi amalda isbotlandi va Dunyo okeani yaxlitligi ma’lum bo’ldi.","amerika materigiga 4 marta sayohat qilib, Amerka qit’asini kashf qilgan.","antarktida materigini kashf qildi","yevropaliklar uchun Hindistonga dengiz yo’lini ochdi"],0]);
GEO_OCHIQ.push(["Berilgan tasvirda C nuqta ufqning shimoli-g’arb tomonida joylashgan bo’lsa, B nuqtani ufqning qaysi tomonida ekanligini aniqlang?",["Janubiy-janubi-g’arb","Shimoliy-shimoli-g’arb","Shimoliy-sharq-sharq","Janub-g’arb-g’arb"],3,"gx42_v2_3"]);
GEO_OCHIQ.push(["Gersin tog’ burmalanish bosqichi qaysi qaysi eraga tegishli?",["mezozoy","kaynozoy","proterozoy","paleozoy"],3]);
GEO_OCHIQ.push(["Quydagi grafik va jadvaldan foydalanib soat 19:00 da havoning nisbiy namligi qancha bo’ganini aniqlang?",["80","70","60","50"],1,"gx42_v2_5"]);
GEO_OCHIQ.push(["Yevrosiyo materigining Arabiston yarimoroli, Eron tog’ligi va Hind daryosi havzasi hududlari qaysi iqlim mintaqasida joylashgan?",["Subekvatorial","Mo’tadil","Ekvatorial","Tropik"],3]);
GEO_OCHIQ.push(["Afrika materigi Atlantika okeanini qaysi tomondan o’rab turadi?",["g’arb","sharq","shimoliy-sharq","Janubiy-sharq"],1]);
GEO_OCHIQ.push(["Mirzacho’l tabiiy geografik okrugining geologik tuzilishiga xos bo’lgan xususiyatlarni aniqlang? 1) U janubi sharqdan shimoli g‘arbga tomon pasayib boradi. 2) Okrug Turon plitasining cho‘kkan qismida joylashib, neogen davrida dengiz suvining cho‘kindisi tufayli quruqlikka aylangan, so‘ngra daryo o‘zanini yuvib, chuqurlashtirib, qator qayirlar hosil qilgan. 3) Neogen davrining oxiri va quyi antropogen davrida dengizdan bo‘shab, quruqlikka aylangan. 4) Uning janubidagi tog‘ tizmalari paleozoy erasining gersin tog‘ hosil bo‘lishi jarayonida ko‘tarilgan.",["1, 4","2, 3","1, 3","2, 4"],0]);
GEO_OCHIQ.push(["Ustyurt tabiiy geografik okrigida joylashgan botiq nomini ko’rsating?",["Mingbuloq","Kassarma","Shimoliy Ustyurt","Dalvarzin"],2]);
GEO_OCHIQ.push(["Siklon (1) va Antisiklon (2) iqlim sharoitlari uchun xos bo’lgan belgilarni moslashtiring? a) markazida havo bosimi past bo‘lib, atrofga tomon ortib boradi va havo atrofdan markazga tomon soat strelkasi harakatiga teskari yo‘nalishda harakat qiladi. b) front zonasida atmosfera bosimi markazdan atrofga tomon kamayib boradigan, shamollar soat strelkasi harakati yo‘nalishida esadigan havo girdoblari. c) yuqoriga ko‘tarilayotgan havo sovib, suv bug‘lariga to‘yinadi va yog‘ingarchilik bo‘ladi. d) yozda havoning yanada qizishiga, qishda esa sovib ketishiga sabab bo‘ladi.",["1-a, b 2-c, d","1-a, c 2-b, d","1-c, d 2-a, b","1-a, d 2-b, c"],1]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan tabiiy geografik okrug Hududida joylashgan tog’larini toping?",["1, 3","2, 4","1, 2","3, 4"],2,"gx42_v2_11"]);
GEO_OCHIQ.push(["Qashqadaryo viloyati paxta va g’alla ekin maydonlari maydoni jihatdan respublikada nechanchi o’rinda turadi?",["1","2","3","7"],0]);
GEO_OCHIQ.push(["Jizzax viloyatida qaysi kondan oltin qazib olinadi?",["Marjonbuloq","Oqtosh","Uzun","Uchquloch"],0]);
GEO_OCHIQ.push(["Dunyoviy dinlarni e’tiqodchilari va ularning soni bilan moslashtiring?",["1-b, 2-a, 3-c","1-a, 2-c, 3-b","1-c, 2-b, 3- a","1-b, 2-b, 3-a"],0,"gx42_v2_14"]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar qaysi davlatga tegishli ekanligini aniqlang? Ushbu davlatning ko’plab dengizorti hududlari bo’lib ularning katta qismi Karib dengizidagi orollarda joylashgan, Yevropa qit’asidagi yagona mustamlaka hududi- Gibraltar hisoblanadi.",["Fransiya","Ispaniya","Portugaliya","Buyuk Britaniya"],3]);
GEO_OCHIQ.push(["Jahonning qaysi davlatlarida geotermal energiyadan foydalanish yo’lga quyilgan?",["AQSH, Rossiya, Italiya","Fransiya, Kanada, Xitoy","Daniya, Niderlandiya, Germaniya","Belgiya, Ruminiya, Xarvatiya"],0]);
GEO_OCHIQ.push(["Tabiiy geografik okruglar va ularga oid ma’lumotlar to’g’ri moslashtirilgan javobni belgilang? 1) Quyi Amudaryo; 2) Qizilqum; a. neogen davrigacha Tetis dengizi ostida bo‘lgan, lekin paleozoy qoldiq tog‘lari orol kabi suvdan ko‘tarilib turgan. b. qadimiy o‘zanlar orasida nisbiy balandliklari 60— 80 m ga yetuvchi bir nechta tepalik va qoldiq tog‘lar joylashgan. c. okrug geomorfologik tuzilishi jihatidan kenglik bo‘ylab yo‘nalgan bir necha bukilma va ko‘tarilmalardan iborat.",["1-b, 2-c","1-a, 2-b","1-c, 2-a","1-c, 2-b"],2]);
GEO_OCHIQ.push(["Ildizmevalilardan kartoshka yetishtirish bo’yicha yetakchi davlatlarni ko’rsating?",["Indoneziya, Vyetnam","Rossiya, Braziliya","Xitoy, Hindiston","AQSH, Ukraina"],2]);
GEO_OCHIQ.push(["Pokiston davlati hududida tekislik qismida qanday landshaftlar katta maydonni egallaydi?",["Subtropik chalacho’l va cho’llar","Quruq subtopik o’rmonlar","Savannalar","Cho’l va chalacho’l"],3]);
GEO_OCHIQ.push(["1899-yilda quyidagi shaxslardan qaysi biri Shimoliy muz okeani to’g’risida qimmatli ma’lumotlar to’pladi?",["S.O. Makarov","F. Nansen","R. Piri","M.V.Lomonosov"],0]);
GEO_OCHIQ.push(["Ma’muriy-hududiy jihatdan federativ tuzilishga ega bo’lgan davlatni ko’rsating?",["Avstraliya","Niderlandiya","Polsha","Buyuk Britaniya"],0]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlardan foydalanib, Jahon davlatlari va urbanizatsiya ko’rsatkichlari bo’yicha moslashtiring. 1) yuqori darajada urbanizatsiyalashgan 2) o’rta darajada urbanizatsiyalashgan 3) past darajada urbanizatsiyalashgan a. Belgiya, b. Moldova, c. JAR",["1-b, 2-a, 3-c","1-a, 2-c, 3-b","1-c, 2-b, 3-a","1-b, 2-c, 3-b"],1]);
GEO_OCHIQ.push(["Avstraliyada skreblar qaysi tabiat zo’nasida uchraydi?",["Savannalar","Fasliy nam o’rmonlar","Subtropik o’rmonlar","Cho’llar"],3]);
GEO_OCHIQ.push(["Qaysi tog’ oraliq botig’ining okean sathidan balandligi sharqiy qismida 900 metr, g’arbiy qismida esa 300 metrni tashkil etadi?",["Kitob-Shahrisabz","Zarafshon","Sangzor-Nurota","Nurota-Qo’ytosh"],1]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda yer va quyosh harakati bilan bog’liq bo’lgan Afeliy hodisasi qaysi raqam bilan berilgan?",["I","III","IV","II"],0,"gx42_v2_25"]);
GEO_OCHIQ.push(["Antraktida materigi zaminida qaysi turdagi qazilma boyliklari toplilgan?",["neft, tabiiy gaz","olmos, uran","Sluda, tog’ xrustali","mis, marganes"],1]);
GEO_OCHIQ.push(["Namangan shahrining dengiz sathidan mutloq balandligi 449 metr bo’lib, dengiz sathida narmal atmosfera bosimi ko’zatilganga ushbu shaharda bosim qanchaga ten bo’lishini aniqlang?",["710,1 mm Hg","680,9 mm Hg","731,1 mm Hg","457 mm Hg"],0]);
GEO_OCHIQ.push(["AQSH ning qaysi shtatlari aerokosmik sanoat va elektronika sanoati rivojlanganligi bilan ajralib turadi?",["Kaliforniya, Vashington","Texas, Arizona","Michigan, Illinoys","Jorjiya, Forida"],0]);
GEO_OCHIQ.push([",,Biosfera talimoti’’ talimoti kim tomonidan yaratilgan?",["V.V.Dokuchayev","A.A.Grigorev","V.A.Vernadskiy","A. Gumboldt"],2]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada 1 raqami bilan Surxondaryo okrugidagi qaysi tog’ tizmasi tasvirlangan?",["Bobotog’","Hisor","Ko’hitang","Surxontog’"],2,"gx42_v2_30"]);
GEO_OCHIQ.push(["‘’Buxoro madaniy markazi’’ majmuyi qachon tashkil qilingan?",["2018 yil","2010 yil","2011 yil","2014 yil"],1]);
GEO_OCHIQ.push(["BMT tomonidan qo’llaniladigan rasmiy tillarni toping. 1. Ingliz 2. Portugal 3. Ispan 4. Nemis 5. Xitoy 6. Fransuz 7. Rus 8. Arab 9. Hind",["1,2,4,5,6,8","2,3,4,6,7,9","2,3,5,6,8,9","1,3,5,6,7,8"],3]);
GEO_OCHIQ.push(["Tinch okeanidagi Tonga cho’kmasiga exolotdan yuborilgan tovush to’lqini qancha vaqtda yetib boradi?",["6,69 s","7,34 s","6,52 s","7,25 s"],3]);
GEO_OCHIQ.push(["D. Livingston Afrikaning qaysi hududlarini o’rgangan? 1. Nil havzasi, 2. Kalaxariycho’li, 3. Zanzibar orollari, 4. Nyassako’li, 5.Konga daryosining yuqori oqimlarini, 6. Zambezi daryosini, 7. Niger daryosi yuqori va o’rta oqimlari, 8. Tanganikako’li, 9. Lualaba va Kongo daryosining quyi oqimlarini?",["1,2,5,6,9","2,4,5,6,8","1,3,6,7,8","2,3,4,6,9"],1]);
GEO_OCHIQ.push(["Sank-Peterburg-Toshkent orasidagi masofa 4000 km, ushbu masofa globusda esa 8 sm ni tashkil qilsa, Globusning masshtabini aniqlang?",["1:50000000","1:5000000","1:40000000","1:55000000"],0]);
GEO_OCHIQ.push(["Markaziy Afrika tabiiy geografik o‘lkasiga xos bo‘lgan xususiyatlar qaysi javobda berilgan?",["savannalar va butazorlardan iborat o‘ziga xos landshaftlar tarkib topgan, yirik “Serengeti”qo‘riqxonasi shu hududda tashkil etilgan.","qumli va toshloq cho‘lli Sahroyi Kabir shu hududda joylashgan, relyefi va iqlim xususiyatlariga bog‘liq holda o‘simlik va hayvonot olami tarkib topgan","doimiy yashil nam ekvatorial va mavsumiy nam o‘rmonlar zonalarining noyob landshaftlari tarkib topgan, bahaybat gorilla shu hududlarda yashaydi","o‘t o‘simlikka boy Saxel hududlari shu o‘lkada joylashgan, tabiatini asrash maqsadida Kryuger milliy bog‘i tashkil etilgan"],2]);
GEO_OCHIQ.push(["Vadorod sulfatidan gaz oladigan ulkan gaz sanoati markazi, Qarshi cho’ling qaysi qismida joylashgan?",["Shimoli-sharqida","Janubida","Shimoli-g’arbida","Janubi-g’arbida"],3]);
GEO_OCHIQ.push(["Ptolemey tuzgan dunyo xaritada qaysi ko’l tasvirlangan?",["Forsko’li","Kasbiy","Abissum","Orol"],3]);
GEO_OCHIQ.push(["Berilgan tasvirda usta turgan nuqtaga nisbatan Daraxtning azimuti 270° ga teng bo’lsa, Piramedaning azimut yo’nalishini aniqlang.",["Shimoliy-g’arb-g’arb","Janubi-g’arb","Shimoli-sharq","Janubi-sharq"],1,"gx42_v3_9"]);
GEO_OCHIQ.push(["2018-yil ma’lumotlariga ko‘ra qaysi mintaqa aholisining urbanizatsiya darajasi 81 % tashkil etgan?",["Lotin Amerikasi","Yevropa","Avstraliya va Okeaniya","Shimoliy Amerika"],0]);
GEO_OCHIQ.push(["Buyuk Britaniya davlati aholisiga oid ma’lumotlar qaysi javobda to‘g‘ri berilgan? 1) Yevropa mamlakatlari ichida aholi soni bo‘yicha 3-o‘rinda turadi (2018-yil holatiga ko‘ra); 2) mamlakatda eng keng tarqalgan din Protestant xristianligi hisoblanadi; 3) mamlakat Konstitutsiyasiga binoan 7 ta millatning tillari mintaqaviy tillar maqomiga ega; 4) bretonlar, elzasliklar, lotaringlar mamlakatning tub millatlari qatoriga kiradi; 5) Shotlandiyaning shimoli-g‘arbiy tog‘li hududlarida aholizichligi ko‘rsatkichi ancha past.",["1, 3, 4","2, 3, 5","1, 2, 5","2, 3, 4"],2]);
GEO_OCHIQ.push(["Chizmada ko’rsatilgan tabiiy geografik okrug hududidan oqib o’tadigan daryolarni ko’rsatining?",["2, 4","1, 2","1,4","3, 4"],0,"gx42_v3_12"]);
GEO_OCHIQ.push(["Uchquloch va Uzun konlaridan qanday qazilma boyliklar qazib olinadi?",["polimetall rudasi va marmar","volfram rudasi va tabiiy gaz","marganes rudasi va ko‘mir","alyuminiy rudasi va oltin"],0]);
GEO_OCHIQ.push(["Eyler-Venn diagrammasi bo‘yicha davlatlarning iqtisodiyotiga xos xususiyatlar to‘g‘ri ko‘rsatilgan javobni toping. Koreya Res Yaponiya a) sanoatining eng muhim tarmoqlari qatoriga elektronika, elektrotexnika, avtomobilsozlik kiradi; b) “Mitsubishi” jahonning eng mashhur transmilliy kompaniyalari toifasiga kiradi; c) kemalar ishlab chiqarish bo‘yicha jahonda birinchi o‘rinni egallaydi; d) \"Posko\" transmilliy korporatsiyasi dunyoga mashhur.",["I-d, II-b, III-c","I-c, II-b, III-a","I-c, II-d, III-a","I-b, II-a, III-c"],0,"gx42_v3_14"]);
GEO_OCHIQ.push(["Janubi-g‘arbiy Osiyo subregioniga quyidagi qaysi davlatlar kiradi?",["BAA, Ozarbayjon","Armaniston, Kambodja","Nepal, Pokiston","Quvayt, Bruney"],0]);
GEO_OCHIQ.push(["Kiyev shahrida yillik yog’in miqdori 700 mm ga teng, yillik mumkin bo’lgan bo’g’lanish esa 1400 mm ga teng bo’lsa, ushbu hududga suniy sug’orish kerakmi? ( Y:B=K )",["0,7 ga teng, kerak","5 ga teng, kerak emas","0,5 ga teng, kerak emas","0,5 ga teng, kerak"],3]);
GEO_OCHIQ.push(["Shamol ta’sirida hosil bo‘lgan to‘lqinlar uzunligi okeanlarda necha m atrofida bo’ladi?",["80—100 m","90—100 m","60—70 m","600—800 m"],1]);
GEO_OCHIQ.push(["Afrika materigida grabenlardan qanday relyef shakllari tarkib topgan?",["chuqur botiqlar","daryo o’zanlari","chuqur ko‘llar","materik qirg’oqlari"],2]);
GEO_OCHIQ.push(["Dunyo okeanidagi suvning harakati qanday ko‘rinishda namoyon bo‘ladi? 1) oqimlar; 2) qalqishlar; 3) to‘lqinlar; 4) ko’tarilish.",["1, 2","2, 3","3, 4","1, 4"],1]);
GEO_OCHIQ.push(["Dengiz sathida havo bosimi 757 mm Hg ga teng bo’lsa, Manas chuqqisidagi havo bosimini aniqlang?",["308,2 mm Hg","301,3 mm Hg","457,8 mm Hg","421,1 mm Hg"],0]);
GEO_OCHIQ.push(["Afrika qaysi tomondan Yevroosiyo plitasi bilan to‘qnashgan?",["chekka shimoli g‘arbida","chekka janubi g‘arbida","chekka janubi sharqida","shimoliy va sharqiy qismida"],0]);
GEO_OCHIQ.push(["Grafik asosida 2010-yili shahar aholisi necha kishiga ko’payganligini aniqlang. ( yil boshida 200 000 kishi )",["300","700","1500","1000"],2,"gx42_v3_22"]);
GEO_OCHIQ.push(["Sharqiy Osiyo davlatlar hissasiga ishlab chiqarilgan cho‘yanning necha foizi to‘g‘ri keladi?",["61 %","81 %","79 %","71 %"],3]);
GEO_OCHIQ.push(["Mamlakatimizda 2018-yil immigratlar qancha bo’lgan?",["19 ming","1,3 ming","2,3 ming","2,8 ming"],3]);
GEO_OCHIQ.push(["O‘rta Osiyoning tog‘ etaklarida dengiz sathidan 250-300 metrdan, shimolda 1000-1100 metrgacha bo‘lgan joylarda qanday tuproqlar tarkib topgan?",["o‘tloq-alluvial tuproqlar","qora tuproqlar","bo‘z tuproqlar","sur-qo‘ng‘ir tuproqlar"],2]);
GEO_OCHIQ.push(["Matnni o’qing. Surxondaryo viloyatida qadimgi yirik savdo va hunarmandchilik qishlog‘i o‘rnida barpo bo‘lgan shaharni ko’rsating?",["Termiz","Denov","Sho’rchi","Jarqo’rg’on"],1]);
GEO_OCHIQ.push(["Deyarli barcha vulqon o’choqlari qaysi qatlamga to’g’ri keladi?",["mantiya","astenosfera","yadro","granit"],1]);
GEO_OCHIQ.push(["Kimyo sanoati transport tarmog‘I uchun qaysi mahsulotlarni ishlab chiqaradi? 1) bo‘yoqlar; 2) sintetik tolalar; 3) magniy xlorit; 4) sintetik kauchuk; 5) surti shmoyi.",["4, 5","2, 4","3, 5","1, 2"],0]);
GEO_OCHIQ.push(["Dunyo okeanidagi tarqalgan jinslarning kelib chiqishini mos ravishda taqsimlang.",["1-a, 2-c, 3-b","1-c, 2-b, 3-a","1-b, 2-a, 3-c","1-b, 2-c, 3-a"],3,"gx42_v3_29"]);
GEO_OCHIQ.push(["Ushbu xaritada 1 va 2 raqamlar bilan Janubiy Amerikaning qaysi tabiat zonalari egallagan hududlar ifodalangan?",["chalacho’llar va balandlik mintaqasi","savvanalar va cho’llar","savvanalar va chalacho’llar","dashtlar va sernam ekvatorial o’rmonlar"],3,"gx42_v3_30"]);
GEO_OCHIQ.push(["Rossiya po’latning eksporti bo’yicha jahonda nechanchi o’rinda turadi?",["5 o’rin","4 o’rin","3 o’rin","2 o’rin"],1]);
GEO_OCHIQ.push(["Matnni o’qing. Farg‘ona vodiysining tog‘oldi qismida daryolar tog‘lardan keltirgan yotqiziqlardan paydo bo‘lgan (I)...... yoyilmalar keng tarqalgan. Eng katta yoyilmani (II)...... daryosi hosil qilgan. Nuqtalar o’rniga mos javobni quying? 1. konussimon, 2. So‘x, 3. Vodiy ko’rinish, 4. Sirdaryo.",["I-1, II-2","I-3, II-4","I-2, II-3","I-4, II-2"],0]);
GEO_OCHIQ.push(["Yevropa davlatlari ichidan Konstitutsiyon monarxiya boshqaruv shaklidagi davlatlarini ko’rsating?",["Andorra, Belgiya, Germaniya","Daniya, Ispaniya, Belarusiya","Albaniya, Shvetsiya, Andorra","Niderlandiya, Norvegiya, Lyuksemburg"],3]);
GEO_OCHIQ.push(["Agar 45° sharqiy uzunlik meridianida mahalliy vaqt 12:00 bo’lsa, qaysi meridianda mahalliy vaqt 20:00 bo’ladi?",["165° shq.u","45° g’.u","135° g’.u","150° shq.u"],0]);
GEO_OCHIQ.push(["Termik depressiya – bu…..",["O’rta Osiyo hududida (tekislikda) yoz oylarida havo bosimining ko’tarilishi","O’rta Osiyo hududida (tekislikda) yoz oylarida namlikning kamayishi","O’rta Osiyo hududida (tekislikda) yoz oylarida havo bosimining pasayishi","O’rta Osiyo hududida (tekislikda) yoz oylarida havo haroratining ko’tarilishi"],2]);
GEO_OCHIQ.push(["Quyidagi chizmada gorizantallar har 100 m dan o’tkazilgan. A nuqtaning mutloq balantligi 800 m ga teng bo’lib, havo harorati 26,2°C ga teng bo’lib, B nuqtadagi havo haroartini toping.",["24,4°C","28°C","29°C","27,2°C"],1,"gx42_v4_6"]);
GEO_OCHIQ.push(["Afrika materigining subtropik iqlim mintaqasi uchun xos bo’lgan xususiyatlarni aniqlang. 1) yozda dengiz tropik havosi hukumron: 2) chetki g’arbiy va sharqiy hududlari shu iqlim mintaqasida joylashgan: 3) Musson shamollari qishda eng ko’p yog’in keltiradi: 4) janubi-g’arbida yozda kuchli hamsin shamoli esadi: 5) qishda mo’tadil kengliklarning dengiz havosi hukmron:",["1, 5","1,4","2,5","2,3"],0]);
GEO_OCHIQ.push(["Italiya qaysi qishloq xo’jaligi mahsulotlarini yetishtirish bo’yicha Yevropa va Jahon mamalakatlari orasida alohida ajralib turadi?",["sitrus mevalar, uzum, pomidor, zaytun","uzum, shakarqamish, kakao, kartoshka","qandlavlagi, uzum, mandarin, kungaboqar","soya, uzum, makkajo’xori, tamaki"],0]);
GEO_OCHIQ.push(["Sulfat kislotasini ishlab chiqaruvchi davlatlar qatorini aniqlang?’",["AQSH, Xitoy, Rossiya","AQSH, Hindiston, Rossiya","AQSH, Germaniya, Fransiya","Polsha, Xitoy, Hindiston"],0]);
GEO_OCHIQ.push(["Shimoliy Amerikaning Aralash va keng bargli o’rmonlarda o’suvchi o’simliklarni ko’rsatning?",["duglas qarag’ayi,oq va qora qarag’ay","eman, karib qarag’ayi, palma, kiparis","qarag’ay, qayin, terak, tol, kashtan, eman, buk","qora va oq qarag’ay,balsam pixtasi (qarag’ayi), tilog’ochlar"],2]);
GEO_OCHIQ.push(["Bundan 4,6-4 mlrd yil avval geografik qobiqning qaysi qismllari shakllangan?",["Atmosfera, gidrosfera, biosfera","O‘ta oddiy organizmlar","Iqlim mintaqalari va tabiat zonalari","Yadro, mantiya, Yer po‘sti"],3]);
GEO_OCHIQ.push(["2006-yilda Samarqand avtomobil zavodi qaysi davlat bilan hamkorlikda “Isuzu” rusumli avtobus va kichik yuk mashinalarini ishlab chiqara boshladi va “SamAvto” deb nomlandi?",["Turkiya","Xitoy","Janubiy Koreya","Yaponiya"],3]);
GEO_OCHIQ.push(["Jizzax viloyatidagi qaysi konlardan marmar qazib olinadi? 1) Oqtosh; 2) Uchquloch; 3) Uzun; 4) Qo‘ytosh; 5) Qoratosh; 6) Marjonbuloq",["1, 4, 6","2, 3, 4","2, 4, 6","1, 3, 5"],3]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan davlat hududida joylashgan daryolarini toping?",["1, 3","2, 4","1, 2","3, 4"],2,"gx42_v4_14"]);
GEO_OCHIQ.push(["Quyidagi berilgan kashfiyotlar kimga tegishli ekanligi to‘g‘ri ko‘rsatilgan javobni aniqlang. 1) 1498-yilda Hindistonga dengiz yo‘lini ochgan; 2) 1642-1643-yillarda Hind okeanini birinchi bo‘lib g‘arbdan sharqqa suzib o‘tgan; 3) 1771-1775-yillarda Hind okeani chuqurligini aniqlagan; a) X.Kolumb, b) J.Kuk, c) F.Magellan, d) V.da Gama, e) A.Tasman.",["1-d, 2-e, 3-b","1-a, 2-c, 3-b","1-d, 2-b, 3-e","1-a, 2-c, 3-d"],0]);
GEO_OCHIQ.push(["Quydagichizmada 1 va 2 raqamlar bilan belgilangan kataklarga moskeladigan to’g’ri javobni toping?",["1- Kordileriya: 2- Tubkal","1- Alyaska: 2- Kilimanjaro","1- Yangi Gvineya: 2-Mitchell","1- Manas: 2-Gerloxovski-shtit"],2,"gx42_v4_16"]);
GEO_OCHIQ.push(["«Deflyatsiya» so’zining ma’nosi nima?",["Puflash","Kesish","Qimirlatish","Qatlam"],0]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida 2005- yilda shahar aholisi tabiiy va mexanik o’sish hisobiga necha kishiga ko’payganini aniqlang. (jami aholisi yil boshida 100 000 kishi).",["500","700","5000","7000"],1,"gx42_v4_18"]);
GEO_OCHIQ.push(["Chirchiq-Ohangaron tabiiy geografik okrugiga oid to‘g‘ri ma’lumotlarni belgilang. 1) Chirchiq daryosi suvining yarmidan ko‘pi Chatqol irmog‘ining hissasiga to‘g‘ri keladi; 2) okrugni janubi-g‘arbiy chegarasi Sirdaryo bo‘ylab o‘tadi; 3) Ohangaron daryosida Tuyamo‘yin suvombori qurilgan; 4) Ohangaron Daryosining to‘yinishida muz va qor suvlarining salmog‘i katta.",["1, 2","1, 3","2, 4","2, 3"],0]);
GEO_OCHIQ.push(["Afrika maydonining 40 foizini qaysi mintaqa egallaydi?",["subtropiklar","tropik cho‘llar","savannalar","ekvatorial o‘rmonlar"],2]);
GEO_OCHIQ.push(["Yevropada rangli metallurgiyaning asosini qaysi metall tashkil etadi?",["Oltin va kumush","aluminiy va mis","aluminiy va rux","oltin va molibden"],1]);
GEO_OCHIQ.push(["Farg‘ona okrugining kengligi o‘rtacha qanchani tashkil etadi?",["170 km","270 km","370 km","190 km"],3]);
GEO_OCHIQ.push(["Xitoyda XX asrning 70-80-yillarida sanoat korxonalarining qancha qismidan ko‘prog‘i dengizbo‘yi hududlarida joylashgan?",["2/6","2/3","2/4","1/4"],1]);
GEO_OCHIQ.push(["Ehtiyot qismlar ishlab chiqaradigan «Paxtamash» zavodi qaysi shaharda joylashgan?",["Toshkent","Buxoro","Chirchiq","Samarqand"],3]);
GEO_OCHIQ.push(["Qaysi hudud Alp-Himolay seysmik mintaqasiga kiradi?",["Chukotka yarimoroli","Skandinaviya yarimoroli","Pireneya yarimoroli","Alyaska yarimoroli"],2]);
GEO_OCHIQ.push(["Moslashtiring?",["2, 4, 6","6,3,2","1,4,5","1,3,5"],3,"gx42_v4_26"]);
GEO_OCHIQ.push(["70° g’arbiy uzunlik Janubiy Amerika materigini 13° shimoliy kenglik va 52° janubiy kenglikdan kesib o’tadi. Janubiy Amerika materigini 70° g’arbiy uzunlik bo’ylab qanchaga cho’zilganini aniqlang.",["6 332 km","7222 km","5 106 km","4 134 km"],1]);
GEO_OCHIQ.push(["AQShdagi dengizbo‘yi turizmi keng rivojlangan shtatni toping.",["Arizona","Yangi Orlean","Alyaska","Kaliforniya"],3]);
GEO_OCHIQ.push(["Yevrosiyoning eng yirik sersuv daryolari qaysi iqlim mintaqalarida joylashgan?",["tropik va mo’tadil","mo’tadil va musson","subtropik va subarktika","subtropik yomg’irli va musson"],1]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada I va XIV raqamlari bilan Yevrosiyoning qaysi tabiiy geografik o‘lkalar belgilanganligini mos ravishda toping.",["Shimoliy Yevropa, Janubi-sharqiy Osiyo","G’arbiy Yevropa, Sharqiy Osiyo","Janubiy Yevropa, Old Osiyo","G’arbiy Sibir, Janubiy Osiyo"],0,"gx42_v4_30"]);
GEO_OCHIQ.push(["XVI asrning oxirlaridan boshlab Janubiy Osiyo, Avstraliya va Okeaniya hududlari kimlar tomonidan tekshirilib, zabt etila boshlandi?",["fransuzlar","angliyaliklar","inglizlar va gollandlar","nemislar"],2]);
GEO_OCHIQ.push(["Qaysi tabiiy geografik okrugning tekislik qismi yuzasi bir xil emas unda onda-sonda qoldiq tog‘lar va platolar uchraydi?",["Qashqadaryo","Surxondaryo","Quyi-Zarafshon","Mirzacho‘l"],0]);
GEO_OCHIQ.push(["Bo’yi 200 m bo‘lgan gigant suv o‘tlari, Tinch okeanining asosan qaysi qismida o‘sadi?",["shimoliy kenglikning tropik va issiq mintaqalarida","janubiy kenglikning mo‘tadil va sovuq mintaqasida","ekvatorda","shimoliy kenglikning mo‘tadil kengliklarida"],1]);
GEO_OCHIQ.push(["Chizma asosida olimlar va asarlarini birlashtiring.",["1-b, 2-c","1-d, 2-c","1-a, 2-b","1-a, 2-d"],1,"gx42_v5_4"]);
GEO_OCHIQ.push(["Qaysi era mobaynida O‘rta Osiyoning tog‘ oraliqlarida va botiqlarida ko‘llar, botqoqliklar hosil bo‘lgan?",["Kaynozoy","Proterozoy","Paleozoy","Mezozoy"],3]);
GEO_OCHIQ.push(["O‘zbekiston Hind okeaniga chiqish imkonini beradigan qaysi avtomobil yo‘li qurilishida o‘z ulushi bilan qatnashmoqda?",["Andijon-O‘sh-Ergashtom-Qashqar","G‘uzor-Boysun-Qumqo‘rg‘on","Termiz-Hayraton","Termiz-Hirot-karachi"],3]);
GEO_OCHIQ.push(["1:70000000 ni nomli masshtabga aylantiring?",["1 sm da 7000 km","1 sm da 700 km","1 smda 70 km","1 sm da 70000 km"],1]);
GEO_OCHIQ.push(["Shimoliy Amerikaning Fasliy nam (musson) o‘rmonlar zonasiga tavsif bering.",["Ferralit tuproqlar eman karib qarag‘ayi, palma, kiparis, alligator (timsoh turi), qora ilon, kurka, Nikaragua sohillarida anakonda ilonlari yashaydi","Kashtan va qora tuproqlarda: chalov, betaga, bizon o‘ti. Buyuk tekisliklarda tikanli butalar, janubda: dub, akatsiya o‘sadi. Shim va sharqiy qismlarida qalin o‘tlarning bo‘yi - 1,5 m, bizon, bo‘ri, tulki, kiyik, skuns (badbo‘y), opossum, oqboshli burgutlar yashaydi","Qora shuvoq, kaktus (bo‘yi 4-9 m), yukka (daraxtsimon doimiy yashil o‘simlik), qo‘ng‘ir- jigarrang tuproqlarda o‘sadi. Sudralib yuruvchilar: qora ilon, kemiruvchilar, qalqondorlar yashaydi","Qizil va qizil qo‘ng‘ir tuproqlar hosil bo‘lgan. Baland o‘t o‘simlikli, kaktus akatsiyali savannalar va eman qarag‘ayli siyrak o‘rmonlar xos"],0]);
GEO_OCHIQ.push(["Quyidagi grafiklarning qaysi birida daryo nishabligi (x) va daryo oqimining tezligi (y) orasidagi bog‘lanish qonuniyati to‘g‘ri tasvirlangan?",["4","2","1","3"],2,"gx42_v5_9"]);
GEO_OCHIQ.push(["Dunyo okeanida eng baland to‘lqin qaysi okeanda kuzatilgan?",["Tinch","Atlantika","Hind","Shimoliy Muz"],0]);
GEO_OCHIQ.push(["Agroiqlim resurslari Yevropaning qaysi qismida, qishloq xo‘jaligini intensiv rivojlantirishga imkon beradi?",["Markaziy va shimoliy Yevropa","Sharqiy va Janubiy Yevropa","G’arbiy va Janubiy Yevropa","Markaziy va Sharqiy Yevropa"],2]);
GEO_OCHIQ.push(["O‘zbekistonning 3400 m baland tog‘laridan boshlanib, qor va muz suvlaridan to‘yinadigan daryolarini belgilang.",["Qoradaryo, Chirchiq","So‘x, Isfara","Sheroboddaryo, Tursundaryo","Zarafshon, Isfayramsoy"],0]);
GEO_OCHIQ.push(["Afrikaining qaysi davlatida urbanizatsiya darajasi 20% ga ham yetmaydi?",["Burundi, Malavi","Misr, Malavi","Sudan, Ruanda","Neger, KDR"],0]);
GEO_OCHIQ.push(["Quyidagi chizmada 1 va 2 raqamlar bilan berilgan kataklarga mos keladigan javoblarni toping?",["1-Karasimbi; 2-Ural","1-Mak-Kinli; Kavkaz","1-Tubkal; Katta Suvayirgich","1-Trechmir; Ponte"],2,"gx42_v5_14"]);
GEO_OCHIQ.push(["“Tatra” avtomobil konserni qaysi davlatda joylashgan?",["Fransiya","Italiya","Chexiya","Shvetsiya"],2]);
GEO_OCHIQ.push(["Braziliya elektr-energiyasini ishlab chiqarish bo‘yicha jahonning qaysi kuchli turiga kiradi?",["Birinchi o‘ntaligiga","Birinchi uchtaligiga","Birinchi beshtaligiga","Yettilikka"],0]);
GEO_OCHIQ.push(["Agar topografik xaritada gorizontallar har 5 metrdan o’tkazilgan bo’lsa A nuqtaning mutloq balandligini aniqlang?",["145 m","135 m","140 m","130 m"],2,"gx42_v5_17"]);
GEO_OCHIQ.push(["Qurg‘oqchil iqlim tufayli Qozog‘istonning bepoyon tekisliklarida qanday tabiat zonalari shakllangan?",["o‘rmon-dash, cho‘l va savanna","fasliy nam o‘rmonlar va dasht","dasht, chalacho‘l va cho‘l","tundra, o‘rmon tundra va tayga"],2]);
GEO_OCHIQ.push(["16-Aprel kuni sutka mobaynida kuzatilgan eng yuqori harorat +24°C, eng past harorat esa + 3°C gat eng bo’lsa sutkalik amplitudasini toping?",["27°C","21°C","-27°C","-21°C"],1]);
GEO_OCHIQ.push(["O‘zbekiston Respublikasidagi viloyat bo‘ysunuvidagi yangi shaharni ko‘rsating. (2017-y)",["Namangan","Shahrisabz","Termiz","Nukus"],1]);
GEO_OCHIQ.push(["Surxondaryoning eng kam suv sarfi qaysi oylarga to‘g‘ri keladi?",["avgust-oktabr","oktabr-noyabr","sentabr-oktabr","sentabr-noyabr"],2]);
GEO_OCHIQ.push(["Grafikdan foydalanib II-raqamdagi hududning aholisi joriy yilda necha kishiga ko’payganligini aniqlang. ( yil boshida hudud aholisi 4 000 000 kishi )",["40 000","20 000","5 600","60 000"],1,"gx42_v5_22"]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar asosida Eyler- Venn diogrammasiga mos keladigan to’g’ri javobni toping? Sh.Sibir G’. Sibir a. Asosiy tuproq tipi tundra-gleyli, botqoq va podzal tuproqlar. b. Uchta iqlim mintaqasida joylashgan— arktika, subarktika, mo’tadil. c. Neft va ko’mir hududining asosiy foydali qazilmalarini tashkil etadi.",["I-a, II-b, III-c","I-c, II-a, III-b","I-c, II-b, III-a","I-b, II-c, III-a"],3,"gx42_v5_23"]);
GEO_OCHIQ.push(["Efemer cho‘llar 0‘rta Osiyoning qaysi hududlarida tarqalgan?",["Balxash ko‘lining shimoliy kengliklarida","Orol dengizining janubiy kengliklarida","sharqi va janubidagi tog‘ etaklaridagi tekisliklarda","sharqiy tog‘oldi hududlarida"],2]);
GEO_OCHIQ.push(["Nosir Xisraf tuzgan xaritada qanday dengizlar tasvirlangan?",["Abiskun dengizi, Qulzum, Rum","Xorazm, Varang, Efiopiya","G‘arbiy okean, O‘rta, Ichki, Kasbiy","Ichki, Orol, Xorazm, Efiopiya"],0]);
GEO_OCHIQ.push(["Vest-indya orollarida nechta davlat bor?",["15 ta","12 ta","7 ta","13 ta"],3]);
GEO_OCHIQ.push(["Turon tabiiy geografik kichik o‘lkasining tog‘li tabiiy rayonlar guruhiga qaysi hududlar kiradi?",["G‘arbiy Tyanshan, Janubiy. Yosh tog‘lar, Janubiy Tyanshan, Pomir va Badaxshon","G‘arbiy Tyanshan, Janubiy. Yosh tog‘lar, Janubiy Tyanshan, Qoraqum cho‘li, Badaxshon","G‘arbiy Tyanshan, Janubiy. Yosh tog‘lar, Janubiy Tyanshan, Pomir, Badxiz Qorabel qirlari","G‘arbiy Tyanshan, Janubiy. Yosh tog‘lar, Kaspiybo‘yi tekisligi, Pomir, Badaxshon"],0]);
GEO_OCHIQ.push(["Mamlakatimizda gidroliz zavodlari qachondan qurila boshlandi?",["XX asrning 60-yillari","XX asrning 30- yillari","XXasrning40-yillari","XX asrning 50-yillari"],3]);
GEO_OCHIQ.push(["Chirchiq daryosi tekislikka chiqqach, unga chap tomondan qaysi daryolar kelib qo‘shiladi?",["Chotqol, Piskom, Ko‘ksuv va Ugom","Qoranqulsoy, Glavasoy, Oqsoqotasoy, Parkentsoy, Zarkentsoylar","Qizilsuvsoy, Qoraqiyasoy, Oqtoshsoy","Chotqol, Piskom, Oqsoqotasoy, Parkentsoy"],1]);
GEO_OCHIQ.push(["Hozirgi paytda geografik zonallik haqidagi bilimlar qaysi olim taʼlimotiga asoslangan?",["A. Grigoryev","V. Vernadskiy","V. Dokuchayev","Ch. Layel"],2]);
GEO_OCHIQ.push(["Materiklar va ularga oid ma’lumotlar to‘g‘ri moslashtirilgan javobni toping. 1) Antarktida; 2) Yevrosiyo; 3) Janubiy Amerika. a) Bentli tekisligi shu materikda joylashgan; b) Katta Zond orollarida ekvatorial iqlim tarkib topgan; c) Patagoniya kichik tabiiy o‘lkasi shu materikda joylashgan",["1-c, 2-a, 3-b","1-b, 2-c, 3-a","1-c, 2-b, 3-a","1-a, 2-b, 3-c"],3]);
GEO_OCHIQ.push(["Qozog‘iston kichik o’lkasining iqlimiga qish faslida qanday iqlimiy xususiyatlar xos? 1) Markaziy Osiyo antisiklonining ta’siri kuchli bo‘ladi; 2) havo harorati juda past bo‘ladi; 3) kontinental Turon tropik havosi vujudga keladi; 4) qor qoplami ancha qalin, qahraton qish uzoq davom etadi; 5) barqaror ob-havo uzoq vaqt turib qoladi; 6) yog‘in miqdori juda notekis taqsimlanadi",["1, 2, 4","1, 3, 6","2, 4, 5","2, 3, 5"],0]);
GEO_OCHIQ.push(["Quyidagi qaysi shaharda yogʻ- ekstraksiya zavodi mavjud?",["Guliston","Xovos","Shirin","Yangiyer"],0]);
GEO_OCHIQ.push(["Berilgan tasvir uchun quyidagi javob variantlaridan qaysi biri IV raqamga mos kelishini toping",["Cho’l","Adir","Yaylov","Tog’"],2,"gx42_v6_5"]);
GEO_OCHIQ.push(["Oʻrta Osiyodagi eng chuqur gʻor qaysi tabiiy geografik okrug hududida joylashgan?",["Surxondaryo","Oʻrta Zarafshon","Fargʻona","Qashqadaryo"],3]);
GEO_OCHIQ.push(["Maʼmuriy-hududiy tuzilishiga koʻra federativ boʻlgan davlatlarni belgilang.",["Avstraliya, Efiopiya, Niderlandiya","BAA, Nigeriya, Avstriya","JAR, Eron, Indoneziya","AQSH, Finlandiya, Hindiston"],1]);
GEO_OCHIQ.push(["Oʻzbekistonda gazni eng koʻp isteʼmol qiladigan shaharlarni aniqlang.",["Toshkent, Fargʻona, Andijon","Fargʻona, Samarqand, Namangan","Qashqadaryo, Buxoro, Surxondaryo","Toshkent, Andijon, Buxoro"],0]);
GEO_OCHIQ.push(["Dunyodabirinchi seysmografni ixtiro qilgan shaxsni belgilang.",["Golitsin","Beruniy","Chjan Xen","Merkator"],2]);
GEO_OCHIQ.push(["Dengiz sathida havo bosimi 757 mm Hg ga teng bo’lsa, Farg’ona shahridagi havo bosimni aniqlang. (Farg’ona shahrining mutloq balandligi 578 metr)",["687,5 mm Hg","707,3 mm Hg","457,8 mm Hg","699,2 mm Hg"],3]);
GEO_OCHIQ.push(["Atlantika okeaniga xos boʻlgan xususiyatlarni belgilang. 1) barcha yarimsharlarda joylashgan; 2) biomassaga eng boy; 3) ichki dengizlari eng koʻp; 4) kuchli shamol shu yerda kuzatiladi; 5) eng katta suvosti deltasi bor; 6) eng uzun boʼgʻizi bor.",["4, 6","3 5","1, 3","2, 4"],2]);
GEO_OCHIQ.push(["Nuqtalar o‘rniga mos keluvchi so‘z qaysi javobda berilgan? “Etnos madaniyatining o‘zagi... hisoblanadi. Har bir xalqni milliy o‘zligini anglashida u eng muhim omil hisoblanadi”.",["din","hudud","irq","til"],3]);
GEO_OCHIQ.push(["Mavsumiy qor va yomgʻir suvlaridan toʻyinadigan daryolarni aniqlang.",["Soʻx, Gʻuzordaryo, Oqsuv","Tajan, Sheroboddaryo, Sarisuv","Chirchiq, Ohangaron, Atrek","Sirdaryo, Qoradaryo, Oqdaryo"],1]);
GEO_OCHIQ.push(["Buyuk geografik kashfiyotlar davrida qaysi sayyohlar Dunyo okeanida suzib, muhim kashfiyotlar qilgan? 1) Bellinsgauzen; 2) Kolumb; 3) Vespuchchi; 4) Vavilov; 5) Gumboldt; 6) Dreyk",["4, 5, 6","1, 2, 3","1, 4, 5","2, 3, 6"],3]);
GEO_OCHIQ.push(["Qoraqalpogʻiston Respublikasining qaysi tumanida suvni chuchuklashtiradigan qurilma ishga tushirilgan?",["Taxtakoʻpir","Amudaryo","Toʻrtkoʻl","Moʻynoq"],0]);
GEO_OCHIQ.push(["Quyidagi chizmada III va IV raqamlari bilan qaysi tizmalar ko’rsatilganligini aniqlang",["Zirabuloq va Chaqchar","Hisor va Boysun","Zarafshon va Chaqchar","Zirabuloq va Zarafshan"],0,"gx42_v6_16"]);
GEO_OCHIQ.push(["Qashqadaryo tabiiy geografik okrugining yozi issiq, quruq va davomli, qishi nisbatan iliq. G‘arbiy qismi bo‘lib,... (I) havo massalarining to‘siqsiz kirib kelishiga imkon beradi. Yoz okrugning tekislik qismida issiq, quruq va quyoshli bo‘lib, uzoq davom etadi. Okrugning... (II) qismida yillik yog‘in 131-155 millimetr, tog‘li qismida esa 700- 800 millimetr ni tashkil etadi. Matndagi nuqtalar o‘rniga quyidagi ma’lumotlardan mos keladigan javobni toping. 1) Arktika; 2) mo‘tadil dengiz; 3) g‘arbiy; 4) sharqiy.",["I-2; II-4","I-1; II-4","I-1; II-3","I-2; II-3"],3]);
GEO_OCHIQ.push(["Ijtimoiy-iqtisodiy rivojlanish darajasiga koʻra oʻtish iqtisodiyotidagi davlatlar blokiga kiruvchi mamlakatni aniqlang.",["Meksika","Turkiya","Singapur","Bolgariya"],3]);
GEO_OCHIQ.push(["Ozarbayjonning Kaspiyboʻyi tekisliklarida qanday iqlim tipi tarkib topgan?",["quruq subtropik","moʻtadil kontinental","nam subtropik","moʻtadil musson"],0]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda yer va quyosh harakati bilan bog’liq bo’lgan perigeliy hodisasi qaysi raqam ostida tasvirlangan?",["II","III","IV","I"],0,"gx42_v6_21"]);
GEO_OCHIQ.push(["Qadimgi zamon olimlari va ularning geografiya fani rivojlanishiga qo‘shgan hissasi to‘g‘ri moslashtirilgan javobni toping. 1) Aristotel 2) Ptolemey a) issiqlik mintaqalari mavjudligini mantiqiy jihatdan isbotladi; b) xaritalarni tuzishda kartografiya proyeksiyalarni ixtiro qildi; c) xaritalarni tuzishda daraja to‘rini ixtiro qildi; d) geotsentrik nazariyani ilgari surdi;",["1-a, b; 2- d, c","1- b, c; 2- a, d","1-a, c; 2-b, d","1-a, d; 2-b, c"],3]);
GEO_OCHIQ.push(["Quyidagi asarlarni muallifi bilan toʻgʻri moslashtiring.",["a-3, b-1, c-4, d-2","a-4, b-3, c-1, d-2","a-4, b-1, c-2, d-3","a-3, b-2, c-4, d-1"],0,"gx42_v6_24"]);
GEO_OCHIQ.push(["Quyidagi shaharlarning qay birida Ipakchilik ilmiy tadqiqot instituti mavjud?",["Nurafshon","Quvasoy","Fargʻona","Guliston"],2]);
GEO_OCHIQ.push(["Agar tog’ etagida barometr 730 mm Hg simob ustuniga, tog’ tepasida 410 mm Hg simob ustuniga teng bo’lsa, tog’ning nisbiy balandligini aniqlang.",["3200 m","3000 m","3400 m","3600 m"],0]);
GEO_OCHIQ.push(["Atakama cho’li qaysi iqlim mintaqasida joylashgan?",["Subtropik","Tropik","Ekvatorial","Subekvatorial"],1]);
GEO_OCHIQ.push(["Jahondagi eng yirik AESlar quyidagi qaysi davlatlarning hududida joylashgan?",["JAR, Argentina, Braziliya","Rossiya, Fransiya, Yaponiya","Ukraina, Kanada, Germaniya","Eron, Turkiya, Indoneziya"],1]);
GEO_OCHIQ.push(["Quyidagilardan Ohangaron daryosida qurilgan suvomborni aniqlang.",["Tuyaboʻgʻiz","Qopchigʻay","Tuyamoʻyin","Chimqoʻrgʻon"],0]);
GEO_OCHIQ.push(["Yevrosiyoning yozuvsiz xaritasida 70° shq.u. meridiani bo‘yicha 1 va 2 raqamlar bilan qaysi tabiat zonalari tasvirlangan?",["aralash o‘rmonlar, chala cho‘llar va cho‘llar","tayga, chala cho‘llar va cho‘llar","tundra va o‘rmon-tundra, o‘rmon-dashtlar va dashtlar","o‘rmon-dashtlar va dashtlar, chalacho‘llar va cho‘llar"],1,"gx42_v6_30"]);
GEO_OCHIQ.push(["Havo harorati 0°C,havoning nisbiy namligi 40 % bo’lsa, ushbu haroratda namlik 100% bo’lishi uchun qancha suv bug’i kerakligini aniqlang?",["4 g\\m3","1 g\\m3","2 g\\m3","3 g\\m3"],3]);
GEO_OCHIQ.push(["Turkiya qaysi qishloq xo’jaligi mahsulotlarini yetishtirish bo’yicha Yevropa va Jahon mamalakatlari orasida alohida ajralib turadi?",["sitrus mevalar, uzum, pomidor, zaytun","uzum, shakarqamish, kakao, kartoshka","shakarqamish, yong’oq, paxta, zaytun","soya, uzum, makkajo’xori, tamaki"],2]);
GEO_OCHIQ.push(["Shaharlar markazlari, asosan, tadbirkorlik, bank-moliya sektori, boshqaruv sohalarining rivojlanish maskaniga aylanib, aholi yashash massivlar tobora markazdan uzoqlashib borish jarayoni nima deyiladi?",["rurbanizatsiya","urbanizatsiya","migratsiya","suburbanizatsiya"],3]);
GEO_OCHIQ.push(["Kukgumbaz maqbarasi qaysi viloyatda hududida joylashgan?",["Samarqand","Buxoro","Navoiy","Xorazm"],2]);
GEO_OCHIQ.push(["‘’Kompressor’’ zavodi qaysi shaharda qurilgan?",["Shahrisabz","Namangan","Qarshi","Toshkent"],3]);
GEO_OCHIQ.push(["Qashqadaryo tabiiy geografik okrugi suvlariga oid to’g’ri ma’lumotlarni belgilang? 1) Qashqadaryo Hisor tizmasining Tog’tosh dovoni yonidan boshlanib, Amudaryoga quyiladi: 2) Qashqadaryoning Jinnidaryo, Oqsuv, Yakkabog’,Tanxoz, irmoqlari mavjud: 3) okrug hududida Chimqo’rg’on, Pachkamar, Tallimarjon suvomborlari barpo etilgan: 4) Tallimarjon Qashqadaryoda qurilgan:",["2, 3","2, 4","1, 4","1, 3"],0]);
GEO_OCHIQ.push(["Dengiz bo’g’izlari ichida eng ko’p kemalarni o’tkazadigan bo’g’izlarni aniqlang?",["Skagerrak, Mozambek, La-Mansh","La-Mansh, Eresunn, Gibraltar","Yukatan, Gudzon, Pa-de-Kale","Zond, Bering, Lankaster"],1]);
GEO_OCHIQ.push(["Osiyoning qaysi davlatlarining Urbanizatsiya darajasi 20-30 % oralig’ida bo’lib, past ko’rsatkichni tashkil etadi ( 2018-yil ma’lumoti )?",["Suriya, Mongoliya, Iroq","Qirg’iziston, Nepal, Qatar","Yaman, Isroil, Ummon","Tojikiston, Shri-Lanka, Afg’oniston"],3]);
GEO_OCHIQ.push(["Okean tubiga Exolotdan yuborilgan tovush to’lqini 6 sekundda borib qaytib keldi. Okeanining chuqurligini aniqlang?",["4,5 km","3,5 km","5,5 km","6,5 km"],0]);
GEO_OCHIQ.push(["Qaysi viloyatlarda sholi ko’proq ekiladi?",["Jizzax, Namangan","Xorazm, Toshkent","Qashqadaryo, Surxondaryo","Sirdaryo, Navoiy"],1]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar qaysi mamalakat aholisiga tegishli ekanligini toping. 1) aholining tabiiy ko’payishi yillik hisobda 0,3% ga teng. 2) mamalakatda ayniqsa janubiyOsiyo, Afrika, Karib dengizidagi orollardan ko’chib kelganlar megrantlar k’op. 3) aholining diniy tarkibida prostestantlar ustunlik qiladi.",["Germaniya","Italiya","Buyuk Britaniya","Fransiya"],2]);
GEO_OCHIQ.push(["Qutbiy kengliklarda qor chizig’i qayerdan o’tadi?",["Orollarning eng baland qismidan","Skandinaviya tog’laridan","Shpitsberg enarxipelagidan","Dengiz sathidan"],3]);
GEO_OCHIQ.push(["Ikki nuqta orasi 210 km ga teng, xaritada esa bu oraliq 3,5 sm ga teng bo’lsa ushbu xaritaning masshtabini aniqlang?",["1:700000","1:6000000","1:70000000","1:7100000"],1]);
GEO_OCHIQ.push(["Rasmda C harfi bilan ko’rsatilgan qatlamning o’rtacha qalinligi qancha?",["1390 km","35-40 km","2080 km","2869 km"],1,"gx42_v7_15"]);
GEO_OCHIQ.push(["Necha balli zilzilada devorlar qulaydi, tomlar bosib qoladi?",["10 ball","6-7 ball","9 ball","8 ball"],2]);
GEO_OCHIQ.push(["Quyidagi qaysi davlat Janubi-sharqiy Osiyo subregioniga kiradi?",["Laos","Pokiston","Bahrayn","Nepal"],0]);
GEO_OCHIQ.push(["Uilyam Yanszon faoliyatiga taalluqli bo‘lgan geografik ma’lumotlarni toping.",["Avstraliya quruqligiga Yevropaliklardan birinchi bo‘lib qadam qo‘ygan kishi hisoblanadi","Hindiston yarimorolidagi mahalliy aholi bilan yashab, ular hayotiga oid ma’lumotlarni to‘plagan","Okeaniyada mahalliy aholi bilan yashab, tabiatini o‘rgandi va marjon orollarni kashf etdi","Osiyo qit’asidan birinchi bo‘lib Yevropaliklarga zirovarlar olib borgan sayyoh"],0]);
GEO_OCHIQ.push(["O’rta Osiyoning qaysi hududi, asosan subtropik iqlim mintaqasida joylashgan?",["Turkman-Xuroson tog’lari","Ustyut platosi","Ugom-Piskom tog’lari","Hisor-Oloy tog’lari"],0]);
GEO_OCHIQ.push(["Matnni o’qing. Bu o’lka relyefida bir-biridan farq qiladigan baland tog’ tizmalari, pasttekisliklar, yassi tog’liklar mavjud. Tog’lari alp burmalanishida shakllangan. Hududidan Alp-Himolay seysmik mintaqasi o’tadi. Bu mintaqa o’ta faol bo’lib, kuchli zilzilalar bo’lib turadi. Ushbu ma’lumotlar qaysi o’lkaga tegishli?",["Markaziy Osiyo","Sharqiy Osiyo","Janubiy Osiyo","Uzoq-Sharq"],2]);
GEO_OCHIQ.push(["Ushbu tasvirdagi 1-raqamdagi nuqtaning mutloq balandligi 3000 m, 1 va 3- nuqtalarning nisbiy balandligi 1900 m ga teng, 4-nuqtada harorat 0° C ga teng bo’lsa, 3-nuqtadagi havo bosimni aniqlang.",["560 mm Hg","630 mm Hg","580 mm Hg","650 mm Hg"],3,"gx42_v7_21"]);
GEO_OCHIQ.push(["Yevrosiyoning subarktika mintaqasida qaysi tabiat zonalari tarkib topgan?",["tundra va o’rmon-tundra","arktika sahrolari va tundra","aralash o’rmonlar va tayga","o’rmon-tundra va aralash o’rmonlar"],0]);
GEO_OCHIQ.push(["Tog’ning etagida havo harorati +23°C ga teng, cho’qqisida esa harorat -5°C ga teng bo’lsa Ushbu tog’ning nisbiy balandligini aniqlang?",["3000 m","2345 m","4667 m","4123 m"],2]);
GEO_OCHIQ.push(["Ushbu diagrammada 2017-yil O’zbekistonning sanoat tarmoqlaridagi mahsulot ishlab chiqarish tarkibida yengil va yoqilg’i sanoatlarining salmog’lari qaysi raqam bilan belgilangan?",["1 va 4","4 va 6","3 va 5","2 va 5"],3,"gx42_v7_24"]);
GEO_OCHIQ.push(["O’rta Zarafshon tabiiy geografik okrugida yanvarning o’rtacha harorati necha gradusni tashkil etadi?",["-1,0- 2,5 C","-0,9-1,9 C","+1,5+1,9 C","+0,9 +2,3 C"],1]);
GEO_OCHIQ.push(["Quyidagilardan Avstraliya materigiga xos bo’lgan xususiyatlarni belgilang? 1) eng past materik: 2) eng quruq materik: 3) eng mitti odamxo’ r balig’i bor: 4) berk havza maydoni jihatdan birinchi o’rinda turadi: 5) eng balandda joylashgan materik: 6) eng katta chuchuk suvli ko’li bor:",["1, 3, 6","2, 3, 5","1, 2, 4","2, 4, 6"],2]);
GEO_OCHIQ.push(["1995-yilda respublikamizning qaysi shaharida yangi zamonaviy aeroport qurildi?",["Zarafshon","Shahrisabz","Termiz","Urganch"],2]);
GEO_OCHIQ.push(["Hijriy-qamariyning bir yili nechi kunga teng?",["357","354","154","254"],1]);
GEO_OCHIQ.push(["Kanadada Fransuz tilida so‘zlashuvchi aholi qaysi provinsiyasida istiqomat qiladi?",["Monreal","Ottova","Kvebek","hamma javob to’g’ri"],2]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada Axaggar tog’ligi, Darfur platosi, Kap tog’lari qaysi raqamlar bilan belgilanganligini mos ravishda toping?",["1, 4, 7","2, 4, 7","3, 5, 8","1, 3, 6"],1,"gx42_v7_30"]);
GEO_OCHIQ.push(["Geografiya fani rivojlanishining qaysi bosqichida O’rta Osiyo geografiyasiga asos solingan?",["Antik davr","Ilmiy jamiyatlar davri","O’rta asrlar davri","Geografik kashfiyotlar davri"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “8-sinf o‘quvchilarini geografiya o‘qituvchisi shahar tashqarisiga ekskursiyaga olib bordi. Ular sayr qilgan hududda bahorda arpag‘on, lola, lolaqizg‘aldoq, qorabosh, boychechak, binafsha, chuchmoma, tariqbosh, chig‘ir, isfarak, iloq, kovrak kabilar o‘sishini. Bu o‘tlar yozda sarg‘ayib, qurib qoladi, qurg‘oqchilikka chidamli o‘simliklar esa o‘saverishini aniqlashdi. O‘quvchilar ekskursiyaga chiqqan hududda O‘zbekistonning qaysi tabiat mintaqasi tarkib topganligini aniqlang.",["cho’l","adir","yaylov","tog’"],0]);
GEO_OCHIQ.push(["Singapur davlatining siyosiy boshqaruv tizimida kim asosiy rol o’ynaydi?",["Bosh vazir","Milliy kongress","Milliy partiya","Jamoa palatasi"],0]);
GEO_OCHIQ.push(["Materiklar va ularda joylashgan daryolar to’g’ri moslashtirilgan javobni aniqlang.",["1-b, 2-a, 3-c","1-a, 2-c, 3-b","1-c, 2-a, 3-b","1-b, 2-c, 3-a"],3,"gx42_v8_4"]);
GEO_OCHIQ.push(["Jahonning asosiy temir rudasini katta miqdorda import qiluvchi davlatlarini toping.",["Xitoy, Yaponiya, GFR","Kanada, Braziliya, Singapur","AQSH, Buyuk Britaniya, Avstraliya","Rossiya, Fransiya, Jazoir"],0]);
GEO_OCHIQ.push(["Tasvirdagi qaysi nuqtada havo harorati eng past bo’ladi?",["1","3","4","5"],2,"gx42_v8_6"]);
GEO_OCHIQ.push(["Quyidagi tasvirdan foydalanib 2010- yili shahar aholisi tabiiy o’sish hisobiga necha foizga ko’payganligini aniqlang. ( yil boshida aholi 1000 000 kishi)",["0.1%","2,3%","0,4%","1,3%"],0,"gx42_v8_7"]);
GEO_OCHIQ.push(["Qashqadaryo daryosining irmog’I qaysi javobda to’g’ri berilgan?",["Fandaryo","Yakkabog’","Qoranqulsoy","Keles"],1]);
GEO_OCHIQ.push(["Markazi va sharqi tog’lar, shimoliy va janubi g’arbi tog’oldi tekisliklar egallaydi. Kómir, neft, temir, marganes kabi foydali qazilmalar mavjud. Subtropik quruq kontinental iqlim xos. Bu qaysi davlat ekanini aniqlang.",["Pokiston","Afg’oniston","Turkiya","Avstraliya"],1]);
GEO_OCHIQ.push(["Aholi zichligi eng yuqori bo’lgan qit’ani aniqlang.",["Yevropa","Afrika","Amerika","Osiyo"],3]);
GEO_OCHIQ.push(["Yevroosiyo materigiga xos bo’lgan asosiy xususiyatlarni belgilang. 1) eng mitti materik; 2) eng chuqur g’ori bor; 3) eng mitti odamxo’r balig’I; 4) berk havza maydoni jihatdan birinchi o’rinda; 5) eng balandda joylashgan materik; 6) doimiy muzloq yerlar maydoni bo’yicha birinchi o’rinda.",["2, 3, 5","1, 2, 4","1, 3, 6","2, 4, 6"],3]);
GEO_OCHIQ.push(["Seliziya sanoat rayoni qaysi davlat hududida joylashgan?",["Buyuk Britaniya","Italiya","Polsha","Fransiya"],2]);
GEO_OCHIQ.push(["Tasvirda berilgan tog’larni va ularning cho’qqilarini bir-biriga muofiq ravishta moslashtiring.",["1-Jaya, 2-And tog’lari","1-Tubkal, 2- Alp tog’lari","1- Denali, 2-Appalachi tog’i","1-Tirichmir, 2-Hindikush tog’lari"],2,"gx42_v8_13"]);
GEO_OCHIQ.push(["Sharqiy Afrika subregioni aholisiga oid ma’lumotlar berilgan javobni aniqlang.",["Aholisining asosiy qismini arab tilida so‘zlashuvchi xalqlar tashkil qiladi.","Aholisining milliy tarkibi ancha murakkab. Mustamlakachilik davrida qulchilik eng avj olgan mintaqa hisoblanadi.","Aholisi, asosan, bantu oilasiga mansub xalqlardan tashkil topganligi bilan ajralib turadi.","Aholisi etnik jihatdan turli qabila va urug‘, elat va millatlardan tashkil topgan."],3]);
GEO_OCHIQ.push(["1996-yil Respublikamizning qaysi shahrida Koreya Respublikasida ishlab chiqarilgan telefon stansiyasi ishga tushirildi?",["Urganch","Navoiy","Buxoro","Toshkent"],2]);
GEO_OCHIQ.push(["Qashqadaryo tabiiy geografik okrugiga oid ma’lumotlarni aniqlang.",["Paleogen davrida dengiz suvining chekinishi tufayli quruqlikka aylangan, so‘ngra daryo o‘zanini yuvib, chuqurlashtirib, qator qayirlar hosil qilgan.","Okrugning vodiy qismi sharqdan g‘arb tomonga pasayib boradi. Vodiysining o‘ziga xos xususiyati shundaki, u goh kengayadi, goh torayadi.","Tog‘lari gersin burmalanishida ko‘tarilgan, hozirgi relyefi yangi tektonik harakatlar natijasida shakllangan. Tektonik botiq daryo yotqiziqlari bilan qoplangan. Tog‘oldi qismida konussimon yoyilmalar keng tarqalgan.","Tog‘li qismi paleozoy erasida burmalangan bo‘lib, kristalli slanes, ohaktosh, marmar, granit kabi jinslardan iborat"],3]);
GEO_OCHIQ.push(["Materik va okean botiqlarining paydo bo’lishi haqida gipotezalar va ularning mohiyati mos keltirilgan javobni toping. 1) Mobilizim gipotezasi; 2) Dekart-Kant- Laplas gipotezasi: 3) “litosfera plitalari tektonikasi” gipotezasi; a) litosfera plitalarining turli tomonga, har xil tezlikda harakatlanyotganligi; b) Yer Koinotda harakatlanyotgan changsimon zarrachalar birikishidan hosil bo‘lgan; c) “Qit’alar go’yo suv sathida suzib yurgan daraxt barglari singari bir-biri tomon yaqinlashib yoki uzoqlashib, sekin harakatda bo’ladi”.",["1 – a; 2 – b; 3 – c","1 – b; 2 – a; 3 – c","1 – c; 2 – b; 3 – a","1 – c; 2 – a; 3 – b"],2]);
GEO_OCHIQ.push(["Matnni o’qing. “Alpinistlar Ugom tog‘ tizmasining sharqiy yonbag‘ridan tushib borib, daryodan o‘tib, Piskom tog‘ tizmasining g’arbiy yonbag‘ridan ko‘tarilib, bu tog‘ tizmasining eng baland cho’qqisi − Beshtorni zabt etdilar”. Alpinistlar kesib o‘tgan daryoni aniqlang.",["Ko‘ksuv","Ugom","Piskom","Ohangaron"],2]);
GEO_OCHIQ.push(["Kimyo sanoatiga oid to‘g‘ri ma’lumotlarni belgilang. 1) kimyo korxonalarida energiya va suv ko‘p sarflanadi va bu korxonalar tabiatga jiddiy salbiy ta’sir ko‘rsatadi; 2) Janubi- sharqiy Osiyo jahon kimyo sanoatidagi to‘rt asosiy mintaqalardan biri hisoblanadi; 3) mamlakatimizning Qo‘qon, Chirchiq, Farg‘ona, Olmaliq shaharlarida mineral o‘g‘itlar ishlab chiqariladi; 4) Rossiya kimyo sanoatining eng muhim yo‘nalishi polimer materiallarini qayta ishlashdir; 6) Koreya Respublikasi polimer mahsulotlarini ishlab chiqarish bo‘yicha jahonning birinchi beshtaligiga kiradi.",["1, 3, 6","3, 4, 5","2, 5, 6","1, 2, 4"],0]);
GEO_OCHIQ.push(["Topografik xaritadan foydalanib masalani yiching. Matnni o’qing: A harfi bilan berilgan gorizantallning mutloq balangligi 300 metrga teng bo’lsa, B harfdagi gorizantallning mutloq balandligini aniqlang? ( Har bir garizantall 100 m)",["700 m","500 m","1300 m","800 m"],1,"gx42_v8_21"]);
GEO_OCHIQ.push(["Paleozoy erasining birinchi yarmida ro‘y bergan kaledon tog‘ hosil bo‘lish bosqichida O‘rta Osiyo hududida qanday tabiiy geografik jarayonlar sodir bo‘lgan?",["Markaziy Qizilqum past tog‘larining g‘arbiy qismi va Orqaoloy tog‘lari ko‘tarilgan","Qozog‘iston past tog‘larining g‘arbiy qismi va Shimoliy Tyanshan ko‘tarilgan","Qozog‘iston past tog‘larining sharqiy qismi va Hindukush tog‘lari ko‘tarilgan","Markaziy Qizilqum past tog‘lari va Bolxon yarimoroli ko‘tarilgan"],1]);
GEO_OCHIQ.push(["AQSH davlati bilan hamkorlikdagi \"Marmar\"qurilish materiallari ishlab chiqaradigan qo‘shma korxona quyidagi qaysi shaharda qurilgan?",["Zarafshon","Samarqand","Navoiy","Buxoro"],3]);
GEO_OCHIQ.push(["Afrika materigining ekvatorial hududlarida past bosimli mintaqalar, tropik kengliklarida yuqori bosimli mintaqalarning tarkib topishi nimaga bog‘liq?",["havo massalari va uning xususiyatiga bog‘liq","hududining katta qismi tekislik va platolardan iborat ekanligi bilan bog‘iq","bu jarayon Quyoshning balandligiga bog‘liq","asosan, havo oqimlarining harakati bilan bog‘liq"],2]);
GEO_OCHIQ.push(["Dengiz sathida simobli barometr 760 mm.Hg ni ko‘rsatgan vaqtda Denali cho‘qqisidagi havo bosimini (mm.Hg) aniqlang.",["269, 4","234,6","140,6","139,4"],2]);
GEO_OCHIQ.push(["Oloy va Turkiston tog‘laridan boshlanuvchi daryolarni belgilang.",["Qorao‘ngur, Ko‘gart","Aravansoy, Yassi","Qora G‘ulja, Norin","Isfayramsoy, Qurshab"],3]);
GEO_OCHIQ.push(["1970-1980 yillar oralig’ida qurilgan sanoat korxonasini toping?",["Angren ko’mir koni","Samarqand superfosfat zavodi","Olmaliq tog’-kon metallurgiya kombinati","Taxiatosh gidrouzeli"],3]);
GEO_OCHIQ.push(["Namlik kaefsenti 0,7 ga yog’in miqdori esa 600 mm ga teng bo’lsa, bug’lanish qanchaga teng bo’lishini aniqlab toping?",["1400 mm","420 mm","860 mm","400 mm"],2]);
GEO_OCHIQ.push(["Qaysi javob varinatida GESlar nomi berilgan?",["Talimarjon, Muborak","Yangi Angren, Taxiatosh","Xishrav, Farhod","Sirdaryo, Toshkent"],2]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritadan foydalanib (1) Kap tog‘lari va (2) Somali yarimorolining asosiy qismi qaysi iqlim mintaqalarida joylashganini aniqlang.",["tropik va ekvatorial","subtropik va subekvatorial","tropik va subekvatorial","subtropik va ekvatorial"],1,"gx42_v8_30"]);
GEO_OCHIQ.push(["Qaysi shaharda o’tga chidamli qattiq qotishmalar kombinati ishlab turibdi?",["Yangiyo’l","Ohangaron","Chirchiq","Keles"],2]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida o’lim va emigratsiya hisobiga aholi soni kamayishining eng past ko’rsatgichi qaysi yilda qayd etilganini aniqlang.",["2000","1990","2015","1995"],1,"gx42_v9_2"]);
GEO_OCHIQ.push(["Samarqand viloyatida og’ir sanoat tarmoqlaridan quyidagilardan qaysi tarmoqlar tez rivojlanmoqda?",["yengil sanoat, elektronika","mashinasozlik va metallga ishlov berish, kimyo","oziq-ovqat sanoati, farmasevtika","neft-kimyo, aviasozlik"],1]);
GEO_OCHIQ.push(["Matnni o’qing. O’lka hududi janubdan shimolga tomon ozroq nishab. Hududida uzunchoq, cho’ziq do’ngliklar ko’p. Hududining mutlaq balandligi 300 metrdan oshmaydi. Ushbu ma’lumot qaysi o’lkaga tegishli?",["G’arbiy Sibir","Markaziy Osiyo","O’rta Yevropa","Sharqiy Sibir"],0]);
GEO_OCHIQ.push(["Arabiston yarimoroli qaysi erada Yevroosiyo materigiga tutashib ketgan?",["mezozoy","paleozoy","kaynazoy","proterozoy"],2]);
GEO_OCHIQ.push(["20° parallel bo’ylab, 135° sharqiy uzunlikdagi Darvin shahri va 11° sharqiy uzunlikdagi Vindxuk shaharlari orasidagi masofani aniqlang?",["12 970 km","5678 km","9784 km","10 567 km"],0]);
GEO_OCHIQ.push(["Qaysi davlat charm-poyabzal, teriga ishlov berishga ixtisoslashgan davlat hisoblanadi?",["Chexiya","Daniya","Ruminiya","Italiya"],3]);
GEO_OCHIQ.push(["Kaynazoy erasida sodir bo’lgan asosiy o’zgarishlarni aniqlang?",["tabiat zonalari paydo bo’lgan","yashil suvo’tlari rivojlandi","muz bosish hodisalari bo’lib o’tgan","oddiy bakteriyalar paydo bo’lgan"],0]);
GEO_OCHIQ.push(["Materiklar va ularga oid ma’lumotlar to’g’ri moslashtirilgan javobni toping? 1) Antarktida: 2) Yevrosiyo: 3) Janubiy Amerika. a) dashtlar bu yerda pampa deb ataladi b) materik markazida yog’in miqdori 30- 50 mm, sohilga tomon ortib boradi (600- 700 mm) c) g’arbiy qismida yog’in ko’p yog’adi, qishi ancha iliq, yosh salqin bo’ladi. Sharqi esa musson havo massalari ta’siri ostida bo’ladi.",["1-c, 2-a, 3-b","1-c, 2-b,3-a","1-b, 2-c, 3-a","1-a, 2-b, 3-c"],2]);
GEO_OCHIQ.push(["Yevrosiyo materigiga xos bo’lgan asosiy xususiyatini aniqlang?",["har ikkala kengliklar bo’yicha tabiat zonalari takrorlanib joylashgan.","eng chekka janubiy qismida janubiy tropik chizig’i kesib o’tgan.","doimiy muzloq yerlar maydoniga ko’ra birinchi o’rinda turadi.","qadimda Gondvana materigining bir qismi bo’lgan"],2]);
GEO_OCHIQ.push(["O’rta Osiyo hududiga qishda g’arbdan va shimoli-g’arbdan, Volgabo’yi va Sharqiy Yervropa tekisligidan qaysi havo massalari kirib keladi?",["quruq tropik","ekvatorial","kontinental mo’tadil","nam tropik"],2]);
GEO_OCHIQ.push(["Ustyurt tabiiy geografik okrugiga oid to’g’ri ma’lumotlarni belgilang? 1) okrugda Qorabovur, Asaka Ovdon, Kassarma ko’tarilmalari mavjud: 2) Ustyurt platasi alp burmalanishda vujudga kelib, so’ngra pasayib, dengiz suvi bosgan: 3) Ustyurt arid-denudatsion plato hisoblanib, mutloq balandligi 100-200 m bo’lib, atrofi chinklar bilan o’ralgan: 4) okrug geomorfologik tuzilishi jihatidan kenglik bo’ylab yo’nalagan bir necha bukilma va kutarilmalardan iborat.",["1,3","2,3","1,4","3,4"],3]);
GEO_OCHIQ.push(["Yirik suvomborlarining soni bo’yicha jahonda alohida ajralib turadigan mamlakatlar qatoriga kiruvchi davlatni aniqlang?",["O’zbekiston, Misr","Xitoy, Hindiston","Qozog’iston, Jazoir","Ukraina, Meksika"],1]);
GEO_OCHIQ.push(["Tog’larda qanday tabiiy geografik jarayonlar kuchli bo’ladi?",["denudatsiya va eroziya jarayonlari","surilma va tashlama jarayonlar","nurash va abraziya jarayonlar","abraziya va sel jarayonlari"],0]);
GEO_OCHIQ.push(["Quyidagi tasvirdan foydalanib yer po’stining granit qatlamini ko’rsating?",["3","2","4","1"],1,"gx42_v9_15"]);
GEO_OCHIQ.push(["Tinch okeanida qaysi botiqlar joylashgan?",["Shimoli-sharqiy, Shimoli-g’arbiy","Shimoliy Amerika, Avstraliya- Antarktida","Shimoliy Amerika, Angola","Shimoli-sharqiy, G’arbiy Avstraliya"],0]);
GEO_OCHIQ.push(["Vasko da Gama faoliyatiga taalluqli bo’lgan geografik ma’lumotlarni toping?",["Osiyo qit’asida birinchi bo’lib Yevropaliklarga zirovarlar olib borgan sayyoh.","Hindiston yarimorolidagi mahalliy aholi bilan yashab, ular hayotiga oid ma’lumotlarni to’plashgan.","Okeaniyada mahalliy aholi bilan yashab, tabiatini o’rgandi va marjon orollarni kashf etdi.","Avstraliya quruqligiga Yevropaliklardan birinchi bo’lib qadam qo’ygan kishi hisoblanadi."],0]);
GEO_OCHIQ.push(["Rekreatsiya xo’jaligi tarkibiga nimalar kiradi?",["axborot xizmati va sanoati","reklama va transport quvrlari","dam olish uylari va bazalari","servis xizmat va moddiy ishlab chiqarish"],2]);
GEO_OCHIQ.push(["Quyidagi grafik asosida havo haroratining yillik amplitudasini aniqlang?",["35° C","20° C","17° C","28° C"],0,"gx42_v9_19"]);
GEO_OCHIQ.push(["Zarafshon daryosining to’lin-suv davri qaysi oylarga to’g’ri keladi?",["mart-iyun","aprel-iyun","avgust-sentabr","iyun-avgust"],3]);
GEO_OCHIQ.push(["Quydagi qaysi omillar balandlik mintaqalarning shakllanish jarayonida sodir bo’ladi?",["yuqori ko’tarilgan sari Quyosh radiatsiyasining kamayishi, havo bosimining esa ortishi.","namlik va Quyoshning nurli energiyasining kamayishi","yuqoriga ko’tarilgan sari Quyosh radiatsiyasining kuchayishi va haroratining pasayishi.","yog’in-sochining va havoning tiniqligini kamayishi"],2]);
GEO_OCHIQ.push(["Geotermal energiyadan foydalanish qaysi davlatlarda yo’lga qo’yilgan?",["Rossiya, Norvegiya, Meksika","Ispaniya, Peru, Kanada","AQSH, Filippin, Italiya","Yaponiya, Xitoy, Chili"],2]);
GEO_OCHIQ.push(["XX asrda ishlov beriladigan joylarning maydonlari hajmi dunyo bo’yicha necha barobarga kengaytirildi?",["besh","to’rt","ikki","uch"],2]);
GEO_OCHIQ.push(["Quyidagi jadval asosida olimlar va ularga tegishli bo’lgan asarlarni moslashtiring.",["I-d, II-a","I-b, II-c","I-a, II-b","I-c, II-a"],3,"gx42_v9_24"]);
GEO_OCHIQ.push(["Pokiston mamlakatining tabiiy sharoitiga oid to‘g‘ri ma’lumotlar berilgan javobni toping.",["shimoliy va g‘arbiy qismlari baland tog‘lar bilan band bo‘lsa, sharqiy va janubiy hududlari esa tekislik relyefiga ega. Asosiy hududida issiq tropik iqlim hukmronlik qiladi.","hududining relyefi, asosan, tog‘li bo‘lib, tekisliklar, asosan, dengizlar bo‘yida uchraydi, hududi yuqori darajada seysmikligi bilan tavsiflanadi.","Hududining katta qismini baland tog‘ tizmalari egallaydi. Seysmik jihatdan faol mintaqada joylashganligi tufayli respublikada kuchli zilzilalar sodir bo‘lib turadi.","Hududini, asosan, keng tekisliklar ishg‘ol etadi. Tog‘lar faqat janubiy va sharqiy chegarabo‘yi hududlarida joylashgan."],0]);
GEO_OCHIQ.push(["Dengiz sathida atmosfera havo bosimi 760 mm Hg ga teng bo’lsa, Qo’qon shahrida havo bosimi qanchaga teng bo’lishini aniqlang?",["712 mm Hg","567 mm Hg","719,5 mm Hg","706,3 mm Hg"],2]);
GEO_OCHIQ.push(["Kelib chiqishiga ko’ra tektonik ko’l nomini ko’rsating?",["Katta Ayiq","Eri","Viktoriya","Tayxu"],2]);
GEO_OCHIQ.push(["Quyidagi jadvalni moslashtiring?",["1-b, 2-c, 3-a","1-a, 2-c, 3-b","1-c, 2-a, 3-b","1-b, 2-b, 3-c"],1,"gx42_v9_28"]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining chala cho‘l va cho‘l zonasining tuproqlari va asosiy o‘simliklarini belgilang?",["sho‘rxok tuproqlarida, asosan, mayda bargli tosh eman, saksovullar o‘sadi","qizil-qo‘ng‘ir tuproqlarida, asosan, iloq, yertut, akatsiya eng ko‘p uchraydi","qo‘ng‘ir-jigarrang tuproqlarida qora shuvoq, kaktus, yukka o‘sadi","kashtan va qora tuproqlarida, asosan, chalov, betaga, bizon o‘ti eng ko‘p uchraydi"],2]);
GEO_OCHIQ.push(["Quyidagi Shimoliy Amerika materigining yozuvsiz xaritasida Florida yarimoroli qaysi raqam bilan ko’rsatilgan?",["1","2","3","4"],0,"gx42_v9_30"]);
GEO_OCHIQ.push(["O’rta Osiyoning tekislik qismidagi chalacho’l zonasiga qaysi hududlar kiradi?",["Ustyurt platosining g’arbiy qismlari va Sulton Uvays tog’ining etaklari","To’rg’ay supasimon o’lkasining janubiy qismi, Qozog’iston past tog’larining juda katta janubiy qismi","Atrek vodiysi, To’rg’ay platosi","Murg’ob vodiysi, Markaziy Qizilqum past tog’lari"],1]);
GEO_OCHIQ.push(["Tadqiqotchilar Qashqadaryo daryosining irmog’i – Oqsuv havzasi tabiatining tuzilishi va xususiyatlarini o’rganishdi. Tadqiqotchilar qaysi soha vakillari ekanligini aniqlang.",["landshaftshunoslik","geokriolog","glyatsiolog","gidrolog"],0]);
GEO_OCHIQ.push(["Topografik xaritalarning har bir varag’i kilometrli kataklarga bo’lingan bo’ladi. Agar katak tomonlarining uzunligi 4 cm bo’lsa, topografik xarita masshtabini aniqlang.",["1:100 000","1:20 000","1:50 000","1:25 000"],3]);
GEO_OCHIQ.push(["Tinch okeanini janubi-sharqdan qaysi materik o’rab turadi?",["Janubiy Amerika","Yevroosiyo","Avstraliya","Shimoliy Amerika"],0]);
GEO_OCHIQ.push(["Agar havo harorati +30°C, havoning nisbiy namligi 80% bo’lsa, 1m3 havoning to’yinishi uchun qancha suv bug’i kerak bo’ladi?",["9 gr","10 gr","6 gr","8 gr"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. Avstraliya materigining janubiy-g’arbiy qismidan yo’lga chiqqan sayohatchi dastlab, qattiq bargli doimiy yashil o’rmonlar, savannlar va siyrak o’rmonlar,chalacho’l va cho’llarni bosib o’tdi. Sayohatchi qaysi iqlim tipi bo’ylab harakatlangan?",["Issiq tropik","O’rta dengiz subtropik","Nam subtropik","Kontinental tropic"],1]);
GEO_OCHIQ.push(["O’rta Osiyoning tabiiy geografik o’lk alari jadvalida noto’g’ri berilgan javobni aniqlang.",["1, 3","2, 4","1, 4","2, 3"],1,"gx42_v10_7"]);
GEO_OCHIQ.push(["Planinaga oid ta’rifni toping.",["Pasttekisliklarda ahyon-ahyonda uchraydigan dashtlardir","Eng baland joylardagi ham tog‘ o‘rmonlaridir","O‘tib bo‘lmas changalzorlardir","Tog‘ etaklarida botqoqlashgan changalzorlar"],1]);
GEO_OCHIQ.push(["Farg’ona tabiiy geografik okrugiga oid ma’lumotlarni tog’ri aniqlang?",["paleozoy erasi ohaktosh slaneslaridan iborat bo‘lib, uning ustini mezozoy va kaynazoy eralarining cho‘kindi jins hamda mergellari, gillari va qumtoshlari qoplab olgan. Mezozoy erasining yura va bo‘r davr jinslari (ohaktosh, dolomit va boshqa) ko‘proq okrugning sharqida joylashgan balandliklarda uchraydi.","Tabiiy geografik okrugi geologik tuzilishi jihatidan bir xil emas. Uning tog‘li qismi paleozoy erasining gersin tog‘ hosil bo‘lishi jarayonida burmalangan bo‘lib, kristalli slanes, ohaktosh, granit kabi jinslardan tashkil topgan.","tekislik qismi dengiz suvi ostida bo‘lgan. So‘ngra ko‘tarilgan tog‘lar yemirilib pasaygan, natijada, ularning quyi qismlarini dengiz suvi bosgan. Alp tog‘ hosil bo‘lish jarayonida o‘sha pasaygan tog‘lar qayta ko‘tarilib, dengiz suvi chekinib, okrugning tekislik qismi ham quruqlikka aylangan.","Okrug tektonik botiqda joylashib, neogen davrining oxiri va quyi antropogen davrida dengizdan bo‘shab, quruqlikka aylangan. So‘ngra atrofidagi tog‘lardan boshlanadigan daryolar olib kelgan qum, gil, lyossimon jinslar bilan qoplangan."],3]);
GEO_OCHIQ.push(["Quyidagi qaysi davlat boshqaruv shakliga ko’ra konstitutsion monarxiya hisoblanadi?",["Kosta-Rika","Myanma","Keniya","Lesoto"],3]);
GEO_OCHIQ.push(["Agar bitta to’qimachilik korxonasi ip- gazlama, jub gazlama, shoyi va zig’ir gazlamalar ishlab chiqarsa, bu tashkiliy shakldagi ishlab chiqarish nima deb ataladi?",["kombinatlashtirish","ixtisoslashuv","Majmua","kooperatlashuv"],0]);
GEO_OCHIQ.push(["Matnni o’qing. Bu yerda mavsumiy havo massalari almashinadi: yozda dengiz tropik havosi, qishda mo‘tadil kengliklarning dengiz havosi hukmron. janubi-sharqiy qirg‘oqbo‘yi hududlarida yog‘in yil davomida bir me’yorda yog‘adi, lekin musson shamollari yozda eng ko‘p yog‘in keltiradi. Matnda berilgan ma’lumotlar qaysi o’lkaga oid ekanligini aniqlang?",["Janubiy Osiyo","Janubiy Afrika","Sharqiy Osiyo","Janubiy-sharqiy Avstraliya"],2]);
GEO_OCHIQ.push(["Quyidagi topografik xaritadan foydalanib shamol yo‘nalishini aniqlang.",["janubi-g‘arbdan shimoli-sharqqa","janubi-sharqdan shimoli-g‘arbga","shimoli-sharqdan janubi-g‘arbga","shimoli-g‘arbdan janubi-sharqqa"],3,"gx42_v10_13"]);
GEO_OCHIQ.push(["Quyidagi olimlarni asarlarini to’g’ri joylashtiring. 1) Abu Is’hoq Istaxriy 2) Yoqut ibn Abdulla 3) Mahmud Koshg‘ariy 4) Abul Hasan Ali Ma’sudiy 5) al-Xorazmiy 6) Abu Rayhon Beruniy a) «Iqlimlar kitobi», b) «Devonu lug‘otit turk» c) «Mamlakatlaming alifbo tartibida ro‘yxati» d) O‘rta Osiyo va Kavkaz geografiyasi e) Hindison f) «Yer tasviri»",["1a 2b 3c 4d 5e 6f","1a 2c 3b 4d 5e 6f","1a 2c 3d 4b 5f 6e","1a 2c 3b 4d 5f 6e"],3]);
GEO_OCHIQ.push(["Janubiy Afrika Respublikasining tabiiy sharoitiga xos bo’lgan xususiyatlarni belgilang.",["iqlimi, asosan, mo‘tadil bo‘lib, musson shamollari ta’sirida shakllanadi. Yoz issiq va nam bo‘lib, uzoq davom etadi,","relyefining xususiyatlariga ko‘ra tog‘li mamlakat. Asosiy foydali qazilmalari neft, qalayi, volfram, boksit, oltin, mis hisoblanadi.","relyefi pasttekislik ko‘rinishiga ega bo‘lib, mamlakatning eng baland nuqtasi dengiz sathidan 1500 metr balandlikda joylashgan","janubi va sharqidagi dengizbo‘yi hududlarda nam subtropik iqlim kuzatiladi. Mamlakatni qurg‘oqchil iqlimli qismida suv resurslari taqchilligi mavjud"],3]);
GEO_OCHIQ.push(["Grafikdan foydalanib Bahor faslinig o’rtacha yog’in miqdorini aniqlang.",["89 mm","74 mm","100 mm","220 mm"],1,"gx42_v10_17"]);
GEO_OCHIQ.push(["Quyi Zarafshon tabiiy geografik okrugida tushadigan eng ko‘p yog‘in miqdori qaysi oylarga to‘g‘ri keladi?",["dekabr-yanvar","yanvar-fevral","fevral-mart","mart-aprel"],3]);
GEO_OCHIQ.push(["Yevrosiyo materigidagi aralash o‘rmonlar tabiat zonasi uchun quyidagilardan qaysi biri xos xususiyat bo‘la oladi?",["asosan, podzol tuproqlar uchraydi. Yevropa qarag‘ayi. oq va qora qarag‘ay, kedr, tilog‘ochlar o‘sadi. Bu zonada hayvonlardan bug‘u, qo‘ng‘ir ayiq, silovsin, olmaxon, qarqur va boshqalar ko‘p uchraydi","materikning g‘arbiy va sharqiy qismlarida joylashgan Zonaning asosiy qismi chimli podzol tuproqlar bilan qoplangan. Keng barglilardan eman, qora qayin, lipa, zarang, grab, jo‘ka va boshqa daraxtlar o‘sadi","zonaning sur o‘rmon tuproqlarida qarag‘ay, qayin, terak, tol, kashtan, eman, buk, marvaridgul va yertut o‘sadi. Virgins bug‘usi, kalamush, puma, bobr, qizil olmaxon, yenot, burunduq asosiy hayvonlardir","tundra-gleyli tuproqlar ustida qora va oq qarag‘ay, balzam pixtasi (qarag‘ayi), tilog‘ochlar o‘sadi. Bu yerlarda shimol bug‘usi, qo‘ng‘ir ayiq, bo‘ri, tulki, silovsin va kiyik yashaydi"],1]);
GEO_OCHIQ.push(["Janubiy Amerikada Tekislikli Sharq tabiiy geografik o’lkasiga kiruvchi hududlarni aniqlang? 1) La-Plata tekisligi; 2) Patagoniya; 3) Atakama cho’li; 4) Amazoniya; 5) Gviana yassitog’ligi; 6) Atlantika bo’yi pastekisligi.",["4, 5, 6","2, 4, 5","1, 5, 6","1, 2, 3"],1]);
GEO_OCHIQ.push(["Keltirilgan energetika inshootlaridan GES (gidroelektr stansiya) larni ajratib oling. I) Xonobod; 2) Buloqboshi; 3) Farhod; 4) Irtijor; 5) Muborak; 6) Tuyamo‘yin; 7) Shohimardon; 8) Shirmonbuloq; 9) Angren.",["1, 2, 3, 4, 6, 7, 8","1, 3, 4, 5, 6, 7, 8","2, 3, 4, 5, 6, 7, 9","1, 2, 3, 4, 5, 6, 7, 8"],3]);
GEO_OCHIQ.push(["O’rta Osiyo iqlimining shakllanishida quyidagi qaysi havo massasi juda faol ishtirok etadi?",["Subtropik","Ekvatorial","Arktika","Subekvatorial"],2]);
GEO_OCHIQ.push(["Tuman aholisi 2015-yilning boshida 100000 kishini tashkil etgan.Grafikdagi ma’lumotlardan foydalanib tuman aholisin 2015- yilda yalpi o’sish hisobiga necha kishiga ko’payganligi aniqlang?",["1300","800","1100","2000"],0,"gx42_v10_23"]);
GEO_OCHIQ.push(["Avstraliya materigining tabiatiga oid to‘g‘ri ma’lumotlar berilgan javobni toping.",["Subtropik iqlim mintaqasi materikning g’arbiy qismini vaTasmaniya orolining shimoliy sohil bo‘ylarini qamrab oladi. Bu mintaqada uchta iqlim tipi hosil bo‘lgan.","Subekvatorial iqlim mintaqasi materikning 20° j. k. gacha bo‘lgan hududlarini egallaydi. Yozda (dekabr- fevral) ekvatorial havo massalari ko‘p yog‘in keltiradi (800 — 2 000 mm).","Tropik mintaqasida chalacho‘l va cho‘l zonalari hamda dashtlar mavjud. Bu yerda harorat juda yuqori (iyulning o‘rtacha harorati +30 °C ga teng), yog‘ingarchilik esa nihoyatda kam bo‘ladi.","Ekvatorial o‘rmonlar zonasi ekvatorning har ikki tomonida katta maydonni egallagan. Daraxtlardan geveya, palmalarning har xil turlari, kakao daraxti, seyba (paxta) daraxti, qovun daraxti o‘sadi."],1]);
GEO_OCHIQ.push(["Quyoshdan uzoqligi bo’yicha 7-o’rinda turuvchi sayyorani aniqlang.",["Uran","Saturn","Neptun","Yupiter"],0]);
GEO_OCHIQ.push([",,Ozon tuynugi’’ so’nggi vaqtlarda qaysi hududda kuzatilgan?",["Avstraliyaning shimolida","Janubiy Amerikaning Antarktidaga tutash hududlarida","Yevroosiyoning shimoliy kengliklarida","Shimoliy Amerikaning shimoliy qismida"],2]);
GEO_OCHIQ.push(["1733-1743-yillarda kim tashkil etgan ekspeditsiya Shimoliy Muz okeanini o’rganishda muhim ahamiyatga ega bo’lgan?",["Aleksandr I","Pyotr I","M. Gvozdev","A. Nikitin"],1]);
GEO_OCHIQ.push(["Matnni o’qing. Bu davlat temir, uran, mis, ko’mir, oltin, nikel, boksit zaxiralariga boy.Hududining katta qismini cho’l va chalacho’llar egallaydi. Qishloq xo’jaligi iqtisodiyotining muhim tarmoqlaridan biridir. Chorvachilikning asosiy tarmoqlari-qo’ychilik va qoramolchilik. Dehqonchiligi bog’dorchilik va uzumchilikka ixtisoslashgan. Yuqoridagi ta’rif qaysi davlatga tegishli ekanligini aniqlang.",["Qozog’iston","Nigeriya","JAR","Avstraliya"],3]);
GEO_OCHIQ.push(["Janubiy tropik chizig’i kesib o’tgan davlatlarni belgilang.",["Avstraliya, Braziliya, Peru","JAR, Avstraliya, Chili","Mozambik, Urugvay, Madagaskar","Namibiya, Botsvana, Urugvay"],1]);
GEO_OCHIQ.push(["Quyida berilgan Afrika materigining tabiiy xaritasida shimoliy tropik chizig’i kesib o’tgan nuqtani aniqlang?",["Axaggar tog’ligi","Tibesti tog’ligi","Efiopiya tog’ligi","Kalaxari cho’li"],0,"gx42_v10_30"]);
GEO_OCHIQ.push(["Amudaryo daryosining qadimgi o‘zanlari qaysi javobda to‘g‘ri berilgan?",["Qora O‘zak, Chodaksoy","Shertansoy, Sho‘ro‘zak","Qizketgan, Toshsoqa","Daryoliq, Ko‘hnadaryo"],3]);
GEO_OCHIQ.push(["Kaynozoy erasida O‘rta Osiyo hududida qanday tabiiy o‘zgarishlar sodir bo‘lgan?",["quruqliklar maydoni kengaygan","nam va issiq iqlim tarkib topgan","o‘rmonlar maydoni kengaygan","dengiz qayta bostirib kelgan"],3]);
GEO_OCHIQ.push(["Gonduras va Gvineya davlatlarining poytaxtlarini belgilang?",["Aganya, Bisau","Tegusigalpa, Konakri","Jorjtaun, Banjul","Sent-Jorjes, Kayenna"],1]);
GEO_OCHIQ.push(["Janubi-sharqiy Osiyo mintaqasidagi qaysi davlatlar orollar mamlakatlari guruhiga kiradi?",["Singapur, Filippin","Indoneziya, Sharqiy Timor","Tailand, Filippin","Malayziya, Singapur"],0]);
GEO_OCHIQ.push(["Grafikdan foydalanib III-raqamdagi huduning aholisi joriy yilda necha kishiga ko’payganligini aniqlang. ( yil boshida hudud aholisi 4 000 000 kishi )",["40 000","20 000","5 600","26 000"],3,"gx42_v11_5"]);
GEO_OCHIQ.push(["Qizilqum tabiiy geografik okrugida joylashgan botiqlarni belgilang?",["Oyoqog‘itma, Yog‘ochota, Sariqamish","Sariqamish, Borsakelmas, Yog‘ochota","Asaka-Ovdon, Sho‘ro‘zak, Yettisoy","Mingbuloq, Qoraxotin, Mullali"],3]);
GEO_OCHIQ.push(["Sayohatchilar dastlab, 90° azimut bilan 2000 metr, so‘ngra 125° azimut bilan 600 metr, 35° azimut bilan 500 metr yurdi. Sayohatchilar yurgan yo‘lni 1:20000 masshtabli chizmada tasvirlang?",["5 cm; 1,5 cm; 2,5 cm","20 cm; 6 cm; 5 cm","10 cm; 3 cm; 2,5 cm","22 cm; 6 cm; 10 cm"],2]);
GEO_OCHIQ.push(["Atmosferada sodir bo‘ladigan qaysi tabiiy geografik hodisa (jarayon)lar “okean ↔ atmosfera ↔ quruqlik” tizimidagi modda va energiyaning almashinuvi tufayli ro‘y beradi. 1) shamol; 2) bo‘ron; 3) quyun; 4) siklonlar; 5) qutb yog‘dulari; 6) yulduz uchishi; 7) zilzilalar.",["1, 2, 3","4, 7, 6","4, 5, 7","6, 5, 4"],0]);
GEO_OCHIQ.push(["O‘rta Osiyoning tekislik qismidagi dasht zonasiga qaysi hududlar kiradi?",["Atrek vodiysi, To‘rg‘ay platosi, Qozog‘iston past tog‘larining juda katta shimoliy qismlari.","To’rg’ay platosining shimoliy qismi, Qozog’iston past tog’larining shimoliy va markaziy qismlari","Ustyurt platosining g‘arbiy qismlari, Sulton Uvays tog‘i etaklari.","To‘rg‘ay supasimon o‘lkasining janubiy qismi, Qozog‘iston past to‘g‘larining juda katta janubiy qismi."],1]);
GEO_OCHIQ.push(["O‘rta Zarafshon okrugida joylashgan eng muhim soylarni belgilang?",["Chodaksoy, Rovotsoy","Qizilsoy, Oqtoshsoy","To‘sinsoy, Oqsoy","Oqsoqotasoy, Qoraqiyasoy"],2]);
GEO_OCHIQ.push(["Afrika materigidagi qaysi daryolar Hind okeani havzasida joylashgan?",["Zambezi, Niger","Niger, Oranj","Zair, Nil","Tana, Jubba"],3]);
GEO_OCHIQ.push(["Antarktidadagi «Keysi» ilmiy stansiyasi qaysi davlatga tegishli?",["Rossiya","AQSH","Avstraliya","Argentina"],2]);
GEO_OCHIQ.push(["Hozirgi vaqtda O‘zbekistonda qaysi sanoat tarmoqlari yetakchilik qilmoqda? 1) mashinasozlik; 2) qora metallurgiya; 3) neft qazib chiqazish; 4) rangli metallurgiya.",["2, 3","1, 3","2, 4","1, 4"],3]);
GEO_OCHIQ.push(["Rossiya bilan chegaradosh bo‘lgan davlatlarni belgilang?",["Qozog‘iston, Albaniya","Estoniya, Germaniya","Finlandiya, Norvegiya","Ozarbayjon, Chernogoriya"],2]);
GEO_OCHIQ.push(["Tabiiy va ijtimoiy-iqtisodiy muhitning rivojlanishi va o‘zgarishi haqida ma‘lumotlar to‘plash va qayta ishlash jarayoniga nima deyiladi?",["geografik baholash","geografik ekspertiza","geografik prognozlash","geografik monitoring"],2]);
GEO_OCHIQ.push(["Janubiy Afrikaning subtropik mintaqasini qaysi hududlarida yog‘in yil davomida bir me’yorda yog‘adi?",["janubi-g‘arbiy sohil bo‘yi","shimoli-sharqiy qirg‘oqbo‘yi","shimoli-g‘arbiy sohil bo‘yi","janubi-sharqiy qirg‘oqbo‘yi"],3]);
GEO_OCHIQ.push(["Nigeriya davlatining poytaxtini belgilang?",["Madjuro","Yuande","Moroni","Abuja"],3]);
GEO_OCHIQ.push(["Yevrosiyo materigining g‘arbiy qismidagi mo‘tadil iqlim mintaqasida yanvar va iyul oylarining o‘rtacha harorati necha gradusni tashkil etishini mos ravishda aniqlang? 1) 0°C atrofida; 2) −9°C; 3) +17+26°C; 4) +15+20°C; 5)−5°C atrofida; 6) +20+27°C",["5, 6","2, 4","2, 3","1, 4"],3]);
GEO_OCHIQ.push(["Qaysi pasttekislikning shimoliy qismi mo‘tadil mussonli, janubiy qismi esa subtropik mussonli iqlimdir?",["Hind-Gang","Mesopotamiya","Buyuk Xitoy","Turon"],2]);
GEO_OCHIQ.push(["Agar 45°sharqiy uzunlikdagi meridianda mahalliy vaqt 13:00 bo‘lsa, qaysi meridianda mahalliy vaqt 20:00 bo‘ladi?",["165°shq.u","45°g‘.u","135°shq.u","150°shq.u"],3]);
GEO_OCHIQ.push(["Rasmdagi holatda nima sodir bo’ladi?",["Quyosh tutilishi","Oy tutilishi","Afeliy","Perigeliy"],0,"gx42_v11_21"]);
GEO_OCHIQ.push(["Hind okeaniga tegishli bo‘lgan dengizni belgilang?",["Yava","Sulu","Ioniya","Andaman"],3]);
GEO_OCHIQ.push(["A nuqta 56° sharqiy uzoqlikda, B nuqta esa 13° g’arbiy uzoqlikda joylashgan bu nuqtalar orasi 30° shimoliy parallel bo’ylab qancha masafaga chuzilganligini aniqlang?",["6659 km","5893 km","4789 km","5678 km"],0]);
GEO_OCHIQ.push(["Avstraliya materigi qadimgi geologik davrda qaysi materikning bir bo‘lagi bo‘lgan?",["Paleotinch","Lavraziya","Pantalassa","Gondvana"],3]);
GEO_OCHIQ.push(["O‘rta Osiyo o‘lkasining subtropik iqlim mintaqasi tabiat zonasida qanday tuproqlar tarqalgan?",["o‘tloq-alluvial","sur-qo‘ng‘ir","qora","bo‘z"],3]);
GEO_OCHIQ.push(["Toshkent iqtisodiy rayoni quyidagi qaysi sanoat mahsulotlarini chetga eksport qiladi?",["neft quvurlari, mashina qismlari","ipak gazlamalar, elektr energiya","qo‘ng‘ir ko‘mir, tabiiy gaz mahsulotlari","neftni qayta ishlash mahsulotlari, elektronika jihozlari"],1]);
GEO_OCHIQ.push(["Belear dengizining sho’rligi 36 ‰ ni tashkil etadi, ushbu dengizning 4,5 metr kub suvida qancha tuz borligini aniqlang?",["139 kg","197 kg","162 kg","179 kg"],2]);
GEO_OCHIQ.push(["Yevrosiyo materigining tropik iqlim mintaqasida qishning o‘rtacha harorati necha gradusga teng?",["+25°C, +27°C","+18°C, +24°C","+20°C, +23°C","+17°C, +22°C"],1]);
GEO_OCHIQ.push(["A va B shaharlar orasidagi masofa 90 km ga teng. Agar xaritaning masshtabi 1: 600 000 bo‘lsa, shaharlar orasidagi masofa xaritada necha santimetr bo‘lishini aniqlang?",["10 cm","15 cm","20 cm","25 cm"],1]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada Markaziy tekisliklar, Qoyali tog‘lar, Kaliforniya yarimoroli qaysi raqamlar bilan belgilanganligini mos ravishda toping.",["4, 6, 9","2, 4, 7","3, 5, 8","1, 3, 5"],1,"gx42_v11_30"]);
GEO_OCHIQ.push(["Geografiya fani rivojlanishining qaysi bosqichida geografiya fani o’lkashunoslik, kartografiya, geodeziya yo’nalishida rivojlandi?",["ilmiy geografik ishlar bosqichi","o’rta asrlar bosqichi","XIX asr va XX asrning 1-yarmida geografiyaning rivojlanish bosqichi","Buyuk geografik kashfiyotlar bosqichi"],1]);
GEO_OCHIQ.push(["Qum cho’llari egallagan maydon xaritalarda qanday shartli belgilar yordamida tasvirlanadi?",["masshtabsiz","chiziqli","tushuntirish","masshtabli"],3]);
GEO_OCHIQ.push(["Quyidagi O’rta Osiyoning yozuvsiz xaritasida B harfi bilan qaysi tabiiy geografik rayoni ko’rsatilganligini aniqlang?",["Markaziy Tyanshan to’g’lari","Janubiy yosh tog’lar","Batxiz-qorabel qirlari","Janubiy tyanshan tog’lari"],0,"gx42_v12_3"]);
GEO_OCHIQ.push(["Materiklar va ularga oid ma’lumotlar to‘g‘ri moslashtirilgan javobni toping. 1) Avstraliya; 2) Yevrosiyo; 3) Afrika a) bu yerda ekvatorial o’rmonlar zonasi gileya deb ham ataladi; b) Materikning g’arbiy qismida qattiq bargli o’rmonlar va butalar, janubi-sharqida evkalipt o’rmonlari mavjud; c) Tropik mintaqada chalacho’l va cho’l zonalari hamda savannalar mavjud, iyulning o’rtacha harorati +30° ga teng; d) O’lkada qimmatbaho mebellar ishlanadigan qizil daraxt, seyba, palma, muskat daraxtlari o’sadi; e) Cho’l zonasida efemer o’simliklar bilan birga doimiy yashil butazorlar (evkalipt, akatsiya) dan iborat o’tib bo’lmas changalzorlar mavjud; f) Aralash o’rmonlar materikning g’arbiy va sharqiy qismlarida joylashgan, asosiy qismi chimli podzol tuproqlar bilan qoplangan.",["1-b, e 2-a, c 3-d, f","1-a, f 2-b, d 3-c,e","1-b, e 2-c, f 3-a, d","1-a, b, 2-c, e 3-d,f"],2]);
GEO_OCHIQ.push(["Quyidagi grafik misolida qaraydigan bo’lsak, qaysi yili tabiiy o’sish eng past bo’lgan?",["2015","2005","2010","1990"],3,"gx42_v12_5"]);
GEO_OCHIQ.push(["Misr hududining katta qismini qaysi iqlim mintaqasi egallaydi?",["tropik","mo’tadil","subtropik","subekvatorial"],0]);
GEO_OCHIQ.push(["Quyidagi qaysi tog’larda ingnabargli va keng bargli o’rmonlardan iborat katta- katta maydonlar mavjud?",["Janubiy Tyanshan, Pomir, Oloy","Zarafshon, Turkiston, Nurota","Torg’obotoy, Jung’oriya Olatovi, Shimoliy Tyanshan","G’arbiy Tyanshan, Hisor, Zarafshon"],2]);
GEO_OCHIQ.push(["Taxiatosh qanday kasb egalarining shahri?",["Energetiklar, gidrotexniklar, muhandislar va suvchilar","Sanoat va qishloq ho’jaligi bilan shugullanuvchilar","Temiryo’l va avtomobil yo’llarini quruvchilari","Shahar hayoti va ho’jaligi bilan shug’ullanuvchilar"],0]);
GEO_OCHIQ.push(["+20°C haroratda havodagi namlik miqdori 11 gr/m3 bo’lsa, nisbiy namlik qanchaga teng bo’ladi?",["64,7 %","61,2 %","63,4 %","66,8 %"],0]);
GEO_OCHIQ.push(["G‘arbiy Yevropa subregioniga oid ma’lumotlar berilgan javobni aniqlang.",["Subregion dengiz transporti hamda turizm xizmatlarini ko‘rsatish bilan faol ishtirok etadi. Subregionda tarixiy- madaniy va ekologik turizm yaxshi rivojlangan. Rojdestvo bayrami (25- dekabr) arafasida millionlab turistlar tashrif buyuradilar.","Bu mintaqa Yevropa sivilizatsiyasi va madaniyatining chin beshigi hisoblanadi, chunki bu qit’adagi eng qadimgi davlatlar rivoj topgan. Subregionlarga nisbatan suv resurslar bilan ta’minlanish darajasi pastroq bo‘lib, ayrim hududlarda suv tanqisligi ham sezilmoqda.","Subregion ayrim davlatlarning mustaqillikka erishish jarayoni tinch ravishda kechmasdan, harbiy ziddiyat, millatlararo va dinlararo fuqarolik urushlarni keltirib chiqardi. Subregionining yana bir xususiyati bironta ham monarxiya davlati yo‘qligidir.","Yevropa va jahon miqyosida katta ta’sir doirasiga ega yirik shaharlarning aynan shu yerda joylashganligi, bank- moliya va turizm sohalarining xalqaro ahamiyatli darajada rivoj- langanligi bilan alohida ajralib turishi bu subregionning muhim o‘ziga xos xususiyatidir."],3]);
GEO_OCHIQ.push(["Qaysi geografik obyekt qutblardan barobar uzoqlikda joylashgan?",["shimoliy tropic","ekvator","janubiy tropic","bosh meridian"],1]);
GEO_OCHIQ.push(["Matnni o’qing. Hududining 2/3 qismini tekisliklar egallagan. Shuningdek, markaziy, sharqiy, janubiy hududlarida turli balandlikdagi tog’lar mavjud, foydali qazilma boyliklaridan temir, uran, boksit ruda konlari muhim ahamiyatga ega. Yuqoridagi ta’rif qaysi davlatga tegishli?",["Qozog’iston","Italiya","Germaniya","Fransiya"],3]);
GEO_OCHIQ.push(["Semurg’ trikotaj aksiyadorlik birlashmasi qaysi viloyatda joylashgan?",["Andijon","Farg’ona","Toshkent","Samarqand"],0]);
GEO_OCHIQ.push(["Jadvaldan foydalanib, botiqlarni chuqurligini moslashtiring.",["1-b, 2-a, 3-c, 4-d","1-a, 2-b, 3-c, 4-d","1-b, 2-d, 3-a, 4-c","1-a, 2-b, 3-d, 4-c"],3,"gx42_v12_14"]);
GEO_OCHIQ.push(["Matnni o’qing. Okrugda yerosti suvlarining zaxiralari katta bo’lib, paleogen, neogen, antropogen davrlarining yotqiziqlari orasida joylashgan. Bo’r davri yotqiziqlari orasidagi 400-500 m bo’lgan chuqurliklardan chiquvchi suvlar chuchuk bo’lib, ichishga yaroqli; paleogen va neogen yotqiziqlarining 90-100 m chuqurligida joylashgan suvlar sho’r emas. Antropogen davr jinslari orasida 1- 20 m chuqurliklarda joylashgan suvlar biroz sho’rlashgan. Yuqoridagi matn qaysi okrugga tegishli?",["Quyi Zarafshon","Qizilqum","Mirzacho’l","O’rta Zarafshon"],3]);
GEO_OCHIQ.push(["Quyidagi xarita fragmentida strelkalar bilan ko‘rsatilgan sayohatni amalga oshirgan dengizchi va u o‘rgangan okean nomini aniqlang.",["V.Bering, Atlantika okeani","J.Kuk, Tinch okean","G.Shelixov, Shimoliy Muz okeani","A.Chirikov, Tinch okean"],3,"gx42_v12_16"]);
GEO_OCHIQ.push(["Navoiy viloyatining qaysi tumanida yirik qorako’lchilik xo’jaliklari mavjud?",["Konimex","Tomdi","Uchquduq","Yangirabot"],1]);
GEO_OCHIQ.push(["Quyidagi jadval asosida soat 7:00 da havoning mutloq namligi qanchaga teng bo’lganini aniqlang?",["6 gr","4.3 gr","11,5 gr","7.5 gr"],2,"gx42_v12_18"]);
GEO_OCHIQ.push(["Qumli cho’llar yo’l qurulishi uchun qay darajada qulay hisoblanadi?",["juda qulay","qulay","kamroq qulay","o’rtacha qulay"],1]);
GEO_OCHIQ.push(["Matnni o’qing. Mamlakat hududini asosan keng tekisliklar ishg’ol qiladi. Tog’lar faqat janubiy va sharqiy chegarabo’yi hududlarida joylashgan, janubiy tog’ va tog’oldi hududlari seysmik faolligi bilan ajralib turadi. Bu yerda relyefning katta qismini cho’lli tekisliklar egallagani uchun suv resurslariga taqchillik sezilmoqda. Ushbu ta’rif qaysi davlatga tegishli?",["Braziliya","Turkmaniston","Qozog’iston","Avstraliya"],1]);
GEO_OCHIQ.push(["Quyidagi qaysi okeanning 70 % maydoni shelflardan iborat?",["Hind","Atlantika","Tinch","Shimoliy Muz"],3]);
GEO_OCHIQ.push(["Geografik kenglik yoylari uzunligi quyidagi qaysi hududda eng uzun bo’lishini aniqlang?",["Arktika iqlim mintaqasida","Tropik cho’llarda","Gveniya ko‘rfazi sohillarida","Arabiston yarimolida"],2]);
GEO_OCHIQ.push(["Materiklar va ularda joylashgan daryolar tog’ri moslashtirgan javobni toping?.Materiklar..Daryolar. 1. Shimoliy Amerika 2.Janubiy Amerika 3.Yevroosiyo a) Maranon b) Freyzer c) Atrek d) Parana",["1-b, 2-d, 3-a","1-b, 2-a, 3-c","1-b, 2-a, 3-d","1-b, 2-d, 3-c"],3]);
GEO_OCHIQ.push(["Agar 115° sharqiy uzunlikdagi meridianda kunduzi tush payti (mahalliy vaqt 12:00) bo‘lsa, qaysi meridianda ertalab (mahalliy vaqt 06:00) bo‘ladi?",["45° g‘.u","135° shq.u","135° g‘.u","25° shq.u"],3]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan tabiiy geografik okrug hududini o‘rab turadigan tog‘ tizmalarini toping.",["1, 3","1, 2","3, 4","2, 3"],3,"gx42_v12_25"]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlardan qaysilari Avstraliya, JAR, Kanada mamlakatlarining barchasi uchun xos? 1) aholisining hududiy joylashuvi juda notekis; 2) mahalliy millat va elatlar (mamlakatning tub aholisi) aholisining katta qismini tashkil etadi; 3) mamlakat poytaxti aholisi soniga ko‘ra eng yirik shahri hisoblanmaydi; 4) yuqori darajada urbanizatsiyalashgan davlat.",["1, 2","1, 3","2, 4","2, 3"],2]);
GEO_OCHIQ.push(["Mingbuloq neft koni qachon ochilgan?",["1992-yil","1996-yil","1997-yil","1969-yil"],0]);
GEO_OCHIQ.push(["Markaziy Osiyo tabiiy geografik kichik o’lkasida joylashgan chuchuk ko’llarni aniqlang.",["Kuku-Nur, Lobnor","Orin-Nur, Bagrashko’l","Tarim, zulayho","Urmiya, Van"],1]);
GEO_OCHIQ.push(["Tog’ning nisbiy balandligi 4200 m bo’lib, cho’qqisida havo harorati -7°C bo’lsa, tog’ etagida havo harorati qanchaga teng bo’lishini aniqlang.",["24,6°C","24,8°C","18,2°C","-24,6°C"],2]);
GEO_OCHIQ.push(["Quyidagi Afrika materigining yozuvsiz xaritasida A harfi bilan qaysi tabiat zonasi o’rni Ko’rsatilgan?",["Sernam ekvatorial o’rmanlar","Savanna va siyrak o’rmonlar","Fasliy nam o’rmonlar","Chalacho’llar va cho’llar"],1,"gx42_v12_30"]);
GEO_OCHIQ.push(["Mezozoy erasining o‘rtalariga kelib O‘rta Osiyo o‘lkasida qanday iqlimiy oʻzgarishlar sodir boʻlgan?",["iqlim nam va issiq bo‘lgan, xilma-xil o‘simliklar o‘sgan","iqlim juda quruq boʻlgan, o‘rmonlar yo‘qolib ketgan","dengiz chekina boshlagan, quruqlik maydoni kengaygan","dengiz qayta bostirib kelgan, tog‘lar yemirilib, pasayib qolgan"],0]);
GEO_OCHIQ.push(["Agar 10° g’arbiy uzunlikdagi meridianda A nuqta 85° shimoliy kenglikda, B nuqta 11° shimoliy kenglikda joylashgan bo’lsa, A va B nuqtalar orasidagi masofa necha kilometrga teng ekanligini aniqlang?",["9680 km","10666 km","7455 km","8221 km"],3]);
GEO_OCHIQ.push(["And tog‘larining 4000 metr balandliklarida qanday tabiat mintaqasi tarkib topgan?",["baland tog‘ o‘rmonlari","nam ekvatorial o‘rmonlar","baland tog‘ o‘tloqlari","ekvatorial o‘rmonlar"],2]);
GEO_OCHIQ.push(["Asakadagi avtomobil zavodiga «Uz– Tong Xong KO» qoʻshma korxonasi qanday mahsulot yetkazib beradi?",["avtomobil oʻrindiqlari","yumshoq qoplamalar","kuzov qismlari","yoqilgʻi baklari"],0]);
GEO_OCHIQ.push(["Ma’muriy-hududiy tuzilishiga ko‘ra federativ bo‘lgan davlatlarni belgilang?",["Germaniya, Komor orollari","Misr, Kongo DR","Seyshel orollari, Ukraina","Madagaskar, Jazoir"],0]);
GEO_OCHIQ.push(["Janubiy Amerika materigining 1% maydonini qanday yerlar tashkil etadi?",["foydalanilmaydigan hududlar","muhofaza etiladigan hududlar","botqoqlashgan yerlar","doimiy aholi yashamaydigan yerlar"],1]);
GEO_OCHIQ.push(["Davlat geodeziya to‘ri tayanch nuqtalarining shartli belgisida nima tasvirlangan?",["to‘g‘ri uchburchak","aylana","to‘rtburchak","to‘g‘ri to‘rtburchak"],0]);
GEO_OCHIQ.push(["Qaysi orol Okeaniyada joylashgan va dunyoning yirik turizm va sayyohlik markaziga aylangan?",["Sent-Lusiya","Dominika","Fiji","San Palau"],2]);
GEO_OCHIQ.push(["A va B shaharlar oralig’idagi masofa 3726 km ga teng. Bu masofa xaritada 6,9 sm ga to’g’ri kelsa, xarita masshtabini va ushbu shaharlar orasidagi masofa necha marta kichraytirib tasvirlanganini aniqlang?",["1:5400000; 5,4 mln marotaba","1:5400000; 5,4 ming marotaba","1: 54000000: 54 mln marotaba","1:5400000: 54 ming marotaba"],2]);
GEO_OCHIQ.push(["Farg‘ona tabiiy geografik okrugining 500-800 metr balandliklarida qanday tuproqlar tarqalgan?",["oddiy bo‘z","o‘tloq-botqoq","o‘tloq-alluvial","sur tusli qo‘ng‘ir"],0]);
GEO_OCHIQ.push(["Tog’ etagida havo bosimi 755 mm Hg, cho’qqisida 257 mm Hg ga teng bo’lsa, tog’ning nisbiy balandligini toping?",["4560 m","4980 m","3850 m","4940 m"],1]);
GEO_OCHIQ.push(["Hind okeanida joylashgan botiqlar nomini belgilang? 1) Somali; 2) Angola; 3) Shimoliy Afrika; 4) G‘arbiy Avstraliya; 5) Nansen; 6) Amundsen",["3, 4","1, 4","5, 6","2, 3"],1]);
GEO_OCHIQ.push(["Sharqiy yarimsharning eng uzun va eng sersuv daryosi qaysi materikda joylashgan?",["Janubiy Amerika","Yevrosiyo","Afrika","Shimoliy Amerika"],2]);
GEO_OCHIQ.push(["Dengiz chuqurligi 8440 m bo’lsa, dengiz tubiga exolotda yuborilgan tovush necha soniyada qaytishini hisoblang?",["5,62","8,81","11, 25","4,32"],2]);
GEO_OCHIQ.push(["2018-yil O’zbekiston aholisining milliy tarkibini to’g’ri ko’rsating? a) tojiklar; b) ruslar; c) qozoqlar; d) qoraqalpoqlar.",["a – 5.2%; b – 2.5%; c – 2.3%; d – 2.6%","a – 4.8%; b – 2.3%; c – 2.5%; d – 2.2%","a – 4.6%; b – 2.9%; c – 2.3%; d – 2.7%","a – 5.0%; b – 3.2%; c – 2.7%; d – 2.5%"],1]);
GEO_OCHIQ.push(["Rudamas foydali qazilmani toping?",["Slanes","Osh tuzi","Torf","Rux"],1]);
GEO_OCHIQ.push(["Himolay tog’larning baland bo’yli subalp va past bo’yli alp o’tloqlari balandlik mintaqasida qanday tuproqlar tarqalgan?",["Tog’-o’tloq","Ferralit","O’rmon-qo’ng’ir","Qorabalchiq-botqoq"],0]);
GEO_OCHIQ.push(["Sho’rligi 27 ‰ bo’lgan 10 m3 suvdan qancha miqdorda tuz olish mumkinligini aniqlang?",["2,7 kg","27 kg","270 kg","270 gr"],2]);
GEO_OCHIQ.push(["Shimoliy Amerikaning qaysi iqlim mintaqasida namgarchilik sharqdan g’arbga kamayib (300-600 mm) boradi?",["Arktika","Mo’tadil","Subtropik","Subarktika"],3]);
GEO_OCHIQ.push(["Ko’p yillik muzloq yerlarni qaysi fan o’rganadi?",["Glyatsiologiya","Geomorfologiya","Geokriologiya","Gidrologiya"],2]);
GEO_OCHIQ.push(["Quyidagi grafikdan foydalanib, soat 17:30 dagi havo harorati va atmosfera hodisasini aniqlang?",["+17°C, shabada","+20°C, jala","+23°C, bulut","+22°C, yomg‘ir"],3,"gx42_v13_22"]);
GEO_OCHIQ.push(["10° janubiy kenglikdagi parallel Janubiy Amerika materigini 78° g’arbiy uzunlik va 36° g’arbiy uzunlikda kesib o’tadi. Janubiy Amerika materigi ushbu parallel bo’ylab qancha masofaga chuzilgini hisoblang?",["3945 km","4603 km","3876 km","4666 km"],1]);
GEO_OCHIQ.push(["Yevropa mamlakatlari ichida aholi soni bo’yicha 4-o’rinda turuvchi davlatni aniqlang?",["Italiya","Fransiya","Germaniya","Portugaliya"],1]);
GEO_OCHIQ.push(["Jahonning tayanch rivojlanayotgan mamlakatlar guruhini tashkil qiluvchi davlatlarni belgilang? 1) Avstraliya; 2) Xitoy; 3) Kanada; 4) Hindiston; 5) Braziliya; 6) Meksika; 7) Rossiya.",["1, 3, 5, 7","2, 4, 5, 6","2, 3, 5, 7","1, 2, 4, 6"],1]);
GEO_OCHIQ.push(["O’rta Osiyo dasht zonasining shimoliy qismida tarqalgan tuproq nomini toping?",["To’q kashtan","Sur-qo’ng’ir","Qora","Qumli"],2]);
GEO_OCHIQ.push(["Quyidagi qaysi shaharda karbid zavodi mavjud?",["Qo’ng’irot","Olmaliq","Muborak","Navoiy"],0]);
GEO_OCHIQ.push(["Shimoliy Muz okeaniga tegishli bo’lgan dengizlarni aniqlang?",["Adriatika, Seram","Ueddel, Amundsen","Grenlandiya, Kara","Norvegiya, Andaman"],2]);
GEO_OCHIQ.push(["Sayohatchi shimoliy-sharq yo’nalishi bilan ma’lum bir obeyktga borgan bo’lsa, u nechchi gradus azimut bilan qaytishini hisoblang?",["270°","315°","225°","135°"],2]);
GEO_OCHIQ.push(["O’rta Osiyoning yozuvsiz xaritasida 2 raqami bian qaysi cho’qqi ta’svirlangan?",["Qizil Art","Ismoil Somoniy","Xontangri","Chaxt"],1,"gx42_v13_30"]);
GEO_OCHIQ.push(["Eng ko‘p yog‘in miqdori O‘zbekistonning qaysi hududlariga tushadi?",["Hisor, Zarafshon tog‘larining shimoli- sharqiy yonbag‘irlarida.","Oloy, Turkiston tog‘larining sharqiy qismlarida","G‘arbiy Tyanshan va Hisor tog‘larining nam havoga ro‘para bo‘lgan yonbag‘rlarida.","Chatqol va Qurama tog‘larining shimol tomonga ro‘para bo‘lgan qismining balandliklarida."],2]);
GEO_OCHIQ.push(["Toshkent viloyatining qaysi tumanida Quyosh energiyasidan foydalanadigan \"Fizika-Quyosh\" inshooti faoliyat ko‘rsatmoqda?",["Qibray","G‘azalkent","Parkent","Ohangaron"],2]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib A va B nuqtalar orasidagi masofani aniqlang? (eslatma 1° meridian yoyining uzunligi 111,1 km ga teng).",["2222 km","3421 km","111,1 km","5348 km"],0,"gx42_v14_3"]);
GEO_OCHIQ.push(["Yevropaning qaysi davlatlarida mis sanoati rivojlangan? 1) Vengriya; 2) Fransiya; 3) Ispaniya; 4) Buyuk Britaniya; 5) Gretsiya; 6) Chexiya",["3, 4, 5","1, 3, 6","2, 4","1, 5"],2]);
GEO_OCHIQ.push(["10-soat mintaqasida joylashgan A nuqtada 2-mart soat 01:50 bo’lsa, B nuqtadagi sanani va vaqtni toping.",["1-mart, 05:50","2-mart, 05:50","3-mart, 04:50","1-mart, 03:50"],1,"gx42_v14_5"]);
GEO_OCHIQ.push(["Eng kam yog‘in miqdori Hind okeanining qaysi qismida kuzatilgan?",["shimoli-sharqiy","shimoli-g‘arbiy","janubi-sharqiy","janubi-g‘arbiy"],1]);
GEO_OCHIQ.push(["O‘rta Osiyo hududida balandlikning ortib borishi bilan qanday ob-havo o‘zgarishi kuzatiladi?",["quyoshning nurli energiyasi kamayadi","quyoshning nurli energiyasi ortadi","havoning tiniqligi kamayadi","havo bosimi ko‘tariladi"],1]);
GEO_OCHIQ.push(["Alp tog‘lari iqlimiga xos bo‘lgan xususiyatlarni belgilang?",["yoz fasli iliq, qish fasli esa qattiq sovuqligi bilan boshqa joylardan farq qiladi.","yozi ancha issiq, qishi esa ancha salqin bo‘lib, subekvatorial iqlimga xos.","iqlimi baland tog‘ iqlimi bo‘lib, asosan, yozi issiq, qishi sovuq.","iqlimi mo‘tadil bo‘lib, qishi yumshoq, yoz i salqin"],3]);
GEO_OCHIQ.push(["Himolay tog‘larining g‘arbiy va sharqiy qismi uchun qanday iqlim mintaqasi xos?",["subekvatorial, subtropik","subtropik, tropik","tropik, subekvatorial","ekvatorial, subekvatorial"],2]);
GEO_OCHIQ.push(["Ushbu diagrammada 2017-yil O’zbekistonning sanoat tarmoqlaridagi mahsulot ishlab chiqarish tarkibida yengil va mashinasozlik sanoatlarining salmog’lari qaysi raqamlar bilan belgilangan?",["2 va 3","5 va 2","1 va 4","3 va 5"],0,"gx42_v14_10"]);
GEO_OCHIQ.push(["Shimoliy Muz okeani iqlimining o‘ziga xos xususiyatlarini aniqlang.",["uchta iqlim mintaqasida joylashganligi va sovuq kunlar ko‘p bo‘lishi bilan ifodalanadi","yil davomida past havo bosimi tarkib topganligi va yog‘inlarning nihoyatda ko‘p yog‘ishi bilan ifodalanadi","arktika markazida joylashganligi va yil davomida sovuq havo massalarining hukumronligi bilan ifodalanadi","haftalab shtil kunlar bo‘lib turishi va qor bo‘ronlari bo‘lib turishi bilan ifodalanadi"],2]);
GEO_OCHIQ.push(["Eyler-venn diagrammasi bo’yicha davlatlarning iqtisodiyotiga xos xususiyatlar to’g’ri ko’rsatilgan javobni aniqlang? Fransiya Italiya a) ishlab chiqarayotgan elektr energiyasining salkam 80 %i AES lar hissasiga to’g’ri keladi; b) mamlakatning Genuya shahri ‘’osmon ostidagi muzey’’ sifatida dunyoga mashhur; c) sanoatining yetakchi tarmoqlaridan biri mashinasozlik hisoblanadi;",["I-c, II-a, III-b","I-b, II-a, III-c","I-a, II-b, III-c","I-b, II-c, III-a"],2,"gx42_v14_12"]);
GEO_OCHIQ.push(["O’quvchilar dastlab, 90° azimut bilan 1200 metr, so‘ngra 125° azimut bilan 600 metr, 35° azimut bilan 3000 metr yurdi. Sayohatchilar yurgan yo‘lni 1:30000 masshtabli chizmada tasvirlang.",["4 cm; 2 cm; 10 cm","12 cm; 6 cm; 5 cm","10 cm; 4 cm; 2,5 cm","22 cm; 6 cm; 10 cm"],0]);
GEO_OCHIQ.push(["Latun - bu...",["mis bilan ruxning qotishmasi","mis bilan qalayning qotishmasi","mis bilan nikelning qotishmasi","mis bilan alyuminiyning qotishmasi"],0]);
GEO_OCHIQ.push(["Viloyatlar va ularga oid ma’lumotlarni moslashtiring. 1) Andijon 2) Namangan a) Viloyatning g‘arbi tekislik, sharqi qir- adirlardan iborat b) Viloyatning baland tog‘ tizmalari bilan o‘ralgan sharqiy qismida iqlim nisbatan yumshoq c) sanoat, asosan, yengil va oziq-ovqat korxonalari hamda mashinasozlik- dan iborat. d) sanoat ham yuqori darajada rivojlangan bo‘lib, unda 160 dan ortiq sanoat korxonalari mavjud",["1-a, d, 2-b, c","1-b, d, 2-a, c","1-a, c, 2-b, d","1-a, d, 2-c, d"],0]);
GEO_OCHIQ.push(["O’lik dengizining 40 litr suvidan qancha tuz olish mumkunligini aniqlang?",["10,8 kg","23,4 kg","12,5 kg","9,6 kg"],0]);
GEO_OCHIQ.push(["Dengiz sathida havo bosimi 755 mm Hg ga teng bo’lsa, Akonkagua da havo bosimi qanchaga teng bo’ladi?",["57,6mm Hg","59 mm Hg","54 mm Hg","67 mm Hg"],1]);
GEO_OCHIQ.push(["Ushbu rasmda usta turgan nuqtaga nisbatan daraxtning azimuti 270° ga tang. Usta turgan nuqtaga nisbatan zavodning yo’nalishi ufqning qaysi tomoniga mos kelishini aniqlang?",["Shimoliy-sharq","Shimol","Janubiy-g’arb","Shimoliy-g’arb"],3,"gx42_v14_18"]);
GEO_OCHIQ.push(["Muhammad al-Xorazmiy tuzgan O‘rta Osiyo va unga yondosh yerlar xaritasida quyidagi qaysi hududlar tasvirlangan?",["Binokand, Xo‘jand","Sug‘d, Xazaron","Marokand, Xuroson","Marg‘iyona, Bobil"],0]);
GEO_OCHIQ.push(["Yevrosiyo materigidagi arktika mintaqasi tabiat zonasida, asosan, qanday hayvonlar yashaydi?",["tulen, morj, oq ayiq","silovsin, oq ayiq, qutb tulkisi","qutb tulkisi, qutb kakligi, olmaxon","qutb bug‘usi, qutb qunduzi, qo‘ng‘ir ayiq"],0]);
GEO_OCHIQ.push(["Quyidagi jadvaldan foydalanib, o’rtacha yillik harorat va yillik amplitudani aniqlang?",["9,8°C va 28°C","11,3°C va 36°C","10,6°C va 32°C","14,3°C va 27°C"],2,"gx42_v14_21"]);
GEO_OCHIQ.push(["Mamlakatimizda dastlabki gaz quvurlari qaysi hududida qurilgan?",["Farg‘ona vodiysida","Chirchiq-Ohangaron vodiysida","Qashqadaryo vohasida","Buxoro vohasida"],0]);
GEO_OCHIQ.push(["Olimlarning fikricha mantiya qaysi elementlardan tarkib topgan?",["Magniy, geliy, kremniy","Qo’rg’oshin, rux, bronza","Temir, magniy, qo’rg’oshin","Temir, magniy, geliy"],2]);
GEO_OCHIQ.push(["Zilzilaning 9 balli kuchida nimalar ro’y beradi?",["Yer yuzida keng va chuqur jarliklar hosil bo’ladi. Yer vertikal va gorizantal ravishda silkinadi","g’isht, betondan ishlangan uylar butunlay yoki qisman buziladi, yerosti quvurlari uziladi","Yer yuzi burmalanadi, baland qoyalar ag’dariladi, daryolar o’zanini o’zgartiradi","tog’larda qoyalar ag’dariladi, ko’prik, to’g’on, temiryo’llar butunlay buziladi"],1]);
GEO_OCHIQ.push(["Koreya Respublikasida chorvachilikning qaysi tarmoqlari yaxshi rivojlangan?",["Sut-go’sht chorvachiligi, qoramolchilik, cho’chqachilik","Qo’ychilik, echkichilik, yilqichilik","Parrandachilik, tuyachilik, qoramolchilik","Cho’chqachilik, qo’ychilik, asalarichilik"],0]);
GEO_OCHIQ.push(["Janubiy Amerika iqlimining tarkib topishida muhim rol o’ynagan omillar to’g’ri berilgan qatorni aniqlang? 1. Quyosh radiatsiyasi; 2. relyef; 3. havo massalari; 4. okean oqimlari; 5. tektonik o’zgarishlar",["1,3,4","2,4,5","1,2,3,5","1,2,3,4"],3]);
GEO_OCHIQ.push(["Matnni o‘qing. Xalqaro mehnat taqsimotida elektr energiyani ko‘p talab qiladigan rangli metallurgiya sanoati, ko‘p tarmoqli mashinasozlik (kemasozlik, avtomobilsozlik, elektronika va elektrotexnika va boshqalar), baliqchilik, sut- go‘sht chorvachiligi mahsulotlarini ishlab chiqarish, dengiz transporti hamda turizm xizmatlarini ko‘rsatish bilan faol ishtirok etadilar. Matndagi ma’lumotlar qaysi subregionga oid ekanligini aniqlang.",["Sharqiy Yevropa","G’arbiy Yevropa","Shimoliy Yevropa","Janubi-sharqiy Osiyo"],2]);
GEO_OCHIQ.push(["Asaka avtomobil zavodiga qaysi korxona yumshoq qoplamalar yetkazib beradi?",["«Uz-Dong Yang» qo‘shma korxonasi","«Uz-Koram» qo‘shma korxonasi","«Uz-SeMyung КО» qo‘shma korxonasi","«Uz-Dong Von» YoAJ"],0]);
GEO_OCHIQ.push(["Qashqadaryo okrugini janub va janubi g‘arb tomondan qaysi hudud o’rab turadi?",["Jarqoq, Muborak va Dengizko‘l balandliklari","Qoratepa, Zirabuloq, Ziyovuddin tog‘lari","Turkmaniston","Surxondaryo okrugi"],2]);
GEO_OCHIQ.push(["Quyidagi tasvirlangan Afrika iqlim xaritasida 1 va 2 sonlari bilan qaysi iqlim mintaqalari tasvirlangan?",["Subekvatorial va Tropik","Tropik va Mo’tadil","Subekvatorial va subtropik","Tropik va Subtropik"],2,"gx42_v14_30"]);
GEO_OCHIQ.push(["Quyidagi chizmada II raqami ostida qaysi ko’l tasvirlangan?",["Arnasoy","Shardara","Tuzkon","Aydarko’l"],2,"gx42_v15_1"]);
GEO_OCHIQ.push(["‘‘Shamollar oqimi’’ nomini olgan kuchli shamollar qaysi materikda kuzatiladi?",["Yevroosiyo","Afrika","Antarktida","Shimoliy Amerika"],2]);
GEO_OCHIQ.push(["Matnni o’qing. O‘rta Zarafshon okrugining ko‘p qismi yumshoq lyossimon yotqiziqlardan tashkil topgan. Shu sababli tog‘lardan boshlanuvchi soylar, vaqtli suvlar ularni yuvib, jarlarni hosil qilgan. O‘rta Zarafshon okrugidagi jarlar asosan qaysi tabiiy geografik jarayon ta’siri ostida paydo bo‘lishini aniqlang.",["nurash","abraziya","eroziya","sel"],2]);
GEO_OCHIQ.push(["Hind okeaniga tegishli bo’lgan xususiyatni aniqlang.",["eng katta suvosti deltasi mavjud","eng yirik port-shaharlari mavjud","suv tubi vulqonlari bo’yicha 1-o’rinda","eng yirik oroli mavjud"],0]);
GEO_OCHIQ.push(["Geomorfologiya fani nimani o’rganadi?",["qor va muzliklarni","yer yuzasi relyefini","ko’p yillik muzloq yerlarni","yer yuzasi iqlimini"],1]);
GEO_OCHIQ.push(["Daryo va ko’l transporti yo’llarining uzunligi bo’yicha qaysi davlatlar yetakchilik qiladi?",["Rossiya, Germaniya","AQSH, KDR","Braziliya, Avstraliya","Xitoy, Kanada"],3]);
GEO_OCHIQ.push(["Tog’ning 1560 m mutloq balandligida havo bosimi 604 mmHg ga teng bo’lsa, tog’ning 3750 m balandligida havo bosimi qancha bo’ladi?",["375 mmHg","365 mmHg","385 mmHg","355 mmHg"],2]);
GEO_OCHIQ.push(["Sirdaryo viloyatining qaysi tumanlarida sabzavot va poliz ekinlari ko’plab yetishtiriladi?",["Guliston, Sardoba","Xovos, Guliston","Dehqonobod, Shirin","Xovos, Shirin"],1]);
GEO_OCHIQ.push(["Antarktida materigida joylashgan SANAE ilmiy stansiyasi qaysi davlatga tegishli?",["JAR","Rossiya","Avstraliya","Fransiya"],0]);
GEO_OCHIQ.push(["Matnni o’qing. Bu mamlakatning sharq va janub tomonlarida tog’lar joylashgan, g’arbiy hududlari esa tekislik relyefi bilan band. Mamlakatning markaziy va g’arbiy hududlarida issiq va qurg’oqchil tropik iqlim shakllangan, janubi va sharqidagi dengizbo’yi hududlarida esa nam subtropik iqlim kuzatiladi. Mamlakat qurg’oqchil iqlim tufayli suv resurslarining taqchilligi mavjud. Ushbu matn qaysi davlatga to’g’ri keladi?",["Nigeriya","Qozog’iston","JAR","Avstraliya"],2]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 va 5 raqamlari bilan Kavkaz tog‘laridagi qaysi balandlik mintaqalari ko‘rsatilgan?",["keng bargli o‘rmonlar, igna bargli o‘rmonlar","aralash o‘rmonlar, igna bargli o‘rmonlar","dasht, subalp va alp o‘tloqlari","dasht, qattiq bargli doimiy yashil o‘rmonlar"],2,"gx42_v15_12"]);
GEO_OCHIQ.push(["1877-1880 yillarda O’rta Osiyo tabiati va xo’jaligi qaysi olim tomonidan o’rganilgan?",["N. Seversov","V. Obruchev","I.Mushketov","A. Fedchenko"],2]);
GEO_OCHIQ.push(["Riftlar bu......",["Sharqiy Afrika yassi tog‘ligi palaxsalanib ko‘tarilgan joylar","O‘rta okean tizmasining tepa qismini ko‘ndalang va bo‘ylama chuqur daralar","O‘rta okean tizmalari va eng chuqur cho‘kmalar tutashgan joylar","daryo vodiylari tog‘larni alohida- alohida massivlarga bo‘linishi"],1]);
GEO_OCHIQ.push(["Paleozoy erasining kaledon tog‘ hosil bo‘lish bosqichida qaysi tog‘lar hosil bo‘lgan?",["Baykalbo‘yi, Tyanshan, Ural, Markaziy Yevropa","Oltoy, Tyanshan, Qozog‘iston past tog‘lari, Shimoliy Skandinaviya, Shimoliy Appalachi","And, Janubiy Appalachi, Chukotka, Kamchatka, Yangi Zelandiya","Yuqori Yana, Markaziy Kordilyera, Qozog‘iston tog‘lari, Alp-Himolay mintaqasidagi tog‘lar"],1]);
GEO_OCHIQ.push(["Tog’ etagida havo harorati 15,5°C, cho’qqisida esa -2,8°C ga teng bo’lsa, cho’qqining nisbiy balandligini aniqlang.",["2783 m","3050 m","6700 m","2934 m"],1]);
GEO_OCHIQ.push(["Migratsiyaga oid ma’lumot berilgan javobni aniqlang.",["Yevropaliklardan birinchi bo‘lib Avstraliya quruqligiga qadam qo‘ygan kishi niderlandiyalik sayyoh Uilyam Yanszondir. U 1606-yilda Keyp-York yarimorolini tekshirdi.","AQSh o‘z qo‘shinini 2021-yilda Afg‘oniston hududidan olib chiqib ketgandan keyin, ular bilan hamkorlik qilgan minglab Afg‘oniston fuqarolari AQSh va Yevropa davlatlarida siyosiy boshpana topdi.","Koronavirus pandemiyasi boshlangandan keyin O‘zbekiston fuqarosi Sh. Ixtiyorov Germaniya davlatidan shoshilinch tarzda, xizmat safari yakunlanmasdan O‘zbekistonga qaytib keldi.","Osiyo aholi zichligining darajasi eng yuqori bo‘lgan qit’a hisoblanib, uning sharqiy, janubiy va janubi-sharqiy qismlarida aholi"],1]);
GEO_OCHIQ.push(["O’rta Osiyo daryolari va ularning uzunligini to’g’ri moslashtiring.",["1-d, 2-a, 3-b","1-d, 2-b, 3-a","1-a, 2-b, 3-d","1-b, 2-a, 3-d"],1,"gx42_v15_18"]);
GEO_OCHIQ.push(["<<GM Uzbekistan>> avtomobil zavodiga glushitel, yumshoq qoplamalar va yoqilg’i baklari yetkazib beruvchi korxonalarni aniqlang.",[",,Uz-Dong Von’’,,,Uz-Dong Yang’’, Uz-SeMyung KO’’",",,Uz-Tong Xong KO’’,,,Uz-Koram’’,,,Uz-Erae Kable’’",",,Uz-Erae Kable’’,,,GM Powertrain’’,,,Tong Xong-Yang’’",",,Jizzax’’,,,Avtooyna’’,,,Uz-SeMyung KO’’"],0]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida 2000- yilda shahar aholisi tabiiy va mexanik o’sish hisobiga necha kishiga ko’payganini aniqlang. (jami aholi yil boshida 100 000 kishi).",["400","1100","500","4000"],0,"gx42_v15_20"]);
GEO_OCHIQ.push(["Eyler-Venn diagrammasi bo‘yicha davlatlarning iqtisodiyotiga xos xususiyatlar to‘g‘ri ko‘rsatilgan javobni toping. a) Mamlakatning janubiy hududlari qoloq agrar iqtisodiyoti bilan ajralib turadi; b) yengil avtomobil eksport qiluvchi davlatlardan hisoblanadi; c) Kann dunyoga mashhur dengizbo‘yi kurortlaridan biri hisoblanadi",["I-c, II-a, III-b","I-a, II-c, III-b","I-c, II-b, III-a","I-b, II-c, III-a"],0,"gx42_v15_21"]);
GEO_OCHIQ.push(["Toshkent shahridan 74 km shimoli- sharqda joylashgan shaharni aniqlang.",["G’ozg’on","Orkutsoy","Chirchiq","G’azalkent"],1]);
GEO_OCHIQ.push([",,Hamma qismida yanvarning o‘rtacha harorati 0°C dan past bo‘ladi. Qor har yili yog‘adi, lekin uzoq turmay (5—10 kungacha) erib ketadi. Qorning qalinligi 5 sm atrofida bo‘ladi...\" Ushbu ta’rif qaysi okrugga tegishli?",["Qizilqum tabiiy geografik okrugi","Surxandaryo tabiiy geografik okrugi","Quyi Zarafshon tabiiy geografik okrugi","Orol tabiiy geografik okrugi"],2]);
GEO_OCHIQ.push(["Termiz shahri 37,2° shimoliy kenglikda joylashgan bo‘lsa, shahardan Janubiy qutbgacha bo‘lgan masofani gradus va kilometrlarda aniqlang.",["127,2° va 14131,92 km","172,2° va 14131,82 km","127,2° va 15311,92 km","172,2° va 14531,92 km"],0]);
GEO_OCHIQ.push(["Quyidagi shaharlarni balandligini to’g’ri moslashtiring. a) G’azali; b) Dushanbe; c) Ostona; d) Mashhad; e) G’ulja. 1) 944 m, 2) 670 m, 3) 67 m, 4) 353 m, 5) 825 m.",["a-3, b-5, c-1, d-2, e-4","a-3, b-2, c-4, d-1, e-5","a-3, b-5, c-4, d-1, e-2","a-5, b-2, c-1, d-3, e-4"],2]);
GEO_OCHIQ.push(["Afg’oniston mamlakatining tabiiy sharoitiga oid to‘g‘ri ma’lumotlar berilgan javobni toping?",["iqlimi subtropik bo‘lib, g‘arbiy qismining dengizga tutash hududlarida nam subtropik, markaziy va sharqiy hududlarida esa quruq subtropik iqlim shakllangan","hududining katta qismi ayniqsa markazi va sharqi baland tog‘lardan iborat. Mamlakatda kuchli zilzilalar tez-tez ro‘y beradi. Tog‘ muzliklaridan ko‘plab daryolar boshlanadi, ayrim daryolar to‘laligicha sug‘orishga sarflanadi.","qadimgi platformada joylashgan bo‘lib, relyefi asosan kuchli parchlangan o‘rtacha balandlikdagi tog‘lardan iborat. Relyefining tog‘liligi hisobiga mamlakatda dehqonchilikka yaroqli yerlar ko‘p emas.","hududida balandligi 200 metrdan oshmaydigan pasttekisliklardan tortib, balandligi 5000 metrdan ortadigan tog‘ tizmalar uchraydi, tog‘ oralig‘idagi botiqlarida toshloq va sho‘rxok cho‘llar shakllangan"],0]);
GEO_OCHIQ.push(["Yer yuzasida harorat +12°C bo’lsa, yer yuzidan 4 km chuqurlikda harorat necha gradusga teng bo’ladi?",["132°C","99°C","105°C","120°C"],3]);
GEO_OCHIQ.push(["Paleozoy erasining birinchi yarmida sodir bo‘lgan burmalanishni aniqlang (A–F variantlaridan foydalaning).",["Arxey","Gersin","Paleozoy","Kaledon","Mezozoy","Alp"],3]);
GEO_OCHIQ.push(["Sibir platformasi qaysi erada vujudga kelgan? (A–F variantlaridan foydalaning).",["Arxey","Gersin","Paleozoy","Kaledon","Mezozoy","Alp"],0]);
GEO_OCHIQ.push(["Kossyushko tog‘lari qaysi burmalanishda ko‘tarilgan? (A–F variantlaridan foydalaning).",["Arxey","Gersin","Paleozoy","Kaledon","Mezozoy","Alp"],5]);
GEO_OCHIQ.push(["Tabiiy geografik okruglar va ularga oid ma’lumotlar to’g’ri moslashtirilgan javobni aniqlang. 1) Mirzacho’l 2) Chirchiq-Ohangaron a) okrug yerosti tuzilishi jihatdan markaz tomon va g’arbdan sharqqa pasayib boradi; b) relyefi bir xil emas, janubi-sharqdan shimoli-g’arbga tomon pasayib boradi; c) relyefi ancha murakkab, shimoli-sharqdan janubi- g’arbga pasayib boradi.",["1-a, 2-c","1-c, 2-b","1-b, 2-c","1-b, 2-a"],2]);
GEO_OCHIQ.push(["Meksika janubi-sharqdan qaysi davlat bilan chegaradosh?",["Beliz","Salvador","Nikaragua","Kosta-Rika"],0]);
GEO_OCHIQ.push(["Tinch okeani tubida qanday jinslar eng ko‘p tarqalgan?",["to‘lqin yotqiziqlari","organik jinslar","qizil gilli jinslar","daryo yotqiziqlari"],2]);
GEO_OCHIQ.push(["Antarktida materigiga xos bo‘lgan asosiy xususiyatlarni belgilang. 1) o‘rtacha balandligi bo‘yicha eng baland materik; 2) Yer yuzidagi eng kuchli shamol shu yerga xos; 3) eng sovuq materik; 4) maydonining kattaligi bo‘yicha materiklar ichida oxirgi o‘rinda turadi; 5) muzsiz zaminining cho‘kmasi bo‘yicha oxirgi o‘rinda turadi, 6) Yerning \"janubiy magnit qutbi\" shu yerda joylashgan",["4, 6","2, 5","1, 6","3, 4"],2]);
GEO_OCHIQ.push(["Janubi-g‘arbiy Osiyo mintaqasi tarkibiga kiruvchi davlatlarni belgilang.",["Isroil, Kipr","Turkiya, Kambodja","Kuvayt, Vyetnam","Eron, Tayvan"],0]);
GEO_OCHIQ.push(["Quyidagi topografik xaritadan foydalanib shamol yo‘nalishini aniqlang.",["janubi-g‘arbdan shimoli-sharqqa","shimoli-sharqdan janubi-g‘arbga","janubi-sharqdan shimoli-g‘arbga","shimoli-g‘arbdan janubi-sharqqa"],0,"gx42_v16_6"]);
GEO_OCHIQ.push(["Quyidagilardan O’zbekistonning avtomobil eksporti bo’yicha yangi eksport bozorlari berilgan javobni belgilang.",["Tunis, Misr","Gana, Gabon","Misr, Liviya","JAR, Tunis"],1]);
GEO_OCHIQ.push(["Qanday andazali xaritalarda uzunlik masshtabi bir meridian yoki bir parallelda saqlanadi?",["teng masofali","teng burchakli","teng hajmli","azimutli"],0]);
GEO_OCHIQ.push(["Quyidagi diogramma asosida Qashqadaryo viloyatining 2023-yildagi o’rtacha haroratini aniqlang.",["6,45°C","12,08°C","10,4°C","7,6°C"],0,"gx42_v16_9"]);
GEO_OCHIQ.push(["Yozda O‘zbekiston hududida termik o‘choqning vujudga kelishi natijasida atmosferada qanday ob-havo sharoiti tarkib topadi? 1) ob-havo o‘ta qizib, siyraklashadi; 2) o‘rta kengliklarning havo massalari kirib keladi; 3) mahalliy kontinental Turon tropik havosi shakllanadi; 4) siklonlar faoliyati kuchayadi; 5) tropik oqimlar bilan to‘qnashadi.",["1, 3","3, 4","4, 5","2, 5"],0]);
GEO_OCHIQ.push(["Quyidagi chizmada 1, 2, 3, 4 raqamlar bilan belgilangan o‘simlik qoplamlarining shartli belgilari to‘g‘ri ko‘rsatilgan javobni toping.",["o‘tloqlar, mevazorlar, kesilgan o‘rmonlar, siyrak o‘rmonlar","o‘tloqlar, butalar, kesilgan o‘rmonlar, bargli o‘rmonlar","siyrak o‘rmonlar, butalar, o‘tloqlar, bargli o‘rmonlar","butalar, mevazorlar, kesilgan o‘rmonlar, bargli o‘rmonlar"],0,"gx42_v16_11"]);
GEO_OCHIQ.push(["Quyidagi qaysi mintaqa ommaviy mashinasozlik mahsulotlari ishlab chiqarishga ixtisoslashgan?",["Shimoliy Amerika","MDH davlatlari","Sharqiy Osiyo","G’arbiy Yevropa"],3]);
GEO_OCHIQ.push(["O‘rta Osiyoning qaysi hududlarida yer osti suvlarining asosiy qismi tog‘ jinslari yoriqlaridan va karst yo‘laklaridan chiqadigan suvlar hisoblanadi?",["Palaxsali tog‘lar tarqalgan hududda","Qoldiq tog‘lar tarqalgan hududda","To‘lqinsimon tekisliklar tarqalgan hududda","Burmali tog‘lar tarqalgan hududda"],3]);
GEO_OCHIQ.push(["Ertaver shahrida (31° j.k, 118° shq.u.) mintaqa vaqti bo’yicha soat 11:20 bo’lganda, Tunis shahrida (36° shm.k., 10° shq.u.) mintaqa vaqti bo’yicha soat necha bo’ladi?",["18:20","04:20","17:20","06:20"],1]);
GEO_OCHIQ.push(["Matnni o’qing. Bu mamlakat relyef xususiyatiga ko’ra tog’li. Asosiy qazilma boyliklari neft, qalayi, volfram, boksit, oltin, mis hisoblanadi. Neft asosan, orol qismidagi dengiz sayozligidan qazib olinadi. Sanoati ko’ptarmoqli mashinasozlikka ixtisoslashgan. Shu bilan birga, neft, neft- kimyo va metallurgiya sanoatlari ham yaxshi rivojlangan. Ushbu matn qaysi davlatga tegishli ekanini aniqlang.",["JAR","Indoneziya","Malayziya","Koreya Respublikasi"],2]);
GEO_OCHIQ.push(["Tasvirdan foydalanib O’zbekiston sanoat tarmoqlari tarkibida ishlab chiqarish hajmiga ko’ra kimyo sanoati va oziq-ovqat sanoati ko’rsatgichlari qaysi raqamlar bilan berilganligini aniqlang?",["6 va 2","1 va 4","8 va 1","3 va 2"],1,"gx42_v16_17"]);
GEO_OCHIQ.push([",,Geosiyosat’’ tushunchasi fanga birinchi marotaba qaysi olim tomonidan kiritilgan?",["Rudolf Chellen","Fridrix Ratsel","N. Gumilyov","A. Gumboldt"],0]);
GEO_OCHIQ.push(["Matnni o’qing. Bu Iqtisodiy rayonda cho’l va tog’ yaylovlarini o’zlashtirilishi bilan tabiiy yaylovlar tobora qisqarib bormoqda. Bundan qorako’lchilik xo’jaliklari zarar ko’rmasligi uchun fitomeliorativ ishlar ko’rilmoqda. Rayonda bir qancha neft, yonuvchi slanes, gaz konlari aniqlangan. Iqtisodiy rayon qishloq xo’jaligida chorvachilik alohida o’rin egallaydi, qorako’l yetishtirish bo’yicha yetakchi o’rinda turadi. Qaysi Iqtisodiy rayonga tegishli ekanligini aniqlang.",["Janubiy","Mirzacho’l","Toshkent","Zarafshon"],0]);
GEO_OCHIQ.push(["Amazoniya pasttekstligi va Braziliya yassitog’liklariga xos bòlgan xususiyatlarni belgilang?",["issiq va nam iqlimli o’lka hisoblanadi daryo tarmoqlari nihoyatda zich joylashgan asosan eng qadimgi kristall va metamorfik toģ jinslardan tuzilgan bu o’lkada yanvarning harorati +25 bo’lsa, iyulniki esa +17 +19°C bòladi","g’arbiy qismi kòp yarusli doimiy yashil ekvatorial o’rmonlar bilan qoplangan bu kichik o’lkada daraxt baqalari turli xil ilonlar eng katta ilon- anakonda, toshbaqa, kaltakesak, kabi hayvonlar yashaydi yassi tog’liklarning yuzasi chuqur daryo vodiylari bilan parchalangan ular past baland qirlarni eslatadi, janubiy qismini subtropik mintaqasida joylashgan","yil bo’yi harorat +24+27°C yoģingarchilik 1500-3000 mm eng qadimgi kristall metamorfik toģ jinslardan tuzilgan yassi toģliklarning katta qismini subekvatorial tropik iqlim mintaqasi egallaydi, shimoliy qismida órmonlarda yekimli palma ósadi","daryolar qor, muz, yomģir suvlaridan tuyinadi suv bosmaydigan yerlarda sutli daraxt, qizil rangli mango daraxtli Braziliya yonģoģi kóp uchraydi kristall jinslar orasida temir, olmos oltin uran rudalari marganes rangli metall ruda konlari bor, xilma-xil palmalar kokao daraxtlari daryolarda kaymanlar, aligatorlar baliqlar kup uchraydi"],2]);
GEO_OCHIQ.push(["Matnni o’qing. Bu mintaqa iqlimi tropik-yil davomida issiq, Atlantika okeanidan doimo esib turuvchi Passat shamollari tufayli ancha yumshoq va nam. May oyidan noyabrgacha jazirama va seryomg’ir yoz davom etadi, iliq va quruq qish noyabr oxiridan boshlanib maygacha davom etadi. Iqlimining salbiy jihatlaridan biri- kuchli dovullarning tez-tez takrorlanib turishidir. Ushbu ma’lumot qaysi mintaqaga tegishli?",["Sharqiy Osiyo","Janubiy Osiyo","Vest-Indiya","Janubiy Afrika"],2]);
GEO_OCHIQ.push(["Mezozoy erasining oxiriga kelib O‘rta Osiyo o‘lkasida qanday iqlimiy oʻzgarishlar sodir boʻlgan?",["iqlim nam va issiq bo‘lgan, xilma-xil o‘simliklar o‘sgan","iqlim juda quruq boʻlgan, o‘rmonlar yo‘qolib ketgan","dengiz chekina boshlagan, quruqlik maydoni kengaygan","dengiz qayta bostirib kelgan, tog‘lar yemirilib, pasayib qolgan"],1]);
GEO_OCHIQ.push(["Yer yuzasida havo harorati +25°C bo’lsa, 4500 m balandlikda uchayotgan samolyot atrofida havo harorati qancha bo’ladi?",["-2°C","-5°C","-3°C","-7°C"],0]);
GEO_OCHIQ.push(["Quyidagi grafikdan foydalanib, 15 kunlik o‘rtacha havo haroratini aniqlang.",["23,8°C","24,3°C","25,1°C","24,5°C"],1,"gx42_v16_26"]);
GEO_OCHIQ.push(["Toshkent iqtisodiy rayoni yalpi milliy mahsulotining 2/3 qismi qaysi sanoatga to’g’ri keladi?",["Yengil sanoat","Oziq-ovqat sanoati","Og’ir sanoat","Kimyo"],2]);
GEO_OCHIQ.push(["Havo harorati 40°C, nisbiy namlik 60% ga teng bo’lsa, 1m3 havo to’yinishi uchun qancha suv bug’I kerak bo’ladi? ( 40°C da 51 gramm suv bug’i tutadi)",["30,6 gr","28,8 gr","20,4 gr","40 gr"],2]);
GEO_OCHIQ.push(["Qahva hosilini yetishtirish bo’yicha jahondagi peshqadam davlatlarni aniqlang.",["Rossiya, Fransiya, AQSH","Xitoy, Keniya, Indoneziya","Italiya, Ispaniya, Gretsiya","Braziliya, Vyetnam, Indoneziya"],3]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritadan 3 raqami bilan qaysi hudud tasvirlanganligini aniqlang?",["Yukatan y.o","Kaliforniya y.o","Florida y.o","Labrador y.o"],3,"gx42_v16_30"]);
GEO_OCHIQ.push(["Geologik qatlamlarning yoshi haqidagi nazariya qaysi olimga tegishli?",["R. Piri","E. Kotsebu","Leybnits","Pallas"],2]);
GEO_OCHIQ.push(["Тopografik xaritalarda aholi manzilgohlari nomi ostidagi raqamlar nimani ifodalaydi?",["Aholi manzilgohlari ular egallagan maydonlarini ifodalaydi","Aholi manzilgohlari yoniga yozilgan sonlar uning mutlaq balandligini bildiradi.","Aholi manzilgohlaridagi xonadonlar sonini ifodalaydi","Aholi manzilgohlarining aholi sonini ifodalaydi"],2]);
GEO_OCHIQ.push(["Quyidagi jadvalni to’gri moslashtiring.",["1-b, 2-d, 3-a","1-d, 2-a, 3-b","1-a, 2-d, 3-b","1-b, 2-a, 3-d"],0,"gx42_v17_3"]);
GEO_OCHIQ.push(["Matnni o’qing. Okrugning tekislikdan iborat ekanligi va janubida tog’ tizmalarining mavjudligi natijasida iqlimi o’ziga xos.Qishda Arktika va Sibir sovuq havo massalari to’siqsiz kirib keladi. Bu sovuq havo massalari okrug janubidagi tog’lardan o’ta olmay, tekislik qismida to’planadi, natijada havo harorati pasayib ketadi. Matndagi ma’lumotlar qaysi okrugga tegishli ekanligini aniqlang.",["O’rta Zarafshon","Qizilqum","Mirzacho’l","Farg’ona"],2]);
GEO_OCHIQ.push(["Quyidagi ma’umotlardan Okeaniyaga tegishli xususiyatni aniqlang.",["endemik organizmlar eng ko’p uchraydi","sayyoramizning yaxlit noyob qo’riqxonasi mavjud","yer yuzidagi eng shamol shu yerga xos","eng baland harakatdagi vulqoni bor"],3]);
GEO_OCHIQ.push(["Quyidagi qaysi tuproq turida chirindi miqdori 4-6 % ni tashkil etadi?",["qora tuproqsimon tog’-dasht tuproqlari","o’tloq-alluvial tuproqlar","qo’ng’ir va jigarrang tog’-o’rmon tuproqlar","tipik va to’q bo’z tuproqlar"],0]);
GEO_OCHIQ.push([",,Posko’’ transmilliy korporatsiyasi qaysi davlatga tegishli?",["Yaponiya","Malayziya","Xitoy","Koreya"],3]);
GEO_OCHIQ.push(["Agar topografik xaritada A va В nuqtalar orasidagi haqiqiy masofa 7,6 km bo‘lsa, mazkur nuqtalar orasidagi masofa necha santimetrga teng bo‘ladi? Masshtab 1:200 000",["3,2","4,8","3,8","5,2"],2,"gx42_v17_8"]);
GEO_OCHIQ.push(["Niagara sharsharasi qaysi ko’llar oralig’ida joylashgan?",["Eri, Ontario","Guron, Michigan","Katta Ayiq, Vinnipeg","Yuqori, Ontario"],0]);
GEO_OCHIQ.push(["Qaysi iqtisodiy rayon mamlakatda yetishtirilayotgan sholining yarmidan ko’pini beradi?",["Zarafshon","Farg’ona","Quyi Amudaryo","Janubiy"],0]);
GEO_OCHIQ.push(["Matnni o’qing. Mamlakatning sharqiy qismi qadimgi platformada joylashgan bo’lib, tekislik va kuchli parchalangan yassitog’likdan iborat bo’lsa, g’arbiy qismi baland tog’lar bilan band. Hududida qo’rg’oshin, nikel, temir, neft va tabiiy gazning yirik mavjud. O’rmon va yer resurslariga juda boy. Ushbu ma’lumot qaysi davlatga tegishli ekanligini aniqlang.",["Braziliya","Xitoy","Nigeriya","Kanada"],3]);
GEO_OCHIQ.push(["Quyidagi iqlim xususiyatlarini xaritadan qaysi iqlim mintaqasiga tegishli ekanligini aniqlang. 1. Yil bo’yi issiq va seryomg’ir yoz, harorat +24 +26 °C atrofida saqlanadi 2. Yoz issiq, quruq; qish iliq, quruq. Yog’in kam yog’adi 3. To’rtta fasl aniq namoyon bo’ladi 4. Yil bo’yi sovuq, yog’in kam yog’adi. Yer qor va muzlik bilan qoplangan 5. Yoz issiq, quruq; qish iliq, yog’inli (yomg’ir,",["1-C, 2-B, 3-A, 4-D, 5-E","1-C, 2-B, 3-D, 4-E, 5-A","1-B, 2-C, 3-D, 4-E, 5-A","1-A, 2-C, 3-B, 4-E, 5-D"],1,"gx42_v17_12"]);
GEO_OCHIQ.push(["Quyidagi variantlardan osh tuzi koni berilgan javobni aniqlang.",["Laylimkon","Qizilolma","Xonjiza","Saricheku"],0]);
GEO_OCHIQ.push(["Berilganlardan boshqaruv shakli monarxiya bo’lgan davlatni aniqlang.",["Madagaskar","Eritreya","Grenada","Salvador"],2]);
GEO_OCHIQ.push(["Qaysi davlatlarda toshko’mirning yirik konlari joylashgan?",["Ukraina, Norvegiya, Fransiya","Germaniya, Chexiya, Polsha","Niderlandiya, Germaniya, Belarus","Rossiya, Ukraina, Germaniya"],3]);
GEO_OCHIQ.push(["Sektorlik qonuniyati berilgan javobni aniqlang.",["quruqlik ichkarisiga tomon okeanlardan uzoqlashgan sari iqlim xususiyatlarining o’zgarishi hisobiga geotizimlarning o’zgarib borishi","quyosh nurlari tushish burchagining o’zgarishi hisobiga tabiat komponentlari va geotizimlarning ekvatordan qutblarga tomon o’zgarib borishi","tog’larning etagidan suvayrig’ichi tomon havo harorati, o’simlik, tuproqlar, hayvonot dunyosining o’zgarib borishi","tog’ va tepalik yonbag’irlarining ufq tomonlariga, quyosh nurlari tushadigan tomonga nisbatan joylashuvi"],0]);
GEO_OCHIQ.push(["R. Shreder nomidagi Respublika sharobchilik ilmiy tadqiqot instituti qaysi shaharda joylashgan?",["Denov","Margilon","Taxiatosh","Chiroqchi"],0]);
GEO_OCHIQ.push(["Tolibbek A nuqtadan B nuqtaga tomon 45° azimut bo’yicha 100 metr yurdi, B nuqtadan esa 135° azimut bo’ylab yana 100 m yurdi va C nuqtani belgiladi, C nuqtadan 270° azimut bilan yana 100 m yurganda A nuqtaga kelib qoldi. Tolibbekning yurgan yo’lini joy planida tasvirlasak, qanday geometrik shakl hosil bo’ladi?",["to’rtburchak","uchburchak","kvadrat","beshburchak"],1]);
GEO_OCHIQ.push(["Quyidagi grafiklarning qaysi birida daryo oqimi tezligi (x) va daryo nishabligi (y) orasidagi bog’lanish qonuniyati to’g’ri tasvirlangan?",["A grafikda","B grafikda","C grafikda","D grafikda"],2,"gx42_v17_19"]);
GEO_OCHIQ.push(["Materiklar va ularga tegishli ma’lumotlarni to’gri moslashtiring. 1) Yevroosiyo 2) Antartida 3) Afrika a) savannalarda baland bo’yli o’t o’simliklar dasht landshaftini eslatadi, sernam va qurg’oqchil fasllar almashinib turadi. Savannalar yirik hayvonlarning ko’pligi bilan ajralib turadi; b) aralash o’rmonlar materikning g’arbiy va sharqiy qismlarida joylashgan, iqlimi ancha iliq, yog’in ko’p yog’adi; c) materik ichkarisida sovuq va quruq havo massalari shakllanadi, natijada yuqori havo bosimi ta’sirida shimolga yo’nalishdagi shamollar bu ichkariga tomon esadi.,,Shamollar oqimi’’ nomini olgan bunday shamollar 600-800 km kenglikdagi hududda esadi.",["1-c, 2-a, 3-b","1-b, 2-a, 3-c","1- b, 2-c, 3-a","1-a, 2-b, 3-c"],2]);
GEO_OCHIQ.push([",,Sayg’oqli’’ buyurtmaxonasi qaysi tabiiy geografik okrug hududida tashkil etilgan?",["Orol","Qizilqum","Mirzacho’l","Ustyurt"],3]);
GEO_OCHIQ.push(["Quyidagilardan Tinch okeaniga tegishli bo’lgan dengizlarni aniqlang.",["Marjon, Solomon","Tirren, Adriatika","Bofort, Baffin","Shimoliy, Oxota"],0]);
GEO_OCHIQ.push(["Agar havo harorati 30°C, havoning nisbiy namligi 60% bo’lsa, 1m3 havo namga to’yinishi uchun qancha suv bug’I kerak bo’ladi?",["18 gr","11 gr","12 gr","14 gr"],2]);
GEO_OCHIQ.push(["Misr Arab Respublikasi sanoatining asosiy tarmoqlari berilgan javobni aniqlang.",["Neftni qayta ishlash, to’qimachilik","tog’-kon, yoqilg’I, mashinasozlik","neft-gaz, kimyo, to’qimachilik","kemasozlik, elektronika, farmasevtika"],2]);
GEO_OCHIQ.push(["Matnni o’qing. Viloyat qishloq xo’jaligining asosiy tarmoqlari paxtachilik, sabzavotchilik, donchilik qo’ychilik hisoblanadi. Ekin maydonlari tarkibida paxta va g’alla asosiy o’rinni egallaydi. Viloyatning ayrim hududlarida sizot suvlari yer yuziga yaqinligi, yog’in kamligi yer fondidan foydalanishda ortiqcha mehnat va mablag’ talab qilmoqda. Berilgan ma’lumot qaysi viloyatga tegishli ekanini aniqlang.",["Buxoro","Sirdaryo","Xorazm","Navoiy"],0]);
GEO_OCHIQ.push(["Markaziy Qizilqumdagi Quljuqtov qaysi tog’ hosil bo’lish bosqichida ko’tarilgan?",["Kaledon","gersin","mezozoy","alp"],1]);
GEO_OCHIQ.push(["Harbiy-strategik yondashuv tarafdorlari berilgan javobni aniqlang.",["Makiavelli, fon Klauzes, A. Mexen","Gerodot, Aristotel, Ptolomey","Gumilyov, Toynbi, Xantington","Leontyev, Milyutin, Gumboldt"],0]);
GEO_OCHIQ.push(["Tuman aholisi 2000-yilning boshida 200 000 kishini tashkil etgan. Grafikdagi ma’lumotlardan foydalanib tuman aholisi 2000-yilda yalpi o’sish hisobiga necha kishiga ko’payganligini aniqlang?",["120 kishiga","12000 kishiga","1200 kishiga","120000 kishiga"],2,"gx42_v17_28"]);
GEO_OCHIQ.push(["Suvning aylanma harakati, shamollar, yog’inlar atmosferaning qaysi qatlamida kuzatiladi?",["troposfera","termosfera","stratosfera","mezosfera"],0]);
GEO_OCHIQ.push(["Quyidagi xaritada III va VII raqamlari ostida qaysi obyektlar tasvirlangan?",["Qo’ytosh, Turkiston tog’lari","Nurota, Zarafshon tog’lari","Zirabuloq, Qoratepa tog’lari","Ziyovuddin, Chaqilkalon"],0,"gx42_v17_30"]);
GEO_OCHIQ.push(["Matnni o‘qing. “Platoning shimoliy qismi qumli tekislikdan, markaziy qismi qirlardan, janubiy qismi qir va botiqlardan iborat. Bu plato yirik gidrografik obyektlar oralig‘ida joylashgan.”. Matndagi ma’lumotlar qaysi platoga mansub ekanligini toping.",["Badxiz","Mag‘istau","To‘rg‘ay","Ustyurt"],3]);
GEO_OCHIQ.push([",,Past” Afrika hududida joylashgan geografik obyektlarni aniqlang. 1) Atlas tog‘lari; 2) Efiopiya tog‘ligi; 3) Axaggar tog‘ligi; 4) Sharqiy Afrika yassi tog‘ligi; 5) Drakon tog‘lari; 6) Tibesti tog‘ligi.",["4, 5, 6","1, 2, 3","1, 3, 6","2, 4, 5"],2]);
GEO_OCHIQ.push(["Gersin burmali tog‘ paydo bo‘lish davriga kelib O‘zbekiston hududida qanday geologik o‘zgarishlar sodir bo‘lgan?",["baland tog‘ tizmalari vujudga kelgan","cho‘kindi tog‘ jinslarini daryolar yuva boshlagan","uning hududi dengiz va ko‘llar ostida bo‘lgan","sayoz dengiz qo‘ltiqlari hosil bo‘lgan"],0]);
GEO_OCHIQ.push(["B harfidagi chegara qaysi davlat bilan o’tadi?",["Tojikiston","Afg’oniston","Qirg’iziston","Turkmaniston"],2,"gx42_v18_4"]);
GEO_OCHIQ.push(["Xorazm viloyatining qaysi tumanlarida paxta katta salmog’ga ega?",["Bog’ot, Shovot, Gurlan","Xiva, Yangiariq, Shovot","Gurlan, Hazorasp, Xonqa","Qo’shko’pir, Yangibozor, Hazorasp"],1]);
GEO_OCHIQ.push(["Havo harorati 0°C, nisbiy namlik 40% ga teng bo’lsa, 1m3 havoning namga to’yinishi uchun qancha suv bug’i kerak bo’ladi?",["1,5 gr","3 gr","1,8 gr","2 gr"],1]);
GEO_OCHIQ.push(["O‘zbekiston iqlimining vujudga kelishida atmosfera sirkulatsiyasining ahamiyati katta.Qishda O‘zbekiston hududiga shimoli sharqdan, shimoldan havo massalari kirib kelib, uning janubiy qismlarigacha yetib boradi. Natijada,... (I), harorat pasayib, sovib ketadi. Qishda O‘zbekiston hududiga o‘rtacha kengliklardagi havo massalari ham kirib kela oladi,... (II) oqimlari bilan to‘qnashishi oqibatida ob-havo o‘zgarib, havo biroz ilib, yomg‘ir yoki qor yog‘ishi kuzatiladi. Matndagi nuqtalar o‘rniga quyidagi ma’lumotlardan mos keladigan javobni toping. 1) havo ochiq bo‘ladi; 2) yog‘ingarchilik bo‘ladi; 3) Arktika; 4) tropic",["I-2; II-3","I-2; II-4","I-1; II-3","I-1; II-4"],3]);
GEO_OCHIQ.push(["Quyidagi maʼlumotlarni toʻgʻri moslashtiring. I) Fransiya II) Italiya III) Rossiya a) mamlakatning rivojlangan iqtisodiy markazlari shimolida joylashgan; b) iqtisodiyotining tayanchi yoqilgʻi- energetika sanoati hisoblanadi; c) AES lardan elektr energiyasi olish boʻyicha dunyoda birinchi oʻrinda turadi; d) turizmning rivojlanishi dengizboʻyi kurortlar, madaniy obyektlar koʻpligi bilan bogʻliq; e) mamlakat avtomobil, poyabzal, muzlatgich, zaytun moyi, vino kabi mahsulotlarning eksportyorlaridan biri; f) qora metall ishlab chiqarish, asosan uchta yirik temir konlariga tayandi.",["I-c, d II-a, f III-b, e","I-a, e II-b, d III-c, f","I-c, d II-a, e III-b, f","I-a, c, II-b, f III-d, e"],2]);
GEO_OCHIQ.push(["Beruniyning geografiya fani rivojiga qo‘shgan hissasini aniqlang.",["birinchi bo‘lib Yerning kattaligini o‘lchadi","Yerning geografik koordinatalarini aniqladi","birinchi bo‘lib Yerning aylanish tezligini aniqladi","Yerning Quyosh atrofida aylanishini isbotladi"],3]);
GEO_OCHIQ.push(["Havo bosimi qaysi asbob yordamida o’lchanadi?",["barometr","termometr","anemometr","flyuger"],0]);
GEO_OCHIQ.push(["Respublikamizda qaysi davlatlarning ISUZU va MAN korxonalari bilan birgalikda tashkil qilingan qo’shma korxonalarda avtobusar, yuk mashinalari ishlab chiqarilmoqda?",["Yaponiya va Belorus","Janubiy Koreya va Rossiya","Yaponiya va Germaniya","Turkiya va Yaponiya"],2]);
GEO_OCHIQ.push(["Quyidagilardan geosinklinal orollar berilgan qatorni aniqlang.",["Yangi Gvineya, Yangi Kaledoniya","Yangi Kaledoniya, Mariana","Gavayi, Tuamotu","Yangi Zelandiya, Yangi Gvineya"],1]);
GEO_OCHIQ.push(["Quyidagilardan Atlantika okeanida joylashgan botiqlarni aniqlang.",["Shimoliy Afrika, Braziliya","Shimoli-sharqiy, Chili","Bellinsgauzen, Afrika-Antartida","Markaziy va G’arbiy Avstraliya"],0]);
GEO_OCHIQ.push(["Qozog’iston tabiiy geografik kichik o’lkasiga qaysi hudud kiradi?",["Janubiy Tyanshan","Qizilqum cho’li","Markaziy Tyanshan","Kaspiybo’yi"],2]);
GEO_OCHIQ.push(["XI asrga oid qaysi asarda ko’pgina joy nomlari va geografik atamalar haqida yozib qoldirilgan?",[",,Devon-u lug’otit turk’’",",,Yerning surati’’",",,O’rta Osiyo va Kavkaz geografiyasi’’",",,Iqlimlar kitobi’’"],0]);
GEO_OCHIQ.push(["Qaysi mamlakat ikkita okean akvatoriyasiga to’g’ridan to’g’ri chiqish yo’liga ega?",["Ekvador","Grenlandiya","Surinam","Yaponiya"],1]);
GEO_OCHIQ.push(["Shimoliy Yevropaning qaysi davlatlari Shimoliy dengiz tubidan tabiiy gaz va neft qazib oladi?",["Norvegiya va Niderlandiya","Shevtsiya va Islandiya","Niderlandiya va Irlandiya","Islandiya va Buyuk Britaniya"],0]);
GEO_OCHIQ.push(["Tog’ etagida havo harorati +22°C bo’lsa, 6000 metr balandlikdagi tog’ cho’qqisida havo harorati qanchaga teng bo’ladi?",["-16°C","-14°C","-12°C","-18°C"],1]);
GEO_OCHIQ.push(["Yetuk urbanizatsiya bosqichi qaysi davlatlarda kuzatilmoqda?",["Yaponiya, Marokash, Isroil","Kanada, Yaponiya, Avstraliya","Livan, AQSH, Xitoy","Daniya, Niderlandiya, JAR"],1]);
GEO_OCHIQ.push(["Eron Islom Respublikasiga oid ma’lumotni toping.",["Tog‘ oralig‘idagi botiqlarda iqlim keskin kontinental va o‘ta quruq bo‘lganligi tufayli o‘simlik va hayvonot olamiga juda kambag‘al bo‘lgan toshloq va sho‘rxok cho‘llar shakllangan. Neft va tabiiy gaz, mis, temir, marganes, polimetall rudalari konlari ham mavjud.","Hududining katta qismi, ayniqsa, markazi va sharqi baland tog‘lar bilan band, shimoliy va janubi-g‘arbiy hududlarini tog‘oldi tekisliklari egallaydi. Kuchli zilzilalar tez-tez ro‘y berib turadi.","Shimoliy va g‘arbiy qismlari baland tog‘lar bilan band bo‘lsa, sharqiy va janubiy hududlari esa tekislik relyefiga ega. Tekislik hududlari neft, tabiiy gaz, ko‘mir, tuz zaxiralariga ega, tog‘li qismi esa turli metallarning konlariga boy.","Hududining relyefi, asosan, tog‘li bo‘lib, tekisliklar dengizlar bo‘yida uchraydi.Mamlakat hududi yuqori darajada seysmikligi bilan tavsifanadi, bu yerda kuchli zilzilalar sodir bo‘lib turadi."],0]);
GEO_OCHIQ.push(["Agar fermer mahsuldorlikni oshirish uchun mol boshini ko’paytirsa, bu xo’jalik yuritishning qaysi usuli hisoblanadi?",["melioratsiya","intensiv","yashil inqilob","ekstensiv"],3]);
GEO_OCHIQ.push(["Mirzacho’l okrugida joylashgan soylarni aniqlang.",["Qizilsoy, Oqtoshsoy","Sayxonsoy, Zominsuv","Oqsoqotasoy, Qoraqiyasoy","Kattasoy, Tasmachisoy"],1]);
GEO_OCHIQ.push(["Shamoldan elektr energiyasi ishlab chiqarish bo’yicha yetakchi davlatlarni aniqlang.",["Xitoy, Daniya, Niderlandiya","AQSH, Filippin, Rossiya","Fransiya, Xitoy, Kanada","Niderlandiya, JAR, Meksika"],0]);
GEO_OCHIQ.push(["Matnni o’qing. Bu o’lka relyefida, asosan, tog’, tog’lik, tog’ oralig’idagi botiqlar va baland tekisliklar uchraydi. O’lkada bir necha baland tog’lar joylashgan, markaziy va janubiy qismidan yer po’stining faol seysmik mintaqasi o’tadi.Bu yerda keksa, yoshargan tog’lar bilan birga eng yosh tog’lar ham mavjud. Berilgan ma’lumot qaysi o’lkaga tegishli ekanini aniqlang.",["Sharqiy Osiyo","Old Osiyo","Markaziy Osiyo","Janubi-g’arbiy Osiyo"],2]);
GEO_OCHIQ.push(["1957- yilda respublikamizning qaysi shahrida superfosfat zavodi ishga tushirilgan?",["Navoiy","Qo’qon","Chirchiq","Samarqand"],3]);
GEO_OCHIQ.push(["Ohangaron daryosining to’linsuv davri qaysi oylarga to’g’ri keladi?",["aprel-may","mart-iyun","sentabr-oktabr","dekabr-fevral"],0]);
GEO_OCHIQ.push(["Italiya qishloq xo’jaligining asosiy ekinlarini aniqlang.",["bug’doy, makkajo’xori, banan","pomidor, uzum, zaytun","kofe, zaytun, kungaboqar","soya, yeryong’oq, paxta"],1]);
GEO_OCHIQ.push([",,Kosmografiya’’ asari muallifini aniqlang.",["A.Gumboldt","B. Varineus","S. Myunestr","G. Merkator"],2]);
GEO_OCHIQ.push(["Quyidagi xarita-sxemada 1 va 2 raqamlari bilan qaysi suvosti ko‘tarilmalari ko‘rasatilgan?",["Janubiy Tinch okean va Sharqiy Tinch okean","Bellinsgauzen va G‘arbiy Tinch okean","Janubiy va Shimoli-sharqiy Tinch okean","Avstraliya-Antarktida va Sharqiy Tinch okean"],0,"gx42_v18_30"]);
GEO_OCHIQ.push(["Quyidagilar orasidan kichik rivojlangan davlatlar guruhiga kiruvchi mamlakatlarni aniqlang.",["Yaponiya, Italiya","Belgiya, Norvegiya","Isroil, JAR","Turkiya, Eron"],1]);
GEO_OCHIQ.push(["Quyidagi chizmada 1, 2, 3, 4 raqamlar bilan belgilangan o‘simlik qoplamlarining shartli belgilari to‘g‘ri ko‘rsatilgan javobni toping.",["o‘tloqlar, butalar, bargli o‘rmonlar, mevazorlar","mevazorlar, o‘tloqlar, butalar, bargli o‘rmonlar","butalar, mevazorlar, kesilgan o‘rmonlar,bargli o‘rmonlar","mevazorlar, kesilgan o‘rmonlar, siyrak o‘rmonlar, bargli o‘rmonlar"],2,"gx42_v19_2"]);
GEO_OCHIQ.push(["O‘rta Osiyoning eng past nuqtasini bеlgilang.",["Sariqamish","Mingbuloq","Quvondi","Qoragiyo"],3]);
GEO_OCHIQ.push(["2018-yil ma’lumotiga ko‘ra qaysi davlatlar aholisi soniga ko‘ra jahonning birinchi o‘ntaligi tarkibiga kirgan?",["Meksika, Argentina","Rossiya, Germaniya","Pokiston, Braziliya","Yaponiya, Turkiya"],2]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlardan moslashtirilgan javobni toping. 1) paleozoy; 2) kaynozoy; 3) mezozoy. a) hozirgi keksa tog‘lar hosil bo‘lgan, b) tabiat zonalari paydo bo‘lgan (shakllangan), c) bahaybat dinozavrlar paydo bo‘lgan, d) suv o‘tlari paydo bo‘lgan",["1-b, 2-a, c","1-a, 2-b, 3-c","1-c, 2-a, 3-b","1-d, 2-a, 3-c"],1]);
GEO_OCHIQ.push(["A.A. Grigorevning geografiya faniga qo’shgan hissasini aniqlang.",["yer po’stining rivojlanish nazariyasini ishlab chiqdi","marjon orollarining kelib chiqishini o’rgandi","geografik qobiq ta’limotini kashf etdi","geologik qatlamlarning yoshi haqidagi nazariyani ishlab chiqdi"],2]);
GEO_OCHIQ.push(["Qozog‘iston tabiiy geografik kichik o‘lkasiga qaysi hudud kiradi?",["Yuqori Amudaryo","Qizilqum cho‘li","Janubiy Tyanshan","Orolbo’yi qumli cho’llari"],3]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida tug‘ilish va immigratsiya hisobiga aholi soni ko‘payishining eng past ko‘rsatkichi qaysi yilda qayd etilganini aniqlang.",["1990","2015","1995","2010"],3,"gx42_v19_8"]);
GEO_OCHIQ.push(["Janubiy Afrika Respublikasining poytaxti qaysi javobda berilgan?",["Monroviya","Mbabane","Pretoriya","Yamasukro"],2]);
GEO_OCHIQ.push(["Gaz sanoatiga oid to‘g‘ri ma’lumotlarni belgilang. 1) tabiiy gazdan kimyoviy mahsulotlar ajratib olinadi; 2) 1 kg gazni yonish issiqlik koeffitsiyenti 1 kg toshko‘mir koeffitsiyenti bilan teng; 3) boshqa yoqilg‘i turlariga nisbatan tabiiy gazni qazib olish arzonga tushadi; 4) Shimoliy va Norvegiya dengizlari sayozliklari gaz zaxiralariga boy; 5) suyultirilgan gaz yer po‘stining juda chuqur qa’ridan qazib olinadi.",["2, 3, 4","2, 3, 5","1, 2, 5","1, 3, 4"],3]);
GEO_OCHIQ.push(["Geosiyosatda qaysi ilmiy yondashuv g‘oyasi tarafdorlari tabiiy muhit jahon tarixi hamda insonlar hayot tarziga ta’sir ko‘rsatadi deb hisoblaydi?",["harbiy-strategik","yangi dunyo","sivilizatsion","geografik determinizm"],3]);
GEO_OCHIQ.push(["Fransiyada turizmning yuqori darajada rivojlanishiga qaysi omilning ahamiyati katta?",["tabiiy-iqlim sharoit","mashhur ko‘llar","mashhur sharsharalar","ot sporti"],0]);
GEO_OCHIQ.push(["Eyler-Venn diagrammasi bo‘yicha davlatlarning iqtisodiyotiga xos xususiyatlar to‘g‘ri ko‘rsatilgan javobni toping. Germaniya Italiya a) mamlakat hududining relyefi shimoldan janubga tomon ko’tarilib boradi; b) boshqaruv shakli bo’yicha parlamentar Respublika hisoblanadi; c) qishloq xo’jaligi ko’proq subtropik dehqonchilikka ixtisoslashgan.",["I-a, II-c, III-b","I-c, II-a, III-b","I-b, II-c, III-a","I-a, II-b, III-c"],0,"gx42_v19_13"]);
GEO_OCHIQ.push(["Havo shari yer yuzasidan 5800 m balandlikda uchmoqda, shu vaqtda yer yuzasida havo harorati +17°C ni tashkil qilsa, havo shari uchayotgan balandlikdagi haroratni aniqlang.",["-16,8°C","-17,8°C","34,8°C","-22,7°C"],1]);
GEO_OCHIQ.push(["Afrika materigining tropik cho‘llaridagi tog‘larda nima sababdan tog‘ jinslarida darz va yoriqlar paydo bo‘lib, kuchli parchalanishlar kuzatiladi?",["tun bilan kunlik haroratning keskin o‘zgarishi tufayli","yil davomida okeandan esadigan nam havo massalari kam yog‘in keltirishi tufayli","sutkalik haroratning kecha va kunduzda ham bir xil, ya’ni yuqori bo‘lishi tufayli","cho‘llarda yog‘in miqdorining kamligi, yillik harorat doimo yuqori bo‘lishi tufayli"],0]);
GEO_OCHIQ.push(["Afrikada YIMning umumiy hajmi bo’yicha 1-o’rinda turuvchi davlat qaysi?",["Misr","Nigeriya","JAR","Efiopiya"],1]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan tabiiy geografik okrug hududida joylashgan tog’larni toping?",["1, 3","2, 4","2, 3","1, 4"],0,"gx42_v19_18"]);
GEO_OCHIQ.push(["Okeaniya mamlakatlari qishloq xo‘jaligida eksportbop monokultura ekinlaridan qaysi ekinlarni yetishtirish asosiy o‘rin tutadi?",["banan, kofe, kakao","yeryong‘oq, sholi, uzum","choy, qahva, makkajo‘xori","zaytun, qandlavlagi, bug‘doy"],0]);
GEO_OCHIQ.push(["Janubi-sharqiy Osiyo subregionida joylashgan davlatlarni aniqlang.",["Singapur, Afg‘oniston","Filippin, Sharqiy Timor","Vyetnam, Bahrayn","Mongoliya, Livan"],1]);
GEO_OCHIQ.push(["O‘zbеkiston hududining okean sathidan 1000-1600 mеtr balandliklarida qanday tuproqlar tarqalgan?",["och qo‘ng‘ir","sur tusli qo‘ng‘ir","to‘q tusli bo‘z","qora-kashtan"],2]);
GEO_OCHIQ.push(["Hind okeanining geografik o‘rniga xos bo‘lgan xususiyatni belgilang.",["to‘rtta materik oralig‘ida joylashgan","okeanning asosiy qismi shimoliy yarimsharda joylashgan","shimoldan janubga qarab 12 ming kilometr masofaga cho‘zilgan","sharqiy qismini Afrika materigi o‘rab turadi"],0]);
GEO_OCHIQ.push(["Mirzacho‘l tabiiy geografik okrugi suvlariga oid to‘g‘ri ma’lumotlarni belgilang. 1) Mirzacho‘lning janubi-g‘arbiy tomonidan Sirdaryo daryosi oqib o‘tadi; 2) okrugning yirik daryolari Sirdaryo va Sangzor hisoblanadi; 3) okrug tekislik qismining 1-2 m chuqurliklarida chuchuk suv qatlami mavjud; 4) Sangzor daryosida Jizzax suv ombori qurilgan.",["2, 3","1, 3","2, 4","1, 2"],2]);
GEO_OCHIQ.push(["Kanberra shahrining geografik koordinatasi 35° j.k. va 149° shq.u. Bu shahar nechanchi soat mintaqasida joylashgan?",["O‘n ikkinchi","O‘ninchi","O‘n birinchi","Sakkizinchi"],1]);
GEO_OCHIQ.push(["Mirzacho‘l tabiiy geografik okrugining tekislikdan iborat ekanligi va janubida tog‘ tizmalarining mavjudligi natijasida iqlimi o‘ziga xosdir. Hududi yozda... (I) ta’sirida bo‘ladi va havo quruq, jazirama issiq bo‘lib, iyulning o‘rtacha harorati +26 +28 °C bo‘ladi, ba’zida harorat +44 +45 °C ko‘tarilishi kuzatiladi. Mirzacho‘lning tekislik qismida o‘rtacha yillik yog‘in miqdori 250 millimetr atrofida bo‘lgani holda mumkin bo‘lgan bug‘lanish 1000 millimetr. Demak, bug‘lanish yog‘in miqdoriga nisbatan... (II) baravar ko‘p. Matndagi nuqtalar o‘rniga quyidagi ma’lumotlardan mos keladigan javobni toping. a) siklonlar; b) termik depressiya; c) 4; d) 2",["I-a; II-c","I-b; II-c","I-b; II-d","I-a; II-d"],1]);
GEO_OCHIQ.push(["Gruziyaning Qora dengiz sohillarida qanday iqlim tipi tarkib topgan?",["nam tropic","kontinental tropic","nam subtropik","kontinental subtropik"],2]);
GEO_OCHIQ.push(["Dunyo okeanining o‘rganilish tarixining buyuk geografik kashfiyotlar davrida quyidagilardan kim katta hissa qo‘shgan?",["R. Amundsen","X. Kolumb","R. Piri","Erik Rauda"],1]);
GEO_OCHIQ.push(["Koreya Respublikasi qaysi sanoat mahsulotlarini ishlab chiqarish bo‘yicha jahon mamlakatlarining birinchi beshtaligiga kiradi?",["polimer mahsulotlari","etil spirti","sulfat kislotasi","chinni buyumlari"],0]);
GEO_OCHIQ.push(["Quyidagi jadvalning qaysi qatoridagi ma’lumotlar mos ravishda berilgan?",["1, 4","1, 2","2, 3","2, 4"],3,"gx42_v19_29"]);
GEO_OCHIQ.push(["Xaritada raqamlar bilan ko‘rsatilgan nuqtalardan qaysi biri Janubiy tropik chizig‘iga eng yaqin joylashgan?",["1","2","4","3"],1,"gx42_v19_30"]);
GEO_OCHIQ.push(["Quyidagi chizmada A nuqtada havo harorati 0°C ga teng bo’lganda, B nuqtadagi havo bosimni toping? Gorizontallar har 50 metrdan o’tkazilgan.",["650 mm Hg","740 mm Hg","730 mm Hg","690 mm Hg"],2,"gx42_v20_1"]);
GEO_OCHIQ.push(["Antarktida qaysi materikdan ajralib, mustaqil materikka aylangan?",["Qadimgi Pangeya, keyinchalik Lavraziya materigidan","Qadimgi Pangeya, keyinchalik Gondvana yirik materigidan","Qadimgi Gondvana, keyinchalik Pangeya quruqligidan","Qadimgi Lavraziya materigidan"],1]);
GEO_OCHIQ.push(["Surxondaryo qo‘riqxona hududida qaysi yodgorlik joylashgan?",["Zarautkamar","Qirqqiz g‘ori","Teshiktosh","Tosh gumbaz"],0]);
GEO_OCHIQ.push(["Balandlikka ko‘tarilgan sari o‘simliklarning, tabiiy sharoitning o‘zgarib borishi haqidagi ma’lumotlar Zahiriddin Muhammad Boburning “Boburnoma” asarida qaysi hududlar tog‘larining ta’rifida keltiriladi?",["Movarounnahr, Afg‘oniston","Farg‘ona va Pokiston tog‘lari","Farg’ona va Afg‘oniston","Hindiston va Movarounnahr"],0]);
GEO_OCHIQ.push(["Okeanlarda dahshatli to’lqinlardan biri sunami ( yaponcha-ajal va vayronagarchilik keltiruvchi to’lqinlar ) qanday kuchlar tasirida hosil bo’ladi?",["Koriolis kuch","Oy va Quyosh tortishi","Zilzila va harakatdagi Vulqonlar","Harorat o’zgarishi"],2]);
GEO_OCHIQ.push(["Quyidagi grafikning qaysi birida ko’rish balandligi (x) va masofa (y) orasidagi bog’lanish qonuniyati to’g’ri tasvirlangan?",["4","1","2","3"],1,"gx42_v20_6"]);
GEO_OCHIQ.push(["Avstraliya jahonda qo‘ylar soni va jun ishlab chiqarish bo‘yicha nechanchi o‘rinda turadi?",["1-o‘rin","2-o‘rin","3-o‘rin","4-o‘rin"],1]);
GEO_OCHIQ.push(["Quyidagi jadvaldan foydalanib materiklar va ulardagi daryolar misolida maslashtiring?",["1-a, 2-b, 3-c","1-c, 2-a, 3-b","1-b, 2-a, 3-c","1-b, 2-c, 3-a"],2,"gx42_v20_8"]);
GEO_OCHIQ.push(["1:1000 000 sonli masshtabni nomli masshtabga aylantirib, km da ifodalang?",["1 sm - 1 km","1 sm - 100 km","1 sm - 1000 km","1 sm - 10 km"],3]);
GEO_OCHIQ.push(["Singapurda eng ko‘p tarqalgan dinlarni ko‘rsating.",["buddizm va lamaizm","daotsizm va lamaizm","buddizm va daotsizm","buddizm va konfutsiylik"],3]);
GEO_OCHIQ.push(["AQSh ning paxta mintaqasini ko‘rsating.",["Markaziy tekislikning shimoli","Missisipi havzasining janubi","Buyuk tekisliklarning Kordilyera tog‘lari etaklari","Buyuk ko‘llarga tutash shtatlar"],1]);
GEO_OCHIQ.push(["Amazoniya o‘rmonlarining suv bosmaydigan yerlarda qanday daraxtlar o‘sadi?",["Qizil daraxt, kiparis, kedr","Palma, Propka emani, kipars","Sutli daraxt, qizil rangli mango daraxti, Braziliya yong‘og‘i","Akatsiya, seyba, brazilia yong‘ogi"],2]);
GEO_OCHIQ.push(["Keniya to’g’ining 4200 metr balandligida havo harorati -3°C ekanligi ma’lum bo’lsa, ushbu tog’ning etagida havo harorati qanchaga teng bo’lishini aniqlang?",["22,2°C","28,3°C","17°C","11°C"],0]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar asosida Eyler- Venn diagrammasiga mos keladigan to’g’ri javobni toping? Eron Koreya. Res a. g‘arbiy qismida zich yashaydi, b. Hududining katta qismini aralash ignabargli va keng bargli o‘rmonlar egallagan., c. «Samsung-Electroniks», «Posko» va boshqa dunyoga mashhur transmilliy korporatsiyalarning mavjudligi bilan ajralib turadi, d. Poytaxti mamlakatning shimoli-g‘arbiy qismida joylashgan.",["I-a, II-b, III-d","I-c, II-a, III-b","I-c, II-d, III-a","I-b, II-c, III-a"],3,"gx42_v20_14"]);
GEO_OCHIQ.push(["Quyidagi shaharlar orasidan aholi soniga ko’ra yirik shaharlarni ko’rsating?",["Jizzax, Andijon","Samarqand, Namangan","Qarshi, Buxoro","Navoiy, Shahrisabz"],2]);
GEO_OCHIQ.push(["Hind okeaning qaysi qismida organizmlar eng ko‘p tarqalgan?",["Tropik hududlarda","Markazidagi botiqlarda","Okean tubi loyqa qismida","Dengiz sayozligida va marjon riftlar atrofida"],3]);
GEO_OCHIQ.push(["Tasvirda berilgan B nuqtaning mutloq balandligi 1200 metr bo’lsa, B va A nuqtaning nisbiy balandligini aniqlang? ( har bir gorizantall 300 metrdan )",["600 m","300 m","1800 m","1200 m"],0,"gx42_v20_17"]);
GEO_OCHIQ.push(["Mirzacho’l okrugining janubidagi tog’ tizmalari qaysi erada ko’tarilgan?",["Paleazoy erasining kaledon tog’ burmalanishida","Kaynazoy erasining alp tog’ burmalanishida","Paleazoy erasining gersin tog’ burmalanishida","Mezazoyning kimmeriy tog’ burmalanishida"],2]);
GEO_OCHIQ.push(["Qishloq xo’jalik mahsulotlarini yetishtirish va uni iste’molchiga yetkazish jarayonida aloqador barcha tarmoqlar uyg’unligi nima deb ataladi?",["Agrosanoat integratsiyasi","Agrar xo’jalik","Agrosanoat majmuasi","Agrobiznes"],2]);
GEO_OCHIQ.push(["Pampa - bu ……..",["Himolay tog’ etaklaridagi baland bo’yli o’t-o’simlik, daraxt, butalardan tarkib topgan botqoqlashgan changalzorlar.","Afrikaning tropik cho’llarida tog’ jinslarining kuchli parchalanishi natejasida tarkib topgan toshloq sahrolar.","Avstraliya materigining cho’l zonasidagi doimiy yashil butazorlar hosil qilgan o’tib bo’lmas changalzorlar.","Janubiy Amerikadagi dashtlar, u yerda o’t-o’simliklardan chalov, betaga, yovvoyi tariq va boshqalar uchraydi. Sernam subtropik iqlim sharoitida hosildor qizil ferralit tuproqlar hosil bo’lgan."],3]);
GEO_OCHIQ.push(["Quyidagilardan Atlantika okeani uchun xos xususiyatlarni aniqlang? 1) materiklar dreyfi gipotezasiga asos bo’lgan; 2) marvarid va durlar yig’ib olishda yetakchi; 3) eng katta suv osti deltasi bor; 4) eng yirik port-shaharlari bor; 5) qirg’oqsiz dengizi bor; 6) biomassaga eng boy; 7) cho’kindi jinslar eng qalin joylashgan.",["1, 5, 6","1, 4, 5","2, 3, 7","4, 5, 7"],1]);
GEO_OCHIQ.push(["Nurash qay yo’sinda vujudga kelishiga ko’ra necha turga bo’linadi?",["4 ta","5 ta","3 ta","2 ta"],2]);
GEO_OCHIQ.push(["Yaponiya davlatiga oid ma’lumotni aniqlang?",["Har yili Yaponiyaga 30 mln. atrofida xorijiy sayyohlar tashrif buyuradi.","2018-yil ma’lumotlariga ko‘ra, tashqi savdo aylanmasi bo‘yicha O‘zbekistonning savdo hamkorlari orasida Xitoy, Rossiya, Qozog‘iston va Turkiyadan keyin 5-o‘rinni egallagan,","Aholisining 80 % dan ziyodi shaharlarda istiqomat qiladi","Mamlakat Sharqiy, Markaziy va G‘arbiy iqtisodiy rayon (zona)larga bo‘linadi."],0]);
GEO_OCHIQ.push(["Quyi Amudaryo okrugi janubi g‘arb tomondan qaysi hudud bilan chegaralanadi?",["Ustyurt okrugi","Turkmaniston","Qizilqum","Orol okrugi"],1]);
GEO_OCHIQ.push(["Quyidagi diagrammada Farg’ona tabiiy geografik okrugi misolida och tusli bo’z va to’q tusli bo’z tuproqlar qaysi raqamlarda belgilangan?",["6 va 5","2 va 3","3 va 4","4 va 5"],2,"gx42_v20_25"]);
GEO_OCHIQ.push(["O‘rta Osiyo Rossiya imperiyasi tomonidan bosib olingunga qadar uning tabiatini quyidagi olimlardan qay biri o’rganmagan?",["F. Yefremov","Benevini","B. Pazuxin","A. Obruchev"],3]);
GEO_OCHIQ.push(["Quyidagilardan qaysi hududlarni Saxel qamrab oladi?",["Malavi","Sudan","Mavrikiy","Liviya"],1]);
GEO_OCHIQ.push(["Vulqon otilganda kraterdan nimalar otilib chiqadi?",["kul, tosh, gaz","kul, gaz, qum","qum, gaz, tosh","lava, suv bug‘i, qum"],0]);
GEO_OCHIQ.push(["Buxoro viloyatining yozuvsiz xaritasida Gazli va Qorovulbozor sanoat punktlari qaysi raqamlar bilan tasvirlangan?",["2 va 3","1 va 3","2 va 4","1 va 5"],3,"gx42_v20_30"]);

/* ===== 43-to‘plam ===== */
GEO_OCHIQ.push(["Qaysi erada Qozog‘iston past tog‘larining g‘arbiy qismi va Shimoliy Tyanshan tog‘lari ko‘tarilgan?",["Paleozoy erasi I yarmida","Paleozoy erasi II yarmida","Mezazoy","Kaynazoy"],0]);
GEO_OCHIQ.push(["O‘rta Osiyoning cho‘l zonasiga qaysi hududlar kiradi?",["To‘rg‘ay platosining shimoliy qismi, Qozog‘iston past tog‘larining shimoliy va markaziy qismlari","To‘rg‘ay supasimon o‘lkasining janubiy qismi, Qozog‘iston past tog‘larining juda katta janubiy qismi","Turon tekisligi va Balxashbo‘yi tekisliklari","Turkman-Xuroson tog‘lari va Atrek vodiysi"],2]);
GEO_OCHIQ.push(["Urbanizatsiyaga oid ma’lumot berilgan javobni aniqlang.",["Xitoy hukumati mamlakatda uzoq yillar davomida amalga oshirilgan “bir oilaga bir bola” tamoyiliga asoslangan davlat siyosatini yumshatdi.","Braziliyaning Rio-de-Janeyro va San-Paulu shaharlaridagi Favela deb ataladigan kvartallarga millionlab odamlar qishloq joylardan kelib turmush kechirmoqda.","Aholisi AQSHga ommaviy tarzda ko‘chayotgan Puerto-Riko uchun aholi soni o‘sishiga emigratsiyaning yuqoriligi salbiy ta’sir ko‘rsatmoqda.","Yevropaliklar plantatsiyalarda ishlatish uchun Afrikadan negr qullarni olib kela boshladilar."],1]);
GEO_OCHIQ.push(["Yer Quyosh atrofidagi orbitasida “3-nuqta”da joylashganida, bu kengliklarning qaysi birida Quyoshning kunduzi balandligi eng past bo‘ladi?",["23.5° j.k","30° sh.k","30° j.k","40° sh.k"],3,"gx43_v2_2"]);
GEO_OCHIQ.push(["Surxondaryo viloyatining Boysun tumanidagi Qizil kanyon uzra havo sharlari (aerostat) uchirilib, birinchi respublika festivali o‘tkazildi. Bu festivalda havo sharlaridan eng yuqorisi 18 km balandlikkacha ko‘tarildi. Havo shari atmosferaning qaysi qatlamiga ko‘tarilganini toping.",["Troposfera","Stratosfera","Mezosfera","Termosfera"],1]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada 3 raqami bilan qaysi oqim ko‘rsatilganligini toping?",["Peru","Golfstrim","Kurosio","Kanar"],3,"gx43_v2_5"]);
GEO_OCHIQ.push(["Matnni o‘qing. “Okean suvlarida baliqlardan sardinella, skumbriya, akula, kitlar, molluskalar (kalmarlar) yashaydi. Dengiz sayozliklarida, marjon riflari atrofida organizmlar eng ko‘p tarqalgan. Bu yerlarda haqiqiy suvosti o‘tloqlarini uchratish mumkin”. Matnda berilgan ma’lumotlar qaysi okeanga oid ekanligini aniqlang.",["Tinch","Atlantika","Hind","Shimoliy Muz"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “Tadqiqotchilar mamlakatimizdagi Milliy bog‘ hududida tarqalgan “Qizil kitob”ga kiritilgan o‘simliklarni Milliy bog‘ g‘arbida joylashgan to‘g‘da ham mavjudligini tekshirib ko‘rishdi. Bu tog‘ning shimoli-g‘arbiy yonbag‘irlari yotiq va keng, janubi-sharqiy yonbag‘irlari tik va qisqa edi”. Matndagi ma’lumotlar qaysi tog‘ga tegishli ekanligini aniqlang.",["Turkiston","Qurama","Ugom","Chotqol"],2]);
GEO_OCHIQ.push(["Qadimiy sug‘orma dehqonchilik markazlaridan biri sifatida jahonning aholisi eng zich joylashgan areallardan biri bo‘lgan subregionni toping.",["Janubi-sharqiy Osiyo","Sharqiy Osiyo","Janubiy Osiyo","Markaziy Osiyo"],2]);
GEO_OCHIQ.push(["Braziliya davlatiga oid ma’lumotni toping.",["Braziliya bioyoqilg‘i ishlab chiqarish bo‘yicha jahonda birinchi o‘rinda turadi.","Jahondagi eng yirik mis konlaridan hisoblanadigan Minas-Jerays va Karajas katta iqtisodiy ahamiyatga ega.","Braziliya paxta, soya, bananning eksporti bo‘yicha jahonda birinchi o‘rinda turadi.","Jahonda yirik suvomborlar soni bo‘yicha alohida ajralib turadi."],3]);
GEO_OCHIQ.push(["Quyidagi fikrlardan qaysi biri to‘g‘ri?",["Atom energetikasini rivojlantirishga cheklovlar joriy etish global iqlim o‘zgarishining oldini olishning muhim usuli hisoblanadi.","Global iqlim o‘zgarishining asosiy sabablaridan biri atmosferada azot miqdorining oshishi hisoblanadi.","Global iqlim o‘zgarishining asosiy sabablaridan biri atmosferadagi karbonat angidrid miqdorining oshishi hisoblanadi.","Polimerlar kimyosi uchun xom ashyo sifatida bog‘langan neft-gazdan foydalanish atrof-muhitni barqaror boshqarishga misol bo‘la oladi."],2]);
GEO_OCHIQ.push(["Dunyo okeani bo‘ylab ekspeditsiyada marjon orollarining kelib chiqishini kim o‘rgandi?",["R. Piri","E. Kotsebu","Leybnits","Pallas"],1]);
GEO_OCHIQ.push(["Qaysi tog‘ tabiiy xususiyatlariga ko‘ra uch qismga — G‘arbiy, Sharqiy va Janubiy tog‘lariga bo‘linadi?",["Alp","Kordilyera","Karpat","Gatt"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “Alpinistlar Bobotog‘ tog‘ining Zarkosa (2289 m) cho‘qqisini zabt etishib, tizmaning sharqiy yonbag‘ridan tushib borib, daryo bo‘yida dam olishdi”. Alpinistlar qaysi daryo bo‘yida dam olganini aniqlang.",["Surxondaryo","Kofirnihon","Vaxsh","Qunduzdaryo"],1]);
GEO_OCHIQ.push(["Matnni o‘qing. Yerosti suvlari har xil davr yotqiziqlari orasida uchraydi. Paleogen va neogen davri yotqiziqlari orasidagi 140—150 m chuqurlikdan chuchuk suv chiqadi. Bo‘r davri yotqiziqlari orasidagi 1000 —2000 m chuqurlikdan chiquvchi mineral shifobaxsh suv harorati +60 +70°C ga yetadi. Matndagi ma’lumotlar qaysi tabiiy geografik okrugga oid ekanligini aniqlang.",["Surxondaryo","Quyi Zarafshon","Qizilqum","O‘rta Zarafshon"],0]);
GEO_OCHIQ.push(["2010-yildan keyingi davrda ishga tushgan korxonani toping.",["Zafarobod sement zavodi","Olmaliq ammofos zavodi","Qo‘ng‘irot soda zavodi","Yangiyo‘l biokimyo"],0]);
GEO_OCHIQ.push(["“Rayonning iqtisodiy geografik o‘rnini qulay deyish mumkin. Iqtisodiy geografik o‘rnining qulayligi rayonning transport geografik holatida ham yaqqol ko‘zga tashlanadi. Tekislik zamonaviy transport va irrigatsiya inshootlari bilan zich qoplangan”. Bu iqtisodiy geografik o‘rnidagi qulayliklar qaysi iqtisodiy rayon tegishli ekanligini toping.",["Mirzacho‘l","Zarafshon","Janubiy","Toshkent"],0]);
GEO_OCHIQ.push(["OPEK (neft eksport qiluvchi mamlakatlar tashkiloti) – Integratsion uyushmalarning qaysi turiga mansub?",["Mintaqaviy","Tarmoqlar","Halqaro monopoliyalar","Hamkorlik"],1]);
GEO_OCHIQ.push(["Matnni o‘qing. “Bu davlat aholisi 1 million kishidan ko‘p, aholisining irqiy tarkibida yevropaliklarning avlodlari ko‘pchilikni tashkil qiladi, aholisi AQSHga ommaviy tarzda ko‘chayotganligi, aholi soni o‘sishiga salbiy ta’sir ko‘rsatmoqda” Matndagi ma’lumotlar qaysi davlatga mansub ekanligini toping.",["Gavayi","Gaiti","Yamayka","Puerto-Riko"],3]);
GEO_OCHIQ.push(["G‘arbiy Afrika subregioniga oid ma’lumotlar berilgan javobni aniqlang.",["Bu subregion ishlov berilmagan olmos, mis, kobalt, marganes, qalay, neft kabi mineral resurslarning asosiy qismini jahonning turli davlatlariga eksport qiladi. Bundan tashqari, subregion eksportida o‘rmon resurslarining salmog‘i ham katta. Asosiy sanoat tarmog‘i konchilik sanoati bo‘lib, so‘nggi yillarda yirik shaharlarda asta-sekinlik bilan qayta ishlovchi sanoat tarmoqlari ham rivojlanmoqda.","Subregionning zamonaviy qiyofasini, birinchi navbatda, bu yerda qadimdan rivojlanib kelgan qishloq xo‘jaligiga ixtisoslashuv belgilaydi. Plantatsiya xo‘jaligining rivojlanishi bo‘yicha katta tajribaga ega bo‘lgan subregion davlatlari, asosan, texnik ekinlar yetishtirishga ixtisoslashgan. Qishloq xo‘jaligida yetishtiriladigan monokultura ekinlarining (yeryong‘oq, turli mevalar, tabiiy kauchuk, kakao, kofe) asosiy qismi eksportga yo‘naltiriladi.","Boshqa subregionlardan farqli ravishda bu mintaqa mineral resurslarga nisbatan kambag‘al ekanligi bilan ajralib turadi. Shu sababli iqtisodiyotini rivojlantirishda mavjud bo‘lgan boshqa tabiiy resurslardan samarali foydalanishga harakat qiladi. Asosan, tropik qishloq xo‘jaligi rivojlangan bo‘lib, jahon bozoriga kofe, choy, kokos palmasi mahsulotlari, turli ziravorlar olib chiqadi.","Hududining katta qismi subtropik mintaqaga to‘g‘ri kelganligi davlatlarning paxta, zaytun, uzum, sitrus mevalar yetishtirishga ixtisoslashishga sabab bo‘lgan. Sanoat tarmoqlari rivojlanishi esa, birinchi navbatda mineral xomashyolarni qazib olish (neft, tabiiy gaz, fosforit, temir rudasi) hamda qayta ishlash bilan bog‘liq."],1]);
GEO_OCHIQ.push(["Hozirgi zamon marjon orollari ekvatorial va tropik o‘lkalardan boshqa yerlarda uchramaydi. Faqat Golfstrim iliq oqimi o‘tadigan qaysi orollarning yaqinidagina tropiklardan tashqarida uchraydi?",["Nyufaulend","Bermud orollari","Bagama orollari","Islandiya oroli"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “Zamini paleozoy erasida vujudga kelgan. Kaynozoy erasida sodir bo‘lgan alp tog‘ burmalanishi davrida yana qayta ko‘tarilgan va yashargan. O‘lka hududi tektonik jihatdan faol bo‘lib, seysmik mintaqaga kiradi. O‘lka hududida balandligi 200 metrdan oshmaydigan pasttekisliklardan tortib, mutlaq balandligi 5 000 metrdan ortadigan baland tizmalarni uchratish mumkin.” Matndagi ma’lumotlar qaysi tabiiy geografik o‘lkaga oid ekanligini aniqlang.",["Sharqiy Osiyo","Janubi-g‘arbiy Osiyo","Old Osiyo","Janubi-sharqiy Osiyo"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “Boyqo‘ng‘ir shahri 2050-yilgacha Rossiya Federatsiyasiga Qozog‘iston hukumati tomonidan foydalanish tartibi bilan ijaraga berilgan. Boyqo‘ng‘ir kosmodromi 2012-yilda 21 raketa fazoga qo‘yib yuborilgan va eng ko‘p fazo jismlarini orbitaga uchirish sababli dunyoda yetakchilik qilmoqda.” Fazoga ko‘plab kosmik kemalarni uchirish tufayli vujudga kelayotgan global ekologik muammoni aniqlang.",["“Ozon qatlamining yemirilishi”","“Issiqxona samarasi”","“O‘rmonsizlanish muammosi”","“Cho‘llashish muammosi”"],1]);
GEO_OCHIQ.push(["Rivojlangan urbanizatsiyaga oid ma’lumot berilgan javobni aniqlang.",["Oxirgi 200 yil davomida dunyo aholisida shahar aholisining ulushi muntazam ravishda o‘sib borgan.","Eng yirik shaharlarning o‘sishi ayrim hollarda “soxta” urbanizatsiya tarzida, ya’ni shahar chekkalarida qishloqdan ko‘chib kelgan past daromadli aholi uy-joylarining zichlashib borishi ko‘rinishida kechadi.","“Millioner” shaharlarning yuqori sur’atlar bilan o‘sishi hamda yirik shaharlar atrfida aglomeratsiyalarning vujudga kelishi bilan tavsiflanadi.","Shaharlar markazlari, asosan, tadbirkorlik, bank-moliya sektori, boshqaruv sohalarining rivojlanish maskanlariga aylanib, aholi yashash massivlari esa tobora markazdan uzoqlashib boraveradi."],2]);
GEO_OCHIQ.push(["Chizma xaritada O‘rta Osiyoning chala cho‘l tabiat zonasi tarkib topgan hudud qaysi raqam bilan belgilangan?",["3","4","5","6"],3,"gx43_v3_31"]);
GEO_OCHIQ.push(["Quyidagi sxemada Yer orbitasi bo‘ylab Quyosh atrofida aylanganda qaysi nuqtada perigeliyda bo‘ladi?",["1","2","3","4"],1,"gx43_v4_2"]);
GEO_OCHIQ.push(["So‘nggi yillarda Quyosh faolligi bilan bog‘liq bo‘lgan epidemiyalarning tarqalishi (koronovirus), vulqon faolligining kuchayishi (Islandiyadagi vulqonlar), siklonlar hosil bo‘lishining ortishi, ketma-ket qurg‘oqchiliklar bo‘lishi, ritmik hodisalarning qaysi turiga kiradi?",["ko‘p asrlik","asr ichidagi","yillik","sutkalik"],1]);
GEO_OCHIQ.push(["Matnni o‘qing. “Okean shelfida daryo va to‘lqin yotqiziqlari, organik jinslar, okean tubida qizil gilli jinslar eng ko‘p tarqalgan. Okean tubi relyefi juda murakkab tuzilgan. Bu yerda dengiz sayozligi kam, 3 060 000 km2 maydonni egallaydi”. Matnda berilgan ma’lumotlar qaysi okeanga oid ekanligini aniqlang.",["Tinch","Atlantika","Hind","Shimoliy Muz"],0]);
GEO_OCHIQ.push(["O‘rta Osiyo hududida zilzilalar qaysi tog‘lar hamda ularning atrofida ko‘proq ro‘y berib turadi?",["Hindukush va Bandi Turkiston","Pomir va Tyanshan","Kopetdog‘, Nishopur","Hindukush va Pomir"],1]);
GEO_OCHIQ.push(["Matnni o‘qing. “Platoning shimoliy qismi qumli tekislikdan, markaziy qismi qirlardan, janubiy qismi qir va botiqlardan iborat”. Matndagi ma’lumotlar qaysi platoga mansub ekanligini toping.",["Badxiz","Qorabel","To‘rg‘ay","Ustyurt"],3]);
GEO_OCHIQ.push(["Matnni o‘qing. “Alpinistlar Tojikiston hududidan baland tog‘lar orqali o‘tib, daryo vodiysining shimoliy va janubiy qismida 2 ta qo‘riqxona joylashganligi ko‘rishdi, qo‘riqxona hududiga kirish taqiqlanganligi uchun, daryo vodiysi bo‘ylab okrug hududiga kirib kelishdi”. Alpinistlar qaysi tabiiy geografik okrugiga borishganini aniqlang.",["Surxondaryo","O‘rta Zarafshon","Qashqadaryo","Chirchiq-Ohangaron"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “Geografiya fakulteti talabalarini yozgi amaliyotida o‘qituvchisi shahar tashqarisiga ekskursiyaga olib bordi. Ular sayr qilgan hudud shaharga nisbatan ancha balandroqda joylashgan edi. Talabalar ekskursiya qilgan hududda betaga, rovoch, yalpiz kabi o‘tlar, na’matak, zirk, dukcho‘p va irg‘ay kabi butalar borligini aniqlashdi. O‘qituvchisi bu mintaqada burgut, tasqara, itolg‘a, kaklik, boltatumshuq, bulbul kabi qushlar borligi haqida ma’lumot berdi”. Talabalar ekskursiyaga chiqqan hududda O‘zbekistonning qaysi tabiat mintaqasi tarkib topganligini aniqlang.",["cho‘l","adir","yaylov","tog‘"],3]);
GEO_OCHIQ.push(["Maydoni qariyb O‘zbekiston maydonining 1/10 qismiga teng bo‘lib, bu hududda mamlakat aholisining har 1/7 qismi yashaydi. Iqtisodiy rayonda cho‘l va tog‘ yaylovlarini o‘zlashtirilishi bilan tabiiy yaylovlar tobora qisqarib bormoqda. Bundan qorako‘lchilik zarar ko‘rmasligi uchun cho‘llarda fitomeliorativ tadbirlar ko‘rilmoqda. Bu ma’lumotlar qaysi iqtisodiy rayonga tegishli ekanligini toping.",["Quyi Amudaryo","Zarafshon","Janubiy","Farg‘ona"],2]);
GEO_OCHIQ.push(["Iqtisodiyotning uchlamchi sektoriga tegishli bo‘lgan ma’lumotni toping.",["Fransiyada dengiz sayozliklarida marikultura, ya’ni turli dengiz organizmlarini sun’iy ravishda ko‘paytirish yaxshi rivojlangan.","Italiya sanoatining yetakchi tarmoqlari sifatida mashinasozlik, kimyo, yengil va oziq-ovqat sanoatlari ajralib turadilar.","Rossiyada chorvachilikning asosiy tarmoqlari qoramolchilik, cho‘chqachilik, parrandachilik hisoblanadi. Shimoliy hududlarida bug‘uchilik rivojlangan.","Buyuk Britaniya iqtisodiyotida bank-moliya sohasi, turizm, axborot va telekommunikatsiya texnologiyalari, tibbiyot va oliy ta’lim o‘zining xalqaro iqtisodiy ahamiyati bilan alohida ajralib turadi."],3]);
GEO_OCHIQ.push(["Qora metallurgiya sanoatiga oid to‘g‘ri ma’lumotni aniqlang.",["Ushbu sanoat tarmog‘ida juda katta hajmdagi temir rudasi va kokslanadigan ko‘mirdan foydalaniladi.","Osiyo qit’asi davlatlari qazib olinadigan temir rudasining deyarli 80 % ini yetkazib beradilar.","Temir rudasini katta miqdorda eksport qiluvchi davlatlar – AQSH, Xitoy, Buyuk Britaniya, Yaponiya, GFR, Koreya Respublikasi kabilar hisoblanadi.","Tayyor metall mahsulotlarini ishlab chiqarish jarayonida Janubiy Osiyo mintaqasi davlatlari peshqadam."],0]);
GEO_OCHIQ.push(["Yevropaning qaysi subregioni tabiiy sharoitining umumiy jihatlari asosan iqlimining ko‘proq mo‘tadil va dengiz xarakterga egaligida o‘z aksini topadi.",["G‘arbiy Yevropa","Sharqiy Yevropa","Janubiy Yevropa","Shimoliy Yevropa"],3]);
GEO_OCHIQ.push(["Matnni o‘qing. “Ushbu subregionda Buyuk Britaniya, Fransiya, Niderlandiya va AQSHning mustamlaka, dengizorti hududlari hududlari mavjud. Bu hudud litosfera plitalari to‘qnashgan chegarada joylashganligi bois, u yerda vaqti-vaqti bilan kuchli zilzilalar sodir bo‘lib turadi. Ayrim orollarida harakatdagi vulqonlarni ko‘p. Iqlimning salbiy jihatlaridan biri – kuchli dovullarning tez-tez takrorlanib turishidir”. Matndagi ma’lumotlar qaysi subregionga oid ekanligini aniqlang.",["Okeaniya davlatlari","Karib havzasi orol mamlakatlari","Janubi-sharqiy Osiyo","Markaziy Afrika"],1]);
GEO_OCHIQ.push(["Matnni o‘qing. “Sanoati, asosan, ko‘ptarmoqli mashinasozlikka ixtisoslashgan, shu bilan birga, neft, neft-kimyo va metallurgiya sanoatlari ham yaxshi rivojlangan. Qishloq xo‘jaligi sholi, tabiiy kauchuk, moyli palma, kokos palmasi, banan, tamaki, murch va boshqa ekinlarni yetishtirishga ixtisoslashgan. So‘nggi yillarda xorijiy sayyohlar sonining ko‘pligi bo‘yicha jahonning yetakchi 10 ta mamlakatlari qatoriga kirmoqda”. Matndagi ma’lumotlar qaysi davlatga oid ekanligini aniqlang.",["Indoneziya","Singapur","Malayziya","Braziliya"],2]);
GEO_OCHIQ.push(["Matnni o‘qing. “Turli foydali qazilmalarning boy zaxiralari hisobiga tog‘-kon sanoati yuqori darajada rivojlangan. Jahondagi eng yirik ko‘mir eksportyorlaridan biridir. Qishloq xo‘jaligi mamlakat hududining 15 % qismida intensiv rivojlangan”. Matndagi ma’lumotlar qaysi davlat iqtisodiyotiga oid ekanligini aniqlang.",["Hindiston","JAR","Avstraliya","Indoneziya"],1]);
GEO_OCHIQ.push(["Atmosferada karbonat angidrid gazlarini kamaytirishga yordam beradigan javob berilgan qatorni toping.",["shamol va quyosh energiyasini rivojlantirish","tropik o‘rmonlar maydonining qisqarishi","atom energetikasini yanada rivojlantirishni cheklash","issiqlik elektr stantsiyalarini ko‘mirdan tabiiy gazga o‘tkazish"],0]);
GEO_OCHIQ.push(["Migratsiyaga oid ma’lumot berilgan javobni aniqlang.",["2010 yilda Qozog‘istonda aholining tabiiy qisqarishi kuzatildi, bu oxirgi 15 yil ichida eng past ko‘rsatkich edi.","2008 yilda Volga federal okrugi hududlariga doimiy yashash uchun Rossiyadan tashqaridan kelganlarning yarmidan ko‘pi O‘zbekiston, Ukraina va Qozog‘istondan kelgan muhojirlar edi.","Hozirda Yaponiyada aholining atigi 10% mamlakatning qishloq joylarida, 90% shaharlarda istiqomat qiladi.","MDHning ko‘pgina davlatlarida bolalarning umumiy aholi sonidagi ulushi kamayib bormoqda."],1]);
GEO_OCHIQ.push(["Urbanizatsiyaga oid ma’lumot berilgan javobni aniqlang.",["G‘arbiy Yevropaga Osiyo va Afrikadan aholi ko‘chib kelishining sabablari, asosan, iqtisodiy mohiyatga ega, ya’ni G‘arbiy Yevropa davlatlarining mehnat bozorida ish o‘rinlarining ko‘pligi hamda turmush darajasining yuqoriligi bilan izohlanadi.","Osiyo va Afrikada aholining tabiiy o‘sishi yuqoriligi, qishloqlardan shaharlarga faol aholi migratsiyasi ta’sirida shahar aholisi ulushi tez ortib bormoqda.","Yevropa mamlakatlari o‘rtasida aholi zichligi bo‘yicha katta tafovutlar mavjud. Bunga tabiiy sharoit, ayniqsa iqlim va relyef katta ta’sir ko‘rsatgan.","Osiyo aholisi hozirgi bosqichda, umumiy olganda, yiliga 1–1,1 % ga o‘smoqda. Ammo aholi ko‘payish sur’atlari davlatlarda turlicha. Yaponiya, Xitoy, Singapur, Tailand, Gruziya, Armaniston, Kiprda aholining tabiiy ko‘payishi ancha past."],1]);
GEO_OCHIQ.push(["Quyida berilgan xaritada 3 raqami bilan O‘rta Osiyoning qaysi tabiiy geografik kichik o‘lakasi ko‘rsatilgan?",["Qozog‘iston past tog‘lari","To‘rg‘ay platosi","Janubiy Qozog‘iston cho‘llari","Orolbo‘yi qumli cho‘llari"],3,"gx43_v4_31"]);
GEO_OCHIQ.push(["Chizma xaritada II raqam bilan belgilangan geografik obyektni aniqlang.",["Hisor tog‘i","Ko‘hitang tog‘i","Boysuntog‘","Surxontog‘"],2,"gx43_v4_32"]);
GEO_OCHIQ.push(["Yevrosiyo daryolariga oid topshiriq (javoblar A–F variantlardan tanlanadi). <br><b>33.</b> Reyn, Rona, Adije, Drava daryolari qaysi tabiiy geografik o‘lkada joylashganini aniqlang.",["G‘arbiy Sibir","Sharqiy Sibir","Sharqiy Yevropa","Sharqiy Osiyo","O‘rta Yevropa","Old Osiyo"],4]);
GEO_OCHIQ.push(["Yevrosiyo daryolariga oid topshiriq (javoblar A–F variantlardan tanlanadi). <br><b>34.</b> Pechora, Mezen, Shimoliy Dvina, Ural daryolari qaysi tabiiy geografik o‘lkada joylashgan?",["G‘arbiy Sibir","Sharqiy Sibir","Sharqiy Yevropa","Sharqiy Osiyo","O‘rta Yevropa","Old Osiyo"],2]);
GEO_OCHIQ.push(["Yevrosiyo daryolariga oid topshiriq (javoblar A–F variantlardan tanlanadi). <br><b>35.</b> Yenisey, Lena, Aldan, Kolima, Taymir daryolari qaysi tabiiy geografik o‘lkaga tegishli ekanligini toping?",["G‘arbiy Sibir","Sharqiy Sibir","Sharqiy Yevropa","Sharqiy Osiyo","O‘rta Yevropa","Old Osiyo"],1]);
GEO_YOZMA.push(["<b>140° g‘arbiy uzunlikda sana 31-dekabr 2023-yil, mahalliy vaqt 16:00 ga teng.</b><br>a) Qaysi meridianda soat 10:00 bo‘lishini aniqlang.<br>b) Ushbu meridiandagi sana (kun, oy, yil)ni aniqlang.",[["a) Qaysi meridianda soat 10:00 bo‘lishini aniqlang.",/130/i],["b) Ushbu meridiandagi sana (kun, oy, yil)ni aniqlang.",/0?1[.\s-]*(yanvar|0?1)[.\s-]*2024/i]]]);
GEO_KALIT.push("a) 130° sharqiy uzunlik; b) 2024-yil 1-yanvar (01.01.2024)");
GEO_YOZMA.push(["<b>Farg‘ona viloyatiga oid ma’lumotlarni toping.</b><br>a) Viloyat mamlakatda yetishtirilayotgan qaysi mahsulotning 20% ga yaqinini beradi?<br>b) Qaysi shaharida kulolchilik buyumlari ishlab chiqaradi?",[["a) Viloyat mamlakatda yetishtirilayotgan qaysi mahsulotning 20% ga yaqinini beradi?",/pilla|ipak/i],["b) Qaysi shaharida kulolchilik buyumlari ishlab chiqaradi?",/rishton/i]]]);
GEO_KALIT.push("a) pilla; b) Rishton");
GEO_YOZMA.push(["<b>Diagrammadagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Tashqi savdo aylanmasining ko‘rsatkichi eng past bo‘lgan yilni aniqlang.<br>b) Tashqi savdo balansi eng yuqori bo‘lgan yilni aniqlang.",[["a) Tashqi savdo aylanmasining ko‘rsatkichi eng past bo‘lgan yilni aniqlang.",/2000/i],["b) Tashqi savdo balansi eng yuqori bo‘lgan yilni aniqlang.",/2015/i]],"gx43_v1_42"]);
GEO_KALIT.push("a) 2000-yil; b) 2015-yil");
GEO_YOZMA.push(["<b>Ushbu chizmaga mos javobni toping.</b><br>a) Ushbu chizmada AB yo‘nalish g‘arbga yo‘nalgan bo‘lsa, AC yo‘nalish azimutini aniqlang. AB yo‘nalishga nisbatan AC yo‘nalish ufqning qaysi tomoniga mos kelishini toping.<br>b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",[["a) Ushbu chizmada AB yo‘nalish g‘arbga yo‘nalgan bo‘lsa, AC yo‘nalish azimutini aniqlang. AB yo‘nalishga nisbatan AC yo‘nalish ufqning qaysi tomoniga mos kelishini toping.",/335|shimol\W*(shimol\w*\W*)?g.arb|shimoli\W*g.arb/i],["b) AC yo‘nalishdan ufqning sharq tomoniga borish uchun necha gradus azimutga burilish kerak bo‘ladi?",/115/i]],"gx43_v2_36"]);
GEO_KALIT.push("a) 335°, shimol-shimoli-g‘arb; b) 115°");
GEO_YOZMA.push(["<b>Samolyot VIII soat mintaqasida joylashgan shahardan, II soat mintaqasida joylashgan shaharga soat 22:00 da uchdi. Samolyot 21:00 da qo‘ndi.</b><br>a) Samolyot uchgan vaqtda II soat mintaqasida soat necha bo‘lgan?<br>b) Samolyot qancha vaqt parvoz qilgan?",[["a) Samolyot uchgan vaqtda II soat mintaqasida soat necha bo‘lgan?",/16[:.\s]?00|\b16\b/i],["b) Samolyot qancha vaqt parvoz qilgan?",/\b5\b|besh/i]]]);
GEO_KALIT.push("a) 16:00; b) 5 soat");
GEO_YOZMA.push(["<b>Sharqiy Yevropaga oid ma’lumotlarni toping.</b><br>a) Sharqiy Yevropada joylashgan temir koni nomini yozing.<br>b) Sharqiy Yevropada eng kam yog‘ingarchilik qayerda kuzatiladi?",[["a) Sharqiy Yevropada joylashgan temir koni nomini yozing.",/kri?vo[iyj]\s*rog/i],["b) Sharqiy Yevropada eng kam yog‘ingarchilik qayerda kuzatiladi?",/kaspiy/i]]]);
GEO_KALIT.push("a) Krivoy Rog; b) Kaspiybo‘yi pasttekisligi");
GEO_YOZMA.push(["<b>Jizzax viloyatiga oid ma’lumotlarni toping.</b><br>a) Qaysi kondan polimetall rudasi qazib olinadi?<br>b) Qaysi shaharida tog‘-kon sanoati rivojlangan?",[["a) Qaysi kondan polimetall rudasi qazib olinadi?",/uchquloch/i],["b) Qaysi shaharida tog‘-kon sanoati rivojlangan?",/qo.ytosh/i]]]);
GEO_KALIT.push("a) Uchquloch; b) Qo‘ytosh");
GEO_YOZMA.push(["<b>Diagrammadagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) II raqamida ko‘rsatilgan davlat ijtimoiy-iqtisodiy rivojlanish holatiga ko‘ra qaysi tipga kirishini aniqlang.<br>b) Tashqi savdo balansi manfiy qiymatga ega bo‘lgan davlatni aniqlang.",[["a) II raqamida ko‘rsatilgan davlat ijtimoiy-iqtisodiy rivojlanish holatiga ko‘ra qaysi tipga kirishini aniqlang.",/industrial\W*agrar/i],["b) Tashqi savdo balansi manfiy qiymatga ega bo‘lgan davlatni aniqlang.",/^\W*(i|1)\W*$|birinchi/i]],"gx43_v2_42"]);
GEO_KALIT.push("a) industrial-agrar; b) I");
GEO_YOZMA.push(["<b>Geosiyosatga oid topshiriqlarni bajaring.</b><br>a) Qaysi ilmiy yondashuv tarafdorlari dengizbo‘yi davlatlarining tarixi geografik o‘rni, qirg‘oq chegara chiziqlarining uzunligi va ko‘rinishi, istiqomat qiluvchi aholi soni hamda ularga xos bo‘lgan xususiyat kabi omillar ta’sirida shakllanadi degan fikrni bildirganlar?<br>b) Geosiyosatda mavjud barcha qarashlar makon (hudud) ustidan nazorat g‘oyasini rivojlantirishga qaratilgan. Nazorat qilinayotgan yoki nazorat qilinishi rejalashtirilayotgan hudud nima deb nomlanadi?",[["a) Qaysi ilmiy yondashuv tarafdorlari dengizbo‘yi davlatlarining tarixi geografik o‘rni, qirg‘oq chegara chiziqlarining uzunligi va ko‘rinishi, istiqomat qiluvchi aholi soni hamda ularga xos bo‘lgan xususiyat kabi omillar ta’sirida shakllanadi degan fikrni bildirganlar?",/harbiy/i],["b) Geosiyosatda mavjud barcha qarashlar makon (hudud) ustidan nazorat g‘oyasini rivojlantirishga qaratilgan. Nazorat qilinayotgan yoki nazorat qilinishi rejalashtirilayotgan hudud nima deb nomlanadi?",/geosiyosiy/i]]]);
GEO_KALIT.push("a) harbiy-strategik yondashuv; b) geosiyosiy maydon");
GEO_YOZMA.push(["<b>Yarimsharlar yozuvsiz xaritasidan foydalanib topshiriqlarni bajaring.</b><br>a) Yer aylanish tezligi masofa hisobida qaysi nuqtada eng katta ekanligini aniqlang.<br>b) A va G nuqtalardan B nuqtadagi shaharga bir xil tezlikda samolyotlar uchishdi. Qaysi samolyot oldinroq qo‘nadi? (hisoblashda 1° meridian yoyi 111 km ga, 60° parallel yoyi 56 km ga teng deb qabul qilinsin).",[["a) Yer aylanish tezligi masofa hisobida qaysi nuqtada eng katta ekanligini aniqlang.",/\bF\b|ekvator/i],["b) A va G nuqtalardan B nuqtadagi shaharga bir xil tezlikda samolyotlar uchishdi. Qaysi samolyot oldinroq qo‘nadi? (hisoblashda 1° meridian yoyi 111 km ga, 60° parallel yoyi 56 km ga teng deb qabul qilinsin).",/\bA\b|2\s?240/i]],"gx43_v3_36"]);
GEO_KALIT.push("a) F nuqtada (ekvatorda); b) A shahardan uchgan samolyot (A–B masofa 2240 km, G–B masofa 3330 km)");
GEO_YOZMA.push(["<b>Dunyoning yozuvsiz xaritasidan foydalanib topshiriqlarni bajaring.</b><br>a) A nuqtada joylashgan davlat, B nuqtada joylashgan orol davlatdan necha soat keyin yangi yilni kutib olishini aniqlang.<br>b) Samolyot C nuqtadan mahalliy vaqt bilan 1-iyun kuni soat 23:00 da uchib, 4 soatdan keyin D nuqtaga qo‘ngandagi mahalliy vaqt va sanani aniqlang.",[["a) A nuqtada joylashgan davlat, B nuqtada joylashgan orol davlatdan necha soat keyin yangi yilni kutib olishini aniqlang.",/\b8\b|sakkiz/i],["b) Samolyot C nuqtadan mahalliy vaqt bilan 1-iyun kuni soat 23:00 da uchib, 4 soatdan keyin D nuqtaga qo‘ngandagi mahalliy vaqt va sanani aniqlang.",/0?3[:.\s]?00.*\b0?2[\s.\-]*(iyun|06)|\b0?2[\s.\-]*(iyun|06).*0?3[:.\s]?00/i]],"gx43_v3_37"]);
GEO_KALIT.push("a) 8 soat; b) 03:00, 2-iyun");
GEO_YOZMA.push(["<b>Jadvaldagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Soat 01:00 da havoning mutlaq namligini aniqlang.<br>b) Soat 07:00 da 1 m³ havoning namga to‘yinishi uchun necha foiz nisbiy namlik kerak bo‘lishini aniqlang.",[["a) Soat 01:00 da havoning mutlaq namligini aniqlang.",/3[.,]5/i],["b) Soat 07:00 da 1 m³ havoning namga to‘yinishi uchun necha foiz nisbiy namlik kerak bo‘lishini aniqlang.",/\b20\b/i]],"gx43_v3_39"]);
GEO_KALIT.push("a) 3,5 g; b) 20 %");
GEO_YOZMA.push(["<b>Jadvaldagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) II raqamda ko‘rsatilgan davlat BMT tomonidan ajratilgan qaysi blokka kirishini aniqlang.<br>b) Jadvalda ko‘rsatilgan qaysi davlat iqtisodiyoti bir tomonlama rivojlangan davlatlar toifasiga kiradi?",[["a) II raqamda ko‘rsatilgan davlat BMT tomonidan ajratilgan qaysi blokka kirishini aniqlang.",/rivojlangan/i],["b) Jadvalda ko‘rsatilgan qaysi davlat iqtisodiyoti bir tomonlama rivojlangan davlatlar toifasiga kiradi?",/^\W*(i|1)\W*$|birinchi/i]],"gx43_v3_41"]);
GEO_KALIT.push("a) rivojlangan davlatlar; b) I");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) 2015-yilda (jami aholi 2860000 kishi) mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang.<br>b) Grafikdagi ma’lumotlar asosida tabiiy va mexanik o‘sish hisobiga aholi soni ko‘payishining eng past ko‘rsatkichi qaysi yilda qayd etilganini aniqlang.",[["a) 2015-yilda (jami aholi 2860000 kishi) mintaqa aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang.",/25\s?740/i],["b) Grafikdagi ma’lumotlar asosida tabiiy va mexanik o‘sish hisobiga aholi soni ko‘payishining eng past ko‘rsatkichi qaysi yilda qayd etilganini aniqlang.",/2000/i]],"gx43_v3_43"]);
GEO_KALIT.push("a) 25 740 kishi; b) 2000-yil");
GEO_YOZMA.push(["<b>Grafikdagi ma’lumotlardan foydalanib topshiriqlarni bajaring.</b><br>a) Grafikdan foydalanib yillik amplitudani aniqlang.<br>b) Yuqoridagi diagrammadan foydalanib yillik yog‘in miqdorining necha foizi qish mavsumiga to‘g‘ri kelishini aniqlang.",[["a) Grafikdan foydalanib yillik amplitudani aniqlang.",/\b40\b/i],["b) Yuqoridagi diagrammadan foydalanib yillik yog‘in miqdorining necha foizi qish mavsumiga to‘g‘ri kelishini aniqlang.",/\b24/i]],"gx43_v3_44"]);
GEO_KALIT.push("a) 40 °C; b) ≈ 24,2 % (145 mm : 600 mm)");
GEO_YOZMA.push(["<b>140° g‘arbiy uzunlikda sana 1-yanvar soat 12:00 ga teng bo‘lsa:</b><br>a) Qaysi meridianda soat 9:00 bo‘lishini aniqlang.<br>b) Ushbu meridiandagi sana (kun, oy)ni aniqlang.",[["a) Qaysi meridianda soat 9:00 bo‘lishini aniqlang.",/175/i],["b) Ushbu meridiandagi sana (kun, oy)ni aniqlang.",/\b0?2[.\s-]*(yanvar|0?1)\b|2\s*-?\s*yanvar/i]]]);
GEO_KALIT.push("a) 175° sharqiy uzunlik; b) 2-yanvar");

/* ===== Rasmli testlar to‘plami — Ixtiyor Muxtarov (30 variant) ===== */
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Havo bulut","Havo yarim bulut","Havo ozgina bulut","Havo ochiq"],3,"gx44_1_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Havo bulut","Havo yarim bulut","Havo ozgina bulut","Havo ochiq"],0,"gx44_1_2"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Havo bulut","Havo yarim bulut","Havo ozgina bulut","Havo ochiq"],1,"gx44_1_3"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Havo bulut","Havo yarim bulut","Havo ozgina bulut","Havo ochiq"],2,"gx44_1_4"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Shabada","O‘rtacha shamol","Kuchli shamol","Quyun"],0,"gx44_1_5"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Shabada","O‘rtacha shamol","Kuchli shamol","Quyun"],1,"gx44_1_6"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Shabada","O‘rtacha shamol","Kuchli shamol","Quyun"],2,"gx44_1_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Shabada","O‘rtacha shamol","Kuchli shamol","Quyun"],3,"gx44_1_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Kuchli shamol","Quyun","Tuman","Shabada"],2,"gx44_1_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Qor","Jala","Yomg‘ir","Bulduruq"],2,"gx44_1_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Qor","Jala","Momaqaldiroq","Bulduruq"],0,"gx44_1_11"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Bulduruq","Jala","Yomg‘ir","Do‘l"],1,"gx44_1_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Bulduruq","Do‘l","Jala","Yomg‘ir"],0,"gx44_1_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Bulduruq","Do‘l","Jala","Yomg‘ir"],1,"gx44_1_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Kuchli shamol","Momaqaldiroq","Bulduruq","Jala"],1,"gx44_1_15"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Qat-qat bulut","Patsimon bulut","Tuman","To‘p-to‘p bulut"],3,"gx44_1_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Qat-qat-bulut","Patsimon bulut","Tuman","To‘p-to‘p bulut"],0,"gx44_1_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Qat-qat bulut","To‘p-to‘p bulut","Tuman","Patsimon bulut"],3,"gx44_1_18"]);
GEO_OCHIQ.push(["Quyida ta’svirlangan xarita muallifini aniqlang.",["Ptolemey","Abu Rayhon Beruniy","Muhammad al-Xorazmiy","Eratosfen"],3,"gx44_1_19"]);
GEO_OCHIQ.push(["Quyida ta’svirlangan xarita muallifini aniqlang.",["Ptolemey","Abu Rayhon Beruniy","Muhammad al-Xorazmiy","Eratosfen"],0,"gx44_1_20"]);
GEO_OCHIQ.push(["Quyida ta’svirlangan xarita muallifini aniqlang.",["Ptolemey","Abu Rayhon Beruniy","Muhammad al-Xorazmiy","Eratosfen"],2,"gx44_2_1"]);
GEO_OCHIQ.push(["Quyida ta’svirlangan xarita muallifini aniqlang.",["Ptolemey","Abu Rayhon Beruniy","Muhammad al-Xorazmiy","Eratosfen"],1,"gx44_2_2"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi geografik hudud ko‘rasatilgan?",["Ichki dengiz","Eritreya dengizi","Efiopiya okeani","Sharqiy dengiz"],2,"gx44_2_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["Ichki dengiz","Eritreya dengizi","Efiopiya dengizi","Sharqiy dengiz"],1,"gx44_2_4"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["Ichki dengiz","Eritreya dengizi","Efiopiya okeani","Sharqiy dengiz"],0,"gx44_2_5"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["Ichki dengiz","Eritreya dengizi","Efiopiya okeani","Sharqiy dengiz"],3,"gx44_2_6"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi daryo ko‘rsatilgan?",["Istr daryosi","Dajla daryosi","Yaksart daryosi","Oks daryosi"],0,"gx44_2_7"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Dajla daryosi ko‘rsatilgan?",["2","4","7","6"],2,"gx44_2_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam Yaksart daryosi ko‘rsatilgan?",["2","4","7","6"],3,"gx44_2_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Oks daryosi ko‘rsatilgan?",["3","1","5","4"],2,"gx44_2_10"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Gang daryosi","Nil daryosi","Oks daryosi"],1,"gx44_2_11"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Gang daryosi","Nil daryosi","Oks daryosi"],0,"gx44_2_12"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Gang daryosi","Nil daryosi","Oks daryosi"],2,"gx44_2_13"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi shahar o‘rni ko‘rsatilgan?",["Astrobod","Iskandariya","Siyena","Bobil"],1,"gx44_2_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi shahar o‘rni ko‘rsatilgan?",["Astrobod","Iskandariya","Siyena","Bobil"],2,"gx44_2_15"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi shahar o‘rni ko‘rsatilgan?",["Astrobod","Iskandariya","Siyena","Bobil"],3,"gx44_2_16"]);
GEO_OCHIQ.push(["Quyidagi xaritada “A” harfi bilan qaysi geografik hudud ko‘rsatilgan?",["Skiflar","Massagetlar","So‘g‘diyona","Tavr tog‘lari"],3,"gx44_2_17"]);
GEO_OCHIQ.push(["Quyidagi xaritada “B” harfi bilan qaysi geografik hudud ko‘rsatilgan?",["Skiflar","Massagetlar","So‘g‘diyona","Tavr tog‘lari"],1,"gx44_2_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada “C” harfi bilan qaysi geografik hudud ko‘rsatilgan?",["Skiflar","Massagetlar","So‘g‘diyona","Tavr tog‘lari"],0,"gx44_2_19"]);
GEO_OCHIQ.push(["Ushbu rasmda ta’svirlangan xaritani muallifi xaritani nechanchi asrda yaratgan?",["Mil.avv. III asr","Milodiy III asr","Mil.avv. II asr","Milodiy II asr"],0,"gx44_2_20"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["G‘arbiy okean","Ichki dengiz","Fors ko‘li","Hindiston dengizi"],3,"gx44_3_1"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["G‘arbiy okean","Ichki dengiz","Fors ko‘li","Hindiston dengizi"],2,"gx44_3_2"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["G‘arbiy okean","Ichki dengiz","Fors ko‘li","Hindiston dengizi"],1,"gx44_3_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi geografik hudud ko‘rsatilgan?",["G‘arbiy okean","Ichki dengiz","Fors ko‘li","Hindiston dengizi"],0,"gx44_3_4"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Ganga daryosi","Yaksart daryosi","Oks daryosi"],0,"gx44_3_5"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Ganga daryosi","Yaksart daryosi","Oks daryosi"],1,"gx44_3_6"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Ganga daryosi","Yaksart daryosi","Oks daryosi"],2,"gx44_3_7"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi daryo ko‘rsatilgan?",["Hind daryosi","Ganga daryosi","Yaksart daryosi","Oks daryosi"],3,"gx44_3_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada Ra daryosi qaysi raqam bilan ko‘rsatilgan?",["5","6","4","3"],0,"gx44_3_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada Nil daryosi qaysi raqam bilan ko‘rsatilgan?",["5","6","4","3"],1,"gx44_3_10"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi shahar ko‘rsatilgan?",["Samarqand","Binokand","Buxoro","Xo‘jand"],2,"gx44_3_11"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi shahar ko‘rsatilgan?",["Samarqand","Binokand","Buxoro","Xo‘jand"],3,"gx44_3_12"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi shahar ko‘rsatilgan?",["Samarqand","Binokand","Buxoro","Xo‘jand"],1,"gx44_3_13"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi shahar ko‘rsatilgan?",["Samarqand","Binokand","Buxoro","Xo‘jand"],0,"gx44_3_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada 5 raqami bilan qaysi shahar ko‘rsatilgan?",["Astrobod","Binokand","Navokat","Xo‘jand"],2,"gx44_3_15"]);
GEO_OCHIQ.push(["Quyidagi xaritada 6 raqami bilan qaysi shahar ko‘rsatilgan?",["Astrobod","Binokand","Navokat","Xo‘jand"],0,"gx44_3_16"]);
GEO_OCHIQ.push(["Quyidagi xaritada kimning sayohati ta’svirlangan?",["Ibn Battuta","Al-Farg‘oniy","Nosir Xisrav","Hamidulla Hasanov"],2,"gx44_3_17"]);
GEO_OCHIQ.push(["5-sinf o‘quv atlasi va darslik matnidagi ma’lumotlardan foydalanib quyidagi a) va b) rasmlar qanday tabiiy sharoitda yashovchi xalqlarning Yer haqidagi tasavvuri mahsuli ekanligini aniqlang.",["a) okeanlar bo‘yida yashovchi aholi; b) cho‘llarda yashovchi aholi","a) issiq mintaqalarda yashovchi aholi; b) materik ichkarisida yashovchi aholi","a) materik ichkarisida yashovchi aholi; b) okeanlar bo‘yida yashovchi aholi","a) okeanlar bo‘yida yashovchi aholi; b) issiq mintaqalarda yashovchi aholi"],3,"gx44_3_18"]);
GEO_OCHIQ.push(["Quyidagi rasmda nima ta’svirlanganligini aniqlang.",["Yerning yoritilish mintaqalari","Yerning issiqlik mintaqalari","Yerning iqlim mintaqalari","A va B"],3,"gx44_3_19"]);
GEO_OCHIQ.push(["Shimoliy tropik chizig‘i rasmda qaysi harf bilan belgilangan?",["A","B","C","D"],0,"gx44_3_20"]);
GEO_OCHIQ.push(["Janubiy tropik chizig‘i rasmda qaysi harf bilan belgilangan?",["A","B","C","D"],1,"gx44_4_1"]);
GEO_OCHIQ.push(["Ekvator chizig‘i rasmda qaysi harf bilan belgilangan?",["A","B","C","D"],2,"gx44_4_2"]);
GEO_OCHIQ.push(["A nuqtada yoz fasli bo‘lganda, D nuqtada yilning qaysi fasli bo‘ladi?",["Bahor","Yoz","Kuz","Qish"],3,"gx44_4_3"]);
GEO_OCHIQ.push(["Rasmda harflar bilan ko‘rsatilgan parallellarning qaysi biri eng uzun?",["A","B","C","D"],2,"gx44_4_4"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda uyga yo‘nalish azimutini aniqlang.",["35⁰","40⁰","45⁰","50⁰"],1,"gx44_4_5"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda daraxtga yo‘nalish azimutini aniqlang.",["310⁰","315⁰","320⁰","325⁰"],2,"gx44_4_6"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda quduqqa yo‘nalish azimutini aniqlang.",["130⁰","135⁰","140⁰","145⁰"],2,"gx44_4_7"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda tegirmonga yo‘nalish azimutini aniqlang.",["220⁰","230⁰","235⁰","240⁰"],0,"gx44_4_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday geografik asbob ta’svirlangan?",["Ruletka","Flyuger","Anemometr","Yasama o‘lchov g‘ildirak"],3,"gx44_4_9"]);
GEO_OCHIQ.push(["Ushbu rasmda ta’svirlangan geografik asbob nomini to‘g‘ri belgilang.",["Anemometr","Gigrometr","Nivelir","Seysmogramma"],2,"gx44_4_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda ta’svirlangan qo‘lbola nivelirning balandligi necha metrni tashkil etadi?",["0,5 metr","1,5 metr","2 metr","1 metr"],3,"gx44_4_11"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday relyef shakli ko‘rsatilgan?",["Botiq","Tepalik","A va B javoblar to‘g‘ri","To‘g‘ri javob berilmagan"],1,"gx44_4_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday relyef shakli ko‘rsatilgan?",["Botiq","Tepalik","A va B javoblar to‘g‘ri","To‘g‘ri javob berilmagan"],0,"gx44_4_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda gorizontallar oralig‘i necha metrdan o‘tkazilgan?",["10 metr","4 metr","6 metr","5 metr"],3,"gx44_4_14"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib D nuqta qaysi yarimsharlarda joylashganligini aniqlang.",["Shimoliy hamda Sharqiy yarimsharlar","Janubiy va G‘arbiy yarimsharlar","Shimoliy hamda G‘arbiy yarimsharlar","Janubiy hamda Sharqiy yarimsharlar"],2,"gx44_4_15"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib N nuqta qaysi yarimsharlarda joylashganligini aniqlang.",["Shimoliy hamda Sharqiy yarimsharlar","Janubiy hamda G‘arbiy yarimsharlar","Shimoliy hamda G‘arbiy yarimsharlar","Janubiy hamda Sharqiy yarimsharlar"],3,"gx44_4_16"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib A nuqtaning geografik koordinatasini aniqlang.",["15⁰ janubiy kenglik va 45⁰ g‘arbiy uzunlik","15⁰ shimoliy kenglik va 45⁰ sharqiy uzunlik","15⁰ janubiy kenglik va 45⁰ sharqiy uzunlik","15⁰ shimoliy kenglik va 45⁰ g‘arbiy uzunlik"],0,"gx44_4_17"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib A nuqtaning geografik koordinatasini aniqlang.",["19⁰ g‘arbiy uzunlik va 56⁰ janubiy kenglik","19⁰ sharqiy uzunlik va 56⁰ janubiy kenglik","19⁰ g‘arbiy uzunlik va 56⁰ shimoliy kenglik","19⁰ sharqiy uzunlik va 56⁰ shimoliy kenglik"],1,"gx44_4_18"]);
GEO_OCHIQ.push(["Quyidagi nuqtalarning qaysi biri orqali Shimoliy qutbga borish nisbatan osonroq?",["A","B","C","D"],0,"gx44_4_19"]);
GEO_OCHIQ.push(["Quyidagi nuqtalarning qaysi biri eng uzun parallel chizig‘ida joylashganligini aniqlang.",["D","B","C","A va C"],3,"gx44_4_20"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda ichki yadroning qalinligini aniqlang.",["2080 km","1490 km","1080 km","1390 km"],3,"gx44_5_1"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda tashqi yadroning qalinligini aniqlang.",["2080 km","1490 km","1080 km","1390 km"],0,"gx44_5_2"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda mantiyaning qalinligini aniqlang.",["2680 km","2850 km","2760 km","2860 km"],3,"gx44_5_3"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda yer po‘stining qalinligini aniqlang.",["25 – 35 km","35 – 40 km","35 – 45 km","30 – 55 km"],1,"gx44_5_4"]);
GEO_OCHIQ.push(["Quyidagi rasmda yer po‘sti qaysi harf bilan ko‘rsatilgan?",["A","B","C","D"],0,"gx44_5_5"]);
GEO_OCHIQ.push(["Quyidagi rasmda “B” harfi bilan Yerning qaysi qatlami ko‘rsatilgan?",["Ichki yadro","Tashqi yadro","Mantiya","Yer po‘sti"],2,"gx44_5_6"]);
GEO_OCHIQ.push(["Quyidagi rasmda “C” harfi bilan Yerning qaysi qatlami ko‘rsatilgan?",["Ichki yadro","Tashqi yadro","Mantiya","Yer po‘sti"],1,"gx44_5_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda “D” harfi bilan Yerning qaysi qatlami ko‘rsatilgan?",["Ichki yadro","Tashqi yadro","Mantiya","Yer po‘sti"],0,"gx44_5_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan ko‘rsatilgan qatlam qanday jinslardan tashkil topgan?",["Gil, ohaktosh, granit, qumtosh, bo‘r","Granit, ohaktosh, qum, qumtosh, bo‘r","Gil, ohaktosh, qum, qumtosh, bo‘r","Gil, ohaktosh, qum, qumtosh, mergel"],2,"gx44_5_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi raqam bazalt qatlam ko‘rsatilgan?",["1","2","3","4"],2,"gx44_5_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi raqam granit qatlam ko‘rsatilgan?",["1","2","3","4"],1,"gx44_5_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi raqam bilan cho‘kindi qatlam ko‘rsatilgan?",["1","2","3","4"],0,"gx44_5_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan ta’svirlangan qatlam asosan qanday jinslardan tashkil topgan?",["Temir, magniy, kalsiy","Temir, qo‘rg‘oshin, mergel","Magniy, kalsiy, rux","Temir, rux, gil"],0,"gx44_5_13"]);
GEO_OCHIQ.push(["Quyidagi xaritada “A” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["6 sm","5 sm","4 sm","3 sm"],1,"gx44_5_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada “B” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["6 sm","5 sm","4 sm","3 sm"],0,"gx44_5_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada “D” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["1 sm","2 sm","3 sm","4 sm"],1,"gx44_5_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada “C” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["1 sm","2 sm","3 sm","4 sm"],0,"gx44_5_17"]);
GEO_OCHIQ.push(["Quyidagi xaritada “E” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["1 sm","2 sm","3 sm","4 sm"],2,"gx44_5_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada “F” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["1 sm","2 sm","3 sm","4 sm"],3,"gx44_5_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada “H” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["6 sm","7 sm","8 sm","9 sm"],2,"gx44_5_20"]);
GEO_OCHIQ.push(["Quyidagi xaritada “G” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["6 sm","7 sm","8 sm","9 sm"],0,"gx44_5_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada “J” harfi bilan ko‘rsatilgan nuqtada litosfera plitalarining harakat tezligi yiliga necha sm ni tashkil etadi?",["8 sm","7 sm","6 sm","5 sm"],3,"gx44_5_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada nima aks ettirilgan?",["Litosfera plitalari harakati","Litosfera plitalarining to‘qnashish chegaralari","Litosfera plitalarining ajralish chegarasi","Sayyoramizdagi yirik seysmik mintaqalar"],3,"gx44_6_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi harflar bilan belgilangan hududlar seysmik mintaqalarga tegishli ekanligini aniqlang.",["G – J – H – B – D – I – C","A – B – D – I – C – J – H","F – B – D – I – C – G – J","A – F – G – J – H – I – C"],0,"gx44_6_4"]);
GEO_OCHIQ.push(["Quyidagi vulqon kesmasida 1 raqami bilan vulqonning qaysi qismi ko‘rsatilgan?",["Vulqon o‘chog‘i","Magma","Vulqon kanali","Yon krater"],0,"gx44_6_5"]);
GEO_OCHIQ.push(["Quyidagi vulqon kesmasida qaysi raqam ostida vulqon kanali ko‘rsatilgan?",["1","2","3","4"],2,"gx44_6_6"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan nima ko‘rsatilgan?",["Magma","Vulqon o‘chog‘i","Vulqon kanali","Yon krater"],0,"gx44_6_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda 4 raqami bilan nima ko‘rsatilgan?",["Vulqon o‘chog‘i","Lava","Magma","Krater"],3,"gx44_6_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda 5 raqami bilan nima ko‘rsatilgan?",["Krater","Magma","Vulqon o‘chog‘i","Lava"],3,"gx44_6_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi raqam bilan vulqon kuli ko‘rsatilgan?",["4","5","6","7"],2,"gx44_6_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 7 raqami bilan nima ko‘rsatilgan?",["Lava","Yon krater","Krater","Vulqon kanali"],1,"gx44_6_11"]);
GEO_OCHIQ.push(["Ushbu rasmda nima tasvirlanganligini aniqlang.",["Aylanma havo oqimi","Buloq","Geyzer","Bulut"],2,"gx44_6_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan nima tasvirlangan?",["Dengiz sathi","Botiq","Shelf","Cho‘kma"],0,"gx44_6_13"]);
GEO_OCHIQ.push(["Quyidagi 2 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Qir","Botiq","Pasttekislik","Past tog‘"],2,"gx44_6_14"]);
GEO_OCHIQ.push(["Quyidagi 3 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Qir","Botiq","Pasttekislik","Yassi tog‘"],0,"gx44_6_15"]);
GEO_OCHIQ.push(["Quyidagi 4 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Baland tog‘","O‘rtacha tog‘","O‘rtacha baland tog‘","Past tog‘"],3,"gx44_6_15"]);
GEO_OCHIQ.push(["Quyidagi 5 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Baland tog‘","O‘rtacha tog‘","O‘rtacha baland tog‘","Past tog‘"],1,"gx44_6_17"]);
GEO_OCHIQ.push(["Quyidagi 6 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Baland tog‘","O‘rtacha tog‘","O‘rtacha baland tog‘","Past tog‘"],0,"gx44_6_18"]);
GEO_OCHIQ.push(["Quyidagi 7 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Baland tog‘","O‘rtacha tog‘","O‘rtacha baland tog‘","Past tog‘"],2,"gx44_6_18"]);
GEO_OCHIQ.push(["Quyidagi 8 raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["Dengiz sathi","Botiq","Cho‘kma","Shelf"],1,"gx44_6_20"]);
GEO_OCHIQ.push(["Quyida 1 raqami bilan qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],0,"gx44_7_1"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],1,"gx44_7_2"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],3,"gx44_7_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],2,"gx44_7_4"]);
GEO_OCHIQ.push(["Ushbu jadvaldagi so‘roq o‘rniga mos raqamlarni qo‘ying.",["96,5 %","95,6 %","96,6 %","95,5 %"],0,"gx44_7_5"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan nima ko‘rsatilgan?",["Chuqur okean botig‘i","Orol","Suv osti tog‘ tizmasi","Materik yonbag‘ri"],1,"gx44_7_6"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan nima ko‘rsatilgan?",["Chuqur okean botig‘i","Orol","Suv osti tog‘ tizmasi","Materik yonbag‘ri"],2,"gx44_7_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan nima ko‘rsatilgan?",["Chuqur okean botiqlari","Orol","Suv osti tog‘ tizmasi","Materik yonbag‘ri"],3,"gx44_7_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda 4 raqami bilan nima ko‘rsatilgan?",["Okean tubi","Shelf","Chuqur okean botig‘i","Suv osti tog‘ tizmasi"],1,"gx44_7_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda 5 raqami bilan nima ko‘rsatilgan?",["Okean tubi","Shelf","Chuqur okean botig‘i","Suv osti tog‘ tizmasi"],0,"gx44_7_6"]);
GEO_OCHIQ.push(["Quyidagi rasmda 6 raqami bilan nima ko‘rsatilgan?",["Okean botig‘i","Shelf","Chuqur okean botig‘i","Suv osti tog‘ tizmasi"],2,"gx44_7_11"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday geografik asbob ko‘rsatilgan?",["Gigrometr","Flyuger","Anemometr","Exolot"],3,"gx44_7_12"]);
GEO_OCHIQ.push(["Ushbu rasmda daryo vodiysining ko‘ndalang kesimi aks ettirilgan. Rasmlarda ko‘rsatilgan harflardan qaysi biri daryo o‘zanini bildiradi?",["A","B","C","D"],0,"gx44_7_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda “A” harfi bilan daryo havzasining qaysi tarkibiy qismi ko‘rsatilgan?",["Daryo mansabi","Delta","Daryo o‘zani","Daryo manbayi"],1,"gx44_7_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda “D” harfi bilan daryo havzasining qaysi tarkibiy qismi ko‘rsatilgan?",["Daryo mansabi","Daryo manbayi","Delta","Daryo o‘zani"],0,"gx44_7_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda “E” harfi bilan daryo havzasining qaysi tarkibiy qismi ko‘rsatilgan?",["Daryo mansabi","Daryo manbayi","Delta","Daryo o‘zani"],3,"gx44_7_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda “F” harfi bilan daryo havzasining qaysi tarkibiy qismi ko‘rsatilgan?",["Daryo mansabi","Daryo manbayi","Delta","Daryo o‘zani"],1,"gx44_7_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda “B” harfi bilan daryo havzasining qaysi tarkibiy qismi ko‘rsatilgan?",["Irmoq","Suvayirg‘ich","Daryo o‘zani","Daryo havzasi"],1,"gx44_7_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday ko‘l tasvirlangan?",["Oqar ko‘l","Tektonik ko‘l","Oqmas ko‘l","Morena ko‘l"],2,"gx44_7_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday ko‘l tasvirlangan?",["Oqar ko‘l","Tektonik ko‘l","Oqmas ko‘l","Morena ko‘l"],0,"gx44_7_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday geografik asbob tasvirlangan?",["Azimut","Kompas","Metall barometr","Simobli barometr"],2,"gx44_8_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday geografik asbob tasvirlangan?",["Anemometr","Flyuger","Gigrometr","Reyka"],1,"gx44_8_2"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday geografik asbob tasvirlangan?",["Anemometr","Flyuger","Gigrometr","Yog‘in o‘lchagich"],3,"gx44_8_3"]);
GEO_OCHIQ.push(["Quyidagi diagrammada nima tasvirlangan?",["Gidrosferadagi suv tarkibi","Havoning gaz tarkibi","Havoning ifloslanish tarkibi","Okeanlar ulushi"],1,"gx44_8_4"]);
GEO_OCHIQ.push(["Quyidagi rasmda nima tasvirlanganligini aniqlang.",["Mantiyaning tuzilishi","Yadroning tuzilishi","Gidrosferaning tuzilishi","Litosferaning tuzilishi"],3,"gx44_8_5"]);
GEO_OCHIQ.push(["Quyidagi rasmda nima tasvirlanganligini aniqlang.",["Litosfera plitalarining harakat mexanizmi","Litosfera plitalarining uyurmali harakati","Astenosfera qatlamidagi moddalar harakati","Mantiyadagi moddalar harakati"],0,"gx44_8_6"]);
GEO_OCHIQ.push(["Quyidagi rasmda okean tubi ko‘rsatilgan bo‘lib, 1 raqami bilan qanday relyef shakli tasvirlangan?",["Materik yonbag‘ri","Materik etagi","Materik sayozligi","Okean tagi"],2,"gx44_8_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan qanday relyef shakli ko‘rsatilganligini aniqlang.",["Materik yonbag‘ri","Materik etagi","Materik sayozligi","Okean tagi"],0,"gx44_8_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan qanday relyef shakli ko‘rsatilganligini aniqlang.",["Materik yonbag‘ri","Materik etagi","Materik sayozligi","Okean tagi"],1,"gx44_8_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda 4 raqami bilan qanday relyef shakli ko‘rsatilganligini aniqlang.",["O‘rta okean tizmalari","Okean tagi","Chuqur cho‘kmalar","Materik sayozligi"],2,"gx44_8_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 5 raqami bilan qanday relyef shakli ko‘rsatilganligini aniqlang.",["Orollar","O‘rta okean tizmalari","Okean tagi","Materik yonbag‘ri"],0,"gx44_8_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 6 raqami bilan qanday relyef shakli ko‘rsatilganligini aniqlang.",["Orollar","O‘rta okean tizmalari","Okean tagi","Materik etagi"],1,"gx44_8_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda 7 raqami bilan qanday relyef shakli ko‘rsatilganligini aniqlang.",["Orollar","O‘rta okean tizmalari","Okean tagi","Materik etagi"],2,"gx44_8_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday jarayon aks ettirilganligini aniqlang.",["Oy va Quyoshning tortishi","Koriolis kuchi","Atmosfera – okean – quruqlik tizimidagi suvning aylanma harakati","Okean – atmosfera – quruqlik tizimidagi suvning aylanma harakati"],3,"gx44_8_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda tasvirlangan hayvonlar qaysi materik uchun xos?",["Avstraliya","Janubiy Amerika","Yevrosiyo","Afrika"],3,"gx44_8_15"]);
GEO_OCHIQ.push(["Quyidagi rasmda tasvirlangan hayvonlar qaysi materik uchun xos?",["Avstraliya","Janubiy Amerika","Yevrosiyo","Afrika"],0,"gx44_8_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda tasvirlangan hayvonlar qaysi materik uchun xos?",["Shimoliy Amerika","Antarktida","Avstraliya","Janubiy Amerika"],1,"gx44_8_17"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan Piraniya balig‘i qaysi materik uchun xos?",["Shimoliy Amerika","Janubiy Amerika","Yevrosiyo","Afrika"],1,"gx44_8_18"]);
GEO_OCHIQ.push(["Ushbu rasmdagi baliqqa mos to‘g‘ri tarifni toping.",["Daryo odamxo‘ri","Ekvatorial o‘rmonlar zo‘nasida yashaydi","Subekvatorial o‘rmonlar zonasida yashaydi","A va B javoblar to‘g‘ri"],3,"gx44_8_19"]);
GEO_OCHIQ.push(["Ushbu rasmda Chako milliy bog‘ining tabiiy go‘zalligi tasvirlangan bo‘lib, ushbu milliy bog‘ qaysi davlat hududida joylashganligini aniqlang.",["Braziliya","Peru","Argentina","Urugvay"],2,"gx44_8_20"]);
GEO_OCHIQ.push(["Ushbu rasmda Jau milliy bog‘i go‘zalligi tasvirlangan bo‘lib, ushbu milliy bog‘ning qaysi davlat hududida joylashganligini aniqlang.",["Braziliya","Peru","Argentina","Urugvay"],0,"gx44_9_1"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday hayvon tasvirlanganligini aniqlang.",["Tog‘ qo‘yi","O‘rmon bizoni","Qo‘yho‘kiz","Qor echkisi"],2,"gx44_9_2"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvonni asosan qaysi tabiat zonasida uchratish mumkin?",["Tundra va o‘rmon-tundra","Tayga","Arktika cho‘llari","Aralash va keng bargli o‘rmonlar"],0,"gx44_9_3"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon qaysi materik uchun xos?",["Shimoliy Amerika","Janubiy Amerika","Avstraliya","Afrika"],0,"gx44_9_4"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday hayvon tasvirlanganligini aniqlang.",["Qo‘yho‘kiz","O‘rmon bizoni","Yak","Yovvoyi buqa"],2,"gx44_9_6"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Shimoliy Yevropa o‘lkasi ko‘rsatilgan?",["I","II","III","IV"],0,"gx44_9_7"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan O‘rta Yevropa o‘lkasi ko‘rsatilgan?",["I","II","III","IV"],1,"gx44_9_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Janubiy Yevropa o‘lkasi ko‘rsatilgan?",["I","II","III","IV"],2,"gx44_9_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Sharqiy Yevropa o‘lkasi ko‘rsatilgan?",["I","II","III","IV"],3,"gx44_9_10"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan G‘arbiy Sibir o‘lkasi ko‘rsatilgan?",["V","VI","VII","VIII"],0,"gx44_9_11"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Sharqiy Sibir o‘lkasi ko‘rsatilgan?",["V","VI","VII","VIII"],1,"gx44_9_12"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Uzoq Sharq o‘lkasi ko‘rsatilgan?",["V","VI","VII","VIII"],2,"gx44_9_13"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Janubi-g‘arbiy Osiyo o‘lkasi ko‘rsatilgan?",["V","VI","VII","VIII"],3,"gx44_9_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Old Osiyo o‘lkasi ko‘rsatilgan?",["IX","X","XI","XII"],0,"gx44_9_15"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan O‘rta Osiyo o‘lkasi ko‘rsatilgan?",["IX","X","XI","XII"],1,"gx44_9_16"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Markaziy Osiyo o‘lkasi ko‘rsatilgan?",["IX","X","XI","XII"],2,"gx44_9_17"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Sharqiy Osiyo o‘lkasi ko‘rsatilgan?",["IX","X","XI","XII"],3,"gx44_9_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Janubiy Osiyo o‘lkasi ko‘rsatilgan?",["XI","XII","XIII","XIV"],2,"gx44_9_19"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Janubi-sharqiy Osiyo o‘lkasi ko‘rsatilgan?",["XI","XII","XIII","XIV"],3,"gx44_9_20"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi tasvirlangan?",["Alohida joylashgan hovlilar","Turar joylar va boshqa binolar","O‘tga chidamli binolar","O‘tga chidamsiz binolar"],1,"gx44_10_1"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida joylashgan hovlilar","Turar joylar va boshqa binolar","O‘tga chidamli binolar","O‘tga chidamsiz binolar"],0,"gx44_10_2"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida joylashgan hovlilar","Turar joylar va boshqa binolar","O‘tga chidamli binolar","O‘tga chidamsiz binolar"],2,"gx44_10_3"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida joylashgan hovlilar","Turar joylar va boshqa binolar","O‘tga chidamli binolar","O‘tga chidamsiz binolar"],3,"gx44_10_4"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Radiomachtalar va televizion machtalar","Yoqilg‘i omborlari","Elektr stansiyalari","Zavod va fabrikalar"],3,"gx44_10_5"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Radiomachtalar va televizion machtalar","Yoqilg‘i omborlari","Elektr stansiyalari","Zavod va fabrikalar"],1,"gx44_10_6"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Radimachtalar va televizion machtalar","Yoqilg‘i omborlari","Elektr stansiyalari","Zavod va fabrikalar"],2,"gx44_10_7"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Radiomachtalar va televizion machtalar","Yoqilg‘i omborlari","Elektr stansiyalari","Zavod va fabrikalar"],0,"gx44_10_8"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Masjidlar","Mashhur yodgorliklar","Qabristonlar","Minora tipidagi inshootlar"],0,"gx44_10_9"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Masjidlar","Mashhur yodgorliklar","Qabristonlar","Minora tipidagi inshootlar"],3,"gx44_10_10"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Masjidlar","Mashhur yodgorliklar","Qabristonlar","Minora tipidagi inshootlar"],1,"gx44_10_11"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Masjidlar","Mashhur yodgorliklar","Qabristonlar","Minora tipidagi inshootlar"],2,"gx44_10_12"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Mukammallashtirilgan shosse yo‘llar","Tor izli temiryo‘llar","Elektr uzatgich linyalari","Aloqa linyalari"],1,"gx44_10_13"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Mukammallashtirilgan shosse yo‘llar","Tor izli temiryo‘llar","Elektr uzatgich linyalari","Aloqa linyalari"],3,"gx44_10_14"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Mukammallashtirilgan shosse yo‘llar","Tor izli temiryo‘llar","Elektr uzatgich linyalari","Aloqa linyalari"],2,"gx44_10_15"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Mukammallashtirilgan shosse yo‘llar","Tor izli temiryo‘llar","Elektr uzatgich linyalari","Aloqa linyalari"],0,"gx44_10_16"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Tuproq (qishloq) yo‘llar","Yaxshilangan tuproq yo‘llar, trubalar","Mukammallashtirilgan shosse yo‘llar","Shosse"],1,"gx44_10_17"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Tuproq (qishloq) yo‘llar","Yaxshilangan tuproq yo‘llar, trubalar","Mukammallashtirilgan shosse yo‘llar","Shosse"],0,"gx44_10_18"]);
GEO_OCHIQ.push(["Quyidagi topografik shartli belgidagi (14) raqami qanday ma’noga ega?",["To‘shamali qismining kengligi","To‘shamasining qalinligi","To‘shamasining materiali","Umumiy kengligi"],3,"gx44_10_19"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Ignabargli o‘rmonlar","Bargli o‘rmonlar","Dashtlar","Aralash o‘rmonlar"],3,"gx44_10_20"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Ignabargli o‘rmonlar","Bargli o‘rmonlar","Dashtlar","Aralash o‘rmonlar"],0,"gx44_11_1"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Ignabargli o‘rmonlar","Bargli o‘rmonlar","Dashtlar","Aralash o‘rmonlar"],1,"gx44_11_2"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Siyrak o‘rmonlar","Kesilgan o‘rmonlar","Yongan va qurib qolgan o‘rmonlar","Shamol sindirgan daraxtlar"],3,"gx44_11_3"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Siyrak o‘rmonlar","Kesilgan o‘rmonlar","Yongan va qurib qolgan o‘rmonlar","Shamol sindirgan daraxtlar"],0,"gx44_11_4"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Siyrak o‘rmonlar","Kesilgan o‘rmonlar","Yongan va qurib qolgan o‘rmonlar","Shamol sindirgan daraxtlar"],1,"gx44_11_5"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Siyrak o‘rmonlar","Kesilgan o‘rmonlar","Yongan va qurib qolgan o‘rmonlar","Shamol sindirgan daraxtlar"],2,"gx44_11_6"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida butalar","Chakalakzorlar","Daraxtlari kesilib ochilgan o‘rmon yo‘li","O‘tloqlar"],2,"gx44_11_7"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida butalar","Chakalakzorlar","Daraxtlari kesilib ochilgan o‘rmon yo‘li","O‘tloqlar"],0,"gx44_11_8"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida butalar","Chakalakzorlar","Daraxtlari kesilib ochilgan o‘rmon yo‘li","O‘tloqlar"],1,"gx44_11_9"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["Alohida butalar","Chakalakzorlar","Daraxtlari kesilib ochilgan o‘rmon yo‘li","O‘tloqlar"],3,"gx44_11_10"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["O‘tloqlar","Mevazorlar","Qamishzorlar","Chakalakzorlar"],2,"gx44_11_11"]);
GEO_OCHIQ.push(["Quyida qanday topografik shartli belgi ko‘rsatilgan?",["O‘tloqlar","Mevazorlar","Qamishzorlar","Chakalakzorlar"],1,"gx44_11_12"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan tosh ustun qaysi milliy bog‘da joylashgan?",["Zomin","Hisor","Kitob","Zarafshon"],0,"gx44_11_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda keltirilgan a va b da nimalar tasvirlangan?",["a – siklon va b – antisiklonda havo bosimi va shamollarning yo‘nalishi","a – antisiklon va b – siklonda havo bosimi hamda shamollarning yo‘nalishi","a – sovuq front va b – iliq frontda havo bosimi hamda shamollarning yo‘nalishi","a – iliq front va b – sovuq frontda havo bosimi hamda shamollarning yo‘nalishi"],0,"gx44_11_14"]);
GEO_OCHIQ.push(["Quyidagi chizmada qaysi shahardagi yog‘inlarning oylar bo‘yicha taqsimlanishi va havo haroratining farqlanishi ko‘rsatilgan?",["Mashhad","Dushanbe","G‘ulja","Ostona"],0,"gx44_11_15"]);
GEO_OCHIQ.push(["Quyidagi chizmada qaysi shahardagi yog‘inlarning oylar bo‘yicha taqsimlanishi ko‘rsatilgan?",["Mashhad","Dushanbe","G‘ulja","Ostona"],1,"gx44_11_16"]);
GEO_OCHIQ.push(["Quyidagi chizmada qaysi shahardagi yog‘inlarning oylar bo‘yicha taqsimlanishi ko‘rsatilgan?",["Mashhad","Dushanbe","G‘ulja","Ostona"],2,"gx44_11_17"]);
GEO_OCHIQ.push(["Quyidagi chizmada qaysi shahardagi yog‘inlarning oylar bo‘yicha taqsimlanishi ko‘rsatilgan?",["G‘azali","G‘ulja","Dushanbe","Ostona"],3,"gx44_11_18"]);
GEO_OCHIQ.push(["Quyidagi chizmada qaysi shahardagi yog‘inlarning oylar bo‘yicha taqsimlanishi ko‘rsatilgan?",["G‘azali","G‘ulja","Dushanbe","Ostona"],0,"gx44_11_19"]);
GEO_OCHIQ.push(["Och bo‘z tuproqning kesmasida yuvilib turadigan qavat qaysi harf bilan ko‘rsatilgan?",["D","B","A 2","A 1"],2,"gx44_11_20"]);
GEO_OCHIQ.push(["Och bo‘z tuproqning kesmasida chirindi yig‘iladigan qavat qaysi harf bilan ko‘rsatilgan?",["D","B","A 2","A 1"],3,"gx44_12_1"]);
GEO_OCHIQ.push(["Och bo‘z tuproqning kesmasida moddalar to‘planuvchi qavat qaysi harf bilan ko‘rsatilgan?",["D","B","A 2","A 1"],1,"gx44_12_2"]);
GEO_OCHIQ.push(["Och bo‘z tuproqning kesmasida tuproq ona jinsi – lyoss qaysi harf bilan ko‘rsatilgan?",["D","B","A 2","A 1"],0,"gx44_12_3"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi o‘simlik turi tasvirlanganligini aniqlang.",["Yantoq","Shuvoq","Saksovul","Burgan"],2,"gx44_12_4"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini to‘g‘ri toping.",["Morxo‘r","Jayron","Tyanshan qo‘yi","Oqquyruq"],0,"gx44_12_5"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini to‘g‘ri toping.",["Morxo‘r","Jayron","Tyanshan qo‘yi","Oqquyruq"],1,"gx44_12_6"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini to‘g‘ri toping.",["Morxo‘r","Jayron","Tyanshan qo‘yi","Oqquyruq"],2,"gx44_12_7"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan qush nomini to‘g‘ri toping.",["Oddiy sor","Oqbosh qumoy","Kaklik","O‘rdak"],0,"gx44_12_8"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan qush nomini to‘g‘ri toping.",["Oddiy sor","Oqbosh qumoy","Kaklik","O‘rdak"],1,"gx44_12_9"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan qush nomini to‘g‘ri toping.",["Oddiy sor","Oqbosh qumoy","Kaklik","O‘rdak"],2,"gx44_12_10"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan qush nomini to‘g‘ri toping.",["Oqbosh qumoy","Oq laylak","O‘rdak","Oqqush"],3,"gx44_12_11"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan qush nomini to‘g‘ri toping.",["Qarg‘a","Kaklik","Oddiy sor","Qora laylak"],3,"gx44_12_12"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan qush nomini tog‘ri toping.",["Kaklik","Oqbosh qumoy","G‘oz","O‘rdak"],3,"gx44_12_13"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Qo‘ng‘ir ayiq","Tyanshan ayig‘i","Hisor ayig‘i","Tibet ayig‘i"],1,"gx44_12_14"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Yo‘l-yo‘l sirtlon","Qoraquloq","Gepard","Leopard"],0,"gx44_12_15"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Qor qoploni","Leopard","Gepard","Qoraquloq"],0,"gx44_12_16"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Qor qoploni","Leopard","Gepard","Qoraquloq"],3,"gx44_12_17"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Qor qoploni","Leopard","Gepard","Qoraquloq"],1,"gx44_12_18"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Qor qoploni","Leopard","Gepard","Qoraquloq"],2,"gx44_12_19"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Ingichka barmoqli yumronqoziq","Qo‘shoyoq","Tipratikan","Ko‘rsichqon"],2,"gx44_12_20"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Ingichka barmoqli yumronqoziq","Qo‘shoyoq","Tipratikan","Ko‘rsichqon"],0,"gx44_13_1"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Turkman ko‘lvoriloni","O‘rta Osiyo ko‘zoynakli iloni","Kapcha ilon","Bo‘g‘ma ilon"],0,"gx44_13_2"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Turkman ko‘lvoriloni","O‘rta Osiyo ko‘zoynakli iloni","Kapcha ilon","Bo‘g‘ma ilon"],1,"gx44_13_3"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan hayvon nomini aniqlang.",["Gekkan kaltakesagi","Echkemar","Falanga","Kaltakesak"],1,"gx44_13_4"]);
GEO_OCHIQ.push(["Quyidagi diagrammada O‘zbekistonda ishlatiladigan suvning taqsimlanishi aks etgan bo‘lib, unda xo‘jalik – ichimliklarining ulushi necha foizni tashkil etadi?",["2,2 %","1,5 %","5,2 %","6,2 %"],3,"gx44_13_5"]);
GEO_OCHIQ.push(["Quyidagi diagrammada O‘zbekistonda ishlatiladigan suvning taqsimlanishi aks etgan bo‘lib, unda sanoatning ulushi necha foizni tashkil etadi?",["2,2 %","1,5 %","5,2 %","6,2 %"],0,"gx44_13_6"]);
GEO_OCHIQ.push(["Quyidagi diagrammada O‘zbekistonda ishlatiladigan suvning taqsimlanishi aks etgan bo‘lib, unda baliq xo‘jaligining ulushi necha foizni tashkil etadi?",["2,2 %","1,5 %","5,2 %","6,2 %"],1,"gx44_13_6"]);
GEO_OCHIQ.push(["Quyidagi diagrammada O‘zbekistonda ishlatiladigan suvning taqsimlanishi aks etgan bo‘lib, ushbu suvning necha foizi sug‘orish uchun sarflanadi?",["80,1 %","90,3 %","90,5 %","90,1 %"],3,"gx44_13_8"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda suvni ifloslovchi asosiy tarmoqlar aks ettirilgan bo‘lib, unda kommunal xo‘jalik suvlarining ulushi necha foizni tashkil etadi?",["3 %","5 %","4 %","6 %"],2,"gx44_13_9"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda suvni ifloslovchi asosiy tarmoqlar aks ettirilgan bo‘lib, unda sanoatning ulushi necha foizni tashkil etadi?",["16 %","17 %","18 %","19 %"],2,"gx44_13_9"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda suvni ifloslovchi asosiy tarmoqlar aks etgan bo‘lib, unda sug‘oriladigan yerlar ulushi necha foizni tashkil etadi?",["68 %","78 %","88 %","58 %"],1,"gx44_13_11"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda atmosferaga chiqariladigan zararli birikmalar hissasi aks ettirilgan bo‘lib, unda oltingugurt qo‘shoksidining ulushi necha foizga teng?",["16 %","17 %","18 %","19 %"],0,"gx44_13_12"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda atmosferaga chiqariladigan zararli birikmalar hissasi aks ettirilgan bo‘lib, unda uglevodorodning ulushi necha foizni tashkil etadi?",["17,9 %","18,9 %","16,9 %","15,9 %"],0,"gx44_13_13"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda atmosferaga chiqariladigan zararli birikmalar hissasi aks ettirilgan bo‘lib, unda azot oksidlarining hissasi necha foizga teng?",["9,8 %","7,9 %","8,9 %","6,8 %"],2,"gx44_13_14"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda atmosferaga chiqariladigan zararli birikmalar hissasi aks ettirilgan bo‘lib, unda qattiq birikmalarning ulushi necha foizga teng?",["4 %","7 %","5 %","6 %"],3,"gx44_13_15"]);
GEO_OCHIQ.push(["Ushbu diagrammada O‘zbekistonda atmosferaga chiqariladigan zararli birikmalar hissasi aks ettirilgan bo‘lib, unda uglerod oksidining ulushi necha foizga teng?",["41 %","61 %","71 %","51 %"],3,"gx44_13_16"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi ask ettirilganligini aniqlang.",["Gips","Marmar","Granit","Ohaktosh"],3,"gx44_13_17"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Vermikulit","Granit","Gips","Ohaktosh"],2,"gx44_13_18"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Keramzit xomashyosi","Qum-shag‘al materiallari","G‘isht-cherepitsa xomashyosi","Sement xomashyosi"],0,"gx44_13_19"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Granit","Gips","Ohaktosh","Marmar"],3,"gx44_13_20"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["G‘isht-cherepitsa xomashyosi","Sement xomashyosi","Qum-shag‘al materiallari","Keramzit xomashyosi"],2,"gx44_14_1"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Qurilish toshi","Marmar","Granit","Vermikulit"],2,"gx44_14_2"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Keramzit xomashyosi","G‘isht-cherepitsa xomashyosi","Qum-shag‘al materiallari","Sement xomashyosi"],1,"gx44_14_3"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Vermikulit","Sement xomashyosi","Granit","Qurilish toshi"],3,"gx44_14_4"]);
GEO_OCHIQ.push(["Quyida qanday shartli belgi aks ettirilganligini aniqlang.",["Qurilish toshi","G‘isht-cherepitsa xomashyosi","Vermikulit","Sement xomashyosi"],3,"gx44_14_5"]);
GEO_OCHIQ.push(["Quyidagi rasmda tug‘ilish 768,3 kishiga, o‘lim esa 154,7 kishiga teng bo‘lsa, so‘roq o‘rnidagi to‘g‘ri javobni aniqlang.",["611,6","612,5","613,6","615,9"],2,"gx44_14_6"]);
GEO_OCHIQ.push(["Ushbu rasmda aholining o‘lim darajasi 154,7 kishiga, tabiiy o‘sish esa 613,6 kishiga teng bo‘lsa tug‘ilish darajasini aniqlang.",["668,3 kishi","768,3 kishi","868,3 kishi","758,3 kishi"],1,"gx44_14_7"]);
GEO_OCHIQ.push(["Ushbu rasmda aholining tug‘ilish darajasi 768,3 kishiga, tabiiy o‘sish darajasi esa 613,6 kishiga teng bo‘lsa, aholining o‘lim darajasini aniqlang.",["154,7 kishi","144,7 kishi","164,7 kishi","158,7 kishi"],0,"gx44_14_8"]);
GEO_OCHIQ.push(["Ushbu rasmda aholi immigratsiyasi 2,8 kishiga, emmigratsiya esa 19 kishiga teng bo‘lsa, aholining mexanik ko‘payishi necha kishiga teng ekanligini aniqlang.",["– 16,2 kishi","+ 16,2 kishi","– 15,4 kishi","+ 15,4 kishi"],0,"gx44_14_9"]);
GEO_OCHIQ.push(["Quyidagi chizmada O‘zbekiston aholisining umr davomiyligi aks ettirilgan bo‘lib, “X” harfi bilan 2016-yildagi ayollarning o‘rtacha umr davomiyligi necha yoshga teng ekanligini aniqlang.",["76,2","73,8","71,4","74,1"],0,"gx44_14_10"]);
GEO_OCHIQ.push(["Quyidagi chizmada O‘zbekiston aholisining umr davomiyligi aks ettirilgan bo‘lib, “Y” harfi bilan 2016-yil aholining o‘rtacha umr davomiyligi necha yoshga teng ekanligini aniqlang.",["76,2","73,8","71,4","74,1"],1,"gx44_14_11"]);
GEO_OCHIQ.push(["Quyidagi chizmada O‘zbekiston aholisining umr davomiyligi aks ettirilgan bo‘lib, “Z” harfi bilan 2016-yildagi erkaklarning o‘rtacha umr davomiyligi necha yoshga teng ekanligini aniqlang.",["76,2","73,8","71,4","74,1"],2,"gx44_14_12"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi sanoatda mehnat bilan band?",["27,3 %","9,5 %","11,0 %","13,5 %"],3,"gx44_14_13"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi qishloq xo‘jaligida band?",["13,5 %","27,3 %","9,5 %","4,8 %"],1,"gx44_14_14"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi qurilishda band?",["13,5 %","27,3 %","9,5 %","4,8 %"],2,"gx44_14_15"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi transportda band?",["13,5 %","27,3 %","9,5 %","4,8 %"],3,"gx44_14_16"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi savdo sohasida band?",["4,5 %","11,0 %","8,2 %","4,8 %"],1,"gx44_14_17"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi sog‘liqni saqlash sohasida faoliyat olib boradi?",["4,5 %","11,0 %","8,2 %","4,8 %"],0,"gx44_14_18"]);
GEO_OCHIQ.push(["O‘zbekistonda mehnatda band aholining necha foizi ta’lim sohasida faoliyat olib boradi?",["4,5 %","11,0 %","8,2 %","4,8 %"],2,"gx44_14_13"]);
GEO_OCHIQ.push(["Quyidagi diagrammada O‘zbekiston aholisining nechanchi yildagi milliy tarkibi aks ettirilganligini aniqlang.",["1989-yil","2018-yil","1979-yil","2008-yil"],0,"gx44_14_20"]);
GEO_OCHIQ.push(["Quyidagi diagrammada O‘zbekiston aholisining nechanchi yildagi milliy tarkibi aks ettirilganligini aniqlang.",["1989-yil","2018-yil","1979-yil","2008-yil"],1,"gx44_15_1"]);
GEO_OCHIQ.push(["Quyidagi diagrammada nechanchi yildagi O‘zbekiston aholisining qishloq va shahar aholi salmog‘i aks ettirilgan?",["1989-yil","2019-yil","1979-yil","2009-yil"],0,"gx44_15_2"]);
GEO_OCHIQ.push(["Quyidagi diagrammada nechanchi yildagi O‘zbekiston aholisining qishloq va shahar aholisi salmog‘i aks ettirilganligini aniqlang.",["1989-yil","2019-yil","1979-yil","2009-yil"],1,"gx44_15_3"]);
GEO_OCHIQ.push(["Ushbu rasmda kichik biznesning yalpi mahsulotdagi ulushi aks ettirilgan bo‘lib, X harfi o‘rnidagi to‘g‘ri javobni aniqlang.",["31,0 %","38,2 %","52,5 %","54,5 %"],0,"gx44_15_4"]);
GEO_OCHIQ.push(["Ushbu rasmda kichik biznesning yalpi mahsulotdagi ulushi aks ettirilgan bo‘lib, “Y” harfi o‘rnidagi to‘g‘ri javobni aniqlang.",["31,0 %","38,2 %","52,5 %","54,5 %"],1,"gx44_15_5"]);
GEO_OCHIQ.push(["Ushbu rasmda kichik biznesning yalpi mahsulotdagi ulushi aks ettirilgan bo‘lib, “Z” harfi o‘rnidagi to‘g‘ri javobni aniqlang.",["31,0 %","38,2 %","52,5 %","54,5 %"],2,"gx44_15_6"]);
GEO_OCHIQ.push(["Ushbu rasmda kichik biznesning yalpi mahsulotdagi ulushi aks ettirilgan bo‘lib, “M” harfi o‘rnidagi to‘g‘ri javobni aniqlang.",["31,0 %","38,2 %","52,5 %","54,5 %"],3,"gx44_15_7"]);
GEO_OCHIQ.push(["Ushbu rasmda kichik biznesning yalpi mahsulotdagi ulushi aks ettirilgan bo‘lib, “N” harfi o‘rnidagi to‘g‘ri javobni aniqlang.",["55,9 %","56,9 %","54,9 %","53,9 %"],2,"gx44_15_7"]);
GEO_OCHIQ.push(["Ushbu rasmda nechanchi yildagi sanoat tarmoqlarining mahsulot ishlab chiqarish tarkibi aks ettirilgan?",["2007-yil","2017-yil","2008-yil","2018-yil"],1,"gx44_15_9"]);
GEO_OCHIQ.push(["Mamlakatimizda 1970-yilda qancha elektr energiyasi ishlab chiqarilgan?",["17,3 mlrd kW/h","33,9 mlrd kW/h","18,3 mlrd kW/h","20,3 mlrd kW/h"],2,"gx44_15_10"]);
GEO_OCHIQ.push(["Mamlakatimizda 1980-yilda qancha elektr energiyasi ishlab chiqarilgan?",["17,3 mlrd kW/h","33,9 mlrd kW/h","18,3 mlrd kW/h","20,3 mlrd kW/h"],1,"gx44_15_11"]);
GEO_OCHIQ.push(["Mamlakatimizda 2017-yilda qancha elektr energiyasi ishlab chiqarilgan?",["50,1 mlrd kW/h","70,1 mlrd kW/h","60,1 mlrd kW/h","80,1 mlrd kW/h"],2,"gx44_15_11"]);
GEO_OCHIQ.push(["Ushbu rasmda alyuminiy ishlab chiqarish jarayoni aks ettirilgan. Ushbu jarayondagi uzluksizlikni to‘ldiring.",["Duraluminiy olish","Magniy olish","Kalsiy olish","Melxior ishlab chiqarish"],0,"gx44_15_13"]);
GEO_OCHIQ.push(["Ushbu xaritada nima aks ettirilgan?",["O‘zbekiston don mahsulotlari eksporti","O‘zbekiston paxta mahsulotlari eksporti","O‘zbekiston oziq-ovqat mahsulotlari eksporti","O‘zbekiston avtomobillari eksporti"],3,"gx44_15_14"]);
GEO_OCHIQ.push(["Ushbu rasmda 1 raqami bilan nechanchi yildagi qishloq xo‘jaligi ekin maydonlari tarkibi ko‘rsatilgan?",["1990-yil","1980-yil","1970-yil","1960-yil"],2,"gx44_15_15"]);
GEO_OCHIQ.push(["Ushbu rasmda 2 raqami bilan nechanchi yildagi qishloq xo‘jaligi ekin maydonlari tarkibi ko‘rsatilgan?",["2008-yil","2009-yil","2007-yil","2006-yil"],0,"gx44_15_16"]);
GEO_OCHIQ.push(["Ushbu rasmda 3 raqami bilan nechanchi yildagi qishloq xo‘jaligi ekin maydonlari tarkibi ko‘rsatilgan?",["2016-yil","2017-yil","2018-yil","2019-yil"],1,"gx44_15_17"]);
GEO_OCHIQ.push(["Ushbu rasmdagi so‘roq o‘rnidagi to‘g‘ri javobni aniqlang.",["17,5 mlrd t/km","27,5 mlrd t/km","22,8 mlrd t/km","15,9 mlrd t/km"],1,"gx44_15_18"]);
GEO_OCHIQ.push(["Ushbu rasmdagi so‘roq o‘rnidagi to‘g‘ri javobni aniqlang.",["23,9 mlrd t/km","33,0 mlrd t/km","17,5 mlrd t/km","22,9 mlrd t/km"],3,"gx44_15_19"]);
GEO_OCHIQ.push(["Ushbu rasmdagi so‘roq o‘rnidagi to‘g‘ri javobni aniqlang.",["33,0 mlrd t/km","23,0 mlrd t/km","35,8 mlrd t/km","28,9 mlrd t/km"],0,"gx44_15_20"]);
GEO_OCHIQ.push(["“A” harfi o‘rniga qaysi xizmat sohasi mos kelishini aniqlang.",["Sog‘liqni saqlash xizmati","Axborot xizmati","Reklama xizmati","Boshqa xizmatlar"],0,"gx44_16_1"]);
GEO_OCHIQ.push(["Rasmdagi teleminoraning balandligini aniqlang.",["365 metr","375 metr","385 metr","345 metr"],1,"gx44_16_2"]);
GEO_OCHIQ.push(["Toshkent viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["9,1 %","7,1 %","15,5 %","9,4 %"],0,"gx44_16_3"]);
GEO_OCHIQ.push(["Samarqand viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["6,8 %","6,6 %","7,1 %","5,7 %"],2,"gx44_16_4"]);
GEO_OCHIQ.push(["Qashqadaryo viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["6,6 %","7,1 %","5,7 %","6,8 %"],3,"gx44_16_3"]);
GEO_OCHIQ.push(["Farg‘ona viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["6,6 %","7,1 %","5,7 %","6,8 %"],0,"gx44_16_4"]);
GEO_OCHIQ.push(["Andijon viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["6,6 %","7,1 %","5,7 %","6,8 %"],2,"gx44_16_4"]);
GEO_OCHIQ.push(["Navoiy viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["4,8 %","4,2 %","3,2 %","4,9 %"],3,"gx44_16_3"]);
GEO_OCHIQ.push(["Buxoro viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["2,0 %","2,3 %","4,8 %","3,2 %"],2,"gx44_16_4"]);
GEO_OCHIQ.push(["Surxondaryo viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["3,2 %","4,2 %","2,3 %","5,7 %"],1,"gx44_16_4"]);
GEO_OCHIQ.push(["Namangan viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["4,2 %","6,6 %","6,8 %","9,1 %"],0,"gx44_16_3"]);
GEO_OCHIQ.push(["Qoraqalpog‘iston Respublikasining YAIMdagi ulushi necha foizni tashkil etadi?",["3,2 %","2,3 %","4,2 %","2,4 %"],0,"gx44_16_12"]);
GEO_OCHIQ.push(["Xorazm viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["3,2 %","2,3 %","2,0 %","3,5 %"],0,"gx44_16_4"]);
GEO_OCHIQ.push(["Jizzax viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["3,2 %","2,3 %","2,0 %","3,5 %"],1,"gx44_16_3"]);
GEO_OCHIQ.push(["Sirdaryo viloyatining YAIMdagi ulushi necha foizni tashkil etadi?",["3,2 %","2,3 %","2,0 %","3,5 %"],2,"gx44_16_4"]);
GEO_OCHIQ.push(["Toshkent shahrining YAIMdagi ulushi necha foizni tashkil etadi?",["14,5 %","9,1 %","15,5 %","20,0 %"],2,"gx44_16_4"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan Imom al- Buxoriy majmuasi qaysi viloyatda joylashganligini aniqlang.",["Buxoro viloyati","Qashqadaryo viloyati","Farg‘ona viloyati","Samarqand viloyati"],3,"gx44_16_17"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlatlarni bog‘lab turuvchi ko‘prik tasvirlangan?",["O‘zbekiston – Tojikiston","O‘zbekiston – Qozog‘iston","O‘zbekiston – Qirg‘iziston","O‘zbekiston – Afg‘oniston"],3,"gx44_16_18"]);
GEO_OCHIQ.push(["Quyidagi diagrammada Qoraqalpog‘iston Respublikasi aholisining nechanchi yildagi milliy tarkibi aks ettirilgan?",["2008-yil","2018-yil","2007-yil","2017-yil"],1,"gx44_16_19"]);
GEO_OCHIQ.push(["Rasmda qaysi shahar ko‘rsatilgan?",["Urganch","Buxoro","Xiva","Shahrisabz"],2,"gx44_16_20"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs qaysi davlat qirolichasi hisoblanadi?",["Buyuk Britaniya","Daniya","Norvegiya","Irlandiya"],1,"gx44_17_1"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs qaysi davlat qiroli hisoblanadi?",["Gana","Lesoto","Ummon","Zambiya"],1,"gx44_17_2"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs qaysi davlat sultoni hisoblanadi?",["BAA","Qatar","Ummon","Yaman"],2,"gx44_17_3"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Mongoloid","Negroid","Yevropeoid","Avstroloid"],2,"gx44_17_4"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Mongoloid","Negroid","Yevropeoid","Avstroloid"],0,"gx44_17_5"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Mongoloid","Negroid","Yevropeoid","Avstroloid"],1,"gx44_17_6"]);
GEO_OCHIQ.push(["Jahon elektr energetika tizimida IESlarning ulushi necha foizni tashkil etadi?",["54 %","71 %","80 %","64 %"],3,"gx44_17_7"]);
GEO_OCHIQ.push(["Jahon elektr energetika tizimida AESlarning ulushi necha foizni tashkil etadi?",["13 %","14 %","15 %","16 %"],3,"gx44_17_8"]);
GEO_OCHIQ.push(["Jahon elektr energetika tizimida GESlarning ulushi necha foizni tashkil etadi?",["19 %","18 %","17 %","16 %"],0,"gx44_17_8"]);
GEO_OCHIQ.push(["Jahon elektr energetika tizimida noan’anaviy energiyaning ulushi necha foizni tashkil etadi?",["2 %","1 %","3 %","5 %"],1,"gx44_17_8"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Daniya","Finlyandiya","Germaniya","Italiya"],2,"gx44_17_11"]);
GEO_OCHIQ.push(["Ushbu xaritada qaysi davlat relyefi ko‘rsatilgan?",["Polsha","Lixtenshteyn","Fransiya","Germaniya"],3,"gx44_17_12"]);
GEO_OCHIQ.push(["Quyida qaysi davlat bayrog‘i aks ettirilgan?",["Norvegiya","Buyuk Britaniya","Islandiya","Shvetsiya"],1,"gx44_17_13"]);
GEO_OCHIQ.push(["Xaritada qizil rang bilan qaysi hudud ko‘rsatilgan?",["Angliya","Uels","Shotlandiya","Shimoliy Irlandiya"],0,"gx44_17_14"]);
GEO_OCHIQ.push(["Xaritada sariq rang bilan qaysi hudud ko‘rsatilgan?",["Angliya","Uels","Shotlandiya","Shimoliy Irlandiya"],1,"gx44_17_15"]);
GEO_OCHIQ.push(["Xaritada moviy rang bilan qaysi hudud ko‘rsatilgan?",["Angliya","Uels","Shotlandiya","Shimoliy Irlandiya"],2,"gx44_17_16"]);
GEO_OCHIQ.push(["Xaritada yashil rang bilan qaysi hudud ko‘rsatilgan?",["Angliya","Uels","Shotlandiya","Shimoliy Irlandiya"],3,"gx44_17_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Fransiya","Italiya","Shvetsiya","Rossiya"],0,"gx44_17_18"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Fransiya","Italiya","Shvetsiya","Rossiya"],1,"gx44_17_19"]);
GEO_OCHIQ.push(["Ushbu rasmda Stromboli vulqoni tasvirlangan bo‘lib, ushbu vulqonning qaysi davlatda joylashganligini aniqlang.",["Fransiya","Italiya","Ispaniya","Gretsiya"],1,"gx44_17_20"]);
GEO_OCHIQ.push(["Ushbu rasmdagi obida qaysi shaharda joylashganligini aniqlang.",["Afina","Parij","Milan","Rim"],3,"gx44_18_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Fransiya","Italiya","Shvetsiya","Rossiya"],3,"gx44_18_2"]);
GEO_OCHIQ.push(["Ushbu rasmdagi cherkov qaysi shaharda joylashgan?",["Sankt-Peterburg","Moskva","Astraxan","Grozniy"],1,"gx44_18_3"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i tasvirlangan?",["Qirg‘iziston","Tojikiston","Qozog‘iston","Turkmaniston"],2,"gx44_18_4"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Qirg‘iziston","Tojikiston","Qozog‘iston","Turkmaniston"],2,"gx44_18_5"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i tasvirlangan?",["Qirg‘iziston","Tojikiston","Qozog‘iston","Turkmaniston"],0,"gx44_18_6"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i tasvirlangan?",["Qirg‘iziston","Tojikiston","Qozog‘iston","Turkmaniston"],3,"gx44_18_7"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i tasvirlangan?",["Qirg‘iziston","Tojikiston","Qozog‘iston","Turkmaniston"],1,"gx44_18_8"]);
GEO_OCHIQ.push(["Ushbu rasmdagi obida qaysi davlatda joylashganligini aniqlang.",["Qirg‘iziston","Tojikiston","Qozog‘iston","Turkmaniston"],1,"gx44_18_9"]);
GEO_OCHIQ.push(["Ushbu bayroq qaysi davlatga tegishli ekanligini aniqlang.",["Turkiya","Xitoy","Pokiston","Nepal"],0,"gx44_18_10"]);
GEO_OCHIQ.push(["Ushbu rasmdagi obida qaysi davlat hududida joylashganligini aniqlang.",["Butan","Nepal","Turkiya","Pokiston"],2,"gx44_18_11"]);
GEO_OCHIQ.push(["Ushbu rasmdagi obida qaysi davlat hududida joylashganligini aniqlang.",["Butan","Nepal","Turkiya","Pokiston"],2,"gx44_18_12"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Eron","Tojikiston","Ozarbayjon","Armaniston"],0,"gx44_18_13"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Pokiston","Bangladesh","Butan","Afg‘oniston"],3,"gx44_18_14"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Pokiston","Bangladesh","Butan","Afg‘oniston"],0,"gx44_18_15"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilganligini aniqlang.",["Turkiya","Xitoy","Shri-Lanka","Butan"],1,"gx44_18_16"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Yaponiya","Koreya Respublikasi","Filippin","Indoneziya"],1,"gx44_18_17"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Yaponiya","Koreya Respublikasi","Filippin","Indoneziya"],0,"gx44_18_18"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Shri-Lanka","Bangladesh","Nepal","Hindiston"],3,"gx44_18_19"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Filippin","Maldiv","Indoneziya","Sharqiy Timor"],2,"gx44_18_20"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["AQSH","Malayziya","Fiji","Tonga"],1,"gx44_19_1"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Singapur","Maldiv","Fiji","Tonga"],0,"gx44_19_2"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["KDR","MAR","JAR","BAA"],2,"gx44_19_3"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Nigeriya","Niger","Zambiya","Mavritaniya"],0,"gx44_19_4"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Jazoir","Liviya","Suriya","Misr"],3,"gx44_19_5"]);
GEO_OCHIQ.push(["Ushbu rasmdagi tarixiy obida qaysi davlat hududida joylashganligini aniqlang.",["Jazoir","Liviya","Suriya","Misr"],3,"gx44_19_6"]);
GEO_OCHIQ.push(["Ushbu rasmdagi bayroq qaysi davlatga tegishli ekanligini aniqlang.",["Yangi Zellandiya","Avstraliya","Tonga","Fiji"],1,"gx44_19_7"]);
GEO_OCHIQ.push(["Rasmdagi shaharni aniqlang.",["Kanberra","Monreal","Sidney","Gongkong"],2,"gx44_19_8"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["AQSH","Malayziya","Buyuk Britaniya","Norvegiya"],0,"gx44_19_9"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlat bayrog‘i aks ettirilgan?",["Avstraliya","Argentina","Kanada","Kuba"],2,"gx44_19_10"]);
GEO_OCHIQ.push(["Ushbu minora qaysi shaharda joylashgan?",["Monreal","Toronto","Vankuver","Kvebek"],1,"gx44_19_11"]);
GEO_OCHIQ.push(["Ushbu bayroq qaysi davlatga tegishli ekanligini aniqlang.",["Portugaliya","Chili","Ekvador","Braziliya"],3,"gx44_19_12"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlatning kosmik surati aks ettirilgan?",["O‘zbekiston","Tojikiston","Qirg‘iziston","Turkmaniston"],3,"gx44_19_13"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi davlatning kosmik surati aks ettirilgan?",["O‘zbekiston","Tojikiston","Qirg‘iziston","Turkmaniston"],1,"gx44_19_14"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Eratosfen","Gomer","Ptolemey","Aristotel"],2,"gx44_19_15"]);
GEO_OCHIQ.push(["Rasmdagi shaxs kim ekanligini aniqlang.",["Al-Xorazmiy","Nosir Xisrav","Ibn Battuta","Al-Farg‘oniy"],1,"gx44_19_16"]);
GEO_OCHIQ.push(["Rasmdagi shaxs kim ekanligini aniqlang.",["Al-Xorazmiy","Nosir Xisrav","Ibn Sino","Al-Farg‘oniy"],0,"gx44_19_17"]);
GEO_OCHIQ.push(["Rasmdagi shaxs kim ekanligini aniqlang.",["I.Y.Oshev","Zokirov","Dolimov","Hasanov"],3,"gx44_19_18"]);
GEO_OCHIQ.push(["Rasmdagi shaxs kim ekanligini aniqlang.",["A.Vegener","A.Moxorovichich","R.Amundsen","F.Bellinsgauzen"],1,"gx44_19_19"]);
GEO_OCHIQ.push(["Rasmdagi shaxs kim ekanligini aniqlang.",["A.Vegener","A.Moxorovichich","R.Amundsen","F.Bellinsgauzen"],0,"gx44_19_20"]);
GEO_OCHIQ.push(["Ushbu rasmda Yerning necha mln yil avvalgi holati aks ettirilgan?",["200 mln","250 mln","300 mln","350 mln"],1,"gx44_20_1"]);
GEO_OCHIQ.push(["Ushbu rasmda Yerning necha mln yil avvalgi holati aks ettirilgan?",["250 mln","200 mln","150 mln","100 mln"],2,"gx44_20_2"]);
GEO_OCHIQ.push(["Ushbu rasmda Yerning necha mln yil avvalgi holati aks ettirilgan?",["90 mln","80 mln","70 mln","60 mln"],3,"gx44_20_3"]);
GEO_OCHIQ.push(["Ushbu rasmda Yerning necha mln yil avvalgi holati aks ettirilgan?",["250 mln","200 mln","150 mln","100 mln"],0,"gx44_20_4"]);
GEO_OCHIQ.push(["Ushbu rasmda Yerning necha mln yil avvalgi holati aks ettirilgan?",["250 mln","200 mln","150 mln","100 mln"],3,"gx44_20_5"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Abu Rayhon Beruniy","Al-Farg‘oniy","Al-Xorazmiy","Abu Ali ibn Sino"],0,"gx44_20_6"]);
GEO_OCHIQ.push(["Ushbu xaritada nima tasvirlanganligini aniqlang.",["Dunyo okeani va uning yirik qisimlari","Okeanlar va dengizlar chegarasi","Seysmik hududlar","Litosfera plitalari"],3,"gx44_20_7"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday jarayon tasvirlanganligini aniqlang.",["Litosfera plitalarining vertikal harakati","Mantiya qatlamining uyurmali harakati","Litosfera plitalarining gorizontal harakati","O‘rta okean tizmalarining hosil bo‘lishi"],2,"gx44_20_8"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday jarayon tasvirlanganligini aniqlang.",["Litosfera plitalarining vertikal harakati","Mantiya qatlamining uyurmali harakati","Litosfera plitalarining gorizontal harakati","O‘rta okean tizmalarining hosil bo‘lishi"],3,"gx44_20_9"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday jarayon tasvirlanganligini aniqlang.",["Litosfera plitalarining ham gorizontal ham vertikal harakati","O‘rta okean tizmalarining hosil bo‘lish jarayoni","Chuqur okean botiqlari va quruqlikda baland tog‘larning hosil bo‘lishi","Mantiya moddalarining uyurmali harakati"],2,"gx44_20_10"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday jarayon tasvirlanganligini aniqlang.",["Litosfera plitalarining bir-biri bilan to‘qnashishi","Chuqur okean botiqlari va quruqlikda baland tog‘larning hosil bo‘lishi","Litosfera plitalarining ham gorizontal ham vertikal harakati","O‘rta okean tizmalarining hosil bo‘lishi"],0,"gx44_20_11"]);
GEO_OCHIQ.push(["Ushbu rasmda qanday jarayon tasvirlanganligini aniqlang.",["Litosfera plitalarining bir-biri bilan to‘qnashishi","Litosfera plitalarining vertikal harakati","Quruqlikda baland tog‘larning hosil bo‘lishi","Litosfera plitalarining bir-biridan uzoqlashishi"],3,"gx44_20_12"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Negroid","Yevropeoid","Mongoloid","Avstraloid"],3,"gx44_20_13"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Negroid","Yevropeoid","Mongoloid","Avstraloid"],2,"gx44_20_14"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Negroid","Yevropeoid","Mongoloid","Avstraloid"],1,"gx44_20_15"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi irq vakili ko‘rsatilgan?",["Negroid","Yevropeoid","Mongoloid","Avstraloid"],0,"gx44_20_16"]);
GEO_OCHIQ.push(["Shimoliy yarimsharning necha foizi quruqlikdan iborat?",["29 %","39 %","19 %","49 %"],1,"gx44_20_17"]);
GEO_OCHIQ.push(["Shimoliy yarimsharning necha foizi suvlikdan iborat?",["41 %","81 %","61 %","71 %"],2,"gx44_20_18"]);
GEO_OCHIQ.push(["Janubiy yarimsharning necha foizi quruqlikdan iborat?",["29 %","39 %","19 %","49 %"],2,"gx44_20_19"]);
GEO_OCHIQ.push(["Janubiy yarimsharning necha foizi suvlikdan iborat?",["41 %","81 %","61 %","71 %"],1,"gx44_20_20"]);
GEO_OCHIQ.push(["Ushbu rasmdagi geograf kim ekanligini aniqlang.",["A. Vegener","Y.M.Shokalskiy","B.Varenius","F.Bellinsgauzen"],1,"gx44_21_1"]);
GEO_OCHIQ.push(["Ushbu rasmda geografik o‘rni va havzasining xususiyatiga ko‘ra qanday dengiz guruhi ko‘rsatilgan?",["Materik ichkarisidagi dengizlar","Chekka dengizlar","Materiklar orasidagi dengizlar","A va B"],2,"gx44_21_2"]);
GEO_OCHIQ.push(["Ushbu rasmda geografik o‘rni va havzasining xususiyatiga ko‘ra qanday dengiz guruhi ko‘rsatilgan?",["Materik ichkarisidagi dengizlar","Chekka dengizlar","Materiklar orasidagi dengizlar","A va C"],0,"gx44_21_3"]);
GEO_OCHIQ.push(["Ushbu rasmda geografik o‘rni va havzasining xususiyatiga ko‘ra qanday dengiz guruhi ko‘rsatilgan?",["Materik ichkarisidagi dengizlar","Chekka dengizlar","Materiklar orasidagi dengizlar","To‘g‘ri javob yo‘q"],1,"gx44_21_4"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi dengiz o‘rni ko‘rsatilgan?",["Oxota dengizi","Yava dengizi","Sulu dengizi","Qizil dengiz"],3,"gx44_21_5"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi dengiz o‘rni ko‘rsatilgan?",["O‘rta dengiz","Azov dengizi","Qora dengiz","Egey dengizi"],2,"gx44_21_6"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi dengiz o‘rni ko‘rsatilgan?",["Qizil dengiz","Arabiston dengizi","Janubiy Xitoy dengizi","Shimoliy dengiz"],1,"gx44_21_7"]);
GEO_OCHIQ.push(["Ushbu xaritada “A” harfi bilan qaysi geografik hudud ko‘rsatilgan?",["Gibraltar bo‘g‘ozi","Mozambik bo‘g‘ozi","Gvineya qo‘ltig‘i","Suvaysh kanali"],1,"gx44_21_8"]);
GEO_OCHIQ.push(["Ushbu xaritada “B” harfi o‘rnida qaysi geografik hudud ko‘rsatilgan?",["Gibraltar bo‘g‘ozi","Mozambik bo‘g‘ozi","Gvineya qo‘ltig‘i","Suvaysh kanali"],2,"gx44_21_9"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],0,"gx44_21_10"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],1,"gx44_21_11"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],2,"gx44_21_12"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi okean o‘rni ko‘rsatilgan?",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],3,"gx44_21_13"]);
GEO_OCHIQ.push(["Ushbu rasmda “J” harfi bilan qanday relyef shakli ko‘rsatilgan?",["Okean tubi tekisligi","Suv osti tog‘ tizmasi","Shelf","Materik yonbag‘ri"],0,"gx44_21_14"]);
GEO_OCHIQ.push(["Ushbu rasmda “C” harfi bilan qanday relyef shakli ko‘rsatilgan?",["Orol","Vulqon oroli","Shelf","Materik yonbag‘ri"],1,"gx44_21_15"]);
GEO_OCHIQ.push(["Ushbu rasmda “G” harfi bilan qanday relyef shakli ko‘rsatilgan?",["Suv osti tog‘ tizmasi","Materik yonbag‘ri","Okean tubi tekisligi","Chuqur okean botig‘i"],3,"gx44_21_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 va 12 sonlari bilan qaysi gidrografik obyektlar ko‘rsatilgan?",["Adriatika dengizi, Kerch bo‘g‘izi","Azov dengizi, Tirren dengizi","Kerch bo‘g‘izi, Toranto qo‘ltig‘i","Liguriy dengizi, Azov dengizi"],1,"gx44_21_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda 7 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Fors qo‘ltig‘i","Adan qo‘ltig‘i","Qizil dengiz","Arabiston dengizi"],2,"gx44_21_18"]);
GEO_OCHIQ.push(["Quyidagi rasmda 13 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Fors qo‘ltig‘i","Adan qo‘ltig‘i","Ummon qo‘ltig‘i","Antalya qo‘ltig‘i"],0,"gx44_21_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 11 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Fors qo‘ltig‘i","Adan qo‘ltig‘i","Ummon qo‘ltig‘i","Antalya qo‘ltig‘i"],1,"gx44_21_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Egey dengizi","Ioni dengizi","Tirren dengizi","Azov dengizi"],0,"gx44_22_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Orol dengizi","Qora dengiz","Kaspiy dengizi","Marmar dengizi"],2,"gx44_22_2"]);
GEO_OCHIQ.push(["Ushbu rasmda ko‘rsatilgan shaxsning kimligini aniqlang.",["D.Livingiston","Ibn Battuta","Nosir Xisrav","Al-Farg‘oniy"],1,"gx44_22_3"]);
GEO_OCHIQ.push(["Ushbu rasmda ko‘rsatilgan shaxsning kimligini aniqlang.",["Ibn Battuta","A.Vegener","Vasko da Gama","David Livingiston"],3,"gx44_22_4"]);
GEO_OCHIQ.push(["Ushbu rasmda ko‘rsatilgan shaxsning kimligini aniqlang.",["A. Vegener","Vasko da Gama","David Livingiston","A.Vespuchchi"],1,"gx44_22_5"]);
GEO_OCHIQ.push(["Ushbu rasmda ko‘rsatilgan shaxsning kimligini aniqlang.",["Vasiliy Yunker","Nikolay Vavilov","E.P.Kovalevskiy","A.V.Yeliseyev"],0,"gx44_22_6"]);
GEO_OCHIQ.push(["Ushbu rasmda ko‘rsatilgan shaxsning kimligini aniqlang.",["Vasiliy Yunker","Nikolay Vavilov","E.P.Kovalevskiy","A.P.Yeliseyev"],1,"gx44_22_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Niger daryosi","Senegal daryosi","Nil daryosi","Oranj daryosi"],1,"gx44_22_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Niger daryosi","Senegal daryosi","Kongo daryosi","Zambezi daryosi"],0,"gx44_22_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Rudolf ko‘li","Rukva ko‘li","Chad ko‘li","Nyasa ko‘li"],2,"gx44_22_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 4 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Niger daryosi","Zambezi daryosi","Limpopo daryosi","Kongo daryosi"],3,"gx44_22_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 6 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Rudolf ko‘li","Tanganika ko‘li","Viktoriya ko‘li","Nyasa ko‘li"],2,"gx44_22_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 7 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Rudolf ko‘li","Tanganika ko‘li","Viktoriya ko‘li","Nyasa ko‘li"],1,"gx44_22_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda 8 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Rudolf ko‘li","Tanganika ko‘li","Viktoriya ko‘li","Nyasa ko‘li"],3,"gx44_22_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda 9 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Niger daryosi","Oranj daryosi","Zambezi daryosi","Limpopo daryosi"],2,"gx44_22_15"]);
GEO_OCHIQ.push(["Quyidagi rasmda 10 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Niger daryosi","Oranj daryosi","Zambezi daryosi","Limpopo daryosi"],3,"gx44_22_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda 11 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Niger daryosi","Oranj daryosi","Zambezi daryosi","Limpopo daryosi"],1,"gx44_22_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda 12 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Nil daryosi","Kongo daryosi","Niger daryosi","Shari daryosi"],0,"gx44_22_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda 5 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Issiqko‘l","Balxash ko‘li","Baykal ko‘li","Orol dengizi"],1,"gx44_22_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 14 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Sidra qo‘ltig‘i","Gabes qo‘ltig‘i","Foks qo‘ltig‘i","Gonduras qo‘ltig‘i"],0,"gx44_22_2"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan qaysi orol tasvirlanganligini aniqlang.",["Sitsiliya oroli","Kalimantan oroli","Madagaskar oroli","Yangi Gvineya oroli"],2,"gx44_23_1"]);
GEO_OCHIQ.push(["Rasmdagi daraxt nomini aniqlang.",["Seyba","Palma","Rafiya palmasi","Baobab"],3,"gx44_23_2"]);
GEO_OCHIQ.push(["Ushbu rasmdagi daraxt qaysi materik uchun xos hisoblanadi?",["Afrika","Avstraliya","Yevrosiyo","Janubiy Amerika"],0,"gx44_23_3"]);
GEO_OCHIQ.push(["Ushbu rasmdagi daraxt qaysi tabiat zonasi uchun xos ekanligini aniqlang.",["Ekvatorial o‘rmonlar","Savanna va siyrak o‘rmonlar","Chalacho‘l va cho‘l","Fasliy nam o‘rmonlar"],1,"gx44_23_4"]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvonlar qaysi materik uchun xos hisoblanadi?",["Afrika","Avstraliya","Yevrosiyo","Janubiy Amerika"],0,"gx44_23_5"]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvon nomini aniqlang.",["Karlik begemot","Okapi","Mitti begemot","Antilopa"],1,"gx44_23_7"]);
GEO_OCHIQ.push(["Quyidagi rasmda “I” raqami bilan Afrikaning qaysi geografik o‘lkasi ko‘rsatilgan?",["Sudan tekisligi","Sahroi Kabir","Shimoliy Gvineya rayoni","Atlas tog‘li o‘lkasi"],3,"gx44_23_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda “II” raqami bilan Afrikaning qaysi geografik o‘lkasi ko‘rsatilgan?",["Sudan tekisligi","Sahroi Kabir","Shimoliy Gvineya rayoni","Atlas tog‘li o‘lkasi"],1,"gx44_23_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda “III” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Sudan tekisliklari","Sahroi Kabir","Shimoliy Gvineya rayoni","Atlas tog‘li o‘lkasi"],0,"gx44_23_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IV” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Kongo kotlavinasi","Efiopiya tog‘ligi","Shimoliy Gvineya rayoni","Janubiy Afrika yassitog‘ligi"],2,"gx44_23_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda “V” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Gvineya rayoni","Sharqiy Afrika yassitog‘ligi","Kongo kotlovinasi","Janubiy Afrika yassitog‘ligi"],2,"gx44_23_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VI” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Gvineya rayoni","Kongo kotlovinasi","Sharqiy Afrika yassitog‘ligi","Efiopiya tog‘ligi"],3,"gx44_23_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VII” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Gvineya rayoni","Sharqiy Afrika yassitog‘ligi","Janubiy Afrika yassitog‘ligi","Kap tog‘lari"],1,"gx44_23_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VIII” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Janubiy Afrika yassitog‘ligi","Kap tog‘lari","Madagaskar","Sharqiy Afrika yassitog‘ligi"],0,"gx44_23_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IX” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Janubiy Afrika yassitog‘ligi","Kap tog‘lari","Madagaskar","Sharqiy Afrika yassitog‘ligi"],1,"gx44_23_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda “X” raqami bilan Afrikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Janubiy Afrika yassitog‘ligi","Kap tog‘lari","Madagaskar","Sharqiy Afrika yassitog‘ligi"],2,"gx44_23_9"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxsni aniqlang.",["Jak Iv Kusto","Y.M.Shokalskiy","A.Vespuchchi","Vasko da Gama"],0,"gx44_23_18"]);
GEO_OCHIQ.push(["Ushbu rasmdagi kema nomini aniqlang.",["Santa-Mariya","Niniya","Pinta","Chellenjer"],3,"gx44_23_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Chalacho‘llar va cho‘llar","Savannalar va siyrak o‘rmonlar","Sernam ekvatorial o‘rmonlar","Balandlik mintaqalanish o‘lkalari"],0,"gx44_23_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Chalacho‘llar va cho‘llar","Savannalar va siyrak o‘rmonlar","Sernam ekvatorial o‘rmonlar","Balandlik mintaqalanish o‘lkalari"],1,"gx44_24_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Chalacho‘llar va cho‘llar","Savannalar va siyrak o‘rmonlar","Sernam ekvatorial o‘rmonlar","Fasliy nam o‘rmonlar"],2,"gx44_24_2"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Kap tog‘lari o‘rni ko‘rsatilgan?",["1","2","3","4"],3,"gx44_24_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada qaysi raqam bilan Efiopiya tog‘ligi o‘rni ko‘rsatilgan?",["1","2","3","4"],1,"gx44_24_4"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Abel Tasman","Jeyms Kuk","Metyu Flinders","Luis Torres"],0,"gx44_24_5"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Abel Tasman","Jeyms Kuk","Metyu Flinders","Luis Torres"],1,"gx44_24_6"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Abel Tasman","Jeyms Kuk","Metyu Flinders","Luis Torres"],2,"gx44_24_7"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Abel Tasman","Jeyms Kuk","Metyu Flinders","Luis Torres"],3,"gx44_24_8"]);
GEO_OCHIQ.push(["Rasmdagi hayvon nomini aniqlang.",["Xaltali bo‘ri","Vombat","Chiyabo‘ri","Tulki"],0,"gx44_24_9"]);
GEO_OCHIQ.push(["Rasmdagi hayvon nomini aniqlang.",["Karlik begemot","Okapi","Vombat","Yexidna"],2,"gx44_24_10"]);
GEO_OCHIQ.push(["Rasmdagi hayvon nomini aniqlang.",["Okapi","Lirodum","Koala","Vombat"],2,"gx44_24_11"]);
GEO_OCHIQ.push(["Quyidagi rasmda “I” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Avstraliya","Shimoli-Sharq","Janubi-Sharq","Markaziy tekislik"],0,"gx44_24_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda “II” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Avstraliya","Shimoli-Sharq","Janubi-Sharq","Markaziy tekislik"],1,"gx44_24_13"]);
GEO_OCHIQ.push(["Quyidagi rasmda “III” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Avstraliya","Shimoli-Sharq","Janubi-Sharq","Markaziy tekislik"],2,"gx44_24_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IV” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Avstraliya","Shimoli-Sharq","Janubi-Sharq","Markaziy tekislik"],3,"gx44_24_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda “V” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["G‘arbiy Avstraliya","Janubi-G‘arb","Tasmaniya oroli","Markaziy tekislik"],0,"gx44_24_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VI” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["G‘arbiy Avstraliya","Janubi-G‘arb","Tasmaniya oroli","Markaziy tekislik"],1,"gx44_24_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VII” raqami bilan Avstraliyaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["G‘arbiy Avstraliya","Janubi-G‘arb","Tasmaniya oroli","Markaziy tekislik"],2,"gx44_24_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda 4 raqami bilan Avstraliyaning qaysi yarimoroli ko‘rsatilgan?",["Arnem-Lend yarimoroli","Keyp-York yarimoroli","Ungava yarimoroli","Melvill yarimoroli"],1,"gx44_24_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Avstraliya qo‘ltig‘i","Katta Avstraliya qo‘ltig‘i","Karpentoriya qo‘ltig‘i","Tasman dengizi"],1,"gx44_24_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda 5 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Tasman dengizi","Fiji dengizi","Marjon dengizi","Karpentoriya qo‘ltig‘i"],2,"gx44_25_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan qaysi gidrografik obyekt ko‘rsatilgan?",["Tasman dengizi","Fiji dengizi","Marjon dengizi","Karpentoriya qo‘ltig‘i"],0,"gx44_25_1"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Jeyms Kuk","F.Magellan","X.Kolumb","V.Balboa"],3,"gx44_25_3"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Jeyms Kuk","F.Magellan","X.Kolumb","V.Balboa"],1,"gx44_25_4"]);
GEO_OCHIQ.push(["Quyida qaysi okean ko‘rsatilganligini aniqlang.",["Tinch okeani","Atlantika okeani","Hind okeani","Shimoliy Muz okeani"],0,"gx44_25_5"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Mikluxo-Maklay","V.M.Golovin","F.P.Litke","S.O.Makarov"],0,"gx44_25_6"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["M.Lazarev","M.Lomonosov","F.Bellinsgauzen","V.Balboa"],2,"gx44_25_7"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["M.Lazarev","M.Lomonosov","F.Bellinsgauzen","V.Balboa"],0,"gx44_25_8"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["F.Bellinsgauzen","M.Lazarev","R.Skott","R.Amundsen"],3,"gx44_25_9"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["F.Bellinsgauzen","M.Lazarev","R.Skott","R.Amundsen"],2,"gx44_25_10"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Y.M.Shokalskiy","E.Shekelton","Jeyms Kuk","R.Skott"],1,"gx44_25_11"]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvonlar qaysi materik uchun xos hisoblanadi?",["Avstraliya","Janubiy Amerika","Shimoliy Amerika","Antarktida"],3,"gx44_25_12"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["X.Kolumb","F.Magellan","A.Vespuchchi","E.Bonplan"],2,"gx44_25_13"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["X.Kolumb","F.Magellan","A.Vespuchchi","E.Bonplan"],0,"gx44_25_14"]);
GEO_OCHIQ.push(["Ushbu rasmdagi baliq nomini aniqlang.",["Daryo odamxo‘ri","Piraniya","Oy baliq","A va B"],3,"gx44_25_15"]);
GEO_OCHIQ.push(["Ushbu xaritadan foydalanib qaysi sayohat mashrutkalari aks ettirilganini aniqlang.",["F.Magellan","A.Vespuchchi","X.Kolumb","Vasko da Gama"],2,"gx44_25_16"]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvon nomini aniqlang.",["Yalqov","Tapir","Yaguar","Maymun"],0,"gx44_25_17"]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvon nomini aniqlang.",["Yalqov","Tapir","Yaguar","Maymun"],2,"gx44_25_18"]);
GEO_OCHIQ.push(["Ushbu rasmdagi hayvon nomini aniqlang.",["Yalqov","Tapir","Yaguar","Maymun"],1,"gx44_25_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “I” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Orinoko tekisligi","Gviana yassitog‘ligi","Amazoniya","Braziliya yassitog‘ligi"],0,"gx44_25_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “II” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Orinoko tekisligi","Gviana yassitog‘ligi","Amazoniya","Braziliya yassitog‘ligi"],1,"gx44_26_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda “III” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Orinoko tekisligi","Gviana yassitog‘ligi","Amazoniya","Braziliya yassitog‘ligi"],2,"gx44_25_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IV” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Orinoko tekisligi","Gviana yassitog‘ligi","Amazoniya","Braziliya yassitog‘ligi"],3,"gx44_26_3"]);
GEO_OCHIQ.push(["Quyidagi rasmda “V” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Ichki tekisliklar va pampa","Patagoniya","Shimoliy And","Markaziy And"],0,"gx44_25_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VI” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Ichki tekisliklar va pampa","Patagoniya","Shimoliy And","Markaziy And"],1,"gx44_26_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VII” raqami bilan Janubiy Amerika materigining qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Ichki tekisliklar va pampa","Patagoniya","Shimoliy And","Markaziy And"],2,"gx44_25_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VIII” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Ichki tekisliklar va pampa","Patagoniya","Shimoliy And","Markaziy And"],3,"gx44_26_3"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IX” raqami bilan Janubiy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Patagoniya","Shimoliy And","Markaziy And","Janubiy And"],3,"gx44_25_20"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Jon Kabot","Genri Gudzon","Aleksandr Makkenzi","Vitus Bering"],0,"gx44_26_9"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Jon Kabot","Genri Gudzon","Aleksandr Makkenzi","Vitus Bering"],1,"gx44_26_10"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Jon Kabot","Genri Gudzon","Aleksandr Makkenzi","Vitus Bering"],2,"gx44_26_11"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs kim ekanligini aniqlang.",["Jon Kabot","Genri Gudzon","Aleksandr Makkenzi","Vitus Bering"],3,"gx44_26_12"]);
GEO_OCHIQ.push(["Ushbu rasmda 1 raqami bilan qaysi tabiat zonasi ko‘rsatilganligini aniqlang.",["Qattiq bargli doimiy yashil o‘rmonlar va butazorlar","Sernam ekvatorial o‘rmonlar","Balandlik mintaqalanish o‘lkalari","Aralash o‘rmonlar"],2,"gx44_26_13"]);
GEO_OCHIQ.push(["Ushbu rasmda 2 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Chala cho‘llar va cho‘llar","Dashtlar","Savannalar va siyrak o‘rmonlar","Qattiq bargli doimiy yashil o‘rmonlar va butazorlar"],0,"gx44_26_14"]);
GEO_OCHIQ.push(["Ushbu rasmda 3 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Sernam ekvatorial o‘rmonlar","Fasliy sernam o‘rmonlar","Savannalar va siyrak o‘rmonlar","Qattiq bargli doimiy yashil o‘rmonlar va butazorlar"],1,"gx44_26_15"]);
GEO_OCHIQ.push(["Ushbu rasmda 4 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Sernam ekvatorial o‘rmonlar","Savannalar va siyrak o‘rmonlar","Fasliy sernam o‘rmonlar","Qattiq bargli doimiy yashil o‘rmonlar va butazorlar"],1,"gx44_26_16"]);
GEO_OCHIQ.push(["Ushbu rasmda 5 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Sernam ekvatorial o‘rmonlar","Fasliy sernam o‘rmonlar","Dashtlar","Savannalar va siyrak o‘rmonlar"],0,"gx44_26_15"]);
GEO_OCHIQ.push(["Ushbu rasmda 6 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Sernam ekvatorial o‘rmonlar","Fasliy sernam o‘rmonlar","Dashtlar","Savannalar va siyrak o‘rmonlar"],2,"gx44_26_15"]);
GEO_OCHIQ.push(["Quyidagi rasmda “I” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Grenlandiya","Kanada-Arktika arxipelagi","Subarktika tekisliklari","Lavrentiy qirlari"],0,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “II” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Grenlandiya","Kanada-Arktika arxipelagi","Subarktika tekisliklari","Lavrentiy qirlari"],1,"gx44_26_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “III” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Grenlandiya","Kanada-Arktika arxipelagi","Subarktika tekisliklari","Lavrentiy qirlari"],2,"gx44_27_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IV” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Grenlandiya","Kanada-Arktika arxipelagi","Subarktika tekisliklari","Lavrentiy qirlari"],3,"gx44_27_2"]);
GEO_OCHIQ.push(["Quyidagi rasmda “V” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Nyufandlend oroli","Appalachi va Appalachibo‘yi rayonlari","Markaziy tekisliklar","Buyuk tekisliklar"],0,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VI” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Nyufandlend oroli","Appalachi va Appalachibo‘yi rayonlari","Markaziy tekisliklar","Buyuk tekisliklar"],1,"gx44_26_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VII” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Nyufandlend oroli","Appalachi va Appalachibo‘yi rayonlari","Markaziy tekisliklar","Buyuk tekisliklar"],2,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “VIII” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Nyufandlend oroli","Appalachi va Appalachibo‘yi rayonlari","Markaziy tekisliklar","Buyuk tekisliklar"],3,"gx44_26_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “IX” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Qirg‘oq tekisliklari","Alyaska va Kanada shimoli-g‘arbi Kordilyerasi","Kanada janubi-g‘arbi va AQSH shimoli- g‘arbi Kordilyerasi","AQSH janubi-g‘arbi Kordilyerasi"],0,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “X” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Qirg‘oq tekisliklari","Alyaska va Kanada shimoli-g‘arbi Kordilyerasi","Kanada janubi-g‘arbi va AQSH shimoli- sharqi Kordilyerasi","AQSH janubi-g‘arbi Kordilyerasi"],1,"gx44_27_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda “XI” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Qirg‘oq tekisliklari","Alyaska va Kanada shimoli-g‘arbi Kordilyerasi","Kanada janubi-g‘arbi va AQSH shimoli- g‘arbi Kordilyerasi","AQSH janubi-g‘arbi Kordilyerasi"],2,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “XII” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Qirg‘oq tekisliklari","Alyaska va Kanada shimoli-g‘arbi Kordilyerasi","Kanada janubi-g‘arbi va AQSH shimoli- g‘arbi Kordilyerasi","AQSH janubi-g‘arbi Kordilyerasi"],3,"gx44_27_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda ‘XIII” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Meksika","Markaziy Amerika bo‘yni","Orollar","AQSH janubi-g‘arbi Kordilyerasi"],0,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda “XIV” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Meksika","Markaziy Amerika bo‘yni","Orollar","AQSH janubi-g‘arbi Kordilyerasi"],1,"gx44_26_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda “XV” raqami bilan Shimoliy Amerikaning qaysi tabiiy geografik o‘lkasi ko‘rsatilgan?",["Shimoliy Meksika","Markaziy Amerika bo‘yni","Orollar","AQSH janubi-g‘arbi Kordilyerasi"],2,"gx44_26_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 1 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Bofort dengizi","Chukotka dengizi","Sharqiy Sibir dengizi","Laptevlar dengizi"],0,"gx44_27_14"]);
GEO_OCHIQ.push(["Quyidagi rasmda 2 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Shimoliy dengiz","Grenlandiya dengizi","Barens dengizi","Norvegiya dengizi"],3,"gx44_27_15"]);
GEO_OCHIQ.push(["Quyidagi rasmda 3 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Chukotka dengizi","Bofort dengizi","Sharqiy Sibir dengizi","Laptevlar dengizi"],2,"gx44_27_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda 4 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Chukotka dengizi","Bofort dengizi","Sharqiy Sibir dengizi","Laptevlar dengizi"],0,"gx44_27_17"]);
GEO_OCHIQ.push(["Quyidagi rasmda 5 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Norvegiya dengizi","Grenlandiya dengizi","Shimoliy dengiz","Baffin dengizi"],1,"gx44_27_18"]);
GEO_OCHIQ.push(["Quyidagi rasmda 6 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Laptevlar dengizi","Barens dengizi","Kara dengizi","Norvegiya dengizi"],1,"gx44_27_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 7 raqami bilan Shimoliy Muz okeanining qaysi dengizi ko‘rsatilgan?",["Chukotka dengizi","Bofort dengizi","Sharqiy Sibir dengizi","Laptevlar dengizi"],3,"gx44_27_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi raqam bilan Kara dengizi ko‘rsatilgan?",["6","10","8","7"],2,"gx44_28_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi raqam bilan Baffin dengizi ko‘rsatilgan?",["9","10","8","7"],0,"gx44_27_19"]);
GEO_OCHIQ.push(["Quyidagi rasmda 10 raqami bilan Shimoliy Muz okeanidagi qaysi dengiz ko‘rsatilgan?",["Laptevlar dengizi","Kara dengizi","Sharqiy Sibir dengizi","Barens dengizi"],0,"gx44_28_3"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi gidrografik obyekt ko‘rsatilganligini aniqlang.",["Balxash ko‘li","Issiqko‘l","Kaspiy ko‘li","Baykal ko‘li"],3,"gx44_28_4"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi gidrografik obyekt ko‘rsatilganligini aniqlang.",["Balxash ko‘li","Issiqko‘l","Kaspiy ko‘li","Baykal ko‘li"],2,"gx44_28_5"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi yarimorol ko‘rsatilganligini aniqlang.",["Arabiston yarimoroli","Somali yarimoroli","Hindiston yarimoroli","Yukatan yarimoroli"],1,"gx44_28_6"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi yarimorol ko‘rsatilganligini aniqlang.",["Arabiston yarimoroli","Somali yarimoroli","Hindiston yarimoroli","Yukatan yarimoroli"],2,"gx44_28_7"]);
GEO_OCHIQ.push(["Ushbu rasmda qaysi orol ko‘rsatilgan?",["Yangi Gvineya oroli","Yangi Kaledoniya oroli","Yangi Gebrid oroli","Yangi Zellandiya oroli"],3,"gx44_28_8"]);
GEO_OCHIQ.push(["Ushbu xaritada “B” harfi bilan qaysi davlat ko‘rsatilgan?",["Meksika","Argentina","Kanada","AQSH"],1,"gx44_28_9"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Yaponiya","Buyuk Britaniya","Finlyandiya","Shvetsiya"],1,"gx44_28_10"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Braziliya","Fransiya","Kanada","Avstriya"],2,"gx44_28_11"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Filippin","Indoneziya","Yaponiya","Yangi Zellandiya"],2,"gx44_28_12"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Ispaniya","Fransiya","Polsha","Germaniya"],1,"gx44_28_13"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs qaysi davlat imperatori hisoblanadi?",["Koreya Respublikasi","Tayvan","Yaponiya","Vietnam"],2,"gx44_28_14"]);
GEO_OCHIQ.push(["Ushbu rasmdagi shaxs qaysi davlat imperatori hisoblanadi?",["Bruney","Butan","Tailand","BAA"],0,"gx44_28_15"]);
GEO_OCHIQ.push(["Ushbu xaritada yashil rang bilan qaysi davlat hududi ko‘rsatilgan?",["Argentina","Chili","Kolumbiya","Braziliya"],3,"gx44_28_16"]);
GEO_OCHIQ.push(["Quyidagi xaritada 5 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Ekvador","Kolumbiya","Peru","Chili"],2,"gx44_28_17"]);
GEO_OCHIQ.push(["Quyidagi xaritada 7 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Liviya","Jazoir","Mali","Sudan"],0,"gx44_28_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Mongoliya","Rossiya","Hindiston","Xitoy"],3,"gx44_28_19"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Kanada","AQH","Meksika","Braziliya"],1,"gx44_28_20"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Efiopiya","Somali","Marokash","Keniya"],1,"gx44_29_1"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Mavritaniya","Jazoir","Liviya","Mali"],0,"gx44_29_2"]);
GEO_OCHIQ.push(["Quyidagi xaritada “R” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Kolumbiya","Peru","Gayana","Ekvador"],3,"gx44_29_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada moviy rang bilan Yevropaning qaysi subregioni ko‘rsatilgan?",["Shimoliy Yevropa","Janubiy Yevropa","G‘arbiy Yevropa","Sharqiy Yevropa"],0,"gx44_29_4"]);
GEO_OCHIQ.push(["Quyidagi xaritada sariq rang bilan Yevropaning qaysi subregioni ko‘rsatilgan?",["Shimoliy Yevropa","Janubiy Yevropa","G‘arbiy Yevropa","Sharqiy Yevropa"],1,"gx44_29_5"]);
GEO_OCHIQ.push(["Quyidagi xaritada yashil rang bilan Yevropaning qaysi subregioni ko‘rsatilgan?",["Shimoliy Yevropa","Janubiy Yevropa","G‘arbiy Yevropa","Sharqiy Yevropa"],2,"gx44_29_6"]);
GEO_OCHIQ.push(["Quyidagi xaritada qizil rang bilan Yevropaning qaysi subregioni ko‘rsatilgan?",["Shimoliy Yevropa","Janubiy Yevropa","G‘arbiy Yevropa","Sharqiy Yevropa"],3,"gx44_29_5"]);
GEO_OCHIQ.push(["Quyidagi xaritada “A” harfi bilan qaysi davlat ko‘rsatilgan?",["Lixtenshteyn","Lyuksemburg","San-Marino","Vatikan"],0,"gx44_29_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada “B” harfi bilan qaysi davlat ko‘rsatilgan?",["Lixtenshteyn","Lyuksemburg","San-Marino","Vatikan"],2,"gx44_29_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada “D” harfi bilan qaysi davlat ko‘rsatilgan?",["Monako","Andorra","Malta","Vatikan"],2,"gx44_29_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada “E” harfi bilan qaysi davlat ko‘rsatilgan?",["Monako","Andorra","Malta","Vatikan"],3,"gx44_29_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada “F” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Monako","Andorra","Malta","Vatikan"],1,"gx44_29_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada “G” harfi bilan qaysi davlat ko‘rsatilgan?",["Monako","Andorra","Malta","Vatikan"],0,"gx44_29_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada “H” harfi bilan qaysi davlat ko‘rsatilgan?",["Lixtenshteyn","Lyuksemburg","San-Marino","Andorra"],1,"gx44_29_8"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Bangaldesh","Hindiston","Yaponiya","Saudiya Arabistoni"],1,"gx44_29_15"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi davlat hududi ko‘rsatilgan?",["Butan","Laos","Bruney","Nepal"],3,"gx44_29_16"]);
GEO_OCHIQ.push(["Quyidagi rasmda “J” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Mongoliya","Qozog‘iston","Qirg‘iziston","Rossiya"],1,"gx44_29_17"]);
GEO_OCHIQ.push(["Quyidagi xaritada “A” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Shri-Lanka","Indoneziya","Filippin","Maldiv"],0,"gx44_29_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada “N” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Kambodja","Laos","Tailand","Myanma"],0,"gx44_29_19"]);
GEO_OCHIQ.push(["Quyidagi xaritada “G” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Pokiston","Eron","Turkmaniston","Afg‘oniston"],3,"gx44_29_20"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan Hindistonning qaysi yirik sharhi ko‘rsatilgan?",["Mumbay","Dehli","Kolkata","Chennay"],1,"gx44_30_1"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan Hindistonning qaysi yirik shahri ko‘rsatilgan?",["Mumbay","Dehli","Kolkata","Chennay"],2,"gx44_30_1"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan Hindistonning qaysi yirik shahri ko‘rsatilgan?",["Mumbay","Dehli","Kolkata","Chennay"],0,"gx44_30_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada 4 raqami bilan Hindistonning qaysi yirik shahri ko‘rsatilgan?",["Mumbay","Dehli","Kolkata","Chennay"],3,"gx44_30_3"]);
GEO_OCHIQ.push(["Quyidagi xaritada “A” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Iroq","Suriya","Iordaniya","Kuvayt"],0,"gx44_30_5"]);
GEO_OCHIQ.push(["Quyidagi xaritada “I” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Iroq","Suriya","Iordaniya","Kuvayt"],3,"gx44_30_6"]);
GEO_OCHIQ.push(["Quyidagi xaritada “B” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Yaman","Ummon","BAA","Qatar"],1,"gx44_30_7"]);
GEO_OCHIQ.push(["Quyidagi xaritada “J” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Yaman","Ummon","BAA","Qatar"],0,"gx44_30_8"]);
GEO_OCHIQ.push(["Quyidagi xaritada “D” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Eron","Iroq","Saudiya Arabistoni","Qatar"],2,"gx44_30_9"]);
GEO_OCHIQ.push(["Quyidagi xaritada “F” harfi bilan qaysi davlat hududi ko‘rsatilgan?",["Eron","Armaniston","Ozarbayjon","Turkiya"],3,"gx44_30_10"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Jibuti","Eritreya","Ruanda","Burundi"],1,"gx44_30_11"]);
GEO_OCHIQ.push(["Quyidagi xaritada 2 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Malavi","Uganda","Burundi","Ruanda"],0,"gx44_30_12"]);
GEO_OCHIQ.push(["Quyidagi xaritada 16 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Argentina","Paragvay","Urugvay","Chili"],3,"gx44_30_13"]);
GEO_OCHIQ.push(["Quyidagi xaritada 6 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Venesuela","Paragvay","Urugvay","Boliviya"],2,"gx44_30_14"]);
GEO_OCHIQ.push(["Quyidagi xaritada 12 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Venesuela","Paragvay","Urugvay","Boliviya"],3,"gx44_30_15"]);
GEO_OCHIQ.push(["Quyidagi xaritada 10 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Namibiya","Botsvana","Angola","Zambiya"],2,"gx44_30_16"]);
GEO_OCHIQ.push(["Quyidagi xaritada 17 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Kamerun","Nigeriya","Niger","Kongo"],1,"gx44_30_17"]);
GEO_OCHIQ.push(["Quyidagi xaritada 9 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Liviya","Misr","Jazoir","Sudan"],1,"gx44_30_18"]);
GEO_OCHIQ.push(["Quyidagi xaritada 3 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Gana","Burkina-Faso","Togo","Kot-d’Ivuar"],0,"gx44_30_19"]);
GEO_OCHIQ.push(["Quyidagi xaritada 15 raqami bilan qaysi davlat hududi ko‘rsatilgan?",["Marokash","Senegal","Mavritaniya","Tunis"],3,"gx44_30_17"]);

/* ===== Xaritali va amaliy testlar — Xurramov S., Mamanazarov O. (Samarqand 2025) ===== */
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida 2015-yilda shahar aholisi tabiiy o‘sish hisobiga necha kishiga ko‘payganini aniqlang (jami aholisi yil boshida 100 000 kishi) ---tug‘ilish - - - o‘lim",["6000","500","600","5000"],1,"gx45_1"]);
GEO_OCHIQ.push(["Quyidagi okean tubi relyefi rasmida Abissal va Batial qaysi raqamlar bilan belgilangan?",["4 va 6","2 va 7","3 va 6","1 va 8"],0,"gx45_2"]);
GEO_OCHIQ.push(["Rasmda A harfi bilan ko‘rsatilgan nuqtaning mutlaq balandligini aniqlang",["2100 m","3000 m","3300 m","2400 m"],3,"gx45_3"]);
GEO_OCHIQ.push(["A nuqtaning mutlaq balandligi 6000 metr, A va C nuqtalarning nisbiy balandligi 1200 metr. D nuqtada havo harorati 0 °C ga teng. C nuqtadagi havo bosimni aniqlang.",["380 mm Hg","480 mm Hg","330 mm Hg","280 mm Hg"],3,"gx45_4"]);
GEO_OCHIQ.push(["Berilgan tasvirda C nuqtaga nisbatan ufqning A tomoni Janubi-sharq tomonida joylashgan bo‘lsa, B nuqtani ufqning qaysi tomonida ekanligini aniqlang?",["Janubiy-janubi-sharq","Shimoliy-shimoli-g‘arb","Shimoliy-sharq-sharq","Shimoliy-g‘arb-g‘arb"],0,"gx45_5"]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada Atlas tog‘lari, Darfur platosi, Sharqiy Afrika yassitog‘ligi qaysi raqamlar bilan belgilanganligini mos ravishda toping",["1, 3, 5","1, 4, 6","2, 7, 8","4, 5, 6"],1,"gx45_7"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida 2005- yilda shahar aholisi tabiiy va mexanik o‘sish hisobiga necha kishiga ko‘payganini aniqlang (jami aholisi yil boshida 100 000 kishi).",["500","700","5000","7000"],1,"gx45_8"]);
GEO_OCHIQ.push(["Agar topografik xaritada A va B nuqtalar orasidagi haqiqiy masofa 7,6 km bo‘lsa, mazkur nuqtalar orasidagi masofa necha santimetrga teng bo'ladi? Masshtab 1:200 000",["3, 2","4, 8","3, 8","5, 2"],2,"gx45_9"]);
GEO_OCHIQ.push(["22-dekabr kuni Quyoshning tik tepadan o‘tishi quyidagi rasmda qaysi raqam bilan belgilangan?",["4","2","6","5"],0,"gx45_10"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib A va B nuqtalar orasidagi masofani 1◦ meridian uzunligi hisobida necha kilometrga teng ekanligini aniqlang (1◦ meridian yoyining uuzunligi 111 km).",["2220 km","1665 km","2775 km","1110 km"],0,"gx45_11"]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining yozuvsiz xaritasida 1 va 3 raqamlar bilan qaysi yarimorollar ko‘rsatilgan?",["Florida ya.o va Labrador ya.o","Yukatan ya.o va Labrador ya.o","Yangi Shotlandiya ya.o va Kaliforniya ya.o","Yukatan ya.o va Florida ya.o"],0,"gx45_12"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib A nuqtaning geografik koordinatasini aniqlang.",["15° j.k, 45° g‘b.u","15° sh.k, 45° g‘b.u","45° j.k, 15° shq.u","45° sh.k, 15° g‘b.u"],0,"gx45_13"]);
GEO_OCHIQ.push(["Quyidagi chizmada gorizontallar har 100 metr balandlikdan o'tkazilgan. Ushbu chizmada qanday relyef shakli tasvirlangan?",["qirlar","past tog‘lar","pasttekislik","o‘rtacha tog‘lar"],1,"gx45_14"]);
GEO_OCHIQ.push(["Ushbu chizmada gorizontallar 10 metrdan o'tkazilgan, A va B nuqtalar orasidagi nisbiy balandlikni aniqlang.",["30 m","40 m","50 m","70 m"],1,"gx45_17"]);
GEO_OCHIQ.push(["Quyidagi okean tubi relyefi rasmida shelf va abissal qaysi raqamlar bilan belgilangan",["2 va 5","1 va 3","4 va 6","2 va 6"],3,"gx45_18"]);
GEO_OCHIQ.push(["AQShda turli tarmoqlarga ixtisoslashgan qishloq xo‘jalik mintaqalari vujudga kelgan. To‘q mallarangda qaysi mintaqa belgilangan?",["bug‘doy","sut","makkajo‘xori","paxta"],3,"gx45_19"]);
GEO_OCHIQ.push(["Quyidagi chizmada gorizontallar har 50 m da o‘tkazilgan bo‘lsa, A nuqtaning mutlaq balandligini toping.",["450 m","500 m","750 m","600 m"],1,"gx45_20"]);
GEO_OCHIQ.push(["Jadvalning qaysi qatorida ma’lumotlar to‘g‘ri berilgan?",["II","IV","I","III"],0,"gx45_21"]);
GEO_OCHIQ.push(["Quyidagi chizmada 3 raqam bilan Yer po‘stining qaysi qatlami belgilangan?",["Bazaltli qatlam","Granit qatlam","Cho‘kindili qatlam","Yadro qatlam"],0,"gx45_23"]);
GEO_OCHIQ.push(["Quyidagi topografik xaritadan foydalanib shamol yo‘nalishini aniqlang.",["janubi-g‘arbdan shimoli-sharqqa","shimoli-sharqdan janubi-g‘arbga","janubi-sharqdan shimoli-g‘arbga","shimoli-g‘arbdan janubi-sharqqa"],0,"gx45_27"]);
GEO_OCHIQ.push(["Surxondaryo viloyati bilan chegaradosh bo'lgan qaysi davlatlarning hududi A va B harflar bilan ko‘rsatilgan?",["Turkmaniston, Tojikiston","Tojikiston, Afg‘oniston","Turkmaniston, Afg‘oniston"],0,"gx45_28"]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan tabiiy geografik okrug hududini o‘rab turadigan tog‘ tizmalarini toping.",["1 va 3","2 va 4","2 va 3","1 va 2"],2,"gx45_29"]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada I va XIV raqamlari bilan Yevrosiyoning qaysi tabiiy geografik o'lkalar belgilanganligini mos ravishda topingJan",["Shimoliy Yevropa, Janubi-sharqiy Osiyo","G‘arbiy Yevropa, Sharqiy Osiyo","Janubiy Yevropa, Old Osiyo","G‘arbiy Sibir, Janubiy Osiyo"],0,"gx45_30"]);
GEO_OCHIQ.push(["A nuqtada havo harorati +3°C, B nuqtada havo bosimi 720 mm Hg, D nuqtaning mutloq balandligi 1200 m. Ushbu ma’lumotlar asosida C nuqtadagi havo haroratini hisoblang.",["+7,8⁰C","+8,4⁰C","+4,8⁰C","+6,6⁰C"],0,"gx45_31"]);
GEO_OCHIQ.push(["Quyidagi rasmda daryo mansabi qaysi harf bilan ko‘rsatilgan?",["F","D","A","E"],1,"gx45_35"]);
GEO_OCHIQ.push(["Alp burmalanishida ko‘tarilgan tog‘lar rasmda qaysi raqamlar bilan ko‘rsatilgan?",["2, 4, 6, 11, 14","1, 4, 5, 13, 14","1, 2, 6, 11, 12","3, 5, 6, 10, 15"],1,"gx45_36"]);
GEO_OCHIQ.push(["Quyidagi rasmda tasvirlangan “Tosh ustun” tabiat yodgorligi qaysi milliy bo‘g‘da joylashgan?",["Ugom–Chotqol milliy bog‘ida","Zarafshon milliy bog‘ida","Zomin milliy bog‘ida","Do‘rmon milliy bog‘ida"],2,"gx45_37"]);
GEO_OCHIQ.push(["Surxondaryo tabiiy geografik okrugning sxematik xaritasi 1 raqami bilan qaysi tog‘ tizmasi ko‘rsatilgan?",["Hisor","Bobotog‘","Ko‘hitang","Zarafshon"],1,"gx45_38"]);
GEO_OCHIQ.push(["TOPSHIRIQNI BAJARING. Daraxtni azimutini aniqlang.",["365°","360°","50°","5°"],3,"gx45_39"]);
GEO_OCHIQ.push(["Quyidagi grafik va jadvaldan foydalanib soat 7:00 da havoning mutlaq namligi qancha bo‘lganini aniqlang.",["7.1 gr","7.7 gr","6.2gr","6.8 gr"],3,"gx45_40"]);
GEO_OCHIQ.push(["Topshiriqni bajaring.",["65°","70°","135°","430°"],1,"gx45_44"]);
GEO_OCHIQ.push(["30 g‘.u soat 7:00 bo‘lsa, qayerda soat 12:00 bo‘ladi.",["55° sh.u","45° shq.","90° g‘.u","80° g‘.u"],1,null]);
GEO_OCHIQ.push(["30° shq.u soat 7:00 bo‘lsa,qayerda soat 11:00 bo‘ladi.",["55° sh.u","45° shq.","90° shq.u","80° g‘.u"],2,"gx45_48"]);
GEO_OCHIQ.push(["Rasmda “k” harfi bilan daryo vodiysining qaysi elementi ko‘rsatilgan?",["estuariy","irmoqlar","suvayirg‘ich","daryo manbai"],2,"gx45_54"]);
GEO_OCHIQ.push(["Quyidagi xarita-sxemada 4 raqami bilan qaysi dengiz ko‘rsatilgan?",["Liguriy","Adriatika","Tirren","Ioniya"],1,"gx45_55"]);
GEO_OCHIQ.push(["Ushbu rasmda tasvirlangan tepalikning qaysi yonbag‘ri qiya?",["sharq","janub","g‘arb","shimol"],0,"gx45_56"]);
GEO_OCHIQ.push(["Rasmdagi a va b harflar o‘rniga 4 sekund va 6 sekund so‘zlari mos ravishda qo‘yilsa, dengizning chuqurligini aniqlang",["6000 m va 4500 m","6500 m va 8500 m","4500 m va 3000 m","6000 m va 9000 m"],0,"gx45_57"]);
GEO_OCHIQ.push(["Rasmda qaysi harf bilan belgilangan parallelda 22-dekabr kuni bir sutka davomida Quyosh botmaydi?",["C","E","B","A"],1,"gx45_58"]);
GEO_OCHIQ.push(["Rasmdagi holat quyidagi qaysi geografik obyekt uchun xos?",["Dekan yassitog‘ligi","Meksika tog‘ligi","Kamchatka yarimoroli","Viktoriya sharsharasi"],2,"gx45_59"]);
GEO_OCHIQ.push(["Quyidagi qaysi orol vujudga kelishiga ko‘ra rasmda tasvirlangan tipga xos emas?.",["Gavayi","Tasmaniya","Mariana","Pasxa"],1,"gx45_60"]);
GEO_OCHIQ.push(["Rasmda ko‘rsatilgan A va B gorizantallarning nisbiy balandligini aniqlang",["1000 m","500 m","600 m","300 m"],0,"gx45_61"]);
GEO_OCHIQ.push(["Tuman aholisi 2000-yilning boshida 200000 kishini tashkil etgan.Grafikdagi ma’lumotlardan foydalanib tuman aholisin2000- yilda yilda yalpi o‘sish hisobiga necha kishiga ko‘payganligi aniqlang?",["120 kishiga","12000 kishiga","1200 kishiga","120000 kishiga"],2,"gx45_63"]);
GEO_OCHIQ.push(["Ushbu grafikdan foydalanib Angren shahar aholisi 2015- yilda mexanik o‘sish hisobiga qancha kishiga ko‘payganligini aniqlang? (Yil boshida shahar aholisi 155 ming kishi. A.120 kishi B.155 kishi C.145 kishiga D.200 kishi. 6 5. Xaritada raqamlar bilan ko‘rsatilgan nuqtalardan qaysi biri Janubiy tropik chizig‘iga eng yaqin joylashgan?",["1","2","4","3."],1,"gx45_64"]);
GEO_OCHIQ.push(["Rasmda ko‘rsatilgan A nuqtaning mutlaq balandligi 400 m, u yerdagi havo bosimi 730 mm Hg. B nuqtadagi havo bosimini aniqlang..",["610 mm Hg","550 mm Hg","600 mm Hg","580 mm Hg."],3,"gx45_67"]);
GEO_OCHIQ.push(["Terrigen yotqiziqlar ko‘p to‘planadigan joylar rasmda qaysi harf bilan belgilangan?.",["D, A","F, B","G, F","J, B."],0,"gx45_68"]);
GEO_OCHIQ.push(["Quyidagi rasmda nima tasvirlangan?",["Iliq front","Geotermik o‘choq","Termik depressiya","Sovuq front"],0,"gx45_69"]);
GEO_OCHIQ.push(["Rasmda qanday relyef shakli aks ettirilgan?.",["Botiq","Tepalik","Yassitog‘lik","Cho‘qqi"],0,"gx45_70"]);
GEO_OCHIQ.push(["Quyidagi xarita-sxemada 1, 8, 2 raqamlari bilan qaysi gidrografik obyektlar ko‘rsatilgan?",["Azov, Apsheron, Adan","Egey, Ioniya, Sidra","Kaspiy, Kerch, Adan","Kaspiy, Bob-al-Mandob, Azov"],3,"gx45_71"]);
GEO_OCHIQ.push(["Qishda Murmansk portining muzlamasligiga sabab bo‘luvchi oqimlar quyidagi xarita-sxemada qaysi sonlar bilan ko‘rsatilgan?.",["9, 10, 12","1, 2, 4","16, 17, 19","9, 8, 7"],3,"gx45_72"]);
GEO_OCHIQ.push(["Quyidagi rasmda O‘rta Osiyo iqlimidagi qanday holat aks etgan?.",["Siklon","Termik depressiya","Antisiklon","Front zonasi"],2,"gx45_73"]);
GEO_OCHIQ.push(["Quyidagi grafikdan foydalanib, soat 12:00 dagi havo harorati va atmosfera hodisasini aniqlang..",["+20⁰C, shabada","+21⁰C, shamol","+24⁰C, patsimon bulut","+18⁰C, qat-qat bulut."],2,"gx45_75"]);
GEO_OCHIQ.push(["Baliq ko‘p ovlanadigan va suvo‘tlar yig‘ib olinadigan dengizlar rasmda qaysi raqamlar bilan ko‘rsatilgan?",["1, 5, 6","1, 3, 4","2, 7, 8","3, 5, 6."],1,"gx45_78"]);
GEO_OCHIQ.push([".Chizmada tasvirlangan orolning 1- gorizontalida havo bosimi 710 mm Hg, 3- gorizontalida esa 610 mm Hg, 2- gorizontalda havo harorati +26ºC ga, 4- gorizontalda nisbiy namlik 60% ga teng. A nuqtadagi havo haroratini aniqlang,",["22°C","18°C","20°C","32°C"],2,"gx45_79"]);
GEO_OCHIQ.push(["A nuqtada me’yordagi (normal) atmosfera bosimi qayd etilgan bo‘lsa, B nuqtadagi havo bosimini aniqlang.",["700 mm Hg","720 mm Hg","740 mm Hg","750 mm Hg"],2,"gx45_80"]);
GEO_OCHIQ.push(["Hududining 2/3 qismi o‘rmon landshaftlari bilan band bo‘lgan davlat rasmda qaysi raqam bilan ko‘rsatilgan?",["1","2","3","4."],1,"gx45_81"]);
GEO_OCHIQ.push(["Rasmda ko‘rsatilgan jarayon sodir bo‘lmasligi uchun qanday chora- tadbirni amalga oshirish kerak?",["Yonbag‘irlarda suvli qatlamga tushadigan suv miqdorini kamaytirish kerak","Yonbag‘irlarda bostirib sug‘orish ishlarini olib borish","Yonbag‘irlarni o‘simlik qoplamidan tozalash ishlarini olib boorish","Yonbag‘ir yo‘nalishiga parallel shaklda bostirib sug‘orish ishlarini olib boorish"],0,"gx45_83"]);
GEO_OCHIQ.push(["Rasmda ko‘rsatilgan shamol turini aniqlang",["Briz","Musson","Passat","Fyon"],1,"gx45_84"]);
GEO_OCHIQ.push(["Ushbu xarita-sxemadagi yo‘nalish bo‘yicha sayyohlar A nuqtadan B nuqtaga borishlari uchun qaysi tabiat zonalaridan o‘tishlari kerak?",["Qattiq bargli doimiy yashil o‘rmonlar zonasidan chalacho‘llar zonasiga","Savannalardan nam ekvatorial o‘rmonlar zonasiga","Nam ekvatorial o‘rmonlar zonasidan savannalar zonasiga","Savannalardan chalacho‘l va cho‘l zonasiga"],2,"gx45_85"]);
GEO_OCHIQ.push(["Quyidagi balandlik mintaqalari shakllangan tog‘ qaysi tabiat zonasida joylashgan? 1 – o‘rmon-dasht va dasht; 2 – aralash va keng bargli o‘rmonlar; 3 – subalp o‘tloqlari; 4 – alp o‘tloqlari; 5 – tog‘ tundrasi; 6 – qor va muz zonasi",["tundra va o‘rmon tundra zonasida","o‘rmon-dasht va dasht zonasida","aralash va keng bargli o‘rmonlar zonasida","subekvatorial o‘rmonlar zonasida"],1,"gx45_86"]);
GEO_OCHIQ.push(["Xaritada A va B nuqtalar bilan qaysi orollar o‘rni ko‘rsatilgan?",["A-Grenlandiya, B-Gaiti","A-Viktoriya, B-Yamayka","A-Baffin Yeri, B-Kuba","A-Banks, B-Kuba"],2,"gx45_87"]);
GEO_OCHIQ.push(["Quyidagi xaritada 8 raqami bilan qaysi davlatbelgilangan?",["Angola","Chad","JAR","Namibiya"],3,"gx45_88"]);
GEO_OCHIQ.push(["Chizmadagi D va N nuqtalar qaysi yarimsharda joylashganini aniqlang.",["D-janubiy; N-janubiy","D-janubiy; N-shimoliy","D-shimoliy; N-shimoliy","D-shimoliy; N-janubiy."],3,"gx45_89"]);
GEO_OCHIQ.push(["Xaritadagi 2 va 8 raqamlari bilan qaysi davlatlar ko‘rsatilgan?",["Ummon va Yaman","Pokiston va Turkmaniston","Tailand va Pokiston","Iroq va Ummon"],0,"gx45_90"]);
GEO_OCHIQ.push(["Xaritadagi 2 raqami bilan qaysi tabiat zonasi ko‘rsatilgan?",["Sernam ekvatorial o‘rmonlar","Dashtlar","Qattiq bargli, doimiy yashil o‘rmonlar va butazorlar","Savanna va siyrak o‘rmonlar"],1,"gx45_91"]);
GEO_OCHIQ.push(["Rasmdagi qaysi harf bilan daryo irmoqlari belgilangan?",["C","D","E","F"],0,"gx45_92"]);
GEO_OCHIQ.push(["Atlantika okeanining g‘arbidagi botiqqa exolot orqali yuborilgan tovush 11,656 sekundda qaytib chiqqan bo‘lsa, ushbu botiqning chuqurligini va nomini aniqlang.",["10 047 m- Kermadek","8 742 m-Puerto-Riko","8 742 m-Zond","10 047 m-Puerto-Riko"],1,null]);
GEO_OCHIQ.push(["Agar harorati 10°C, nisiy namlik 90% ga teng bo‘lsa, 1m3 havo to‘yinishi uchun qancha suv bug‘I kerak?",["1,5 gr","0,9 gr","1,2 gr","2 gr"],1,null]);
GEO_OCHIQ.push(["Xaritada ajratib ko‘rsatilgan iqlim mintaqani toping;",["ekvatorial","tropik","subtropik","subekvatorial"],3,"gx45_95"]);
GEO_OCHIQ.push(["Xaritada A xarfi bilan qaysi qo‘ltiq ko‘rsatilgan?",["Katta Avstraliya","Karpentariya","Gvineya","Biskay"],1,"gx45_96"]);
GEO_OCHIQ.push(["Rasmda yer po‘stining harakatlari natijasida hosil bo‘lgan qaysi relyef shakli ko‘rsatilgan?",["Graben","Burmali tog‘","Jarlik","Gorst"],3,"gx45_97"]);
GEO_OCHIQ.push(["Quyidagi rasmda ob-havoning qaysi holati tasvirlangan? s",["Termik depressiya","Antisiklon","Siklon","Turbulentlik"],1,"gx45_98"]);
GEO_OCHIQ.push(["Quyidagi 1: 200 000 masshtabli topografik xaritada berilgan A va B nuqtalar oralig‘i xaritada 2,6 cm bo‘lsa, ular orasidagi haqiqiy masofani toping.",["5,2 km","2,6 km","1,3 km","4,2 km"],0,"gx45_99"]);
GEO_OCHIQ.push(["Quyidagi xaritada strelka bilan qaysi geografik obyekt ko‘rsatilgan?",["Drakon tog‘lari","Chad ko‘li","Livingston sharsharasi","Tanganika ko‘li"],3,"gx45_100"]);
GEO_OCHIQ.push(["Quyidagi rasmda qaysi ob-havo hodisalarining shartli belgisi ko‘rsatilgan?",["Bulduruq","Jala","Yomg‘ir","Do‘l"],1,"gx45_110"]);
GEO_OCHIQ.push(["Quyidagi rasmdan foydalangan holda yer po‘stining qalinligini aniqlang.",["25 – 35 km","35 – 40 km","35 – 45 km","30 – 55 km"],1,"gx45_111"]);
GEO_OCHIQ.push(["Quyidagi diagrammadan foydalanib, yillik yog‘in miqdorining necha foizi bahor mavsumiga to‘g‘ri kelishini aniqlang.",["24,1%","26,6%","37,1%","37,2"],3,"gx45_113"]);
GEO_OCHIQ.push(["Ushbu diagrammadan foydalanib, yillik ampilitudani toping.",["30°C","42° C","40°C","12°C"],2,"gx45_114"]);
GEO_OCHIQ.push(["Ushbu diagrammadan foydalanib, ampilitudani toping",["+5.25° C","+6.25° C","12° C","-8°C"],1,"gx45_115"]);
GEO_OCHIQ.push(["Quyidagi rasmda ko‘rsatilgan A nuqta orolning eng baland cho‘qqisiga nisbatan ufqning qaysi tomonida joylashganligini aniqlang.",["shimol","shimoli-sharq","shimoli-g‘arb","janubi-g‘arb."],1,"gx45_116"]);
GEO_OCHIQ.push(["Quyidagi xaritada A va B nuqtalar orasi 4,2 cm ga teng, ular orasidagi haqiqiy masofa 84 km. Xaritaning masshtabini aniqlang.",["1:20 000","1:20 000 000","1:2 000 000","1:200 000"],2,"gx45_118"]);
GEO_OCHIQ.push(["Quyidagi chizmadan foydalanib, A nuqtanning geografik koordinatasini aniqlang.",["15° j.k, 45° g‘b.u","15° sh.k, 45° g‘b.u","45° j.k, 15° shq.u","45° sh.k, 15° g‘b.u"],0,"gx45_119"]);
GEO_OCHIQ.push(["Quyidagi grafiklarning qaysi birida tog‘larda balandlik mintaqalari soni (X) va joyning geografik kengligi (Y) orasidagi bog‘lanish qonuniyati to‘g‘ri tasvirlangan? (Bir xil balandlikdagi tog‘ tizmalari)",["D","C","A","B"],0,"gx45_120"]);
GEO_OCHIQ.push(["Quyidagi diagrammada nima tasvirlangan?",["Gidrosferadagi suv tarkibi","Havoning gaz tarkibi","Havoning ifloslanish tarkibi","Okeanlar ulushi"],1,"gx45_121"]);
GEO_OCHIQ.push(["Quyidagi rasmda qanday jarayon tasvirlanganligini aniqlang.",["Litosfera plitalarining harakat mexanizmi","Litosfera plitalarining uyurmali harakati","Astenosfera qatlamidagi moddalar harakati","Mantiyadagi moddalar harakati"],0,"gx45_122"]);
GEO_OCHIQ.push(["Quyidagi xaritada 1 raqami bilan Hindistonning qaysi yirik shahri ko‘rsatilgan?",["Mumbay","Dehli","Kolkata","Chennay"],1,"gx45_125"]);
GEO_OCHIQ.push(["Rasmda ko‘rsatilgan A nuqtaning mutlaq balandligi 400 m, u yerdagi havo bosimi 720 mm Hg. B nuqtadagi havo bosimini aniqlang.",["610 mm Hg","570 mm Hg","600 mm Hg","580 mm Hg"],1,"gx45_127"]);
GEO_OCHIQ.push([". Quyidagi rasmda ko‘rsatilgan A nuqtadan Bosh meridiangacha bo‘lgan masofani aniqlang.",["3416 km","2558 km","3664 km","2220 km"],0,"gx45_129"]);
GEO_OCHIQ.push(["Janubiy tropik chizig‘i rasmda qaysi harf bilan ko‘rsatilgan?",["A","B","C","D"],1,"gx45_134"]);
GEO_OCHIQ.push(["Quyidagi 5(1000-2000) raqami bilan tasvirlangan relyef shaklini to‘g‘ri aniqlang.",["baland tog‘lar","o‘rtacha tog‘lar","Pasttekislik","Yassitog‘"],1,"gx45_135"]);
GEO_OCHIQ.push(["Ko‘lning 4-gorizontalida joylashgan qismiga exolotdan tovush yuborildi va 6 sekundda tovush qaytib keldi. 3- gorizontalida joylashgan qismiga yuborilgan tovush necha sekundda yetib boradi?",["2,66 sekund","2 sekund","3,75 sekund","4 sekund"],0,"gx45_137"]);
GEO_OCHIQ.push(["Quyidagi ma’lumotlar asosida Xiva shahridagi havoning yillik o‘rtacha harorati va amplitudasini toping.",["13,9℃ va 16℃","14,5℃ va 36℃","14,5℃ va 16℃","18,1℃ va 30℃"],1,"gx45_138"]);
GEO_OCHIQ.push(["Grafikda ko‘rsatilgan B nuqtadagi haroratni aniqlang.",["20,4⁰C","18,6⁰C","19,7⁰C","21,2⁰C"],0,"gx45_139"]);
GEO_OCHIQ.push(["Matnni o‘qing: “Relyefi asosan past va yassitog‘liklardan iborat. Shimol va sharqdan janub va g‘arbga tomon nishab. G‘arbiy va janubiy chekkalarida passtekisliklar joylashgan?",["I","IV","V","IX"],3,"gx45_142"]);
GEO_OCHIQ.push(["Quyida ko‘rsatilgan B nuqtadagi havo haroratini toping?",["27,6°C","27°C","26°C","26,4°C"],0,"gx45_143"]);
GEO_OCHIQ.push(["Rasmda 1 raqami bilan ko‘rsatilgan okean oqimi quyidagi qaysi cho‘lning shakllanishiga ta’sir qilgan?",["Tar","Atakama","Sahroyi Kabir","Namib"],2,"gx45_144"]);
GEO_OCHIQ.push(["Quyidagi xaritada dashtlar hamda sernam ekvatorial o‘rmonlar tabiat zonalari qaysi raqamlar bilan belgilanganligini aniqlang.",["4 va 1","2 va 1","3 va 1","3 va 4"],1,"gx45_145"]);
GEO_OCHIQ.push(["Farg‘ona viloyati bilan chegaradosh bo‘lgan qaysi davlatlarning hududi A va B harflar bilan ko‘rsatilgan?",["Tojikiston va Qirg‘iziston","Qozog‘iston va Qirg‘iziston","Qozog‘iston va Tojikiston","Qirg‘iziston va Turkmaniston"],0,"gx45_146"]);
GEO_OCHIQ.push(["Quyidagi diogramma asosida Qashqadaryo viloyatining 2023-yildagi o‘rtacha haroratini aniqlang.",["6,25˚C","12,08˚C","10,4˚C","7,6˚C"],0,"gx45_148"]);
GEO_OCHIQ.push(["Chizmada ko‘rsatilgan tabiiy geografik okrug hududidan oqib o‘tadigan daryolarni toping.",["2, 4","1, 2","1, 4","3, 4"],0,"gx45_150"]);
GEO_OCHIQ.push(["Quyidagi O‘rta Osiyoning yozuvsiz xaritasida A harfi bilan qaysi tabiiy geografik rayoni ko‘rsatilganligini aniqlang?",["Orolbo‘yi qumli cho‘llari","Janubiy yosh tog‘lar","Batxiz-qorabel qirlari","Janubiy tyanshan tog‘lari"],2,"gx45_151"]);
GEO_OCHIQ.push(["1:40000 ni nomli masshtabga aylantiring?",["1 smda 4 km","1 snda 400 km","1 smda 4 m","1 smda 400 m"],3,null]);
GEO_OCHIQ.push(["Berilgan tasvirdan foydalanib A nuqtadagi havo haroratini aniqlang.",["27,6˚C","20,4˚C","19,3˚C","18˚C"],3,"gx45_155"]);
GEO_OCHIQ.push(["Quyidagi grafik misolida qaraydigan bo‘lsak, qaysi yili tabiiy o‘sish eng past bo‘lgan?",["2015","2005","2010","1990"],3,"gx45_157"]);
GEO_OCHIQ.push(["5200 metr balandlikda havo harorati -8,6°C ni tashkil etdi. Shu vaqtda tog‘ etagidagi havo harorati qanchaga teng bo‘ladi?",["+28,2°C","+22,6°C","+31,2°C","25,4°C"],1,null]);
GEO_OCHIQ.push(["Quyidagi okean tubi relyefi rasmida shelf va okean botiqlari qaysi raqamlar bilan berilgan?",["3, 5","4, 6","2, 6","3, 4"],2,"gx45_159"]);
GEO_OCHIQ.push(["Berilgan tasvirda usta turgan nuqtaga nisbatan mayoqning yo‘nalish azimuti shimoli-sharq tomonga to‘g‘ri kelsa, zavodning yo‘nalish azimutini aniqlang?",["Janubi-g‘arb","Shimoliy-shimoli-g‘arb","Janub-janubi-sharq","Shimoli-g‘arb"],2,"gx45_161"]);
GEO_OCHIQ.push(["Tasvirdaga qaysi nuqtadaga paralell yoyi eng qisqa bo‘ladi?",["B","C","A","D"],3,"gx45_162"]);
GEO_OCHIQ.push(["Yevrosiyo materigining xaritasida B nuqta bilan qaysi tabiiy geografik o‘lkasi berilgan?",["Sharqiy sibir","Uzoq sharq","G‘arbiy sibir","Sharqiy Osiyo"],0,"gx45_163"]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda daryoning kundalang qirqimida daryo o‘zani qaysi harf bilan tasvirlangan?",["C","D","B","A"],3,"gx45_164"]);
GEO_OCHIQ.push(["Quyidagi tasvirdan foydalanib D nuqtaning koordinatasini toping.",["36˚ sh.k va 63˚ g‘b.u","49˚ jn.k va 67˚ shq.u","36˚ jn.k va 63˚ shq.u","49˚ sh.k va 67˚ g‘b.u"],0,"gx45_165"]);
GEO_OCHIQ.push(["Tasvirda berilgan B nuqtaning mutloq balandligi 1200 metr bo‘lsa, B va D nuqtaning nisbiy balandligini aniqlang? ( har bir gorizantall 300 metrdan )",["600 m","300 m","1800 m","1200 m"],0,"gx45_166"]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda yer va quyosh harakati bilan bog‘liq bo‘lgan Afeliy hodisasi qaysi raqam bilan berilgan?",["I","III","IV","I"],0,"gx45_168"]);
GEO_OCHIQ.push(["Tasvirdan foydalanib O‘zbekiston sanoat tarmoqlari tarkibida ishlab chiqarish hajmiga ko‘ra yengil sanoat va elektr energiya ko‘rsatgichlari qaysi raqamlar bilan berilganligini aniqlang?",["6 va 2","3 va 5","8 va 1","3 va 2"],0,"gx45_169"]);
GEO_OCHIQ.push(["Quyidagi tasvirdan foydalanib zilzila bo‘layotgan hududning gipotsentri qaysi raqamda berilganligini toping.",["4","2","3","1"],3,"gx45_170"]);
GEO_OCHIQ.push(["Berilgan tasvirda C nuqtaga nisbatan ufqning A tomoni shimoli-g‘arb tomonida joylashgan bo‘lsa, B nuqtani ufqning qaysi tomonida ekanligini aniqlang?",["Janubiy-janubi-g‘arb","Shimoliy-shimoli-g‘arb","Shimoliy-shimoli-sharq","Shimoliy-g‘arb-g‘arb"],2,"gx45_171"]);
GEO_OCHIQ.push(["Diogrammadan foydalanib mintaqa aholisi 2020-yilda necha kishiga ko‘payganini aniqlang.",["434 000","622 370","856 240","233 890"],1,"gx45_172"]);
GEO_OCHIQ.push(["Quyidagi yer qatlamlarining aragrafik tasviridan 2 raqami bilan qaysi qatlam berilgan?",["Cho‘kindi qatlam","Granit qatlam","Bazalit qatlam","Quyi mantiya"],1,"gx45_173"]);
GEO_OCHIQ.push(["Grafikdan foydalanib 2000-yilda mintaqa aholisi necha kishiga ko‘payganligini aniqlang. ( yil boshida 300 000 kishi )",["3400","1950","4500","8900"],1,"gx45_174"]);
GEO_OCHIQ.push(["Topografik xaritadan foydalanib masalani yeching. Matnni o‘qing: A harfi bilan berilgan gorizantallning mutloq balangligi 300 metrga teng bo‘lsa, B harfdagi gorizantallning mutloq balandligini aniqlang? ( Har bir garizantall 100 m )",["700 m","500 m","1300 m","800 m"],3,"gx45_175"]);
GEO_OCHIQ.push(["Grafikdan foydalanib II-raqamdagi huduning aholisi joriy yilda necha kishiga ko‘payganligini aniqlang. ( yil boshida hudud aholisi 4 000 000 kishi )",["40 000","20 000","5 600","48 000"],1,"gx45_176"]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda qaysi raqam ostida paralell yoylari eng uzun bo‘ladi?",["6","2","5","4"],2,"gx45_179"]);
GEO_OCHIQ.push(["Grafikdan foydalanib yillik amplitudani aniqlang?",["28˚C","30˚C","16˚C","24˚C"],0,"gx45_180"]);
GEO_OCHIQ.push(["Xaritada berilgan Yevrosiyo materigining tabiiy geografik o‘lkalari berilgan, C harfi bilan berilgan o‘lka nomini ko‘rsating?",["Sharqiy Yevropa","G‘arbiy Yevropa","Markaziy Osiyo","G‘arbiy Sibir"],0,"gx45_163"]);
GEO_OCHIQ.push(["Grafikdan foydalanib Bahor faslinig o‘rtacha yog‘in miqdorini aniqlang.",["89 mm","74 mm","100 mm","220 mm"],1,"gx45_182"]);
GEO_OCHIQ.push(["Berilgan tasvirda usta turgan nuqtaga nisbatan Daraxtning azimuti 45˚ ga teng bo‘lsa, Piramidaning azimut yo‘nalishini aniqlang.",["Shimoliy-g‘arb-g‘arb","Janubi-g‘arb","Shimoli-sharq","shimol"],3,"gx45_183"]);
GEO_OCHIQ.push(["Grafik asosida A va B nuqtalarning nisbiy balandligini aniqlang?",["200 m","250 m","450 m","300 m"],1,"gx45_185"]);
GEO_OCHIQ.push(["Quyidagi Afrika materigining yozuvsiz xaritasida A harfi bilan qaysi tabiat zonasi o‘rni Ko‘rsatilgan?",["Sernam ekvatorial o‘rmanlar","Savanna va siyrak o‘rmonlar","Fasliy nam o‘rmonlar","Chalacho‘llar va cho‘llar"],1,"gx45_186"]);
GEO_OCHIQ.push(["Agar Sayram cho‘qqisining har 90 metr balandligidan gorizontallar o‘tkazilsa, bu cho‘qqini nechta gorizontal kesib o‘tadi?",["43 ta","34 ta","28 ta","47 ta"],3,null]);
GEO_OCHIQ.push(["Berilgan topografik sxemada botiq tasvirlangan. Ushbu botiqning 4-raqamli gorizantal dengiz sathidan 400 m pastda bo‘lsa, 2-raqamli gorizantalning dengiz sathidan qancha pastda ekanligini aniqlang?",["300 m","200 m","400 m","140 m"],1,"gx45_190"]);
GEO_OCHIQ.push(["Tasvirdagi qaysi nuqtada havo harorati eng yuqori bo‘ladi?",["1","3","4","5"],2,"gx45_192"]);
GEO_OCHIQ.push(["Quyidagi berilgan topografik xaritada O‘rta osiyo tog‘laridan biri tasvirlangan bo‘lsa, 4-raqamli gorizontalda qaysi mintaqa berilganligini aniqlang.",["Cho‘l mintsqasi","Chalacho‘llar mintaqasi","Dasht mintaqasi","O‘rmon dasht va o‘rmon mintaqasi"],0,"gx45_194"]);
GEO_OCHIQ.push(["Quyidagi tasvirda 3 - raqami uchun eng xos javob variantini aniqlang.",["Keng bargli o‘rmonlar","Aralash o‘rmonlar","Tayga","Subalp va alp o‘tloqlari"],1,"gx45_195"]);
GEO_OCHIQ.push(["Quyidagi topografik chizmada har bir gorizontal 500 metrdan o‘tgan. 4 va 2-gorizontallarda tasvirlangan nuqtalarning havo haroratlari orasidagi farqlarni aniqlang”",["6°C","12°C","4,5°C","7,6°C"],0,"gx45_196"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida 2000-yilda shahar aholisi tabiiy va mexanik o‘sish hisobiga necha kishiga ko‘payganini aniqlang. (jami aholi yil boshida 100 000 kishi).",["400","1100","500","4000"],0,"gx45_197"]);
GEO_OCHIQ.push(["Grafikdagi ma’lumotlar asosida o‘lim va emigratsiya hisobiga aholi soni kamayishining eng past ko‘rsatgichi qaysi yilda qayd etilganini aniqlang.",["2000","1990","2015","1995"],1,"gx45_198"]);
GEO_OCHIQ.push(["10-soat mintaqasida joylashgan A nuqtada 2-mart soat 01:50 bo‘lsa, B nuqtadagi sanani va vaqtni toping.",["1-mart, 05:50","2-mart, 05:50","3-mart, 04:50","1-mart, 03:50"],0,"gx45_199"]);
GEO_OCHIQ.push(["0° janubiy kenglik va 10° Janubiy kenglik orasida joylashgan nuqtani aniqlang.",["Atlas","Efiopiya tog‘lari","Sharqiy Afrika yassitog‘ligi","Kap to‘g‘lari"],2,"gx45_200"]);
GEO_OCHIQ.push(["Agar quyidagi chizmada gorizontallar har 50 metrdan o‘tkazilgan bo‘lsa, A nuqtaning mutlaq balandligini aniqlang.",["1050 m","950 m","1000 m","1400 m"],0,"gx45_201"]);
GEO_OCHIQ.push(["Agar 110° sharqiy uzunlikdagi meridianda kunduzi tush payti (mahalliy vaqt 12:00) bo‘lsa, qaysi meridianda ertalab (mahalliy vaqt 06:00)bo‘ladi?",["20° shq.u.","180° shq.u.","135° g‘b.u.","165° shq.u."],0,null]);
GEO_OCHIQ.push(["Berilgan tasvir uchun quyidagi javob variantlaridan qaysi biri III raqamga mos kelishini toping?",["Cho‘l","Adir","Yaylov","Tog‘"],3,"gx45_147"]);
GEO_OCHIQ.push(["O‘rta Osiyoning sxematik xaritasida Balxashbo‘yi tekisligi qaysi raqam bilan berilganligini aniqlang?",["1","2","3","4"],3,"gx45_204"]);
GEO_OCHIQ.push(["Quyidagi O‘rta Osiyoning yozuvsiz xaritasida B harfi bilan qaysi tabiiy geografik rayoni ko‘rsatilganligini aniqlang?",["Markaziy Tyanshan to‘g‘lari","Janubiy yosh tog‘lar","Batxiz-qorabel qirlari","Janubiy tyanshan tog‘lari"],0,"gx45_151"]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda yer va quyosh harakati bilan bog‘liq bo‘lgan perigeliy hodisasi qaysi raqam bilan berilgan?",["II","III","IV","I"],1,"gx45_168"]);
GEO_OCHIQ.push(["Berilgan tasvirdan foydalanib A nuqtadagi havo haroratini aniqlang.",["27,6˚C","20,4˚C","19,3˚C","18˚C"],3,"gx45_155"]);
GEO_OCHIQ.push(["Quyidagi okean tubi relyefi rasmida dengiz sathi va abissal qaysi raqamlar bilan berilgan?",["3, 5","4, 6","2, 6","1, 6"],3,"gx45_159"]);
GEO_OCHIQ.push(["Berilgan tasvirda usta turgan nuqtaga nisbatan zavodning yo‘nalish azimuti shimoli-g‘arb tomonga to‘g‘ri kelsa, mayoqning yo‘nalish azimutini aniqlang?",["Janubi-g‘arb","Shimoliy-shimoli-g‘arb","Shimoliy-sharq-sharq","Shimoli-g‘arb"],2,"gx45_161"]);
GEO_OCHIQ.push(["Toshkent shahrida (geografik koordinatasi 41° sh.k va 69° shq.u) turgan sayyoh soat 12:00 da Izmir shahrida (uning geografik koordinatasi 38°24ꞌsh.k va 27°09ꞌshq.u) turgan sayyohga qo‘ng‘iroq qildi, xuddi shu vaqtda Izmir shahrida soat necha bo‘lganini aniqlang?",["9:12","14:32","10:12","15:00"],0,null]);
GEO_OCHIQ.push(["Yevrosiyo materigining xaritasida A nuqta bilan qaysi tabiiy geografik o‘lkasi berilgan?",["Sharqiy sibir","Markaziy Osiyo","G‘arbiy sibir","Sharqiy Osiyo"],1,"gx45_163"]);
GEO_OCHIQ.push(["Quyida berilgan tasvirda daryoning kundalang qirqimida daryo qayiri qaysi harf bilan tasvirlangan?",["C","D","B","A"],2,"gx45_164"]);
GEO_OCHIQ.push(["Quyidagi jadval asosida olimlar va ularga tegishli bo‘lgan asarlarni moslashtiring.",["I-d, II-a","I-b, II-c","I-a, II-b","I-c, II-a"],3,"gx45_213"]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining yozuvsiz xaritasida 5 raqami ostida qaysi iqlim mintaqasi berilganligini aniqlang?",["Tropik","Subtropik","Mo‘tadil","Subekvotorial"],0,"gx45_214"]);
GEO_OCHIQ.push(["Quyidagi tasvirdan foydalanib zilzila bo‘layotgan hududning epotsentri qaysi raqamda berilganligini toping.",["4","2","3","1"],1,"gx45_170"]);
GEO_OCHIQ.push(["Berilgan tasvirda C nuqtaga nisbatan ufqning A tomoni sharq tomonida joylashgan bo‘lsa, B nuqtani ufqning qaysi tomonida ekanligini aniqlang?",["Janubiy-janubi-g‘arb","Shimoliy-shimoli-g‘arb","janub-janubi-sharq","Shimoliy-g‘arb-g‘arb"],2,"gx45_171"]);
GEO_OCHIQ.push(["Diagrammadan foydalanib mintaqa aholisi 2015-yilda necha foizga (%) ko‘payganini aniqlang.",["1,4%","0,5%","1,9%","0,9%"],2,"gx45_172"]);
GEO_OCHIQ.push(["Quyidagi yer qatlamlarining aragrafik tasviridan 6 raqami bilan qaysi qatlam berilgan?",["Cho‘kindi qatlam","Granit qatlam","Bazalit qatlam","Quyi mantiya"],3,"gx45_173"]);
GEO_OCHIQ.push(["Shimoliy Amerika materigining yozuvsiz Xaritasida 2 va 4 raqamlar bilan qaysi yarimorol va qo‘ltiq tasvirlangan?",["Kaliforniya, Alyaska","Vankuver, Meksika","Labrador, Gudzon","Kalifoniya, Gudzon"],2,"gx45_220"]);
GEO_OCHIQ.push(["Ushbu tasvirdagi 1-raqamdagi nuqtaning mutloq balandligi 4200 m, 1 va 3- nuqtalarning nisbiy balandligi 2800 m ga teng, 4-nuqtada harorat 0˚ C ga teng bo‘lsa, 3-nuqtadagi havo bosimni aniqlang.",["550 mm Hg","630 mm Hg","620 mm Hg","650 mm Hg"],2,"gx45_177"]);
GEO_OCHIQ.push(["Berilgan tasvir uchun quyidagi javob variantlaridan qaysi biri IV raqamga mos kelishini toping?",["Cho‘l","Adir","Yaylov","Tog‘"],2,"gx45_147"]);
GEO_OCHIQ.push(["Agar havo harorati +30° C, havoning nisbiy namligi 70 % bo‘lsa, 1 m3 havoning to‘yinishi uchun qancha suv bug‘i kerak bo‘ladi? (30℃ haroratda 1 m3 havo o‘zida 30 g suv bug‘ini tutib tura oladi)",["7.6 g","11 g","9 g","13 g"],2,null]);
GEO_OCHIQ.push(["Topografik xaritada Akonkagua cho‘qqisining har 100 metr balandligidan gorizontallar o‘tkazilsa, bu cho‘qqini nechta gorizontallar bilan tasvirlash mumkin?",["69 ta","56 ta","67 ta","58 ta"],0,null]);
GEO_OCHIQ.push(["A nuqtaning mutloq balandligi 4320 metr, B nuqtada Havo harorati -16˚ C ga teng, B nuqta va C nuqta orasidagi nisbiy balandlik 260 metr, D nuqtada harorat 0˚ C bo‘lsa, C nuqtadagi havo bosimi va haroratini toping?",["368 mm Hg, -16,6˚ C","567,4 mm Hg, 11,3˚ C","467,4 mm Hg, -17,6˚ C","612,3 mm Hg, 18,7˚ C"],2,"gx45_226"]);
GEO_OCHIQ.push(["Tog‘ning nisbiy balandligi 4200 m bo‘lib, cho‘qqisida havo harorati -7℃ bo‘lsa, tog‘ etagida havo harorati qanchaga teng bo‘lishini aniqlang.",["24,6℃","24,8℃","18,2℃","-24,6℃"],2,null]);
GEO_OCHIQ.push(["Tog‘ etagida havo harorati 15,5℃, cho‘qqisida esa -2,8℃ ga teng bo‘lsa, cho‘qqining nisbiy balandligini aniqlang.",["2783 m","3050 m","6700 m","2934 m"],1,null]);
GEO_OCHIQ.push(["Quyidagi xarita-chizmada Bo‘kantov va Tomditov To‘g‘lari qaysi raqam bilan berilgan?",["5 va 1","1 va 3","1 va 4","2 va 5"],1,"gx45_229"]);
GEO_OCHIQ.push(["Quyida ko‘rsatilgan B nuqtadagi havo haroratini toping?",["27,6°C","27°C","26°C","26,4°C"],0,"gx45_232"]);
GEO_OCHIQ.push(["22-iyun kuni Quyishning tik tepadan o‘tishi quyidagi rasmda qaysi raqam bilan belgilangan?",["1","2","6","5"],1,"gx45_234"]);
GEO_OCHIQ.push(["Quyidagi grafikda hudud aholisi tabiiy va mexanik o‘sish hisobiga 2000- yilda necha kishiga ko‘payganini aniqlang? ( Shahar aholisi yil boshida 200 000 kishi ).",["1200 kishi","2300 kishi","1400 kishi","2000 kishi"],2,"gx45_235"]);
GEO_OCHIQ.push(["Quyida berilgan daryolar sistemasi tasvirida daryo mansabi qaysi raqam bilan berilgan?",["2","3","6","3"],2,"gx45_236"]);
GEO_OCHIQ.push(["Rasmda “g” harfi bilan daryo vodiysini qaysi elementi ko‘rsatilgan?",["estuariy","irmoqlar","suvayirg‘ich","daryo manbai"],1,"gx45_238"]);
GEO_OCHIQ.push(["Jahon xo‘jaligining asosiy sohalari birlashtirilgan sektorlar va ularga tegishli bo‘lgan korxonalar to‘g‘ri moslashtirilgan javobni toping. 1) birlamchi sektor 2) ikkilamchi sektor 3) uchlamchi sektor a) “Milliy” stadion b) “Xadicha” buyurtmaxonasi c) Sherabod sement zavodi",["1-b, 2-c, 3-a","1-c, 2-a, 3-b","1-a, 2-b, 3-c","1-a, 2-c, 3-b"],0,null]);
GEO_OCHIQ.push(["Agar 45◦ sharqiy uzunlikdagi meridianda kunduzi tush payti (mahalliy vaqt 12:00) bo‘lsa, qaysi meridianda ertalab (mahalliy vaqt 06:00) bo‘ladi?",["45◦ g‘.u.","135◦ shq.u.","135◦ g‘.u.","165◦ shq.u"],0,null]);
GEO_OCHIQ.push(["Hayotboshi cho‘qqisidan uning adirlarigacha bo‘lgan nisbiy balandlik 1800 metr. Agar Hayotboshi cho‘qqisida havo harorati +18 ℃ ni tashkil etsa, uning etagidagi adirlarda havo harorati necha gradusga teng bo‘ladi?",["26,8°C","28,8°C","24,6°C","30,8°C"],1,null]);
GEO_OCHIQ.push(["Quyidagi xaritada IV va V raqamlari qaysi obyektlar tasvirlangan?",["Nurota, Turkiston tog‘lari","Qo‘ytosh, Zarafshon tizmasi","Nurota, Qo‘ytosh tog‘lari","Aydarko‘l, Tuzkon ko‘llari"],2,"gx45_258"]);
GEO_OCHIQ.push(["Yevropaning yozuvsiz xaritasida 1 va 2 raqamlar bilan qaysi davlatlar tasvirlangan?",["Polsha va Vengriya","Germaniya va Ruminiya","Fransiya va Chexiya","Germaniya va Slovakiya"],1,"gx45_262"]);
GEO_OCHIQ.push(["Havo harorati +20⁰C bo‘lganda, nisbiy namlik 60% ga teng bo‘lsa, 1 metr kub havodagi namlik miqdorini aniqlang.",["8,9 gramm","9,6 gramm","11,4 gramm","10,2 gramm"],3,null]);
GEO_OCHIQ.push(["Berilgan rasm quyidagi qaysi qonuniyatni o‘zida namoyon etadi?",["Sektorlik","Koriolis kuchi","Balandlik mintaqalanishi","Zonallik"],1,"gx45_266"]);
GEO_OCHIQ.push(["100° sharqiy uzunlikdagi meridian Yevroosiyo materigini 76° shimoliy kenglik va 13° shimoliy kenglikda kesib o‘tsa, Yevoosiyo materigi ushbu meridian bo‘ylab qancha masofaga cho'zilgan?",["7345 km","5634 km","6289 km","6993 km"],3,null]);
GEO_OCHIQ.push([". Quyidagi rasmda alohida rang bilan belgilangan hududlar qaysi tabiat zonasida joylashgan?",["Balandlik mintaqalari","Savanna va siyrak o‘rmonlar","Qattiq bargli doimiy yashil o‘rmonlar va butazorlar","Chalacho‘l va cho‘llar"],3,"gx45_268"]);
GEO_OCHIQ.push(["Quyidagi chizmada II raqami ostida qaysi ko‘l tasvirlangan?",["Arnasoy","Shardara","Tuzkon","Aydarko‘l"],2,"gx45_269"]);
GEO_OCHIQ.push(["Quyidagi chizmada VI raqami ostida qaysi obyekt tasvirlangan?",["Nurota","Zarafshon","Morguzar","Turkiston"],1,"gx45_270"]);
GEO_OCHIQ.push(["Jadval ma’lumoti asosida topshiriqni bajaring? Soat 10::00 da 1m3 havoning to‘yinishi uchun necha gramm suv bug‘i kerak bo‘lishini aniqlang.",["23,4 g","21,3 g","11,6 g","6,6 g"],3,"gx45_272"]);
GEO_OCHIQ.push(["Quyidagi xaritada Qizilqum cho‘li qaysi raqam ostida berilgan?",["6","5","7","3"],0,"gx45_273"]);
GEO_OCHIQ.push(["Tog‘ etagidagi mutlaq balandligi 442 metr bo‘lgan A va shu tog‘ cho‘qqisidagi B nuqtalar orasidagi nisbiy balandlik 750 metrni tashkil qiladi. Agar A nuqtada havo bosimi 752 mm Hg bo‘lsa, B nuqtadagi havo bosimini aniqlang.",["623 mm Hg","762 mm Hg","742 mm Hg","677 mm Hg"],3,null]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritada Pireney, Hindiston va Arabiston yarimorollari qaysi raqamlar bilan belgilanganligini mos ravishda toping.",["1, 4, 2","2, 5, 4","1, 3, 6","3, 5, 6"],0,"gx45_275"]);
GEO_OCHIQ.push(["Yarimsharlar xaritasidan foydalanib topshiriqlarni bajaring. Xaritadagi G nuqtada (140° g‘.u) mahalliy vaqt 14:00 bo‘lganda D(160° shq.u) nuqtadagi mahalliy vaqtni toping.",["04:00","20:00","14:00","17:00"],2,"gx45_277"]);
GEO_OCHIQ.push(["Samolyot Toshkentdan soat 11:00 da uchib ketib, Tokioga u yerdagi vaqt bilan soat 19:00 da qo‘ndi. Toshkent IV-soat mintaqasi, Tokio esa IX-soat mintaqasida joylashgan bo‘lsa, samolyot ikki shahar orasidagi parvozni qancha vaqtda amalga oshirgan?",["5 soat","3 soat","4 soat","7 soat"],1,null]);
GEO_OCHIQ.push(["Quyidagi yozuvsiz xaritadan 4 raqami bilan qaysi hudud tasvirlanganligini aniqlang?",["Alyaska y.o","Kaliforniya y.o","Florida y.o","Labrador y.o"],0,"gx45_281"]);
GEO_OCHIQ.push(["Quyidagi grafik va jadvaldan foydalanib soat 13:00 da havoning namga to‘yinishi uchun qancha suvi kerakligini aniqlang?",["18 gr","5.2 gr","12 gr","15 gr"],2,"gx45_283"]);
GEO_OCHIQ.push(["Ushbu diagrammadan foydalanib, yillik ampilitudani toping.",["30°C","42°C","40°C","12°C"],2,"gx45_284"]);
GEO_OCHIQ.push(["Urganch shahrida yil davomida quyidagi o‘rtacha oylik haroratlar kuzatildi: Yanvar -4,8℃; fevral 1,7℃; mart 4,8℃; aprel 13,9℃; may 21,1℃; iyun 25,7℃; iyul 27,5℃; avgust 25,2℃; sentabr 19℃; oktabr 11,1℃; noyabr 3,3℃; dekabr 2,3℃. Ushbu ma’lumotlar asosida Urganch shahridagi o‘rtacha yillik haroratni aniqlang.",["14,8℃","12,5℃","33,3℃","18,8℃"],1,null]);
GEO_OCHIQ.push(["Quyidagi rasmda Zond va Tonga cho‘kmalari qaysi raqamlar bilan ko‘rsatilgan?",["4 va 7","3 va 6","1 va 2","5 va 6"],3,"gx45_288"]);
GEO_OCHIQ.push(["Materiklar va ularga oid ma’lumotlar to‘g‘ri moslashtirilgan javobni toping. 1) Avstraliya; 2) Yevrosiyo; 3) Afrika a) bu yerda ekvatorial o‘rmonlar zonasi gileya deb ham ataladi; b) Materikning g‘arbiy qismida qattiq bargli o‘rmonlar va butalar, janubi-sharqida evkalipt o‘rmonlari mavjud; c) Tropik mintaqada chalacho‘l va cho‘l zonalari hamda savannalar mavjud, iyulning o‘rtacha harorati +30° ga teng; d) O‘lkada qimmatbaho mebellar ishlanadigan qizil daraxt, seyba, palma, muskat daraxtlari o‘sadi; e) Cho‘l zonasida efemer o‘simliklar bilan birga doimiy yashil butazorlar (evkalipt, akatsiya) dan iborat o‘tib bo‘lmas changalzorlar mavjud; f) Aralash o‘rmonlar materikning g‘arbiy va sharqiy qismlarida joylashgan, asosiy qismi chimli podzol tuproqlar bilan qoplangan.",["1-b, e 2-a, c 3-d, f","1-a, f 2-b, d 3-c,e","1-b, e 2-c, f 3-a, d","1-a, b, 2-c, e 3-d,f"],2,"gx45_289"]);
GEO_OCHIQ.push(["Sargasso dengizining 500 litr suvidan qancha tuz olsa bo‘ladi?",["21 kg","18,5 kg","19,5 kg","23,5 kg"],1,null]);
GEO_OCHIQ.push(["Yozuvsiz xaritada Surxondaryo viloyatining Jarqo‘rg‘on va Denov sanoat punktlari qaysi raqamlar bilan tasvirlangan?",["2 va 3","1 va 4","5 va 3","2 va 4"],0,"gx45_295"]);
GEO_OCHIQ.push(["Afrikaning yozuvsiz xaritasida 1 va 2 raqamlar bilan qaysi tabiiy geografik obyektlari ifodalangan?",["Atlas tog‘lari va Kap tog‘lari","Axaggar tog‘lari va Drakon tog‘lari","Darfur platasi va Namib cho‘li","Kattara botig‘i va Efiopiya tog‘i"],2,"gx45_297"]);
GEO_OCHIQ.push(["Xaritada berilgan qaysi raqam bilan Afrika materigining dengiz sathidan eng past nuqtasi ko‘rsatilgan?",["2","4","1","3"],0,"gx45_299"]);
