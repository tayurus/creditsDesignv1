<?php

	class viewWalletInfo{

		private $array = array();

		public function __construct(){
		}

		public function index(){
			$array = array(
				'cours' 	=> '5000',
				'credits'	=> rand(1000,100000),
				'key'		=> GetRandString(64),
				'address'	=> GetRandString(64)
			);

			return $array;
		}


	}

?>
